---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7]
inputDocuments:
  - "_bmad-output/planning-artifacts/prd.md"
  - "_bmad-output/planning-artifacts/ux-design-specification.md"
  - "_bmad-output/planning-artifacts/product-brief-Oliveiras Doces e Salgados-2026-03-11.md"
  - "_bmad-output/planning-artifacts/research/domain-tendencias-festas-personalizacao-ia-research-2026-03-11.md"
  - "_bmad-output/planning-artifacts/research/market-oliveiras-doces-e-salgados-research-2026-03-11.md"
  - "_bmad-output/planning-artifacts/ux-design-directions.html"
workflowType: 'architecture'
project_name: 'Oliveiras Doces e Salgados'
user_name: 'Johny'
date: '2026-03-12T11:55:21-03:00'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements (Focus: Customer Experience Engine):**

- **Catalog & Comparison:** Dynamic selection of Size (P/M/G) and Kits (Basic/Tradicional/Premium) with instant price anchoring (Decoy Pricing).
- **WhatsApp Integration:** Immediate transition (Handoff) with pre-filled context (Size, Kit, Price) from the web session.
- **Visual Impact:** Portfolio-first interface with "Before/After" slider showcasing IA personalization potential.

**Non-Functional Requirements:**

- **Performance:** Time to Interactive (TTI) ≤ 3s on 3G/4G networks; interaction latency ≤ 100ms.
- **Reliability:** Weekend-critical availability; fallback to direct `wa.me` links.
- **Privacy:** 72h post-delivery image purging policy.
- **Accessibility:** WCAG 2.1 AA compliance.

**Scale & Complexity:**

- **Primary domain:** High-performance Web App (Storefront).
- **Complexity level:** Medium (due to performance demands and visual interaction polish).
- **Estimated architectural components:** Catalog (SSR/SPA), Responsive Interaction Layer, WhatsApp Bridge.

### Technical Constraints & Dependencies

- **Next.js & Tailwind CSS:** Selected stack for SEO, performance, and design flexibility.
- **WhatsApp API/Deep Links:** Crucial for the conversion flow.
- **External Media:** Optimization of high-quality assets (WebP/AVIF).

### Cross-Cutting Concerns Identified

- **Web Vitals Optimization.**
- **Design System Consistency.**
- **Conversational Handoff Flow.**

## Starter Template Evaluation

### Primary Technology Domain

**Web Application Frontend (Storefront Engine)** baseado em Next.js.

### Starter Options Considered

- **create-next-app:** Base sólida, mas requer configuração manual de componentes UI.
- **T3 Stack:** Excelente para full-stack complexo, mas talvez pesado demais para nosso foco atual de "vitrine".
- **shadcn/create (RECOMENDADO):** Scaffolding moderno que já integra Next.js, TypeScript, Tailwind e as fundações do design system Shadcn.

### Selected Starter: shadcn/create (CLI v4)

**Rationale for Selection:**
Maximiza a velocidade de desenvolvimento mantendo o controle total sobre o código (component copying). Já integra as melhores práticas de 2026 para acessibilidade e performance mobile.

**Initialization Command:**

```bash
npx shadcn@latest init
```

**Decisões Arquiteturais Providas:**

- **Linguagem:** TypeScript (Type-safe).
- **Estilização:** Tailwind CSS v4 (Design system via classes).
- **Componentes:** Shadcn/ui (Acessibilidade + Customização total).
- **Roteamento:** Next.js App Router (Padrão ouro).

**Note:** Project initialization using this command should be the first implementation story.

## Core Architectural Decisions

### Decision Priority Analysis

**Critical Decisions (Block Implementation):**

- **Data Architecture:** Static-First approach (JSON/TS constants).
- **Frontend State:** React Local State / Context API.
- **Handoff Logic:** WhatsApp Deep-linking Utility.

**Important Decisions (Shape Architecture):**

- **Media Strategy:** WebP/AVIF compression with Lazy Loading.
- **Styling:** Tailwind CSS v4 variables for brand consistency.

**Deferred Decisions (Post-MVP):**

- **Backend Database:** Postponed for Phase 2/3 (Growth).
- **Authentication:** Not required for anonymous discovery flow.

### Data Architecture

- **Decision:** No external database for MVP.
- **Implementation:** Data models for Sizes (P, M, G) and Tiers (Basic, Tradicional, Premium) defined in `src/config/products.ts`.
- **Rationale:** Zero database latency, 100% offline-ready discovery, and simplified management for the owner.

### Frontend Architecture

- **Decision:** React State / Context API.
- **Rationale:** Sufficient for managing simple selection states and calculating prices without external overhead.
- **Component Strategy:** Atomic components using Shadcn/ui + Tailwind v4.

### API & Communication Patterns

- **Decision:** WhatsApp Deep-linking.
- **Rationale:** Direct`wa.me` URI generation with encoded message context provides the highest conversion rate with zero infrastructure cost.

### Decision Impact Analysis

1. **Static Pricing File:** Central source of truth for all calculations.
2. **Handoff Generator:** Consumes state to produce the final outbound link.
3. **Interactive Components:** Purely visual, reacting to state changes.

## Implementation Patterns & Consistency Rules

### Naming Patterns

- **Components:** `PascalCase` (ex: `SelectionCard.tsx`, `WhatsAppButton.tsx`).
- **Files/Folders:** `kebab-case` for routing/utility (ex: `use-whatsapp.ts`) and `PascalCase` for React components.
- **Variables/Functions:** `camelCase` (ex: `calculateTotalPrice`, `selectedSize`).

### Structure Patterns

- **Static Configurations:** `src/config/products.ts` (Central source of truth for pricing/itineraries).
- **Core UI:** `src/components/ui/` (Shadcn legacy components).
- **Experience Layer:** `src/components/experience/` (Business-specific components: Calculator, Abas, Sliders).
- **Hooks:** `src/hooks/` (Custom logic like `useWhatsAppHandoff`).

### Format Patterns

- **Data Exchange:** JSON/TypeScript constants using `camelCase` for field names.
- **Communication:** Encoded URL parameters for WhatsApp deep-links.

### Performance & Interaction Patterns

- **Zero-Flicker Transitions:** Use React state for immediate DOM updates between product variants.
- **Lazy Loading:** All portfolio images must use Next.js `<Image />` component with priority on Hero assets.
- **Accessibility:** Mandatory ARIA labels on all interactive "Tap-Targets" (minimum size 44x44px).

### Enforcement Guidelines

- All AI Agents MUST follow the defined folder structure to avoid redundant code.
- No direct implementation of business logic inside UI-only components.
- All pricing logic must be centralized in the config layer.

## Project Structure & Boundaries

### Complete Project Directory Structure

```
oliveiras-storefront/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Fonts, SEO, Global structure
│   │   └── page.tsx            # "Experience Engine" Landing Page
│   ├── components/
│   │   ├── experience/         # Business Components (Calculator, Sliders, Abas)
│   │   │   ├── SelectionArea.tsx
│   │   │   ├── ProductSlider.tsx
│   │   │   └── PriceDisplay.tsx
│   │   └── ui/                 # Shadcn Base Components
│   ├── config/
│   │   └── products.ts         # Central Truth: Pricing, Items, Portfolio metadata
│   ├── hooks/
│   │   └── use-whatsapp.ts     # Deep-link logic & text concatenation
│   ├── lib/
│   │   └── utils.ts            # Formatting & CSS helpers
│   └── types/
│       └── index.ts            # Project types (Size, Tier, Product)
├── public/
│   └── assets/                 # Portfolio images & Icons
└── tailwind.config.ts          # Custom Design Tokens (Johny's Palette)
```

### Architectural Boundaries

**Component Boundaries:**

- **Experience Layer:** Isolated business logic for price calculation and selection flow.
- **UI Layer:** Pure presentational components from Shadcn.

**Data Boundaries:**

- **Static-First:** Local-only data access from `config/products.ts`. No external API calls for the core engine.

**Integration Points:**

- **WhatsApp Bridge:** Clean handoff point using URI encoding to relay session state.

### Requirements to Structure Mapping

**Features Mapping:**

- **FR1/FR2 (Selection & Comparison):** Managed in `SelectionArea.tsx`.
- **FR3 (Portfolio Interaction):** Managed in `ProductSlider.tsx`.
- **FR5/FR6 (WhatsApp Transition):** Centralized in `use-whatsapp.ts`.

**Non-Functional Concerns:**

- **Performance (NFR-PERF):** Next.js App Router for SSR/SSG.
- **Brand Consistency:** `tailwind.config.ts` enforcing the specific boutique palette.

## Architecture Validation Results

### Coherence Validation ✅
- **Compatibilidade:** Uso de Next.js com Static-First elimina latência de DB. Shadcn/ui v4 garante acessibilidade nativa.
- **Consistência:** Padrões de PascalCase para React e kebab-case para hooks/utils seguem as melhores práticas de 2026.

### Requirements Coverage Validation ✅
- **Funcional:** O Catálogo e o Fluxo de Handoff via WhatsApp estão 100% cobertos pela estrutura proposta.
- **Não-Funcional:** Estratégia de performance (SSR/SSG) endereça o TTI < 3s. LGPD endereçada via política de expurgo local.

### Architecture Completeness Checklist
- [x] Contexto e escala analisados.
- [x] Stack tecnológica totalmente especificada.
- [x] Padrões de implementação estabelecidos.
- [x] Estrutura de pastas e mapeamento de componentes concluído.

### Architecture Readiness Assessment
**Status:** READY FOR IMPLEMENTATION
**Confidence Level:** High
**Key Strengths:** Extreme focus on mobile performance and maintenance simplicity (Static-First).

### Implementation Handoff
**AI Agent Guidelines:**
- Follow all architectural decisions exactly as documented.
- Use implementation patterns consistently across all components.
- Respect project structure and boundaries.
- Refer to this document for all architectural questions.

**First Implementation Priority:**
```bash
npx shadcn@latest init
```
