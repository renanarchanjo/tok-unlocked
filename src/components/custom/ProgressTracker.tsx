"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Circle, Trophy, Sparkles, TrendingUp } from 'lucide-react'

interface ProgressTrackerProps {
  moduleId: string
  moduleName: string
  totalChapters?: number
}

export default function ProgressTracker({ moduleId, moduleName, totalChapters = 10 }: ProgressTrackerProps) {
  const [completedChapters, setCompletedChapters] = useState<number[]>([])
  const [showMotivation, setShowMotivation] = useState(false)
  const [motivationMessage, setMotivationMessage] = useState('')

  const motivationalMessages = [
    "🎉 Amazing progress! You're crushing it!",
    "💪 Keep going! Success is just around the corner!",
    "🚀 You're on fire! This momentum is unstoppable!",
    "⭐ Incredible work! You're making it happen!",
    "🎯 Yes! Another step closer to your goals!",
    "✨ Fantastic! Your dedication is paying off!",
    "🏆 Outstanding! You're a TikTok Shop champion!",
    "💎 Brilliant! Your future is looking bright!"
  ]

  useEffect(() => {
    // Load completed chapters from localStorage
    const saved = localStorage.getItem(`progress_${moduleId}`)
    if (saved) {
      setCompletedChapters(JSON.parse(saved))
    }
  }, [moduleId])

  const handleCompleteChapter = (chapterNumber: number) => {
    if (!completedChapters.includes(chapterNumber)) {
      const updated = [...completedChapters, chapterNumber]
      setCompletedChapters(updated)
      localStorage.setItem(`progress_${moduleId}`, JSON.stringify(updated))
      
      // Show motivational message
      const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]
      setMotivationMessage(randomMessage)
      setShowMotivation(true)
      
      setTimeout(() => {
        setShowMotivation(false)
      }, 3000)
    }
  }

  const progressPercentage = Math.round((completedChapters.length / totalChapters) * 100)

  return (
    <div className="space-y-4">
      {/* Motivational Message */}
      {showMotivation && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-in slide-in-from-top duration-300">
          <Card className="bg-gradient-to-r from-[#5F30FF] to-[#E7347D] border-none shadow-2xl">
            <CardContent className="p-4 flex items-center space-x-3">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
              <p className="text-white font-semibold">{motivationMessage}</p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Progress Card */}
      <Card className="bg-[#1A1A3E]/50 border-[#5F30FF]/30 backdrop-blur-xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#5F30FF] to-[#E7347D] rounded-xl flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">{moduleName} Progress</h3>
                <p className="text-[#C3BFFF] text-sm">{completedChapters.length} of {totalChapters} chapters completed</p>
              </div>
            </div>
            <Badge className="bg-[#5F30FF]/20 text-[#C3BFFF] border-[#5F30FF]/30">
              {progressPercentage}%
            </Badge>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#0F0F2E]/50 rounded-full h-3 overflow-hidden mb-4">
            <div 
              className="h-full bg-gradient-to-r from-[#5F30FF] to-[#E7347D] rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          {/* Chapter Completion Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {Array.from({ length: totalChapters }, (_, i) => i + 1).map((chapter) => {
              const isCompleted = completedChapters.includes(chapter)
              return (
                <Button
                  key={chapter}
                  variant={isCompleted ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCompleteChapter(chapter)}
                  className={
                    isCompleted
                      ? "bg-gradient-to-r from-[#5F30FF] to-[#E7347D] hover:from-[#5F30FF]/90 hover:to-[#E7347D]/90 text-white border-none"
                      : "bg-[#0F0F2E]/30 border-[#5F30FF]/30 text-[#C3BFFF] hover:bg-[#5F30FF]/20 hover:text-white"
                  }
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 mr-1" />
                  ) : (
                    <Circle className="w-4 h-4 mr-1" />
                  )}
                  Ch {chapter}
                </Button>
              )
            })}
          </div>

          {/* Completion Message */}
          {progressPercentage === 100 && (
            <div className="mt-4 p-4 bg-gradient-to-r from-[#5F30FF]/20 to-[#E7347D]/20 border border-[#5F30FF]/30 rounded-xl">
              <div className="flex items-center space-x-3">
                <Trophy className="w-6 h-6 text-[#E7347D]" />
                <p className="text-white font-semibold">
                  🎉 Module Complete! You're a champion! Ready for the next one?
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
