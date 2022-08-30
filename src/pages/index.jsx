import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { WelfareOrganizations } from '@/components/WelfareOrganizations'
import { ProvincesAtGlance } from '@/components/ProvincesAtGlance'
import { Fundraisers } from '@/components/Fundraisers'

export default function Home() {
  return (
    <>
      <Head>
        <meta
          key="twitter:title"
          name="twitter:title"
          content="BeSafe Pakistan - Flood updates and fundraisers database"
        />
        <meta
          key="og:title"
          property="og:title"
          content="BeSafe Pakistan - Flood updates and fundraisers database"
        />
        <title>Flood Updates &amp; Fundraisers Database</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <ProvincesAtGlance />
        <CallToAction />
        <WelfareOrganizations />
        <Fundraisers />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
