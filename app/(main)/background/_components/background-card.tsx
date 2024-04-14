
"use client"
import { Card } from '@/components/ui/card'
import { useBackgroundStore } from '@/Store/backgroundStore';

const BackgroundColorCard = ({bg}:any) => {
  const { backgroundColor, setBgValue } = useBackgroundStore();
  const handlePreview = () => {
    // Set the background value when preview button is clicked
    setBgValue(bg);
   
  };
  return (
    <Card className={`h-60 w-full flex items-center  justify-center relative ${bg} `}>
      <div className={`flex absolute top-2 right-2 gap-1`}>
        <button className="py-0 bg-white rounded-md px-2 text-black h-6 text-xs" onClick={handlePreview}>
          Preview
        </button>{' '}
        <button className="py-0 bg-white rounded-md px-2 text-black h-6 text-xs">
          Copy
        </button>
      </div>
    </Card>
  )
}

export default BackgroundColorCard
