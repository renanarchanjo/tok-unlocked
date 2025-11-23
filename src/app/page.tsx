"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Lock, Unlock, Mail, LogOut, Play, FileText, Bot, ArrowLeft, Trophy, Target, Sparkles, Eye, EyeOff, Zap, TrendingUp, Users, ArrowRight, Star } from 'lucide-react'
import TikTokGuideContent from '@/components/products/TikTokGuideContent'
import ViralScriptsContent from '@/components/products/ViralScriptsContent'
import AIAutomationContent from '@/components/products/AIAutomationContent'
import AIAssistant from '@/components/custom/AIAssistant'
import LanguageSelector from '@/components/ui/language-selector'
import { useLanguage } from '@/contexts/LanguageContext'
import Onboarding from '@/components/custom/Onboarding'
import ProgressTracker from '@/components/custom/ProgressTracker'
import DailyMissions from '@/components/custom/DailyMissions'
import SupportWidget from '@/components/custom/SupportWidget'

// Sistema de controle de acesso - ACESSO LIBERADO PARA TODOS
// Qualquer email pode acessar todos os produtos
const PURCHASE_DATABASE: Record<string, { purchases: string[], password: string }> = {}

// Traduções
const translations = {
  en: {
    login: {
      title: 'Welcome back to TokUnlocked',
      subtitle: 'Enter your email to access your members\' dashboard',
      email: 'Email Address',
      emailPlaceholder: 'your@email.com',
      password: 'Password',
      passwordPlaceholder: 'Enter your password',
      button: 'Unlock My Dashboard',
      note: 'Access is open to all users',
      verifying: 'Verifying...',
      errorPassword: 'Incorrect password. Please try again.',
      onboarding: 'Welcome to TokUnlocked — your tools are ready. Let\'s turn content into profit. Need help? Contact support@tokunlocked.com',
      register: 'First time? Create your account',
      backToLogin: 'Already have an account? Sign in',
      checkoutBanner: {
        title: '🚀 Unlock Premium Features',
        subtitle: 'Get instant access to exclusive tools and resources',
        button: 'Upgrade Now',
        badge: 'Limited Offer'
      }
    },
    register: {
      title: 'Create Your Account',
      subtitle: 'Enter your email to unlock your dashboard',
      email: 'Email Address',
      emailPlaceholder: 'your@email.com',
      password: 'Create Password',
      passwordPlaceholder: 'Choose a secure password',
      confirmPassword: 'Confirm Password',
      confirmPasswordPlaceholder: 'Re-enter your password',
      button: 'Create Account & Access Dashboard',
      verifying: 'Creating account...',
      errorPasswordMatch: 'Passwords do not match. Please try again.',
      errorPasswordLength: 'Password must be at least 6 characters long.',
      success: 'Account created successfully! Redirecting...'
    },
    header: {
      back: 'Back',
      members: 'Members Area',
      logout: 'Logout'
    },
    dashboard: {
      welcome: 'Welcome back, {{name}} 👋',
      subtitle: 'Your tools and resources are waiting for you.',
      progress: 'You\'re {{progress}}% through your TokUnlocked journey. Keep going — consistency pays off.',
      cta: 'Ready to start? Complete Step 1 of your TokUnlocked roadmap.',
      ctaButton: 'Start Now',
      products: 'Unlocked Tools',
      available: 'New Opportunities',
      access: 'Progress Level',
      unlockedCount: 'You\'ve unlocked {{count}} tools so far',
      opportunities: 'Explore 2 upcoming add-ons soon to be released',
      progressLevel: 'You\'re {{progress}}% complete — nice work!',
      checkoutBanner: {
        title: '🚀 Unlock Premium Features',
        subtitle: 'Get instant access to exclusive tools and resources',
        button: 'Upgrade Now',
        badge: 'Limited Offer'
      }
    },
    product: {
      main: {
        title: 'TikTok Shop Income Guide',
        description: 'Complete guide to earning consistent income through TikTok Shop',
        type: 'Main Product',
        button: 'Access Main Course'
      },
      scripts: {
        title: 'Viral Video Scripts & Ready-to-Use Templates',
        description: '120+ pre-tested TikTok scripts that turn viewers into buyers.',
        type: 'Order Bump #1',
        button: 'Access Templates'
      },
      automation: {
        title: 'AI Automation Kit',
        description: 'Advanced AI tools and automation workflows to multiply your TikTok Shop results.',
        type: 'Order Bump #2',
        button: 'Access Toolkit'
      },
      access: 'Access Now',
      locked: 'Locked - Purchase Required',
      purchase: 'Purchase for'
    },
    ai: {
      title: 'AI Assistant',
      subtitle: 'Your personal AI partner — create viral ideas, captions, and strategies instantly.',
      button: '💬 Open AI Assistant'
    }
  },
  pt: {
    login: {
      title: 'Bem-vindo de volta ao TokUnlocked',
      subtitle: 'Digite seu e-mail para acessar seu painel de membros',
      email: 'Endereço de E-mail',
      emailPlaceholder: 'seu@email.com',
      password: 'Senha',
      passwordPlaceholder: 'Digite sua senha',
      button: 'Desbloquear Meu Painel',
      note: 'Acesso liberado para todos os usuários',
      verifying: 'Verificando...',
      errorPassword: 'Senha incorreta. Tente novamente.',
      onboarding: 'Bem-vindo ao TokUnlocked — suas ferramentas estão prontas. Vamos transformar conteúdo em lucro. Precisa de ajuda? Contate support@tokunlocked.com',
      register: 'Primeira vez? Crie sua conta',
      backToLogin: 'Já tem conta? Faça login',
      checkoutBanner: {
        title: '🚀 Desbloqueie Recursos Premium',
        subtitle: 'Tenha acesso instantâneo a ferramentas e recursos exclusivos',
        button: 'Fazer Upgrade',
        badge: 'Oferta Limitada'
      }
    },
    register: {
      title: 'Crie Sua Conta',
      subtitle: 'Digite seu e-mail para desbloquear seu painel',
      email: 'Endereço de E-mail',
      emailPlaceholder: 'seu@email.com',
      password: 'Criar Senha',
      passwordPlaceholder: 'Escolha uma senha segura',
      confirmPassword: 'Confirmar Senha',
      confirmPasswordPlaceholder: 'Digite a senha novamente',
      button: 'Criar Conta e Acessar Painel',
      verifying: 'Criando conta...',
      errorPasswordMatch: 'As senhas não coincidem. Tente novamente.',
      errorPasswordLength: 'A senha deve ter pelo menos 6 caracteres.',
      success: 'Conta criada com sucesso! Redirecionando...'
    },
    header: {
      back: 'Voltar',
      members: 'Área de Membros',
      logout: 'Sair'
    },
    dashboard: {
      welcome: 'Bem-vindo de volta, {{name}} 👋',
      subtitle: 'Suas ferramentas e recursos estão esperando por você.',
      progress: 'Você está {{progress}}% através da sua jornada TokUnlocked. Continue — a consistência compensa.',
      cta: 'Pronto para começar? Complete o Passo 1 do seu roteiro TokUnlocked.',
      ctaButton: 'Começar Agora',
      products: 'Ferramentas Desbloqueadas',
      available: 'Novas Oportunidades',
      access: 'Nível de Progresso',
      unlockedCount: 'Você desbloqueou {{count}} ferramentas até agora',
      opportunities: 'Explore 2 complementos futuros em breve',
      progressLevel: 'Você está {{progress}}% completo — bom trabalho!',
      checkoutBanner: {
        title: '🚀 Desbloqueie Recursos Premium',
        subtitle: 'Tenha acesso instantâneo a ferramentas e recursos exclusivos',
        button: 'Fazer Upgrade',
        badge: 'Oferta Limitada'
      }
    },
    product: {
      main: {
        title: 'Guia de Renda TikTok Shop',
        description: 'Guia completo para ganhar renda consistente através do TikTok Shop',
        type: 'Produto Principal',
        button: 'Acessar Curso Principal'
      },
      scripts: {
        title: 'Scripts Virais & Templates Prontos',
        description: '120+ scripts de TikTok pré-testados que transformam visualizadores em compradores.',
        type: 'Order Bump #1',
        button: 'Acessar Templates'
      },
      automation: {
        title: 'Kit de Automação IA',
        description: 'Ferramentas avançadas de IA e fluxos de automação para multiplicar seus resultados no TikTok Shop.',
        type: 'Order Bump #2',
        button: 'Acessar Kit'
      },
      access: 'Acessar Agora',
      locked: 'Bloqueado - Compra Necessária',
      purchase: 'Comprar por'
    },
    ai: {
      title: 'Assistente IA',
      subtitle: 'Seu parceiro de IA pessoal — crie ideias virais, legendas e estratégias instantaneamente.',
      button: '💬 Abrir Assistente IA'
    }
  }
}

export default function TokUnlocked() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [userPurchases, setUserPurchases] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentView, setCurrentView] = useState<'dashboard' | 'main' | 'scripts' | 'automation' | 'ai-assistant'>('dashboard')
  const [completedModules, setCompletedModules] = useState<string[]>([])
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [isRegisterMode, setIsRegisterMode] = useState(false)
  const [registerPassword, setRegisterPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showRegisterPassword, setShowRegisterPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // Produtos
  const PRODUCTS = [
    {
      id: 'main',
      title: t.product.main.title,
      description: t.product.main.description,
      type: t.product.main.type,
      icon: Play,
      coverImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop&crop=center',
      price: '$97'
    },
    {
      id: 'scripts',
      title: t.product.scripts.title,
      description: t.product.scripts.description,
      type: t.product.scripts.type,
      icon: FileText,
      coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center',
      price: '$47'
    },
    {
      id: 'automation',
      title: t.product.automation.title,
      description: t.product.automation.description,
      type: t.product.automation.type,
      icon: Bot,
      coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center',
      price: '$67'
    }
  ]

  // Verificar se usuário já está logado (localStorage)
  useEffect(() => {
    const savedEmail = localStorage.getItem('tokunlocked_user')
    const savedName = localStorage.getItem('tokunlocked_name')
    const savedCompleted = localStorage.getItem('tokunlocked_completed')
    const hasSeenOnboarding = localStorage.getItem('tokunlocked_onboarding')
    
    if (savedEmail) {
      setUserEmail(savedEmail)
      setUserName(savedName || savedEmail.split('@')[0])
      // ACESSO TOTAL LIBERADO - todos os produtos
      setUserPurchases(['main', 'scripts', 'automation'])
      setIsLoggedIn(true)
      
      if (savedCompleted) setCompletedModules(JSON.parse(savedCompleted))
      
      // Mostrar onboarding apenas no primeiro login
      if (!hasSeenOnboarding) {
        setShowOnboarding(true)
      }
    }
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simular verificação - ACESSO LIBERADO PARA QUALQUER EMAIL
    setTimeout(() => {
      const userData = PURCHASE_DATABASE[loginEmail.toLowerCase()]
      
      // Se usuário existe, verificar senha
      if (userData && userData.password !== loginPassword) {
        alert(t.login.errorPassword)
        setIsLoading(false)
        return
      }
      
      const name = loginEmail.split('@')[0]
      setUserEmail(loginEmail)
      setUserName(name)
      // ACESSO TOTAL LIBERADO - todos os produtos
      setUserPurchases(['main', 'scripts', 'automation'])
      setIsLoggedIn(true)
      localStorage.setItem('tokunlocked_user', loginEmail)
      localStorage.setItem('tokunlocked_name', name)
      
      // Mostrar onboarding no primeiro login
      const hasSeenOnboarding = localStorage.getItem('tokunlocked_onboarding')
      if (!hasSeenOnboarding) {
        setShowOnboarding(true)
      }
      
      setIsLoading(false)
    }, 1500)
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Validações
    if (registerPassword.length < 6) {
      alert(t.register.errorPasswordLength)
      setIsLoading(false)
      return
    }

    if (registerPassword !== confirmPassword) {
      alert(t.register.errorPasswordMatch)
      setIsLoading(false)
      return
    }
    
    // ACESSO LIBERADO - criar conta automaticamente
    setTimeout(() => {
      // Adicionar usuário ao banco
      PURCHASE_DATABASE[loginEmail.toLowerCase()] = {
        purchases: ['main', 'scripts', 'automation'],
        password: registerPassword
      }
      
      // Login automático após registro
      const name = loginEmail.split('@')[0]
      setUserEmail(loginEmail)
      setUserName(name)
      // ACESSO TOTAL LIBERADO - todos os produtos
      setUserPurchases(['main', 'scripts', 'automation'])
      setIsLoggedIn(true)
      localStorage.setItem('tokunlocked_user', loginEmail)
      localStorage.setItem('tokunlocked_name', name)
      
      // Mostrar onboarding
      setShowOnboarding(true)
      
      setIsLoading(false)
    }, 1500)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserEmail('')
    setUserName('')
    setUserPurchases([])
    setLoginEmail('')
    setLoginPassword('')
    setRegisterPassword('')
    setConfirmPassword('')
    setCurrentView('dashboard')
    setCompletedModules([])
    localStorage.removeItem('tokunlocked_user')
    localStorage.removeItem('tokunlocked_name')
    localStorage.removeItem('tokunlocked_completed')
  }

  const hasAccess = (productId: string) => {
    // ACESSO LIBERADO - sempre retorna true
    return true
  }

  const accessProduct = (productId: string) => {
    setCurrentView(productId as 'main' | 'scripts' | 'automation')
  }

  const calculateProgress = () => {
    // ACESSO TOTAL - sempre 100%
    return 100
  }

  const closeOnboarding = () => {
    setShowOnboarding(false)
    localStorage.setItem('tokunlocked_onboarding', 'true')
  }

  // Renderizar conteúdo do produto
  const renderProductContent = () => {
    switch (currentView) {
      case 'main':
        return <TikTokGuideContent hasAccess={true} />
      case 'scripts':
        return <ViralScriptsContent hasAccess={true} />
      case 'automation':
        return <AIAutomationContent hasAccess={true} />
      case 'ai-assistant':
        return <AIAssistant />
      default:
        return null
    }
  }

  // Tela de Login/Registro - APENAS BANNER DE CHECKOUT
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" style={{ background: '#0F0F2E' }}>
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5F30FF]/20 via-transparent to-[#E7347D]/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#5F30FF]/10 via-transparent to-[#E7347D]/10"></div>
        
        {/* Language Selector - Top Right */}
        <div className="absolute top-6 right-6 z-20">
          <LanguageSelector />
        </div>

        {/* Container centralizado */}
        <div className="w-full max-w-2xl space-y-6 relative z-10">
          {/* Logo TikTok Unlocked */}
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#5F30FF] via-[#E7347D] to-[#5F30FF] mb-3 tracking-tight">
              TikTok Unlocked
            </h1>
            <p className="text-[#C3BFFF] text-lg md:text-xl font-medium">
              Unlock Your TikTok Shop Success
            </p>
          </div>

          {/* Banner "Limited Offer" - ÚNICO ELEMENTO VISÍVEL */}
          <a 
            href="https://pay.kiwify.com.br/1lOLsVs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <Card className="bg-gradient-to-r from-[#E7347D] via-[#5F30FF] to-[#E7347D] border-none backdrop-blur-xl overflow-hidden relative cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              
              <CardContent className="p-8 md:p-12 relative z-10">
                <div className="flex flex-col items-center justify-center gap-6 text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                      {t.login.checkoutBanner.badge}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                      <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                      <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                      <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                      <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    {t.login.checkoutBanner.title}
                  </h3>
                  <p className="text-white/90 text-lg md:text-xl max-w-xl">
                    {t.login.checkoutBanner.subtitle}
                  </p>
                  <Button 
                    className="bg-white text-[#5F30FF] hover:bg-white/90 font-bold text-xl px-10 py-7 rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-300 w-full md:w-auto"
                  >
                    {t.login.checkoutBanner.button}
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </a>
        </div>
      </div>
    )
  }

  // Dashboard Principal ou Conteúdo do Produto
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: '#0F0F2E' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5F30FF]/10 via-transparent to-[#E7347D]/10"></div>
      
      {/* Onboarding Modal - 3 Steps */}
      {showOnboarding && (
        <Onboarding onComplete={closeOnboarding} />
      )}
      
      {/* Support Widget */}
      <SupportWidget />
      
      {/* Onboarding Message (Old - Kept for compatibility) */}
      {false && showOnboarding && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-2xl w-full mx-4">
          <Card className="bg-gradient-to-r from-[#5F30FF] to-[#E7347D] border-none shadow-2xl">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-white text-sm leading-relaxed">
                    {t.login.onboarding}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeOnboarding}
                  className="text-white hover:bg-white/20 ml-4"
                >
                  ✕
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      
      {/* Header */}
      <header className="relative z-10 border-b border-[#5F30FF]/20 bg-[#1A1A3E]/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              {currentView !== 'dashboard' && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentView('dashboard')}
                  className="text-[#C3BFFF] hover:text-white hover:bg-[#5F30FF]/20 mr-2 rounded-xl"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t.header.back}
                </Button>
              )}
              <div className="w-12 h-12 bg-gradient-to-r from-[#5F30FF] to-[#E7347D] rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-lg font-bold text-white">TU</div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  TokUnlocked
                </h1>
                <p className="text-xs text-[#C3BFFF]">{t.header.members}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <LanguageSelector />
              <div className="hidden sm:block">
                <Badge variant="secondary" className="bg-[#5F30FF]/20 text-[#C3BFFF] px-3 py-1 rounded-full border border-[#5F30FF]/30">
                  {userEmail}
                </Badge>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-[#C3BFFF] hover:text-white hover:bg-[#5F30FF]/20 rounded-xl"
              >
                <LogOut className="w-4 h-4 mr-2" />
                {t.header.logout}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {currentView === 'dashboard' ? (
          <>
            {/* Checkout Banner - NOVO */}
            <div className="mb-8">
              <a 
                href="https://pay.kiwify.com.br/1lOLsVs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="bg-gradient-to-r from-[#E7347D] via-[#5F30FF] to-[#E7347D] border-none backdrop-blur-xl overflow-hidden relative cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                          <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                            {t.dashboard.checkoutBanner.badge}
                          </Badge>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                          </div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {t.dashboard.checkoutBanner.title}
                        </h3>
                        <p className="text-white/90 text-base md:text-lg">
                          {t.dashboard.checkoutBanner.subtitle}
                        </p>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <Button 
                          className="bg-white text-[#5F30FF] hover:bg-white/90 font-bold text-lg px-8 py-6 rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-300"
                        >
                          {t.dashboard.checkoutBanner.button}
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>

            {/* Welcome Section */}
            <div className="mb-12">
              <Card className="bg-gradient-to-r from-[#5F30FF]/20 to-[#E7347D]/20 border-[#5F30FF]/30 backdrop-blur-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {t.dashboard.welcome.replace('{{name}}', userName)}
                  </h2>
                  <p className="text-[#C3BFFF] mb-6">
                    {t.dashboard.subtitle}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#C3BFFF]">
                        {t.dashboard.progress.replace('{{progress}}', calculateProgress().toString())}
                      </span>
                    </div>
                    <div className="w-full bg-[#0F0F2E]/50 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#5F30FF] to-[#E7347D] rounded-full transition-all duration-1000"
                        style={{ width: `${calculateProgress()}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Box */}
            <div className="mb-12">
              <Card className="bg-[#E7347D]/10 border-[#E7347D]/30 backdrop-blur-xl">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <p className="text-white font-medium">
                      {t.dashboard.cta}
                    </p>
                    <Button
                      onClick={() => accessProduct('main')}
                      className="bg-gradient-to-r from-[#E7347D] to-[#5F30FF] hover:from-[#E7347D]/90 hover:to-[#5F30FF]/90 text-white font-semibold rounded-xl"
                    >
                      {t.dashboard.ctaButton}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Products Grid */}
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {PRODUCTS.map((product) => {
                  const IconComponent = product.icon

                  return (
                    <Card 
                      key={product.id} 
                      className="bg-[#1A1A3E]/50 border-[#5F30FF]/30 backdrop-blur-xl rounded-2xl overflow-hidden group hover:border-[#5F30FF]/50"
                    >
                      <CardHeader className="pb-4 p-0">
                        <div className="relative overflow-hidden">
                          <img 
                            src={product.coverImage} 
                            alt={product.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F2E]/80 via-transparent to-transparent"></div>
                          <div className="absolute top-4 left-4">
                            <Badge 
                              variant="secondary" 
                              className="bg-[#0F0F2E]/70 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm"
                            >
                              {product.type}
                            </Badge>
                          </div>
                          <div className="absolute top-4 right-4">
                            <div className="w-10 h-10 bg-[#0F0F2E]/70 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <Unlock className="w-5 h-5 text-green-400" />
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4 p-6">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-[#5F30FF] to-[#E7347D] rounded-xl flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-lg text-white mb-2 line-clamp-2">
                              {product.title}
                            </CardTitle>
                            <CardDescription className="text-[#C3BFFF] text-sm line-clamp-2">
                              {product.description}
                            </CardDescription>
                          </div>
                        </div>

                        <Button 
                          className="w-full h-11 bg-gradient-to-r from-[#5F30FF] to-[#E7347D] hover:from-[#5F30FF]/90 hover:to-[#E7347D]/90 text-white font-semibold rounded-xl"
                          onClick={() => accessProduct(product.id)}
                        >
                          <Play className="w-4 h-4 mr-2" />
                          {t.product.access}
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>



            {/* Daily Missions - NEW */}
            <div className="mb-12">
              <DailyMissions />
            </div>

            {/* Metrics Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card className="bg-[#1A1A3E]/30 border-[#5F30FF]/30 backdrop-blur-xl rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    3
                  </div>
                  <div className="text-sm text-[#C3BFFF] font-medium">
                    {t.dashboard.unlockedCount.replace('{{count}}', '3')}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-[#1A1A3E]/30 border-[#5F30FF]/30 backdrop-blur-xl rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold text-white mb-2">
                    2
                  </div>
                  <div className="text-sm text-[#C3BFFF] font-medium">
                    {t.dashboard.opportunities}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-[#1A1A3E]/30 border-[#5F30FF]/30 backdrop-blur-xl rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#5F30FF] to-[#E7347D] bg-clip-text text-transparent mb-2">
                    100%
                  </div>
                  <div className="text-sm text-[#C3BFFF] font-medium">
                    {t.dashboard.progressLevel.replace('{{progress}}', '100')}
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        ) : (
          renderProductContent()
        )}
      </main>
    </div>
  )
}
