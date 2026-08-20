'use client'

import { Upload, Play, Pause, Maximize2, Volume2, RotateCw } from 'lucide-react'
import { useRef, useState } from 'react'

interface MainEditorProps {
  mediaType: string
}

export default function MainEditor({ mediaType }: MainEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [uploadedMedia, setUploadedMedia] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(80)
  const [zoom, setZoom] = useState(100)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setUploadedMedia(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800">
      {/* Canvas Toolbar */}
      <div className="border-b border-neon-cyan/20 px-6 py-4 flex items-center justify-between bg-dark-800/50 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">Zoom:</span>
          <input
            type="range"
            min="50"
            max="200"
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="w-32 accent-accent-cyan"
          />
          <span className="text-sm text-accent-cyan font-semibold">{zoom}%</span>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-dark-700 hover:bg-dark-600 border border-neon-cyan/30 rounded-lg text-gray-300 text-sm transition-all duration-200">
            <RotateCw size={16} className="inline mr-2" />
            Reset
          </button>
          <button className="px-4 py-2 bg-gradient-primary rounded-lg text-white text-sm font-semibold hover:shadow-neon-purple transition-all duration-200">
            <Maximize2 size={16} className="inline mr-2" />
            Fullscreen
          </button>
        </div>
      </div>

      {/* Main Canvas */}
      <div className="flex-1 flex items-center justify-center relative group overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.05)_0%,transparent_70%)] pointer-events-none" />

        {uploadedMedia ? (
          <div className="relative w-full h-full flex items-center justify-center">
            {mediaType === 'video' ? (
              <video
                src={uploadedMedia}
                className="max-w-full max-h-full object-contain"
                style={{ transform: `scale(${zoom / 100})` }}
              />
            ) : mediaType === 'audio' ? (
              <div className="text-center space-y-4">
                <div className="w-32 h-32 bg-gradient-primary/20 rounded-full flex items-center justify-center mx-auto border-2 border-neon-cyan/30">
                  <Volume2 size={64} className="text-accent-cyan animate-pulse" />
                </div>
                <p className="text-gray-300 font-semibold">Audio Ready</p>
              </div>
            ) : (
              <img
                src={uploadedMedia}
                alt="canvas"
                className="max-w-full max-h-full object-contain"
                style={{ transform: `scale(${zoom / 100})` }}
              />
            )}

            {/* Video Controls Overlay */}
            {mediaType === 'video' && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-3 bg-gradient-primary rounded-lg hover:shadow-neon-pink transition-all duration-200 text-white"
                    >
                      {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>
                    <div className="flex-1 h-1 bg-dark-700 rounded-full border border-neon-cyan/20">
                      <div className="h-full bg-gradient-primary rounded-full w-1/3" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-300">
                    <Volume2 size={16} />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={volume}
                      onChange={(e) => setVolume(Number(e.target.value))}
                      className="flex-1 accent-accent-pink"
                    />
                    <span>{volume}%</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center space-y-6 px-8">
            <div className="w-24 h-24 bg-gradient-neon/20 rounded-3xl flex items-center justify-center mx-auto border-2 border-neon-cyan/30 shadow-lg shadow-neon-cyan/10">
              <Upload className="text-accent-cyan" size={48} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gradient-neon mb-2">
                {mediaType === 'image' && 'Import Image'}
                {mediaType === 'video' && 'Import Video'}
                {mediaType === 'audio' && 'Import Audio'}
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                {mediaType === 'image' && 'JPG, PNG, WebP, GIF'}
                {mediaType === 'video' && 'MP4, WebM, MOV (15s-120s, 1080p)'}
                {mediaType === 'audio' && 'MP3, WAV, M4A, OGG'}
              </p>
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-8 py-3 bg-gradient-primary rounded-lg text-white font-semibold hover:shadow-neon-purple transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              Browse Files
            </button>
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileUpload}
              accept={mediaType === 'image' ? 'image/*' : mediaType === 'video' ? 'video/*' : 'audio/*'}
              className="hidden"
            />
          </div>
        )}
      </div>
    </div>
  )
}
