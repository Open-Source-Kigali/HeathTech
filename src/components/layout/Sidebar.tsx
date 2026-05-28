"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {LayoutDashboard, CalendarDays, Users, FlaskConical, Settings, FileText, ChevronLeft} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/authStore";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    badge: null,
  },
  {
    label: "My Appointments",
    href: "/appointments",
    icon: CalendarDays,
    badge: 5,
  },
  {
    label: "Patients",
    href: "/patients",
    icon: Users,
    badge: 12,
  },
  {
    label: "Prescriptions",
    href: "/prescriptions",
    icon: FileText,
    badge: null,
  },
  {
    label: "Lab Results",
    href: "/laboratory",
    icon: FlaskConical,
    badge: 3,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
    badge: null,
  },
];

const summary = [
  { label: "Appointments", value: 8 },
  { label: "Pending Results", value: 3 },
  { label: "New Messages", value: 2 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-slate-100 flex flex-col justify-between py-6 px-4 shrink-0">
      {/* Top */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-2 mb-12 px-2">
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

        {/* Section Label */}
        <div className="flex items-center gap-2 px-2 mb-8">
          <ChevronLeft size={14} className="text-slate-400" />
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
            Medical Suite
          </span>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={17} />
                  {item.label}
                </div>
                {item.badge && (
                  <span
                    className={cn(
                      "text-xs font-semibold px-2 py-0.5 rounded-full",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-500"
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Today's Summary */}
      <div className="bg-slate-900 rounded-2xl p-4 text-white">
        <p className="text-xs font-semibold text-slate-300 mb-3">
          Today&apos;s Summary
        </p>
        <div className="flex flex-col gap-2">
          {summary.map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <span className="text-xs text-slate-400">{item.label}</span>
              <span className="text-xs font-bold text-white">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}