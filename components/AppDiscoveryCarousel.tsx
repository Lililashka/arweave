import { useState, useEffect } from "react"
import Slider from "react-slick";
import { isMobile, isFirefox } from "react-device-detect";
import FullWidthSection from '../components/FullWidthSection'


type Props = {
  title: string,
  description: string,
  author: {
    name: string,
    image: string
  },
  url: string
  actionText?: string,
}

const AppDiscoveryCarouselItem: React.FunctionComponent<Props> = ({
  title = "",
  description = "",
  author = { name: "", image: "" },
  url = "",
  actionText = undefined
}) => {
  const { name: authorName, image: authorImage } = author;
  const formatDesc = description.split('  ').map((item, i) => {
    return <p key={i}>{item}</p>
  });
  return (
    <div className="app-discovery-carousel-item">
      <div className="app-discovery-carousel-item__inner">
        <div className="author-container">
          <span>create by&nbsp;</span><span className="name">{authorName}</span>
          <img src={authorImage} />
        </div>
        <h1>{title}</h1>
        {formatDesc}
        <p className="action-container">
          <a className="btn" href={url}>{actionText ? actionText : "Check out"}</a>
        </p>
      </div>
    </div>
  )
}

const AppDiscoveryCarousel: React.FunctionComponent = () => {
  var slickSettings = {
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: isMobile ? false : true
  };
  const [webArchiveUrl, setWebArchiveUrl] = useState("https://chrome.google.com/webstore/detail/arweave/iplppiggblloelhoglpmkmbinggcaaoc")

  useEffect(() => {
    if (isFirefox) setWebArchiveUrl("https://addons.mozilla.org/en-US/firefox/addon/arweave/");
  }, [])

  return (
    <FullWidthSection className="app-discovery-carousel">
      <h2>Explore the permaweb</h2><br/>
      <Slider {...slickSettings}>
        <AppDiscoveryCarouselItem
          title="Arweave web archive"
          description="The traditional web is failing us. 30% of web links break within two years. Archive your favourite sites and sources with confidence."
          url={webArchiveUrl}
          author={{ name: "feedweave.co", image: "/images/builders/webarchive.png" }}
          actionText="Archive Now"
        />
        <AppDiscoveryCarouselItem
          title="Feedweave"
          description="A decentralised, trustless blogging platform that knows who should own your data. (Spoiler: It’s you)."
          url="https://feedweave.co/"
          author={{ name: "@literature", image: "/images/builders/feedweave.png" }}
          actionText="Read More"
        />
        <AppDiscoveryCarouselItem
          title="Weavemail"
          description="Big-tech has taken control of email. We no longer have ownership of our own identities. Weavemail is a mail network with integrity. It will never sell your data, show adverts, or violate your privacy."
          url=" https://weavemail.app/"
          author={{ name: "@weavemail", image: "/images/builders/weavemail.png" }}
          actionText="Get Your Address"
        />
        <AppDiscoveryCarouselItem
          title="Ownerless communities"
          description="Content moderation policies tear online communities apart, inhibit new ones from forming, and allow trolls to run rampant. Permaweb apps solve these problems by being ownerless. Their moderation is transparent and described in openly accessible code, enabling a new breed of decentralised online communities."
          url="https://pr7gu7ba5czv.arweave.net/6RbaVQ-pmfL9E9gmTuOV6ZcNB7mTbqBHnqPhn8waxzw#/ "
          author={{ name: "@aokisok", image: "/images/builders/ownerless.png" }}
          actionText="Join the Conversation"
        />
        <AppDiscoveryCarouselItem
          title="Explore the permaweb"
          description="The permaweb hosts hundreds of immutable and decentralised apps. Explore a few here."
          url="http://arweaveapps.com/"
          author={{ name: "@cedriking", image: "/images/builders/permaweb.png" }}
          actionText="Check Them Out"
        />
      </Slider>
    </FullWidthSection >
  )
}


export default AppDiscoveryCarousel