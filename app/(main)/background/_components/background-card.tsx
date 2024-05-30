'use client'
import { Card } from '@/components/ui/card'
import { useBackgroundStore } from '@/Store/backgroundStore'
import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

const BackgroundColorCard = ({ bg, vanillaCss }: any) => {
  const { setBgValue, setBgDynamicValue } = useBackgroundStore()
  const [copied, setCopied] = useState(false)
  const [vanillacopied, setVanillaCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(bg)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }
  const handleVanillaCopy = () => {
    navigator.clipboard.writeText(vanillaCss)
    setVanillaCopied(true)
    setTimeout(() => {
      setVanillaCopied(false)
    }, 1000)
  }
  const handlePreview = () => {
    setBgDynamicValue({})
    setBgValue(bg)
  }
  return (
    <div className="flex flex-col">
      <div className="h-12 bg-black flex gap-2  border-2 border-b-0 rounded-t-lg p-2    duration-200  ">
        <button
          onClick={handleCopy}
          disabled={copied}
          className="py-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-zinc-500/40 hover:via-zinc-500/50 to-black text-white rounded-md px-2 text-black h-6 text-xs transition-transform duration-3000 border-zinc-200 hover:border-[1px]"
        >
          {copied ? <Check className="h-4 w-4" /> : <span>Tailwind</span>}
        </button>
        <button
          onClick={handleVanillaCopy}
          disabled={vanillacopied}
          className="py-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-zinc-500/40 hover:via-zinc-500/50 to-black text-white rounded-md px-2 text-black h-6 text-xs transition-transform duration-3000 border-zinc-200 hover:border-[1px]"
        >
          {vanillacopied ? (
            <Check className="h-4 w-4" />
          ) : (
            <span>Vanilla Css</span>
          )}
        </button>
      </div>
      <Card
        className={`h-48 w-full rounded-t-none flex items-center border-t-none  justify-center group relative ${bg} overflow-hidden `}
      >
        <div
          className={`flex absolute top-20  -right-28 gap-1 group-hover:-translate-x-64 transition-transform duration-300`}
        >
          <button
            className="py-0 bg-white rounded-md px-2 text-black h-6 text-xs"
            onClick={handlePreview}
          >
            Preview
          </button>{' '}
        </div>
      </Card>
    </div>
  )
}

export default BackgroundColorCard
