import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Photo Video Motion Studio.ai',
  description: 'AI-powered media creation and editing platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark-900 text-white">
        {children}
      </body>
    </html>
  )
}
