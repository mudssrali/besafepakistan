import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'
export function CharityAttentionCallout() {
  return (
    <div className="mt-8 rounded-md bg-yellow-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon
            className="h-5 w-5 text-yellow-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-semibold text-yellow-800">
            Attention needed
          </h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>
              Please do research before donating to any local or international
              welfare orgnizations or charities. While aggregating them on this
              website, we have tried to verify the information as much as
              possible. We are not affiliated with any of the charities listed.
              Thanks!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
