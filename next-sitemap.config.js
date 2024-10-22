/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.est1373.de',  // Ohne Slash am Ende!
    generateRobotsTxt: true,
    additionalPaths: async (config) => {
      const result = []
      
      // Ihre spezifischen Seiten
      const pages = [
        '/',
        '/botope',
        '/about',
        '/ideen',
        '/shop'
      ]
      
      for (const page of pages) {
        result.push({
          loc: page,
          changefreq: 'daily',
          priority: 0.7,
          lastmod: new Date().toISOString(),
        })
      }
      
      return result
    },
    exclude: ['/api/*']
  }