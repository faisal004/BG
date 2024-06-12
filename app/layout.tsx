import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
const inter = Inter({ subsets: ['latin'] })
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
export const metadata: Metadata = {
  title: 'BG | Faisal Husain',
  description: 'Collection of Modern Backgrounds',
 
  openGraph: {
    title: 'BG | Faisal Husain',
    description: 'Collection of Modern Backgrounds',
    url: 'https://bg-faisal.vercel.app/',
    images:[
      {
        url:"https://bg-faisal.vercel.app/bg.png",
        width:1200,
        height:639,
        alt:"Faisal Husain"
      }
    ]
  },
  twitter:{
    card:"summary_large_image",
    title:"BG | Faisal Husain",
    description:"Collection of Modern Backgrounds",
    images:[
      {
        url:"https://bg-faisal.vercel.app/bg.png",
        width:1200,
        height:639,
        alt:"Faisal Husain"
      }
    ]

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {' '}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
