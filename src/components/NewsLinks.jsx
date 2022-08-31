import clsx from 'clsx'
import Image from 'next/future/image'
import { useState } from 'react'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'

import newsLinks from '@/constants/news.json'
import { Container } from '@/components/Container'

import backgroundImage from '@/images/background-newslinks.jpg'
import logoDw from '@/images/logos/dw.svg'
import logoCnn from '@/images/logos/cnn.svg'
import logoCbs from '@/images/logos/cbs.svg'
import logoBbc from '@/images/logos/bbc.svg'
import logoAlJazeera from '@/images/logos/al-jazeera.svg'
import logoGuardian from '@/images/logos/guardian.png'
import logoWashingtonPost from '@/images/logos/washington-post.svg'
import logoReliefWeb from '@/images/logos/relief-web.svg'
import logoTheNation from '@/images/logos/the-nation.png'
import logoTheNews from '@/images/logos/the-news.svg'
import logoDawn from '@/images/logos/dawn.png'
import logoReuters from '@/images/logos/reuters.svg'
import logoHindustanTimes from '@/images/logos/hindustan-times.svg'
import logoTime from '@/images/logos/time.png'
import logoHoshyarPakistan from '@/images/logos/hoshyar-pakistan.png'
import logoVoa from '@/images/logos/voa.svg'
import logoNdtv from '@/images/logos/ndtv.jpg'
import logoBusinessStandard from '@/images/logos/business-standard.png'

const logos = {
  dw: logoDw,
  cnn: logoCnn,
  cbs: logoCbs,
  bbc: logoBbc,
  'al-jazeera': logoAlJazeera,
  guardian: logoGuardian,
  'washington-post': logoWashingtonPost,
  'relief-web': logoReliefWeb,
  'the-news': logoTheNews,
  'the-nation': logoTheNation,
  dawn: logoDawn,
  'hindustan-times': logoHindustanTimes,
  time: logoTime,
  reuters: logoReuters,
  voa: logoVoa,
  ndtv: logoNdtv,
  'business-standard': logoBusinessStandard,
  'hoshyar-pakistan': logoHoshyarPakistan,
}

export function NewsLinks() {
  return (
    <section
      id="#reporting"
      aria-label="News reporting by world news agencies"
      className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Take a look at the Latest news
          </h2>
          <p className="mt-6 text-lg tracking-tight text-white">
            World renowned news broadcasting agencies, organizations observing
            and giving coverage to heavy flooding in Pakistan and reporting
            terrible stats.
          </p>
          <News />
        </div>
      </Container>
    </section>
  )
}

export default function News() {
  // take latest news date
  const [date] = Object.entries(newsLinks).sort(([a], [b]) =>
    b.localeCompare(a)
  )[0]

  const [newsDate, setNewsDate] = useState(date)

  const links = newsLinks[newsDate].sort((a, b) => a.from.localeCompare(b.from))

  return (
    <>
      <div className="flex justify-end">
        <DateSelector onChange={setNewsDate} selectedDate={newsDate} />
      </div>
      <div className="mt-2 divide-y divide-gray-200 overflow-hidden rounded-lg shadow sm:grid sm:grid-cols-2 sm:gap-1 sm:divide-y-0">
        {links.map((nl, linkIdx) => (
          <div
            key={nl.title}
            className={clsx(
              linkIdx === 0
                ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                : '',
              linkIdx === 1 ? 'sm:rounded-tr-lg' : '',
              linkIdx === links.length - 2 ? 'sm:rounded-bl-lg' : '',
              linkIdx === links.length - 1
                ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                : '',
              'group relative bg-white/80 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 hover:bg-white/60'
            )}
          >
            <div className="flex">
              <span
                className={
                  'inline-flex h-12 w-24 rounded-lg bg-white/75 p-3 ring-1  ring-white group-hover:bg-white'
                }
              >
                <Image src={logos[nl.imageTitle]} alt={nl.from} unoptimized />
              </span>
            </div>
            <div className="mt-2 space-y-1 text-left">
              <h3 className="font-semibold">
                <a href={nl.link} className="font-bold focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {nl.from}
                </a>
              </h3>
              <p className="text-gray-700">{nl.title}</p>
              <p className="text-xs italic text-gray-500">Date: {date}</p>
            </div>
            <span aria-hidden="true">
              <ArrowUpRightIcon className="pointer-events-none absolute top-6 right-6 h-6 w-6 text-gray-500 group-hover:text-gray-700" />
            </span>
          </div>
        ))}
      </div>
    </>
  )
}

function DateSelector({ onChange, selectedDate }) {
  const newsDates = Object.keys(newsLinks).sort((a, b) => b.localeCompare(a))

  return (
    <select
      id="newsDate"
      name="newsDate"
      value={selectedDate}
      onChange={(event) => onChange(event.target.value)}
      className="mt-1 block rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
    >
      {newsDates.map((d) => (
        <option key={d} value={d}>
          {d}
        </option>
      ))}
    </select>
  )
}
