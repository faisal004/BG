import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="max-w-[1300px] w-full flex flex-col items-center justify-center h-full gap-6 font-cal">
      <div className="md:text-7xl text-4xl font-semibold tracking-widest md:text-center text-left w-full  px-3  ">
        Collection of Tailwind Tricks <br /> I learn on Daily basis
      </div>
      <p className="md:w-5/6 w-full md:text-center text-left tracking-widest text-xl px-3">
        Easily integrate these Tailwind CSS and Vanilla CSS crafted snippets
        into your next project with simple copy-and-paste functionality.
        They&apos;re ready-to-use, providing seamless integration.
      </p>
      <div>
        <Button>Explore</Button>
      </div>
    </div>
  )
}
