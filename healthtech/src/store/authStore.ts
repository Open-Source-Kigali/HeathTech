import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/types/auth";


let inMemoryToken: string | null = null;

// ─── Auth State ──────────────────────────────────────────────────────────────
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
        document.cookie = `accessToken=${accessToken}; path=/; max-age=${60 * 60 * 24 * 7
          }; SameSite=Strict`;
        set({ user, isAuthenticated: true });
      },

      clearAuth: () => {
        inMemoryToken = null;
        document.cookie = "accessToken=; path=/; max-age=0; SameSite=Strict";

        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: "healthtech-auth",
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);