/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // *.t8l.dev and t8l.dev — all t8l tools (no need to add each new tool)
    remotePatterns: [
      { protocol: 'https', hostname: '**.t8l.dev', pathname: '/**' },
      { protocol: 'https', hostname: 't8l.dev', pathname: '/**' },
      { protocol: 'http', hostname: '**.t8l.dev', pathname: '/**' },
      { protocol: 'http', hostname: 't8l.dev', pathname: '/**' },
      // External tools
      { protocol: 'https', hostname: 'www.iconrepo.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.svgrepo.com', pathname: '/**' },
      { protocol: 'https', hostname: 'svgapi.com', pathname: '/**' },
      { protocol: 'https', hostname: 'opendesign.fyi', pathname: '/**' },
      { protocol: 'https', hostname: 'www.svgfind.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.vectormixer.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.svgvector.com', pathname: '/**' },
      { protocol: 'https', hostname: 'text2icon.app', pathname: '/**' },
      { protocol: 'https', hostname: 'www.carbonneutralwebsite.org', pathname: '/**' },
      { protocol: 'https', hostname: 'vectormaker.co', pathname: '/**' },
      { protocol: 'https', hostname: 'www.meltingface.org', pathname: '/**' },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig 