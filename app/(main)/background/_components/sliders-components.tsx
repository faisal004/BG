import { Slider } from '@/components/ui/slider'
import useCustomBgStore from '@/Store/customBackgroundStore'

const SlidersComponent = () => {
  const { sliders, setSliders } = useCustomBgStore()
  const handleValueChange = (newValue: number[]) => {
    if (newValue.length > 0) {
      setSliders({ xAxis: newValue[0] })
    }
  }
  const handleValueChange2 = (newValue: number[]) => {
    if (newValue.length > 0) {
      setSliders({ yAxis: newValue[0] })
    }
  }
  const handleValueChange3 = (newValue: number[]) => {
    if (newValue.length > 0) {
      setSliders({ height: newValue[0] })
    }
  }
  const handleValueChange4 = (newValue: number[]) => {
    if (newValue.length > 0) {
      setSliders({ width: newValue[0] })
    }
  }

  return (
    <>
      <div className="col-span-3 flex flex-col gap-3 items-center justify-end">
        <div className="w-full flex items-center justify-between">
          <span>X-Axis</span>
          {sliders.xAxis}%
        </div>

        <Slider
          defaultValue={[0]}
          max={100}
          step={1}
          className="col-span-3 "
          onValueChange={handleValueChange}
        />
      </div>
      <div className="col-span-3 flex flex-col gap-3 items-center justify-end">
        <div className="w-full flex items-center justify-between">
          <span>Y-Axis</span>
          {sliders.yAxis}%
        </div>

        <Slider
          defaultValue={[0]}
          max={100}
          step={1}
          className="col-span-3 "
          onValueChange={handleValueChange2}
        />
      </div>

      <div className="col-span-3 flex flex-col gap-3 items-center justify-end">
        <div className="w-full flex items-center justify-between">
          <span>Height</span>
          {sliders.height}px
        </div>

        <Slider
          defaultValue={[500]}
          max={3000}
          step={1}
          className="col-span-3 "
          onValueChange={handleValueChange3}
        />
      </div>
      <div className="col-span-3 flex flex-col gap-3 items-center justify-end">
        <div className="w-full flex items-center justify-between">
          <span>Width</span>
          {sliders.width}px
        </div>

        <Slider
          defaultValue={[500]}
          max={3000}
          step={1}
          className="col-span-3 "
          onValueChange={handleValueChange4}
        />
      </div>
    </>
  )
}

export default SlidersComponent
