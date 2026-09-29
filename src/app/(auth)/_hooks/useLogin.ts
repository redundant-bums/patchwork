import { useMutation } from "@tanstack/react-query";
import { login } from "../actions";

interface AuthCredentials {
  email: string;
  password: string;
}

export function useLogin() {
  return useMutation({
    mutationFn: async (credentials: AuthCredentials) => {
      const formData = new FormData();
      formData.append("email", credentials.email);
      formData.append("password", credentials.password);

      const response = await login(formData);

      if (response?.error) {
        throw new Error(response.error);
      }

      return response;
    },
  });
}
