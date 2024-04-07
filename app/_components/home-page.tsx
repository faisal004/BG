import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
    return ( <div className="max-w-[1300px] mx-auto w-full flex flex-col items-center justify-center h-[100%]  gap-6 font-cal">
    <div className="md:text-7xl text-4xl font-semibold tracking-widest text-left  w-full  px-3 text-transparent bg-clip-text bg-gradient-to-r from-black dark:from-white to-gray-600 dark:to-gray-400  flex flex-col gap-3">
      <p>
        Collection of CSS Tricks <br /> I learn on Daily basis
      </p>

      <p className=" w-full text-left  tracking-widest text-xl text-gray-500 ">
        Easily integrate these Tailwind CSS and Vanilla CSS crafted snippets
        into your next project <br /> with simple copy-and-paste
        functionality. They&apos;re ready-to-use, providing seamless
        integration.
      </p>
      <Link href="/explore" className='w-fit'>
        <Button className='tracking-normal px-20 py-6'>Explore</Button>
      </Link>
    </div>


  </div> );
}
 
export default HomePage;