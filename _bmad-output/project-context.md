---
project_name: 'Oliveiras Doces e Salgados'
user_name: 'Johny'
date: '2026-03-12T12:15:43-03:00'
sections_completed:
  ['technology_stack', 'language_rules', 'framework_rules', 'quality_rules', 'workflow_rules', 'anti_patterns']
status: 'complete'
rule_count: 22
optimized_for_llm: true
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents might otherwise miss._

---

## Technology Stack & Versions

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript (Strict Mode mandatory)
- **Styling:** Tailwind CSS v4 (using CSS variables for theme)
- **UI Components:** Shadcn/UI (CLI v4 / Component-copy model)
- **Runtime/CD:** Vercel (Recommended)

## Critical Implementation Rules

### Language-Specific Rules (TypeScript)

- **Explicit Types:** No `any`. Props and function returns must be explicitly typed.
- **Immutability:** Use `const` and non-mutating methods (`.map`, `.filter`).
- **Centralized Types:** All shared interfaces must live in `src/types/index.ts`.

### Framework-Specific Rules (Next.js/React)

- **Component Defaults:** Use **Server Components** by default. Use Client Components (`'use client'`) ONLY for interactive logic (calculators, sliders).
- **State Management:** Prioritize React Local State or Context API. Avoid heavy global state libraries.
- **Image Optimization:** Mandatory use of Next.js `<Image />` with `priority` for Hero assets and `sizes` for mobile.
- **SEO:** Metadata must be defined in `layout.tsx` and `page.tsx`.

### Code Quality & Organization

- **Separation of Concerns:** Business logic (pricing, kit selection) in `src/components/experience/`. Representational logic in `src/components/ui/`.
- **Naming Conventions:**
  - Components: `PascalCase.tsx`
  - Logic/Hooks: `kebab-case.ts`
  - Variables/Functions: `camelCase`
- **Accessibility:** Minimum tap target of 44x44px; mandatory `aria-label` for icons.

### Development Workflow Rules

- **Commit Messages:** Descriptive in Portuguese (ex: `feat: add calculadora de kits`).
- **Performance:** TTI must be < 3s. No massive third-party libraries without validation.

### Critical Don't-Miss Rules (Anti-Patterns)

- **No External DB:** All product data must stay in `src/config/products.ts` for the MVP.
- **Static-First:** Assume data is local. No `fetch` to external APIs for core product logic.
- **WhatsApp Bridge:** Always use URI encoding for the outbound `wa.me` links.

---

## Usage Guidelines

**For AI Agents:**

- Read this file before implementing any code.
- Follow ALL rules exactly.
- Prefer the more restrictive/performant option.
- Update this file if new architectural patterns are introduced.

**For Humans:**

- Keep this file lean and focused on agent needs.
- Remove rules that become "obvious" to the model over time.

Last Updated: 2026-03-12
