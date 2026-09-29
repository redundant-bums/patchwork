import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

export function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) throw new Error(error.message);
      return data.user;
    },
  });
}
