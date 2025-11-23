"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { 
  Bot, 
  Copy, 
  CheckCircle, 
  ChevronDown, 
  ChevronRight,
  Zap, 
  Settings, 
  Calendar,
  CheckSquare,
  Clock,
  TrendingUp,
  Lightbulb
} from 'lucide-react'
import { AUTOMATION_CONTENT } from '@/lib/data'

export function AutomationProductContent() {
  const [copiedItems, setCopiedItems] = useState<number[]>([])
  const [openSections, setOpenSections] = useState<number[]>([])

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedItems(prev => [...prev, id])
      setTimeout(() => {
        setCopiedItems(prev => prev.filter(item => item !== id))
      }, 2000)
    })
  }

  const toggleSection = (sectionId: number) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
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
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <span>AI Automation Kit</span>
              </CardTitle>
              <CardDescription className="text-slate-300 text-lg">
                Advanced AI tools and automation workflows to scale your TikTok Shop business effortlessly
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Content Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="bg-slate-700/30 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Settings className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-xl font-bold text-white">{AUTOMATION_CONTENT.tools.length}</div>
              <div className="text-sm text-slate-400">AI Tools</div>
            </div>
            
            <div className="bg-slate-700/30 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-5 h-5 text-yellow-400" />
              </div>
              <div className="text-xl font-bold text-white">{AUTOMATION_CONTENT.prompts.length}</div>
              <div className="text-sm text-slate-400">AI Prompts</div>
            </div>
            
            <div className="bg-slate-700/30 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="w-5 h-5 text-purple-400" />
              </div>
              <div className="text-xl font-bold text-white">{AUTOMATION_CONTENT.automation.length}</div>
              <div className="text-sm text-slate-400">Workflows</div>
            </div>
            
            <div className="bg-slate-700/30 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-xl font-bold text-white">20+</div>
              <div className="text-sm text-slate-400">Hours Saved/Week</div>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-gradient-to-r from-blue-500/10 to-pink-500/10 rounded-lg p-6 border border-blue-500/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Lightbulb className="w-5 h-5 mr-2 text-yellow-400" />
              What You'll Master
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">AI video creation with OpusClip & Pika Labs</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Advanced ChatGPT prompting techniques</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Automated subtitle generation</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Content scheduling & automation</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content Tabs */}
      <Tabs defaultValue="tools" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border border-slate-700">
          <TabsTrigger 
            value="tools" 
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
          >
            <Settings className="w-4 h-4 mr-2" />
            Tools
          </TabsTrigger>
          <TabsTrigger 
            value="prompts"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
          >
            <Zap className="w-4 h-4 mr-2" />
            Prompts
          </TabsTrigger>
          <TabsTrigger 
            value="automation"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Automation
          </TabsTrigger>
          <TabsTrigger 
            value="checklist"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
          >
            <CheckSquare className="w-4 h-4 mr-2" />
            Checklist
          </TabsTrigger>
        </TabsList>

        {/* Tools Tab */}
        <TabsContent value="tools" className="space-y-4">
          <div className="grid gap-4">
            {AUTOMATION_CONTENT.tools.map((tool) => (
              <Card key={tool.id} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="space-y-2">
                      <CardTitle className="text-lg text-white flex items-center space-x-2">
                        <Bot className="w-5 h-5 text-blue-400" />
                        <span>{tool.name}</span>
                      </CardTitle>
                      <Badge variant="outline" className="bg-slate-700/50 text-slate-300 border-slate-600">
                        {tool.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardDescription className="text-slate-300 mb-4">
                    {tool.description}
                  </CardDescription>
                  
                  <div className="bg-slate-700/30 rounded-lg p-4 mb-4">
                    <h4 className="text-white font-medium mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {tool.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                    <h4 className="text-blue-400 font-medium mb-2">Tutorial Included:</h4>
                    <p className="text-slate-300 text-sm">{tool.tutorial}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Prompts Tab */}
        <TabsContent value="prompts" className="space-y-4">
          <div className="grid gap-4">
            {AUTOMATION_CONTENT.prompts.map((prompt) => (
              <Card key={prompt.id} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="space-y-2">
                      <CardTitle className="text-lg text-white">{prompt.title}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="bg-slate-700/50 text-slate-300 border-slate-600">
                          {prompt.category}
                        </Badge>
                        <Badge variant="outline" className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                          {prompt.useCase}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700/30 rounded-lg p-4 mb-4">
                    <p className="text-white text-sm leading-relaxed whitespace-pre-line">
                      {prompt.prompt}
                    </p>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                    className="border-slate-600 text-slate-300 hover:bg-slate-700/50"
                  >
                    {copiedItems.includes(prompt.id) ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Prompt
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Automation Tab */}
        <TabsContent value="automation" className="space-y-4">
          <div className="grid gap-4">
            {AUTOMATION_CONTENT.automation.map((workflow) => {
              const isOpen = openSections.includes(workflow.id)
              
              return (
                <Card key={workflow.id} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <CardHeader 
                        className="cursor-pointer hover:bg-slate-700/20 transition-colors"
                        onClick={() => toggleSection(workflow.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <CardTitle className="text-lg text-white flex items-center space-x-2">
                              <Calendar className="w-5 h-5 text-purple-400" />
                              <span>{workflow.title}</span>
                            </CardTitle>
                            <CardDescription className="text-slate-300">
                              {workflow.description}
                            </CardDescription>
                            <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/30 w-fit">
                              <Clock className="w-3 h-3 mr-1" />
                              Saves {workflow.timesSaved}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            {isOpen ? (
                              <ChevronDown className="w-5 h-5 text-slate-400" />
                            ) : (
                              <ChevronRight className="w-5 h-5 text-slate-400" />
                            )}
                          </div>
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <div className="bg-slate-700/20 rounded-lg p-6">
                          <h4 className="text-white font-semibold mb-4 flex items-center">
                            <CheckSquare className="w-4 h-4 mr-2 text-green-400" />
                            Workflow Steps
                          </h4>
                          
                          <ul className="space-y-3">
                            {workflow.steps.map((step, stepIndex) => (
                              <li key={stepIndex} className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-white text-xs font-bold">{stepIndex + 1}</span>
                                </div>
                                <span className="text-slate-300 text-sm leading-relaxed">{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        {/* Checklist Tab */}
        <TabsContent value="checklist" className="space-y-4">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <CheckSquare className="w-5 h-5 mr-2 text-green-400" />
                AI Automation Setup Checklist
              </CardTitle>
              <CardDescription className="text-slate-300">
                Follow this checklist to set up your complete automation workflow
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  'Create accounts for all AI tools (OpusClip, Submagic, ChatGPT, Pika Labs)',
                  'Set up OpusClip with your brand colors and style preferences',
                  'Configure Submagic for viral subtitle styles',
                  'Save all AI prompts in an organized document',
                  'Set up content calendar and posting schedule',
                  'Create templates for different video types',
                  'Test each tool with sample content',
                  'Set up performance tracking spreadsheet',
                  'Create backup workflows for each automation',
                  'Schedule weekly review and optimization sessions'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-slate-700/20 rounded-lg">
                    <CheckSquare className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Success Metrics */}
      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
            Expected Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent mb-2">
                80%
              </div>
              <div className="text-slate-300 text-sm">Time Reduction</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent mb-2">
                5x
              </div>
              <div className="text-slate-300 text-sm">Content Output</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-slate-300 text-sm">Automation</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}