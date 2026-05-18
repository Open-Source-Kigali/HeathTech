"use client";

import { useAuthStore } from "@/store/authStore";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  const user = useAuthStore((state) => state.user);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          {getGreeting()}, {user?.name ?? "there"} 👋
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Here&apos;s what&apos;s happening at the clinic today.
        </p>
      </div>
      <Button variant="outline" size="icon" className="relative">
        <Bell size={18} />
        <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
          3
        </span>
      </Button>
    </div>
  );
}