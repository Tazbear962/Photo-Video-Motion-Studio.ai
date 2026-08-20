import Logo from '@/components/Logo'
import { Menu, Bell, User, Settings } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-dark-800 border-b border-dark-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Logo size="sm" variant="full" />
      </div>

      <div className="flex items-center gap-6">
        <button className="p-2 hover:bg-dark-700 rounded-lg transition-colors">
          <Bell size={20} className="text-gray-400" />
        </button>
        <button className="p-2 hover:bg-dark-700 rounded-lg transition-colors">
          <Settings size={20} className="text-gray-400" />
        </button>
        <button className="p-2 hover:bg-dark-700 rounded-lg transition-colors">
          <User size={20} className="text-gray-400" />
        </button>
      </div>
    </header>
  )
}
