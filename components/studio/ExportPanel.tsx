'use client'

import { Download, Settings, FileJson, Play, X } from 'lucide-react'
import { useState } from 'react'

export default function ExportPanel() {
  const [exportFormat, setExportFormat] = useState('mp4')
  const [quality, setQuality] = useState('high')
  const [isExporting, setIsExporting] = useState(false)
  const [exportProgress, setExportProgress] = useState(0)

  const formats = [
    { id: 'mp4', label: 'MP4 (H.264)', desc: 'Best compatibility' },
    { id: 'webm', label: 'WebM (VP9)', desc: 'Web optimized' },
    { id: 'mov', label: 'MOV (ProRes)', desc: 'Professional quality' },
    { id: 'gif', label: 'GIF', desc: 'Animated format' },
    { id: 'png', label: 'PNG Sequence', desc: 'Frame-by-frame' },
  ]

  const qualities = [
    { id: 'low', label: 'Low', bitrate: '2 Mbps' },
    { id: 'medium', label: 'Medium', bitrate: '8 Mbps' },
    { id: 'high', label: 'High (1080p)', bitrate: '15 Mbps' },
    { id: '4k', label: '4K Ultra', bitrate: '50 Mbps' },
  ]

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="border-b border-neon-pink/20 px-8 py-6 bg-dark-800/50 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-gradient-neon mb-2">Export & Render</h2>
        <p className="text-gray-400 text-sm">Configure output settings and render your project</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-8 py-8">
        <div className="max-w-3xl space-y-8">
          {/* Format Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FileJson size={20} className="text-accent-pink" />
              Output Format
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
              {formats.map((fmt) => (
                <button
                  key={fmt.id}
                  onClick={() => setExportFormat(fmt.id)}
                  className={`p-4 rounded-lg border transition-all duration-200 text-center ${
                    exportFormat === fmt.id
                      ? 'bg-gradient-primary border-accent-pink/50 shadow-neon-pink/30'
                      : 'bg-dark-700/50 border-neon-pink/20 hover:border-neon-pink/50'
                  }`}
                >
                  <p className="text-sm font-semibold text-white">{fmt.label}</p>
                  <p className="text-xs text-gray-400 mt-1">{fmt.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Quality Selection */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Settings size={20} className="text-accent-cyan" />
              Quality & Bitrate
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
              {qualities.map((q) => (
                <button
                  key={q.id}
                  onClick={() => setQuality(q.id)}
                  className={`p-4 rounded-lg border transition-all duration-200 text-left ${
                    quality === q.id
                      ? 'bg-accent-cyan/20 border-neon-cyan/50 shadow-neon-cyan/30'
                      : 'bg-dark-700/50 border-neon-cyan/20 hover:border-neon-cyan/50'
                  }`}
                >
                  <p className="text-sm font-semibold text-white">{q.label}</p>
                  <p className="text-xs text-gray-400 mt-1">{q.bitrate}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Advanced Settings */}
          <div className="bg-dark-800/50 border border-neon-purple/20 rounded-xl p-6 space-y-4">
            <h3 className="font-bold text-white">Advanced Settings</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-accent-cyan font-semibold">Frame Rate</label>
                  <select className="w-full input-neon text-sm">
                    <option>24 FPS (Cinema)</option>
                    <option>30 FPS (NTSC)</option>
                    <option>60 FPS (Smooth)</option>
                    <option>120 FPS (High-speed)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-accent-cyan font-semibold">Audio Codec</label>
                  <select className="w-full input-neon text-sm">
                    <option>AAC (Default)</option>
                    <option>MP3</option>
                    <option>FLAC (Lossless)</option>
                    <option>Opus</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-accent-cyan font-semibold">Color Space</label>
                <div className="flex gap-3">
                  {['sRGB', 'Adobe RGB', 'DCI-P3', 'Rec.2020'].map((cs) => (
                    <button
                      key={cs}
                      className="flex-1 px-3 py-2 bg-dark-700/50 border border-neon-cyan/20 rounded text-xs font-medium text-gray-300 hover:border-neon-cyan/50 transition-colors"
                    >
                      {cs}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Export Preview */}
          <div className="bg-dark-800/50 border border-neon-pink/20 rounded-xl p-6 space-y-4">
            <h3 className="font-bold text-white">Export Summary</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Format:</span>
                <span className="text-accent-pink font-semibold">MP4 (H.264)</span>
              </div>
              <div className="flex justify-between">
                <span>Quality:</span>
                <span className="text-accent-pink font-semibold">High (1080p)</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Size:</span>
                <span className="text-accent-pink font-semibold">~2.5 GB</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Time:</span>
                <span className="text-accent-pink font-semibold">~45 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Export Progress */}
      {isExporting && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-dark-800 border border-neon-cyan/30 rounded-xl p-8 max-w-md w-full space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gradient-neon">Rendering...</h3>
              <button className="p-1 hover:bg-dark-700 rounded transition-colors">
                <X size={20} className="text-gray-400" />
              </button>
            </div>
            <div className="space-y-2">
              <div className="w-full h-2 bg-dark-700 rounded-full border border-neon-cyan/20 overflow-hidden">
                <div
                  className="h-full bg-gradient-primary transition-all duration-300"
                  style={{ width: `${exportProgress}%` }}
                />
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Rendering in progress...</span>
                <span className="text-accent-cyan font-semibold">{exportProgress}%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Actions */}
      <div className="border-t border-neon-pink/20 px-8 py-6 bg-dark-800/80 flex gap-3 justify-end">
        <button className="px-6 py-3 bg-dark-700/50 border border-neon-cyan/30 rounded-lg text-white font-semibold hover:bg-dark-600 transition-all duration-200">
          Save Settings
        </button>
        <button
          onClick={() => {
            setIsExporting(true)
            const interval = setInterval(() => {
              setExportProgress((p) => {
                if (p >= 100) {
                  clearInterval(interval)
                  setIsExporting(false)
                  return 0
                }
                return p + Math.random() * 15
              })
            }, 500)
          }}
          className="px-8 py-3 bg-gradient-primary rounded-lg text-white font-semibold hover:shadow-neon-purple transition-all duration-200 flex items-center gap-2"
        >
          <Download size={20} />
          Start Export
        </button>
      </div>
    </div>
  )
}
