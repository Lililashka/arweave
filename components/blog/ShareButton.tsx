import { useState, useEffect } from "react"
import ReactTooltip from 'react-tooltip'

type Props = {
  url: string
}

const ShareButton: React.FunctionComponent<Props> = ({
  url = ""
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  function shareToTwitter() {

  }

  function shareToFacebook() {

  }

  function shareToEmail() {

  }

  return (
    <div className="share-button-container">
      <a className="share-button" data-tip data-for='share-button-tooltip' data-event='click'>
        <img src="/images/icons/share.svg" /><span>SHARE THIS</span>
      </a>
      {isMounted && <ReactTooltip id="share-button-tooltip" className="share-button-tooltip"
        place="bottom" type="light" effect="solid"
        globalEventOff='click' border clickable={true}>
        <ul>
          <li><a href="#" onClick={shareToTwitter}><img src="/images/icons/share.svg" /><span>twitter</span></a></li>
          <li><a href="#" onClick={shareToFacebook}><img src="/images/icons/share.svg" /><span>facebook</span></a></li>
          <li><a href="#" onClick={shareToEmail}><img src="/images/icons/share.svg" /><span>email</span></a></li>
        </ul>
      </ReactTooltip>}
    </div>
  )
}


export default ShareButton