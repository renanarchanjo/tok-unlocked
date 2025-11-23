"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Bot, BookOpen, ChevronLeft, ChevronRight, Download, FileText, Lock } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface AIAutomationContentProps {
  hasAccess: boolean
}

export default function AIAutomationContent({ hasAccess }: AIAutomationContentProps) {
  const { t, language } = useLanguage()
  const [readingBook, setReadingBook] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedModule, setSelectedModule] = useState<number | null>(null)

  const MODULES_EN = [
    {
      id: 1,
      title: "Module 1 — Tools That Do The Work",
      tools: [
        {
          name: "OpusClip",
          description: "Cut long videos automatically"
        },
        {
          name: "Submagic",
          description: "Auto captions with emotion colour"
        },
        {
          name: "ChatGPT",
          description: "Ideas, hooks, scripts"
        },
        {
          name: "Pika Labs",
          description: "Video generation & AI voice-over"
        }
      ],
      trick: "Use OpusClip's 'Auto Viral' feature — it finds the best 10 seconds of a video."
    },
    {
      id: 2,
      title: "Module 2 — Workflow Automation",
      flow: "🎥 Record → ✂️ Edit (Opus) → 💬 Caption (Submagic) → 📊 Track",
      prompt: "Prompt for ChatGPT:\n'Plan my 3-day TikTok posting schedule for [niche]. Include caption, hook, and CTA for each.'"
    },
    {
      id: 3,
      title: "Module 3 — 50 AI Prompts to Create Content Fast",
      examples: [
        "Give me 5 viral video ideas for [product].",
        "Write 3 TikTok hooks for [audience].",
        "Explain [product] in a funny, fast-paced way."
      ],
      trick: "Use 'Explain like I'm 10' in prompts — forces simple, viral-friendly language."
    },
    {
      id: 4,
      title: "Module 4 — Viral Cut Strategy",
      rule: "3 seconds per cut.\nAlways open with motion, text, or sound.",
      trick: "OpusClip + ChatGPT combo = done in minutes."
    },
    {
      id: 5,
      title: "Module 5 — Caption & Subtitle Automation",
      steps: [
        "Use Submagic → choose 'Pop Style Captions.'",
        "Highlight power words: FREE, TODAY, SECRET, RESULTS."
      ],
      bonusTip: "Keep subtitles synced with your rhythm — every pause = new line."
    },
    {
      id: 6,
      title: "Module 6 — Posting Tracker",
      table: "Day | Video Title | Views | CTR | Notes",
      trick: "After 7 days, double down on your top 2 videos — repost with a new caption."
    },
    {
      id: 7,
      title: "Module 7 — Full Automation Setup",
      steps: [
        "Step 1: Create weekly video batch.",
        "Step 2: Upload to scheduler (Metricool or Later).",
        "Step 3: Review analytics weekly."
      ],
      hiddenWeapon: "Use Notion + Zapier to auto-track your TikTok stats into a spreadsheet."
    },
    {
      id: 8,
      title: "Module 8 — Scaling with AI",
      usage: "Use ChatGPT to analyse performance:\n'Analyse these TikTok captions and tell me which style converts better.'",
      trick: "Save your 3 best-performing prompts and reuse them weekly."
    },
    {
      id: 9,
      title: "Module 9 — Checklist",
      items: [
        "OpusClip set up",
        "Submagic linked",
        "Weekly schedule created",
        "Analytics reviewed"
      ]
    },
    {
      id: 10,
      title: "Module 10 — Final Message",
      message: "While others waste time, you build systems.\nThat's how creators become business owners."
    }
  ]

  const MODULES_PT = [
    {
      id: 1,
      title: "Módulo 1 — Ferramentas que Fazem o Trabalho",
      tools: [
        {
          name: "OpusClip",
          description: "Corta vídeos longos automaticamente"
        },
        {
          name: "Submagic",
          description: "Legendas automáticas com cor emocional"
        },
        {
          name: "ChatGPT",
          description: "Ideias, ganchos, scripts"
        },
        {
          name: "Pika Labs",
          description: "Geração de vídeo e narração IA"
        }
      ],
      trick: "Use o recurso 'Auto Viral' do OpusClip — ele encontra os melhores 10 segundos de um vídeo."
    },
    {
      id: 2,
      title: "Módulo 2 — Automação de Fluxo de Trabalho",
      flow: "🎥 Gravar → ✂️ Editar (Opus) → 💬 Legendar (Submagic) → 📊 Rastrear",
      prompt: "Prompt para ChatGPT:\n'Planeje minha programação de postagem TikTok de 3 dias para [nicho]. Inclua legenda, gancho e CTA para cada.'"
    },
    {
      id: 3,
      title: "Módulo 3 — 50 Prompts IA para Criar Conteúdo Rápido",
      examples: [
        "Me dê 5 ideias de vídeos virais para [produto].",
        "Escreva 3 ganchos TikTok para [público].",
        "Explique [produto] de forma engraçada e rápida."
      ],
      trick: "Use 'Explique como se eu tivesse 10 anos' nos prompts — força linguagem simples e viral."
    },
    {
      id: 4,
      title: "Módulo 4 — Estratégia de Corte Viral",
      rule: "3 segundos por corte.\nSempre abra com movimento, texto ou som.",
      trick: "Combo OpusClip + ChatGPT = feito em minutos."
    },
    {
      id: 5,
      title: "Módulo 5 — Automação de Legendas e Subtítulos",
      steps: [
        "Use Submagic → escolha 'Legendas Estilo Pop.'",
        "Destaque palavras poderosas: GRÁTIS, HOJE, SEGREDO, RESULTADOS."
      ],
      bonusTip: "Mantenha legendas sincronizadas com seu ritmo — cada pausa = nova linha."
    },
    {
      id: 6,
      title: "Módulo 6 — Rastreador de Postagens",
      table: "Dia | Título do Vídeo | Visualizações | CTR | Notas",
      trick: "Após 7 dias, dobre a aposta nos seus 2 melhores vídeos — reposte com nova legenda."
    },
    {
      id: 7,
      title: "Módulo 7 — Configuração de Automação Completa",
      steps: [
        "Passo 1: Crie lote de vídeos semanal.",
        "Passo 2: Faça upload no agendador (Metricool ou Later).",
        "Passo 3: Revise analytics semanalmente."
      ],
      hiddenWeapon: "Use Notion + Zapier para rastrear automaticamente suas estatísticas TikTok em uma planilha."
    },
    {
      id: 8,
      title: "Módulo 8 — Escalando com IA",
      usage: "Use ChatGPT para analisar desempenho:\n'Analise essas legendas TikTok e me diga qual estilo converte melhor.'",
      trick: "Salve seus 3 prompts de melhor desempenho e reutilize-os semanalmente."
    },
    {
      id: 9,
      title: "Módulo 9 — Checklist",
      items: [
        "OpusClip configurado",
        "Submagic vinculado",
        "Programação semanal criada",
        "Analytics revisadas"
      ]
    },
    {
      id: 10,
      title: "Módulo 10 — Mensagem Final",
      message: "Enquanto outros perdem tempo, você constrói sistemas.\nÉ assim que criadores se tornam donos de negócios."
    }
  ]

  const MODULES = language === 'pt' ? MODULES_PT : MODULES_EN

  const downloadPDF = (fileName: string) => {
    if (!hasAccess) return
    const link = document.createElement('a')
    link.href = `/pdfs/ai-automation/${fileName}-${language}.pdf`
    link.download = `${fileName}-${language}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const texts = {
    en: {
      title: "AI Automation Kit",
      subtitle: "Work smarter — let AI do the heavy lifting",
      access: "Full Automation Access",
      pdfFiles: "Automation Kit PDF Files",
      pdfDescription: "Access and download all modules in PDF format",
      completeKit: "Complete PDF Kit",
      kitDescription: "Access all tutorials, prompts and checklists in book format",
      openKit: "Open Complete Kit",
      aiTools: "AI Tools",
      aiPrompts: "AI Prompts",
      modules: "Modules",
      timeSaved: "Time Saved",
      readModule: "Read Module",
      close: "Close",
      previous: "Previous",
      next: "Next",
      page: "Page",
      downloadPDF: "Download PDF",
      tools: "Tools:",
      workflow: "Workflow:",
      chatgptPrompt: "ChatGPT Prompt:",
      examples: "Examples:",
      rule: "Rule:",
      steps: "Steps:",
      trackingTable: "Tracking Table:",
      howToUse: "How to Use:",
      checklist: "Checklist:",
      trick: "Trick",
      bonusTip: "Bonus Tip",
      hiddenWeapon: "Hidden Weapon",
      lockedContent: "🔒 Content Locked",
      lockedMessage: "Purchase this product to unlock all automation tools and prompts",
      purchaseNow: "Purchase Now"
    },
    pt: {
      title: "Kit de Automação IA",
      subtitle: "Trabalhe mais inteligente — deixe a IA fazer o trabalho pesado",
      access: "Acesso Completo à Automação",
      pdfFiles: "Arquivos PDF do Kit de Automação",
      pdfDescription: "Acesse e baixe todos os módulos em formato PDF",
      completeKit: "Kit PDF Completo",
      kitDescription: "Acesse todos os tutoriais, prompts e checklists em formato de livro",
      openKit: "Abrir Kit Completo",
      aiTools: "Ferramentas IA",
      aiPrompts: "Prompts IA",
      modules: "Módulos",
      timeSaved: "Tempo Economizado",
      readModule: "Ler Módulo",
      close: "Fechar",
      previous: "Anterior",
      next: "Próximo",
      page: "Página",
      downloadPDF: "Baixar PDF",
      tools: "Ferramentas:",
      workflow: "Fluxo de Trabalho:",
      chatgptPrompt: "Prompt ChatGPT:",
      examples: "Exemplos:",
      rule: "Regra:",
      steps: "Passos:",
      trackingTable: "Tabela de Rastreamento:",
      howToUse: "Como Usar:",
      checklist: "Checklist:",
      trick: "Truque",
      bonusTip: "Dica Bônus",
      hiddenWeapon: "Arma Secreta",
      lockedContent: "🔒 Conteúdo Bloqueado",
      lockedMessage: "Compre este produto para desbloquear todas as ferramentas de automação e prompts",
      purchaseNow: "Comprar Agora"
    }
  }

  const t2 = texts[language]

  // Se não tem acesso, mostrar tela de bloqueio
  if (!hasAccess) {
    return (
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
            {t('product.automation.title')}
          </h1>
          <p className="text-slate-300 text-lg">
            {t2.subtitle}
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
              {t2.purchaseNow} - $67
            </Button>
          </CardContent>
        </Card>

        {/* Preview dos módulos bloqueados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-50 pointer-events-none">
          {MODULES.slice(0, 4).map((module) => (
            <Card key={module.id} className="bg-slate-800/50 border-slate-700 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-sm z-10 flex items-center justify-center rounded-lg">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {module.id}
                  </div>
                  <CardTitle className="text-white text-lg">{module.title}</CardTitle>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Book Reader Modal */}
      {readingBook && selectedModule !== null && (() => {
        const module = MODULES.find(m => m.id === selectedModule)
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
                    onClick={() => downloadPDF(`module-${module.id}`)}
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    {t2.downloadPDF}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setReadingBook(false)
                      setSelectedModule(null)
                    }}
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
                    
                    <div className="space-y-6">
                      {module.tools && (
                        <div className="border-l-4 border-blue-500 pl-6 py-4">
                          <h3 className="font-bold text-slate-900 mb-4">{t2.tools}</h3>
                          <div className="space-y-3">
                            {module.tools.map((tool, idx) => (
                              <div key={idx} className="bg-blue-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-blue-900">{tool.name}</h4>
                                <p className="text-blue-800 text-sm">{tool.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {module.flow && (
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                          <h3 className="font-bold text-purple-900 mb-3">{t2.workflow}</h3>
                          <p className="text-purple-800 text-lg font-medium">{module.flow}</p>
                        </div>
                      )}

                      {module.prompt && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                          <h3 className="font-bold text-green-900 mb-3">{t2.chatgptPrompt}</h3>
                          <p className="text-green-800 whitespace-pre-line font-mono text-sm">{module.prompt}</p>
                        </div>
                      )}

                      {module.examples && (
                        <div className="border-l-4 border-purple-500 pl-6 py-4">
                          <h3 className="font-bold text-slate-900 mb-3">{t2.examples}</h3>
                          <ol className="list-decimal list-inside space-y-2 text-slate-700">
                            {module.examples.map((ex, idx) => (
                              <li key={idx}>"{ex}"</li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {module.rule && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                          <h3 className="font-bold text-yellow-900 mb-3">{t2.rule}</h3>
                          <p className="text-yellow-800 whitespace-pre-line">{module.rule}</p>
                        </div>
                      )}

                      {module.steps && (
                        <div className="border-l-4 border-green-500 pl-6 py-4">
                          <h3 className="font-bold text-slate-900 mb-3">{t2.steps}</h3>
                          <ul className="list-disc list-inside space-y-2 text-slate-700">
                            {module.steps.map((step, idx) => (
                              <li key={idx}>{step}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {module.table && (
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                          <h3 className="font-bold text-slate-900 mb-3">{t2.trackingTable}</h3>
                          <p className="text-slate-700 font-mono text-sm">{module.table}</p>
                        </div>
                      )}

                      {module.usage && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                          <h3 className="font-bold text-blue-900 mb-3">{t2.howToUse}</h3>
                          <p className="text-blue-800 whitespace-pre-line">{module.usage}</p>
                        </div>
                      )}

                      {module.items && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                          <h3 className="font-bold text-green-900 mb-3">{t2.checklist}</h3>
                          <ul className="space-y-2">
                            {module.items.map((item, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-green-800">
                                <span className="text-green-600">☑️</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {module.message && (
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-8 text-center">
                          <p className="text-xl font-bold text-blue-900 whitespace-pre-line">{module.message}</p>
                        </div>
                      )}

                      {(module.trick || module.bonusTip || module.hiddenWeapon) && (
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                          <h3 className="font-bold text-orange-900 mb-3">
                            🔥 {module.trick ? t2.trick : module.bonusTip ? t2.bonusTip : t2.hiddenWeapon}:
                          </h3>
                          <p className="text-orange-800 whitespace-pre-line">
                            {module.trick || module.bonusTip || module.hiddenWeapon}
                          </p>
                        </div>
                      )}
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
            <linearGradient id="ai-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#000000', stopOpacity: 1}} />
              <stop offset="50%" style={{stopColor: '#0f0f23', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#000000', stopOpacity: 1}} />
            </linearGradient>
            <linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
              <stop offset="50%" style={{stopColor: '#8b5cf6', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          
          <rect width="800" height="400" fill="url(#ai-bg)" />
          
          <g opacity="0.15" stroke="url(#ai-gradient)" strokeWidth="2" fill="none">
            <path d="M 50 100 L 150 100 L 150 150 L 200 150" />
            <path d="M 600 250 L 700 250 L 700 300 L 750 300" />
            <circle cx="150" cy="100" r="5" fill="url(#ai-gradient)" />
            <circle cx="150" cy="150" r="5" fill="url(#ai-gradient)" />
            <circle cx="700" cy="250" r="5" fill="url(#ai-gradient)" />
            <circle cx="700" cy="300" r="5" fill="url(#ai-gradient)" />
          </g>
          
          <g transform="translate(100, 50)" opacity="0.2">
            <circle cx="50" cy="50" r="40" fill="none" stroke="url(#ai-gradient)" strokeWidth="3" />
            <path d="M 30 40 Q 50 30 70 40" stroke="url(#ai-gradient)" strokeWidth="2" fill="none" />
            <path d="M 30 50 Q 50 60 70 50" stroke="url(#ai-gradient)" strokeWidth="2" fill="none" />
            <circle cx="40" cy="45" r="3" fill="url(#ai-gradient)" />
            <circle cx="60" cy="45" r="3" fill="url(#ai-gradient)" />
          </g>
          
          <g transform="translate(650, 80)" opacity="0.2">
            <circle cx="30" cy="30" r="20" fill="none" stroke="url(#ai-gradient)" strokeWidth="2" />
            <circle cx="30" cy="30" r="10" fill="url(#ai-gradient)" />
          </g>
          
          <text x="400" y="170" textAnchor="middle" fill="url(#ai-gradient)" fontSize="54" fontWeight="bold" fontFamily="system-ui, -apple-system, sans-serif">
            {language === 'pt' ? 'Automação IA' : 'AI Automation'}
          </text>
          <text x="400" y="230" textAnchor="middle" fill="url(#ai-gradient)" fontSize="48" fontWeight="bold" fontFamily="system-ui, -apple-system, sans-serif">
            {language === 'pt' ? 'Kit' : 'Kit'}
          </text>
          
          <text x="400" y="280" textAnchor="middle" fill="#94a3b8" fontSize="19" fontFamily="system-ui, -apple-system, sans-serif">
            {language === 'pt' ? 'Escale Seu Negócio com Poder IA' : 'Scale Your Business with AI Power'}
          </text>
          
          <rect x="250" y="340" width="300" height="4" fill="url(#ai-gradient)" rx="2" />
        </svg>
      </div>

      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
          {t('product.automation.title')}
        </h1>
        <p className="text-slate-300 text-lg">
          {t2.subtitle}
        </p>
        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
          {t2.access}
        </Badge>
      </div>



      {/* Book Access Card */}
      <Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-700/50 mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-6 h-6 text-blue-400" />
              <div>
                <CardTitle className="text-white text-xl">📚 {t2.completeKit}</CardTitle>
                <CardDescription className="text-slate-300 mt-1">
                  {t2.kitDescription}
                </CardDescription>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={() => {
              setReadingBook(true)
              setSelectedModule(1)
            }}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            {t2.openKit}
          </Button>
        </CardContent>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-400 mb-1">4</div>
            <div className="text-sm text-slate-400">{t2.aiTools}</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">50</div>
            <div className="text-sm text-slate-400">{t2.aiPrompts}</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-pink-400 mb-1">10</div>
            <div className="text-sm text-slate-400">{t2.modules}</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">90%</div>
            <div className="text-sm text-slate-400">{t2.timeSaved}</div>
          </CardContent>
        </Card>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MODULES.map((module) => (
          <Card key={module.id} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-200">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {module.id}
                </div>
                <CardTitle className="text-white text-lg">{module.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {module.tools && (
                <div className="text-slate-300 text-sm">
                  <strong>{module.tools.length} {t2.tools.replace(':', '')}</strong> {module.tools.map(t => t.name).join(', ')}
                </div>
              )}
              {module.message && (
                <p className="text-slate-300 text-sm italic">💡 {module.message.split('\n')[0]}</p>
              )}
              {module.flow && (
                <p className="text-slate-300 text-sm">{module.flow}</p>
              )}
              <Button 
                onClick={() => {
                  setReadingBook(true)
                  setSelectedModule(module.id)
                }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                {t2.readModule}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
