'use client'
import { Card } from '@/components/ui/card'
import { useBackgroundStore } from '@/Store/backgroundStore'
import useCustomBgStore from '@/Store/customBackgroundStore'

import { ColorPicker } from 'antd'

const CustomBackground = () => {
  const { colors, setColors } = useCustomBgStore()
  const { backgroundColor, setBgValue } = useBackgroundStore()
  const backgroundColorForTailwind = `bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[${colors.from}]  to-[${colors.to}]`
    const handlePreview = () => {
      setBgValue(backgroundColorForTailwind)
    }
  const gradient = `radial-gradient(ellipse at bottom, ${
    colors.from || 'transparent'
  }, ${colors.to || 'transparent'})`

  const backgroundStyle = {
    background: gradient,
  }

  return (
    <div className="flex md:flex-row flex-col justify-between w-full gap-3">
      <Card
        className={`h-80 w-full flex items-center  justify-center relative  `}
        style={backgroundStyle}
      >
        <div className={`flex absolute top-2 right-2 gap-1`}>
          <button className="py-0 bg-white rounded-md px-2 text-black h-6 text-xs"  onClick={handlePreview}>
            Preview
          </button>{' '}
          <button className="py-0 bg-white rounded-md px-2 text-black h-6 text-xs">
            Copy
          </button>
        </div>
      </Card>

      <Card
        className={`h-fit w-full  items-start  justify-center relative p-4 grid grid-cols-3  `}
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
            value={colors.via || ''}
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
      </Card>
    </div>
  )
}

export default CustomBackground
