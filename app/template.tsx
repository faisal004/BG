"use client"
import { useBackgroundStore } from "@/Store/backgroundStore";

export default function Template({ children }: { children: React.ReactNode }) {
    const { backgroundColor, setBgValue } = useBackgroundStore();
    return <div className={backgroundColor}>{children}</div>
  }