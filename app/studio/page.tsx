'use client'

import { useState } from 'react'
import StudioHeader from '@/components/studio/StudioHeader'
import StudioSidebar from '@/components/studio/StudioSidebar'
import MainEditor from '@/components/studio/MainEditor'
import EffectsPanel from '@/components/studio/EffectsPanel'
import LayersPanel from '@/components/studio/LayersPanel'
import ProjectBrowser from '@/components/studio/ProjectBrowser'
import ExportPanel from '@/components/studio/ExportPanel'

type View = 'editor' | 'projects' | 'library' | 'export'
type MediaType = 'image' | 'video' | 'audio'

export default function StudioPage() {
  const [currentView, setCurrentView] = useState<View>('editor')
  const [mediaType, setMediaType] = useState<MediaType>('image')
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [showEffectsPanel, setShowEffectsPanel] = useState(true)
  const [showLayersPanel, setShowLayersPanel] = useState(true)
  const [renderingQueue, setRenderingQueue] = useState(0)

  return (
    <div className="min-h-screen bg-dark-900 text-white flex flex-col overflow-hidden">
      {/* Header */}
      <StudioHeader
        currentView={currentView}
        setCurrentView={setCurrentView}
        renderingQueue={renderingQueue}
      />

      {/* Main Studio Area */}
      <div className="flex-1 flex overflow-hidden gap-0">
        {/* Left Sidebar */}
        <StudioSidebar
          mediaType={mediaType}
          setMediaType={setMediaType}
          currentView={currentView}
          setCurrentView={setCurrentView}
        />

        {/* Center Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {currentView === 'editor' && (
            <MainEditor mediaType={mediaType} />
          )}
          {currentView === 'projects' && (
            <ProjectBrowser />
          )}
          {currentView === 'export' && (
            <ExportPanel />
          )}
        </div>

        {/* Right Panels */}
        {currentView === 'editor' && (
          <div className="flex gap-0 border-l border-neon-cyan/20">
            {/* Effects Panel */}
            {showEffectsPanel && (
              <EffectsPanel
                mediaType={mediaType}
                onClose={() => setShowEffectsPanel(false)}
              />
            )}

            {/* Layers Panel */}
            {showLayersPanel && (
              <LayersPanel
                onClose={() => setShowLayersPanel(false)}
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
