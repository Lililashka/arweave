import { NextPage } from 'next'
import 'aos/dist/aos.css'
import Layout from '../components/ui/Layout'
import CardLinkSection from '../components/CardLinkSection'
import FullWidthSection from '../components/FullWidthSection'
import NewsletterSignup from '../components/NewsletterSignup'
import AppDiscoveryCarousel from '../components/AppDiscoveryCarousel'
import ImageGrid from '../components/ImageGrid'

const Home: NextPage = () => {
  return (
    <Layout withAos withHexagonBg>
      <CardLinkSection aosConfig={{ "data-aos": "fade-up", "data-aos-easing": "linear", "data-aos-duration": "500" }} title="Store data, permanently"
        desc="Arweave enables you to store documents and applications forever."
        action="LEARN MORE" />
      <CardLinkSection aosConfig={{ "data-aos": "fade-up", "data-aos-easing": "linear", "data-aos-duration": "500" }} align="left" title="Arweave makes information permanence sustainable."
        desc="Arweave is a new type of storage that backs data with sustainable and perpetual endowments, allowing users and developers to truly store data forever – for the very first time. 
        
        Arweave is a hard drive that is collectively owned and never forgets, allowing us to remember valuable information, apps, and history for future generations."
        />
      <CardLinkSection aosConfig={{ "data-aos": "fade-up", "data-aos-easing": "linear", "data-aos-duration": "500" }} align="right" title="Welcome to the permaweb."
        desc="On top of the Arweave network lives the permaweb: a global, community-owned web that anyone can contribute to or get paid to maintain. 
        The permaweb looks just like the normal web (you are viewing it right now), but all of its content is completely permanent. Just as the first web connected people over vast distances, the permaweb connects people over extremely long periods of time. 
        
        The permaweb can host all types of content – from images to full web apps – making them available in user’s browsers in a fast and decentralised way, forever. 

        No more 404s. No more stealth edits. No more web apps that decline in quality."
        />
      <AppDiscoveryCarousel />
      <NewsletterSignup />
      <FullWidthSection className="images-grid-container">
        <ImageGrid images={["/images/partners/pn-techstar.png", "/images/partners/pn-techstar.png", "/images/partners/pn-techstar.png", "/images/partners/pn-techstar.png", "/images/partners/pn-1kx.png", "/images/partners/pn-iwf.png"]} />
      </FullWidthSection>
    </Layout>
  )
};

export default Home;