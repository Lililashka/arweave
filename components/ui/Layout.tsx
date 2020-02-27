import { useState, useEffect, createRef } from 'react'
import { isMobile } from "react-device-detect";
import AOS from 'aos'
import Head from 'next/head'
import Footer from './Footer'
import NavBar from './Navbar'
import Sidebar from './Sidebar'
import CookiesBanner from '../CookiesBanner'
import HexagonBackground from '../HexagonBackground'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

type Props = {
  title?: string,
  desc?: string,
  className?: string,
  withHexagonBg?: Boolean,
  withAos?: Boolean
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'arweave',
  desc = 'arweave is a global, permanent hard drive built on two novel technologies: the blockweave, a derivative of the blockchain, and proof of access, a custom incentivised proof of work algorithm. These innovations provide truly permanent data storage for the very first time and at a massive scale.',
  className = "",
  withHexagonBg = false,
  withAos = false
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const targetRef = createRef<HTMLDivElement>();
  let targetElement: any = null;

  useEffect(() => {
    window.scrollTo(0, 0)
    targetElement = targetRef.current;
    if (withAos) AOS.init()
  }, [])

  useEffect(() => {
    if (isSidebarOpen) {
      disableBodyScroll(targetElement);
    } else {
      enableBodyScroll(targetElement);
    }

    if (withAos) AOS.init({ disable: isSidebarOpen });

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isSidebarOpen])

  function toogleSidebar(isOpen: boolean) {
    setIsSidebarOpen(isOpen);
  }

  return (
    <div className="layout" ref={targetRef}>
      <Head>
        <link rel="icon" type="image/png" href="/favicon-183x183.png" />
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content={desc} />
        <meta name="format-detection" content="telephone=no" />
      </Head >
      <div className="layout__inner">
        <Sidebar toogleSidebarCallback={toogleSidebar} />
        {withHexagonBg && <HexagonBackground />}
        <div className="page">
          <NavBar />
          <div className={`page__content ${className}`}>
            {children}
          </div>
        </div>
      </div>
      <Footer />
      <CookiesBanner />
    </div >
  )
}

export default Layout