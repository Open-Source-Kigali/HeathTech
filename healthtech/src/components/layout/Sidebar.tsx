"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Users,
  CalendarDays,
  FlaskConical,
  LayoutDashboard,
  LogOut,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Patients",
    href: "/patients",
    icon: Users,
  },
  {
    label: "Appointments",
    href: "/appointments",
    icon: CalendarDays,
  },
  {
    label: "Laboratory",
    href: "/laboratory",
    icon: FlaskConical,
    badge: "New",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col justify-between py-6 px-4">
      {/* Logo */}
      <div>
        <div className="mb-8 px-2">
          <span className="text-xl font-bold tracking-tight">Healthtech</span>
          <p className="text-slate-400 text-xs mt-1">Clinic Management</p>
        </div>

        {/* Nav Items */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-white text-slate-900"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                )}
              >
                <item.icon size={18} />
                <span className="flex-1">{item.label}</span>
                {item.badge && (
                  <Badge className="bg-blue-500 text-white text-xs px-1.5 py-0">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col gap-1">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <Settings size={18} />
          Settings
        </Link>
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors w-full text-left">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}