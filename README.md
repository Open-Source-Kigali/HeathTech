<div align="center">
  <h1>🏥 Healthtech</h1>
  <p>Open-source healthcare management platform built for African healthcare institutions.</p>

  ![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)
  ![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
  ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)
</div>

---

## 📋 Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Modules](#modules)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

---

## Overview

Healthtech is a modular, open-source healthcare management platform designed to help clinics, laboratories, and healthcare centres across Africa digitize their workflows efficiently.

**Problems it solves:**
- Paper-based patient records
- Inefficient appointment systems
- Poor laboratory workflow management
- Expensive proprietary healthcare software

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Components | shadcn/ui |
| State | Zustand |
| Forms | React Hook Form + Zod |
| HTTP | Axios |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/YOUR_USERNAME/healthtech.git
   cd healthtech
```

2. **Install dependencies**
```bash
   npm install
```

3. **Set up environment variables**
```bash
   cp .env.example .env.local
```

4. **Run the development server**
```bash
   npm run dev
```

5. **Open your browser**
http://localhost:3000

---

## Project Structure
src/
├── app/                    # Next.js routes (pages)
│   ├── (auth)/             # Auth pages — login, register
│   └── (dashboard)/        # Dashboard pages
├── components/
│   ├── layout/             # Sidebar, TopHeader
│   └── shared/             # Reusable components
├── features/               # Feature modules
│   ├── auth/               # Auth forms, services, types
│   ├── patients/           # Patient components, services, types
│   ├── appointments/       # Appointment components, services, types
│   └── laboratory/         # Lab components, services, types
├── hooks/                  # Custom React hooks
├── lib/                    # Axios config, mock data
├── store/                  # Zustand global state
├── types/                  # Global TypeScript types
└── utils/                  # Helper functions


---

## Modules

| Module | Status | Description |
|---|---|---|
| Authentication | ✅ Done | Login, register, route protection |
| Doctor Dashboard | ✅ Done | Appointments, stats, lab results, tasks |
| Patients | 🚧 In Progress | Registration, profiles, medical history |
| Appointments | 📅 Planned | Scheduling, calendar, queue |
| Laboratory | 📅 Planned | Test requests, results, reports |
| Pharmacy | 📅 Future | Medication management |
| Billing | 📅 Future | Payments and invoices |

---

## Contributing

We welcome contributions from developers of all skill levels!

Please read our [CONTRIBUTING.md](CONTRIBUTING.md) guide before submitting a pull request.

**Good first issues are labeled:** `good first issue` and `beginner friendly`

---

## Code of Conduct

Please read our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before participating in our community.

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.