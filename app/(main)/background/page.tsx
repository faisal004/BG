import { useBackgroundStore } from '@/Store/backgroundStore'
import BackgroundColorCard from './_components/background-card'

const Background = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full  ">
      <div className="flex items-center justify-center h-screen md:text-5xl text-3xl text-center p-3 font-semibold tracking-wider">
        Collection of different background color and also you can make one of
        you own
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3 w-full max-w-[1200px] p-2 ">
        <BackgroundColorCard bg="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500 to-blue-700" />
        <BackgroundColorCard bg="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900 to-violet-950" />
        <BackgroundColorCard bg="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500 to-blue-700" />
        <BackgroundColorCard bg="bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-pink-900 to-pink-800" />
        <BackgroundColorCard bg="bg-[radial-gradient(100%_5%_at_5%_0%,_var(--tw-gradient-stops))] from-blue-700 to-slate-100 text-black"/>
        <BackgroundColorCard />
      </div>
    </div>
  )
}

export default Background
