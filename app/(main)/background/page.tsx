'use client'
import { Button } from '@/components/ui/button'
import BackgroundColorCard from './_components/background-card'
import { useBackgroundStore } from '@/Store/backgroundStore'
import CustomBackground from './_components/custom-background'

const Background = () => {
  const { setBgValue, setBgDynamicValue } = useBackgroundStore()
  const handleReset = () => {
    setBgValue('')
    setBgDynamicValue({})
  }
  return (
    <div className="flex flex-col items-center justify-center w-full   ">
      {/* <div className="flex flex-col gap-4 items-center justify-center h-screen md:text-5xl text-3xl text-center p-3 font-semibold   max-w-[1200px] ">
        <div>
          Collection of different background color and also you can make one of
          you own
        </div>
        <Button onClick={handleReset} className="mt-5 tracking-normal">
          Reset
        </Button>
      </div> */}
      <div className="md:text-5xl text-3xl font-semibold py-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-black dark:from-white to-gray-600 dark:to-gray-400">
        Build your custom background
      </div>
      <div className="w-full  max-w-[1200px] p-2">
        <CustomBackground />
      </div>
      <div className="md:text-5xl text-3xl font-semibold py-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-black dark:from-white to-gray-600 dark:to-gray-400">
        Pre Built Styles
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3 w-full max-w-[1100px] p-2 ">
        <BackgroundColorCard
          bg="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500 to-blue-700"
          vanillaCss="background: radial-gradient(ellipse at top, #3b82f6, #1d4ed8);"
        />
        <BackgroundColorCard
          bg="bg-[radial-gradient(ellipse_at_10%_100%,_var(--tw-gradient-stops))] from-violet-900 to-violet-950"
          vanillaCss=" background: radial-gradient(ellipse at 10% 100%, #4c1d95, #2e1b4e);"
        />
        <BackgroundColorCard
          bg="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 to-black text-white"
          vanillaCss="  background: radial-gradient(ellipse at top, #0f172a, #000000);
  color: white;"
        />
        <BackgroundColorCard
          bg="bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white"
          vanillaCss="  background: radial-gradient(#ffffff33 1px, #00091d 1px);
  background-size: 20px 20px;
  color: white;"
        />
        <BackgroundColorCard
          bg="bg-[radial-gradient(100%_50%_at_5%_100%,_var(--tw-gradient-stops))] from-blue-700 to-slate-100 text-black"
          vanillaCss="background: radial-gradient(100% 50% at 5% 100%, #1d4ed8, #f1f5f9);
  color: black;"
        />

        <BackgroundColorCard
          bg="bg-[radial-gradient(circle_1000px_at_50%_500px,_var(--tw-gradient-stops))] from-pink-900 to-black text-white"
          vanillaCss=" background: radial-gradient(circle 1000px at 50% 500px, #831843, #000000);
  color: white;"
        />

        <BackgroundColorCard
          bg="bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"
          vanillaCss=" background: radial-gradient(circle farthest-side, rgba(255,0,182,0.15), rgba(255,255,255,0));"
        />
        <BackgroundColorCard
          bg="bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_6rem] "
          vanillaCss="background: 
    linear-gradient(to right, #f0f0f0 1px, transparent 1px),
    linear-gradient(to bottom, #f0f0f0 1px, transparent 1px);
  background-size: 6rem 6rem;"
        />
        <BackgroundColorCard
          bg="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#123c78] via-[#000812]  to-[#0c2c58]"
          vanillaCss="  background: radial-gradient(ellipse at top left, #123c78, #000812, #0c2c58);"
        />
        {/* <BackgroundColorCard bg="bg-[conic-gradient(#9233ea,#db2777,#2564eb)]" /> */}

        {/* <BackgroundColorCard bg="bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] " /> */}
      </div>
    </div>
  )
}

export default Background
