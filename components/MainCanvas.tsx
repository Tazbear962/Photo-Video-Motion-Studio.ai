'use client'

import { Upload, Play, Pause, Volume2, Maximize2 } from 'lucide-react'
import { useRef, useState } from 'react'

interface MainCanvasProps {
  selectedTab: 'image' | 'video' | 'voice'
  uploadedMedia: string | null
  setUploadedMedia: (media: string | null) => void
}

export default function MainCanvas({
  selectedTab,
  uploadedMedia,
  setUploadedMedia,
}: MainCanvasProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoDuration, setVideoDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

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

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="flex-1 flex flex-col gap-4">
      {/* Canvas Display */}
      <div className="flex-1 bg-dark-800 rounded-xl border border-dark-700 overflow-hidden flex items-center justify-center relative group">
        {uploadedMedia ? (
          <div className="w-full h-full relative">
            {selectedTab === 'video' ? (
              <>
                <video
                  src={uploadedMedia}
                  className="w-full h-full object-cover"
                  onLoadedMetadata={(e) => setVideoDuration(e.currentTarget.duration)}
                  onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
                />
                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 gap-3">
                  <div className="bg-dark-800/90 rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-2 bg-accent-pink rounded-lg hover:bg-opacity-80 transition-colors"
                      >
                        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                      </button>
                      <span className="text-sm text-gray-400">
                        {Math.floor(currentTime)}s / {Math.floor(videoDuration)}s
                      </span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <div
                        className="bg-gradient-primary h-2 rounded-full"
                        style={{
                          width: `${(currentTime / videoDuration) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <img src={uploadedMedia} alt="uploaded" className="w-full h-full object-cover" />
            )}
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-primary/20 rounded-2xl flex items-center justify-center mx-auto">
              <Upload className="text-accent-cyan" size={32} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {selectedTab === 'image' && 'Upload an Image'}
                {selectedTab === 'video' && 'Upload a Video'}
                {selectedTab === 'voice' && 'Record or Upload Audio'}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {selectedTab === 'image' && 'Drag and drop or click to select'}
                {selectedTab === 'video' && '(15s - 120s, 1080p/HD)'}
                {selectedTab === 'voice' && 'MP3, WAV, or M4A format'}
              </p>
            </div>
            <button
              onClick={handleUploadClick}
              className="px-6 py-2 bg-gradient-primary rounded-lg text-white font-medium hover:shadow-neon-purple transition-all duration-200"
            >
              Choose File
            </button>
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileUpload}
              accept={selectedTab === 'image' ? 'image/*' : selectedTab === 'video' ? 'video/*' : 'audio/*'}
              className="hidden"
            />
          </div>
        )}

        {/* Action Buttons */}
        {uploadedMedia && (
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="p-2 bg-dark-800/80 hover:bg-dark-700 rounded-lg transition-colors">
              <Maximize2 size={20} className="text-accent-cyan" />
            </button>
          </div>
        )}
      </div>

      {/* Video/Audio Timeline Info */}
      <div className="bg-dark-800 rounded-lg p-4 text-sm text-gray-400">
        {uploadedMedia ? (
          <p>Media loaded • 1080p HD • Ready to process</p>
        ) : (
          <p>No media uploaded yet</p>
        )}
      </div>
    </div>
  )
}
