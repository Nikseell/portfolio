import Layout from '../layout/Layout'
import HeroSection from '../sections/Hero'
import Work from '../sections/Work'
import Experience from '../sections/Experience'
import Footer from '../sections/Footer'

function Home() {
  return (
    <Layout>
      <HeroSection />
      <Work />
      <Experience />
      <Footer />
    </Layout>
  )
}

export default Home
