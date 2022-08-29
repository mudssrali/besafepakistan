import Papa from 'papaparse'
import { useState } from 'react'
import {
  UserIcon,
  MapPinIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/solid'
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline'

import { Container } from '@/components/Container'
import fundraisers from '@/constants/fundraisers'

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
            Flood Fundraisers in Action | Donate
          </h2>
          <p className="mt-6 text-lg font-semibold tracking-tight text-slate-700">
            These are local the fundraisers whom you can donate money, dry
            rashan, tents etc
          </p>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <p>
            <span className="font-semibold">Total</span>: {fundraisers.length}
          </p>
          <div className="flex space-x-2">
            <ProvinceSelector onChange={setProvince} />
            {/* <ExportFundraisers /> */}
          </div>
        </div>
        <div className="max-h-screen overflow-y-auto bg-white shadow sm:rounded-md">
          <ul role="list" className="divide-y divide-gray-200">
            {fundraisers
              .filter((f) =>
                selectedProvince ? f.provinces.includes(selectedProvince) : true
              )
              .map((fundraiser, fundraiserIdx) => (
                <li key={fundraiser.name + '-' + fundraiserIdx}>
                  <div className="block hover:bg-gray-50">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="truncate font-medium text-blue-600">
                          {fundraiser.name}
                        </p>
                        <div className="ml-2 flex flex-shrink-0">
                          <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            status: {fundraiser.status}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
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
                      <div className="mt-2 flex flex-col items-start text-sm text-gray-500 sm:mt-0">
                        <p className="font-semibold">What they need?</p>
                        <p>{fundraiser.needs || 'nil'}</p>
                      </div>
                      <div className="mt-2 flex flex-col text-sm text-gray-500 sm:mt-0">
                        <div className="mb-1 flex flex-row justify-between">
                          <p className="font-semibold">Bank Account Details:</p>
                          <CopyToClipBoard fundraiser={fundraiser} />
                        </div>
                        <textarea
                          rows={5}
                          readOnly={true}
                          defaultValue={
                            fundraiser.accountInfo || 'Details not provided!'
                          }
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export const downloadAsCSV = (filename = 'flood-fundraisers-2022') => {
  let csv = Papa.unparse(fundraisers, {
    quotes: false, //or array of booleans
    quoteChar: '"',
    escapeChar: '"',
    delimiter: ',',
    header: true,
    newline: '\r\n',
    skipEmptyLines: false, //other option is 'greedy', meaning skip delimiters, quotes, and whitespace.
    columns: ["name", "needs", "contact", "provinces", "sttatus", "accountInfo", "link"]
  })

  const hiddenElem = document.createElement('a')
  hiddenElem.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv)
  hiddenElem.target = '_blank'
  hiddenElem.download = `${filename}.csv`
  hiddenElem.click()
}

function ExportFundraisers() {
  return (
    <button
      onClick={() => downloadAsCSV()}
      className="bottom-1 mt-1 inline-flex items-center rounded-md border-2 border-gray-300 py-2 px-3 text-base focus:border-blue-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
    >
      <span>
        <ArrowDownTrayIcon className="h-6 w-6" />
      </span>
      <span className="ml-2">CSV</span>
    </button>
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

function CopyToClipBoard({ fundraiser }) {
  const [isCopied, setCopied] = useState(false)

  const copyToClipboard = (copyText) => {
    // copying the output
    navigator.clipboard.writeText(copyText)

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }

  return (
    <>
      {isCopied ? (
        <p className="text-sm text-sky-400">copied!</p>
      ) : (
        <ClipboardDocumentIcon
          onClick={() => copyToClipboard(fundraiser.accountInfo)}
          className={'h-6 w-6 cursor-pointer hover:text-gray-600'}
        />
      )}
    </>
  )
}
