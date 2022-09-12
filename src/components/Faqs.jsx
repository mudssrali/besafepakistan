import Image from 'next/future/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What are the sources of information on this website?',
      answer:
        'Most of the stats are quoted from renowned local and international news agencies including Al-Jazeera, Reuters, the Guardian, Arab News, the News and so on',
    },
    {
      question: 'Are the stats on this websites are updated?',
      answer:
        'Absolutely, we are trying our best to update the stats on the daily bases.',
    },
    {
      question:
        'Welfare organizations on this website are authentic and registerd in Pakistan?',
      answer:
        'Yes, all the welfare organizations on this website are authentic and registered in Pakistan.',
    },
  ],
  [
    {
      question:
        "Is the welfare organizations' account details are valid to donate?",
      answer:
        'Yes, we quoted the details as it is mentioned on their offical websites.',
    },
    {
      question: 'Is the fundraisers information valid and double-checked?',
      answer:
        "As it's crowdsourcing platform, we haven't be able to check the authencity of the provided details at the moment. However we're trying our best to verify them.",
    },
    {
      question:
        'Would volunteers data kept private other than government or welfare organizations?',
      answer:
        "Absolutely, we would make sure your to keep your data private and don't use for any other purpose.",
    },
  ],
  [
    {
      question: 'Can I contribute to this platform?',
      answer:
        'Yes, we need like-minded people to help running this platform by sharing authentic information to general public.',
    },
    {
      question: 'Who maintains this website?',
      answer:
        "This website is built and maintained by Mudassar, who's manager (software development) at CERP Labs.",
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can&apos;t find what you’re looking for, email to{' '}
            <Link
              href={'https://mudssrali.com/contact'}
              passHref={true}
              className="text-blue-500 underline"
            >
              Mudassar
            </Link>{' '}
            and if you&apos;re lucky he will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
