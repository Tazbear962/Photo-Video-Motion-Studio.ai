'use client'

import {
  Image as ImageIcon,
  Video,
  Mic,
  FileText,
  Cloud,
  Settings,
  Layers,
  Download,
  Zap,
} from 'lucide-react'

interface StudioSidebarProps {
  mediaType: string
  setMediaType: (type: any) => void
  currentView: string
  setCurrentView: (view: any) => void
}

export default function StudioSidebar({
  mediaType,
  setMediaType,
  currentView,
  setCurrentView,
}: StudioSidebarProps) {
  const mediaTypes = [
    { id: 'image', label: 'Image', icon: ImageIcon },
    { id: 'video', label: 'Video', icon: Video },
    { id: 'audio', label: 'Audio', icon: Mic },
  ]

  const views = [
    { id: 'editor', label: 'Editor', icon: Layers },
    { id: 'projects', label: 'Projects', icon: FileText },
    { id: 'library', label: 'Library', icon: Cloud },
    { id: 'export', label: 'Export', icon: Download },
  ]

  return (
    <aside className="w-72 bg-dark-800/50 backdrop-blur-sm border-r border-neon-purple/20 flex flex-col p-6 gap-8 overflow-y-auto">
      {/* Media Type Selection */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-accent-cyan uppercase tracking-widest">Media Type</h3>
        <div className="space-y-2">
          {mediaTypes.map((type) => {
            const Icon = type.icon
            const isActive = mediaType === type.id
            return (
              <button
                key={type.id}
                onClick={() => setMediaType(type.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-primary text-white shadow-neon-purple border border-accent-pink/30'
                    : 'text-gray-400 hover:text-accent-cyan hover:bg-dark-700/50 border border-transparent hover:border-neon-cyan/30'
                }`}
              >
                <Icon size={20} />
                <span className="font-semibold">{type.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="h-px bg-neon-purple/20" />

      {/* View Navigation */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-accent-cyan uppercase tracking-widest">Workspace</h3>
        <div className="space-y-2">
          {views.map((view) => {
            const Icon = view.icon
            const isActive = currentView === view.id
            return (
              <button
                key={view.id}
                onClick={() => setCurrentView(view.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-accent-pink/20 text-accent-pink border border-neon-pink/50 shadow-neon-pink/30'
                    : 'text-gray-400 hover:text-accent-pink hover:bg-dark-700/30 border border-transparent'
                }`}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{view.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="h-px bg-neon-purple/20" />

      {/* Quick Actions */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-accent-cyan uppercase tracking-widest">Quick Access</h3>
        <button className="w-full px-4 py-3 bg-gradient-primary rounded-lg text-white font-semibold hover:shadow-neon-purple transition-all duration-200 flex items-center justify-center gap-2">
          <Zap size={18} />
          New Project
        </button>
        <button className="w-full px-4 py-3 bg-dark-700/50 border border-neon-cyan/30 rounded-lg text-gray-300 font-medium hover:bg-dark-600 hover:border-neon-cyan/60 transition-all duration-200">
          Save Project
        </button>
      </div>

      {/* Settings */}
      <div className="mt-auto pt-6 border-t border-neon-purple/20">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-accent-purple hover:bg-dark-700/30 rounded-lg transition-all duration-200">
          <Settings size={18} />
          <span className="text-sm">Studio Settings</span>
        </button>
      </div>
    </aside>
  )
}
