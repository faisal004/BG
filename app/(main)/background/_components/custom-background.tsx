'use client'
import { Card } from '@/components/ui/card'
import { useBackgroundStore } from '@/Store/backgroundStore'
import useCustomBgStore from '@/Store/customBackgroundStore'
import { Check, Copy, RotateCcw } from 'lucide-react'
import { useState } from 'react'
import { convertToUnderscore } from '@/utils/convertToTailwindpos'
import GradientSelect from './gradient-positon-select'
import GradientShapeSelect from './gradient-shape'
import ColorsPercentage from './colors-percentage'
import ColorsPicker from './colors-picker'
import { Switch } from '@/components/ui/switch'
import SlidersComponent from './sliders-components'
import { Button } from '@/components/ui/button'

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

  const tailwindtocopy = !switchChecked
    ? backgroundColorForTailwind
    : backgroundColorForTailwindAdvance
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
      <div className="flex flex-col w-full">
        <div className=" border-2 border-b-0 rounded-md rounded-b-none px-2 bg-black h-6 flex items-center gap-1">
          <div className="bg-red-600 h-3 w-3 rounded-full" />
          <div className="bg-yellow-600 h-3 w-3 rounded-full" />

          <div className="bg-green-600 h-3 w-3 rounded-full" />
        </div>
        <Card
          className={`h-80 w-full flex items-center  justify-center relative rounded-t-none  `}
          style={backgroundStyle}
        >
          <div className='absolute top-0  w-full text-sm px-2 font-bold border-b-2 '>
            BG
          </div>
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
          <div className="flex flex-col gap-6 items-center justify-center">
            <div className="text-center font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-black dark:from-white to-gray-600 dark:to-gray-400">
              Collection of <br />
              Modern Background
            </div>
            <button className="text-[10px] flex items-center gap-1 dark:bg-white bg-black dark:text-black text-white rounded-sm p-1">
              <RotateCcw className="h-2 w-2" />
              Reset
            </button>
          </div>
        </Card>
      </div>

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
