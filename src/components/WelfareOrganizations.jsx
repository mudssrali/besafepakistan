import Image from 'next/future/image'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

import { Container } from '@/components/Container'
import imageAkhuwat from '@/images/avatars/akhuwat.jpg'
import imageAlkhidmat from '@/images/avatars/alkhidmat.jpg'
import imageEidhi from '@/images/avatars/eidhi.jpeg'
import imageRizq from '@/images/avatars/share-rizq.jpg'
import imageSahara from '@/images/avatars/sahara.jpg'
import imageJdc from '@/images/avatars/jdc.jpg'
import imageSwit from '@/images/avatars/swit.jpg'
import imageHands from '@/images/avatars/hands.jpg'
import imageDawn from '@/images/logos/dawn.png'
import imageDawateIslami from '@/images/avatars/dawate-islami.jpg'
import imageSAF from '@/images/avatars/shahid-afridi-foundation.png'

import imageAgosh from '@/images/avatars/agosh.jpeg'
import imageAkhuwatUs from '@/images/avatars/akhuwat-us.jpeg'
import imageHhrd from '@/images/avatars/hhrd.jpg'
import imageHidaya from '@/images/avatars/hidaya.jpeg'
import imageHope from '@/images/avatars/hope.jpeg'
import imageHumanDevelopment from '@/images/avatars/human-development.jpeg'
import imageIcare from '@/images/avatars/icare.jpeg'
import imageIslamicRelief from '@/images/avatars/islamic-relief.jpg'
import imageMuslimAid from '@/images/avatars/muslim-aid.jpeg'
import imageMwf from '@/images/avatars/mwf.jpeg'
import imagePaksef from '@/images/avatars/paksef.jpeg'
import imagePaani from '@/images/avatars/paani.jpeg'
import imageMausa from '@/images/avatars/mausa.jpg'
import imageTcfUs from '@/images/avatars/tcfus.jpeg'
import imageZakatUs from '@/images/avatars/zakat-us.jpg'
import imageMuslimHands from '@/images/avatars/muslim-hands.jpg'
import imageTransparentHands from '@/images/avatars/transparent-hands.jpg'

const oragnizations = [
  [
    {
      content:
        'Akhuwat is supporting brothers & sisters severely affected by floods in Balochistan, Sindh & South Punjab. As an immediate action, Akhuwat intends to present cash assistance worth Rs. 3 to 4 thousand to approximately 10,000 families for food & basic necessities.',
      name: 'Akhuwat',
      role: 'Interest free Microfinance Orgnization',
      image: imageAkhuwat,
      link: 'https://akhuwat.org.pk',
      donateLink: 'https://donate.akhuwat.org.pk/campaign/1365/flood-relief',
      accountInfo: {
        bankName: 'Meezan Bank',
        accountTitle: 'Akhuwat (Awami Pool)',
        accountNumber: '02220100172932',
        IBAN: 'PK35MEZN0002220100172932',
        swiftCode: 'MEZNPKKA',
      },
    },
    {
      content:
        'A salute to the efforts of #AlkhidmatVolunteers who are risking their own lives and going above and beyond to save those in need. Even the darkness of the night, the level of flood water and wreckage can not stop our Volunteers.',
      name: 'Alkhidmat Foundation Pakistan',
      role: 'Charity Orgnization',
      image: imageAlkhidmat,
      link: 'https://alkhidmat.org',
      donateLink: 'https://alkhidmat.org/akf-donations.php',
      accountInfo: {
        bankName: 'Meezan Bank',
        accountTitle: 'Al-Khidmat Foundation Pakistan',
        accountNumber: '02140100861151',
        IBAN: 'PK35MEZN0002140100861151',
        swiftCode: 'MEZNPKKA',
      },
    },
  ],
  [
    {
      content:
        'Countless families, women and children are left with nothing but hope, and are in desperate need of chooked food, dry ration packs, tents and medical aid. Donate now and help EDHI Foundation save thousands of precious lives.',
      name: 'Eidhi Foundation',
      role: 'Donation Platform',
      image: imageEidhi,
      link: 'https://edhi.org',
      donateLink: 'https://donate.edhi.org/product/flood-relief-campaign/',
      accountInfo: {
        bankName: 'MCB Islamic Bank',
        accountTitle: 'Abdul Sattar Edhi',
        accountNumber: '1271001064790004',
        IBAN: 'PK72MCIB1271001064790004',
        swiftCode: 'MCIBPKKI',
      },
    },
    {
      content:
        'Once again, I request that you please support us in raising funds by making a contribution towards flood relief in victimized areas. Sahara for Life Trust has already provided assistance in the efforts of resettlement of the deadliest floods of Pakistan (2010–2011) in the past few years.',
      name: 'Sahara',
      role: 'Charitable Organization',
      image: imageSahara,
      link: 'https://saharaforlife.org',
      donateLink: 'https://saharaforlife.org/donations/flood-relief/',
      accountInfo: {
        bankName: 'Muslim Commercial Bank',
        accountTitle: 'Sahara Trust',
        accountNumber: '096303010000340',
        IBAN: 'PK81MUCB0096303010000340',
        swiftCode: '',
      },
    },
  ],
  [
    {
      content:
        'Monsoon rains have led to intense flooding across Pakistan. We ask you all to step forward and be someone’s support.',
      name: 'Share Rizq',
      role: 'Welfare Orgnization',
      image: imageRizq,
      link: 'https://sharerizq.com',
      donateLink: 'https://sharerizq.com/en/campaigns/191',
      accountInfo: {
        bankName: 'Bank Islami',
        accountTitle: 'Rizq Trust',
        accountNumber: '204300255930001',
        IBAN: 'PK70BKIP0204300255930001',
        swiftCode: 'BKIPPKKA',
      },
    },
    {
      content:
        'Flood victims are waiting for your help Together with Selani Welfare, join us in helping these Pakistani brothers who are stuck in trouble.',
      name: 'Saylani Welfare International Trust',
      role: 'Welfare Orgnization',
      image: imageSwit,
      link: 'https://www.saylaniwelfare.com/',
      donateLink: 'https://www.saylaniwelfare.com/en/donate',
      accountInfo: {
        bankName: 'Dubai Islamic Bank',
        accountTitle: 'Saylani Welfare',
        accountNumber: '0010011036001',
        IBAN: 'PK46DUIB0000000011036001',
        swiftCode: 'DUIBPKKA',
      },
    },
  ],
  [
    {
      content:
        'FGRF is working day and night to help the flood victims. Donation camps established at various places under FGRF for relief in flood affected areas.',
      name: 'Dawat-e-Islami',
      role: 'Non-political Islamic organization',
      image: imageDawateIslami,
      link: 'https://www.dawateislami.net',
      donateLink: 'https://www.dawateislami.net/onlinedonation/',
      accountInfo: {
        bankName: 'Dubai Islamic Bank',
        accountTitle: 'Dawat-e-Islami Trust Nafia',
        accountNumber: '1760135392015',
        IBAN: 'PK10DUIB0000000135392015',
        swiftCode: 'DUIBPKKA',
      },
    },
    {
      content:
        'Help Us, Help Them! Our mission to provide relief to the affectees needs your help in continuing these efforts by contributing, sharing, and spreading our message across the country. Do your part in ensuring Hope Not Out for all.',
      name: 'Shahid Afrid Foundation',
      role: 'Non-profit Organization',
      image: imageSAF,
      link: 'https://shahidafridifoundation.org/',
      donateLink: 'https://shahidafridifoundation.org/donation/',
      accountInfo: {
        bankName: 'Dubai Islamic Bank',
        accountTitle: 'Shahid Afridi Foundation',
        accountNumber: '0090471290005',
        IBAN: 'PK43DUIB0000000471290005',
        swiftCode: 'DUIBPKKA',
      },
    },
  ],
  [
    {
      content:
        "Help Pakistan's flood victims by donating to Dawn Relief, We want to extend our efforts to flood-stricken areas across the country. Help us do so by donating generously.",
      name: 'DAWN Relief',
      role: 'Media Agency',
      image: imageDawn,
      link: 'https://www.dawn.com',
      donateLink: 'https://www.dawn.com/news/1706906',
      accountInfo: {
        bankName: 'Nation Bank of Pakistan',
        accountTitle: 'Dawn Relief Earthquake Welfare Org.',
        accountNumber: '4000373293',
        IBAN: 'PK81NBPA0223004000373293',
        swiftCode: 'NBPPKKA',
      },
    },
    {
      content: 'Help the flood victims. Victims are waiting for you',
      name: 'JDC Foundation',
      role: 'Welfare Organization',
      image: imageJdc,
      link: 'https://jdcwelfare.org',
      donateLink: 'https://jdcwelfare.org/campaigns/flood-relief-fund/',
      accountInfo: {
        bankName: 'Bank Al-Habib',
        accountTitle: 'JDC Welfare Organization',
        accountNumber: '10310081011633012',
        IBAN: 'PK11BAHL1031008101163301',
        swiftCode: 'BAHLPKKA',
      },
    },
  ],
  [
    {
      content:
        'The floods in Sindh, Punjab and Balochistan have taken many lives, homes and livelihoods of people. They need your urgent and help and support.',
      name: 'HANDS',
      role: 'Non-profit Organization',
      image: imageHands,
      link: 'https://hands.org.pk',
      donateLink: 'https://hands.org.pk/ways-to-donate/',
      accountInfo: {
        bankName: 'Bank Islami',
        accountTitle: 'HANDS',
        accountNumber: '0111100073900202',
        IBAN: 'PK70BKIP0111100073900202',
        swiftCode: 'BKIPPKKA',
      },
    },
  ],
]

const UsaOrganizations = [
  [
    {
      content: '',
      name: 'Helping Hands for Relief & Development',
      role: 'Non-profit Organization',
      image: imageHhrd,
      link: 'https://www1.hhrd.org',
      donateLink:
        'https://www1.hhrd.org/Campaigns/Pakistan-Relief/Pakistan-Flood-Relief',
    },
    {
      content: '',
      name: 'The Citizens Foundation USA',
      role: 'Non-profit Organization',
      image: imageTcfUs,
      link: 'https://www.tcfusa.org',
      donateLink: 'https://www.tcfusa.org/floodrelief/',
    },
  ],
  [
    {
      content: '',
      name: 'Zakat Foundation of America',
      role: 'Non-profit Charity Organization',
      image: imageZakatUs,
      link: 'https://www.zakat.org/',
      donateLink:
        'https://www.zakat.org/get-involved/pakistan-flood-relief-2022#give',
    },
    {
      content: '',
      name: 'Human Development Foundation',
      role: 'Non-profit Organization',
      image: imageHumanDevelopment,
      link: 'https://www.hdf.com',
      donateLink: 'https://www.hdf.com/donation/donate',
    },
  ],
  [
    {
      content: '',
      name: 'Islamic Relief USA',
      role: 'Non-profit Organization',
      image: imageIslamicRelief,
      link: 'https://irusa.org/asia/pakistan/',
      donateLink: 'https://secure.irusa.org/donate/give-gift',
    },
    {
      content: '',
      name: 'Eidhi Internation',
      role: 'Non-profit Organization',
      image: imageEidhi,
      link: 'https://edhina.org/',
      donateLink: 'https://edhina.org/',
    },
  ],
  [
    {
      content: '',
      name: 'Muslim Aid USA',
      role: 'Non-profit Organization',
      image: imageMausa,
      link: 'https://www.mausa.org/',
      donateLink: 'https://www.mausa.org/pakistan-flood-emergency/',
    },
    {
      content: '',
      name: 'Rizq',
      role: 'Non-profit Organization',
      image: imageRizq,
      link: 'https://share-rizq.org',
      donateLink:
        'https://www.launchgood.com/campaign/flood_relief_for_pakistan',
    },
  ],
  [
    {
      content: '',
      name: 'iCare Foundation',
      role: 'Non-profit Organization',
      image: imageIcare,
      link: 'https://i-care-america.org/',
      donateLink: 'https://i-care-america.org/charity/icare-flood-appeal/',
    },
    {
      content: '',
      name: 'Hidaya Foundation',
      role: 'Non-profit Organization',
      image: imageHidaya,
      link: 'https://www.hidaya.org/',
      donateLink:
        'https://www.hidaya.org/social-welfare/disaster-relief/pakistan-floods-2022/',
    },
  ],
  [
    {
      content: '',
      name: 'Paani Project',
      role: 'Non-profit Organization',
      image: imagePaani,
      link: 'https://www.paaniproject.org/',
      donateLink:
        'https://www.launchgood.com/campaign/pakistan_flood_relief__paani',
    },
    {
      content: '',
      name: 'Pakistan Science Engineering Foundation',
      role: 'Non-profit Organization',
      image: imagePaksef,
      link: 'https://paksef.org/',
      donateLink:
        'https://www.paypal.com/donate?token=v9D4kjxtnVWR3o-kYiUFit7-9MWEsJ3DniLD75jQjesBPfOqiB4KLLEwgK7Zj8MhFaBDOFSHrxc8KpE9',
    },
  ],
  [
    {
      content: '',
      name: 'Minhaj Welfare Foundation',
      role: 'Non-profit Organization',
      image: imageMwf,
      link: 'https://mwfusa.org',
      donateLink: 'https://mwfusa.org/donate/causes/pakistanfloods/',
    },
  ],
  [
    {
      content: '',
      name: 'Hope USA',
      role: 'Non-profit Organization',
      image: imageHope,
      link: 'https://www.hopecharityusa.org',
      donateLink: 'https://www.hopecharityusa.org/donate-today',
    },
  ],
  [
    {
      content: '',
      name: 'Akhuwat USA',
      role: 'Non-profit Organization',
      image: imageAkhuwatUs,
      link: 'https://www.akhuwat.org',
      donateLink: 'https://www.akhuwat.org/donate',
    },
  ],
]

const UkOrganizations = [
  [
    {
      content: '',
      name: 'Muslim Aid UK',
      role: 'Non-profit Organization',
      image: imageMuslimAid,
      link: 'https://www.muslimaid.org',
      donateLink: 'https://www.muslimaid.org/pakistan-flood-emergency',
    },
    {
      content: '',
      name: 'Islamic Relief UK',
      role: 'Non-profit Organization',
      image: imageIslamicRelief,
      link: 'https://www.islamic-relief.org.uk',
      donateLink: 'https://www.islamic-relief.org.uk/pakistan-floods-appeal',
    },
  ],
  [
    {
      content: '',
      name: 'Agosh UK',
      role: 'Non-profit Organization',
      image: imageAgosh,
      link: 'https://www.aghosh.co.uk',
      donateLink: 'https://www.aghosh.co.uk/donate/emergency-flood-appeal/',
    },
    {
      content: '',
      name: 'Muslim Hands UK',
      role: 'Non-profit Organization',
      image: imageMuslimHands,
      link: 'https://muslimhands.org.uk',
      donateLink: 'https://muslimhands.org.uk/donate',
    },
  ],
  [
    {
      content: '',
      name: 'Alkhidmat UK',
      role: 'Non-profit Organization',
      image: imageAlkhidmat,
      link: 'https://alkhidmatuk.org',
      donateLink:
        'https://alkhidmatuk.org/donate-now/ways-to-donate/pakistan-flood-relief/',
    },
    {
      content: '',
      name: 'Transparent Hands',
      role: 'Non-profit Organization',
      image: imageTransparentHands,
      link: 'https://www.transparenthands.org/',
      donateLink: 'https://www.transparenthands.org/donate-now/',
    },
  ],
]

export function WelfareOrganizations() {
  return (
    <section
      id="welfare-organizations"
      aria-label="Organizations and People are in Action"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl md:text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
            Welfare Organizations in Actions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            There are many welfare organizations, charities and individual are
            putting their best efforts in relief work. A few of them shown here
            whom you can support with whatever needed in this time. We&apos;re
            in the process of adding more as we get their details.
          </p>
        </div>

        <section id="pk-organizations" className="mt-16">
          <h1 className="text-center text-2xl font-medium tracking-tight text-slate-900 sm:text-3xl">
            Local Welfare Organizations
          </h1>
          <div className="mx-auto mt-4 max-w-3xl md:text-center">
            <p className="text-slate-700">
              These are Pakistan based welfare and charity organizations whom
              you can donate to support flood 2022 victims . Please DONATE NOW
              as much as you!
            </p>
          </div>
          <CardsContainerOuter>
            {oragnizations.map((column, columnIndex) => (
              <li key={columnIndex}>
                <CardsContainerInner>
                  {column.map((org, orgIndex) => (
                    <CardItem
                      key={columnIndex + '-' + orgIndex}
                      organization={org}
                    />
                  ))}
                </CardsContainerInner>
              </li>
            ))}
          </CardsContainerOuter>
        </section>

        <section id="us-organizations" className="mt-20">
          <h1 className="text-center text-2xl font-medium tracking-tight text-slate-900 sm:text-3xl">
            USA Welfare Organizations
          </h1>
          <div className="mx-auto mt-4 max-w-3xl md:text-center">
            <p className="text-slate-700">
              These are USA based welfare and charity organizations whom you can
              donate to support Pakistan 2022 floods victims. Please DONATE NOW
              as much as you!
            </p>
          </div>
          <CardsContainerOuter>
            {UsaOrganizations.map((column, columnIndex) => (
              <li key={columnIndex}>
                <CardsContainerInner>
                  {column.map((org, orgIndex) => (
                    <CardItem
                      key={columnIndex + '-' + orgIndex}
                      organization={org}
                    />
                  ))}
                </CardsContainerInner>
              </li>
            ))}
          </CardsContainerOuter>
        </section>

        <section id="uk-organizations" className="mt-20">
          <h1 className="text-center text-2xl font-medium tracking-tight text-slate-900 sm:text-3xl">
            UK Welfare Organizations
          </h1>
          <div className="mx-auto mt-4 max-w-3xl md:text-center">
            <p className="text-slate-700">
              These are UK based welfare and charity organizations whom you can
              donate to support Pakistan 2022 floods victims. Please DONATE NOW
              as much as you!
            </p>
          </div>
          <CardsContainerOuter>
            {UkOrganizations.map((column, columnIndex) => (
              <li key={columnIndex}>
                <CardsContainerInner>
                  {column.map((org, orgIndex) => (
                    <CardItem
                      key={columnIndex + '-' + orgIndex}
                      organization={org}
                    />
                  ))}
                </CardsContainerInner>
              </li>
            ))}
          </CardsContainerOuter>
        </section>
      </Container>
    </section>
  )
}

function CardsContainerOuter({ children }) {
  return (
    <ul
      role="list"
      className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
    >
      {children}
    </ul>
  )
}

function CardsContainerInner({ children }) {
  return (
    <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
      {children}
    </ul>
  )
}

function CardItem({ organization }) {
  return (
    <li>
      <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
        <figcaption className="relative my-2 flex items-center justify-between  pt-2">
          <div>
            <p className="text-base font-semibold text-slate-900">
              {organization.name}
            </p>
            <p className="text-sm text-slate-500">{organization.role}</p>
          </div>
          <a href={organization.link} target="_blank" rel="noreferrer">
            <div className="overflow-hidden rounded-full bg-slate-50">
              <Image
                className="h-16 w-16 object-cover"
                src={organization.image}
                alt={organization.name}
                width={56}
                height={56}
              />
            </div>
          </a>
        </figcaption>
        <div className="mt-2 border-t border-slate-100">
          <p className="mt-2"></p>
          {organization.accountInfo && (
            <AccountInfoCard accountInfo={organization.accountInfo} />
          )}
          <a
            target="_blank"
            rel="noreferrer"
            className="group mt-2 inline-flex items-center text-sm text-blue-500"
            href={organization.donateLink}
          >
            <span>DONATE NOW</span>
            <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:w-6" />
          </a>
        </div>
      </figure>
    </li>
  )
}

function AccountInfoCard({ accountInfo }) {
  return (
    <blockquote className="relative">
      <CardRow title="Bank Name: " body={accountInfo.bankName} />
      <CardRow title="Acc. Title: " body={accountInfo.accountTitle} />
      <CardRow title="Acc. No: " body={accountInfo.accountNumber} />
      <CardRow title="IBAN: " body={accountInfo.IBAN} />
      <CardRow title="Swift Code: " body={accountInfo.swiftCode} />
    </blockquote>
  )
}

function CardRow({ title, body }) {
  return (
    <div className="flex w-full flex-row items-center text-sm">
      <p className="font-semibold">{title}</p>
      <p className="truncate text-left">&nbsp;{body}</p>
    </div>
  )
}
