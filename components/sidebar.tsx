'use client'
import { docsConfig } from '@/config/docs'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
type Props = {
  className?: string
}

const Sidebar = ({ className }: Props) => {
  const pathname = usePathname()
  return (
    <div
      className={cn(
        ' h-full lg:w-[256px] lg:fixed left-0 top-0  border-r-2 flex-col',
        className,
      )}
    >
      <div className="border-b-2 border-gray-400 flex items-center justify-center font-bold text-3xl py-2 tracking-widest">
        <Link className="dark:text-white text-black" href="/">
          UI
        </Link>
      </div>
      <div className="flex flex-col items-start w-full  justify-start p-3">
        {/* Check if the current route matches the link's href, if so, add 'text-emerald-500' class */}
        {docsConfig.items.map((item, index) => (
          <Link key={index} href={item?.href}>
            <div
              className={`text-base font-semibold tracking-wider cursor-pointer group flex w-full items-center rounded-md border border-transparent px-2 py-1 ${
                pathname === item?.href
                  ? 'text-emerald-500'
                  : 'text-muted-foreground'
              } hover:text-emerald-500 hover:translate-x-1 transition duration-200`}
            >
              {item?.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
