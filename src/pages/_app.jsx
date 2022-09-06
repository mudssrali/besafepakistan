import Head from 'next/head'

import { Title } from '@/components/Title'

import 'focus-visible'
import '@/styles/tailwind.css'

import socialCardLarge from '@/images/social-card-large.png'

export default function App({ Component, pageProps, router }) {
  const meta = Component.layoutProps?.meta || {}  
  const description =
    meta.metaDescription ||
    meta.description ||
    'A crowdsourcing platform to provide latest Pakistan 2022 floods updates, database of local and international welfare organizations, and fundraisers'

  return (
    <>
      <Title suffix={"BeSafePakistan"}>{meta.metaTitle || meta.title}</Title>
      <Head>
        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta key="twitter:site" name="twitter:site" content="@besafepakistan" />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={description}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={`https://besafepakistan.com${socialCardLarge.src}`}
        />
        <meta
          key="twitter:creator"
          name="twitter:creator"
          content="@besafepakistan"
        />
        <meta
          key="og:url"
          property="og:url"
          content={`https://besafepakistan.com${router.pathname}`}
        />
        <meta key="og:type" property="og:type" content="article" />
        <meta
          key="og:description"
          property="og:description"
          content={description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={`https://besafepakistan.com${socialCardLarge.src}`}
        />
        <meta name="description" content={description} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
