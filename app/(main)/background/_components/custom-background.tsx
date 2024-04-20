'use client'
import { Card } from '@/components/ui/card'
import { useBackgroundStore } from '@/Store/backgroundStore'
import useCustomBgStore from '@/Store/customBackgroundStore'
import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { convertToUnderscore } from '@/utils/convertToTailwindpos'
import GradientSelect from './gradient-positon-select'
import GradientShapeSelect from './gradient-shape'
import ColorsPercentage from './colors-percentage'
import ColorsPicker from './colors-picker'
import { Switch } from '@/components/ui/switch'
import SlidersComponent from './sliders-components'

const CustomBackground = () => {
  const {
    colors,
    position,
    shape,
    colorsPercentage,
    switchChecked,
    setSwitchChecked,
    sliders,
  } = useCustomBgStore()

  const { setBgDynamicValue } = useBackgroundStore()
  const [copied, setCopied] = useState(false)
  const convertedString = convertToUnderscore(position)

  const backgroundColorForTailwind = `bg-[radial-gradient(${shape}_at_${convertedString},_var(--tw-gradient-stops))] from-[${colors.from}] from-${colorsPercentage.from}% via-[${colors.via}] via-${colorsPercentage.via}%  to-[${colors.to}] to-${colorsPercentage.to}%`
  const backgroundColorForTailwindAdvance = `bg-[radial-gradient(${sliders.height}px_${sliders.width}px_at_${sliders.xAxis}%_${sliders.yAxis}%,_var(--tw-gradient-stops))] from-[${colors.from}] from-${colorsPercentage.from}% via-[${colors.via}] via-${colorsPercentage.via}%  to-[${colors.to}] to-${colorsPercentage.to}%`

  const gradientNormal = `radial-gradient(${shape} at ${position} , ${
    colors.from || 'transparent'
  } ${colorsPercentage.from}%   ,${colors.via || 'transparent'}  ${
    colorsPercentage.via
  }% , ${colors.to || 'transparent'}  ${colorsPercentage.to}% )`
  const gradientAdvance = `radial-gradient(${sliders.width}px ${
    sliders.height
  }px  at ${sliders.xAxis}% ${sliders.yAxis}% , ${
    colors.from || 'transparent'
  } ${colorsPercentage.from}%   ,${colors.via || 'transparent'}  ${
    colorsPercentage.via
  }% , ${colors.to || 'transparent'}  ${colorsPercentage.to}% )`


  const backgroundStyle = {
    background: !switchChecked ? gradientNormal : gradientAdvance,
  }

const tailwindtocopy=!switchChecked ? backgroundColorForTailwind : backgroundColorForTailwindAdvance
  const handleCopy = () => {
    navigator.clipboard.writeText(tailwindtocopy)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  const handlePreview = () => {
    setBgDynamicValue(backgroundStyle)
  }
  const handleCheckChange = () => {
    setSwitchChecked(!switchChecked)
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
        <div className="col-span-3 flex item-center justify-end w-full gap-2 ">
          <p>{!switchChecked ? '  Normal Mode' : ' Advance Mode'}</p>

          <Switch checked={switchChecked} onCheckedChange={handleCheckChange} />
        </div>

        <ColorsPicker />
        <ColorsPercentage />
        {!switchChecked ? (
          <>
            <GradientSelect />

            <GradientShapeSelect />
          </>
        ) : (
          <>
            <SlidersComponent />
          </>
        )}
      </Card>
    </div>
  )
}

export default CustomBackground
