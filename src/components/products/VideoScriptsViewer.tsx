"use client";

import { useState } from "react";
import { videoScripts, VideoScript } from "@/data/video-scripts";
import { Play, Clock, Film, Music, Type, Copy, Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function VideoScriptsViewer() {
  const [selectedScript, setSelectedScript] = useState<VideoScript | null>(null);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyToClipboard = async (text: string, section: string) => {
    try {
      // Tenta usar a API moderna do Clipboard
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        setCopiedSection(section);
        setTimeout(() => setCopiedSection(null), 2000);
      } else {
        // Fallback para o método antigo usando textarea
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
          document.execCommand('copy');
          setCopiedSection(section);
          setTimeout(() => setCopiedSection(null), 2000);
        } catch (err) {
          console.error('Fallback copy failed:', err);
        } finally {
          document.body.removeChild(textarea);
        }
      }
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  const downloadScript = (script: VideoScript) => {
    const content = `
# ${script.title}
**Módulo:** ${script.module}
**Duração:** ${script.duration}

## 🎬 CENAS

${script.scenes.map((scene, i) => `
### Cena ${i + 1} (${scene.timestamp})
**Visual:** ${scene.visual}
**Texto na tela:** ${scene.text}
**Animação:** ${scene.animation}
`).join('\n')}

## 🎙️ NARRAÇÃO (VOICEOVER)

${script.voiceover.map((line, i) => `${i + 1}. ${line}`).join('\n')}

## 🎨 NOTAS VISUAIS

${script.visualNotes.map((note, i) => `- ${note}`).join('\n')}

## 🎵 ESTILO MUSICAL
${script.musicStyle}

## 📝 ESTILO DE LEGENDAS
${script.captionStyle}
    `.trim();

    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${script.id}-script.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
          📹 Roteiros Completos dos Vídeos
        </h2>
        <p className="text-gray-400">
          Scripts detalhados para você produzir vídeos profissionais em Canva, CapCut, Pictory.ai ou Descript
        </p>
      </div>

      {/* Scripts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videoScripts.map((script) => (
          <Card
            key={script.id}
            className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all cursor-pointer p-4 space-y-3"
            onClick={() => setSelectedScript(script)}
          >
            <div className="flex items-start justify-between">
              <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
                {script.module}
              </Badge>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Clock className="w-3 h-3" />
                {script.duration}
              </div>
            </div>

            <h3 className="font-semibold text-white line-clamp-2">
              {script.title}
            </h3>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Film className="w-3 h-3" />
              {script.scenes.length} cenas
            </div>

            <Button
              size="sm"
              className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600"
            >
              <Play className="w-3 h-3 mr-1" />
              Ver Roteiro Completo
            </Button>
          </Card>
        ))}
      </div>

      {/* Script Detail Modal */}
      {selectedScript && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <Card className="bg-gray-900 border-gray-800 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
                    {selectedScript.module}
                  </Badge>
                  <h2 className="text-2xl font-bold text-white">
                    {selectedScript.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {selectedScript.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Film className="w-4 h-4" />
                      {selectedScript.scenes.length} cenas
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => downloadScript(selectedScript)}
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Baixar
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setSelectedScript(null)}
                  >
                    ✕
                  </Button>
                </div>
              </div>

              {/* Scenes */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Film className="w-5 h-5 text-blue-400" />
                  Cenas Detalhadas
                </h3>
                {selectedScript.scenes.map((scene, index) => (
                  <Card key={index} className="bg-gray-800/50 border-gray-700 p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="bg-pink-500/10 text-pink-400 border-pink-500/30">
                        Cena {index + 1}
                      </Badge>
                      <span className="text-xs text-gray-500">{scene.timestamp}</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-400">Visual:</span>
                        <p className="text-white mt-1">{scene.visual}</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Texto na tela:</span>
                        <p className="text-white mt-1 font-semibold">{scene.text}</p>
                      </div>
                      <div>
                        <span className="text-gray-400">Animação:</span>
                        <p className="text-white mt-1">{scene.animation}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Voiceover */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Music className="w-5 h-5 text-blue-400" />
                    Narração (Voiceover)
                  </h3>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(selectedScript.voiceover.join('\n\n'), 'voiceover')}
                  >
                    {copiedSection === 'voiceover' ? (
                      <><Check className="w-3 h-3 mr-1" /> Copiado!</>
                    ) : (
                      <><Copy className="w-3 h-3 mr-1" /> Copiar</>
                    )}
                  </Button>
                </div>
                <Card className="bg-gray-800/50 border-gray-700 p-4">
                  <div className="space-y-2 text-sm text-gray-300">
                    {selectedScript.voiceover.map((line, index) => (
                      <p key={index} className="leading-relaxed">
                        <span className="text-blue-400 font-mono mr-2">{index + 1}.</span>
                        {line}
                      </p>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Visual Notes */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Type className="w-5 h-5 text-blue-400" />
                  Notas Visuais
                </h3>
                <Card className="bg-gray-800/50 border-gray-700 p-4">
                  <ul className="space-y-2 text-sm text-gray-300">
                    {selectedScript.visualNotes.map((note, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-pink-400 mt-1">•</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* Music & Caption Style */}
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="bg-gray-800/50 border-gray-700 p-4 space-y-2">
                  <h4 className="font-semibold text-white flex items-center gap-2">
                    <Music className="w-4 h-4 text-blue-400" />
                    Estilo Musical
                  </h4>
                  <p className="text-sm text-gray-300">{selectedScript.musicStyle}</p>
                </Card>
                <Card className="bg-gray-800/50 border-gray-700 p-4 space-y-2">
                  <h4 className="font-semibold text-white flex items-center gap-2">
                    <Type className="w-4 h-4 text-blue-400" />
                    Estilo de Legendas
                  </h4>
                  <p className="text-sm text-gray-300">{selectedScript.captionStyle}</p>
                </Card>
              </div>

              {/* Footer Actions */}
              <div className="flex gap-3 pt-4 border-t border-gray-800">
                <Button
                  className="flex-1 bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600"
                  onClick={() => downloadScript(selectedScript)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Baixar Roteiro Completo (.md)
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedScript(null)}
                >
                  Fechar
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
