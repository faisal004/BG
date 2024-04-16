'use client'
import { Card } from '@/components/ui/card'
import { useBackgroundStore } from '@/Store/backgroundStore'
import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

const BackgroundColorCard = ({ bg }: any) => {
  const { setBgValue,setBgDynamicValue } = useBackgroundStore()
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(bg)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }
  const handlePreview = () => {
    setBgDynamicValue({})
    setBgValue(bg)
  }
  return (
    <Card
      className={`h-60 w-full flex items-center  justify-center relative ${bg} `}
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
    </Card>
  )
}

export default BackgroundColorCard
