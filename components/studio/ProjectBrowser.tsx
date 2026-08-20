'use client'

import { FileText, Trash2, Share2, Edit2, Download as DownloadIcon } from 'lucide-react'
import { useState } from 'react'

export default function ProjectBrowser() {
  const [projects] = useState([
    { id: 1, name: 'Portrait Editing Session', date: '2026-08-20', size: '250MB', thumbnail: '🖼️' },
    { id: 2, name: 'Video Composition Project', date: '2026-08-19', size: '1.2GB', thumbnail: '🎥' },
    { id: 3, name: 'Voice Over Recording', date: '2026-08-18', size: '45MB', thumbnail: '🎤' },
    { id: 4, name: 'Motion Graphics', date: '2026-08-17', size: '680MB', thumbnail: '✨' },
  ])

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="border-b border-neon-purple/20 px-8 py-6 bg-dark-800/50 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-gradient-neon mb-2">Projects Library</h2>
        <p className="text-gray-400 text-sm">Manage and organize your creative projects</p>
      </div>

      {/* Projects Grid */}
      <div className="flex-1 overflow-y-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-dark-800/50 backdrop-blur-sm border border-neon-purple/20 rounded-xl overflow-hidden hover:border-neon-purple/50 transition-all duration-300 hover:shadow-neon-purple/20 hover:shadow-lg"
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-accent-cyan/10 to-accent-pink/10 flex items-center justify-center text-4xl border-b border-neon-purple/20">
                {project.thumbnail}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-accent-cyan transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{project.date} • {project.size}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2 border-t border-neon-purple/20">
                  <button className="flex-1 px-3 py-2 bg-gradient-primary rounded-lg text-white text-sm font-semibold hover:shadow-neon-purple transition-all duration-200 flex items-center justify-center gap-2">
                    <Edit2 size={16} /> Open
                  </button>
                  <button className="p-2 bg-dark-700/50 border border-neon-cyan/30 rounded-lg text-gray-300 hover:bg-dark-600 transition-colors">
                    <Share2 size={16} />
                  </button>
                  <button className="p-2 bg-dark-700/50 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-900/20 transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
