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
    <div className="flex h-screen bg-dark-900">
      {/* Sidebar */}
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Canvas and Tools */}
        <div className="flex-1 flex gap-6 p-6 overflow-hidden">
          {/* Canvas Area */}
          <MainCanvas
            selectedTab={selectedTab}
            uploadedMedia={uploadedMedia}
            setUploadedMedia={setUploadedMedia}
          />

          {/* Tool Panel */}
          <ToolPanel selectedTab={selectedTab} />
        </div>
      </div>
    </div>
  )
}
