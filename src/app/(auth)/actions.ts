"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const identifier = formData.get("email") as string;
  const password = formData.get("password") as string;

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  let email = identifier;

  // If the user entered a username (no @), look up their email address
  if (!identifier.includes("@")) {
    const { data: userEmail, error: lookupError } = await supabase.rpc(
      "get_email_by_username",
      { username_input: identifier.trim() }
    );

    if (lookupError || !userEmail) {
      return { error: "Invalid login credentials." };
    }

    email = userEmail;
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  return { success: true };
}

export async function register(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const username = formData.get("username") as string;

  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: username.trim(),
      },
    },
  });

  if (error) {
    // If the database trigger rejected it due to duplicate username
    if (
      error.message.includes("profiles_username") ||
      error.message.toLowerCase().includes("duplicate")
    ) {
      return { error: "Username is already taken." };
    }
    return { error: error.message };
  }

  revalidatePath("/", "layout");
  return { success: true };
}

export async function logout() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signOut();

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/", "layout");

  redirect("/login");
}
