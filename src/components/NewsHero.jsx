import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoBbc from '@/images/logos/bbc.svg'
import logoCnn from '@/images/logos/cnn.svg'
import logoDW from '@/images/logos/dw.svg'
import logoDAWN from '@/images/logos/dawn.png'
import logoReuters from '@/images/logos/reuters.svg'
import logoTheNews from '@/images/logos/the-news.svg'
import logoCbs from '@/images/logos/cbs.svg'
import logoAlJazeera from '@/images/logos/al-jazeera.svg'
import logoGuardian from '@/images/logos/guardian.png'

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#A3A3A3"
        stroke="#A3A3A3"
      />
    </svg>
  )
}

export function NewsHero() {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        World is watching{' '}
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">Heavy Flooding</span>
        </span>{' '}
        across the Pakistan.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Millions of people have been affected by floods in Pakistan, hundreds
        have been killed, and the government has declared a national emergency.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="https://www.aljazeera.com/gallery/2022/8/28/photos-pakistan-monsoon-flooding-death-toll-tops-1000">
          Visit AlJazeera
        </Button>
        <Button
          href="https://www.washingtonpost.com/world/interactive/2022/pakistan-floods-monsoon-climate-change/"
          variant="outline"
        >
          <PlayIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Watch Flood Videos</span>
        </Button>
      </div>
      <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">As covered in</p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'DW', logo: logoDW },
              { name: 'CNN', logo: logoCnn },
              { name: 'BBC', logo: logoBbc },
            ],
            [
              { name: 'AlJazeera', logo: logoAlJazeera },
              { name: 'CBS', logo: logoCbs },
              { name: 'Guardian', logo: logoGuardian },
            ],
            [
              { name: 'The News', logo: logoTheNews },
              { name: 'DAWN', logo: logoDAWN },
              { name: 'Reuters', logo: logoReuters },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image
                      src={company.logo}
                      className="h-14 w-24"
                      alt={company.name}
                      unoptimized
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
