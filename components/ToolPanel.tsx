'use client'

import {
  Wand2,
  Layers,
  Trash2,
  Sparkles,
  Volume2,
  Zap,
  Copy,
  Download,
  ChevronDown,
} from 'lucide-react'
import { useState } from 'react'

interface ToolPanelProps {
  selectedTab: 'image' | 'video' | 'voice'
}

export default function ToolPanel({ selectedTab }: ToolPanelProps) {
  const [expandedTool, setExpandedTool] = useState<string | null>(null)

  const imageTools = [
    { id: 'bg-remove', label: 'Remove Background', icon: Layers },
    { id: 'bg-change', label: 'Change Background', icon: Wand2 },
    { id: 'object-remove', label: 'Remove Object', icon: Trash2 },
    { id: 'enhance', label: 'Enhance', icon: Sparkles },
    { id: 'upscale', label: 'Upscale 4K', icon: Zap },
  ]

  const videoTools = [
    { id: 'lip-sync', label: 'Lip Sync', icon: Volume2 },
    { id: 'motion-transfer', label: 'Motion Transfer', icon: Wand2 },
    { id: 'bg-remove-video', label: 'Remove Background', icon: Layers },
    { id: 'compress', label: 'Compress Video', icon: Zap },
    { id: 'enhance-video', label: 'Enhance', icon: Sparkles },
  ]

  const voiceTools = [
    { id: 'voice-gen', label: 'Voice Generation', icon: Volume2 },
    { id: 'tone-adjust', label: 'Adjust Tone', icon: Wand2 },
    { id: 'voice-clone', label: 'Voice Clone', icon: Copy },
  ]

  const tools = selectedTab === 'image' ? imageTools : selectedTab === 'video' ? videoTools : voiceTools

  return (
    <div className="w-80 bg-dark-800 p-6 overflow-y-auto flex flex-col gap-4">
      <h2 className="text-lg font-bold text-gradient-neon mb-4">Tools & Features</h2>

      {/* Tool List */}
      <div className="space-y-3 flex-1">
        {tools.map((tool) => {
          const Icon = tool.icon
          const isExpanded = expandedTool === tool.id
          return (
            <div key={tool.id} className="space-y-2">
              <button
                onClick={() => setExpandedTool(isExpanded ? null : tool.id)}
                className="w-full flex items-center justify-between px-4 py-3 bg-dark-700 hover:bg-dark-600 border border-neon-purple/20 hover:border-neon-purple/50 rounded-lg transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-primary/20 rounded-lg group-hover:bg-gradient-primary/40 transition-colors">
                    <Icon size={18} className="text-accent-cyan" />
                  </div>
                  <span className="text-sm font-medium text-white">{tool.label}</span>
                </div>
                <ChevronDown
                  size={16}
                  className={`text-accent-pink transition-transform duration-200 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Tool Options */}
              {isExpanded && (
                <div className="ml-4 space-y-2 pl-4 border-l border-neon-cyan/30 animate-slideInUp">
                  {tool.id === 'voice-gen' ? (
                    <>
                      <div className="space-y-2">
                        <label className="text-xs text-accent-cyan font-medium">Voice Type</label>
                        <select className="input-neon text-sm">
                          <option>Male</option>
                          <option>Female</option>
                          <option>Neutral</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-accent-cyan font-medium">Tone</label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          className="w-full accent-accent-pink"
                        />
                      </div>
                      <button className="w-full mt-2 px-3 py-2 bg-gradient-to-r from-accent-pink to-accent-cyan rounded text-sm font-medium hover:shadow-neon-pink transition-all duration-200 text-dark-900">
                        Generate Voice
                      </button>
                    </>
                  ) : tool.id === 'bg-remove' ? (
                    <>
                      <div className="space-y-2">
                        <label className="text-xs text-accent-cyan font-medium">Sensitivity</label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          defaultValue="50"
                          className="w-full accent-accent-cyan"
                        />
                      </div>
                      <button className="w-full mt-2 px-3 py-2 bg-gradient-cyan rounded text-sm font-medium hover:shadow-neon-cyan transition-all duration-200 text-dark-900 font-semibold">
                        Remove Background
                      </button>
                    </>
                  ) : (
                    <button className="w-full px-3 py-2 bg-gradient-primary rounded text-sm font-medium hover:shadow-neon-purple transition-all duration-200 text-white">
                      Apply Tool
                    </button>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-neon-purple/30 space-y-2">
        <button className="btn-neon-primary w-full flex items-center justify-center gap-2">
          <Sparkles size={18} />
          Generate
        </button>
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-dark-700 hover:bg-dark-600 border border-neon-cyan/30 hover:border-neon-cyan/60 rounded-lg text-white font-medium transition-all duration-200 hover:shadow-neon-cyan">
          <Download size={18} />
          Download
        </button>
      </div>
    </div>
  )
}
