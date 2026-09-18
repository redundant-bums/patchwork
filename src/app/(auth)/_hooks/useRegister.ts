import { useMutation } from "@tanstack/react-query";
import { register } from "../actions";

interface AuthCredentials {
  email: string;
  password: string;
  username?: string;
}

export function useRegister() {
  return useMutation({
    mutationFn: async (credentials: AuthCredentials) => {
      const formData = new FormData();
      formData.append("email", credentials.email);
      formData.append("password", credentials.password);
      if (credentials.username) {
        formData.append("username", credentials.username);
      }

      const response = await register(formData);

      if (response?.error) {
        throw new Error(response.error);
      }

      return response;
    },
  });
}
