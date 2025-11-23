"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Circle, Video, FileText, Zap, Calendar, Trophy, Flame } from 'lucide-react'

export default function DailyMissions() {
  const [completedMissions, setCompletedMissions] = useState<string[]>([])
  const [streak, setStreak] = useState(0)

  const missions = [
    {
      id: 'post-video',
      title: 'Post 1 Video Today',
      description: 'Share your TikTok content and reach your audience',
      icon: Video,
      points: 10
    },
    {
      id: 'use-script',
      title: 'Use 1 Script',
      description: 'Apply a viral script from your template library',
      icon: FileText,
      points: 10
    },
    {
      id: 'setup-automation',
      title: 'Configure 1 Automation',
      description: 'Set up an AI automation to save time',
      icon: Zap,
      points: 15
    }
  ]

  useEffect(() => {
    // Load today's completed missions
    const today = new Date().toDateString()
    const saved = localStorage.getItem(`missions_${today}`)
    const savedStreak = localStorage.getItem('mission_streak')
    
    if (saved) {
      setCompletedMissions(JSON.parse(saved))
    }
    
    if (savedStreak) {
      setStreak(parseInt(savedStreak))
    }
  }, [])

  const handleCompleteMission = (missionId: string) => {
    if (!completedMissions.includes(missionId)) {
      const updated = [...completedMissions, missionId]
      setCompletedMissions(updated)
      
      const today = new Date().toDateString()
      localStorage.setItem(`missions_${today}`, JSON.stringify(updated))
      
      // Update streak if all missions completed
      if (updated.length === missions.length) {
        const newStreak = streak + 1
        setStreak(newStreak)
        localStorage.setItem('mission_streak', newStreak.toString())
      }
    }
  }

  const totalPoints = completedMissions.reduce((acc, missionId) => {
    const mission = missions.find(m => m.id === missionId)
    return acc + (mission?.points || 0)
  }, 0)

  const allCompleted = completedMissions.length === missions.length

  return (
    <Card className="bg-[#1A1A3E]/50 border-[#5F30FF]/30 backdrop-blur-xl">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#E7347D] to-[#5F30FF] rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-white">Daily Missions</CardTitle>
              <p className="text-[#C3BFFF] text-sm">Optional challenges to boost your progress</p>
            </div>
          </div>
          
          {streak > 0 && (
            <Badge className="bg-[#E7347D]/20 text-[#E7347D] border-[#E7347D]/30 flex items-center space-x-1">
              <Flame className="w-4 h-4" />
              <span>{streak} day streak</span>
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Missions List */}
        {missions.map((mission) => {
          const IconComponent = mission.icon
          const isCompleted = completedMissions.includes(mission.id)

          return (
            <div
              key={mission.id}
              className={`p-4 rounded-xl border transition-all duration-300 ${
                isCompleted
                  ? 'bg-[#5F30FF]/10 border-[#5F30FF]/40'
                  : 'bg-[#0F0F2E]/30 border-[#5F30FF]/20 hover:border-[#5F30FF]/40'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isCompleted
                      ? 'bg-gradient-to-r from-[#5F30FF] to-[#E7347D]'
                      : 'bg-[#5F30FF]/20'
                  }`}>
                    <IconComponent className={`w-5 h-5 ${isCompleted ? 'text-white' : 'text-[#C3BFFF]'}`} />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className={`font-semibold mb-1 ${isCompleted ? 'text-white' : 'text-[#C3BFFF]'}`}>
                      {mission.title}
                    </h4>
                    <p className="text-[#C3BFFF] text-sm">{mission.description}</p>
                    <div className="mt-2">
                      <Badge variant="outline" className="text-xs border-[#5F30FF]/30 text-[#C3BFFF]">
                        +{mission.points} points
                      </Badge>
                    </div>
                  </div>
                </div>

                <Button
                  size="sm"
                  variant={isCompleted ? "ghost" : "outline"}
                  onClick={() => handleCompleteMission(mission.id)}
                  disabled={isCompleted}
                  className={
                    isCompleted
                      ? "text-green-400 hover:bg-transparent cursor-default"
                      : "bg-[#5F30FF]/20 border-[#5F30FF]/30 text-white hover:bg-[#5F30FF]/30"
                  }
                >
                  {isCompleted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 mr-1" />
                      Done
                    </>
                  ) : (
                    <>
                      <Circle className="w-4 h-4 mr-1" />
                      Mark
                    </>
                  )}
                </Button>
              </div>
            </div>
          )
        })}

        {/* Summary */}
        <div className={`p-4 rounded-xl border transition-all duration-300 ${
          allCompleted
            ? 'bg-gradient-to-r from-[#5F30FF]/20 to-[#E7347D]/20 border-[#5F30FF]/40'
            : 'bg-[#0F0F2E]/30 border-[#5F30FF]/20'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Trophy className={`w-5 h-5 ${allCompleted ? 'text-[#E7347D]' : 'text-[#C3BFFF]'}`} />
              <div>
                <p className="text-white font-semibold">
                  {allCompleted ? '🎉 All missions completed!' : 'Keep going!'}
                </p>
                <p className="text-[#C3BFFF] text-sm">
                  {completedMissions.length} of {missions.length} missions • {totalPoints} points earned
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
