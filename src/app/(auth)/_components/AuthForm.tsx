"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useLogin } from "../_hooks/useLogin";
import { useRegister } from "../_hooks/useRegister";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const loginSchema = z.object({
  email: z.email({ error: "Please enter a valid email address." }),
  password: z.string().min(1, "Password is required."),
});

const signupSchema = z.object({
  email: z.email({ error: "Please enter a valid email address." }),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

type AuthFormValues = z.infer<typeof signupSchema>;

interface AuthFormProps {
  mode: "login" | "signup";
}

export function AuthForm({ mode }: AuthFormProps) {
  const isLogin = mode === "login";
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: login, isPending: isLoggingIn } = useLogin();
  const { mutate: register, isPending: isRegistering } = useRegister();
  const isPending = isLoggingIn || isRegistering;

  const form = useForm<AuthFormValues>({
    resolver: zodResolver(isLogin ? loginSchema : signupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: AuthFormValues) {
    if (isLogin) {
      login(data, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["user"] });
          router.push("/");
          router.refresh();
        },
        onError: (error) => {
          form.setError("root", {
            type: "server",
            message: error.message,
          });
        },
      });
    } else {
      register(data, {
        onSuccess: () => {
          toast.success("Registration successful", {
            description: "Please log in with your new credentials.",
          });
          router.push("/login");
        },
        onError: (error) => {
          form.setError("root", {
            type: "server",
            message: error.message,
          });
        },
      });
    }
  }

  const formId = `${mode}-form`;

  return (
    <form
      id={formId}
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-4"
    >
      {form.formState.errors.root && (
        <div className="form-submission-error">
          {form.formState.errors.root.message}
        </div>
      )}

      <FieldGroup>
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={`${mode}-email-input`}>Email</FieldLabel>
              <Input
                {...field}
                id={`${mode}-email-input`}
                type="email"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={`${mode}-password-input`}>
                Password
              </FieldLabel>
              <Input
                {...field}
                id={`${mode}-password-input`}
                type="password"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <div className="flex flex-col">
        <Button
          type="submit"
          form={formId}
          className="btn-surface btn-lg"
          disabled={isPending}
        >
          {isLogin
            ? isPending
              ? "Logging in..."
              : "Login"
            : isPending
            ? "Creating Account..."
            : "Create Account"}
        </Button>
      </div>
    </form>
  );
}
