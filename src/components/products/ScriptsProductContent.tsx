"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Copy, 
  CheckCircle, 
  FileText, 
  Zap, 
  TrendingUp,
  MessageSquare,
  Hash,
  Video
} from 'lucide-react'
import { SCRIPTS_CONTENT } from '@/lib/data'

export function ScriptsProductContent() {
  const [copiedItems, setCopiedItems] = useState<number[]>([])

  const copyToClipboard = async (text: string, id: number, category: string) => {
    try {
      // Tenta usar a API moderna do Clipboard
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text)
        setCopiedItems(prev => [...prev, id])
        setTimeout(() => {
          setCopiedItems(prev => prev.filter(item => item !== id))
        }, 2000)
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
          setCopiedItems(prev => [...prev, id])
          setTimeout(() => {
            setCopiedItems(prev => prev.filter(item => item !== id))
          }, 2000)
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

  const getPerformanceBadge = (performance: string) => {
    switch (performance) {
      case 'High':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'Medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'Low':
        return 'bg-red-500/20 text-red-400 border-red-500/30'
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30'
    }
  }

  return (
    <div className="space-y-8">
      {/* Product Overview */}
      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="text-2xl text-white flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <span>Viral Video Scripts & Templates</span>
              </CardTitle>
              <CardDescription className="text-slate-300 text-lg">
                Ready-made video scripts and captions to speed up your content creation
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Content Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="bg-slate-700/30 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-5 h-5 text-yellow-400" />
              </div>
              <div className="text-xl font-bold text-white">{SCRIPTS_CONTENT.hooks.length}</div>
              <div className="text-sm text-slate-400">Viral Hooks</div>
            </div>
            
            <div className="bg-slate-700/30 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <MessageSquare className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-xl font-bold text-white">{SCRIPTS_CONTENT.captions.length}</div>
              <div className="text-sm text-slate-400">Caption Templates</div>
            </div>
            
            <div className="bg-slate-700/30 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Video className="w-5 h-5 text-purple-400" />
              </div>
              <div className="text-xl font-bold text-white">{SCRIPTS_CONTENT.scripts.length}</div>
              <div className="text-sm text-slate-400">Video Scripts</div>
            </div>
            
            <div className="bg-slate-700/30 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-xl font-bold text-white">3</div>
              <div className="text-sm text-slate-400">Languages</div>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-gradient-to-r from-blue-500/10 to-pink-500/10 rounded-lg p-6 border border-blue-500/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              What's Included
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">30 ready-to-use video scripts</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">50 viral captions (PT/EN/ES)</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">20 high-engagement hooks</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Plug-and-play CTAs</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content Tabs */}
      <Tabs defaultValue="hooks" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-slate-800/50 border border-slate-700">
          <TabsTrigger 
            value="hooks" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
          >
            <Zap className="w-4 h-4 mr-2" />
            Hooks
          </TabsTrigger>
          <TabsTrigger 
            value="captions"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Captions
          </TabsTrigger>
          <TabsTrigger 
            value="scripts"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
          >
            <Video className="w-4 h-4 mr-2" />
            Scripts
          </TabsTrigger>
        </TabsList>

        {/* Hooks Tab */}
        <TabsContent value="hooks" className="space-y-4">
          <div className="grid gap-4">
            {SCRIPTS_CONTENT.hooks.map((hook) => (
              <Card key={hook.id} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="bg-slate-700/50 text-slate-300 border-slate-600">
                          {hook.category}
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={`border ${getPerformanceBadge(hook.performance)}`}
                        >
                          {hook.performance} Performance
                        </Badge>
                        <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                          {hook.language}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700/30 rounded-lg p-4 mb-4">
                    <p className="text-white text-sm leading-relaxed">
                      "{hook.text}"
                    </p>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(hook.text, hook.id, 'hook')}
                    className="border-slate-600 text-slate-300 hover:bg-slate-700/50"
                  >
                    {copiedItems.includes(hook.id) ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Hook
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Captions Tab */}
        <TabsContent value="captions" className="space-y-4">
          <div className="grid gap-4">
            {SCRIPTS_CONTENT.captions.map((caption) => (
              <Card key={caption.id} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="bg-slate-700/50 text-slate-300 border-slate-600">
                          {caption.category}
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={`border ${getPerformanceBadge(caption.performance)}`}
                        >
                          {caption.performance} Performance
                        </Badge>
                        <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                          {caption.language}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700/30 rounded-lg p-4 mb-4">
                    <p className="text-white text-sm leading-relaxed whitespace-pre-line">
                      {caption.text}
                    </p>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(caption.text, caption.id, 'caption')}
                    className="border-slate-600 text-slate-300 hover:bg-slate-700/50"
                  >
                    {copiedItems.includes(caption.id) ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Caption
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Scripts Tab */}
        <TabsContent value="scripts" className="space-y-4">
          <div className="grid gap-4">
            {SCRIPTS_CONTENT.scripts.map((script) => (
              <Card key={script.id} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="space-y-2">
                      <CardTitle className="text-lg text-white">{script.title}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="bg-slate-700/50 text-slate-300 border-slate-600">
                          {script.category}
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={`border ${getPerformanceBadge(script.performance)}`}
                        >
                          {script.performance} Performance
                        </Badge>
                        <Badge variant="outline" className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                          {script.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700/30 rounded-lg p-4 mb-4">
                    <p className="text-white text-sm leading-relaxed whitespace-pre-line">
                      {script.script}
                    </p>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(script.script, script.id, 'script')}
                    className="border-slate-600 text-slate-300 hover:bg-slate-700/50"
                  >
                    {copiedItems.includes(script.id) ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Script
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Usage Tips */}
      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
            Pro Tips for Maximum Impact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Customize for Your Niche</h4>
                <p className="text-slate-300 text-sm">Adapt the templates to match your specific products and audience</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Test Different Variations</h4>
                <p className="text-slate-300 text-sm">Use multiple hooks and captions to see what resonates with your audience</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Combine with Trending Sounds</h4>
                <p className="text-slate-300 text-sm">Pair these scripts with popular audio for maximum viral potential</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
