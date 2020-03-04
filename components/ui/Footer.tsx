import * as React from "react"
import FullWidthSection from '../FullWidthSection';



const Footer: React.FunctionComponent = () => (
  <footer>
    <div className="footer__inner">
      <div className="footer__content">
        <div className="footer__section space">
          <a href="/"><img src="/footer-logo.svg" /></a>
          <div className="links">
            <a href="/technology">Storage Endowment</a>
            <a href="/technology#permaweb">Permaweb</a>
            <a href="/technology#content-moderation">Content Moderation</a>
            <a href="/technology#papers">Papers</a>
          </div>
        </div>
        <div className="footer__section space">
          <h4>Build</h4>
          <div className="links space_more">
            <a href="/build">Start</a>
            <a href="/build#interfaces">Interfaces</a>
            <a href="/build#resources">Resources</a>
          </div>
        </div>
        <div className="footer__section space">
          <h4>Mine</h4>
          <div className="links space_more">
            <a href="/mine/start">Start</a>
            <a href="/mine/optimise">Optimise</a>
            <a href="/mine/learn-more">Learn more</a>
          </div>
        </div>
        <div className="footer__section space">
          <h4>Get involved</h4>
          <div className="links space_more">
            <a href="/get-involved/community">Community</a>
            <a href="/get-involved/grants-funding">Grants & Funding</a>
          </div>
        </div>
        <div className="footer__content__company">
          <hr />
          <p>© Copyright 2020. Minimum Spanning Technologies Limited (10889544). International House, 24 Holborn Viaduct, London, EC1A 2BN, United Kingdom.</p>
        </div>
      </div>
      <div className="footer__content__mobile">
        <hr />
        <p>© Copyrights 2020 Minimum Spanning Technologies Limited</p>
      </div>
    </div>
  </footer>
)

export default Footer;