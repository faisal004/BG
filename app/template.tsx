'use client'
import { useBackgroundStore } from '@/Store/backgroundStore'

export default function Template({ children }: { children: React.ReactNode }) {
  const { backgroundColor, backgroundDynamic } = useBackgroundStore()
  return <div className={backgroundColor} style={backgroundDynamic} >{children}</div>
}
