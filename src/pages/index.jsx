import Head from 'next/head'
import Script from 'next/script'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { WelfareOrganizations } from '@/components/WelfareOrganizations'
import { ProvincesAtGlance } from '@/components/ProvincesAtGlance'
import { Fundraisers } from '@/components/Fundraisers'

const GA_ID = 'G-58K2HYYGKW'

export default function Home() {
  const host = window.location.hostname

  return (
    <>
      {host !== 'localhost' && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_ID}');
        `}
          </Script>
        </>
      )}
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
