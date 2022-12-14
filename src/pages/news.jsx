import { Header } from '@/components/Header'
import { NewsHero } from '@/components/NewsHero'
import { Footer } from '@/components/Footer'
import { NewsLinks } from '@/components/NewsLinks'

export default function News() {
  return (
    <>
      <Header />
      <main>
        <NewsHero />
        <NewsLinks />
        <Footer />
      </main>
    </>
  )
}

News.layoutProps = {
  meta: {
    title: 'Pakistan 2022 floods news coverage',
    description:
      'Heavy flooding in Pakistan is being reported and watched across the globe - Pakistan Blames Climate Change for Deadly Floods, Declares Emergency',
  },
}
