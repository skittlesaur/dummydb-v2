import Head from 'next/head'

const THEME_COLOR = '#ffffff'
const URL = ''
const DEFAULT_OG_IMAGE = '/og-image.png'
const TWITTER_SITE = '@skittlesaur'
const TWITTER_CREATOR = '@skittlesaur'

interface SEOProps {
  title: string
  description?: string
  keywords?: string[]
  ogImage?: string
  searchEngineVisible?: boolean
}

const SEO = (
  {
    title,
    description,
    keywords,
    ogImage = DEFAULT_OG_IMAGE,
    searchEngineVisible = true,
  }: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta name="title" content={title} />
      <meta name="og:title" content={title} />
      <meta name="og:image" content={ogImage} />
      <meta name="og:url" content={URL} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_SITE} />
      <meta name="twitter:creator" content={TWITTER_CREATOR} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="robots" content={searchEngineVisible ? 'index, follow' : 'noindex, nofollow'} />
      <meta
        name="keywords"
        content={keywords && keywords.length > 0 ? keywords.join(', ') : ''}
      />
      <meta name="theme-color" content={THEME_COLOR} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta charSet="utf-8" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/logo.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/logo.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/logo.png"
      />
    </Head>
  )
}

export default SEO