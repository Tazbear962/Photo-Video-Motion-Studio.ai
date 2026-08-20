'use client'

import { Zap, MoreVertical, Settings, LogOut } from 'lucide-react'
import Logo from '@/components/Logo'

interface StudioHeaderProps {
  currentView: string
  setCurrentView: (view: any) => void
  renderingQueue: number
}

export default function StudioHeader({
  currentView,
  setCurrentView,
  renderingQueue,
}: StudioHeaderProps) {
  return (
    <header className="bg-dark-800/80 backdrop-blur-xl border-b border-neon-cyan/20 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <Logo size="sm" variant="full" />
        <div className="h-8 w-px bg-neon-purple/30" />
        <span className="text-sm font-semibold text-accent-cyan uppercase tracking-wider">
          Professional Studio
        </span>
      </div>

      <div className="flex items-center gap-6">
        {/* Rendering Status */}
        {renderingQueue > 0 && (
          <div className="flex items-center gap-2 px-4 py-2 bg-accent-pink/10 border border-neon-pink/30 rounded-lg">
            <div className="w-2 h-2 bg-accent-pink rounded-full animate-pulse" />
            <span className="text-xs text-accent-pink font-medium">
              {renderingQueue} rendering
            </span>
          </div>
        )}

        {/* Quick Stats */}
        <div className="flex items-center gap-6 text-xs text-gray-400 border-r border-neon-purple/30 pr-6">
          <div>
            <span className="text-accent-cyan">Resolution:</span> 1080p
          </div>
          <div>
            <span className="text-accent-cyan">FPS:</span> 60
          </div>
        </div>

        {/* Actions */}
        <button className="p-2 hover:bg-dark-700 rounded-lg transition-all duration-200 hover:shadow-neon-cyan">
          <Settings size={20} className="text-gray-400" />
        </button>
        <button className="p-2 hover:bg-dark-700 rounded-lg transition-all duration-200 hover:shadow-neon-pink">
          <LogOut size={20} className="text-gray-400" />
        </button>
      </div>
    </header>
  )
}
