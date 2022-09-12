import { useState } from 'react'
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline'

export function CopyToClipBoard({ text }) {
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
            onClick={() => copyToClipboard(text)}
            className={'h-6 w-6 cursor-pointer hover:text-gray-600'}
          />
        )}
      </>
    )
  }
  