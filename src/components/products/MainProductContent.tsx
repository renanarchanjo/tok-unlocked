"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'
import { 
  ChevronDown, 
  ChevronRight, 
  Play, 
  Clock, 
  Target, 
  CheckCircle,
  Users,
  TrendingUp,
  Lightbulb
} from 'lucide-react'
import { MAIN_PRODUCT_MODULES } from '@/lib/data'

export function MainProductContent() {
  const [openModules, setOpenModules] = useState<number[]>([])

  const toggleModule = (moduleId: number) => {
    setOpenModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    )
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'Intermediate':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'Advanced':
        return 'bg-red-500/20 text-red-400 border-red-500/30'
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30'
    }
  }

  const totalDuration = MAIN_PRODUCT_MODULES.reduce((total, module) => {
    const minutes = parseInt(module.duration.replace(' min', ''))
    return total + minutes
  }, 0)

  return (
    <div className="space-y-8">
      {/* Course Overview */}
      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="text-2xl text-white flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <span>TikTok Shop Income Guide</span>
              </CardTitle>
              <CardDescription className="text-slate-300 text-lg">
                Complete guide to earning money through TikTok Shop with proven strategies and insider tips
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Course Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="bg-slate-700/30 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Play className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-xl font-bold text-white">{MAIN_PRODUCT_MODULES.length}</div>
              <div className="text-sm text-slate-400">Modules</div>
            </div>
            
            <div className="bg-slate-700/30 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-xl font-bold text-white">{Math.floor(totalDuration / 60)}h {totalDuration % 60}m</div>
              <div className="text-sm text-slate-400">Total Duration</div>
            </div>
            
            <div className="bg-slate-700/30 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Target className="w-5 h-5 text-purple-400" />
              </div>
              <div className="text-xl font-bold text-white">30</div>
              <div className="text-sm text-slate-400">Days to First Sale</div>
            </div>
            
            <div className="bg-slate-700/30 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-5 h-5 text-pink-400" />
              </div>
              <div className="text-xl font-bold text-white">0</div>
              <div className="text-sm text-slate-400">Followers Needed</div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-r from-blue-500/10 to-pink-500/10 rounded-lg p-6 border border-blue-500/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Lightbulb className="w-5 h-5 mr-2 text-yellow-400" />
              What You'll Learn
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Start earning with zero followers</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Master the TikTok algorithm</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Create viral content with AI</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Strategic product selection</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">30-day action plan</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Multilingual templates</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Course Modules */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white mb-6">Course Modules</h2>
        
        {MAIN_PRODUCT_MODULES.map((module, index) => {
          const isOpen = openModules.includes(module.id)
          
          return (
            <Card key={module.id} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <CardHeader 
                    className="cursor-pointer hover:bg-slate-700/20 transition-colors"
                    onClick={() => toggleModule(module.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{module.id}</span>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg text-white mb-2 text-left">
                            {module.title}
                          </CardTitle>
                          <CardDescription className="text-slate-300 text-left">
                            {module.description}
                          </CardDescription>
                          
                          <div className="flex items-center space-x-3 mt-3">
                            <Badge variant="outline" className="bg-slate-700/50 text-slate-300 border-slate-600">
                              <Clock className="w-3 h-3 mr-1" />
                              {module.duration}
                            </Badge>
                            <Badge 
                              variant="outline" 
                              className={`border ${getDifficultyColor(module.difficulty)}`}
                            >
                              <Target className="w-3 h-3 mr-1" />
                              {module.difficulty}
                            </Badge>
                          </div>
                        </div>
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
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                        What You'll Learn
                      </h4>
                      
                      <ul className="space-y-3">
                        {module.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs font-bold">{stepIndex + 1}</span>
                            </div>
                            <span className="text-slate-300 text-sm leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-6 pt-4 border-t border-slate-600">
                        <Button 
                          className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white"
                          onClick={() => alert(`Starting Module ${module.id}: ${module.title}`)}
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Start Module
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          )
        })}
      </div>

      {/* Progress Tracking */}
      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
            Your Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Modules Completed</span>
              <span className="text-white font-semibold">0 / {MAIN_PRODUCT_MODULES.length}</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-pink-500 h-2 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <p className="text-sm text-slate-400">
              Start your first module to begin tracking your progress
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}