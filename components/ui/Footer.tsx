import * as React from "react"

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
          <h4>community</h4>
          <div className="links">
            <a href="https://github.com">
              <div>
                <img src="/images/socials/medium.svg" />
                <span>github</span>
              </div>
            </a>
            <a href="https://twitter.com">
              <div>
                <img src="/images/socials/medium.svg" />
                <span>twitter</span>
              </div>
            </a>
            <a href="https://discord.com">
              <div>
                <img src="/images/socials/medium.svg" />
                <span>discord</span>
              </div>
            </a>
            <a href="https://telegram.org">
              <div>
                <img src="/images/socials/medium.svg" />
                <span>telegram</span>
              </div>
            </a>
          </div>
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