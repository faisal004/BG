import { ModeToggle } from '@/components/toggle-theme'
import { Github } from 'lucide-react'

const Navbar = () => {
  return (
    <div className="h-16 flex items-center px-3 border-b-2 border-gray-400 w-full">
      <div className="max-w-[1300px] w-full flex justify-between items-center mx-auto">
        <div className="text-3xl font-bold tracking-widest cursor-pointer">UI</div>
        <div className='flex items-center gap-2'>
            <ModeToggle/>
          <Github />
        </div>
      </div>
    </div>
  )
}

export default Navbar
