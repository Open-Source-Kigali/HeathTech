"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { loginSchema, type LoginFormData } from "../types";
import { useAuthStore } from "@/store/authStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
const [showPassword, setShowPassword] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [rememberMe, setRememberMe] = useState(false);
const router = useRouter();
const setAuth = useAuthStore((state) => state.setAuth);
const { register, handleSubmit, formState: { errors },} = useForm<LoginFormData>({ resolver: zodResolver(loginSchema),});

const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      // TODO: replace with real API call when backend is ready
      const mockResponse = {
        user: {
          id: "1",
          name: "Dr. John Doe",
          email: data.email,
          role: "doctor" as const,
          createdAt: new Date().toISOString(),
        },
        accessToken: "mock-token-12345",
      };
      setAuth(mockResponse.user, mockResponse.accessToken);
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <div className="h-8 w-8 rounded-lg bg-teal-500 flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
        <span className="text-lg font-bold text-slate-800">Healthtech</span>
      </div>

      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Welcome back</h1>
        <p className="text-slate-400 text-sm mt-1">
          Welcome back! Please enter your details.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-slate-700 font-medium">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            disabled={isLoading}
            className="h-11"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <Label htmlFor="password" className="text-slate-700 font-medium">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              disabled={isLoading}
              className="h-11 pr-10"
              {...register("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password.message}</p>
          )}
        </div>

        {/* Remember me + Forgot password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-slate-300 text-teal-500 accent-teal-500"
            />
            <span className="text-sm text-slate-600">Remember for 30 days</span>
          </label>
          <Link
            href="/forgot-password"
            className="text-sm text-teal-600 hover:underline font-medium"
          >
            Forgot password?
          </Link>
        </div>

        {/* Sign in Button */}
        <Button
          type="submit"
          className="w-full h-11 bg-teal-500 hover:bg-teal-600 text-white font-medium hover:cursor-pointer"
          disabled={isLoading}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? "Signing in..." : "Sign in"}
        </Button>

        {/* Google Sign in */}
        <Button
          type="button"
          variant="outline"
          className="w-full h-11 font-medium hover:cursor-pointer"
          disabled={isLoading}
        >
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Sign in with Google
        </Button>

        <p className="text-center text-sm text-slate-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-teal-600 hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}