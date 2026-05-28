# Contributing to Healthtech

Thank you for your interest in contributing! This guide will help you get started.

---

## Table of Contents
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Branch Naming](#branch-naming)
- [Commit Convention](#commit-convention)
- [Code Standards](#code-standards)
- [Adding a New Feature](#adding-a-new-feature)
- [Good First Issues](#good-first-issues)

---

## Getting Started

1. **Fork** the repository
2. **Clone** your fork
```bash
   git clone https://github.com/YOUR_USERNAME/healthtech.git
```
3. **Set upstream remote**
```bash
   git remote add upstream https://github.com/Open-Source-Kigali/HeathTech.git
```
4. **Always branch from `development`**
```bash
   git checkout development
   git pull upstream development
   git checkout -b feature/your-feature-name
```
5. **Make your changes**
6. **Push to your fork**
```bash
   git push origin feature/your-feature-name
```
7. **Open a Pull Request** targeting `development` — never `main`
---

## How to Contribute

1. Find an issue to work on or create one
2. Comment on the issue to let others know you're working on it
3. Make your changes
4. Run lint before pushing
```bash
   npm run lint
```
5. Commit your changes
6. Push to your branch
7. Open a Pull Request

---

## Branch Naming
feature/your-feature-name     → new features
fix/your-bug-name             → bug fixes
docs/what-you-updated         → documentation
refactor/what-you-refactored  → code refactoring
ui/component-name             → UI improvements

> ⚠️ Always create your branch from `development`, not `main`.

---

## Commit Convention
feat: add patient registration form
fix: resolve login redirect bug
docs: update README setup guide
ui: improve sidebar active state
refactor: simplify auth store logic
security: move token to memory storage

---

## Code Standards

- Use **TypeScript** — avoid `any`
- Use **Tailwind CSS** — no inline styles
- Write **reusable components**
- Keep components **small and focused**
- Add **barrel exports** in `index.ts` files
- Run `npm run lint` before every commit

---

## Adding a New Feature

Every new feature belongs in `src/features/`. Follow this structure:
src/features/your-feature/
├── components/       # UI components for this feature
├── hooks/            # Custom hooks
├── services/         # API calls
├── types/            # TypeScript types and zod schemas
└── index.ts          # Barrel export

---

## Good First Issues

New to the project? Look for issues labeled:

- `good first issue`
- `beginner friendly`
- `documentation`
- `ui`

These are specifically picked for new contributors.

---

## Questions?

Open a [GitHub Discussion](../../discussions) or join our Discord.

