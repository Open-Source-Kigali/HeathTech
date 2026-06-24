<div align="center">

# ClinicSync

**Open-source healthcare management platform built for African healthcare institutions.**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](CONTRIBUTING.md)

[Getting Started](#getting-started) · [Project Structure](#project-structure) · [Modules](#modules) · [Contributing](CONTRIBUTING.md) · [Report Bug](https://github.com/Open-Source-Kigali/HeathTech/issues)

</div>

---

## What Is ClinicSync?

ClinicSync is a modular, **offline-first** healthcare management platform designed to help clinics, hospitals, laboratories and NGOs across Africa digitize their workflows — even in areas with poor or no internet connectivity.

### Problems It Solves

- Paper-based patient records that get lost or damaged
- Doctors not knowing a patient's allergies before prescribing
- Lab results never reaching the right doctor on time
- No way to track a patient's medication history
- Expensive proprietary healthcare software that small clinics cannot afford

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Components | shadcn/ui |
| Routing | React Router v6 |
| State | Zustand |
| Forms | React Hook Form + Zod |
| HTTP | Axios |
| PWA | Workbox (Phase 4) |

> **Why React + Vite instead of Next.js?**
> Offline-first capability is a core requirement for African clinic contexts, not a future add-on. React + Vite gives us full PWA and service worker control from day one.

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm
- Git

### Installation

**1. Fork and clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/HeathTech.git
cd HeathTech
```

**2. Install dependencies**
```bash
npm install
```

**3. Set up environment variables**
```bash
cp .env.example .env
```

**4. Start the development server**
```bash
npm run dev
```

**5. Open your browser**
http://localhost:5173

---

## Project Structure

| Folder | Description |
|---|---|
| `src/components/layout/` | Sidebar, TopHeader, AuthLayout, DashboardLayout |
| `src/components/shared/` | Reusable components used across features |
| `src/components/ui/` | shadcn/ui auto-generated components |
| `src/features/auth/` | Login, register, auth forms and services |
| `src/features/patients/` | Patient registration, profiles, medical history |
| `src/features/appointments/` | Scheduling, calendar, queue management |
| `src/features/laboratory/` | Test requests, result entry and reports |
| `src/hooks/` | Custom React hooks |
| `src/lib/` | Axios instance, router, mock data |
| `src/pages/auth/` | Login and register page components |
| `src/pages/dashboard/` | Role-based dashboard pages |
| `src/store/` | Zustand global state (auth store) |
| `src/types/` | Global TypeScript interfaces |
| `src/utils/` | Helper functions |

### Feature Module Structure

Every feature in `src/features/` follows the same pattern:
src/features/auth/

├── components/       # UI components for this feature

├── services/         # API calls

├── types/            # Zod schemas and TypeScript types

└── index.ts          # Barrel export


---

## Modules

| Module | Status | Description |
|---|---|---|
| Authentication | ✅ Done | Login, register, RBAC, route protection |
| Doctor Dashboard | 🚧 In Progress | Appointments, stats, lab results, tasks |
| Patients | 📅 Planned | Registration, profiles, medical history |
| Appointments | 📅 Planned | Scheduling, calendar, queue |
| Laboratory | 📅 Planned | Test requests, results, reports |
| Nurse Dashboard | 📅 Planned | Vitals, ward management |
| Receptionist Dashboard | 📅 Planned | Patient registration, queue |
| Lab Scientist Dashboard | 📅 Planned | Test processing, results |
| Admin Dashboard | 📅 Planned | Staff management, settings |
| PWA / Offline | 🔮 Phase 4 | Service workers, local caching, sync |

---

## User Roles

| Role | What They Do |
|---|---|
| `admin` | Full system access — manages staff and settings |
| `doctor` | Sees patients, writes notes, requests labs, prescribes |
| `nurse` | Records vitals, assists doctors, manages ward |
| `lab_technician` | Processes lab requests, enters test results |
| `receptionist` | Registers patients, books appointments |

---

## Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

---

## Contributing

We welcome contributions from developers of all skill levels! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a pull request.

**Good first issues are labeled:** `good first issue` and `beginner friendly`

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  Built with ❤️ for African healthcare by <a href="https://github.com/Open-Source-Kigali">Open-Source-Kigali</a>
</div>
