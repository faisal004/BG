'use client'

import { Button } from '@/components/ui/button'
import TextCard from './_components/text-card'
import { useTextStore } from '@/Store/textStore/textStore'

const TextsSection = () => {
  const { settxtValue } = useTextStore()
  const handleReset = () => {
    settxtValue('')
  }
  return (
    <div className="flex flex-col items-center justify-center w-full   ">
      <div className="flex flex-col gap-4 items-center justify-center h-screen md:text-5xl text-3xl text-center p-3 font-semibold   max-w-[1200px] ">
        <div>
          Collection of different text styles also you can make your own.
        </div>
        <Button onClick={handleReset} className="mt-5 tracking-normal">
          Reset
        </Button>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-3 w-full max-w-[1200px] p-2 ">
        <TextCard text="text-transparent bg-clip-text bg-gradient-to-r from-black dark:from-white to-gray-600 dark:to-gray-400" />
      </div>
    </div>
  )
}

export default TextsSection
