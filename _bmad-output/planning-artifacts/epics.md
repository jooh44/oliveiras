---
stepsCompleted: [1, 2, 3]
inputDocuments:
  - "_bmad-output/planning-artifacts/prd.md"
  - "_bmad-output/planning-artifacts/architecture.md"
  - "_bmad-output/planning-artifacts/ux-design-specification.md"
  - "_bmad-output/planning-artifacts/ux-design-directions.html"
---

# Oliveiras Doces e Salgados - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for Oliveiras Doces e Salgados, decomposing the requirements from the PRD, UX Design if it exists, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

FR1: O usuário pode selecionar o tamanho do evento (Kit P, M ou G) usando filtros de tabulação em primeiro nível, atualizando as opções da vitrine ativamente.
FR2: O usuário pode visualizar simultaneamente os 3 pacotes de decoração (Básico, Tradicional, Premium) atrelados à capacidade do evento escolhida, comparando descrições completas e preços finais.
FR3: O usuário pode interagir com portfólios visuais (resolução mínima 1080p) detalhando mockups gerados por IA para exemplificar o Tier Premium.
FR4: O usuário pode consultar menus adicionais contendo itens avulsos quantificados (Salgados unitários, Bolo por kg, Peças de decoração extras) com preços base.
FR5: O usuário pode acionar a transição assistida para o sistema conversacional (WhatsApp) via CTA.
FR6: O usuário pode engatilhar uma mensagem inicial no WhatsApp pré-preenchida com as métricas do pacote focado no web-app.
FR7: O Administrador pode receber descritivos do evento e mídias digitais (resolução mínima de 2MB/1080p) diretmanente no canal conversacional (WhatsApp/Drive).
FR8: O Administrador pode submeter as respostas prévias de design generativo (mockups com baixa opacidade e marca d'água de proteção territorial) ao crivo do cliente no mesmo chat.
FR9: O Administrador pode processar a transação financeira final de confirmação do projeto por meios diretos digitais (Pix).
FR10: O Administrador pode oficializar os pactos de SLA de logística detalhando data, endereço e faixa de horário para recebimento seguro do Kit Festa.
FR11: O Designer/Admin pode submeter matrizes fotográficas provindas de clientes como inputs para image2image num modelo Generativo de Imagens parametrizado.
FR12: O Designer/Admin pode utilizar o prompt estruturado padronizado das bibliotecas operacionais mitigando as alucinações do modelo de texturização.
FR13: O Designer/Admin pode converter e corrigir a renderização final entre perfis ICC de cores (Telas RGB para Impressão Substrato CMYK) usando software de edição gráfica.
FR14: O Designer/Admin pode exportar assets raster ou vetorizados (ex: painéis principais e tags segmentadas de corte contínuo) diretamente no formato fechado solicitado pelas rotativas da gráfica terceira.
FR15: O Administrador pode catalogar ordens concluídas em frentes de trabalho numa ferramenta assíncrona gerencial.
FR16: O Administrador pode desdobrar os itens da ordem nos caminhos lógicos da jornada técnica (Fluxo Artes Gráficas x Fluxo Artes Culinárias).
FR17: O Administrador pode validar checkpoints cruzados da esteira confirmando prontidão (Pronto para Impressão, Estrutura Montada, Bandeja Assada).
FR18: O Administrador pode invocar rotinas de suspensão operacional (modo de "Agenda de FDS Cheia") bloqueando ações transacionais da web app publicamente quando ocorrer burst capacity insuportável no board.

### NonFunctional Requirements

NFR-PERF-1: O Time to Interactive (TTI) base da vitrine SPA web deve ocorrer ≤ 3 segundos mesmo sob tráfego de redes flutuantes móveis (3G/4G chácaras), ancorando a atenção local.
NFR-PERF-2: As renderizações assíncronas resultantes de swipes informacionais de abas do catálogo (entre Tamanhos P,M,G) devem ocorrer perfeitamente sob latência ≤ 100 milissegundos, impedindo recarregamentos frustrantes.
NFR-PERF-3: Todos os assets críticos imagéticos carregados na tela operam nativamente a compressão em formatos de última geração (tamanho máximo de 200KB por imagem) com estratégias de adiamento em rolagem fora de viewport preservando conexões locais.
NFR-AV-1: A fundação do catálogo front-facing deverá suportar índices de integridade SLA mínimos (Uptime garantido por infraestutura em 99,9%). Indisponibilidade na sexta/sábado resulta na morte literal do faturamento agendado.
NFR-AV-2: O botão agressor primário de negociações conversacionais deve obrigatoriamente deter uma rota de fallback mecânica se falhar roteadores de rotas complexos (acionamento em no máximo 2 segundos após detecção de falha). Disparo limpo a um deep-link wa.me cru.
NFR-SEC-1: Imagens vulneráveis transitadas via WhatsApp devem ser permanentemente expurgadas dos servidores locais e em nuvem num prazo máximo de 72 horas após a entrega do produto físico confirmado.
NFR-SEC-2: As artes preliminares geradas pelo processamento IA embutidas no processo de conversão devem obrigatoriamente injetar matriz de proteção digital (Watermarks) cobrindo no mínimo 30% da área, obstruindo o aproveitamento irregular ("pirataria visual do design").
NFR-ACC-1: O Web App deve estar em conformidade mínima com o padrão WCAG 2.1 AA, assegurando contraste adequado de cores e suporte básico a leitores de tela nos botões de conversão.
NFR-TS: Uso de Next.js 15+, Tailwind v4 e Shadcn/UI com estratégia Static-First.

### Additional Requirements

- **Starter Template**: shadcn/create (CLI v4) recomendado para inicialização do projeto.
- **Data Architecture**: Static-First approach (JSON/TS constants em `src/config/products.ts`).
- **Frontend State**: React Local State / Context API.
- **Handoff Logic**: Utilitário de WhatsApp Deep-linking com codificação de URI.
- **Media Strategy**: Compressão WebP/AVIF com Lazy Loading.
- **Responsive Design**: Mobile-First com foco em "Thumb-zone" e gestos de swipe.
- **UI Components**: Cards de Seleção Visual, Progressive Disclosure para detalhes do kit e Magic Slider (Antes/Depois).
- **Branding**: Aplicação rigorosa da paleta (Tons creme/bege, rosa, verde, marrom) e tipografia Outfit.
- **Accessibility**: Alvos de clique mínimos de 44x44px.

### FR Coverage Map

FR1: Epic 2 - Seleção de tamanho por tabulação
FR2: Epic 2 - Comparação simultânea de 3 pacotes
FR3: Epic 1 - Portfólio visual de mockups IA
FR4: Epic 2 - Consulta de menu de itens avulsos
FR5: Epic 3 - Transição para WhatsApp via CTA
FR6: Epic 3 - Mensagem pré-preenchida com contexto

*Nota: Os requisitos FR7 a FR18 (Operação Interna e Fluxo de IA Backstage) foram movidos para a Fase 2.*

## Epic List

- **Epic 1**: Fundação Tech & Vitrine de Experiência
- **Epic 2**: Motor de Configuração & Ancoragem de Preços
- **Epic 3**: Ponte de Conversão & Handoff para WhatsApp

## Epic 1: Fundação Tech & Vitrine de Experiência

**Objetivo:** Estabelecer a base técnica performática e a interface de impacto visual (vitrine) que captura o desejo do cliente.
**Requisitos Cobertos:** FR3 (Portfólio visual de mockups IA).

### Story 1.1: Inicialização do Projeto com Next.js & Shadcn/UI

As a desenvolvedor,
I want inicializar o projeto usando as ferramentas recomendadas,
So that garanta uma base técnica sólida seguindo a arquitetura Static-First.

**Acceptance Criteria:**

**Given** que a arquitetura recomenda Shadcn/UI CLI v4 e Next.js 15+
**When** o comando `npx shadcn@latest init` for executado e as pastas estruturadas conforme o `architecture.md`
**Then** o projeto deve possuir o arquivo `src/config/products.ts` para dados locais
**And** rodar localmente sem erros de build.

### Story 1.2: Configuração do Design System (Tokens de Marca)

As a designer (Johny),
I want que o projeto use minha paleta de cores e tipografia específica,
So that garanta a estética premium e boutique em todos os componentes.

**Acceptance Criteria:**

**Given** as diretrizes em `ux-design-directions.html`
**When** o `tailwind.config.ts` for configurado com as cores (Creme #FAF6F0, Rosa #FFD6E0, Verde #D5E8D4, Marrom #4A3B32) e a fonte `Outfit`
**Then** os componentes Shadcn/UI devem carregar essas cores como variáveis CSS
**And** a tipografia padrão do site deve ser `Outfit`.

### Story 1.3: Vitrine de Experiência - Seção Hero e Galeria de Impacto

As a Mãe Anfitriã,
I want ser impactada visualmente por um layout boutique e galeria de fotos,
So that sinta segurança e entusiasmo com a proposta de valor.

**Acceptance Criteria:**

**Given** o layout mobile definido no arquivo `ux-design-directions.html`
**When** as seções Hero e Galeria de Impacto forem implementadas com imagens otimizadas
**Then** o TTI deve ser ≤ 3 segundos e as imagens devem usar Next.js `Image` com priority/lazy-loading
**And** a galeria deve exibir exemplos reais das transformações Premium (FR3).

## Epic 2: Motor de Configuração & Ancoragem de Preços

**Objetivo:** Implementar a lógica de orçamentação dinâmica onde o usuário dimensiona sua festa e visualiza o valor imediato dos kits (Decoy Pricing).
**Requisitos Cobertos:** FR1 (Seleção de tamanho), FR2 (Comparação simultânea), FR4 (Menus adicionais).

### Story 2.1: Implementação do Componente de Seleção de Tamanho (Cards P/M/G)

As a Mãe Anfitriã,
I want selecionar o tamanho da festa através de cards visuais,
So that entenda rapidamente qual pacote se adequa ao meu evento.

**Acceptance Criteria:**

**Given** que os tamanhos estão definidos no `src/config/products.ts`
**When** o usuário clica em um card de tamanho (P, M ou G)
**Then** a interface deve atualizar instantaneamente o resumo de itens (bolo, salgados, etc) sem recarregar a página
**And** o card selecionado deve ter destaque visual conforme o layout de referência.

### Story 2.2: Comparador de Pacotes Dinâmico (Básico vs Tradicional vs Premium)

As a Casal Organizador,
I want comparar os 3 níveis de decoração simultaneamente,
So that perceba que o pacote Premium é o melhor custo-benefício.

**Acceptance Criteria:**

**Given** um tamanho selecionado
**When** o usuário desliza/clica entre as abas de pacotes
**Then** o sistema deve exibir descrições claras e o valor total dinâmico para cada nível
**And** deve aplicar o efeito *Decoy Pricing* destacando o pacote Premium com badges e visual diferenciado.

### Story 2.3: Seção de Itens Avulsos e Resumo de Configuração

As a Mãe Anfitriã,
I want consultar o catálogo de itens extras e ver um resumo consolidado da minha escolha,
So that tenha total transparência sobre o valor final.

**Acceptance Criteria:**

**Given** uma configuração de kit em andamento
**When** o usuário rolar para a área de itens avulsos
**Then** o sistema deve listar os preços base de salgados unitários, bolo/kg e extras (FR4)
**And** manter um resumo fixo (Sticky Footer) com o Total Estimado atualizado reativamente.

## Epic 3: Ponte de Conversão & Handoff para WhatsApp

**Objetivo:** Criar a conexão fluida entre a exploração web e o fechamento consultivo, garantindo que o lead chegue com o contexto completo.
**Requisitos Cobertos:** FR5 (Transição WhatsApp), FR6 (Mensagem pré-preenchida).

### Story 3.1: Utilitário de Geração de Deep Link WhatsApp

As a desenvolvedor,
I want um utilitário funcional que transforme as escolhas do usuário em uma URL wa.me codificada,
So that garanta que os dados do pedido cheguem corretos ao vendedor.

**Acceptance Criteria:**

**Given** um estado de configuração de kit (Ex: Tamanho M + Kit Premium)
**When** o utilitário for invocado
**Then** ele deve gerar uma mensagem como: *"Olá Oliveiras! Montei meu Tamanho M com Kit Premium no site e gostaria de saber sobre a personalização."*
**And** todos os caracteres especiais devem estar convertidos corretamente para URI encoding.

### Story 3.2: Botão Master CTA e Rota de Fallback

As a Mãe Anfitriã,
I want um botão de contato eficiente e funcional,
So that possa fechar o pedido ou tirar dúvidas a qualquer momento.

**Acceptance Criteria:**

**Given** a Landing Page mobile
**When** o usuário clicar no botão "Fazer Pedido" (Sticky Footer)
**Then** o sistema deve disparar o link do WhatsApp gerado na Story 3.1
**And** se houver erro no processador dinâmico, deve existir um fallback para um link direto wa.me simples (NFR-AV-2).

### Story 3.3: Feedback UI de Sucesso no Canal Conversacional

As a Mãe Anfitriã,
I want ser informada que a transição para o WhatsApp foi bem-sucedida,
So that não tenha dúvidas de que meu pedido foi encaminhado.

**Acceptance Criteria:**

**Given** que o usuário clicou no CTA
**When** a ação de transbordo for iniciada
**Then** a interface deve mostrar um feedback visual breve (loading ou mensagem de redirecionamento) antes de abrir o aplicativo de chat.
