"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight, ChevronLeft, Sparkles, Gift, Rocket } from 'lucide-react'

interface OnboardingProps {
  onComplete: () => void
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      icon: Sparkles,
      title: "Welcome to TokUnlocked",
      description: "Your complete toolkit to turn TikTok content into consistent income. Everything you need is already unlocked and ready to use.",
      color: "from-[#5F30FF] to-[#7B4BFF]"
    },
    {
      icon: Gift,
      title: "What You Get",
      description: "Access to proven TikTok Shop strategies, 120+ viral video scripts, AI automation tools, and your personal AI assistant — all in one place.",
      color: "from-[#7B4BFF] to-[#E7347D]"
    },
    {
      icon: Rocket,
      title: "Ready to Start?",
      description: "Step 1: Explore the TikTok Shop Income Guide. Follow the roadmap, complete daily missions, and watch your progress grow. Let's go!",
      color: "from-[#E7347D] to-[#5F30FF]"
    }
  ]

  const currentStepData = steps[currentStep]
  const IconComponent = currentStepData.icon

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete()
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSkip = () => {
    onComplete()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F0F2E]/95 backdrop-blur-xl animate-in fade-in duration-300">
      <Card className="w-full max-w-2xl bg-[#1A1A3E]/90 border-[#5F30FF]/40 backdrop-blur-xl shadow-2xl">
        <CardContent className="p-8 sm:p-12">
          {/* Progress Dots */}
          <div className="flex justify-center space-x-2 mb-8">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? 'w-8 bg-gradient-to-r from-[#5F30FF] to-[#E7347D]'
                    : 'w-2 bg-[#5F30FF]/30'
                }`}
              />
            ))}
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className={`w-20 h-20 bg-gradient-to-r ${currentStepData.color} rounded-2xl flex items-center justify-center shadow-lg animate-in zoom-in duration-300`}>
              <IconComponent className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center mb-8 space-y-4 animate-in slide-in-from-bottom duration-300">
            <h2 className="text-3xl font-bold text-white">
              {currentStepData.title}
            </h2>
            <p className="text-[#C3BFFF] text-lg leading-relaxed max-w-xl mx-auto">
              {currentStepData.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-4">
            <Button
              variant="ghost"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="text-[#C3BFFF] hover:text-white hover:bg-[#5F30FF]/20 disabled:opacity-0 disabled:pointer-events-none"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            <Button
              variant="ghost"
              onClick={handleSkip}
              className="text-[#C3BFFF] hover:text-white hover:bg-[#5F30FF]/20"
            >
              Skip
            </Button>

            <Button
              onClick={handleNext}
              className="bg-gradient-to-r from-[#5F30FF] to-[#E7347D] hover:from-[#5F30FF]/90 hover:to-[#E7347D]/90 text-white font-semibold px-6"
            >
              {currentStep === steps.length - 1 ? "Let's Go!" : "Next"}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
