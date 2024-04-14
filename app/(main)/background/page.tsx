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
        <BackgroundColorCard bg="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 to-black text-white" />
        <BackgroundColorCard bg="bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]" />
        <BackgroundColorCard bg="bg-[radial-gradient(100%_50%_at_5%_100%,_var(--tw-gradient-stops))] from-blue-700 to-slate-100 text-black" />
        <BackgroundColorCard bg="bg-[radial-gradient(circle_1000px_at_50%_500px,_var(--tw-gradient-stops))] from-black to-teal-900 text-white" />
        <BackgroundColorCard bg="bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
        <BackgroundColorCard bg="bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_6rem] " />
        {/* <BackgroundColorCard bg="bg-[radial-gradient(circle_800px_at_50%_200px,#d5c5ff,transparent)] " /> */}
      </div>
    </div>
  )
}

export default Background
