// Dados dos produtos e simulação de compras
export const PRODUCTS = [
  {
    id: 'main',
    title: 'TikTok Shop Income Guide',
    description: 'Complete guide to earning money through TikTok Shop with proven strategies and insider tips.',
    type: 'Main Product',
    icon: 'Play' as const,
    coverImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop&crop=center',
    price: '$97'
  },
  {
    id: 'scripts',
    title: 'Viral Video Scripts & Ready-to-Use Templates',
    description: 'Collection of high-converting video scripts and templates that have generated millions of views.',
    type: 'Order Bump #1',
    icon: 'FileText' as const,
    coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=center',
    price: '$47'
  },
  {
    id: 'automation',
    title: 'AI Automation Kit',
    description: 'Advanced AI tools and automation workflows to scale your TikTok Shop business effortlessly.',
    type: 'Order Bump #2',
    icon: 'Bot' as const,
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center',
    price: '$67'
  }
]

// Simulação de base de dados de compras (em produção, viria do Cartpanda)
export const PURCHASE_DATABASE = {
  'customer1@email.com': ['main', 'scripts'],
  'customer2@email.com': ['main'],
  'customer3@email.com': ['main', 'scripts', 'automation'],
  'demo@tokunlocked.com': ['main', 'scripts', 'automation'] // Demo account
}

// Conteúdo do produto principal
export const MAIN_PRODUCT_MODULES = [
  {
    id: 1,
    title: 'Introduction – How TikTok Shop works',
    description: 'Understanding the fundamentals of TikTok Shop and its monetization potential',
    steps: [
      'Overview of TikTok Shop ecosystem and opportunities',
      'Understanding commission structures and payment systems',
      'Setting up your TikTok Shop seller account',
      'Navigating the TikTok Shop dashboard and tools',
      'Legal requirements and compliance basics'
    ],
    duration: '45 min',
    difficulty: 'Beginner'
  },
  {
    id: 2,
    title: 'Starting from Zero – Build your base even with no followers',
    description: 'Proven strategies to build authority and audience from scratch',
    steps: [
      'Creating a compelling TikTok profile that converts',
      'Content pillars for zero-follower accounts',
      'Leveraging trending hashtags and sounds strategically',
      'Cross-platform promotion techniques',
      'Building credibility without a large following'
    ],
    duration: '60 min',
    difficulty: 'Beginner'
  },
  {
    id: 3,
    title: 'Account Warm-up & Algorithm – How to trigger organic reach',
    description: 'Master the TikTok algorithm to maximize your content visibility',
    steps: [
      'Understanding TikTok\'s recommendation algorithm',
      'Account warm-up strategies for new profiles',
      'Optimal posting times and frequency',
      'Engagement tactics that boost algorithmic reach',
      'Avoiding shadowbans and algorithm penalties'
    ],
    duration: '75 min',
    difficulty: 'Intermediate'
  },
  {
    id: 4,
    title: 'Viral Video Creation (AI tools) – Use OpusClip and ChatGPT for fast edits',
    description: 'Leverage AI tools to create engaging content efficiently',
    steps: [
      'Setting up OpusClip for automated video editing',
      'ChatGPT prompts for viral video scripts',
      'AI-powered thumbnail and caption generation',
      'Batch content creation workflows',
      'Quality control and human touch optimization'
    ],
    duration: '90 min',
    difficulty: 'Intermediate'
  },
  {
    id: 5,
    title: 'Product Strategy & Positioning – Choosing what sells',
    description: 'Strategic product selection and positioning for maximum conversions',
    steps: [
      'Market research techniques for trending products',
      'Analyzing competitor strategies and gaps',
      'Product positioning and unique value propositions',
      'Pricing strategies for different market segments',
      'Building product funnels and upsells'
    ],
    duration: '85 min',
    difficulty: 'Advanced'
  },
  {
    id: 6,
    title: '30-Day Plan to Your First Sale – Step-by-step daily actions',
    description: 'Detailed roadmap with daily tasks to achieve your first sale',
    steps: [
      'Week 1: Foundation setup and content planning',
      'Week 2: Content creation and community building',
      'Week 3: Product integration and sales optimization',
      'Week 4: Scaling and performance analysis',
      'Daily checklists and milestone tracking'
    ],
    duration: '120 min',
    difficulty: 'Beginner'
  },
  {
    id: 7,
    title: 'Overcoming Challenges – Handling slow days or no sales',
    description: 'Troubleshooting common issues and maintaining momentum',
    steps: [
      'Diagnosing low performance and identifying bottlenecks',
      'Pivot strategies when content isn\'t performing',
      'Mental health and motivation during slow periods',
      'A/B testing different approaches systematically',
      'Building resilience and long-term thinking'
    ],
    duration: '70 min',
    difficulty: 'Intermediate'
  },
  {
    id: 8,
    title: 'Bonus: Ready-to-use CTAs, hooks, captions, and prompts (PT/EN/ES)',
    description: 'Complete library of proven copy templates in multiple languages',
    steps: [
      '50+ high-converting call-to-action templates',
      '100+ attention-grabbing hooks and openers',
      'Caption templates for different content types',
      'ChatGPT prompts for content ideation',
      'Translation and localization best practices'
    ],
    duration: '45 min',
    difficulty: 'Beginner'
  }
]

// Conteúdo do produto Scripts & Templates
export const SCRIPTS_CONTENT = {
  hooks: [
    {
      id: 1,
      category: 'Attention Grabbers',
      text: 'Stop scrolling if you want to make $1000+ monthly with TikTok Shop',
      language: 'EN',
      performance: 'High'
    },
    {
      id: 2,
      category: 'Problem/Solution',
      text: 'Tired of working 9-5? Here\'s how I escaped with TikTok Shop',
      language: 'EN',
      performance: 'High'
    },
    {
      id: 3,
      category: 'Curiosity',
      text: 'This $5 product made me $10,000 last month (here\'s how)',
      language: 'EN',
      performance: 'Medium'
    },
    {
      id: 4,
      category: 'Social Proof',
      text: 'My first TikTok Shop sale happened in 3 days (zero followers)',
      language: 'EN',
      performance: 'High'
    },
    {
      id: 5,
      category: 'Urgency',
      text: 'TikTok Shop is changing in 2024 - start now or miss out',
      language: 'EN',
      performance: 'Medium'
    }
  ],
  captions: [
    {
      id: 1,
      category: 'Product Demo',
      text: 'This product changed my life and here\'s why it will change yours too 👇\n\n✨ [Product benefit 1]\n✨ [Product benefit 2]\n✨ [Product benefit 3]\n\nLink in bio to get yours! #TikTokShop #ProductReview',
      language: 'EN',
      performance: 'High'
    },
    {
      id: 2,
      category: 'Tutorial',
      text: 'How to use [Product Name] like a pro 🔥\n\nStep 1: [Action]\nStep 2: [Action]\nStep 3: [Action]\n\nResults: [Outcome]\n\nTry it yourself! 👆 #Tutorial #TikTokShop',
      language: 'EN',
      performance: 'High'
    },
    {
      id: 3,
      category: 'Before/After',
      text: 'Before vs After using this game-changing product 😱\n\nBefore: [Problem]\nAfter: [Solution]\n\nWorth every penny! Get yours now 👆\n\n#Transformation #TikTokShop #ProductReview',
      language: 'EN',
      performance: 'Medium'
    }
  ],
  scripts: [
    {
      id: 1,
      category: '15s Scripts',
      title: 'Quick Product Demo',
      script: 'Hook: "This $10 product saved me $1000"\n\nShow product in action (5-7 seconds)\n\nResults/benefits (3-5 seconds)\n\nCTA: "Link in bio!" (2 seconds)',
      duration: '15s',
      performance: 'High'
    },
    {
      id: 2,
      category: '30s Scripts',
      title: 'Problem-Solution Format',
      script: 'Hook: "Struggling with [problem]?" (3s)\n\nAgitate the problem (8s)\n\nIntroduce solution/product (10s)\n\nShow results/benefits (6s)\n\nCTA: "Get yours now!" (3s)',
      duration: '30s',
      performance: 'High'
    },
    {
      id: 3,
      category: '60s Scripts',
      title: 'Complete Tutorial',
      script: 'Hook: "Here\'s how I [achieved result]" (5s)\n\nBackground/context (10s)\n\nStep-by-step process (30s)\n\nResults and proof (10s)\n\nCTA and next steps (5s)',
      duration: '60s',
      performance: 'Medium'
    }
  ]
}

// Conteúdo do produto Automation Kit
export const AUTOMATION_CONTENT = {
  tools: [
    {
      id: 1,
      name: 'OpusClip',
      category: 'Video Editing',
      description: 'AI-powered video editing for viral short-form content',
      tutorial: 'Complete setup and optimization guide for TikTok Shop content',
      features: ['Auto-cropping', 'Subtitle generation', 'Viral moment detection', 'Batch processing']
    },
    {
      id: 2,
      name: 'Submagic',
      category: 'Subtitles & Captions',
      description: 'Advanced subtitle generation with viral styling',
      tutorial: 'Creating engaging subtitles that boost retention',
      features: ['Auto-transcription', 'Viral subtitle styles', 'Emoji integration', 'Multi-language support']
    },
    {
      id: 3,
      name: 'ChatGPT',
      category: 'Content Creation',
      description: 'AI assistant for scripts, captions, and strategy',
      tutorial: 'Advanced prompting techniques for TikTok Shop content',
      features: ['Script generation', 'Caption writing', 'Hashtag research', 'Content planning']
    },
    {
      id: 4,
      name: 'Pika Labs',
      category: 'AI Video Generation',
      description: 'Text-to-video AI for creating engaging product demos',
      tutorial: 'Generating product videos without filming',
      features: ['Text-to-video', 'Product visualization', 'Scene generation', 'Style customization']
    }
  ],
  prompts: [
    {
      id: 1,
      category: 'Video Scripts',
      title: 'Viral Product Demo Script',
      prompt: 'Create a 30-second TikTok script for [PRODUCT NAME] that:\n- Starts with a scroll-stopping hook\n- Shows the problem it solves\n- Demonstrates the product in action\n- Ends with a strong call-to-action\n- Uses casual, conversational language\n- Includes trending phrases and slang',
      useCase: 'Product demonstrations and reviews'
    },
    {
      id: 2,
      category: 'Captions',
      title: 'Engaging Caption Generator',
      prompt: 'Write a TikTok caption for a video about [TOPIC] that:\n- Hooks viewers in the first line\n- Uses relevant emojis strategically\n- Includes 3-5 relevant hashtags\n- Encourages engagement (comments/shares)\n- Keeps it under 150 characters\n- Matches the tone: [CASUAL/PROFESSIONAL/FUNNY]',
      useCase: 'All video types and content pillars'
    },
    {
      id: 3,
      category: 'Content Ideas',
      title: 'Viral Content Brainstorm',
      prompt: 'Generate 10 viral TikTok video ideas for promoting [PRODUCT/NICHE] that:\n- Tap into current trends\n- Are easy to execute\n- Have high engagement potential\n- Include different content formats (tutorial, demo, story, etc.)\n- Consider seasonal relevance\n- Target [AUDIENCE DESCRIPTION]',
      useCase: 'Content planning and ideation'
    }
  ],
  automation: [
    {
      id: 1,
      title: 'Content Creation Workflow',
      description: 'Automated pipeline from idea to published video',
      steps: [
        'Generate content ideas with ChatGPT',
        'Create scripts using AI prompts',
        'Produce videos with Pika Labs or OpusClip',
        'Add subtitles with Submagic',
        'Schedule posting with automation tools'
      ],
      timesSaved: '5-8 hours per video'
    },
    {
      id: 2,
      title: 'Posting Schedule Automation',
      description: 'Automated posting and engagement tracking',
      steps: [
        'Set up posting calendar template',
        'Use scheduling tools for consistent posting',
        'Automate hashtag research and rotation',
        'Track performance metrics automatically',
        'Generate weekly performance reports'
      ],
      timesSaved: '10-15 hours per week'
    }
  ]
}