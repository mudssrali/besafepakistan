import Image from 'next/future/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import akhuwatImage from '@/images/avatars/akhuwat.jpg'
import alkhidmatImage from '@/images/avatars/alkhidmat.jpg'
import eidhiImage from '@/images/avatars/eidhi.jpeg'
import rizqImage from '@/images/avatars/share-rizq.jpg'
import saharaImage from '@/images/avatars/sahara.jpg'
import jdcImage from '@/images/avatars/jdc.jpg'
import switImage from '@/images/avatars/swit.jpg'
import handsImage from '@/images/avatars/hands.jpg'
import byacImage from '@/images/avatars/byac.jpg'


const oragnizations = [
  [
    {
      content:
        'Akhuwat is supporting brothers & sisters severely affected by floods in Balochistan, Sindh & South Punjab. As an immediate action, Akhuwat intends to present cash assistance worth Rs. 3 to 4 thousand to approximately 10,000 families for food & basic necessities.',
      author: {
        name: 'Akhuwat',
        role: 'Interest free Microfinance Orgnization',
        image: akhuwatImage,
        link: 'https://donate.akhuwat.org.pk/campaign/1365/flood-relief',
      },
    },
    {
      content:
        'A salute to the efforts of #AlkhidmatVolunteers who are risking their own lives and going above and beyond to save those in need. Even the darkness of the night, the level of flood water and wreckage can not stop our Volunteers.',
      author: {
        name: 'Alkhidmat Foundation Pakistan',
        role: 'Charity Orgnization',
        image: alkhidmatImage,
        link: 'https://alkhidmat.org/',
      },
    },
  ],
  [
    {
      content:
        'Countless families, women and children are left with nothing but hope, and are in desperate need of chooked food, dry ration packs, tents and medical aid. Donate now and help EDHI Foundation save thousands of precious lives.',
      author: {
        name: 'Eidhi Foundation',
        role: 'Donation Platform',
        image: eidhiImage,
        link: 'https://donate.edhi.org/product/flood-relief-campaign/',
      },
    },
    {
      content:
        'Once again, I request that you please support us in raising funds by making a contribution towards flood relief in victimized areas. Sahara for Life Trust has already provided assistance in the efforts of resettlement of the deadliest floods of Pakistan (2010–2011) in the past few years.',
      author: {
        name: 'Sahara',
        role: 'Charitable Organization',
        image: saharaImage,
        link: 'https://saharaforlife.org/donations/flood-relief/',
      },
    }
  ],
  [
    {
      content:
        'Monsoon rains have led to intense flooding across Pakistan. We ask you all to step forward and be someone’s support.',
      author: {
        name: 'Share Rizq',
        role: 'Welfare Orgnization',
        image: rizqImage,
        link: 'https://sharerizq.com/en/campaigns/191',
      },
    },
    {
      content:
        'Flood victims are waiting for your help Together with Selani Welfare, join us in helping these Pakistani brothers who are stuck in trouble.',
      author: {
        name: 'Saylani Welfare International Trust',
        role: 'Welfare Orgnization',
        image: switImage,
        link: 'https://www.saylaniwelfare.com/',
      },
    },
    {
      content: 'Help the flood victims. Victims are waiting for you',
      author: {
        name: 'JDC Foundation',
        role: 'Welfare Organization',
        image: jdcImage,
        link: 'https://jdcwelfare.org/',
      },
    },
  ],
  [
    {
      content: 'The floods in Sindh, Punjab and Balochistan have taken many lives, homes and livelihoods of people. They need your urgent and help and support.',
      author: {
        name: 'HANDS',
        role: 'Non-profit Organization',
        image: handsImage,
        link: 'https://hands.org.pk/ways-to-donate/',
      },
    }
  ],
  [
    {
      content: 'BYAC needs yours support for: send in-kind donations to centres, montery support, applify voices of Balochistan people, become a volunteer.',
      author: {
        name: 'BYAC',
        role: 'Welfare Organization',
        image: byacImage,
        link: 'https://twitter.com/BYACBalochistan',
      },
    },
  ]
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function WelfareOrganizations() {
  return (
    <section
      id="welfare-organizations"
      aria-label="Organizations and People are in Action"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Welfare Organizations in Actions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            There are a lot of organizations, charity funds and individual are
            putting their best efforts in relief work. A few of them shown here
            whom you can support with whatever needed in this time.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {oragnizations.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((org, orgIndex) => (
                  <li key={orgIndex}>
                    <Link href={org.author.link} passHref={true}>
                      <figure className="relative rounded-2xl bg-white hover:bg-blue-300 p-6 shadow-xl shadow-slate-900/10 group">
                        <QuoteIcon className="absolute top-6 left-6 fill-slate-100 group-hover:fill-white/10" />
                        <blockquote className="relative">
                          <p className="text-lg tracking-tight text-slate-900 group-hover:text-white">
                            {org.content}
                          </p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                          <div>
                            <div className="font-display text-base text-slate-900 group-hover:text-white">
                              {org.author.name}
                            </div>

                            <div className="mt-1 text-sm text-slate-500 group-hover:text-white">
                              {org.author.role}
                            </div>
                          </div>
                          <div className="overflow-hidden rounded-full bg-slate-50">
                            <Image
                              className="h-14 w-14 object-cover"
                              src={org.author.image}
                              alt={org.author.name}
                              width={56}
                              height={56}
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </Link>
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
