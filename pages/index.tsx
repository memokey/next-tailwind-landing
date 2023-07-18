import Link from 'next/link'
import LandingPage from '../components/Landing'
import Header from '../components/Header'

const IndexPage = () => (
  <div className='relative'>
    <Header />
    <div className='mt-[64px]'>
      <LandingPage />
    </div>
  </div>
)

export default IndexPage
