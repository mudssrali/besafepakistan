import { useState } from 'react'
import clsx from 'clsx'

import { UserIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

import { Container } from '@/components/Container'
import { CharityAttentionCallout } from './CharityAttentionCallout'
import fundraisers from '@/constants/fundraisers'
import { CopyToClipBoard } from '@/components/CopyToClipboard'

const statusMap = {
  unknown: 0,
  verified: 1,
}

export function Fundraisers() {
  const [selectedProvince, setProvince] = useState('')

  return (
    <section
      id="fundraisers"
      className="relative overflow-hidden pt-20 pb-28 sm:py-32"
    >
      <Container>
        <div className="mb-8 max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Regional Flood Fundraisers
          </h2>
          <p className="mt-6 text-lg tracking-tight text-slate-700">
            These are local the fundraisers whom you can donate money, dry
            rashan, tents now.
          </p>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <p>
            <span className="font-semibold">Total Fundraisers</span>:{' '}
            {fundraisers.length}
          </p>
          <div className="flex space-x-2">
            <ProvinceSelector onChange={setProvince} />
          </div>
        </div>
        <div className="max-h-screen overflow-y-auto bg-white shadow sm:rounded-md">
          <ul role="list" className="divide-y divide-gray-200">
            {fundraisers
              .sort((a, b) => a.name.localeCompare(b.name))
              .sort((a, b) => statusMap[b.status] - statusMap[a.status])
              .filter((f) =>
                selectedProvince ? f.provinces.includes(selectedProvince) : true
              )
              .map((fundraiser, fundraiserIdx) => (
                <li key={fundraiser.name + '-' + fundraiserIdx}>
                  <div className="block hover:bg-gray-50">
                    <div className="space-y-2 px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="truncate text-lg font-semibold text-blue-600">
                          {fundraiser.name}
                        </p>
                        <div className="ml-2 flex flex-shrink-0">
                          <p
                            className={clsx(
                              'inline-flex rounded-full px-2 text-xs font-semibold leading-5 text-white',
                              {
                                'bg-green-500 ':
                                  fundraiser.status === 'verified',
                                'bg-gray-500': fundraiser.status === 'unknown',
                              }
                            )}
                          >
                            {fundraiser.status}
                          </p>
                        </div>
                      </div>
                      <div className="sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <UserIcon
                              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            {fundraiser.contact || 'nil'}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                            <MapPinIcon
                              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            {fundraiser.provinces.join(',')}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start text-sm text-gray-500 sm:mt-0">
                        <p className="font-semibold">What they need?</p>
                        <p>{fundraiser.needs || 'nil'}</p>
                      </div>
                      <div className="flex flex-col text-sm text-gray-500 sm:mt-0">
                        <div className="mb-1 flex flex-row justify-between">
                          <p className="font-semibold">Bank Account Details:</p>
                          <CopyToClipBoard text={fundraiser.accountInfo} />
                        </div>
                        <textarea
                          rows={4}
                          readOnly={true}
                          defaultValue={
                            fundraiser.accountInfo || 'Details not provided!'
                          }
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></textarea>
                      </div>
                      <div>
                        {fundraiser.link && (
                          <a
                            className="group mt-2 inline-flex items-center text-sm text-blue-500"
                            href={fundraiser.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span>ONLINE DONATION</span>
                            <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:w-6" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <CharityAttentionCallout />
      </Container>
    </section>
  )
}

function ProvinceSelector({ onChange }) {
  const locations = [
    'Balochistan',
    'Gilgit Baltistan',
    'KPK',
    'Punjab',
    'Sindh',
  ]

  return (
    <select
      id="location"
      name="location"
      onChange={(event) => onChange(event.target.value)}
      className="mt-1 block rounded-md border-2 border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
    >
      <option value={''}>Select Province</option>
      {locations.map((l) => (
        <option key={l} value={l}>
          {l}
        </option>
      ))}
    </select>
  )
}
