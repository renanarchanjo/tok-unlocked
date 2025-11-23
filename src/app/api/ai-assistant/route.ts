import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { messages, model = 'gpt-4o', temperature = 0.7, max_tokens = 1500 } = body

    // Validação básica
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      )
    }

    // Verificar se a API key está configurada
    if (!process.env.OPENAI_API_KEY) {
      console.error('OPENAI_API_KEY not configured')
      return NextResponse.json(
        { 
          error: 'API key not configured',
          response: 'The AI Assistant requires an OpenAI API key to function. Please configure OPENAI_API_KEY in your environment variables.'
        },
        { status: 200 } // Retorna 200 para não quebrar o fluxo
      )
    }

    // Chamar OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model,
        messages,
        temperature,
        max_tokens,
        stream: false
      })
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({}))
      console.error('OpenAI API Error:', error)
      
      // Retornar mensagem amigável ao usuário
      return NextResponse.json(
        { 
          response: 'I apologize, but I encountered an issue connecting to the AI service. Please check your API key configuration and try again.',
          error: 'OpenAI API error'
        },
        { status: 200 } // Retorna 200 para não quebrar o fluxo
      )
    }

    const data = await response.json()
    const assistantMessage = data.choices[0]?.message?.content || 'Sorry, I could not generate a response.'

    return NextResponse.json({
      response: assistantMessage,
      usage: data.usage
    })

  } catch (error) {
    console.error('API Route Error:', error)
    return NextResponse.json(
      { 
        response: 'An unexpected error occurred. Please try again.',
        error: 'Internal server error' 
      },
      { status: 200 } // Retorna 200 para não quebrar o fluxo
    )
  }
}
