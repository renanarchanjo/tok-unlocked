"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Copy, Check, FileText, BookOpen, ChevronLeft, ChevronRight, Download, Lock } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface ViralScriptsContentProps {
  hasAccess: boolean
}

export default function ViralScriptsContent({ hasAccess }: ViralScriptsContentProps) {
  const { t, language } = useLanguage()
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [readingBook, setReadingBook] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedModule, setSelectedModule] = useState<number | null>(null)

  const MODULES_EN = [
    {
      id: 1,
      title: "Module 1 — Viral Psychology",
      content: {
        whatToDo: "Understand why people stop scrolling — emotion + curiosity.",
        howToDoIt: [
          "Always start with a pattern break (sound, movement, or phrase)",
          "Use the 'Open Loop' formula: ask a question, promise the answer later"
        ],
        trick: "Hook examples:\n• 'I bet you didn't know TikTok pays for this.'\n• 'This 10-second trick sells out every week.'"
      }
    },
    {
      id: 2,
      title: "Module 2 — Hook Factory (AI Edition)",
      content: {
        whatToDo: "Use AI to generate high-retention hooks.",
        howToDoIt: [
          "Prompt for ChatGPT: 'Write 10 viral hooks for TikTok videos about [product name] that trigger curiosity and desire.'",
          "Use the best 3, test them in your first 3 videos"
        ],
        proTip: "The first 2 seconds decide your video's destiny."
      }
    },
    {
      id: 3,
      title: "Module 3 — Viral Scripts Library",
      content: {
        whatToDo: "Use ready-made frameworks.",
        frameworks: [
          "Shock → Curiosity → Reveal → CTA",
          "Problem → Product → Proof → Hook → CTA",
          "Before/After → Reaction → Tag Product"
        ],
        trick: "Always end your video with a movement or emoji that leads to the link."
      }
    },
    {
      id: 4,
      title: "Module 4 — Caption Magic",
      content: {
        whatToDo: "Captions convert silent viewers into buyers.",
        howToDoIt: [
          "Prompt for ChatGPT: 'Write 5 short captions (under 10 words) for a viral TikTok ad about [product]. Tone: casual, fun, curiosity.'"
        ],
        bonus: "Use emojis strategically:\n🔥 urgency, 💡 curiosity, 💸 results, ⚡ proof"
      }
    },
    {
      id: 5,
      title: "Module 5 — CTAs that Convert",
      examples: [
        "Grab yours before it's gone 🔥",
        "It's still in stock… for now 👀",
        "Tap here if you're serious 💰"
      ],
      trick: "Avoid 'Buy now' — use emotion-driven CTAs that blend with the platform."
    },
    {
      id: 6,
      title: "Module 6 — Hashtag Map",
      hashtags: {
        UK: "#TikTokMadeMeBuyIt #ViralFindsUK #SideHustleUK",
        US: "#AmazonFinds #ViralOnTikTok #ExtraIncome",
        BR: "#AchadinhosTikTok #RendaExtraOnline #LojaTikTok",
        MX: "#TikTokShopMX #OfertasOnline #GanaDineroTikTok"
      }
    },
    {
      id: 7,
      title: "Module 7 — AI Workflow",
      flow: "🧠 ChatGPT → 🎬 OpusClip → ✍️ Submagic → 📲 Post",
      trick: "Batch this process — 1 day = 7 days of content."
    },
    {
      id: 8,
      title: "Module 8 — Templates Ready to Use",
      templates: [
        "Product demo",
        "Reaction style",
        "Unboxing"
      ]
    },
    {
      id: 9,
      title: "Module 9 — Viral Testing Plan",
      plan: [
        "Post 3 videos/day for 7 days",
        "Keep only videos above 1,000 views"
      ]
    },
    {
      id: 10,
      title: "Module 10 — Final Push",
      tip: "Viral is math — not luck. The more you post, the more you win."
    }
  ]

  const MODULES_PT = [
    {
      id: 1,
      title: "Módulo 1 — Psicologia Viral",
      content: {
        whatToDo: "Entenda por que as pessoas param de rolar — emoção + curiosidade.",
        howToDoIt: [
          "Sempre comece com uma quebra de padrão (som, movimento ou frase)",
          "Use a fórmula 'Loop Aberto': faça uma pergunta, prometa a resposta depois"
        ],
        trick: "Exemplos de ganchos:\n• 'Aposto que você não sabia que o TikTok paga por isso.'\n• 'Este truque de 10 segundos esgota toda semana.'"
      }
    },
    {
      id: 2,
      title: "Módulo 2 — Fábrica de Ganchos (Edição IA)",
      content: {
        whatToDo: "Use IA para gerar ganchos de alta retenção.",
        howToDoIt: [
          "Prompt para ChatGPT: 'Escreva 10 ganchos virais para vídeos TikTok sobre [nome do produto] que acionem curiosidade e desejo.'",
          "Use os 3 melhores, teste-os nos seus primeiros 3 vídeos"
        ],
        proTip: "Os primeiros 2 segundos decidem o destino do seu vídeo."
      }
    },
    {
      id: 3,
      title: "Módulo 3 — Biblioteca de Scripts Virais",
      content: {
        whatToDo: "Use frameworks prontos.",
        frameworks: [
          "Choque → Curiosidade → Revelação → CTA",
          "Problema → Produto → Prova → Gancho → CTA",
          "Antes/Depois → Reação → Marcar Produto"
        ],
        trick: "Sempre termine seu vídeo com um movimento ou emoji que leve ao link."
      }
    },
    {
      id: 4,
      title: "Módulo 4 — Mágica das Legendas",
      content: {
        whatToDo: "Legendas convertem espectadores silenciosos em compradores.",
        howToDoIt: [
          "Prompt para ChatGPT: 'Escreva 5 legendas curtas (menos de 10 palavras) para um anúncio viral TikTok sobre [produto]. Tom: casual, divertido, curiosidade.'"
        ],
        bonus: "Use emojis estrategicamente:\n🔥 urgência, 💡 curiosidade, 💸 resultados, ⚡ prova"
      }
    },
    {
      id: 5,
      title: "Módulo 5 — CTAs que Convertem",
      examples: [
        "Pegue o seu antes que acabe 🔥",
        "Ainda está em estoque… por enquanto 👀",
        "Toque aqui se você é sério 💰"
      ],
      trick: "Evite 'Compre agora' — use CTAs emocionais que se misturam com a plataforma."
    },
    {
      id: 6,
      title: "Módulo 6 — Mapa de Hashtags",
      hashtags: {
        UK: "#TikTokMadeMeBuyIt #ViralFindsUK #SideHustleUK",
        US: "#AmazonFinds #ViralOnTikTok #ExtraIncome",
        BR: "#AchadinhosTikTok #RendaExtraOnline #LojaTikTok",
        MX: "#TikTokShopMX #OfertasOnline #GanaDineroTikTok"
      }
    },
    {
      id: 7,
      title: "Módulo 7 — Fluxo de Trabalho IA",
      flow: "🧠 ChatGPT → 🎬 OpusClip → ✍️ Submagic → 📲 Postar",
      trick: "Faça este processo em lote — 1 dia = 7 dias de conteúdo."
    },
    {
      id: 8,
      title: "Módulo 8 — Templates Prontos para Usar",
      templates: [
        "Demo de produto",
        "Estilo reação",
        "Unboxing"
      ]
    },
    {
      id: 9,
      title: "Módulo 9 — Plano de Teste Viral",
      plan: [
        "Poste 3 vídeos/dia por 7 dias",
        "Mantenha apenas vídeos acima de 1.000 visualizações"
      ]
    },
    {
      id: 10,
      title: "Módulo 10 — Impulso Final",
      tip: "Viral é matemática — não sorte. Quanto mais você posta, mais você ganha."
    }
  ]

  const MODULES = language === 'pt' ? MODULES_PT : MODULES_EN

  const copyToClipboard = async (text: string, id: string) => {
    if (!hasAccess) return
    
    try {
      // Tenta usar a API moderna do Clipboard
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text)
        setCopiedId(id)
        setTimeout(() => setCopiedId(null), 2000)
      } else {
        // Fallback para o método antigo usando textarea
        const textarea = document.createElement('textarea')
        textarea.value = text
        textarea.style.position = 'fixed'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.select()
        
        try {
          document.execCommand('copy')
          setCopiedId(id)
          setTimeout(() => setCopiedId(null), 2000)
        } catch (err) {
          console.error('Fallback copy failed:', err)
        } finally {
          document.body.removeChild(textarea)
        }
      }
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }

  const downloadPDF = (fileName: string) => {
    if (!hasAccess) return
    const link = document.createElement('a')
    link.href = `/pdfs/viral-scripts/${fileName}-${language}.pdf`
    link.download = `${fileName}-${language}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const CopyButton = ({ text, id }: { text: string; id: string }) => (
    <Button
      size="sm"
      variant="outline"
      className="border-slate-600 text-slate-300 hover:bg-slate-700/50 transition-all duration-200"
      onClick={() => copyToClipboard(text, id)}
      disabled={!hasAccess}
    >
      {copiedId === id ? (
        <>
          <Check className="w-4 h-4 text-green-400 mr-2" />
          {language === 'pt' ? 'Copiado' : 'Copied'}
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 mr-2" />
          {language === 'pt' ? 'Copiar' : 'Copy'}
        </>
      )}
    </Button>
  )

  const texts = {
    en: {
      title: "Viral Video Scripts & Templates",
      subtitle: "Create videos that go viral — even with zero followers",
      access: "Complete Library Access",
      pdfFiles: "Scripts Library PDF Files",
      pdfDescription: "Access and download all modules in PDF format",
      completeLibrary: "Complete PDF Library",
      libraryDescription: "Access all scripts, templates and examples in book format",
      openLibrary: "Open Complete Library",
      modules: "Modules",
      viralScripts: "Viral Scripts",
      provenHooks: "Proven Hooks",
      frameworks: "Frameworks",
      readModule: "Read Module",
      close: "Close",
      previous: "Previous",
      next: "Next",
      page: "Page",
      downloadPDF: "Download PDF",
      step1: "Step 1 – What to do:",
      step2: "Step 2 – How to do it:",
      topFrameworks: "Top 3 Frameworks:",
      trick: "Trick",
      proTip: "Pro Tip",
      bonus: "Bonus",
      examples: "Examples:",
      hashtagMap: "Hashtag Map by Region:",
      workflow: "Workflow:",
      templates: "Templates:",
      testingPlan: "Testing Plan:",
      lockedContent: "🔒 Content Locked",
      lockedMessage: "Purchase this product to unlock all scripts and templates",
      purchaseNow: "Purchase Now"
    },
    pt: {
      title: "Scripts e Templates de Vídeos Virais",
      subtitle: "Crie vídeos que viralizam — mesmo com zero seguidores",
      access: "Acesso Completo à Biblioteca",
      pdfFiles: "Arquivos PDF da Biblioteca de Scripts",
      pdfDescription: "Acesse e baixe todos os módulos em formato PDF",
      completeLibrary: "Biblioteca PDF Completa",
      libraryDescription: "Acesse todos os scripts, templates e exemplos em formato de livro",
      openLibrary: "Abrir Biblioteca Completa",
      modules: "Módulos",
      viralScripts: "Scripts Virais",
      provenHooks: "Ganchos Comprovados",
      frameworks: "Frameworks",
      readModule: "Ler Módulo",
      close: "Fechar",
      previous: "Anterior",
      next: "Próximo",
      page: "Página",
      downloadPDF: "Baixar PDF",
      step1: "Passo 1 – O que fazer:",
      step2: "Passo 2 – Como fazer:",
      topFrameworks: "Top 3 Frameworks:",
      trick: "Truque",
      proTip: "Dica Pro",
      bonus: "Bônus",
      examples: "Exemplos:",
      hashtagMap: "Mapa de Hashtags por Região:",
      workflow: "Fluxo de Trabalho:",
      templates: "Templates:",
      testingPlan: "Plano de Teste:",
      lockedContent: "🔒 Conteúdo Bloqueado",
      lockedMessage: "Compre este produto para desbloquear todos os scripts e templates",
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
            {t('product.scripts.title')}
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
              {t2.purchaseNow} - $47
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
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
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
                  <BookOpen className="w-5 h-5 text-purple-400" />
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
                      {module.content && (
                        <>
                          {module.content.whatToDo && (
                            <div className="border-l-4 border-purple-500 pl-6 py-4">
                              <h3 className="font-bold text-slate-900 mb-3">{t2.step1}</h3>
                              <p className="text-slate-700">{module.content.whatToDo}</p>
                            </div>
                          )}

                          {module.content.howToDoIt && (
                            <div className="border-l-4 border-blue-500 pl-6 py-4">
                              <h3 className="font-bold text-slate-900 mb-3">{t2.step2}</h3>
                              <ul className="list-disc list-inside space-y-2 text-slate-700">
                                {module.content.howToDoIt.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {module.content.frameworks && (
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                              <h3 className="font-bold text-blue-900 mb-3">{t2.topFrameworks}</h3>
                              <ol className="list-decimal list-inside space-y-2 text-blue-800">
                                {module.content.frameworks.map((fw, idx) => (
                                  <li key={idx}>{fw}</li>
                                ))}
                              </ol>
                            </div>
                          )}

                          {(module.content.trick || module.content.proTip || module.content.bonus) && (
                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                              <h3 className="font-bold text-orange-900 mb-3">
                                🔥 {module.content.trick ? t2.trick : module.content.proTip ? t2.proTip : t2.bonus}:
                              </h3>
                              <p className="text-orange-800 whitespace-pre-line">
                                {module.content.trick || module.content.proTip || module.content.bonus}
                              </p>
                            </div>
                          )}
                        </>
                      )}

                      {module.examples && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                          <h3 className="font-bold text-green-900 mb-3">{t2.examples}</h3>
                          <ul className="list-disc list-inside space-y-2 text-green-800">
                            {module.examples.map((ex, idx) => (
                              <li key={idx}>"{ex}"</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {module.hashtags && (
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                          <h3 className="font-bold text-purple-900 mb-3">{t2.hashtagMap}</h3>
                          <div className="space-y-3 text-purple-800">
                            {Object.entries(module.hashtags).map(([region, tags]) => (
                              <div key={region}>
                                <strong>{region}:</strong> {tags}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {module.flow && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                          <h3 className="font-bold text-blue-900 mb-3">{t2.workflow}</h3>
                          <p className="text-blue-800 text-lg">{module.flow}</p>
                        </div>
                      )}

                      {module.templates && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                          <h3 className="font-bold text-yellow-900 mb-3">{t2.templates}</h3>
                          <ul className="list-disc list-inside space-y-2 text-yellow-800">
                            {module.templates.map((t, idx) => (
                              <li key={idx}>{t}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {module.plan && (
                        <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
                          <h3 className="font-bold text-pink-900 mb-3">{t2.testingPlan}</h3>
                          <ul className="list-disc list-inside space-y-2 text-pink-800">
                            {module.plan.map((p, idx) => (
                              <li key={idx}>{p}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {module.tip && (
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6 text-center">
                          <p className="text-lg font-medium text-purple-900">💡 {module.tip}</p>
                        </div>
                      )}

                      {module.trick && (
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                          <h3 className="font-bold text-orange-900 mb-3">🔥 {t2.trick}:</h3>
                          <p className="text-orange-800">{module.trick}</p>
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
            <linearGradient id="scripts-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#0a0a0a', stopOpacity: 1}} />
              <stop offset="50%" style={{stopColor: '#1a1a2e', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#0a0a0a', stopOpacity: 1}} />
            </linearGradient>
            <linearGradient id="scripts-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
              <stop offset="50%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
            </linearGradient>
          </defs>
          
          <rect width="800" height="400" fill="url(#scripts-bg)" />
          
          <g opacity="0.15">
            <rect x="50" y="80" width="80" height="60" rx="8" fill="url(#scripts-gradient)" />
            <circle cx="90" cy="110" r="15" fill="#fff" />
            <polygon points="85,105 95,110 85,115" fill="#3b82f6" />
            
            <rect x="670" y="250" width="80" height="60" rx="8" fill="url(#scripts-gradient)" />
            <circle cx="710" cy="280" r="15" fill="#fff" />
            <polygon points="705,275 715,280 705,285" fill="#ec4899" />
          </g>
          
          <g opacity="0.2">
            <rect x="150" y="50" width="500" height="10" fill="url(#scripts-gradient)" rx="5" />
            <rect x="150" y="340" width="500" height="10" fill="url(#scripts-gradient)" rx="5" />
          </g>
          
          <text x="400" y="160" textAnchor="middle" fill="url(#scripts-gradient)" fontSize="52" fontWeight="bold" fontFamily="system-ui, -apple-system, sans-serif">
            {language === 'pt' ? 'Scripts de Vídeos Virais' : 'Viral Video Scripts'}
          </text>
          <text x="400" y="220" textAnchor="middle" fill="url(#scripts-gradient)" fontSize="44" fontWeight="bold" fontFamily="system-ui, -apple-system, sans-serif">
            {language === 'pt' ? '& Templates' : '& Templates'}
          </text>
          
          <text x="400" y="270" textAnchor="middle" fill="#94a3b8" fontSize="18" fontFamily="system-ui, -apple-system, sans-serif">
            {language === 'pt' ? 'Scripts Prontos que Convertem' : 'Ready-to-Use Scripts That Convert'}
          </text>
          
          <rect x="250" y="330" width="300" height="4" fill="url(#scripts-gradient)" rx="2" />
        </svg>
      </div>

      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
          {t('product.scripts.title')}
        </h1>
        <p className="text-slate-300 text-lg">
          {t2.subtitle}
        </p>
        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
          {t2.access}
        </Badge>
      </div>



      {/* Book Access Card */}
      <Card className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-700/50 mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-6 h-6 text-purple-400" />
              <div>
                <CardTitle className="text-white text-xl">📚 {t2.completeLibrary}</CardTitle>
                <CardDescription className="text-slate-300 mt-1">
                  {t2.libraryDescription}
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
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            {t2.openLibrary}
          </Button>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-400 mb-1">10</div>
            <div className="text-sm text-slate-400">{t2.modules}</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-pink-400 mb-1">50+</div>
            <div className="text-sm text-slate-400">{t2.viralScripts}</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">20+</div>
            <div className="text-sm text-slate-400">{t2.provenHooks}</div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">3</div>
            <div className="text-sm text-slate-400">{t2.frameworks}</div>
          </CardContent>
        </Card>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MODULES.map((module) => (
          <Card key={module.id} className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-200">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  {module.id}
                </div>
                <CardTitle className="text-white text-lg">{module.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {module.content && module.content.whatToDo && (
                <p className="text-slate-300 text-sm">{module.content.whatToDo}</p>
              )}
              {module.tip && (
                <p className="text-slate-300 text-sm italic">💡 {module.tip}</p>
              )}
              <Button 
                onClick={() => {
                  setReadingBook(true)
                  setSelectedModule(module.id)
                }}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
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

