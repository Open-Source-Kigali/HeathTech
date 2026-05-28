"use client";

import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { mockAppointments, mockTasks, mockLabResults } from "@/lib/mockData/doctor";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Plus,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Appointment Status Config ---
const appointmentStatusConfig: Record<
  string,
  { label: string; className: string }
> = {
  checked_in: { label: "Checked In", className: "bg-teal-500 text-white" },
  in_progress: { label: "In Progress", className: "bg-blue-500 text-white" },
  scheduled: { label: "Scheduled", className: "bg-slate-100 text-slate-600" },
};

// --- Lab Status Config ---
const labStatusConfig: Record<
  string,
  { label: string; className: string }
> = {
  critical: { label: "Critical", className: "bg-red-100 text-red-600" },
  completed: { label: "Completed", className: "bg-green-100 text-green-600" },
  pending: { label: "Pending", className: "bg-yellow-100 text-yellow-600" },
};

// --- Sparkline SVG ---
function Sparkline({ color }: { color: string }) {
  const points = [
    [0, 30], [10, 20], [20, 25], [30, 15], [40, 20], [50, 10], [60, 18],
  ];
  const d = points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y}`)
    .join(" ");
  return (
    <svg viewBox="0 0 60 40" className="w-16 h-8">
      <path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);
  const [tasks, setTasks] = useState(mockTasks);
  const [labSearch, setLabSearch] = useState("");

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const pendingTaskCount = tasks.filter((t) => !t.done).length;

  const filteredLabs = mockLabResults.filter(
    (l) =>
      l.patient.toLowerCase().includes(labSearch.toLowerCase()) ||
      l.testType.toLowerCase().includes(labSearch.toLowerCase())
  );

  return (
    <div className="flex gap-6">
      {/* Main Content */}
      <div className="flex-1 min-w-0 flex flex-col gap-6">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Doctor&apos;s Dashboard
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Welcome back, {user?.name ?? "Doctor"}
          </p>
        </div>

        {/* Today's Appointments */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold text-slate-700">
              Today&apos;s Appointments
            </h2>
            <Button variant="ghost" size="sm" className="text-teal-600 text-xs">
              View all <ArrowRight size={13} className="ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mockAppointments.map((apt, index) => {
              const config = appointmentStatusConfig[apt.status];
              const isFirst = index === 0;
              return (
                <Card
                  key={apt.id}
                  className={cn(
                    "border-0 shadow-sm",
                    isFirst ? "bg-slate-900 text-white" : "bg-white"
                  )}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p
                          className={cn(
                            "font-semibold text-sm",
                            isFirst ? "text-white" : "text-slate-800"
                          )}
                        >
                          {apt.type}
                        </p>
                        <span
                          className={cn(
                            "text-xs px-2 py-0.5 rounded-full mt-1 inline-block",
                            isFirst
                              ? "bg-teal-500 text-white"
                              : config.className
                          )}
                        >
                          {config.label}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400">
                        {apt.time}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={cn(
                            "h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold",
                            isFirst
                              ? "bg-white/20 text-white"
                              : "bg-teal-100 text-teal-700"
                          )}
                        >
                          {apt.avatar}
                        </div>
                        <span
                          className={cn(
                            "text-xs font-medium",
                            isFirst ? "text-slate-300" : "text-slate-600"
                          )}
                        >
                          {apt.patient}
                        </span>
                      </div>
                      <button
                        className={cn(
                          "h-6 w-6 rounded-full flex items-center justify-center",
                          isFirst ? "bg-white/10" : "bg-slate-100"
                        )}
                      >
                        <ArrowRight
                          size={12}
                          className={isFirst ? "text-white" : "text-slate-400"}
                        />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4">
          {[
            {
              label: "Active Patients",
              value: 247,
              sub: "+12 this week",
              trend: "up",
              color: "#14b8a6",
            },
            {
              label: "Critical Alerts",
              value: 3,
              sub: "+2 from yesterday",
              trend: "up",
              color: "#f43f5e",
            },
            {
              label: "Admissions Today",
              value: 2,
              sub: "+2 from yesterday",
              trend: "up",
              color: "#14b8a6",
            },
          ].map((stat) => (
            <Card key={stat.label} className="border-0 shadow-sm bg-white">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-slate-400 font-medium">
                    {stat.label}
                  </p>
                  <Sparkline color={stat.color} />
                </div>
                <p className="text-3xl font-bold text-slate-800">{stat.value}</p>
                <div className="flex items-center gap-1 mt-1">
                  {stat.trend === "up" ? (
                    <TrendingUp size={12} className="text-teal-500" />
                  ) : (
                    <TrendingDown size={12} className="text-red-500" />
                  )}
                  <span className="text-xs text-slate-400">{stat.sub}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lab Results */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <CardTitle className="text-base font-semibold">
                Lab Results
              </CardTitle>
              <div className="relative">
                <Search
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <Input
                  placeholder="Search results..."
                  className="pl-8 h-8 text-xs w-48 bg-slate-50"
                  value={labSearch}
                  onChange={(e) => setLabSearch(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-slate-400 text-left">
                  <th className="pb-3 font-medium">Patient</th>
                  <th className="pb-3 font-medium">Test Type</th>
                  <th className="pb-3 font-medium">Category</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Pri.</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredLabs.map((lab) => {
                  const config = labStatusConfig[lab.status];
                  return (
                    <tr
                      key={lab.id}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="py-3">
                        <p className="font-medium text-slate-800 text-sm">
                          {lab.patient}
                        </p>
                        <p className="text-xs text-slate-400">{lab.patientId}</p>
                      </td>
                      <td className="py-3 text-slate-600 text-xs">
                        {lab.testType}
                        <p className="text-slate-400 font-mono">{lab.id}</p>
                      </td>
                      <td className="py-3 text-slate-500 text-xs">
                        {lab.category}
                      </td>
                      <td className="py-3">
                        <span
                          className={cn(
                            "px-2.5 py-1 rounded-full text-xs font-medium",
                            config.className
                          )}
                        >
                          {config.label}
                        </span>
                      </td>
                      <td className="py-3 text-xs text-slate-400 font-mono">
                        {lab.priority}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>

      {/* Right Panel */}
      <div className="w-72 shrink-0 flex flex-col gap-4">
        {/* Today's Tasks */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-semibold">
                Today&apos;s Tasks
              </CardTitle>
              <span className="text-xs bg-teal-100 text-teal-700 font-semibold px-2 py-0.5 rounded-full">
                Pending {pendingTaskCount}
              </span>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                className={cn(
                  "flex items-start justify-between gap-3 p-3 rounded-xl transition-colors",
                  task.done ? "bg-slate-50 opacity-60" : "bg-slate-50"
                )}
              >
                <div className="flex-1 min-w-0">
                  <p
                    className={cn(
                      "text-xs font-medium leading-snug",
                      task.done
                        ? "line-through text-slate-400"
                        : "text-slate-700"
                    )}
                  >
                    {task.task}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">{task.time}</p>
                </div>
                {task.done ? (
                  <CheckCircle2
                    size={16}
                    className="text-teal-500 shrink-0 mt-0.5"
                  />
                ) : (
                  <Switch
                    checked={task.done}
                    onCheckedChange={() => toggleTask(task.id)}
                    className="shrink-0 scale-75"
                  />
                )}
              </div>
            ))}

            <Button
              size="sm"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white mt-1"
            >
              <Plus size={14} className="mr-2" />
              Add New Task
            </Button>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold">Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {[
              { label: "Patients seen today", value: "8", color: "bg-teal-500" },
              { label: "Avg. consultation time", value: "18m", color: "bg-blue-500" },
              { label: "Prescriptions written", value: "12", color: "bg-purple-500" },
              { label: "Follow-ups scheduled", value: "5", color: "bg-orange-500" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <div className={cn("h-2 w-2 rounded-full", stat.color)} />
                  <span className="text-xs text-slate-500">{stat.label}</span>
                </div>
                <span className="text-sm font-bold text-slate-800">
                  {stat.value}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}