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
        <title>BeSafePakistan - Flood Updates &amp; Fundraisers Database</title>
        <meta
          name="description"
          content="BeSafePakistan - a crowdsourcing platform to provide latest flood updates, database of welfare oragnizations, local fundraisers and volunteers for ongoing flood relief efforts across Pakistan."
        />
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
