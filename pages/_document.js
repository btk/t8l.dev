import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A collection of free developer tools created by t8l.dev for developers, designers, and creators. All tools are free or have generous free tiers." />
        <meta name="keywords" content="developer tools, design tools, free tools, web development, design resources, SVG tools, vector tools" />
        <meta name="author" content="t8l.dev" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://t8l.dev/" />
        <meta property="og:title" content="t8l.dev - Developer Tools" />
        <meta property="og:description" content="A collection of free developer tools created by t8l.dev for developers, designers, and creators." />
        <meta property="og:image" content="https://t8l.dev/logo_white.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://t8l.dev/" />
        <meta property="twitter:title" content="t8l.dev - Developer Tools" />
        <meta property="twitter:description" content="A collection of free developer tools created by t8l.dev for developers, designers, and creators." />
        <meta property="twitter:image" content="https://t8l.dev/logo_white.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "t8l.dev",
              "url": "https://t8l.dev/",
              "description": "A collection of free developer tools created by t8l.dev for developers, designers, and creators.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://t8l.dev/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
