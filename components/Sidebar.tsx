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
    <aside className="w-64 bg-dark-800 border-r border-dark-700 flex flex-col p-6 gap-8">
      {/* Logo */}
      <div className="space-y-2">
        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
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
                  ? 'bg-gradient-primary text-white shadow-neon-purple'
                  : 'text-gray-400 hover:bg-dark-700'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{tab.label}</span>
            </button>
          )
        })}
      </nav>

      {/* Bottom Menu */}
      <nav className="space-y-3 pt-6 border-t border-dark-700">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-dark-700 transition-colors">
          <FileText size={20} />
          <span>Projects</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-dark-700 transition-colors">
          <Cloud size={20} />
          <span>Cloud Storage</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-dark-700 transition-colors">
          <Settings size={20} />
          <span>Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-dark-700 transition-colors hover:text-red-400">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  )
}
