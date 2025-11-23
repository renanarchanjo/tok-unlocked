"use client"

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  Sparkles, 
  Send, 
  Loader2, 
  TrendingUp, 
  Video, 
  DollarSign, 
  Target,
  Copy,
  Check,
  RefreshCw,
  Lightbulb,
  Zap,
  MessageSquare
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const translations = {
  en: {
    title: 'AI Assistant',
    subtitle: 'Your TikTok Shop expert powered by AI',
    placeholder: 'Ask me anything about TikTok Shop, viral content, or sales strategies...',
    send: 'Send',
    thinking: 'Thinking...',
    quickPrompts: 'Quick Prompts',
    history: 'Recent Conversations',
    clear: 'Clear Chat',
    copy: 'Copy',
    copied: 'Copied!',
    regenerate: 'Regenerate',
    prompts: {
      viral: 'Give me 5 viral video ideas for TikTok Shop',
      script: 'Write a 30-second script to sell [product]',
      strategy: 'What\'s the best strategy to start on TikTok Shop?',
      hooks: 'Create 10 attention-grabbing hooks for my niche',
      trends: 'What are the current TikTok trends I should use?',
      optimize: 'How can I optimize my TikTok Shop profile?'
    },
    examples: {
      title: 'Try asking:',
      items: [
        'How do I find winning products for TikTok Shop?',
        'Create a content calendar for my TikTok Shop',
        'What are the best posting times for maximum engagement?',
        'How to handle negative comments professionally?'
      ]
    }
  },
  pt: {
    title: 'Assistente IA',
    subtitle: 'Seu especialista em TikTok Shop com IA',
    placeholder: 'Pergunte-me qualquer coisa sobre TikTok Shop, conteúdo viral ou estratégias de vendas...',
    send: 'Enviar',
    thinking: 'Pensando...',
    quickPrompts: 'Prompts Rápidos',
    history: 'Conversas Recentes',
    clear: 'Limpar Chat',
    copy: 'Copiar',
    copied: 'Copiado!',
    regenerate: 'Regenerar',
    prompts: {
      viral: 'Me dê 5 ideias de vídeos virais para TikTok Shop',
      script: 'Escreva um script de 30 segundos para vender [produto]',
      strategy: 'Qual a melhor estratégia para começar no TikTok Shop?',
      hooks: 'Crie 10 ganchos chamativos para meu nicho',
      trends: 'Quais são as tendências atuais do TikTok que devo usar?',
      optimize: 'Como posso otimizar meu perfil do TikTok Shop?'
    },
    examples: {
      title: 'Experimente perguntar:',
      items: [
        'Como encontro produtos vencedores para TikTok Shop?',
        'Crie um calendário de conteúdo para meu TikTok Shop',
        'Quais são os melhores horários para postar?',
        'Como lidar com comentários negativos profissionalmente?'
      ]
    }
  }
}

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function AIAssistant() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]
  
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Sistema de prompts especializados para TikTok Shop
  const SYSTEM_PROMPT = `You are an expert TikTok Shop consultant and viral content strategist. You help creators and entrepreneurs succeed on TikTok Shop by providing:

1. **Viral Content Strategies**: Proven frameworks for creating engaging TikTok videos that convert viewers into buyers
2. **Product Selection**: How to identify winning products and trending items
3. **Sales Psychology**: Persuasion techniques specific to short-form video content
4. **TikTok Algorithm**: Understanding and leveraging the TikTok algorithm for maximum reach
5. **Monetization**: Strategies to maximize earnings through TikTok Shop
6. **Content Creation**: Scripts, hooks, CTAs, and video structures that work
7. **Trend Analysis**: Current TikTok trends and how to adapt them for sales

Your responses should be:
- Actionable and specific (not generic advice)
- Focused on TikTok Shop and short-form video
- Include examples when possible
- Structured and easy to implement
- Optimized for beginners and intermediate creators

Always provide practical, step-by-step guidance that users can implement immediately.`

  const handleSendMessage = async (messageContent?: string) => {
    const content = messageContent || input.trim()
    if (!content || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      // Preparar contexto da conversa
      const conversationHistory = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }))

      const response = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...conversationHistory,
            { role: 'user', content }
          ],
          model: 'gpt-4o',
          temperature: 0.7,
          max_tokens: 1500
        })
      })

      if (!response.ok) {
        throw new Error('Failed to get AI response')
      }

      const data = await response.json()
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error:', error)
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: language === 'pt' 
          ? 'Desculpe, ocorreu um erro. Por favor, tente novamente.' 
          : 'Sorry, an error occurred. Please try again.',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickPrompt = (prompt: string) => {
    setInput(prompt)
    textareaRef.current?.focus()
  }

  const handleCopy = async (content: string, id: string) => {
    try {
      // Fallback para navegadores que bloqueiam clipboard API
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(content)
      } else {
        // Método alternativo usando textarea
        const textarea = document.createElement('textarea');
        textarea.value = content;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (err) {
      // Silenciosamente falha sem mostrar erro ao usuário
      console.warn('Clipboard operation failed:', err)
    }
  }

  const handleRegenerate = async () => {
    if (messages.length < 2) return
    
    const lastUserMessage = [...messages].reverse().find(m => m.role === 'user')
    if (!lastUserMessage) return

    // Remove última resposta do assistente
    setMessages(prev => prev.slice(0, -1))
    
    // Regenera resposta
    await handleSendMessage(lastUserMessage.content)
  }

  const handleClearChat = () => {
    setMessages([])
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickPrompts = [
    { icon: TrendingUp, text: t.prompts.viral, color: 'from-purple-500 to-pink-500' },
    { icon: Video, text: t.prompts.script, color: 'from-blue-500 to-cyan-500' },
    { icon: Target, text: t.prompts.strategy, color: 'from-orange-500 to-red-500' },
    { icon: Zap, text: t.prompts.hooks, color: 'from-green-500 to-emerald-500' },
    { icon: Lightbulb, text: t.prompts.trends, color: 'from-yellow-500 to-orange-500' },
    { icon: DollarSign, text: t.prompts.optimize, color: 'from-indigo-500 to-purple-500' }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-[#5F30FF]/20 to-[#E7347D]/20 border-[#5F30FF]/30 backdrop-blur-xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-[#5F30FF] to-[#E7347D] rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl font-bold text-white">{t.title}</CardTitle>
                <p className="text-[#C3BFFF] mt-1">{t.subtitle}</p>
              </div>
            </div>
            {messages.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleClearChat}
                className="border-[#5F30FF]/30 text-[#C3BFFF] hover:bg-[#5F30FF]/10 hover:text-white rounded-xl"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                {t.clear}
              </Button>
            )}
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Messages */}
          <Card className="bg-[#1A1A3E]/50 border-[#5F30FF]/30 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="space-y-6 min-h-[500px] max-h-[600px] overflow-y-auto pr-4">
                {messages.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-6 py-12">
                    <div className="w-24 h-24 bg-gradient-to-r from-[#5F30FF] to-[#E7347D] rounded-3xl flex items-center justify-center shadow-2xl">
                      <MessageSquare className="w-12 h-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {language === 'pt' ? 'Como posso ajudar você hoje?' : 'How can I help you today?'}
                      </h3>
                      <p className="text-[#C3BFFF] mb-6">
                        {language === 'pt' 
                          ? 'Sou seu especialista em TikTok Shop. Pergunte-me qualquer coisa!' 
                          : 'I\'m your TikTok Shop expert. Ask me anything!'}
                      </p>
                    </div>
                    <div className="w-full max-w-md space-y-3">
                      <p className="text-sm font-semibold text-[#C3BFFF] text-left">{t.examples.title}</p>
                      {t.examples.items.map((example, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickPrompt(example)}
                          className="w-full text-left p-4 bg-[#0F0F2E]/50 hover:bg-[#5F30FF]/10 border border-[#5F30FF]/20 hover:border-[#5F30FF]/40 rounded-xl transition-all text-[#C3BFFF] hover:text-white text-sm"
                        >
                          {example}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl p-4 ${
                            message.role === 'user'
                              ? 'bg-gradient-to-r from-[#5F30FF] to-[#E7347D] text-white'
                              : 'bg-[#0F0F2E]/50 text-white border border-[#5F30FF]/20'
                          }`}
                        >
                          <div className="prose prose-invert max-w-none">
                            <div className="whitespace-pre-wrap text-sm leading-relaxed">
                              {message.content}
                            </div>
                          </div>
                          
                          {message.role === 'assistant' && (
                            <div className="flex items-center space-x-2 mt-3 pt-3 border-t border-[#5F30FF]/20">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleCopy(message.content, message.id)}
                                className="text-[#C3BFFF] hover:text-white hover:bg-[#5F30FF]/20 h-8 px-3 rounded-lg"
                              >
                                {copiedId === message.id ? (
                                  <>
                                    <Check className="w-3 h-3 mr-1" />
                                    {t.copied}
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3 mr-1" />
                                    {t.copy}
                                  </>
                                )}
                              </Button>
                              {messages[messages.length - 1].id === message.id && (
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={handleRegenerate}
                                  className="text-[#C3BFFF] hover:text-white hover:bg-[#5F30FF]/20 h-8 px-3 rounded-lg"
                                  disabled={isLoading}
                                >
                                  <RefreshCw className="w-3 h-3 mr-1" />
                                  {t.regenerate}
                                </Button>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="max-w-[85%] rounded-2xl p-4 bg-[#0F0F2E]/50 border border-[#5F30FF]/20">
                          <div className="flex items-center space-x-2 text-[#C3BFFF]">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span className="text-sm">{t.thinking}</span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div ref={messagesEndRef} />
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Input Area */}
          <Card className="bg-[#1A1A3E]/50 border-[#5F30FF]/30 backdrop-blur-xl">
            <CardContent className="p-4">
              <div className="flex items-end space-x-3">
                <Textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={t.placeholder}
                  className="min-h-[60px] max-h-[200px] bg-[#0F0F2E]/50 border-[#5F30FF]/30 text-white placeholder:text-[#C3BFFF]/50 rounded-xl resize-none focus:ring-2 focus:ring-[#5F30FF]/50"
                  disabled={isLoading}
                />
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!input.trim() || isLoading}
                  className="h-[60px] px-6 bg-gradient-to-r from-[#5F30FF] to-[#E7347D] hover:from-[#5F30FF]/90 hover:to-[#E7347D]/90 text-white font-semibold rounded-xl shadow-lg disabled:opacity-50"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {t.send}
                    </>
                  )}
                </Button>
              </div>
              <p className="text-xs text-[#C3BFFF]/70 mt-2">
                {language === 'pt' 
                  ? 'Pressione Enter para enviar, Shift+Enter para nova linha' 
                  : 'Press Enter to send, Shift+Enter for new line'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Prompts Sidebar */}
        <div className="space-y-6">
          <Card className="bg-[#1A1A3E]/50 border-[#5F30FF]/30 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-lg text-white flex items-center">
                <Zap className="w-5 h-5 mr-2 text-[#E7347D]" />
                {t.quickPrompts}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickPrompts.map((prompt, index) => {
                const IconComponent = prompt.icon
                return (
                  <button
                    key={index}
                    onClick={() => handleQuickPrompt(prompt.text)}
                    className="w-full text-left p-4 bg-[#0F0F2E]/50 hover:bg-[#5F30FF]/10 border border-[#5F30FF]/20 hover:border-[#5F30FF]/40 rounded-xl transition-all group"
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${prompt.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-sm text-[#C3BFFF] group-hover:text-white transition-colors leading-relaxed">
                        {prompt.text}
                      </p>
                    </div>
                  </button>
                )
              })}
            </CardContent>
          </Card>

          {/* Tips Card */}
          <Card className="bg-gradient-to-br from-[#5F30FF]/10 to-[#E7347D]/10 border-[#5F30FF]/30 backdrop-blur-xl">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-2">
                <Lightbulb className="w-5 h-5 text-[#E7347D]" />
                <h3 className="font-semibold text-white">
                  {language === 'pt' ? 'Dica Pro' : 'Pro Tip'}
                </h3>
              </div>
              <p className="text-sm text-[#C3BFFF] leading-relaxed">
                {language === 'pt'
                  ? 'Seja específico nas suas perguntas! Quanto mais detalhes você fornecer sobre seu nicho, público e objetivos, melhores serão as estratégias que posso criar para você.'
                  : 'Be specific in your questions! The more details you provide about your niche, audience, and goals, the better strategies I can create for you.'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
