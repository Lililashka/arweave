import { useEffect } from 'react'
import { NextPage } from 'next'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Layout from '../components/ui/Layout'
import CardLinkSection from '../components/CardLinkSection'
import FullWidthSection from '../components/FullWidthSection'
import NewsletterSignup from '../components/NewsletterSignup'
import AppDiscoveryCarousel from '../components/AppDiscoveryCarousel'
import ImageGrid from '../components/ImageGrid'

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout withHexagonBg>
      <CardLinkSection aosConfig={{ "data-aos": "fade-up", "data-aos-easing": "linear", "data-aos-duration": "500" }} title="Store data, permanently"
        desc="Arweave enables you to permanently host  your web apps and pages, simply and quickly."
        action="SEE DOCUMENTATION" />
      <CardLinkSection aosConfig={{ "data-aos": "fade-up", "data-aos-easing": "linear", "data-aos-duration": "500" }} align="left" title="Feature Number One"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        action="DOWNLOAD NOW" />
      <CardLinkSection aosConfig={{ "data-aos": "fade-up", "data-aos-easing": "linear", "data-aos-duration": "500" }} align="right" title="Feature Number Two"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        action="GO TO THAT PAGE" />
      <AppDiscoveryCarousel />
      <NewsletterSignup />
      <FullWidthSection className="images-grid-container">
        <ImageGrid images={["/images/partners/pn-techstar.png", "/images/partners/pn-1kx.png", "/images/partners/pn-iwf.png"]} />
      </FullWidthSection>
    </Layout>
  )
};

export default Home;