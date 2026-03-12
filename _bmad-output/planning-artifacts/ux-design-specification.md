---
stepsCompleted:
  - 1
  - 2
  - 3
  - 4
  - 5
  - 6
  - 7
  - 8
  - 9
  - 10
  - 11
  - 12
  - 13
inputDocuments:
  - prd.md
  - product-brief-Oliveiras Doces e Salgados-2026-03-11.md
  - kit_festa.md
  - domain-tendencias-festas-personalizacao-ia-research-2026-03-11.md
  - market-oliveiras-doces-e-salgados-research-2026-03-11.md
---

# UX Design Specification Oliveiras Doces e Salgados

**Author:** Johny
**Date:** 2026-03-12T10:28:09-03:00

---

<!-- UX design content will be appended sequentially through collaborative workflow steps -->

## Executive Summary

### Project Vision

O projeto visa revolucionar as festas infantis na região ofertando um Kit Festa "All-in-One". A plataforma, baseada em um Web App Mobile-First, conecta a gastronomia caseira e de alta qualidade com um sistema de decoração inovador gerado por IA, visando inserir a própria criança como protagonista do tema. O objetivo digital atua fortemente ancorando preços (Decoy Pricing) para facilitar a conversão de pacotes Premium e transferindo os leads aquecidos para um fechamento humano assistido via WhatsApp.

### Target Users

- **A Mãe Anfitriã**: Busca praticidade, resolução da fragmentação de serviço e experiência altamente emocional ao ver o filho sendo parte da festa.
- **O Casal Organizador / Upsell**: Casais que prezam pela exclusividade visual ("status" em redes sociais) e facilmente trocam upgrades básicos pelo painel imersivo IA Premium.
- **Design Ops e Produção (Backstage)**: Administradores que gerenciam dois fluxos de esteira assíncronos (Gráfica x Gastronomia) suportados por métodos Kanban.

### Key Design Challenges

- **Comparação Mobile (Decoy Pricing)**: Apresentar perfeitamente 3 opções e forçar a âncora no Premium em telinhas sem scroll infinito confuso (uso de abas / cards comparativos em side-swipes).
- **Checkout Conversacional**: Quebrar a expectativa tradicional de e-commerce trocando o carrinho tradicional por um transbordo inteligente para o WhatsApp com formulário / dados do carrinho prontos do lado do atendente.
- **Diretrizes de Identidade Visual**: Garantir que as diretrizes visuais criadas externamente sejam perfeitamente incorporadas e suportem a estética "premium" e emocional requerida pelas jornadas.

### Design Opportunities

- **Apelo Visual Imediato**: Mostrar um mosaico brilhante e instantâneo das criações da Nano Banana, transmitindo qualidade premium logo de cara.
- **Caminho Feliz "Cascata"**: Utilizar animações e interações atrativas durante ao toque / swipe ao selecionar Tamanhos e Tiers.
- **Integração de Identidade Visual**: Preparar os componentes visuais de forma flexível para que a Identidade Visual a ser importada do trabalho externo preencha o Design System com fluidez (tema de cores em variáveis CSS, tipografia amigável, e microinterações).

## Core User Experience

### Defining Experience

O fluxo mestre é composto pela "Navegação Comparativa em Cascata e Handoff Assistido": O usuário dimensiona sua festa e logo se depara com a Ancoragem de Preços (Decoy Pricing) dos kits. Sua ação mais crítica é deslizar comparando essas imagens e, no ápice do encanto estético visualizando as demonstrações do portfólio, transferir este "carrinho emocional" para o atendimento via WhatsApp de forma unificada e simples.

### Platform Strategy

- **Web App Mobile-First (SPA/SSR)**: Desenhado especificamente para o toque do polegar (Thumb-zone) e para conexões instáveis de interior urbano/rural.
- **Interatividade Assíncrona Total**: Zero recarregamento em escolhas de abas (TTI < 3s).

### Effortless Interactions

- Comparação lateral via deslizar de tela (*swipe*) entre Kits (Básico x Tradicional x Premium) com transições visuais fluídas que indicam adições de valor instantaneamente.
- Funcionalidade de "Antes / Depois": Uso de *sliders* de imagem para demonstrar visualmente (com o toque do dedo) a foto original da criança e o seu resultado espetacular gerado pelo estúdio.
- Geração de "Deep link" dinâmico para WhatsApp: O cliente nunca digita o próprio pedido. Clica no CTA e encontra toda a mensagem formalizada, precisando apenas de "Enviar".

### Critical Success Moments

- **Revelação Estonteante via "Antes e Depois"**: Quando manipulam o slider de Antes/Depois e entendem a genialidade da transformação. A materialidade e o fascínio ocorrem aqui, não em geração instantânea gerada pela IA, mas do portfólio *humano/curado*.
- **"O Momento Aha!" Oculto**: Quando recebem da equipe pelo WhatsApp o modelo amostral de baixa qualidade com o rosto da criança integrado no tema e aprovado por um humano (a real "magia de Oz").

### Experience Principles

- **Mobile Perfectionism**: Tolerância zero para textos microscópicos ou CTAs de difícil clique no aparelho celular.
- **Handoff Invisible**: O cliente não sente o "muro" entre sair de uma Landing Page impressionante e entrar no chat comercial do WhatsApp. É uma continuação natural e antecipada da experiência.
- **Visual System Placeholder**: Arquitetura Front-End "em branco" e expansiva, preparada para adotar de forma modular as Diretrizes de Identidade Visual.

## Desired Emotional Response

### Primary Emotional Goals

O sentimento central é o de "Encantamento Mágico e Alívio Imediato". O usuário (majoritariamente a mãe anfitriã) deve sentir fascínio ao perceber a alta personalização do serviço e alívio por poder organizar tudo em um único ponto confiável.

### Emotional Journey Mapping

- **Descoberta na Landing Page**: Curiosidade e Fascínio ("Nunca vi isso na minha cidade!").
- **Core Action (Scroll e Antes/Depois)**: Desejo e Empoderamento ("Eu posso dar essa festa incrível pro meu filho com alguns toques").
- **Handoff (Ida para o WhatsApp)**: Segurança e Acolhimento ("Eles já sabem o que eu quero, o processo está no controle deles agora").
- **Momento Aha! (Receber a Amostra IA)**: Êxtase e Validação plena de valor.
- **Pós-Entrega da Festa**: Orgulho de Anfitrião e Gratidão genuína.

### Micro-Emotions

- Cultivar a **Confiança Extrema** e afastar qualquer Insegurança sobre a qualidade via portfólio brilhantemente exibido.
- Gerar **Antecipação Positiva** no checkout ao invés de ansiedade e atrito em preencher formulários imensos ou conversar "do zero" com o comercial.

### Design Implications

- O foco do design deve estar em imagens heroicas (portfólios) em vez de descrições textuais longas para evocar emoção de imediato.
- Os microinterações (swipes e abas) precisam ser polidas, ágeis e sem travamentos para validar o senso de produto premium, construindo credibilidade instantânea.
- O Handoff deve ser enxugado para requerer apenas o número mínimo de cliques, diminuindo a carga cognitiva e focando só no delight.

### Emotional Design Principles

1. Visual em primeiro lugar, funcionalidade silenciosa nos bastidores.
2. Cada transição de tela deve confirmar ao usuário através do polimento de design: "Você está no lugar certo".
3. A tecnologia intrincada (IA Generativa de bastidores) deve permancer totalmente submissa e invisível à estética e ao sentimento acolhedor da celebração infantil artesanal.

## UX Pattern Analysis & Inspiration

### Inspiring Products Analysis

A base de inspiração focou em aplicativos de adoção em massa no Brasil que nossos clientes já amam: **Instagram**, **Mercado Livre**, **Shopee** e logicamente, o **WhatsApp**.

- **Instagram**: Demonstra sucesso no engajamento por meio de interfaces focadas em imagens em largura total, dispensando textos longos.
- **Mercado Livre/Shopee**: Mostram mestria em velocidade para que usuários escolham variantes (botões claros logo abaixo do produto) sem sair ou recarregar a tela atual, além de utilizarem gatilhos de *escassez* ou *tags de destaque*.
- **WhatsApp**: Trata-se da interface mais acolhedora de comunicação mentalmente; reduz o atrito e medo do "comércio eletrônico impessoal".

### Transferable UX Patterns

- **Photo-First (Padrão IG)**: Interface ancorada em imagens do tipo "Hero", focando visualmente nos sliders com a demonstração das edições (Antes e Depois).
- **Abas de Variantes Rápidas (Padrão Varejistas)**: Estruturação instantânea de seleções do "Tamanho (P, M, G)" e do "Nível (Básico, Tradicional, Premium)", atualizando o kit na mesma tela tal como escolher "Voltagem/Cor" no Mercado Livre.
- **Transbordo Assistencial (Padrão WhatsApp)**: Desvio do fluxo comum de um carrinho para um "Checkout Conversacional", finalizando a esteira de montagem em um deep link já estruturado para o chat humano.

### Anti-Patterns to Avoid

- **Checkout de E-commerce Clássico**: Exigência de logins, criação de nova senha e cadastramento extenso de informações. Totalmente inadequado para o cenário e gera muita fricção.
- **Poluição Visual Varejista (Efeito Shopee)**: Pop-ups sucessivos, cronômetros irrelevantes ou exageros visuais desqualificam a imagem de produto artesanal "Premium".

### Design Inspiration Strategy

- **Adotar**: A mentalidade "Photo-First" do Instagram e a agilidade de seleção entre abas ("Tap-targets") presentes nos líderes do varejo nacional. As marcações sutis ("Decoy Pricing") orientando vendas.
- **Adaptar**: Ao invés do tradicional "Comprar Agora/Adicionar no Carrinho", adaptaremos o CTA final transformando a energia de venda para o acolhimento consultivo em "Confirmar Opções no WhatsApp".
- **Evitar**: Letreiros frenéticos, poluição visual caótica e formulários com etapas engessadas e demoradas. Manter o "ar" limpo, Premium e acessível.

## Design System Foundation

### Design System Choice

**Headless UI / Themeable System (ex: Tailwind UI) integrado com React/Next.js**.
A escolha tática envolve garantir que os componentes semânticos acessíveis e responsivos estejam presentes "out-of-the-box", para serem pintados e orquestrados de modo totalmente customizado.

### Rationale for Selection

- **Velocidade de SEO e Perfomance**: A adoção do framework **Next.js** é obrigatória para viabilizar indexação em mecanismos de buscas (Google Meu Negócio/SEO e AIO - Artificial Intelligence Optimization) de forma nativa e extremamente rápida através de SSR/SSG.
- **Clean Canvas**: A biblioteca Headless provê a funcionalidade complexa (como abas deslizantes, sliders de antes/depois, modais mobile), enquanto não impõe seu próprio estilo.
- **Exclusividade Visual**: Possibilita o isolamento perfeito para aplicar os Guias de Identidade Visual produzidos in-house pelo proprietário (Johny), garantindo a estética Premium sem limites engessados de sistemas corporativos.

### Implementation Approach

A base Front-End será fundamentada em **Next.js** orquestrado preferencialmente com Tailwind CSS para injeção modular da Identidade Visual a ser importada. O Web App deve ser otimizado para a teia semântica desde o dia 1 para rankear no Google local de Piên.

### Customization Strategy

1. Mapeamento das variáveis de cores, tipografia da Identidade Visual desenvolvida sob medida em variáveis globais do CSS/Tailwind.
2. Composição de macro-componentes essenciais (Abas de Preço, Sliders Hero, Botões de Handoff Wa.me) utilizando os tokens de design injetáveis.
3. Todo componente deve ser exaustivamente testado nas métricas do Core Web Vitals (LCP, FID, CLS) para suportar a estratégia de perfomance imposta no PRD.

## Core Interaction Mechanics (MVP)

### MVP Core Interaction

A "Experiência Matadora" do aplicativo Web é o processo de **Navegação Comparativa Instantânea acoplada à Demonstração de Portfólio**. O usuário dimensiona sua festa e visualiza de forma instantânea (sem recarregamento de página) a diferença de itens e valores entre pacotes, culminando na interação de um "Slider Antes/Depois" encantador, finalizando num botão de contato imediato. O MVP limitará isso conscientemente à curadoria de fotos estáticas (galeria), substituindo um gerador de IA em tempo real complexo por um fluxo de vendas emocional, ágil e altamente funcional.

### User Mental Model

Atualmente, o modelo mental para montar uma festinha infantil gira em torno de planilhas mentais ou anotações caóticas, demandando que os organizadores solicitem orçamentos separados para comida e decoração, gerando frustração.
A expectativa não-atendida que a Oliveiras resolve: visualizar o todo instantaneamente com garantia de qualidade unificada. A barreira ocorre no preenchimento de formulários longos em e-commerces, o que será totalmente solucionado convertendo esses passos apenas para uma única e rica Landing Page que desemboca num ambiente seguro de bate-papo comercial (Wa.me).

### Success Criteria

- **Zero Flash of Unstyled Content / Loading Screens:** Trocar as abas ("Básico", "Tradicional", "Premium") não deve acarretar nenhum tipo de esmaecimento de tela ou loadings prolongados. Alteração reativa pura no DOM.
- **Micro-interações de Tátil**: Deslizar no "Antes/Depois" tem que ser percebido e executado pelo toque na tela de um dispositivo móvel com perfeição (suporte a gestos touch e swipes).
- **Deep Handoff sem fricção**: O clique no CTA deve abrir diretamente o aplicativo do WhatsApp do cliente com as variáveis escolhidas pré-preenchidas na caixa de texto. Sem nenhum login requerido pela aplicação da loja.

### Novel UX Patterns versus Established

A execução dependerá da combinação inovadora de **Padrões UX Estabelecidos**:

- **Sliders Image Comparison (Antes/Depois) Touch-friendly** (Padrão frequentemente visto na área estética/Dermatologia, agora adaptado ao nicho festas para materializar a proposta de valor "Nano Banana").
- **Tap-Targets e Abas com feedback instantâneo** (E-commerces como Shopee e Mercado Livre).
- **Handoff assistencial** (Redirecionamento nativo do wa.me via URI).

A novidade reside na **combinação desses padrões num nicho atrasado tecnologicamente**, entregando a sofisticação visual do varejo high-end para festas infantis locais em Piên e região, com base construída sobre as diretrizes da Marca que irão suportar visualmente esse modelo interativo.

### Experience Mechanics

**1. Initiation:** O usuário chega pela bio do Instagram ou através de campanhas locais do Google Meu Negócio, e já se depara com a hero-section e a seleção primária de tamanho da festa (P, M, G).
**2. Interaction:** O usuário clica e transita livremente pelas Abas de Variantes ("Básico", "Tradicional", "Premium"). É aqui que ocorre a Ancoragem (Decoy). Paralelo a isso, manipulam os sliders da Galeria de Impacto evidenciando a transformação Premium feita nas fotos da IA de portfólio. Mudar o pacote re-calcula o inventário (ex: 200 para 400 salgados) e o preço sem carregar a página.
**3. Feedback:** O sistema atualiza tipograficamente o valor cobrado, o resumo dos itens, acende "tags visuais" no pacote Premium para reforçar o bom negócio, e responde ao movimento dos dedos com fluidez.
**4. Completion:** Ao apertar o CTA de Conversão, um script concatena as configurações testadas na sessão (Tamanho + Nível do Combo Selecionado), gerando e acionando uma `href="https://wa.me/..."` URI codificada. O sucesso finaliza-se com o usuário deparando-se com a própria tela de confecção de mensagem do WhatsApp, já com as informações prontas para envio aos vendedores humanos.

## Design Direction Decision

### Design Directions Explored

Foram exploradas visualmente opções baseadas nas diretrizes visuais aprovadas (Tons Creme/Bege, Rosa Claro, Verde Claro, Marrom, fontes arredondadas). A exploração incluiu formatos de Cartões, Estilo Boutique e Minimalista.

### Chosen Direction

A direção escolhida (Direction 1 refinada) é o **Fluxo Calculadora Visual (Mobile-First)**. Esta direção é estruturada nas seguintes etapas sequenciais de cima para baixo, focando em manter a mãe anfitriã engajada e ciente do preço:

1. **Seleção de Tamanho Visual:** Abas horizontais roláveis (em cartões) destacando o público atendido, onde cada tamanho (P, M, G) possui sua respectiva imagem de demonstração (o usuário toca no cartão para selecionar).
2. **Seleção do Kit de Decoração Visual:** Imediatamente abaixo, abas similares em cartões permitem escolher o estilo de decoração (Básico, Tradicional, Premium IA). A opção Premium foca no slider Antes/Depois para ancorar o valor.
3. **Price Context & Checkout:** O sistema cruza e calcula instantaneamente as duas escolhas (Tamanho seleccionado + Kit seleccionado) para exibir um "Total Estimado" consolidado de forma dinâmica. Acompanha isso um CTA pulsante que envia todas as escolhas formatadas direto para o WhatsApp do vendedor.
4. **Portfólio Gallery:** Uma seção 100% fotográfica posicionada ao final da página para reforçar o desejo visual ("Dream Mode") antes ou depois da decisão primária.

### Design Rationale

Esta decisão tática afasta completamente a "Oliveiras Doces e Salgados" da frustração dos formulários de e-commerce tradicionais. A jornada torna-se um exercício interativo de "Montar a Festa". A exposição ininterrupta a fotografias reais (nos botões de tamanho, nos botões de kit e na galeria final) reduz a insegurança online, enquanto o cálculo de preço ao-vivo elimina objeções ocultas antes mesmo de a mãe chegar no contato via WhatsApp. É um fluxo voltado massivamente para Conversão Assistida de Alto Valor.

### Technical Implementation Logic

A codificação precisará se beneficiar dos carrosséis horizontais nativos de CSS (`snap-x`) para deslizar as fotos de tamanho e kit sem o uso pesado de Javascript, mantendo o *feel* de aplicativo nativo (Thumb-zone interactions). O cruzamento de preços (Tamanho X Decor) será lidado por estados reativos simples do React no Front-End, mantendo a performance de indexação exigida (Next.js SSR/SSG) e sem nenhuma ligação a bancos de dados complexos neste estágio (Zero Back-end calls needed until final WhatsApp redirect).

## User Journey Flows

### Configuração e Orçamento (Web App)

Este fluxo descreve a interação tátil do usuário ao dimensionar sua festa e selecionar o nível de serviço, garantindo que o "Handoff" ocorra com o contexto completo.

```mermaid
graph TD
    A[Landing Page: Hero & Portfólio] --> B{Seleção de Tamanho}
    B -->|Toca Cartão P/M/G| C[Feedback Visual: Foto + Itens Troca]
    C --> D{Seleção de Kit}
    D -->|Toca Tradicional/Premium| E[Calculadora: Preço Dinâmico]
    E --> F[Display: Valor Total Estimado]
    F --> G[Ação: Botão WhatsApp]
    G --> H[WhatsApp: Mensagem Pré-Escrita]

### Fluxo de Personalização e Fechamento (WhatsApp Concierge)

O fluxo que ocorre após o contato inicial, onde a Oliveiras utiliza o "Aha! Moment" da prévia da arte para converter o lead.

```mermaid
graph TD
    A[WhatsApp: Chegada do Lead] --> B[Instrução: Envio de Foto]
    B --> C[Estúdio: Criação da Amostra IA]
    C --> D[WhatsApp: Envio da Amostra para Aprovação]
    D --> E{Cliente Gostou?}
    E -->|Não| F[Recriar/Ajustar Arte]
    F --> C
    E -->|Sim| G[Geração de Link/Pix de Pagamento]
    G --> H[Status: Em Produção]
    H --> I[Entrega/Sucesso]
```

### Journey Patterns

- **Deep Context Handoff:** O link do WhatsApp carrega os parâmetros escolhidos (Tamanho e Kit), eliminando a necessidade de o usuário repetir suas escolhas no chat.
- **Visual Validation First:** Antes de qualquer proposta de pagamento, o usuário recebe a validação visual (amostra da arte), o que reduz drasticamente a taxa de desistência.

### Flow Optimization Principles

- **Minimizing Steps to Value:** A usuária chega ao preço e ao primeiro passo da personalização em menos de 3 seleções.
- **Progressive Disclosure:** Detalhes técnicos sobre os itens do kit são revelados apenas após a seleção do tamanho, mantendo o foco inicial no impacto visual.

## Component Strategy

### Design System Components

A Oliveiras Doces e Salgados utilizará componentes de fundação do **Tailwind CSS + Headless UI**, garantindo acessibilidade nativa e perfomance móvel.

- **Layout Grids & Spacing:** Flexbox e CSS Grid do Tailwind para o layout "Clean & Spacious".
- **Interactive Disclosures:** Componentes Headless UI para as abas de seleção e detalhamento dinâmico.
- **Form Elements:** Inputs minimalistas para a coleta de nomes e temas (antes do transbordo).

### Custom Components

Para garantir o diferencial "All-in-One", desenhamos componentes sob medida:

#### 1. Card de Seleção Visual (Tamanho/Kit)

- **Propósito:** Facilitar a escolha intuitiva via fotografia heroica.
- **Anatomy:** Imagem aspect-square/video, Título, Badge de Destaque, Borda de Seleção (Brown).
- **Interação:** Feedback visual instantâneo (opacidade reduzida em itens não selecionados).

#### 2. Kit Details (Progressive Disclosure)

- **Propósito:** Mostrar exatamente o que compõe a escolha do usuário assim que ele toca em um card.
- **Content:** Mapeamento dinâmico do `kit_festa.md` (Ex: 2,5kg bolo, 150 salgados).
- **Footer Text:** "Toda a decoração é personalizada com seu filho como protagonista." (Crucial para organização visual e ancoragem de valor).
- **Behavior:** Efeito "Slide Down" suave ao alternar entre P, M e G ou níveis de decoração.

#### 3. Magic Slider (Antes/Depois)

- **Propósito:** Prova real da personalização via foto.
- **Anatomy:** Camada superior (Painel Premium) deslizante sobre a Camada inferior (Foto base).
- **Accessibility:** Uso de `aria-valuenow` para descrever a posição do slider para leitores de tela.

### Component Implementation Strategy

- **Client-Side States:** Utilização de estados reativos (React State) para o cálculo dinâmico de preço e troca de conteúdo de kits, mantendo o TTI < 3s.
- **Design Tokens:** Mapeamento restrito às cores approved (Bege, Rosa, Verde, Marrom) no arquivo de configuração do Tailwind.

### Implementation Roadmap

**Phase 1 - Core Flow:**

- [ ] Implementação do Grid de Tamanhos (P, M, G).
- [ ] Desenvolvimento do Componente de Detalhamento de Itens.
- [ ] Banner Dinâmico de Checkout (Wa.me).

**Phase 2 - Emotional Delight:**

- [ ] Componente Slider "Antes/Depois".
- [ ] Animações de transição entre seleções.

## UX Consistency Patterns

### Button Hierarchy

- **Primary Action (CTA Master):** "Continuar no WhatsApp". Único elemento em verde (`brand-green`), fixo no rodapé (sticky), com sombra para destaque.
- **Secondary Actions:** Cartões de Tamanho e Kit. Usam bordas marrons (`brand-brown`) e fundos claros para indicar estados selecionados sem competir com o CTA principal.

### Feedback Patterns

- **Visual Confirmation:** Brilho sutil ou animação de "check" ao selecionar itens.
- **Price Pulse:** O valor total pisca levemente ao ser atualizado por uma troca de kit, garantindo que a usuária note a mudança de preço.

### Navigation & Mobile Patterns

- **Sticky Footer:** Banner de orçamento e CTA sempre visíveis no scroll mobile.
- **Thumb-Zone Accessibility:** Todos os alvos de clique possuem no mínimo 44px de altura.
- **Contextual Handoff:** O link do WhatsApp envia uma mensagem completa: *"Olá Oliveiras! Montei meu [TAMANHO] [KIT] no site e gostaria de saber sobre a personalização para o meu filho(a)."*

### Form & Feedback Patterns

- **Zero Forms:** O Web App não possui campos de input clássicos na LPs, focando na escolha visual. A coleta de dados ocorre no ambiente seguro e familiar do WhatsApp.

## Responsive Design & Accessibility

### Responsive Strategy

Como a maioria dos clientes acessa via redes sociais, o design é **Mobile-First**. No desktop, a interface expande para um layout de duas colunas, mantendo a calculadora persistente ao lado do portfólio expandido.

### Breakpoint Strategy

- **Mobile (<768px):** Layout em coluna única, carrosséis horizontais nativos (`snap-x`), e Sticky Footer.
- **Desktop (>1024px):** Layout "Split-screen" com portfólio em grid à esquerda e configurador à direita.

### Accessibility Strategy

- **WCAG AA Compliance:** Contraste mínimo de 4.5:1 em todos os textos sobre o fundo `brand-bg`.
- **Touch Targets:** Todos os elementos interativos possuem área mínima de 44x44px.
- **ARIA Labels:** Etiquetas descritivas para estados de seleção e atualização dinâmica de preços para leitores de tela.

### Testing Strategy

- **Real Device Testing:** Testes obrigatórios em dispositivos Android e iOS com conexões simuladas de baixa velocidade (3G).
- **Accessibility Audit:** Verificação via ferramentas automatizadas (Lighthouse/Axe) e navegação apenas por teclado.

### Implementation Guidelines

- **Next.js SSR/SSG:** Para garantir performance e SEO local (Piên/PR).
- **Tailwind Tokens:** Uso restrito da paleta de cores e tipografia aprovada nas variáveis de sistema.
