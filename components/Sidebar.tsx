'use client'

import {
  Image as ImageIcon,
  Video,
  Mic,
  Zap,
  Settings,
  LogOut,
  FileText,
  Cloud,
} from 'lucide-react'

interface SidebarProps {
  selectedTab: 'image' | 'video' | 'voice'
  setSelectedTab: (tab: 'image' | 'video' | 'voice') => void
}

export default function Sidebar({ selectedTab, setSelectedTab }: SidebarProps) {
  const tabs = [
    { id: 'image', label: 'Image', icon: ImageIcon },
    { id: 'video', label: 'Video', icon: Video },
    { id: 'voice', label: 'Voice', icon: Mic },
  ]

  return (
    <aside className="w-64 bg-dark-800 flex flex-col p-6 gap-8 overflow-y-auto">
      {/* Logo */}
      <div className="space-y-2">
        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-neon-purple">
          <Zap className="text-white" size={24} />
        </div>
      </div>

      {/* Main Tabs */}
      <nav className="space-y-3 flex-1">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = selectedTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-primary text-white shadow-neon-purple border border-accent-pink/30'
                  : 'text-gray-400 hover:bg-dark-700 hover:text-accent-cyan hover:border border-neon-cyan/20 border-transparent'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{tab.label}</span>
            </button>
          )
        })}
      </nav>

      {/* Bottom Menu */}
      <nav className="space-y-3 pt-6 border-t border-neon-purple/30">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-accent-cyan hover:bg-dark-700 transition-all duration-200 hover:border border-neon-cyan/20 border-transparent">
          <FileText size={20} />
          <span>Projects</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-accent-pink hover:bg-dark-700 transition-all duration-200 hover:border border-neon-pink/20 border-transparent">
          <Cloud size={20} />
          <span>Cloud Storage</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-accent-purple hover:bg-dark-700 transition-all duration-200 hover:border border-neon-purple/20 border-transparent">
          <Settings size={20} />
          <span>Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-red-400 hover:bg-dark-700 transition-all duration-200">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  )
}
