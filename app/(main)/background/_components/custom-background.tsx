'use client'
import { Card } from '@/components/ui/card'
import { useBackgroundStore } from '@/Store/backgroundStore'
import useCustomBgStore from '@/Store/customBackgroundStore'
import { ColorPicker } from 'antd'
import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { convertToUnderscore } from '@/utils/convertToTailwindpos'
import GradientSelect from './gradient-positon-select'
import GradientShapeSelect from './gradient-shape'
import { Input } from '@/components/ui/input'
import ColorsPercentage from './colors-percentage'
import ColorsPicker from './colors-picker'

const CustomBackground = () => {
  const {
    colors,
    setColors,
    position,
    shape,
    setShape,
    colorsPercentage,
    setColorsPercentage,
  } = useCustomBgStore()
  const { setBgDynamicValue } = useBackgroundStore()
  const [copied, setCopied] = useState(false)
  const convertedString = convertToUnderscore(position)

  const backgroundColorForTailwind = `bg-[radial-gradient(${shape}_at_${convertedString},_var(--tw-gradient-stops))] from-[${colors.from}] from-${colorsPercentage.from}% via-[${colors.via}] via-${colorsPercentage.via}%  to-[${colors.to}] to-${colorsPercentage.to}%`
  const handlePreview = () => {
    setBgDynamicValue(backgroundStyle)
  }
  const gradient = `radial-gradient(${shape} at ${position} , ${
    colors.from || 'transparent'
  } ${colorsPercentage.from}%   ,${colors.via || 'transparent'}  ${
    colorsPercentage.via
  }% , ${colors.to || 'transparent'}  ${colorsPercentage.to}% )`

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
        <ColorsPicker />
        <ColorsPercentage />
        <GradientSelect />
        <GradientShapeSelect />
       
      </Card>
    </div>
  )
}

export default CustomBackground
