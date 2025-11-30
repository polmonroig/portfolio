import type { MetadataRoute } from 'next'

// Generate a static sitemap at build time
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pol.company'

  // Known static routes in the app
  const routes = [
    '/',
    '/projects',
    '/projects/aiart',
    '/projects/baba_is_you',
    '/projects/bayesian_model_builder',
    '/projects/cokoon',
    '/projects/studio',
  ] as const

  const now = new Date()

  return routes.map((path) => {
    // Tune priorities and frequencies per section
    const isHome = path === '/'
    const isProjectsIndex = path === '/projects'
    return {
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency: 'always',
      priority: isHome ? 1.0 : isProjectsIndex ? 0.8 : 0.7,
    }
  })
}