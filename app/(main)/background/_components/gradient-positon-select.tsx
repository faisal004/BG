import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import useCustomBgStore from '@/Store/customBackgroundStore'
import { positions } from '@/utils/positions'

const GradientSelect = () => {
  const { position, setPosition } = useCustomBgStore()
  const handlePositionChange = (value: any) => {
    setPosition(value)
  }

  return (
    <Select onValueChange={handlePositionChange}>
      <SelectTrigger className="w-full col-span-3 ">
        <SelectValue placeholder={position} />
      </SelectTrigger>
      <SelectContent>
        {positions.map((position, index) => (
          <SelectItem key={index} value={position.value}>
            {position.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default GradientSelect
