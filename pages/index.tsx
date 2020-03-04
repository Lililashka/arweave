import { NextPage } from 'next'
import 'aos/dist/aos.css'
import Layout from '../components/ui/Layout'
import CardLinkSection from '../components/CardLinkSection'
import NewsletterSignup from '../components/NewsletterSignup'
import AppDiscoveryCarousel from '../components/AppDiscoveryCarousel'
import LogoSection from '../components/LogoSection'

const Home: NextPage = () => {
  return (
    <Layout withAos withHexagonBg className="homepage">
      <CardLinkSection aosConfig={{ "data-aos": "fade-up", "data-aos-easing": "linear", "data-aos-duration": "500" }} 
        title="Store data, permanently."
        desc="Arweave enables you  
        to store documents and applications forever."
        url="/#arweave-intro"
        action="LEARN MORE" />
      <a className="anchor" id="arweave-intro"/>
      <CardLinkSection aosConfig={{ "data-aos": "fade-up", "data-aos-easing": "linear", "data-aos-duration": "500" }} 
        align="left" 
        title="Arweave makes information permanence sustainable."
        desc="Arweave is a new type of storage that backs data with sustainable and perpetual endowments, allowing users and developers to truly store data forever – for the very first time. 
        As a collectively owned hard drive that never forgets, Arweave allows us to remember and preserve valuable information, apps, and history indefinitely. By preserving history, it prevents others from rewriting it."
        />
      <CardLinkSection aosConfig={{ "data-aos": "fade-up", "data-aos-easing": "linear", "data-aos-duration": "500" }} 
        align="right" 
        title="Welcome to the permaweb."
        desc="OOn top of the Arweave network lives the permaweb: a global, community-owned web that anyone can contribute to or get paid to maintain. 

        The permaweb looks just like the normal web (you are viewing it right now), but all of its content – from images to full web apps – is permanent, retrieved quickly, and decentralized – forever. Just as the first web connected people over vast distances, the permaweb connects people over extremely long periods of time. 

        No more 404s. No more stealth edits. No more web apps that decline in quality."
        />
      <AppDiscoveryCarousel />
      <NewsletterSignup />
      <LogoSection />
    </Layout>
  )
};

export default Home;