export interface VideoScript {
  id: string;
  module: string;
  duration: string;
  title: string;
  scenes: Scene[];
  voiceover: string[];
  visualNotes: string[];
  musicStyle: string;
  captionStyle: string;
}

export interface Scene {
  timestamp: string;
  visual: string;
  text: string;
  animation: string;
}

export const videoScripts: VideoScript[] = [
  {
    id: "intro-tiktok-shop",
    module: "Introdução",
    duration: "45 segundos",
    title: "TikTok Shop - Nova Forma de Renda Extra",
    scenes: [
      {
        timestamp: "0:00-0:05",
        visual: "Logo TikTok animado com brilho, fundo preto com gradiente azul-rosa",
        text: "TikTok Shop 💰",
        animation: "Logo surge com zoom suave + partículas brilhantes"
      },
      {
        timestamp: "0:05-0:10",
        visual: "Ícones de dinheiro ($) flutuando, moedas caindo",
        text: "Uma nova forma de renda extra",
        animation: "Moedas caem em slow motion com brilho dourado"
      },
      {
        timestamp: "0:10-0:18",
        visual: "Montagem rápida: pessoas comuns gravando vídeos no celular",
        text: "Milhares já estão vendendo",
        animation: "Split screen com 4 criadores diferentes"
      },
      {
        timestamp: "0:18-0:25",
        visual: "Gráfico crescente animado, números subindo",
        text: "Sem estoque. Sem investimento inicial.",
        animation: "Linha do gráfico sobe com efeito neon azul"
      },
      {
        timestamp: "0:25-0:35",
        visual: "Celular na mão, tela do TikTok Shop com produtos",
        text: "Você escolhe. Você promove. Você lucra.",
        animation: "Swipe nos produtos com transição suave"
      },
      {
        timestamp: "0:35-0:45",
        visual: "Logo TokUnlocked aparece com brilho, CTA final",
        text: "Comece hoje. Seu futuro agradece. 🚀",
        animation: "Logo pulsa com gradiente azul-rosa"
      }
    ],
    voiceover: [
      "E se você pudesse ganhar dinheiro vendendo produtos... sem ter estoque?",
      "O TikTok Shop está mudando a vida de milhares de pessoas.",
      "Você não precisa de seguidores. Não precisa de investimento.",
      "Basta escolher produtos, criar vídeos curtos e começar a lucrar.",
      "Sua nova fonte de renda está a um vídeo de distância.",
      "Comece hoje com o TokUnlocked."
    ],
    visualNotes: [
      "Fundo: preto com gradiente azul (#00D4FF) e rosa (#FF006E)",
      "Fonte: Montserrat Bold, branca com sombra suave",
      "Transições: fade rápido (0.3s) entre cenas",
      "Efeitos: partículas brilhantes, glow nos textos",
      "Logo TikTok: usar versão oficial com permissão de uso educacional"
    ],
    musicStyle: "Upbeat electronic, BPM 120-130, estilo motivacional digital",
    captionStyle: "Legendas grandes, centralizadas, palavra por palavra com destaque em amarelo nas keywords"
  },
  {
    id: "module-2-zero-followers",
    module: "Módulo 2",
    duration: "60 segundos",
    title: "Começando do Zero (sem seguidores)",
    scenes: [
      {
        timestamp: "0:00-0:08",
        visual: "Conta TikTok com 0 seguidores na tela",
        text: "0 seguidores? Sem problema! ✨",
        animation: "Número 0 pulsa e depois explode em confete digital"
      },
      {
        timestamp: "0:08-0:15",
        visual: "Perfil real de conta pequena (50-200 seguidores) com vendas",
        text: "Ela começou com 23 seguidores",
        animation: "Screenshot do perfil com zoom nos números de vendas"
      },
      {
        timestamp: "0:15-0:22",
        visual: "Notificação de venda aparecendo na tela",
        text: "Primeira venda em 5 dias 🎉",
        animation: "Notificação surge com som de 'ding' e shake"
      },
      {
        timestamp: "0:22-0:30",
        visual: "Três passos animados: 1. Criar conta 2. Escolher produto 3. Gravar vídeo",
        text: "O segredo? Simplicidade.",
        animation: "Ícones aparecem em sequência com checkmarks"
      },
      {
        timestamp: "0:30-0:38",
        visual: "Vídeo sendo gravado no celular (POV), produto na mão",
        text: "Você não precisa aparecer",
        animation: "Câmera foca no produto, não no rosto"
      },
      {
        timestamp: "0:38-0:45",
        visual: "Algoritmo do TikTok representado como rede neural brilhante",
        text: "O algoritmo entrega para quem quer comprar",
        animation: "Conexões acendem como circuito elétrico"
      },
      {
        timestamp: "0:45-0:52",
        visual: "Montagem rápida: 5 contas pequenas que venderam",
        text: "Eles começaram do zero. Você também pode.",
        animation: "Grid 2x2 com perfis reais (dados anonimizados)"
      },
      {
        timestamp: "0:52-0:60",
        visual: "Texto motivacional com fundo em movimento",
        text: "Sua primeira venda começa hoje 💪",
        animation: "Texto surge com efeito de digitação + brilho"
      }
    ],
    voiceover: [
      "Você acha que precisa de milhares de seguidores para vender no TikTok?",
      "Errado.",
      "Essa criadora tinha apenas 23 seguidores quando fez sua primeira venda.",
      "O TikTok Shop não funciona como Instagram. Aqui, o algoritmo é seu melhor amigo.",
      "Ele mostra seu vídeo para pessoas que realmente querem comprar.",
      "Você não precisa de seguidores. Você precisa de um bom produto e um vídeo simples.",
      "Milhares começaram do zero. E estão lucrando agora.",
      "Sua vez chegou."
    ],
    visualNotes: [
      "Usar screenshots reais de contas pequenas (com permissão ou dados anonimizados)",
      "Animações suaves, nada muito rápido",
      "Cores: fundo dark (#0A0A0A) com acentos em azul neon (#00F0FF)",
      "Emojis sutis para reforçar emoção",
      "Fonte: Inter ou Poppins, peso 600-700"
    ],
    musicStyle: "Inspiracional, piano suave com beat eletrônico leve, BPM 100",
    captionStyle: "Legendas em blocos, 2-3 palavras por vez, destaque em palavras-chave (amarelo ou rosa)"
  },
  {
    id: "module-3-algorithm",
    module: "Módulo 3",
    duration: "50 segundos",
    title: "Aquecimento da Conta e Algoritmo",
    scenes: [
      {
        timestamp: "0:00-0:06",
        visual: "Cérebro digital com conexões acendendo",
        text: "O algoritmo é uma máquina de aprender 🧠",
        animation: "Neurônios acendem em sequência, estilo Matrix"
      },
      {
        timestamp: "0:06-0:12",
        visual: "Conta nova vs conta 'aquecida' - comparação lado a lado",
        text: "Conta fria = alcance baixo ❄️",
        animation: "Lado esquerdo: números baixos, azul gelado"
      },
      {
        timestamp: "0:12-0:18",
        visual: "Mesma comparação, lado direito brilhando",
        text: "Conta aquecida = alcance explosivo 🔥",
        animation: "Lado direito: números altos, laranja/vermelho"
      },
      {
        timestamp: "0:18-0:26",
        visual: "Checklist animado: assistir vídeos, curtir, comentar, seguir",
        text: "Como aquecer em 3 dias:",
        animation: "Cada item aparece com checkmark verde"
      },
      {
        timestamp: "0:26-0:32",
        visual: "Celular com TikTok aberto, scrolling rápido",
        text: "1. Assista vídeos do seu nicho (30 min/dia)",
        animation: "Feed rolando com vídeos relacionados ao nicho"
      },
      {
        timestamp: "0:32-0:38",
        visual: "Mão curtindo e comentando vídeos",
        text: "2. Curta, comente, salve (mostre interesse)",
        animation: "Ícones de like/comment aparecem com efeito"
      },
      {
        timestamp: "0:38-0:44",
        visual: "Gráfico de alcance subindo exponencialmente",
        text: "3. Poste 1 vídeo por dia (consistência)",
        animation: "Linha do gráfico sobe com explosão no final"
      },
      {
        timestamp: "0:44-0:50",
        visual: "Rede de energia conectada, tudo aceso",
        text: "Resultado: algoritmo ativado ⚡",
        animation: "Circuito completo acende com pulso elétrico"
      }
    ],
    voiceover: [
      "O algoritmo do TikTok é como um cérebro. Ele aprende com você.",
      "Se sua conta é nova, ele ainda não sabe o que você quer vender.",
      "Por isso, você precisa 'aquecer' sua conta.",
      "Passo um: assista vídeos do seu nicho por 30 minutos por dia.",
      "Passo dois: curta, comente e salve. Mostre interesse real.",
      "Passo três: poste um vídeo por dia. Consistência é tudo.",
      "Em três dias, o algoritmo vai entender seu público.",
      "E seu alcance vai explodir."
    ],
    visualNotes: [
      "Estilo cyberpunk: dark com neon azul, rosa e roxo",
      "Animações fluidas, efeito de energia fluindo",
      "Usar ícones minimalistas para ações (like, comment, share)",
      "Gráficos simples mas impactantes",
      "Transições com efeito de 'glitch' suave"
    ],
    musicStyle: "Synthwave, eletrônico futurista, BPM 115, energia crescente",
    captionStyle: "Legendas com efeito neon, borda brilhante, aparecem palavra por palavra"
  },
  {
    id: "module-4-viral-tools",
    module: "Módulo 4",
    duration: "45 segundos",
    title: "Criação de Vídeos Virais (IA Tools)",
    scenes: [
      {
        timestamp: "0:00-0:05",
        visual: "Logo OpusClip + ChatGPT lado a lado",
        text: "IA criando vídeos virais 🤖",
        animation: "Logos aparecem com brilho tech"
      },
      {
        timestamp: "0:05-0:12",
        visual: "Vídeo longo sendo cortado automaticamente pelo OpusClip",
        text: "1 vídeo longo = 10 clipes virais",
        animation: "Timeline sendo dividida em segmentos"
      },
      {
        timestamp: "0:12-0:18",
        visual: "Interface do OpusClip em ação (screen recording)",
        text: "OpusClip faz o trabalho pesado",
        animation: "Cursor clicando, vídeos sendo gerados"
      },
      {
        timestamp: "0:18-0:25",
        visual: "ChatGPT gerando legendas e hooks",
        text: "ChatGPT escreve suas legendas",
        animation: "Texto sendo digitado automaticamente"
      },
      {
        timestamp: "0:25-0:32",
        visual: "Exemplo de hook viral na tela",
        text: "\"Você está perdendo dinheiro se...\"",
        animation: "Texto aparece com efeito de máquina de escrever"
      },
      {
        timestamp: "0:32-0:38",
        visual: "Vídeo final publicado no TikTok com engajamento alto",
        text: "Resultado: vídeos que convertem",
        animation: "Números de views/likes subindo rapidamente"
      },
      {
        timestamp: "0:38-0:45",
        visual: "CTA com logos das ferramentas",
        text: "Automatize. Escale. Lucre. 🚀",
        animation: "Texto pulsa com gradiente animado"
      }
    ],
    voiceover: [
      "Criar vídeos virais nunca foi tão fácil.",
      "Com OpusClip, você transforma um vídeo longo em dez clipes prontos para viralizar.",
      "A inteligência artificial identifica os melhores momentos automaticamente.",
      "Depois, use o ChatGPT para criar legendas que prendem atenção.",
      "Hooks poderosos. Chamadas para ação irresistíveis.",
      "Em minutos, você tem conteúdo profissional pronto para postar.",
      "Automatize sua criação. Escale seus resultados."
    ],
    visualNotes: [
      "Mostrar interfaces reais das ferramentas (screen recording)",
      "Ritmo rápido, cortes dinâmicos",
      "Usar setas e círculos para destacar funcionalidades",
      "Cores tech: azul elétrico, roxo, verde neon",
      "Fonte: Roboto Mono ou JetBrains Mono (tech vibe)"
    ],
    musicStyle: "Upbeat tech house, BPM 128, energia alta e moderna",
    captionStyle: "Legendas rápidas, estilo TikTok nativo, destaque em keywords com cor diferente"
  },
  {
    id: "module-5-product-strategy",
    module: "Módulo 5",
    duration: "50 segundos",
    title: "Estratégia de Produtos e Posicionamento",
    scenes: [
      {
        timestamp: "0:00-0:06",
        visual: "Três produtos lado a lado: um com X vermelho, dois com check verde",
        text: "Nem todo produto vende ❌✅",
        animation: "Produtos ruins desaparecem, bons brilham"
      },
      {
        timestamp: "0:06-0:13",
        visual: "Checklist de critérios: preço, demanda, comissão",
        text: "O que procurar:",
        animation: "Cada critério aparece com ícone animado"
      },
      {
        timestamp: "0:13-0:19",
        visual: "Gráfico de preço ideal: $15-$50",
        text: "Preço: entre $15 e $50",
        animation: "Barra de preço se ajusta na zona verde"
      },
      {
        timestamp: "0:19-0:25",
        visual: "Ícone de trending com chama",
        text: "Demanda: produtos em alta 🔥",
        animation: "Chama cresce e pulsa"
      },
      {
        timestamp: "0:25-0:31",
        visual: "Calculadora mostrando comissão de 20%+",
        text: "Comissão: mínimo 20%",
        animation: "Números calculando, resultado em verde"
      },
      {
        timestamp: "0:31-0:38",
        visual: "Tela do TikTok Shop com filtros aplicados",
        text: "Use os filtros do TikTok Shop",
        animation: "Cursor aplicando filtros, produtos aparecendo"
      },
      {
        timestamp: "0:38-0:44",
        visual: "Produto sendo promovido em vídeo, conversão acontecendo",
        text: "Posicione como solução, não produto",
        animation: "Split screen: produto vs benefício"
      },
      {
        timestamp: "0:44-0:50",
        visual: "Gráfico de conversão subindo",
        text: "Produto certo = vendas certas 💰",
        animation: "Linha sobe com explosão de confete"
      }
    ],
    voiceover: [
      "Escolher o produto errado é o erro número um de iniciantes.",
      "Você precisa de três coisas: preço certo, demanda alta e boa comissão.",
      "Produtos entre quinze e cinquenta dólares convertem melhor.",
      "Procure itens que estão em alta. Tendências são suas aliadas.",
      "E nunca promova algo com menos de vinte por cento de comissão.",
      "Use os filtros do TikTok Shop para encontrar os melhores produtos.",
      "E lembre-se: venda a solução, não o produto.",
      "Produto certo, posicionamento certo, vendas garantidas."
    ],
    visualNotes: [
      "Usar ícones de e-commerce (carrinho, dinheiro, gráfico)",
      "Cores: verde para aprovado, vermelho para reprovado",
      "Gráficos simples e didáticos",
      "Screenshots reais da interface do TikTok Shop",
      "Fonte: Poppins, peso 600, alta legibilidade"
    ],
    musicStyle: "Corporate motivacional, BPM 110, tom profissional mas acessível",
    captionStyle: "Legendas em blocos, números e porcentagens em destaque (amarelo ou verde)"
  },
  {
    id: "module-6-30day-plan",
    module: "Módulo 6",
    duration: "60 segundos",
    title: "Plano de 30 Dias até a Primeira Venda",
    scenes: [
      {
        timestamp: "0:00-0:06",
        visual: "Calendário animado com 30 dias",
        text: "30 dias para sua primeira venda 📅",
        animation: "Calendário se abre com efeito 3D"
      },
      {
        timestamp: "0:06-0:12",
        visual: "Dia 1-3: ícone de perfil + checkmark",
        text: "Dias 1-3: Configure sua conta ✅",
        animation: "Checkmark verde aparece com som de sucesso"
      },
      {
        timestamp: "0:12-0:18",
        visual: "Dia 4-7: ícone de olho + vídeos",
        text: "Dias 4-7: Aqueça o algoritmo 🔥",
        animation: "Termômetro subindo, cor mudando de azul para vermelho"
      },
      {
        timestamp: "0:18-0:24",
        visual: "Dia 8-10: ícone de câmera + produto",
        text: "Dias 8-10: Primeiro vídeo no ar 🎥",
        animation: "Câmera clicando, vídeo sendo publicado"
      },
      {
        timestamp: "0:24-0:30",
        visual: "Dia 11-15: gráfico de alcance crescendo",
        text: "Dias 11-15: Poste 1x por dia 📈",
        animation: "Linha do gráfico sobe gradualmente"
      },
      {
        timestamp: "0:30-0:36",
        visual: "Dia 16-20: ícone de lupa + análise",
        text: "Dias 16-20: Analise e ajuste 🔍",
        animation: "Lupa passando sobre dados, insights aparecendo"
      },
      {
        timestamp: "0:36-0:42",
        visual: "Dia 21-25: vídeos múltiplos + engajamento",
        text: "Dias 21-25: Aumente frequência 🚀",
        animation: "Múltiplos vídeos aparecendo em grid"
      },
      {
        timestamp: "0:42-0:48",
        visual: "Dia 26-30: notificação de venda aparecendo",
        text: "Dias 26-30: Primeira venda! 🎉",
        animation: "Notificação surge com confete e som de celebração"
      },
      {
        timestamp: "0:48-0:54",
        visual: "Timeline completa com todos os checkmarks",
        text: "Você seguiu o plano. Você vendeu.",
        animation: "Todos os checkmarks acendem em sequência"
      },
      {
        timestamp: "0:54-0:60",
        visual: "Texto motivacional com fundo em movimento",
        text: "Seu plano de 30 dias começa agora 💪",
        animation: "Texto pulsa com energia crescente"
      }
    ],
    voiceover: [
      "Trinta dias. Esse é o tempo que você precisa para fazer sua primeira venda.",
      "Dias um a três: configure sua conta e escolha seu nicho.",
      "Dias quatro a sete: aqueça o algoritmo assistindo e interagindo.",
      "Dias oito a dez: publique seu primeiro vídeo. Não precisa ser perfeito.",
      "Dias onze a quinze: consistência. Um vídeo por dia.",
      "Dias dezesseis a vinte: analise o que funciona e ajuste sua estratégia.",
      "Dias vinte e um a vinte e cinco: aumente a frequência. Teste novos produtos.",
      "Dias vinte e seis a trinta: sua primeira venda vai chegar.",
      "Siga o plano. Confie no processo.",
      "Seu sucesso está a trinta dias de distância."
    ],
    visualNotes: [
      "Timeline horizontal ou vertical com marcos claros",
      "Usar ícones para cada fase (perfil, fogo, câmera, gráfico, lupa, foguete, sino)",
      "Checkmarks verdes animados para cada etapa concluída",
      "Cores progressivas: azul (início) -> verde (meio) -> dourado (fim)",
      "Fonte: Montserrat, peso 700, alta visibilidade"
    ],
    musicStyle: "Progressivo e inspiracional, começa calmo e termina épico, BPM 105-120",
    captionStyle: "Legendas com números em destaque, cada dia aparece com animação de contagem"
  },
  {
    id: "module-7-overcoming-challenges",
    module: "Módulo 7",
    duration: "45 segundos",
    title: "Superando Desafios (quando as vendas não vêm)",
    scenes: [
      {
        timestamp: "0:00-0:06",
        visual: "Pessoa olhando para tela do celular, expressão pensativa",
        text: "Postou 10 vídeos. Zero vendas. 😔",
        animation: "Tela do celular mostra vídeos sem conversão"
      },
      {
        timestamp: "0:06-0:12",
        visual: "Mão segurando celular, não desistindo",
        text: "Você não está sozinho.",
        animation: "Mão firme, determinada, luz suave"
      },
      {
        timestamp: "0:12-0:18",
        visual: "Estatística: 80% desistem antes da primeira venda",
        text: "80% desistem aqui ❌",
        animation: "Número aparece com efeito de alerta"
      },
      {
        timestamp: "0:18-0:24",
        visual: "Estatística: 20% que continuam vendem",
        text: "20% que continuam... vendem ✅",
        animation: "Número aparece com brilho dourado"
      },
      {
        timestamp: "0:24-0:30",
        visual: "Planta crescendo em time-lapse",
        text: "Sucesso é plantado, não instantâneo 🌱",
        animation: "Semente vira planta em 3 segundos"
      },
      {
        timestamp: "0:30-0:36",
        visual: "Checklist: ajustar produto, melhorar hook, testar horários",
        text: "Ajuste. Teste. Melhore.",
        animation: "Cada item aparece com checkmark"
      },
      {
        timestamp: "0:36-0:42",
        visual: "Gráfico mostrando crescimento após persistência",
        text: "A curva sempre sobe depois da persistência",
        animation: "Linha plana, depois explosão de crescimento"
      },
      {
        timestamp: "0:42-0:45",
        visual: "Texto final com fundo inspirador",
        text: "Continue. Seu resultado está mais perto do que imagina. 💪✨",
        animation: "Texto aparece com brilho e partículas de luz"
      }
    ],
    voiceover: [
      "Você postou dez vídeos. E ainda não vendeu nada.",
      "Eu sei. É frustrante.",
      "Mas você precisa saber de uma coisa.",
      "Oitenta por cento das pessoas desistem exatamente nesse ponto.",
      "E os vinte por cento que continuam? Esses são os que vendem.",
      "Sucesso não é instantâneo. É construído.",
      "Ajuste seu produto. Melhore seu hook. Teste novos horários.",
      "A curva sempre sobe. Mas só para quem não desiste.",
      "Continue. Sua primeira venda está mais perto do que você imagina."
    ],
    visualNotes: [
      "Tom empático e acolhedor",
      "Cores suaves: azul pastel, rosa claro, dourado suave",
      "Usar emojis com moderação (apenas para reforçar emoção)",
      "Transições suaves, nada brusco",
      "Imagens de superação e crescimento (planta, montanha, caminho)",
      "Fonte: Lato ou Open Sans, peso 600, legível e amigável"
    ],
    musicStyle: "Piano inspiracional com cordas suaves, BPM 90, tom emocional e motivador",
    captionStyle: "Legendas suaves, aparecem lentamente, palavras-chave em dourado ou rosa claro"
  }
];

export const getScriptById = (id: string): VideoScript | undefined => {
  return videoScripts.find(script => script.id === id);
};

export const getScriptsByModule = (module: string): VideoScript[] => {
  return videoScripts.filter(script => script.module === module);
};
