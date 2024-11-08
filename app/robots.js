export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: [
        '/admin',
        '/admin/*',
        '/api/*',
        '/private/*',
        '/*.json',
        '/*.xml',
      ]
    },
    sitemap: 'https://acoperis.vercel.app/sitemap.xml',
    host: 'https://acoperis.vercel.app'
  }
} 