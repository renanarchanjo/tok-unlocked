"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronDown, ChevronRight, BookOpen, CheckCircle, Gift, FileText, CheckSquare, ChevronLeft, Download, Lock } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import ProgressTracker from '@/components/custom/ProgressTracker'

interface TikTokGuideContentProps {
  hasAccess: boolean
}

export default function TikTokGuideContent({ hasAccess }: TikTokGuideContentProps) {
  const { t, language } = useLanguage()
  const [expandedModules, setExpandedModules] = useState<number[]>([])
  const [showBonus, setShowBonus] = useState(false)
  const [completedTasks, setCompletedTasks] = useState<{ [key: number]: boolean[] }>({})
  const [readingModule, setReadingModule] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  // Módulos com conteúdo completo em inglês e português
  const MODULES_EN = [
    {
      id: 1,
      title: "MODULE 1 — The TikTok Shop System",
      description: "How the platform works and why it's your best opportunity right now",
      pdfUrl: "/pdfs/tiktok-guide/module-1-en.pdf",
      summary: "Understand the TikTok Shop ecosystem: it's not about followers, it's about influence through content.",
      content: {
        whatToDo: "Understand the TikTok Shop ecosystem: it's not about followers, it's about influence through content.",
        howToDoIt: [
          "Every video can lead to a sale if it includes a tagged product",
          "TikTok rewards engagement, not ads",
          "The algorithm pushes buyer intent content: short, emotional and authentic",
          "Focus on product solutions, not features"
        ],
        whenToDoIt: "Research trending products daily and save 5 examples of viral videos in your niche.",
        insiderTrick: "Use the TikTok Shop 'Affiliate Centre' — it shows best-selling products and average commission per sale. Look for products with >7% commission and under 25 seconds videos.",
        checklist: [
          "5 viral videos saved",
          "3 trending products noted",
          "Account switched to 'Business or Creator'"
        ],
        quote: "People don't buy products — they buy stories told in 15 seconds."
      }
    },
    {
      id: 2,
      title: "MODULE 2 — Starting from Zero (No Followers Needed)",
      description: "The blueprint to grow fast without showing your face",
      pdfUrl: "/pdfs/tiktok-guide/module-2-en.pdf",
      summary: "Create a brand-style account that feels trustworthy and niche-specific.",
      content: {
        whatToDo: "Create a brand-style account that feels trustworthy and niche-specific.",
        howToDoIt: [
          "Username: clean, product-related",
          "Bio: clear value ('Daily TikTok Shop deals 💸')",
          "Profile pic: AI-generated logo or product mockup",
          "Use trending audios under 30s",
          "Post 3-5 videos/day for the first 10 days"
        ],
        whenToDoIt: "Post consistently at 18:00–22:00 (UK prime time).",
        proTrick: "Use ChatGPT to generate 10 bio ideas + 10 usernames in your niche. Copy the ones that look clean and 'non-salesy'.",
        checklist: [
          "Bio ready",
          "5 daily videos planned",
          "Trend sound used"
        ],
        quote: "TikTok doesn't need your face — it needs your consistency."
      }
    },
    {
      id: 3,
      title: "MODULE 3 — Account Warm-Up (Algorithm Training)",
      description: "Make the algorithm work for you",
      pdfUrl: "/pdfs/tiktok-guide/module-3-en.pdf",
      summary: "Activate organic visibility with the 5-5-5 method.",
      content: {
        whatToDo: "Activate organic visibility with the 5-5-5 method.",
        howToDoIt: [
          "Like 5 videos from your niche",
          "Comment on 5 with authentic reactions",
          "Follow 5 creators in your category"
        ],
        whenToDoIt: "Daily for the first 7–10 days before heavy posting.",
        hiddenTrick: "Never post within 10 minutes of liking/commenting — wait for the algorithm reset (approx. 15 minutes).",
        checklist: [
          "Done 5-5-5 today",
          "Avoided spammy actions",
          "Watched niche analytics"
        ],
        quote: "Treat the algorithm like a friend — talk, listen, and it will recommend you."
      }
    },
    {
      id: 4,
      title: "MODULE 4 — Creating Viral Videos (AI Style)",
      description: "Make content that sells while you sleep",
      pdfUrl: "/pdfs/tiktok-guide/module-4-en.pdf",
      summary: "Create emotion-driven short clips that follow the '3-Second Rule'.",
      content: {
        whatToDo: "Create emotion-driven short clips that follow the '3-Second Rule'.",
        howToDoIt: [
          "Hook (first 3s) → Problem → Product → Proof → CTA",
          "Use OpusClip to find perfect cut points",
          "Use Submagic to add bold captions automatically",
          "Use ChatGPT or Pika Labs to generate voice-over or subtitles"
        ],
        whenToDoIt: "Batch record 1x per week and schedule uploads for the next 7 days.",
        secretSauce: [
          "I didn't believe this worked until I tried it.",
          "They don't want you to know about this TikTok feature.",
          "This £10 product changed my daily routine."
        ],
        checklist: [
          "Recorded 5 clips",
          "Added captions",
          "Used a strong hook"
        ],
        quote: "Hooks grab eyes — but emotion makes wallets open."
      }
    },
    {
      id: 5,
      title: "MODULE 5 — Product Strategy & Positioning",
      description: "Find products that already sell and make them your own",
      pdfUrl: "/pdfs/tiktok-guide/module-5-en.pdf",
      summary: "Identify winning products by studying engagement, not followers.",
      content: {
        whatToDo: "Identify winning products by studying engagement, not followers.",
        howToDoIt: [
          "Use 'Top Products' tab in TikTok Shop",
          "Check comments — people saying 'need this' = buying intent",
          "Recreate top 3 videos with your voice, angle or hook"
        ],
        whenToDoIt: "Every Sunday, update your list of top-performing products.",
        expertTrick: "Use SpyTools.io or PPSpy (TikTok Ad Spy tools) to track which products are being scaled right now.",
        checklist: [
          "3 top products selected",
          "Competitor videos saved",
          "Spy tool checked"
        ],
        quote: "You don't need to invent demand — just redirect it."
      }
    },
    {
      id: 6,
      title: "MODULE 6 — 30-Day Plan to Your First Sale",
      description: "Turn effort into results",
      pdfUrl: "/pdfs/tiktok-guide/module-6-en.pdf",
      summary: "Follow a proven daily plan from setup to scale.",
      content: {
        whatToDo: "Follow a proven daily plan from setup to scale.",
        howToDoIt: [
          "Week 1: Setup + 5-5-5 engagement",
          "Week 2: Post daily 1 video",
          "Week 3: Test hooks + product variations",
          "Week 4: Repost winners, track analytics, scale budget"
        ],
        whenToDoIt: "Start on a Monday — stay consistent for 30 days.",
        scalingTrick: "When 1 video hits 5K+ views, repost it twice with small edits (hook, caption or music). TikTok treats it as new content.",
        checklist: [
          "30-day calendar ready",
          "1st sale target set",
          "Top video reposted"
        ],
        quote: "Your first sale isn't luck — it's the reward for 30 days of execution."
      }
    },
    {
      id: 7,
      title: "MODULE 7 — Overcoming Challenges",
      description: "How to stay consistent when motivation drops",
      pdfUrl: "/pdfs/tiktok-guide/module-7-en.pdf",
      summary: "Identify your blockers: motivation, reach, or fear of posting.",
      content: {
        whatToDo: "Identify your blockers: motivation, reach, or fear of posting.",
        howToDoIt: [
          "If low reach → refresh hooks & post time",
          "If burnout → batch-create & take 1 rest day",
          "If no sales → switch to proven product or niche"
        ],
        whenToDoIt: "Review analytics every Sunday and plan your week ahead.",
        mentalTrick: "When your reach drops, don't stop — TikTok's algorithm tests patience. Momentum restarts after 3 consistent days.",
        checklist: [
          "Weekly review done",
          "New hook tested",
          "1 rest day completed"
        ],
        quote: "Discipline builds income — motivation just starts it."
      }
    }
  ]

  const MODULES_PT = [
    {
      id: 1,
      title: "MÓDULO 1 — O Sistema TikTok Shop",
      description: "Como a plataforma funciona e por que é sua melhor oportunidade agora",
      pdfUrl: "/pdfs/tiktok-guide/module-1-pt.pdf",
      summary: "Entenda o ecossistema TikTok Shop: não é sobre seguidores, é sobre influência através de conteúdo.",
      content: {
        whatToDo: "Entenda o ecossistema TikTok Shop: não é sobre seguidores, é sobre influência através de conteúdo.",
        howToDoIt: [
          "Todo vídeo pode gerar uma venda se incluir um produto marcado",
          "TikTok recompensa engajamento, não anúncios",
          "O algoritmo impulsiona conteúdo com intenção de compra: curto, emocional e autêntico",
          "Foque em soluções do produto, não em recursos"
        ],
        whenToDoIt: "Pesquise produtos em alta diariamente e salve 5 exemplos de vídeos virais no seu nicho.",
        insiderTrick: "Use o 'Centro de Afiliados' do TikTok Shop — mostra produtos mais vendidos e comissão média por venda. Procure produtos com >7% de comissão e vídeos com menos de 25 segundos.",
        checklist: [
          "5 vídeos virais salvos",
          "3 produtos em alta anotados",
          "Conta alterada para 'Empresa ou Criador'"
        ],
        quote: "As pessoas não compram produtos — elas compram histórias contadas em 15 segundos."
      }
    },
    {
      id: 2,
      title: "MÓDULO 2 — Começando do Zero (Sem Seguidores)",
      description: "O plano para crescer rápido sem mostrar seu rosto",
      pdfUrl: "/pdfs/tiktok-guide/module-2-pt.pdf",
      summary: "Crie uma conta estilo marca que pareça confiável e específica do nicho.",
      content: {
        whatToDo: "Crie uma conta estilo marca que pareça confiável e específica do nicho.",
        howToDoIt: [
          "Nome de usuário: limpo, relacionado ao produto",
          "Bio: valor claro ('Ofertas diárias TikTok Shop 💸')",
          "Foto de perfil: logo gerada por IA ou mockup de produto",
          "Use áudios em alta com menos de 30s",
          "Poste 3-5 vídeos/dia nos primeiros 10 dias"
        ],
        whenToDoIt: "Poste consistentemente às 18:00–22:00 (horário nobre).",
        proTrick: "Use ChatGPT para gerar 10 ideias de bio + 10 nomes de usuário no seu nicho. Copie os que parecem limpos e 'não vendedores'.",
        checklist: [
          "Bio pronta",
          "5 vídeos diários planejados",
          "Som em alta usado"
        ],
        quote: "TikTok não precisa do seu rosto — precisa da sua consistência."
      }
    },
    {
      id: 3,
      title: "MÓDULO 3 — Aquecimento da Conta (Treinamento do Algoritmo)",
      description: "Faça o algoritmo trabalhar para você",
      pdfUrl: "/pdfs/tiktok-guide/module-3-pt.pdf",
      summary: "Ative visibilidade orgânica com o método 5-5-5.",
      content: {
        whatToDo: "Ative visibilidade orgânica com o método 5-5-5.",
        howToDoIt: [
          "Curta 5 vídeos do seu nicho",
          "Comente em 5 com reações autênticas",
          "Siga 5 criadores da sua categoria"
        ],
        whenToDoIt: "Diariamente nos primeiros 7–10 dias antes de postar pesado.",
        hiddenTrick: "Nunca poste dentro de 10 minutos após curtir/comentar — aguarde o reset do algoritmo (aprox. 15 minutos).",
        checklist: [
          "5-5-5 feito hoje",
          "Ações de spam evitadas",
          "Analytics do nicho assistidas"
        ],
        quote: "Trate o algoritmo como um amigo — converse, escute, e ele vai te recomendar."
      }
    },
    {
      id: 4,
      title: "MÓDULO 4 — Criando Vídeos Virais (Estilo IA)",
      description: "Faça conteúdo que vende enquanto você dorme",
      pdfUrl: "/pdfs/tiktok-guide/module-4-pt.pdf",
      summary: "Crie clipes curtos emocionais que seguem a 'Regra dos 3 Segundos'.",
      content: {
        whatToDo: "Crie clipes curtos emocionais que seguem a 'Regra dos 3 Segundos'.",
        howToDoIt: [
          "Gancho (primeiros 3s) → Problema → Produto → Prova → CTA",
          "Use OpusClip para encontrar pontos de corte perfeitos",
          "Use Submagic para adicionar legendas em negrito automaticamente",
          "Use ChatGPT ou Pika Labs para gerar narração ou legendas"
        ],
        whenToDoIt: "Grave em lote 1x por semana e agende uploads para os próximos 7 dias.",
        secretSauce: [
          "Eu não acreditei que isso funcionava até experimentar.",
          "Eles não querem que você saiba sobre esse recurso do TikTok.",
          "Este produto de R$50 mudou minha rotina diária."
        ],
        checklist: [
          "5 clipes gravados",
          "Legendas adicionadas",
          "Gancho forte usado"
        ],
        quote: "Ganchos capturam olhos — mas emoção abre carteiras."
      }
    },
    {
      id: 5,
      title: "MÓDULO 5 — Estratégia e Posicionamento de Produtos",
      description: "Encontre produtos que já vendem e faça-os seus",
      pdfUrl: "/pdfs/tiktok-guide/module-5-pt.pdf",
      summary: "Identifique produtos vencedores estudando engajamento, não seguidores.",
      content: {
        whatToDo: "Identifique produtos vencedores estudando engajamento, não seguidores.",
        howToDoIt: [
          "Use a aba 'Produtos em Alta' no TikTok Shop",
          "Verifique comentários — pessoas dizendo 'preciso disso' = intenção de compra",
          "Recrie os 3 melhores vídeos com sua voz, ângulo ou gancho"
        ],
        whenToDoIt: "Todo domingo, atualize sua lista de produtos com melhor desempenho.",
        expertTrick: "Use SpyTools.io ou PPSpy (ferramentas de espionagem de anúncios TikTok) para rastrear quais produtos estão sendo escalados agora.",
        checklist: [
          "3 produtos top selecionados",
          "Vídeos de concorrentes salvos",
          "Ferramenta de espionagem verificada"
        ],
        quote: "Você não precisa inventar demanda — apenas redirecione-a."
      }
    },
    {
      id: 6,
      title: "MÓDULO 6 — Plano de 30 Dias para Sua Primeira Venda",
      description: "Transforme esforço em resultados",
      pdfUrl: "/pdfs/tiktok-guide/module-6-pt.pdf",
      summary: "Siga um plano diário comprovado da configuração à escala.",
      content: {
        whatToDo: "Siga um plano diário comprovado da configuração à escala.",
        howToDoIt: [
          "Semana 1: Configuração + engajamento 5-5-5",
          "Semana 2: Poste 1 vídeo diário",
          "Semana 3: Teste ganchos + variações de produtos",
          "Semana 4: Reposte vencedores, rastreie analytics, escale orçamento"
        ],
        whenToDoIt: "Comece numa segunda-feira — mantenha consistência por 30 dias.",
        scalingTrick: "Quando 1 vídeo atingir 5K+ visualizações, reposte-o duas vezes com pequenas edições (gancho, legenda ou música). TikTok trata como conteúdo novo.",
        checklist: [
          "Calendário de 30 dias pronto",
          "Meta de 1ª venda definida",
          "Vídeo top repostado"
        ],
        quote: "Sua primeira venda não é sorte — é a recompensa por 30 dias de execução."
      }
    },
    {
      id: 7,
      title: "MÓDULO 7 — Superando Desafios",
      description: "Como manter consistência quando a motivação cai",
      pdfUrl: "/pdfs/tiktok-guide/module-7-pt.pdf",
      summary: "Identifique seus bloqueios: motivação, alcance ou medo de postar.",
      content: {
        whatToDo: "Identifique seus bloqueios: motivação, alcance ou medo de postar.",
        howToDoIt: [
          "Se alcance baixo → atualize ganchos e horário de postagem",
          "Se esgotamento → crie em lote e tire 1 dia de descanso",
          "Se sem vendas → mude para produto ou nicho comprovado"
        ],
        whenToDoIt: "Revise analytics todo domingo e planeje sua semana.",
        mentalTrick: "Quando seu alcance cair, não pare — o algoritmo do TikTok testa paciência. O momentum reinicia após 3 dias consistentes.",
        checklist: [
          "Revisão semanal feita",
          "Novo gancho testado",
          "1 dia de descanso completado"
        ],
        quote: "Disciplina constrói renda — motivação apenas inicia."
      }
    }
  ]

  const MODULES = language === 'pt' ? MODULES_PT : MODULES_EN

  const toggleModule = (moduleId: number) => {
    if (!hasAccess) return
    setExpandedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    )
  }

  const toggleTask = (moduleId: number, taskIndex: number) => {
    if (!hasAccess) return
    setCompletedTasks(prev => {
      const moduleTasks = prev[moduleId] || []
      const newTasks = [...moduleTasks]
      newTasks[taskIndex] = !newTasks[taskIndex]
      return { ...prev, [moduleId]: newTasks }
    })
  }

  const isTaskCompleted = (moduleId: number, taskIndex: number) => {
    return completedTasks[moduleId]?.[taskIndex] || false
  }

  const openBookReader = (moduleId: number) => {
    if (!hasAccess) return
    setReadingModule(moduleId)
    setCurrentPage(1)
  }

  const closeBookReader = () => {
    setReadingModule(null)
    setCurrentPage(1)
  }

  const downloadPDF = (pdfUrl: string, moduleName: string) => {
    if (!hasAccess) return
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = `${moduleName}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const texts = {
    en: {
      courseAccess: "Complete Course Access",
      courseProgress: "Course Progress",
      modules: "modules",
      tasks: "tasks",
      bookFormat: "Book Format Content",
      openModule: "Open Module",
      download: "Download",
      summary: "Summary",
      checklist: "Module Checklist:",
      markComplete: "Mark Module as Complete ✅",
      close: "Close",
      previous: "Previous",
      next: "Next",
      page: "Page",
      downloadPDF: "Download PDF",
      step1: "Step 1 – What to do:",
      step2: "Step 2 – How to do it:",
      step3: "Step 3 – When to do it:",
      insiderTrick: "Insider Trick",
      proTrick: "Pro Trick",
      hiddenTrick: "Hidden Trick",
      expertTrick: "Expert Trick",
      scalingTrick: "Scaling Trick",
      mentalTrick: "Mental Trick",
      secretSauce: "Secret Sauce - Hook examples that always work:",
      checklistTitle: "Checklist:",
      lockedContent: "🔒 Content Locked",
      lockedMessage: "Purchase this product to unlock all modules and content",
      purchaseNow: "Purchase Now"
    },
    pt: {
      courseAccess: "Acesso Completo ao Curso",
      courseProgress: "Progresso do Curso",
      modules: "módulos",
      tasks: "tarefas",
      bookFormat: "Conteúdo em Formato de Livro",
      openModule: "Abrir Módulo",
      download: "Baixar",
      summary: "Resumo",
      checklist: "Checklist do Módulo:",
      markComplete: "Marcar Módulo como Completo ✅",
      close: "Fechar",
      previous: "Anterior",
      next: "Próximo",
      page: "Página",
      downloadPDF: "Baixar PDF",
      step1: "Passo 1 – O que fazer:",
      step2: "Passo 2 – Como fazer:",
      step3: "Passo 3 – Quando fazer:",
      insiderTrick: "Truque Interno",
      proTrick: "Truque Pro",
      hiddenTrick: "Truque Oculto",
      expertTrick: "Truque Expert",
      scalingTrick: "Truque de Escala",
      mentalTrick: "Truque Mental",
      secretSauce: "Molho Secreto - Exemplos de ganchos que sempre funcionam:",
      checklistTitle: "Checklist:",
      lockedContent: "🔒 Conteúdo Bloqueado",
      lockedMessage: "Compre este produto para desbloquear todos os módulos e conteúdo",
      purchaseNow: "Comprar Agora"
    }
  }

  const t2 = texts[language]

  // Se não tem acesso, mostrar tela de bloqueio
  if (!hasAccess) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
            {t('product.main.title')}
          </h1>
          <p className="text-slate-300 text-lg">
            {language === 'pt' 
              ? 'Domine o TikTok Shop e comece a ganhar mesmo com zero seguidores'
              : 'Master TikTok Shop and start earning even with zero followers'}
          </p>
        </div>

        <Card className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border-red-500/50 backdrop-blur-xl">
          <CardContent className="p-12 text-center space-y-6">
            <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto">
              <Lock className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">{t2.lockedContent}</h2>
            <p className="text-slate-300 text-lg max-w-md mx-auto">
              {t2.lockedMessage}
            </p>
            <Button 
              className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white font-semibold px-8 py-6 text-lg rounded-xl"
              onClick={() => alert('Redirecting to purchase page...')}
            >
              {t2.purchaseNow} - $97
            </Button>
          </CardContent>
        </Card>

        {/* Preview dos módulos bloqueados */}
        <div className="space-y-4 opacity-50 pointer-events-none">
          {MODULES.slice(0, 3).map((module) => (
            <Card key={module.id} className="bg-slate-800/50 border-slate-700 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-sm z-10 flex items-center justify-center rounded-lg">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {module.id}
                  </div>
                  <div>
                    <CardTitle className="text-white text-lg">{module.title}</CardTitle>
                    <CardDescription className="text-slate-300 mt-1">
                      {module.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Book Reader Modal */}
      {readingModule !== null && (() => {
        const module = MODULES.find(m => m.id === readingModule)
        if (!module) return null
        
        return (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="w-full max-w-5xl h-[90vh] bg-slate-900 rounded-2xl overflow-hidden flex flex-col border border-slate-700">
              <div className="flex items-center justify-between p-4 border-b border-slate-700 bg-slate-800/50">
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                  <h3 className="text-white font-medium">{module.title}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => downloadPDF(module.pdfUrl, module.title)}
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    {t2.downloadPDF}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={closeBookReader}
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    {t2.close}
                  </Button>
                </div>
              </div>

              <div className="flex-1 overflow-auto bg-slate-800/30 p-8">
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-2xl p-12 min-h-full">
                  <div className="prose prose-slate max-w-none">
                    <h1 className="text-3xl font-bold mb-6 text-slate-900">{module.title}</h1>
                    <p className="text-lg text-slate-700 mb-8">{module.description}</p>
                    
                    <div className="space-y-8">
                      <div className="border-l-4 border-blue-500 pl-6 py-4">
                        <h3 className="font-bold text-slate-900 mb-3">{t2.step1}</h3>
                        <p className="text-slate-700">{module.content.whatToDo}</p>
                      </div>

                      <div className="border-l-4 border-purple-500 pl-6 py-4">
                        <h3 className="font-bold text-slate-900 mb-3">{t2.step2}</h3>
                        <ul className="list-disc list-inside space-y-2 text-slate-700">
                          {module.content.howToDoIt.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="border-l-4 border-green-500 pl-6 py-4">
                        <h3 className="font-bold text-slate-900 mb-3">{t2.step3}</h3>
                        <p className="text-slate-700">{module.content.whenToDoIt}</p>
                      </div>

                      {(module.content.insiderTrick || module.content.proTrick || module.content.hiddenTrick || module.content.expertTrick || module.content.scalingTrick || module.content.mentalTrick) && (
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                          <h3 className="font-bold text-orange-900 mb-3">🔥 {module.content.insiderTrick ? t2.insiderTrick : module.content.proTrick ? t2.proTrick : module.content.hiddenTrick ? t2.hiddenTrick : module.content.expertTrick ? t2.expertTrick : module.content.scalingTrick ? t2.scalingTrick : t2.mentalTrick}:</h3>
                          <p className="text-orange-800">{module.content.insiderTrick || module.content.proTrick || module.content.hiddenTrick || module.content.expertTrick || module.content.scalingTrick || module.content.mentalTrick}</p>
                        </div>
                      )}

                      {module.content.secretSauce && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                          <h3 className="font-bold text-yellow-900 mb-3">🔥 {t2.secretSauce}</h3>
                          <ul className="list-disc list-inside space-y-2 text-yellow-800">
                            {module.content.secretSauce.map((hook, idx) => (
                              <li key={idx}>"{hook}"</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-bold text-blue-900 mb-3">{t2.checklistTitle}</h3>
                        <ul className="space-y-2">
                          {module.content.checklist.map((item, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-blue-800">
                              <span className="text-green-600">☑️</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6 text-center">
                        <p className="text-lg font-medium text-purple-900">💡 {module.content.quote}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border-t border-slate-700 bg-slate-800/50">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  {t2.previous}
                </Button>
                <span className="text-slate-400 text-sm">{t2.page} {currentPage}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(p => p + 1)}
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  {t2.next}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        )
      })()}

      {/* Product Cover */}
      <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
        <svg viewBox="0 0 800 400" className="w-full h-full">
          <defs>
            <linearGradient id="tiktok-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#000000', stopOpacity: 1}} />
              <stop offset="50%" style={{stopColor: '#1e1e1e', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#000000', stopOpacity: 1}} />
            </linearGradient>
            <linearGradient id="tiktok-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
              <stop offset="50%" style={{stopColor: '#8b5cf6', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          
          <rect width="800" height="400" fill="url(#tiktok-bg)" />
          <circle cx="100" cy="100" r="150" fill="url(#tiktok-gradient)" opacity="0.1" />
          <circle cx="700" cy="300" r="180" fill="url(#tiktok-gradient)" opacity="0.1" />
          
          <g transform="translate(650, 50)">
            <path d="M50 10 L50 60 L40 55 L40 15 Z" fill="#3b82f6" opacity="0.3" />
            <path d="M50 10 L60 15 L60 55 L50 60 Z" fill="#ec4899" opacity="0.3" />
          </g>
          
          <text x="400" y="180" textAnchor="middle" fill="url(#tiktok-gradient)" fontSize="56" fontWeight="bold" fontFamily="system-ui, -apple-system, sans-serif">
            TikTok Shop
          </text>
          <text x="400" y="240" textAnchor="middle" fill="url(#tiktok-gradient)" fontSize="48" fontWeight="bold" fontFamily="system-ui, -apple-system, sans-serif">
            {language === 'pt' ? 'Guia de Renda' : 'Income Guide'}
          </text>
          
          <text x="400" y="290" textAnchor="middle" fill="#94a3b8" fontSize="20" fontFamily="system-ui, -apple-system, sans-serif">
            {language === 'pt' ? 'Domine o TikTok Shop e Comece a Ganhar' : 'Master TikTok Shop & Start Earning'}
          </text>
          
          <rect x="200" y="350" width="400" height="4" fill="url(#tiktok-gradient)" rx="2" />
        </svg>
      </div>

      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
          {t('product.main.title')}
        </h1>
        <p className="text-slate-300 text-lg">
          {language === 'pt' 
            ? 'Domine o TikTok Shop e comece a ganhar mesmo com zero seguidores'
            : 'Master TikTok Shop and start earning even with zero followers'}
        </p>
        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
          {t2.courseAccess}
        </Badge>
      </div>

      {/* Progress Overview */}
      <ProgressTracker 
        moduleId="tiktok-guide"
        moduleName={language === 'pt' ? 'Guia TikTok Shop' : 'TikTok Shop Guide'}
        totalChapters={7}
      />

      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-blue-400" />
            {t2.courseProgress}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="flex-1 bg-slate-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-pink-500 h-2 rounded-full w-0 transition-all duration-300"></div>
            </div>
            <span className="text-slate-300 text-sm">0 / {MODULES.length} {t2.modules}</span>
          </div>
        </CardContent>
      </Card>

      {/* Modules */}
      <div className="space-y-4">
        {MODULES.map((module) => {
          const isExpanded = expandedModules.includes(module.id)
          
          return (
            <Card key={module.id} className="bg-slate-800/50 border-slate-700">
              <CardHeader 
                className="cursor-pointer hover:bg-slate-700/30 transition-colors"
                onClick={() => toggleModule(module.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {module.id}
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg">{module.title}</CardTitle>
                      <CardDescription className="text-slate-300 mt-1">
                        {module.description}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="border-slate-600 text-slate-300">
                      {module.content.checklist.length} {t2.tasks}
                    </Badge>
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </div>
              </CardHeader>
              
              {isExpanded && (
                <CardContent className="pt-0 space-y-6">
                  <div className="bg-slate-700/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <BookOpen className="w-5 h-5 text-blue-400" />
                        <h4 className="text-white font-medium">{t2.bookFormat}</h4>
                      </div>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">PDF</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => openBookReader(module.id)}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        {t2.openModule}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => downloadPDF(module.pdfUrl, module.title)}
                        className="border-slate-600 text-slate-300 hover:bg-slate-700"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        {t2.download}
                      </Button>
                    </div>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
                    <h4 className="text-white font-medium mb-2">📝 {t2.summary}</h4>
                    <p className="text-slate-200 text-sm leading-relaxed">{module.summary}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-white font-medium mb-3 flex items-center">
                      <CheckSquare className="w-5 h-5 mr-2 text-green-400" />
                      {t2.checklist}
                    </h4>
                    {module.content.checklist.map((task, index) => (
                      <label 
                        key={index} 
                        className="flex items-start space-x-3 p-3 bg-slate-700/30 rounded-lg cursor-pointer hover:bg-slate-700/50 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={isTaskCompleted(module.id, index)}
                          onChange={() => toggleTask(module.id, index)}
                          className="mt-0.5 rounded border-slate-600 bg-slate-700 text-green-500 focus:ring-green-500 focus:ring-offset-0"
                        />
                        <span className={`text-slate-200 flex-1 ${isTaskCompleted(module.id, index) ? 'line-through opacity-50' : ''}`}>
                          {task}
                        </span>
                      </label>
                    ))}
                  </div>

                  <Button className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {t2.markComplete}
                  </Button>
                </CardContent>
              )}
            </Card>
          )
        })}
      </div>
    </div>
  )
}
