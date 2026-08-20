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
    <div className="w-80 bg-dark-800 rounded-xl border border-dark-700 p-6 overflow-y-auto flex flex-col gap-4">
      <h2 className="text-lg font-bold text-white mb-4">Tools & Features</h2>

      {/* Tool List */}
      <div className="space-y-3 flex-1">
        {tools.map((tool) => {
          const Icon = tool.icon
          const isExpanded = expandedTool === tool.id
          return (
            <div key={tool.id} className="space-y-2">
              <button
                onClick={() => setExpandedTool(isExpanded ? null : tool.id)}
                className="w-full flex items-center justify-between px-4 py-3 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-primary/20 rounded-lg group-hover:bg-gradient-primary/40 transition-colors">
                    <Icon size={18} className="text-accent-cyan" />
                  </div>
                  <span className="text-sm font-medium text-white">{tool.label}</span>
                </div>
                <Zap size={16} className="text-accent-pink opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              {/* Tool Options */}
              {isExpanded && (
                <div className="ml-4 space-y-2 pl-4 border-l border-dark-600 animate-slideInUp">
                  {tool.id === 'voice-gen' ? (
                    <>
                      <div className="space-y-2">
                        <label className="text-xs text-gray-400">Voice Type</label>
                        <select className="w-full bg-dark-600 border border-dark-500 rounded px-3 py-2 text-sm text-white focus:border-accent-cyan outline-none">
                          <option>Male</option>
                          <option>Female</option>
                          <option>Neutral</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-gray-400">Tone</label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          className="w-full"
                        />
                      </div>
                      <button className="w-full mt-2 px-3 py-2 bg-accent-pink rounded text-sm font-medium hover:bg-opacity-80 transition-colors text-white">
                        Generate Voice
                      </button>
                    </>
                  ) : tool.id === 'bg-remove' ? (
                    <>
                      <div className="space-y-2">
                        <label className="text-xs text-gray-400">Sensitivity</label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          defaultValue="50"
                          className="w-full"
                        />
                      </div>
                      <button className="w-full mt-2 px-3 py-2 bg-accent-cyan rounded text-sm font-medium hover:bg-opacity-80 transition-colors text-dark-900">
                        Remove Background
                      </button>
                    </>
                  ) : (
                    <button className="w-full px-3 py-2 bg-primary-500 rounded text-sm font-medium hover:bg-opacity-80 transition-colors text-white">
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
      <div className="pt-4 border-t border-dark-700 space-y-2">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-primary rounded-lg text-white font-medium hover:shadow-neon-purple transition-all duration-200">
          <Sparkles size={18} />
          Generate
        </button>
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-dark-700 hover:bg-dark-600 rounded-lg text-white font-medium transition-colors">
          <Download size={18} />
          Download
        </button>
      </div>
    </div>
  )
}
