'use client'

import { X, Eye, EyeOff, Lock, LockOpen, Trash2, Copy, ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface LayersPanelProps {
  onClose: () => void
}

export default function LayersPanel({ onClose }: LayersPanelProps) {
  const [layers, setLayers] = useState([
    { id: 1, name: 'Background', visible: true, locked: false, type: 'image' },
    { id: 2, name: 'Main Subject', visible: true, locked: false, type: 'layer' },
    { id: 3, name: 'Effects Adjustment', visible: true, locked: false, type: 'adjustment' },
  ])
  const [selectedLayer, setSelectedLayer] = useState(2)
  const [expandedLayer, setExpandedLayer] = useState<number | null>(null)

  const toggleVisibility = (id: number) => {
    setLayers(layers.map(l => l.id === id ? { ...l, visible: !l.visible } : l))
  }

  const toggleLock = (id: number) => {
    setLayers(layers.map(l => l.id === id ? { ...l, locked: !l.locked } : l))
  }

  return (
    <div className="w-80 bg-dark-800/50 backdrop-blur-sm border-l border-neon-cyan/20 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-neon-cyan/20 bg-dark-800/80">
        <div className="flex items-center gap-2">
          <Layers size={20} className="text-accent-cyan" />
          <h3 className="text-lg font-bold text-gradient-cyan">Layers</h3>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-dark-700 rounded transition-colors"
        >
          <X size={20} className="text-gray-400" />
        </button>
      </div>

      {/* Layer Info */}
      <div className="px-6 py-3 bg-accent-cyan/5 border-b border-neon-cyan/20 text-xs text-gray-400">
        <p>Total Layers: <span className="text-accent-cyan font-semibold">{layers.length}</span></p>
      </div>

      {/* Layers List */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2">
        {layers.map((layer) => (
          <div key={layer.id} className="space-y-1">
            <div
              onClick={() => setSelectedLayer(layer.id)}
              className={`w-full flex items-center gap-2 px-3 py-3 rounded-lg transition-all duration-200 cursor-pointer border ${
                selectedLayer === layer.id
                  ? 'bg-accent-cyan/20 border-neon-cyan/50 shadow-neon-cyan/30'
                  : 'bg-dark-700/50 border-neon-cyan/20 hover:border-neon-cyan/40 hover:bg-dark-600/50'
              }`}
            >
              {/* Visibility Toggle */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleVisibility(layer.id)
                }}
                className="p-1 hover:bg-dark-600 rounded transition-colors"
              >
                {layer.visible ? (
                  <Eye size={16} className="text-accent-cyan" />
                ) : (
                  <EyeOff size={16} className="text-gray-500" />
                )}
              </button>

              {/* Layer Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{layer.name}</p>
                <p className="text-xs text-gray-400">{layer.type}</p>
              </div>

              {/* Lock Toggle */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleLock(layer.id)
                }}
                className="p-1 hover:bg-dark-600 rounded transition-colors"
              >
                {layer.locked ? (
                  <Lock size={16} className="text-accent-pink" />
                ) : (
                  <LockOpen size={16} className="text-gray-500" />
                )}
              </button>

              {/* Expand */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setExpandedLayer(expandedLayer === layer.id ? null : layer.id)
                }}
              >
                <ChevronDown
                  size={16}
                  className={`text-gray-400 transition-transform ${
                    expandedLayer === layer.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {/* Layer Options */}
            {expandedLayer === layer.id && (
              <div className="ml-4 pl-3 border-l border-neon-cyan/30 space-y-2 py-2 animate-slideInUp">
                <div className="space-y-2">
                  <label className="text-xs text-accent-cyan font-semibold">Opacity</label>
                  <input type="range" min="0" max="100" defaultValue="100" className="w-full accent-accent-cyan" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-accent-cyan font-semibold">Blend Mode</label>
                  <select className="w-full input-neon text-xs">
                    <option>Normal</option>
                    <option>Multiply</option>
                    <option>Screen</option>
                    <option>Overlay</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 px-2 py-2 bg-dark-700/50 border border-neon-cyan/30 rounded text-xs text-gray-300 hover:bg-dark-600 transition-colors flex items-center justify-center gap-1">
                    <Copy size={14} /> Duplicate
                  </button>
                  <button className="flex-1 px-2 py-2 bg-dark-700/50 border border-red-500/30 rounded text-xs text-red-400 hover:bg-red-900/20 transition-colors flex items-center justify-center gap-1">
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add Layer Button */}
      <div className="border-t border-neon-cyan/20 px-3 py-3 bg-dark-800/80">
        <button className="w-full px-4 py-2 bg-dark-700/50 border border-neon-cyan/30 rounded-lg text-gray-300 text-sm font-medium hover:bg-dark-600 hover:border-neon-cyan/60 transition-all duration-200">
          + Add Layer
        </button>
      </div>
    </div>
  )
}
