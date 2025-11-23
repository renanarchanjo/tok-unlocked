"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { MessageCircle, Mail, HelpCircle } from 'lucide-react'

export default function SupportWidget() {
  const handleWhatsAppSupport = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = '1234567890' // Format: country code + number (no + or spaces)
    const message = encodeURIComponent('Hi! I need help with TokUnlocked.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const handleEmailSupport = () => {
    window.location.href = 'mailto:support@tokunlocked.com?subject=TokUnlocked Support Request'
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="relative group">
        {/* Main Support Button */}
        <Button
          size="lg"
          className="w-14 h-14 rounded-full bg-gradient-to-r from-[#5F30FF] to-[#E7347D] hover:from-[#5F30FF]/90 hover:to-[#E7347D]/90 shadow-2xl transition-all duration-300 hover:scale-110"
          onClick={handleWhatsAppSupport}
        >
          <HelpCircle className="w-6 h-6 text-white" />
        </Button>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <Card className="bg-[#1A1A3E]/95 border-[#5F30FF]/40 backdrop-blur-xl shadow-xl">
            <CardContent className="p-4 space-y-3 min-w-[200px]">
              <p className="text-white font-semibold text-sm">Need Help?</p>
              
              <button
                onClick={handleWhatsAppSupport}
                className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-[#5F30FF]/20 transition-colors text-left pointer-events-auto"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                <span className="text-[#C3BFFF] text-sm">WhatsApp Support</span>
              </button>

              <button
                onClick={handleEmailSupport}
                className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-[#5F30FF]/20 transition-colors text-left pointer-events-auto"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-[#C3BFFF] text-sm">Email Support</span>
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
