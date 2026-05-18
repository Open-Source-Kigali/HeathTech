import { StatCardComponent } from "@/components/shared/StatCard";
import { RecentPatientsTable } from "@/components/shared/RecentPatientsTable";
import { UpcomingAppointments } from "@/components/shared/UpcomingAppointments";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { StatCard } from "@/types/dashboard";

const stats: StatCard[] = [
  {
    title: "Total Patients",
    value: "1,284",
    description: "Registered patients this month",
    trend: "up",
    trendValue: "+12%",
  },
  {
    title: "Appointments Today",
    value: "24",
    description: "8 remaining for today",
    trend: "neutral",
    trendValue: "Same as yesterday",
  },
  {
    title: "Lab Tests Pending",
    value: "7",
    description: "Results awaiting review",
    trend: "down",
    trendValue: "-3 from yesterday",
  },
  {
    title: "Staff On Duty",
    value: "12",
    description: "Across all departments",
    trend: "up",
    trendValue: "+2 today",
  },
];

export default function DashboardPage() {
  return (
    <div>
      <DashboardHeader />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <StatCardComponent key={stat.title} {...stat} />
        ))}
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <RecentPatientsTable />
        </div>
        <div>
          <UpcomingAppointments />
        </div>
      </div>
    </div>
  );
}