'use client'
import { Card } from '@/components/ui/card'
import { useBackgroundStore } from '@/Store/backgroundStore'
import useCustomBgStore from '@/Store/customBackgroundStore'

import { ColorPicker } from 'antd'
import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { positions } from '@/utils/positions'
import { convertToUnderscore } from '@/utils/convertToTailwindpos'
import GradientSelect from './gradient-positon-select'

const CustomBackground = () => {
  const { colors, setColors, position} = useCustomBgStore()
  const { setBgDynamicValue } = useBackgroundStore()
  const [copied, setCopied] = useState(false)
  const convertedString = convertToUnderscore(position)

  const backgroundColorForTailwind = `bg-[radial-gradient(ellipse_at_${convertedString},_var(--tw-gradient-stops))] from-[${colors.from}] via-[${colors.via}]  to-[${colors.to}]`
  const handlePreview = () => {
    setBgDynamicValue(backgroundStyle)
  }
  const gradient = `radial-gradient(ellipse at ${position}, ${
    colors.from || 'transparent'
  },${colors.via || 'transparent'}, ${colors.to || 'transparent'})`

  const backgroundStyle = {
    background: gradient,
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(backgroundColorForTailwind)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }
 

  return (
    <div className="flex md:flex-row flex-col justify-between w-full gap-3">
      <Card
        className={`h-80 w-full flex items-center  justify-center relative  `}
        style={backgroundStyle}
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
        <div>Your Custom Background 😎</div>
      </Card>

      <Card
        className={`h-fit w-full  items-start  justify-center relative p-4 grid grid-cols-3 gap-3   `}
      >
        <div className="flex gap-2 items-center justify-center">
          <div>From</div>
          <ColorPicker
            value={colors.from || '#1677FF'}
            onChange={(color, hex) => {
              setColors({ ...colors, from: hex || null })
            }}
            showText
          />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <div>Via</div>
          <ColorPicker
            value={colors.via || '#1677FF'}
            onChange={(color, hex) => {
              setColors({ ...colors, via: hex || null })
            }}
            showText
          />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <div>To</div>
          <ColorPicker
            value={colors.to || '#1677FF'}
            onChange={(color, hex) => {
              setColors({ ...colors, to: hex || null })
            }}
            showText
          />
        </div>

       <GradientSelect/>
      </Card>
    </div>
  )
}

export default CustomBackground
