'use client'

import { useState } from 'react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'full' | 'icon'
}

export default function Logo({ size = 'md', variant = 'full' }: LogoProps) {
  const sizeMap = {
    sm: { icon: 24, text: 'text-sm' },
    md: { icon: 32, text: 'text-lg' },
    lg: { icon: 48, text: 'text-2xl' },
  }

  const { icon: iconSize, text: textSize } = sizeMap[size]

  return (
    <div className="flex items-center gap-2">
      {/* Logo Icon - Gradient Badge */}
      <div className="relative">
        {/* Outer gradient container */}
        <div
          style={{
            width: iconSize,
            height: iconSize,
            background: 'linear-gradient(135deg, #9D4EDD 0%, #FF006E 50%, #00D9FF 100%)',
            borderRadius: '12px',
            padding: '2px',
          }}
        >
          {/* Inner dark background */}
          <div
            style={{
              width: '100%',
              height: '100%',
              background: '#0A0A0A',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Gradient overlay effect */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(157, 78, 221, 0.2) 0%, rgba(255, 0, 110, 0.2) 100%)',
              }}
            />

            {/* AI Text */}
            <span
              className={`font-bold bg-gradient-primary bg-clip-text text-transparent relative z-10`}
              style={{ fontSize: iconSize * 0.6 }}
            >
              AI
            </span>
          </div>
        </div>
      </div>

      {/* Logo Text */}
      {variant === 'full' && (
        <div className="flex flex-col leading-tight">
          <span className={`font-bold ${textSize} bg-gradient-primary bg-clip-text text-transparent`}>
            Photo Video
          </span>
          <span
            className={`font-bold ${textSize} bg-gradient-to-r from-accent-pink via-accent-cyan to-accent-pink bg-clip-text text-transparent`}
          >
            Motion Studio
          </span>
          <span className="text-xs text-accent-cyan font-semibold tracking-wider">AI</span>
        </div>
      )}
    </div>
  )
}
