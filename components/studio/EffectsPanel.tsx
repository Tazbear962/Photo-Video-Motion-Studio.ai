'use client'

import {
  Wand2,
  Layers,
  Trash2,
  Sparkles,
  Volume2,
  Zap,
  Copy,
  Eye,
  X,
  ChevronDown,
  Sliders,
} from 'lucide-react'
import { useState } from 'react'

interface EffectsPanelProps {
  mediaType: string
  onClose: () => void
}

export default function EffectsPanel({ mediaType, onClose }: EffectsPanelProps) {
  const [expandedEffect, setExpandedEffect] = useState<string | null>(null)
  const [effectChain, setEffectChain] = useState<string[]>([])

  const imageEffects = [
    { id: 'bg-remove', label: 'Background Remover', icon: Layers, desc: 'Advanced AI background removal' },
    { id: 'bg-change', label: 'Background Changer', icon: Wand2, desc: 'Replace with custom background' },
    { id: 'object-remove', label: 'Object Remover', icon: Trash2, desc: 'Remove unwanted objects' },
    { id: 'enhance', label: 'AI Enhance', icon: Sparkles, desc: 'Auto enhance colors & clarity' },
    { id: 'upscale', label: 'Upscale (4K)', icon: Zap, desc: 'Enhance to 4K resolution' },
    { id: 'clothing', label: 'Clothing Changer', icon: Copy, desc: 'Change clothing & styling' },
    { id: 'xray', label: 'X-Ray Mode', icon: Eye, desc: 'Advanced visualization' },
  ]

  const videoEffects = [
    { id: 'lip-sync', label: 'Lip Sync', icon: Volume2, desc: 'Sync lips to audio' },
    { id: 'motion-transfer', label: 'Motion Transfer', icon: Wand2, desc: 'Transfer motion from video' },
    { id: 'bg-remove-video', label: 'Background Remove', icon: Layers, desc: 'Remove video background' },
    { id: 'compress', label: 'Video Compressor', icon: Zap, desc: 'Optimize file size' },
    { id: 'enhance-video', label: 'Enhance Video', icon: Sparkles, desc: 'Improve quality' },
    { id: 'slow-motion', label: 'Slow Motion', icon: Copy, desc: 'Create slow motion effect' },
  ]

  const voiceEffects = [
    { id: 'voice-gen', label: 'Voice Generator', icon: Volume2, desc: 'Generate custom voice' },
    { id: 'tone-adjust', label: 'Tone Adjuster', icon: Wand2, desc: 'Modify voice tone' },
    { id: 'voice-clone', label: 'Voice Clone', icon: Copy, desc: 'Clone any voice' },
    { id: 'enhance-audio', label: 'Audio Enhance', icon: Sparkles, desc: 'Enhance audio quality' },
  ]

  const effects = mediaType === 'image' ? imageEffects : mediaType === 'video' ? videoEffects : voiceEffects

  return (
    <div className="w-96 bg-dark-800/50 backdrop-blur-sm border-l border-neon-pink/20 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-neon-pink/20 bg-dark-800/80">
        <div className="flex items-center gap-2">
          <Sliders size={20} className="text-accent-pink" />
          <h3 className="text-lg font-bold text-gradient-neon">AI Effects</h3>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-dark-700 rounded transition-colors"
        >
          <X size={20} className="text-gray-400" />
        </button>
      </div>

      {/* Effect Chain */}
      {effectChain.length > 0 && (
        <div className="px-6 py-4 border-b border-neon-cyan/20 bg-accent-cyan/5">
          <p className="text-xs text-accent-cyan font-semibold mb-2 uppercase">Applied Effects</p>
          <div className="space-y-2">
            {effectChain.map((effect, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between px-3 py-2 bg-dark-700/50 rounded border border-neon-cyan/30"
              >
                <span className="text-sm text-white">{idx + 1}. {effect}</span>
                <button className="text-xs text-red-400 hover:text-red-300">
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Effects List */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {effects.map((effect) => {
          const Icon = effect.icon
          const isExpanded = expandedEffect === effect.id
          const isApplied = effectChain.includes(effect.label)

          return (
            <div key={effect.id} className="space-y-2">
              <button
                onClick={() => setExpandedEffect(isExpanded ? null : effect.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 border ${
                  isApplied
                    ? 'bg-accent-pink/20 border-neon-pink/50 hover:border-neon-pink/70'
                    : 'bg-dark-700/50 border-neon-pink/20 hover:border-neon-pink/40 hover:bg-dark-600/50'
                }`}
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="p-2 bg-gradient-primary/20 rounded">
                    <Icon size={16} className="text-accent-pink" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-white">{effect.label}</p>
                    <p className="text-xs text-gray-400">{effect.desc}</p>
                  </div>
                </div>
                <ChevronDown
                  size={16}
                  className={`text-accent-pink transition-transform ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Effect Options */}
              {isExpanded && (
                <div className="ml-4 pl-4 space-y-3 border-l border-neon-pink/30 py-2 animate-slideInUp">
                  {effect.id === 'voice-gen' ? (
                    <>
                      <div className="space-y-2">
                        <label className="text-xs text-accent-pink font-semibold">Voice Type</label>
                        <select className="w-full input-neon-accent text-sm">
                          <option>Male - Professional</option>
                          <option>Female - Energetic</option>
                          <option>Neutral - Natural</option>
                          <option>Custom Voice</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-accent-pink font-semibold">Tone & Inflection</label>
                        <input type="range" min="0" max="100" className="w-full accent-accent-pink" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-accent-pink font-semibold">Speed</label>
                        <input type="range" min="0.5" max="2" step="0.1" defaultValue="1" className="w-full accent-accent-pink" />
                      </div>
                    </>
                  ) : effect.id === 'bg-remove' ? (
                    <>
                      <div className="space-y-2">
                        <label className="text-xs text-accent-pink font-semibold">Detection Sensitivity</label>
                        <input type="range" min="0" max="100" defaultValue="75" className="w-full accent-accent-cyan" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-accent-pink font-semibold">Edge Smoothness</label>
                        <input type="range" min="0" max="100" defaultValue="50" className="w-full accent-accent-cyan" />
                      </div>
                    </>
                  ) : (
                    <div className="space-y-2">
                      <label className="text-xs text-accent-pink font-semibold">Intensity</label>
                      <input type="range" min="0" max="100" defaultValue="50" className="w-full accent-accent-pink" />
                    </div>
                  )}

                  <button
                    onClick={() => {
                      if (!isApplied) {
                        setEffectChain([...effectChain, effect.label])
                      }
                    }}
                    disabled={isApplied}
                    className={`w-full mt-2 px-3 py-2 rounded text-sm font-semibold transition-all duration-200 ${
                      isApplied
                        ? 'bg-accent-pink/30 text-accent-pink cursor-not-allowed'
                        : 'bg-gradient-primary text-white hover:shadow-neon-pink'
                    }`}
                  >
                    {isApplied ? '✓ Applied' : 'Apply Effect'}
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Action Buttons */}
      <div className="border-t border-neon-pink/20 px-4 py-4 space-y-2 bg-dark-800/80">
        <button className="w-full px-4 py-3 bg-gradient-primary rounded-lg text-white font-semibold hover:shadow-neon-purple transition-all duration-200 flex items-center justify-center gap-2">
          <Sparkles size={18} />
          Process All Effects
        </button>
        <button className="w-full px-4 py-2 bg-dark-700/50 border border-neon-cyan/30 rounded-lg text-gray-300 hover:bg-dark-600 transition-all duration-200 text-sm font-medium">
          Clear All
        </button>
      </div>
    </div>
  )
}
