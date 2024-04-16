import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import useCustomBgStore from '@/Store/customBackgroundStore'

const GradientShapeSelect = () => {
  const { setShape, shape } = useCustomBgStore()
  const handlePositionChange = (value: any) => {
    setShape(value)
  }

  return (
    <Select onValueChange={handlePositionChange}>
      <SelectTrigger className="w-full col-span-3 ">
        <SelectValue placeholder={shape} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="circle">Circle</SelectItem>
        <SelectItem value="ellipse">Ellipse</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default GradientShapeSelect
