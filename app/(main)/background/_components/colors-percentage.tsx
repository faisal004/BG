import { Input } from '@/components/ui/input'
import useCustomBgStore from '@/Store/customBackgroundStore'

const ColorsPercentage = () => {
  const { colorsPercentage, setColorsPercentage } = useCustomBgStore()
  return (
    <>
      <div className="flex gap-2 items-center justify-between w-full">
        <div>From</div>
        <Input
          type="number"
          min={0}
          max={100}
          value={colorsPercentage.from}
          onChange={(e) =>
            setColorsPercentage({ from: Number(e.target.value) })
          }
        />
      </div>
      <div className="flex gap-2 items-center justify-between w-full">
        <div>Via</div>
        <Input
          type="number"
          min={0}
          max={100}
          value={colorsPercentage.via}
          onChange={(e) => setColorsPercentage({ via: Number(e.target.value) })}
        />
      </div>
      <div className="flex gap-2 items-center justify-between w-full">
        <div>To</div>
        <Input
          type="number"
          min={0}
          max={100}
          value={colorsPercentage.to}
          onChange={(e) => setColorsPercentage({ to: Number(e.target.value) })}
        />
      </div>
    </>
  )
}

export default ColorsPercentage
