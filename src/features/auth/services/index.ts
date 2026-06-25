import api from "@/lib/axios";
import { AuthResponse, LoginCredentials, RegisterCredentials } from "@/types/auth";

export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>("/auth/login", credentials);
    return response.data;
  },

  register: async (credentials: Omit<RegisterCredentials, "confirmPassword">): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>("/auth/register", credentials);
    return response.data;
  },

  logout: async (): Promise<void> => {
    await api.post("/auth/logout");
  },

  me: async (): Promise<AuthResponse> => {
    const response = await api.get<AuthResponse>("/auth/me");
    return response.data;
  },
};