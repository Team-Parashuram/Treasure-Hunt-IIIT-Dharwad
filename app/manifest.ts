import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: 'kya-tumhe-naukri-milegi',
    name: 'Kya Tumhe Naukri Milegi? - The Ultimate Job Hunting Adventure',
    short_name: 'Naukri Milegi?',
    description: 'Test your hacking skills in this epic treasure hunt! Solve riddles, bypass HR gates, and prove you deserve the job.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    display_override: ['window-controls-overlay', 'standalone', 'minimal-ui'],
    background_color: '#000000',
    theme_color: '#ff8c00',
    orientation: 'portrait-primary',
    dir: 'ltr',
    lang: 'en-US',
    categories: ['games', 'entertainment', 'puzzle', 'education'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    screenshots: [
      {
        src: '/memes/This-Is-Fine-Dog-Fire-Meme-Sticker.webp',
        sizes: '600x340',
        type: 'image/webp',
        label: 'Kya Tumhe Naukri Milegi? - Game Screenshot',
      },
    ],
    shortcuts: [
      {
        name: 'Leaderboard',
        short_name: 'Leaders',
        description: 'View the top performers',
        url: '/leaderboard',
        icons: [{ src: '/icon-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'Start Challenge',
        short_name: 'Play',
        description: 'Begin the treasure hunt',
        url: '/candidate-dashboard-portal-cards',
        icons: [{ src: '/icon-192x192.png', sizes: '192x192' }],
      },
    ],
    related_applications: [],
    prefer_related_applications: false,
  }
}
