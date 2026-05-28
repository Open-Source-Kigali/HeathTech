import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CalendarDays, Clock } from "lucide-react";

const appointments = [
  { name: "Amara Nwosu", time: "1:00 PM", type: "Checkup", doctor: "Dr. Mensah" },
  { name: "Kwame Asante", time: "2:00 PM", type: "Lab Review", doctor: "Dr. Osei" },
  { name: "Ngozi Adeyemi", time: "3:30 PM", type: "Follow-up", doctor: "Dr. Mensah" },
  { name: "Seun Adesanya", time: "4:00 PM", type: "Consultation", doctor: "Dr. Diallo" },
];

export function UpcomingAppointments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-semibold">
          Upcoming Appointments
        </CardTitle>
        <CardDescription>Scheduled for today</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {appointments.map((apt, index) => (
            <div
              key={index}
              className="flex items-start justify-between gap-4 border-b pb-4 last:border-0 last:pb-0"
            >
              <div>
                <p className="font-medium text-slate-800 text-sm">{apt.name}</p>
                <p className="text-xs text-slate-400 mt-0.5">{apt.type} · {apt.doctor}</p>
              </div>
              <div className="flex items-center gap-1 text-xs text-slate-500 shrink-0">
                <Clock size={12} />
                {apt.time}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}