import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-[1300px] mx-auto w-full flex flex-col items-center justify-center h-full gap-6 font-cal">
      <div className="md:text-7xl text-4xl font-semibold tracking-widest text-left  w-full  px-3 text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600  flex flex-col gap-3">
        <p>
          Collection of CSS Tricks <br /> I learn on Daily basis
        </p>

        <p className=" w-full text-left  tracking-widest text-xl text-gray-500 ">
          Easily integrate these Tailwind CSS and Vanilla CSS crafted snippets
          into your next project <br /> with simple copy-and-paste
          functionality. They&apos;re ready-to-use, providing seamless
          integration.
        </p>
        <Link href="/explore">
          <Button className='tracking-normal px-20 py-6'>Explore</Button>
        </Link>
      </div>

 
    </div>
  )
}
