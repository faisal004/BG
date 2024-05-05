'use client'
import { Card } from '@/components/ui/card'
import { useTextStore } from '@/Store/textStore/textStore'
import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

const TextCard = ({ text }: any) => {
  const [copied, setCopied] = useState(false)
  const { settxtValue } = useTextStore()
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }
  const handlePreview = () => {
    settxtValue(text)
  }
  return (
    <Card
      className={`h-60 w-full flex items-center  justify-center relative ${text} `}
    >
      <div className={`flex absolute top-2 right-2 gap-1`}>
        <button
          className="py-0 bg-white rounded-md px-2 text-black h-6 text-xs"
          onClick={handlePreview}
        >
          Preview
        </button>{' '}
        <button
          onClick={handleCopy}
          disabled={copied}
          className="py-0 bg-white rounded-md px-2 text-black h-6 text-xs"
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
      <div className="text-2xl font-semibold">Sample Text</div>
    </Card>
  )
}

export default TextCard
