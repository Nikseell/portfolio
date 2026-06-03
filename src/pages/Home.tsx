import Layout from '../layout/Layout'
import HeroSection from '../sections/Hero'
import Work from '../sections/Work'
import Experience from '../sections/Experience'

function Home() {
  return (
    <Layout>
      <HeroSection />
      <Work />
      <Experience />
    </Layout>
  )
}

export default Home
