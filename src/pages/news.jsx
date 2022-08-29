import Head from 'next/head'
import { Header } from '@/components/Header'
import { NewsHero } from '@/components/NewsHero'
import { Footer } from '@/components/Footer'
import { NewsLinks } from '@/components/NewsLinks'

function News() {
  return (
    <>
      <Head>
        <title>BeSafePakistan - Global Coverage</title>
        <meta
          name="description"
          content="BeSafePakistan - Heavy flooding in Pakistan is being reported and watched across the globe"
        />
      </Head>
      <Header />
      <main>
        <NewsHero />
        <NewsLinks />
        <Footer />
      </main>
    </>
  )
}

export default News
