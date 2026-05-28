export const mockAppointments = [
  {
    id: "1",
    patient: "Maria Rodriguez",
    type: "Routine Checkup",
    status: "checked_in",
    time: "10:00 AM",
    avatar: "MR",
  },
  {
    id: "2",
    patient: "John Smith",
    type: "Heart Follow-up",
    status: "in_progress",
    time: "10:45 AM",
    avatar: "JS",
  },
  {
    id: "3",
    patient: "Emily Chen",
    type: "Consultation",
    status: "scheduled",
    time: "11:30 AM",
    avatar: "EC",
  },
];

export const mockTasks = [
  {
    id: "1",
    task: "Call Maria Rodriguez about test results",
    time: "10:30 AM",
    done: false,
  },
  {
    id: "2",
    task: "Review John Smith's MRI scan",
    time: "10:30 AM",
    done: false,
  },
  {
    id: "3",
    task: "Follow up with Emily Chen prescription",
    time: "2:00 PM",
    done: false,
  },
  {
    id: "4",
    task: "Complete weekly reports",
    time: "End of day",
    done: false,
  },
  {
    id: "5",
    task: "Check lab results for Robert Johnson",
    time: "3:00 PM",
    done: true,
  },
];

export const mockLabResults = [
  {
    id: "LAB-001",
    patient: "Maria Rodriguez",
    patientId: "P-2024-001",
    testType: "Complete Blood Count (CBC)",
    category: "Hematology",
    status: "critical",
    priority: "ST",
  },
  {
    id: "LAB-002",
    patient: "John Smith",
    patientId: "P-2024-002",
    testType: "Lipid Panel",
    category: "Chemistry",
    status: "completed",
    priority: "RC",
  },
  {
    id: "LAB-003",
    patient: "Emily Chen",
    patientId: "P-2024-003",
    testType: "Thyroid Function Tests",
    category: "Endocrinology",
    status: "pending",
    priority: "RC",
  },
  {
    id: "LAB-004",
    patient: "Robert Johnson",
    patientId: "P-2024-004",
    testType: "Liver Function Tests",
    category: "Chemistry",
    status: "completed",
    priority: "LE",
  },
];