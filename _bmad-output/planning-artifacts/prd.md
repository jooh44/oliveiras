---
stepsCompleted:
  - step-01-init
  - step-02-discovery
  - step-02b-vision
  - step-02c-executive-summary
  - step-03-success
  - step-04-journeys
  - step-06-innovation
  - step-07-project-type
  - step-08-scoping
  - step-09-functional
  - step-10-nonfunctional
  - step-11-polish
inputDocuments:
  - planning-artifacts/product-brief-Oliveiras Doces e Salgados-2026-03-11.md
  - planning-artifacts/research/domain-tendencias-festas-personalizacao-ia-research-2026-03-11.md
  - planning-artifacts/research/market-oliveiras-doces-e-salgados-research-2026-03-11.md
workflowType: 'prd'
classification:
  projectType: web_app
  domain: retail
  complexity: low
  projectContext: greenfield
---

# Product Requirements Document - Oliveiras Doces e Salgados

**Author:** Johny
**Date:** 2026-03-11

## Executive Summary

A **Oliveiras Doces e Salgados** propõe um novo modelo de festas infantis locais (Piên-PR e região). O projeto orquestra a venda de um "Kit Festa" de alto padrão, unindo gastronomia artesanal autêntica a uma experiência de hiper-personalização via Web App e fechamento consultivo via WhatsApp. O produto resolve a dor dos clientes que buscam praticidade e estética superior em um único local, afastando-as de soluções genéricas.

### Differentiator & Innovation (The "Moat")

A disrupção sustentável (_moat_) reside na execução de três pilares:

1. **Gastronomia Premium:** Qualidade artesanal reconhecida que garante retenção e o marketing "boca-a-boca".
2. **"Drop-to-Physical" IA:** Uso de IA Generativa (Nano Banana) orquestrada por um Designer para garantir a hiper-personalização fotorealista da criança nos temas das festas.
3. **Engenharia de Produção Gráfica:** A conversão direta da arte digital gerada via prompt em produtos físicos impecáveis (fechamento de arquivos CMYK, controle de cor e corte preciso).

O mercado local sub-20k (Piên) é polarizado entre decorações de catálogo antigas ou party-planners inacessíveis. A Oliveiras cria um "Oceano Azul" ao entregar tecnologia generativa atrelada ao sabor caseiro.

## Success Criteria

### User Success

- **Momento "Aha!":** 100% dos clientes recebem uma amostra digital hiper-personalizada via WhatsApp antes do pagamento.
- **Advocacy:** 90% de avaliações positivas empíricas (elogios no WhatsApp e marcações orgânicas no Instagram).
- **Viralidade Orgânica:** Cada kit entregue gera de 2 a 3 potenciais leads qualificados através do ciclo social local.

### Business Success

- **Rentabilidade:** Mínimo de 40% de margem de lucro líquido em cada Kit Premium, diluindo custos de IA em alto valor agregado.
- **Precificação Estratégica:** Validação dos tickets médios alvo (Kit P: R$ 280-350 | Kit M: R$ 450-550 | Kit G: R$ 650-850).
- **Validação de Mercado:** Provar a tração do mercado de Piên para absorção de kits "Premium G" (alta margem estética) no primeiro trimestre.
- **Retenção:** Atingir ≥ 40% de retenção (novos pedidos em 6 meses) e 15 a 20 pedidos secundários mensais decorrentes das festas iniciais.

### Technical & Operational Success

- **SLA "Drop-to-Print":** Fluxo sistêmico completo (Foto -> Nano Banana -> CMYK -> Gráfica -> Montagem) em ≤ 5 dias.
- **Fidelidade Gráfica:** Precisão de corte físico e cores consistentes (RGB/Tela para CMYK/Físico).
- **Operação MVP:** Mínimo de 5 kits inteiros entregues no Q1 validando a inexistência de gargalos de coordenação entre Gráfica e Cozinha.

## Product Scope & Phased Development

A aplicação será construída como uma web app Mobile-First. O comportamento esperado é de uma Single Page Application (SPA/SSR) veloz, focada em guiar a seleção em "Cascata" usando ancoragem de preços (Decoy Pricing).

### MVP (Phase 1) - "Concierge & Experience"

Foco em validar a percepção de valor (Nano Banana + Conveniência). Vitrine tecnológica com backend transacional manual (WhatsApp + Kanban).

- **UX/UI:** Catálogo Web SPA/SSR veloz usando o efeito âncora visual (Decoy Pricing).
- **Operação:** 1 Arquiteto/Designer orquestrando o frontend, Nano Banana e entrega CMYK.
- **Gráfica:** Parceria validada para impressão local (isopor/totem) sem dor de cabeça técnica.
- **Culinária:** Equipe focada apenas na produção artesanal e montagem.

### Growth Features (Phase 2 - 6 a 12 meses)

- Sistema web interativo com orçamentador e simulação prévia automatizada.
- Internalização parcial de ferramentaria de impressão (A3+ fotográfica ou plotter).
- Expansão orgânica da oferta premium para São Bento do Sul.
- Criação de Tier "Ultra-Premium" (painéis em tecido/lona sublimes).

### Vision (Phase 3 - 12 a 24 meses)

- **E-commerce Full:** Checkout automático e portal de auto-gestão do cliente.
- **Unboxing Expansive:** Kits de embalagens hiper-personalizadas de altíssimo valor.
- **Vertical Digital B2BaaS:** Licenciamento da arquitetura digital das festas. A Oliveiras gera masterplans via IA e vende o direito de montagem física para buffets em território nacional.

## User Journeys

### Jornada 1: Fernanda (A Mãe Anfitriã) — _The Happy Path_

- **Contexto:** Fernanda organiza o aniversário da filha e sofre com a cotação fragmentada (bolo, salgado e gráfica separados).
- **Ação:** Acessa o Catálogo Web (Mobile-First). Usa o fluxo "Cascata": escolhe rapidamente pacote "Premium", tamanho "P". Aciona o WhatsApp com uma mensagem pré-preenchida e envia fotos de referência.
- **Clímax (Momento Aha):** Recebe mockup hiper-personalizado da própria filha no WhatsApp. O UAU estético valida o alto valor percebido e fecha negócio via Pix.
- **Resolução:** Recebe o kit completo no sábado (Comida impecável + Decoração gerada por IA).
- **Requisito Direto:** Interface de catálogo fluida baseada em filtros rápidos por tamanho e transição unificada para o WhatsApp.

### Jornada 2: Lucas e Patrícia (O Casal Upsell) — _The Decoy Effect Path_

- **Contexto:** Casal organizando festa íntima com orçamento inicial focado num pacote "Tradicional", mas de alta exigência estética para redes sociais.
- **Ação:** No catálogo em abas simultâneas, comparam Kit Básico, Tradicional e Premium do Tamanho P. O design ancora os preços de forma que o upgrade para o "Premium" parece financeiramente vantajoso pela inclusão do "Painel Imersivo IA".
- **Clímax:** Decidem sacrificar outra verba para esbanjar no "Premium" apenas pelo forte apelo de exclusividade gerado visualmente.
- **Resolução:** Viralizam o evento organicamente no Instagram resultando em novo CAC zerado para a empresa.
- **Requisito Direto:** Arquitetura Front-end orientada à indução de compra simultânea (Comparação de 3 Níveis em abas).

### Jornada 3: Johny (Admin/Design Ops) — _The Backstage Flow_

- **Contexto:** Pico de demanda com múltiplos pedidos Premium na fila na quinta-feira à noite. Risco de gargalo entre prazo da Gráfica e Cozinha.
- **Ação:** Utiliza setup Kanban interno e executa as artes em lote. Aplica os "Prompts Base" rigorosamente testados no Nano Banana e exporta para _templates_ fechados em CMYK no Illustrator.
- **Clímax / Resolução:** Facas de corte seguem para a parceira gráfica via nuvem em minutos. A linha do tempo é atualizada; cozinheiras autorizadas a iniciar a produção física sem atritos.
- **Requisito Direto:** Dashboard de tracking simplificado com duas vias de status (Aprovação de Arte vs Confecção da Comida). Repositório base de prompts consolidados.

## Pre-Launch Risk Mitigation

- **Risco Técnico (Gargalo da IA):** Demora nas iterações generativas ou alucinações. _Mitigação:_ Execução em lotes usando apenas "Prompts Base" pré-parametrizados como âncora industrial para os 5 temas mais rentáveis.
- **Risco Gráfico:** Aberrações cromáticas RGB > CMYK na gráfica local. _Mitigação:_ Fechamento rigoroso de pranchetas de impressão gerenciado exclusivamente pelo Designer (Johny)
- **Risco de Mercado (Resistência a Preço):** Choque de "Ticket Alto" no interior (R$350-R$850). _Mitigação:_ Tática agressiva do Momento Aha (Prévia com marca d'água ANTES do negócio fechado ancorando o desejo).
- **Risco de Demanda:** Estrangulamento da operação unitária. _Mitigação:_ "Freio de Mão Web". Admin pausa CTAs de WhatsApp no SPA e exibe aviso de escassez (ex: "Agenda do fds fechada").

## Functional Requirements (The Capability Contract)

### 1. Catalog Browsing & Decoy Pricing (Client-Facing)

- **FR1:** O usuário pode selecionar o tamanho do evento (Kit P, M ou G) usando filtros de tabulação em primeiro nível, atualizando as opções da vitrine ativamente.
- **FR2:** O usuário pode visualizar simultaneamente os 3 pacotes de decoração (Básico, Tradicional, Premium) atrelados à capacidade do evento escolhida, comparando descrições completas e preços finais.
- **FR3:** O usuário pode interagir com portfólios visuais (resolução mínima 1080p) detalhando _mockups_ gerados por IA para exemplificar o Tier Premium.
- **FR4:** O usuário pode consultar menus adicionais contendo itens avulsos quantificados (Salgados unitários, Bolo por kg, Peças de decoração extras) com preços base.
- **FR5:** O usuário pode acionar a transição assistida para o sistema conversacional (WhatsApp) via CTA.
- **FR6:** O usuário pode engatilhar uma mensagem inicial no WhatsApp pré-preenchida com as métricas do pacote focado no web-app.

### 2. Client Onboarding & Consultative Closing (WhatsApp Back-End)

- **FR7:** O Administrador pode receber descritivos do evento e mídias digitais (resolução mínima de 2MB/1080p) diretamente no canal conversacional (WhatsApp/Drive).
- **FR8:** O Administrador pode submeter as respostas prévias de design generativo (mockups com baixa opacidade e marca d'água de proteção territorial) ao crivo do cliente no mesmo chat.
- **FR9:** O Administrador pode processar a transação financeira final de confirmação do projeto por meios diretos digitais (Pix).
- **FR10:** O Administrador pode oficializar os pactos de SLA de logística detalhando data, endereço e faixa de horário para recebimento seguro do Kit Festa.

### 3. Generative Ops & Print Shop Handoff (Design Backstage)

- **FR11:** O Designer/Admin pode submeter matrizes fotográficas provindas de clientes como inputs para _image2image_ num modelo Generativo de Imagens parametrizado.
- **FR12:** O Designer/Admin pode utilizar o prompt estruturado padronizado das bibliotecas operacionais mitigando as alucinações do modelo de texturização.
- **FR13:** O Designer/Admin pode converter e corrigir a renderização final entre perfis ICC de cores (Telas RGB para Impressão Substrato CMYK) usando software de edição gráfica.
- **FR14:** O Designer/Admin pode exportar _assets_ raster ou vetorizados (ex: painéis principais e tags segmentadas de corte contínuo) diretamente no formato fechado solicitado pelas rotativas da gráfica terceira.

### 4. Production Orchestration (Operational Kanban)

- **FR15:** O Administrador pode catalogar ordens concluídas em frentes de trabalho numa ferramenta assíncrona gerencial.
- **FR16:** O Administrador pode desdobrar os itens da ordem nos caminhos lógicos da jornada técnica (Fluxo Artes Gráficas x Fluxo Artes Culinárias).
- **FR17:** O Administrador pode validar _checkpoints_ cruzados da esteira confirmando prontidão (Pronto para Impressão, Estrutura Montada, Bandeja Assada).
- **FR18:** O Administrador pode invocar rotinas de suspensão operacional (modo de "Agenda de FDS Cheia") bloqueando ações transacionais da web app publicamente quando ocorrer _burst capacity_ insuportável no board.

## Non-Functional Requirements

### Performance & Optimization (Critical for Decoy Pricing)

- **NFR-PERF-1:** O _Time to Interactive_ (TTI) base da vitrine SPA web deve ocorrer ≤ 3 segundos mesmo sob tráfego de redes flutuantes móveis (3G/4G chácaras), ancorando a atenção local.
- **NFR-PERF-2:** As renderizações assíncronas resultantes de _swipes_ informacionais de abas do catálogo (entre Tamanhos P,M,G) devem ocorrer perfeitamente sob latência ≤ 100 milissegundos, impedindo recarregamentos frustrantes.
- **NFR-PERF-3:** Todos os _assets_ críticos imagéticos carregados na tela operam nativamente a compressão em formatos de última geração (tamanho máximo de 200KB por imagem) com estratégias de adiamento em rolagem fora de viewport preservando conexões locais.

### Availability & Reliability ("Weekend Guarantee")

- **NFR-AV-1:** A fundação do catálogo front-facing deverá suportar índices de integridade SLA mínimos (Uptime garantido por infraestutura em 99,9%). Indisponibilidade na sexta/sábado resulta na morte literal do faturamento agendado.
- **NFR-AV-2:** O botão agressor primário de negociações conversacionais deve obrigatoriamente deter uma rota de _fallback_ mecânica se falhar roteadores de rotas complexos (acionamento em no máximo 2 segundos após detecção de falha). Disparo limpo a um _deep-link wa.me_ cru.

### Localized Security & Privacy (LGPD in Small Communities)

- **NFR-SEC-1:** Imagens vulneráveis transitadas via WhatsApp devem ser permanentemente expurgadas dos servidores locais e em nuvem num prazo máximo de 72 horas após a entrega do produto físico confirmado.
- **NFR-SEC-2:** As artes preliminares geradas pelo processamento IA embutidas no processo de conversão devem obrigatoriamente injetar matriz de proteção digital (Watermarks) cobrindo no mínimo 30% da área, obstruindo o aproveitamento irregular ("pirataria visual do design").

### Accessibility (Compliance)

- **NFR-ACC-1:** O Web App deve estar em conformidade mínima com o padrão WCAG 2.1 AA, assegurando contraste adequado de cores e suporte básico a leitores de tela nos botões de conversão.
