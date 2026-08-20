'use client'

import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import MainCanvas from '@/components/MainCanvas'
import ToolPanel from '@/components/ToolPanel'
import { useState } from 'react'

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<'image' | 'video' | 'voice'>('image')
  const [uploadedMedia, setUploadedMedia] = useState<string | null>(null)

  return (
    <div className="flex h-screen bg-dark-900 overflow-hidden">
      {/* Sidebar with neon border */}
      <div className="border-r border-neon-purple/30">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header with neon border */}
        <div className="border-b border-neon-purple/30">
          <Header />
        </div>

        {/* Canvas and Tools */}
        <div className="flex-1 flex gap-4 p-6 overflow-hidden bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800">
          {/* Canvas Area with neon border */}
          <div className="flex-1 rounded-xl border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300 overflow-hidden">
            <MainCanvas
              selectedTab={selectedTab}
              uploadedMedia={uploadedMedia}
              setUploadedMedia={setUploadedMedia}
            />
          </div>

          {/* Tool Panel with neon border */}
          <div className="rounded-xl border border-neon-pink/20 hover:border-neon-pink/50 transition-all duration-300 overflow-hidden">
            <ToolPanel selectedTab={selectedTab} />
          </div>
        </div>
      </div>
    </div>
  )
}
