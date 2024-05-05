import { ModeToggle } from '@/components/toggle-theme'
import { Github } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="h-12 flex relative items-center    w-full  ">
      <div className="absolute -bottom-[2px] flex w-full justify-end ">
        <div className="left-0 h-[1px]  animate-border-width rounded-full bg-gradient-to-r dark:from-white from-black dark:to-slate-50 to-slate-800  transition-all duration-10000" />
      </div>
      <div className="max-w-[1300px] w-full flex justify-between items-center mx-auto  ">
        <div className="w-full flex items-center justify-between px-3">
          <div className="text-3xl font-bold tracking-widest cursor-pointer dark:text-white text-black">
            UI
          </div>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Link
              href="https://github.com/faisal004/ui"
              target="_blank"
              className="border-2 p-2 rounded-md"
            >
              <Github className="h-5 w-5 dark:text-white text-black " />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
