export interface MediaFile {
  id: string
  name: string
  type: 'image' | 'video' | 'audio'
  url: string
  size: number
  duration?: number
  uploadedAt: Date
}

export interface Project {
  id: string
  name: string
  thumbnail?: string
  media: MediaFile[]
  tools: ToolApplication[]
  createdAt: Date
  updatedAt: Date
}

export interface ToolApplication {
  id: string
  toolType: string
  settings: Record<string, any>
  appliedAt: Date
  result?: string
}

export interface VoiceSettings {
  voiceType: 'male' | 'female' | 'neutral'
  tone: number
  inflection: number
  pace: number
}
