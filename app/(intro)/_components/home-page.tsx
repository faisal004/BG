"use client"
import { Button } from "@/components/ui/button"
import { useBackgroundStore } from "@/Store/backgroundStore"
import { RotateCcw } from "lucide-react"


const HomePage = () => {
  const { setBgValue, setBgDynamicValue } = useBackgroundStore()
  const handleReset = () => {
    setBgValue('')
    setBgDynamicValue({})
  }
  return (
    <div className="max-w-[1300px]  mx-auto w-full flex flex-col items-center justify-center min-h-[80vh]  gap-6 font-medium ">
      <div className="md:text-7xl text-4xl font-semibold tracking-widest text-center  w-full  px-3 flex flex-col items-center justify-center gap-3 h-full ">
        <div className=" py-10  mt-2 text-transparent bg-clip-text bg-gradient-to-r from-black dark:from-white to-gray-600 dark:to-gray-400  ">
          Collection of <br /> Modern Background
        </div>
        <div className=" ">
        <Button onClick={()=>handleReset()} className="tracking-normal px-20 py-6 text-xl gap-2"> <RotateCcw className="h-4 w-4" /> Reset</Button>
        </div>
        
      </div>
    </div>
  )
}

export default HomePage
