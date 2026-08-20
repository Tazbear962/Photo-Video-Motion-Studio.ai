'use client'

import Logo from '@/components/Logo'
import { Bell, Settings, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-dark-800 px-6 py-4 flex items-center justify-between backdrop-blur-sm">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <Logo size="sm" variant="full" />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-dark-700 rounded-lg transition-all duration-200 hover:shadow-neon-cyan">
          <Bell size={20} className="text-accent-cyan" />
        </button>
        <button className="p-2 hover:bg-dark-700 rounded-lg transition-all duration-200 hover:shadow-neon-pink">
          <Settings size={20} className="text-accent-pink" />
        </button>
        <button className="p-2 hover:bg-dark-700 rounded-lg transition-all duration-200 hover:shadow-neon-purple">
          <User size={20} className="text-accent-purple" />
        </button>
      </div>
    </header>
  )
}
