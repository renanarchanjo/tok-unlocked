"use client"

import { useLanguage } from '@/contexts/LanguageContext'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()

  const languages = [
    { code: 'pt' as const, name: t('language.pt'), flag: '🇧🇷' },
    { code: 'en' as const, name: t('language.en'), flag: '🇺🇸' },
    { code: 'es' as const, name: t('language.es'), flag: '🇪🇸' },
  ]

  const currentLanguage = languages.find(lang => lang.code === language)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-xl gap-2"
        >
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{currentLanguage?.flag}</span>
          <span className="hidden md:inline">{currentLanguage?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-gray-900/95 border-gray-800 backdrop-blur-xl rounded-xl"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`cursor-pointer hover:bg-gray-800/50 rounded-lg gap-3 ${
              language === lang.code ? 'bg-gray-800/30 text-blue-400' : 'text-gray-300'
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}