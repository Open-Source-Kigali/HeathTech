
# Contributing to ClinicSync

Thank you for your interest in contributing! This guide will help you get started.

---

## Before You Start

1. Read the [README.md](README.md) to understand the project
2. Check [existing issues](https://github.com/Open-Source-Kigali/HeathTech/issues) before opening a new one
3. Comment on the issue you want to work on so others know it is taken

---

## Getting Started

**1. Fork the repository**

**2. Clone your fork**
```bash
git clone https://github.com/YOUR_USERNAME/HeathTech.git
cd HeathTech
```

**3. Set the upstream remote**
```bash
git remote add upstream https://github.com/Open-Source-Kigali/HeathTech.git
```

**4. Always branch from `development`**
```bash
git checkout development
git pull upstream development
git checkout -b feature/your-feature-name
```

> ⚠️ Never branch from `main`. Always branch from `development`.

**5. Install dependencies**
```bash
npm install
```

**6. Copy environment variables**
```bash
cp .env.example .env
```

---

## Branch Naming
feature/your-feature-name     → new features

fix/bug-description           → bug fixes

docs/what-you-updated         → documentation

refactor/what-you-refactored  → refactoring

ui/component-name             → UI improvements


---

## Commit Convention
feat: add patient registration form

fix: resolve login redirect issue

docs: update setup instructions

ui: improve sidebar active state

refactor: simplify auth store logic

security: move token to memory storage

chore: update dependencies


---

## Adding a New Feature

Every feature belongs in `src/features/`. Follow this structure:
src/features/your-feature/

├── components/       # UI components

├── services/         # API calls

├── types/            # Zod schemas and TypeScript types

└── index.ts          # Barrel export


Always export from `index.ts`:
```ts
export { MyComponent } from "./components/MyComponent";
export { myService } from "./services";
export { mySchema } from "./types";
export type { MyFormData } from "./types";
```

---

## Code Standards

- Avoid `any` in TypeScript
- Use Tailwind CSS only — no inline styles
- Use React Hook Form + Zod for all forms
- All API calls go in `services/index.ts`
- Use the shared Axios instance from `@/lib/axios`
- Run `npm run lint` before every commit

---

## Pull Request Process

1. Run `npm run lint` before opening a PR
2. Fill in the PR template completely
3. Add screenshots for any UI changes
4. Target `development` — never `main`
5. Link the issue: `Fixes #123`

---

## Good First Issues

Look for these labels:
- `good first issue`
- `beginner friendly`
- `documentation`
- `ui`

---

## Questions?

Open a [GitHub Discussion](https://github.com/Open-Source-Kigali/HeathTech/discussions) or comment on the relevant issue.