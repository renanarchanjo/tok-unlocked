"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'pt' | 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Traduções completas
const translations = {
  pt: {
    // Login
    'login.title': 'TokUnlocked',
    'login.subtitle': 'Área exclusiva para clientes de produtos digitais',
    'login.email': 'Endereço de Email',
    'login.placeholder': 'Digite seu email de compra',
    'login.button': 'Acessar Dashboard',
    'login.verifying': 'Verificando...',
    'login.demo': 'Conta demo:',
    'login.owner': 'Acesso proprietário:',
    'login.error': 'Email não encontrado em nossa base de clientes. Verifique se você já comprou algum produto.',

    // Header
    'header.back': 'Voltar',
    'header.members': 'Área de Membros',
    'header.logout': 'Sair',

    // Dashboard
    'dashboard.welcome': 'Bem-vindo ao Seu Dashboard',
    'dashboard.subtitle': 'Acesse seus produtos digitais adquiridos e conteúdo exclusivo para fazer crescer seu negócio no TikTok Shop',
    'dashboard.products': 'Produtos Possuídos',
    'dashboard.available': 'Disponível para Compra',
    'dashboard.access': 'Taxa de Acesso',

    // Products
    'product.main.title': 'Guia de Renda do TikTok Shop',
    'product.main.description': 'Guia completo para ganhar dinheiro através do TikTok Shop com estratégias comprovadas e dicas exclusivas.',
    'product.main.type': 'Produto Principal',

    'product.scripts.title': 'Scripts Virais & Templates Prontos',
    'product.scripts.description': 'Coleção de scripts de vídeo de alta conversão e templates que geraram milhões de visualizações.',
    'product.scripts.type': 'Oferta Adicional #1',

    'product.automation.title': 'Kit de Automação IA',
    'product.automation.description': 'Ferramentas avançadas de IA e fluxos de automação para escalar seu negócio TikTok Shop sem esforço.',
    'product.automation.type': 'Oferta Adicional #2',

    'product.access': 'Acessar Conteúdo',
    'product.locked': 'Disponível apenas para compradores deste pacote',
    'product.purchase': 'Comprar por',

    // Language selector
    'language.select': 'Idioma',
    'language.pt': 'Português',
    'language.en': 'English',
    'language.es': 'Español',

    // Content modules
    'module.introduction': 'Introdução – Como funciona o TikTok Shop',
    'module.starting': 'Começando do Zero – Construa sua base mesmo sem seguidores',
    'module.algorithm': 'Aquecimento da Conta & Algoritmo – Como ativar o alcance orgânico',
    'module.viral': 'Criação de Vídeos Virais (ferramentas IA) – Use OpusClip e ChatGPT para edições rápidas',
    'module.strategy': 'Estratégia de Produtos & Posicionamento – Escolhendo o que vende',
    'module.plan': 'Plano de 30 Dias para Sua Primeira Venda – Ações diárias passo a passo',
    'module.challenges': 'Superando Desafios – Lidando com dias lentos ou sem vendas',
    'module.bonus': 'Bônus: CTAs, ganchos, legendas e prompts prontos (PT/EN/ES)',

    // Scripts content
    'scripts.hooks': 'Ganchos',
    'scripts.captions': 'Legendas',
    'scripts.scripts': 'Scripts',
    'scripts.copy': 'Copiar Texto',
    'scripts.copied': 'Copiado!',
    'scripts.performance': 'Performance',
    'scripts.high': 'Alta',
    'scripts.medium': 'Média',
    'scripts.low': 'Baixa',

    // Automation content
    'automation.tools': 'Ferramentas',
    'automation.prompts': 'Prompts',
    'automation.posting': 'Automação de Posts',
    'automation.checklist': 'Checklist',
    'automation.tutorial': 'Tutorial',
    'automation.features': 'Recursos',
  },

  en: {
    // Login
    'login.title': 'TokUnlocked',
    'login.subtitle': 'Members-only area for digital product customers',
    'login.email': 'Email Address',
    'login.placeholder': 'Enter your purchase email',
    'login.button': 'Access Dashboard',
    'login.verifying': 'Verifying...',
    'login.demo': 'Demo account:',
    'login.owner': 'Owner access:',
    'login.error': 'Email not found in our customer database. Please verify that you have purchased a product.',

    // Header
    'header.back': 'Back',
    'header.members': 'Members Area',
    'header.logout': 'Logout',

    // Dashboard
    'dashboard.welcome': 'Welcome to Your Dashboard',
    'dashboard.subtitle': 'Access your purchased digital products and exclusive content to grow your TikTok Shop business',
    'dashboard.products': 'Products Owned',
    'dashboard.available': 'Available to Purchase',
    'dashboard.access': 'Access Rate',

    // Products
    'product.main.title': 'TikTok Shop Income Guide',
    'product.main.description': 'Complete guide to earning money through TikTok Shop with proven strategies and insider tips.',
    'product.main.type': 'Main Product',

    'product.scripts.title': 'Viral Video Scripts & Ready-to-Use Templates',
    'product.scripts.description': 'Collection of high-converting video scripts and templates that have generated millions of views.',
    'product.scripts.type': 'Order Bump #1',

    'product.automation.title': 'AI Automation Kit',
    'product.automation.description': 'Advanced AI tools and automation workflows to scale your TikTok Shop business effortlessly.',
    'product.automation.type': 'Order Bump #2',

    'product.access': 'Access Content',
    'product.locked': 'Available only for buyers of this pack',
    'product.purchase': 'Purchase for',

    // Language selector
    'language.select': 'Language',
    'language.pt': 'Português',
    'language.en': 'English',
    'language.es': 'Español',

    // Content modules
    'module.introduction': 'Introduction – How TikTok Shop works',
    'module.starting': 'Starting from Zero – Build your base even with no followers',
    'module.algorithm': 'Account Warm-up & Algorithm – How to trigger organic reach',
    'module.viral': 'Viral Video Creation (AI tools) – Use OpusClip and ChatGPT for fast edits',
    'module.strategy': 'Product Strategy & Positioning – Choosing what sells',
    'module.plan': '30-Day Plan to Your First Sale – Step-by-step daily actions',
    'module.challenges': 'Overcoming Challenges – Handling slow days or no sales',
    'module.bonus': 'Bonus: Ready-to-use CTAs, hooks, captions, and prompts (PT/EN/ES)',

    // Scripts content
    'scripts.hooks': 'Hooks',
    'scripts.captions': 'Captions',
    'scripts.scripts': 'Scripts',
    'scripts.copy': 'Copy Text',
    'scripts.copied': 'Copied!',
    'scripts.performance': 'Performance',
    'scripts.high': 'High',
    'scripts.medium': 'Medium',
    'scripts.low': 'Low',

    // Automation content
    'automation.tools': 'Tools',
    'automation.prompts': 'Prompts',
    'automation.posting': 'Posting Automation',
    'automation.checklist': 'Checklist',
    'automation.tutorial': 'Tutorial',
    'automation.features': 'Features',
  },

  es: {
    // Login
    'login.title': 'TokUnlocked',
    'login.subtitle': 'Área exclusiva para clientes de productos digitales',
    'login.email': 'Dirección de Email',
    'login.placeholder': 'Ingresa tu email de compra',
    'login.button': 'Acceder al Dashboard',
    'login.verifying': 'Verificando...',
    'login.demo': 'Cuenta demo:',
    'login.owner': 'Acceso propietario:',
    'login.error': 'Email no encontrado en nuestra base de clientes. Verifica que hayas comprado algún producto.',

    // Header
    'header.back': 'Volver',
    'header.members': 'Área de Miembros',
    'header.logout': 'Cerrar Sesión',

    // Dashboard
    'dashboard.welcome': 'Bienvenido a Tu Dashboard',
    'dashboard.subtitle': 'Accede a tus productos digitales comprados y contenido exclusivo para hacer crecer tu negocio en TikTok Shop',
    'dashboard.products': 'Productos Poseídos',
    'dashboard.available': 'Disponible para Compra',
    'dashboard.access': 'Tasa de Acceso',

    // Products
    'product.main.title': 'Guía de Ingresos TikTok Shop',
    'product.main.description': 'Guía completa para ganar dinero a través de TikTok Shop con estrategias probadas y consejos exclusivos.',
    'product.main.type': 'Producto Principal',

    'product.scripts.title': 'Scripts Virales y Plantillas Listas',
    'product.scripts.description': 'Colección de scripts de video de alta conversión y plantillas que han generado millones de visualizaciones.',
    'product.scripts.type': 'Oferta Adicional #1',

    'product.automation.title': 'Kit de Automatización IA',
    'product.automation.description': 'Herramientas avanzadas de IA y flujos de automatización para escalar tu negocio TikTok Shop sin esfuerzo.',
    'product.automation.type': 'Oferta Adicional #2',

    'product.access': 'Acceder al Contenido',
    'product.locked': 'Disponible solo para compradores de este paquete',
    'product.purchase': 'Comprar por',

    // Language selector
    'language.select': 'Idioma',
    'language.pt': 'Português',
    'language.en': 'English',
    'language.es': 'Español',

    // Content modules
    'module.introduction': 'Introducción – Cómo funciona TikTok Shop',
    'module.starting': 'Empezando desde Cero – Construye tu base sin seguidores',
    'module.algorithm': 'Calentamiento de Cuenta y Algoritmo – Cómo activar el alcance orgánico',
    'module.viral': 'Creación de Videos Virales (herramientas IA) – Usa OpusClip y ChatGPT para ediciones rápidas',
    'module.strategy': 'Estrategia de Productos y Posicionamiento – Eligiendo qué vende',
    'module.plan': 'Plan de 30 Días para Tu Primera Venta – Acciones diarias paso a paso',
    'module.challenges': 'Superando Desafíos – Manejando días lentos o sin ventas',
    'module.bonus': 'Bonus: CTAs, ganchos, subtítulos y prompts listos (PT/EN/ES)',

    // Scripts content
    'scripts.hooks': 'Ganchos',
    'scripts.captions': 'Subtítulos',
    'scripts.scripts': 'Scripts',
    'scripts.copy': 'Copiar Texto',
    'scripts.copied': '¡Copiado!',
    'scripts.performance': 'Rendimiento',
    'scripts.high': 'Alto',
    'scripts.medium': 'Medio',
    'scripts.low': 'Bajo',

    // Automation content
    'automation.tools': 'Herramientas',
    'automation.prompts': 'Prompts',
    'automation.posting': 'Automatización de Posts',
    'automation.checklist': 'Lista de Verificación',
    'automation.tutorial': 'Tutorial',
    'automation.features': 'Características',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  // Carregar idioma salvo do localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('tokunlocked_language') as Language
    if (savedLanguage && ['pt', 'en', 'es'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Salvar idioma no localStorage quando mudar
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('tokunlocked_language', lang)
  }

  // Função de tradução
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}