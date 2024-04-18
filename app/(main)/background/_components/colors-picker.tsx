import useCustomBgStore from '@/Store/customBackgroundStore'
import { ColorPicker } from 'antd'

const ColorsPicker = () => {
  const { colors, setColors } = useCustomBgStore()
  return (
    <>
      <div className="flex gap-2 items-center justify-between w-full">
        <div>From</div>
        <ColorPicker
          value={colors.from || '#1677FF'}
          onChange={(color, hex) => {
            setColors({ ...colors, from: hex || null })
          }}
          showText
        />
      </div>
      <div className="flex gap-2 items-center justify-between w-full">
        <div>Via</div>
        <ColorPicker
          value={colors.via || '#1677FF'}
          onChange={(color, hex) => {
            setColors({ ...colors, via: hex || null })
          }}
          showText
        />
      </div>
      <div className="flex gap-2 items-center justify-between w-full">
        <div>To</div>
        <ColorPicker
          value={colors.to || '#1677FF'}
          onChange={(color, hex) => {
            setColors({ ...colors, to: hex || null })
          }}
          showText
        />
      </div>
    </>
  )
}

export default ColorsPicker
