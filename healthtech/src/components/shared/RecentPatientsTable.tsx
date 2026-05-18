import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const recentPatients = [
  { id: "P001", name: "Amara Nwosu", age: 34, status: "admitted", time: "9:00 AM" },
  { id: "P002", name: "Kwame Mensah", age: 52, status: "outpatient", time: "9:45 AM" },
  { id: "P003", name: "Fatima Diallo", age: 28, status: "discharged", time: "10:15 AM" },
  { id: "P004", name: "Chidi Okafor", age: 41, status: "admitted", time: "11:00 AM" },
  { id: "P005", name: "Aisha Kamara", age: 19, status: "outpatient", time: "11:30 AM" },
];

const statusStyles: Record<string, string> = {
  admitted: "bg-blue-100 text-blue-700",
  outpatient: "bg-green-100 text-green-700",
  discharged: "bg-slate-100 text-slate-600",
};

export function RecentPatientsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-semibold">Recent Patients</CardTitle>
        <CardDescription>Patients seen today</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-slate-400 text-left">
                <th className="pb-3 font-medium">ID</th>
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Age</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {recentPatients.map((patient) => (
                <tr key={patient.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 text-slate-400 font-mono text-xs">
                    {patient.id}
                  </td>
                  <td className="py-3 font-medium text-slate-800">
                    {patient.name}
                  </td>
                  <td className="py-3 text-slate-500">{patient.age}</td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[patient.status]}`}
                    >
                      {patient.status}
                    </span>
                  </td>
                  <td className="py-3 text-slate-400">{patient.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}