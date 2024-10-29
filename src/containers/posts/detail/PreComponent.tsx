'use client'

import {
  CheckIcon,
  CodeBracketIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline'
import { ReactNode, useCallback, useRef, useState } from 'react'

interface PreComponentProps {
  styleNames: string | undefined
  children: ReactNode
}

export default function PreComponent({
  styleNames,
  children,
}: PreComponentProps) {
  const preDiv = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)

  const handleExit = useCallback(() => {
    setCopied(false)
  }, [setCopied])

  const handleCopy = useCallback(() => {
    setCopied(true)
    navigator.clipboard.writeText(preDiv.current?.textContent as string)
    setTimeout(() => setCopied(false), 2000)
  }, [setCopied])

  return (
    <div
      ref={preDiv}
      className="flex flex-col border border-black group mt-7"
      onMouseLeave={handleExit}>
      <div className="flex items-center justify-between bg-blue-950/60 px-4 py-1.5 dark:bg-blue-600/60">
        <div className="flex items-center gap-x-4">
          <CodeBracketIcon className="text-white size-5" />
          <p className="m-0 mt-1 text-white">
            {styleNames?.replace(/language-/g, '')}
          </p>
        </div>
        <div className="flex items-center justify-end gap-x-2">
          <div className="bg-red-600 rounded-full size-3" />
          <div className="bg-yellow-500 rounded-full size-3" />
          <div className="bg-green-600 rounded-full size-3" />
        </div>
      </div>
      <div className="relative size-full bg-[#2b2b2b]">
        <button
          type="button"
          aria-label={!copied ? 'Copy code' : 'Code copied'}
          className={`absolute right-2 top-2 ${!copied ? 'text-white' : 'text-green-400'} p-2 opacity-0 transition-all group-hover:opacity-100`}
          onClick={handleCopy}>
          {!copied ? (
            <DocumentDuplicateIcon className="size-5" />
          ) : (
            <CheckIcon className="size-5" />
          )}
        </button>
        <pre className="px-2 py-6 m-0 leading-4">{children}</pre>
      </div>
    </div>
  )
}
