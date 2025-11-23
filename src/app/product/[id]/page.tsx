"use client"

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  ArrowLeft, 
  ChevronDown, 
  ChevronRight, 
  Play, 
  FileText, 
  Bot, 
  Copy, 
  CheckCircle,
  Clock,
  Target,
  Zap,
  Users,
  TrendingUp,
  Lightbulb
} from 'lucide-react'
import { PRODUCTS, PURCHASE_DATABASE } from '@/lib/data'
import { MainProductContent } from '@/components/products/MainProductContent'
import { ScriptsProductContent } from '@/components/products/ScriptsProductContent'
import { AutomationProductContent } from '@/components/products/AutomationProductContent'

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const [userEmail, setUserEmail] = useState('')
  const [userPurchases, setUserPurchases] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const productId = params.id as string
  const product = PRODUCTS.find(p => p.id === productId)

  useEffect(() => {
    const savedEmail = localStorage.getItem('tokunlocked_user')
    if (savedEmail) {
      setUserEmail(savedEmail)
      setUserPurchases(PURCHASE_DATABASE[savedEmail as keyof typeof PURCHASE_DATABASE] || [])
    }
    setIsLoading(false)
  }, [])

  // Redirect if not logged in or no access
  useEffect(() => {
    if (!isLoading) {
      if (!userEmail) {
        router.push('/')
        return
      }
      
      if (!userPurchases.includes(productId)) {
        router.push('/')
        return
      }
    }
  }, [userEmail, userPurchases, productId, isLoading, router])

  if (isLoading || !product || !userPurchases.includes(productId)) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  const renderProductContent = () => {
    switch (productId) {
      case 'main':
        return <MainProductContent />
      case 'scripts':
        return <ScriptsProductContent />
      case 'automation':
        return <AutomationProductContent />
      default:
        return <div>Product not found</div>
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
                className="text-slate-300 hover:text-white hover:bg-slate-700/50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              
              <div className="h-6 w-px bg-slate-600"></div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <product.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-white">
                    {product.title}
                  </h1>
                  <Badge variant="secondary" className="bg-slate-700/50 text-slate-200 text-xs">
                    {product.type}
                  </Badge>
                </div>
              </div>
            </div>
            
            <div className="text-sm text-slate-400">
              {userEmail}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderProductContent()}
      </main>
    </div>
  )
}