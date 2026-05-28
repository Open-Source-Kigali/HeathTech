"use client";

import { Search, Moon, MessageCircle, Bell, LogOut } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function TopHeader() {
  const user = useAuthStore((state) => state.user);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const router = useRouter();

  const handleLogout = () => {
    clearAuth();
    router.push("/login");
  };

  return (
    <header className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-6 shrink-0">
      {/* Search */}
      <div className="relative w-72">
        <Search
          size={15}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <Input
          placeholder="Search patients..."
          className="pl-9 h-9 bg-slate-50 border-slate-200 text-sm"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2">
        {/* Dark mode */}
        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600">
          <Moon size={18} />
        </Button>

        {/* Messages */}
        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600 relative">
          <MessageCircle size={18} />
        </Button>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-600 relative">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full" />
        </Button>

        {/* Divider */}
        <div className="w-px h-6 bg-slate-200 mx-1" />

        {/* User Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3 hover:bg-slate-50 rounded-xl px-2 py-1.5 transition-colors">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-teal-500 text-white text-xs font-semibold">
                  {user?.name ? getInitials(user.name) : "U"}
                </AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="text-sm font-semibold text-slate-800 leading-none">
                  {user?.name ?? "User"}
                </p>
                <p className="text-xs text-slate-400 mt-0.5 capitalize">
                  {user?.role?.replace("_", " ") ?? ""}
                </p>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-red-500 focus:text-red-500"
              onClick={handleLogout}
            >
              <LogOut size={14} className="mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}