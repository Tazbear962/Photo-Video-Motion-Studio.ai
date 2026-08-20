import { Menu, Bell, User, Settings } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-dark-800 border-b border-dark-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-sm font-bold">
          AI
        </div>
        <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Photo Video Motion Studio.ai
        </h1>
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
