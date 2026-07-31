import Layout from '../layout/Layout'
import HeroSection from '../sections/Hero'
import Breaker from '../sections/Breaker'
import Work from '../sections/Work'
import Experience from '../sections/Experience'
import About from '../sections/About'
import Footer from '../sections/Footer'

function Home() {
  return (
    <Layout>
      <HeroSection />
      <Breaker />
      <Work />
      <Experience />
      <About />
      <Footer />
    </Layout>
  )
}

export default Home
