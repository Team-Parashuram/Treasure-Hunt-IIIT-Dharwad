import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kya Tumhe Naukri Milegi? - The Ultimate Job Hunting Adventure',
    short_name: 'Naukri Milegi?',
    description: 'Test your hacking skills in this epic treasure hunt! Solve riddles, bypass HR gates, and prove you deserve the job.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#ff8c00',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
