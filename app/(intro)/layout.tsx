import MobileHeader from '@/components/mobile-header'
import Sidebar from '@/components/sidebar'
import Footer from './_components/footer'

type Props = {
  children: React.ReactNode
}

const IntroLayout = ({ children }: Props) => {
  return <main className="">{children}
  <Footer/>
  </main>
}
export default IntroLayout
