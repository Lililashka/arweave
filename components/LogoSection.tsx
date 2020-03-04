import * as React from "react"
import FullWidthSection from './FullWidthSection'

type Props = {
}

const LogoSection: React.FunctionComponent<Props> = () => {
  return (
    <FullWidthSection className="logo-section-container">
      <div className="logo-section">
        <div className="line">
          <div><img src="/images/partners/pn-techstar.png" /></div>
          <div><img src="/images/partners/pn-usv.png" /></div>
          <div><img src="/images/partners/pn-1kx.png" /></div>
          <div><img src="/images/partners/pn-multicoin.png" /></div>
        </div>
        <div className="line">
          <div><img src="/images/partners/pn-coinbase.png" /></div>
          <div><img src="/images/partners/pn-iwf.png" /></div>
          <div><img src="/images/partners/pn-a16z.png" /></div>
        </div>
      </div>
    </FullWidthSection>

  )
}


export default LogoSection