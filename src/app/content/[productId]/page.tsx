"use client"

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Download, Play, FileText, ExternalLink } from 'lucide-react'

// Conteúdo de cada produto
const PRODUCT_CONTENT = {
  main: {
    title: 'TikTok Shop Income Guide',
    modules: [
      {
        title: 'Module 1: Getting Started',
        type: 'video',
        duration: '45 min',
        content: 'https://player.vimeo.com/video/123456789', // Substitua pela URL real
        description: 'Learn the fundamentals of TikTok Shop and how to set up your first store.'
      },
      {
        title: 'Module 2: Product Research',
        type: 'video',
        duration: '60 min',
        content: 'https://player.vimeo.com/video/123456790',
        description: 'Discover winning products and analyze market trends.'
      },
      {
        title: 'Income Calculator Spreadsheet',
        type: 'download',
        content: '/downloads/income-calculator.xlsx', // Arquivo para download
        description: 'Calculate your potential earnings with this Excel template.'
      },
      {
        title: 'Quick Start Checklist',
        type: 'pdf',
        content: '/downloads/quick-start-guide.pdf',
        description: 'Step-by-step checklist to launch your TikTok Shop.'
      }
    ]
  },
  scripts: {
    title: 'Viral Video Scripts & Templates',
    modules: [
      {
        title: '50 High-Converting Scripts',
        type: 'download',
        content: '/downloads/viral-scripts.pdf',
        description: 'Proven scripts that generated millions of views.'
      },
      {
        title: 'Script Writing Masterclass',
        type: 'video',
        duration: '90 min',
        content: 'https://player.vimeo.com/video/123456791',
        description: 'Learn how to write viral scripts from scratch.'
      },
      {
        title: 'Canva Templates Pack',
        type: 'external',
        content: 'https://canva.com/templates/your-pack', // Link externo
        description: 'Ready-to-use Canva templates for your videos.'
      }
    ]
  },
  automation: {
    title: 'AI Automation Kit',
    modules: [
      {
        title: 'ChatGPT Prompts Library',
        type: 'download',
        content: '/downloads/chatgpt-prompts.pdf',
        description: '100+ prompts for content creation and customer service.'
      },
      {
        title: 'Automation Setup Tutorial',
        type: 'video',
        duration: '120 min',
        content: 'https://player.vimeo.com/video/123456792',
        description: 'Complete guide to setting up AI automation workflows.'
      },
      {
        title: 'Zapier Templates',
        type: 'external',
        content: 'https://zapier.com/shared/your-templates',
        description: 'Pre-built automation workflows for TikTok Shop.'
      }
    ]
  }
}

// Simulação da base de compras (mesmo do arquivo principal)
const PURCHASE_DATABASE = {
  'customer1@email.com': ['main', 'scripts'],
  'customer2@email.com': ['main'],
  'customer3@email.com': ['main', 'scripts', 'automation'],
  'demo@tokunlocked.com': ['main', 'scripts', 'automation']
}

export default function ProductContent() {
  const params = useParams()
  const router = useRouter()
  const [userEmail, setUserEmail] = useState('')
  const [hasAccess, setHasAccess] = useState(false)
  const [selectedModule, setSelectedModule] = useState(0)

  const productId = params.productId as string
  const product = PRODUCT_CONTENT[productId as keyof typeof PRODUCT_CONTENT]

  useEffect(() => {
    // Verificar se usuário está logado e tem acesso
    const savedEmail = localStorage.getItem('tokunlocked_user')
    if (!savedEmail) {
      router.push('/')
      return
    }

    const userPurchases = PURCHASE_DATABASE[savedEmail as keyof typeof PURCHASE_DATABASE] || []
    const hasProductAccess = userPurchases.includes(productId)

    if (!hasProductAccess) {
      router.push('/')
      return
    }

    setUserEmail(savedEmail)
    setHasAccess(true)
  }, [productId, router])

  if (!hasAccess || !product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-slate-300 mb-6">You don't have access to this content.</p>
          <Button onClick={() => router.push('/')} className="bg-gradient-to-r from-blue-500 to-pink-500">
            Return to Dashboard
          </Button>
        </div>
      </div>
    )
  }

  const currentModule = product.modules[selectedModule]

  const renderContent = () => {
    switch (currentModule.type) {
      case 'video':
        return (
          <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden">
            <iframe
              src={currentModule.content}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        )
      
      case 'download':
        return (
          <div className="bg-slate-800 rounded-lg p-8 text-center">
            <Download className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{currentModule.title}</h3>
            <p className="text-slate-300 mb-6">{currentModule.description}</p>
            <Button 
              className="bg-gradient-to-r from-blue-500 to-pink-500"
              onClick={() => window.open(currentModule.content, '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Download File
            </Button>
          </div>
        )
      
      case 'external':
        return (
          <div className="bg-slate-800 rounded-lg p-8 text-center">
            <ExternalLink className="w-16 h-16 text-pink-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{currentModule.title}</h3>
            <p className="text-slate-300 mb-6">{currentModule.description}</p>
            <Button 
              className="bg-gradient-to-r from-blue-500 to-pink-500"
              onClick={() => window.open(currentModule.content, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open External Link
            </Button>
          </div>
        )
      
      default:
        return (
          <div className="bg-slate-800 rounded-lg p-8 text-center">
            <FileText className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{currentModule.title}</h3>
            <p className="text-slate-300">{currentModule.description}</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-pink-600/10"></div>
      
      {/* Header */}
      <header className="relative z-10 border-b border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push('/')}
                className="text-slate-300 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
              <h1 className="text-xl font-bold text-white">
                {product.title}
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Lista de Módulos */}
          <div className="lg:col-span-1">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-lg">Course Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {product.modules.map((module, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedModule(index)}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      selectedModule === index
                        ? 'bg-gradient-to-r from-blue-500/20 to-pink-500/20 border border-blue-500/30'
                        : 'bg-slate-700/30 hover:bg-slate-700/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {module.type === 'video' && <Play className="w-4 h-4 text-blue-400" />}
                      {module.type === 'download' && <Download className="w-4 h-4 text-green-400" />}
                      {module.type === 'external' && <ExternalLink className="w-4 h-4 text-pink-400" />}
                      {module.type === 'pdf' && <FileText className="w-4 h-4 text-orange-400" />}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">
                          {module.title}
                        </p>
                        {module.duration && (
                          <p className="text-xs text-slate-400">
                            {module.duration}
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-xl">
                  {currentModule.title}
                </CardTitle>
                <p className="text-slate-300">
                  {currentModule.description}
                </p>
              </CardHeader>
              <CardContent>
                {renderContent()}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}