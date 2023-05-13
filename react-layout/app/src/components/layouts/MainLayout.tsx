import { ReactNode } from 'react'
import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'
type Props = {
  children?: ReactNode
}
const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
