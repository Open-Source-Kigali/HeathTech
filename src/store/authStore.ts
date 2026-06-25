import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/types/auth";

// Access token lives in memory only — never localStorage
let inMemoryToken: string | null = null;

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  getToken: () => string | null;
  setAuth: (user: User, accessToken: string) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      getToken: () => inMemoryToken,

      setAuth: (user, accessToken) => {
        inMemoryToken = accessToken;
        set({ user, isAuthenticated: true });
      },

      clearAuth: () => {
        inMemoryToken = null;
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: "clinicsync-auth",
      // Only persist non-sensitive user info
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);