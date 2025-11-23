// Multi-language translation system for TokUnlocked
// Currently supporting: English (US), English (UK), Portuguese (BR)

export type Language = 'en-US' | 'en-GB' | 'pt-BR'

export interface Translations {
  // Onboarding
  onboarding: {
    step1: {
      title: string
      description: string
    }
    step2: {
      title: string
      description: string
    }
    step3: {
      title: string
      description: string
    }
    buttons: {
      next: string
      back: string
      skip: string
      start: string
    }
  }
  
  // Progress Tracker
  progress: {
    title: string
    chaptersCompleted: string
    moduleComplete: string
    motivationalMessages: string[]
  }
  
  // Daily Missions
  missions: {
    title: string
    subtitle: string
    streak: string
    postVideo: {
      title: string
      description: string
    }
    useScript: {
      title: string
      description: string
    }
    setupAutomation: {
      title: string
      description: string
    }
    allComplete: string
    keepGoing: string
    points: string
    markDone: string
    done: string
  }
  
  // Support
  support: {
    needHelp: string
    whatsapp: string
    email: string
  }
  
  // Common
  common: {
    loading: string
    error: string
    success: string
    cancel: string
    confirm: string
    save: string
  }
}

export const translations: Record<Language, Translations> = {
  'en-US': {
    onboarding: {
      step1: {
        title: 'Welcome to TokUnlocked',
        description: 'Your complete toolkit to turn TikTok content into consistent income. Everything you need is already unlocked and ready to use.'
      },
      step2: {
        title: 'What You Get',
        description: 'Access to proven TikTok Shop strategies, 120+ viral video scripts, AI automation tools, and your personal AI assistant — all in one place.'
      },
      step3: {
        title: 'Ready to Start?',
        description: 'Step 1: Explore the TikTok Shop Income Guide. Follow the roadmap, complete daily missions, and watch your progress grow. Let\'s go!'
      },
      buttons: {
        next: 'Next',
        back: 'Back',
        skip: 'Skip',
        start: 'Let\'s Go!'
      }
    },
    progress: {
      title: 'Progress',
      chaptersCompleted: 'chapters completed',
      moduleComplete: 'Module Complete! You\'re a champion! Ready for the next one?',
      motivationalMessages: [
        '🎉 Amazing progress! You\'re crushing it!',
        '💪 Keep going! Success is just around the corner!',
        '🚀 You\'re on fire! This momentum is unstoppable!',
        '⭐ Incredible work! You\'re making it happen!',
        '🎯 Yes! Another step closer to your goals!',
        '✨ Fantastic! Your dedication is paying off!',
        '🏆 Outstanding! You\'re a TikTok Shop champion!',
        '💎 Brilliant! Your future is looking bright!'
      ]
    },
    missions: {
      title: 'Daily Missions',
      subtitle: 'Optional challenges to boost your progress',
      streak: 'day streak',
      postVideo: {
        title: 'Post 1 Video Today',
        description: 'Share your TikTok content and reach your audience'
      },
      useScript: {
        title: 'Use 1 Script',
        description: 'Apply a viral script from your template library'
      },
      setupAutomation: {
        title: 'Configure 1 Automation',
        description: 'Set up an AI automation to save time'
      },
      allComplete: '🎉 All missions completed!',
      keepGoing: 'Keep going!',
      points: 'points',
      markDone: 'Mark',
      done: 'Done'
    },
    support: {
      needHelp: 'Need Help?',
      whatsapp: 'WhatsApp Support',
      email: 'Email Support'
    },
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      cancel: 'Cancel',
      confirm: 'Confirm',
      save: 'Save'
    }
  },
  
  'en-GB': {
    onboarding: {
      step1: {
        title: 'Welcome to TokUnlocked',
        description: 'Your complete toolkit to turn TikTok content into consistent income. Everything you need is already unlocked and ready to use.'
      },
      step2: {
        title: 'What You Get',
        description: 'Access to proven TikTok Shop strategies, 120+ viral video scripts, AI automation tools, and your personal AI assistant — all in one place.'
      },
      step3: {
        title: 'Ready to Start?',
        description: 'Step 1: Explore the TikTok Shop Income Guide. Follow the roadmap, complete daily missions, and watch your progress grow. Let\'s go!'
      },
      buttons: {
        next: 'Next',
        back: 'Back',
        skip: 'Skip',
        start: 'Let\'s Go!'
      }
    },
    progress: {
      title: 'Progress',
      chaptersCompleted: 'chapters completed',
      moduleComplete: 'Module Complete! You\'re a champion! Ready for the next one?',
      motivationalMessages: [
        '🎉 Amazing progress! You\'re crushing it!',
        '💪 Keep going! Success is just around the corner!',
        '🚀 You\'re on fire! This momentum is unstoppable!',
        '⭐ Incredible work! You\'re making it happen!',
        '🎯 Yes! Another step closer to your goals!',
        '✨ Fantastic! Your dedication is paying off!',
        '🏆 Outstanding! You\'re a TikTok Shop champion!',
        '💎 Brilliant! Your future is looking bright!'
      ]
    },
    missions: {
      title: 'Daily Missions',
      subtitle: 'Optional challenges to boost your progress',
      streak: 'day streak',
      postVideo: {
        title: 'Post 1 Video Today',
        description: 'Share your TikTok content and reach your audience'
      },
      useScript: {
        title: 'Use 1 Script',
        description: 'Apply a viral script from your template library'
      },
      setupAutomation: {
        title: 'Configure 1 Automation',
        description: 'Set up an AI automation to save time'
      },
      allComplete: '🎉 All missions completed!',
      keepGoing: 'Keep going!',
      points: 'points',
      markDone: 'Mark',
      done: 'Done'
    },
    support: {
      needHelp: 'Need Help?',
      whatsapp: 'WhatsApp Support',
      email: 'Email Support'
    },
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      cancel: 'Cancel',
      confirm: 'Confirm',
      save: 'Save'
    }
  },
  
  'pt-BR': {
    onboarding: {
      step1: {
        title: 'Bem-vindo ao TokUnlocked',
        description: 'Seu kit completo para transformar conteúdo do TikTok em renda consistente. Tudo que você precisa já está desbloqueado e pronto para usar.'
      },
      step2: {
        title: 'O Que Você Recebe',
        description: 'Acesso a estratégias comprovadas do TikTok Shop, 120+ scripts virais, ferramentas de automação IA e seu assistente pessoal de IA — tudo em um só lugar.'
      },
      step3: {
        title: 'Pronto Para Começar?',
        description: 'Passo 1: Explore o Guia de Renda TikTok Shop. Siga o roteiro, complete missões diárias e veja seu progresso crescer. Vamos lá!'
      },
      buttons: {
        next: 'Próximo',
        back: 'Voltar',
        skip: 'Pular',
        start: 'Vamos Lá!'
      }
    },
    progress: {
      title: 'Progresso',
      chaptersCompleted: 'capítulos concluídos',
      moduleComplete: 'Módulo Completo! Você é um campeão! Pronto para o próximo?',
      motivationalMessages: [
        '🎉 Progresso incrível! Você está arrasando!',
        '💪 Continue! O sucesso está logo ali!',
        '🚀 Você está pegando fogo! Esse ritmo é imparável!',
        '⭐ Trabalho incrível! Você está fazendo acontecer!',
        '🎯 Isso! Mais um passo em direção aos seus objetivos!',
        '✨ Fantástico! Sua dedicação está valendo a pena!',
        '🏆 Excepcional! Você é um campeão do TikTok Shop!',
        '💎 Brilhante! Seu futuro está brilhante!'
      ]
    },
    missions: {
      title: 'Missões Diárias',
      subtitle: 'Desafios opcionais para impulsionar seu progresso',
      streak: 'dias seguidos',
      postVideo: {
        title: 'Poste 1 Vídeo Hoje',
        description: 'Compartilhe seu conteúdo do TikTok e alcance sua audiência'
      },
      useScript: {
        title: 'Use 1 Script',
        description: 'Aplique um script viral da sua biblioteca de templates'
      },
      setupAutomation: {
        title: 'Configure 1 Automação',
        description: 'Configure uma automação IA para economizar tempo'
      },
      allComplete: '🎉 Todas as missões concluídas!',
      keepGoing: 'Continue assim!',
      points: 'pontos',
      markDone: 'Marcar',
      done: 'Feito'
    },
    support: {
      needHelp: 'Precisa de Ajuda?',
      whatsapp: 'Suporte WhatsApp',
      email: 'Suporte Email'
    },
    common: {
      loading: 'Carregando...',
      error: 'Erro',
      success: 'Sucesso',
      cancel: 'Cancelar',
      confirm: 'Confirmar',
      save: 'Salvar'
    }
  }
}

export function getTranslation(language: Language): Translations {
  return translations[language] || translations['en-US']
}
