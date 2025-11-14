import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/candidate-dashboard-portal-cards/phoenix-final-step',
          '/candidate-dashboard-portal-cards/legacy-site/archive/nalla-backup',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://treasure-hunt.mishrashardendu22.is-a.dev/sitemap.xml',
  }
}
