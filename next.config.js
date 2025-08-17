/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'singularity.t8l.dev',
      'onepager.t8l.dev',
      't8l.dev',
      'steamreviewanalyzer.t8l.dev',
      'sitemanifest.t8l.dev',
      'tinysvg.t8l.dev',
      'www.iconrepo.com',
      'www.svgrepo.com',
      'svgapi.com',
      'opendesign.fyi',
      'www.svgfind.com',
      'www.vectormixer.com',
      'www.svgvector.com',
      'text2icon.app',
      'www.carbonneutralwebsite.org',
      'vectormaker.co',
      'www.meltingface.org'
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig 