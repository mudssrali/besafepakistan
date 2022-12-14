import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotBalochistan from '@/images/screenshots/flood-in-balochistan.jpg'
import screenshotSindh from '@/images/screenshots/sindh-flood-street.webp'
import screenshotGB from '@/images/screenshots/gb-bridge-collapsed.webp'
import screenshotKPK from '@/images/screenshots/kpk-road-destroyed.jpg'
import screenshotPunjab from '@/images/screenshots/punjab-relief-work.webp'
import backgroundPrimaryImage from '@/images/background-primary.jpg'

const provinces = [
  {
    title: 'Balochistan',
    description:
      'Flooding in Balochistan killed 263 people. In many areas, rainwater infiltrated many homes and made them uninhabitable. Many families were displaced.',
    image: screenshotBalochistan,
  },
  {
    title: 'Gilgit Baltistan',
    description:
      'Since July, a total of at least 221 people were killed, four are missing and floods badly affected the Karakoram Highway. Roads were closed for traffic at several places due to landslides',
    image: screenshotGB,
  },
  {
    title: 'KPK',
    description:
      'Since July, a total of at least 293 people have been killed and more than 600,000 others were displaced by floods.',
    image: screenshotKPK,
  },
  {
    title: 'Punjab',
    description:
      'In Punjab, mainly affecting the southern region of the province, a total of 191 people have died and more than 100 others suffered injuries in recent floods.',
    image: screenshotPunjab,
  },
  {
    title: 'Sindh',
    description:
      'At least 577 people have been killed and more than 1,000 have been injured by floods in Sindh. Among the fatalities were three young children, who died when the roof of their house collapsed in Kandhkot.',
    image: screenshotSindh,
  },
]

export function ProvincesAtGlance() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="provinces-at-glance"
      aria-label="provinces after by floods"
      className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundPrimaryImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Flood Desvastion Continues Across Pakistan
          </h2>
          <p className="mt-6 text-lg font-semibold tracking-tight text-blue-100">
            More than 33 million people have been displaced as destructive
            monsoon rains continue to wreak havoc
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {provinces.map((province, provinceIndex) => (
                    <div
                      key={province.title}
                      className={clsx(
                        'group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
                        selectedIndex === provinceIndex
                          ? 'bg-white/20 lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/40'
                          : 'hover:bg-white/10 lg:hover:bg-white/5'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg  font-normal sm:font-medium [&:not(:focus-visible)]:focus:outline-none',
                            selectedIndex === provinceIndex
                              ? 'text-white/95 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white'
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                          {province.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === provinceIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white'
                        )}
                      >
                        {province.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {provinces.map((province) => (
                  <Tab.Panel key={province.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {province.description}
                      </p>
                    </div>
                    <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={province.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
