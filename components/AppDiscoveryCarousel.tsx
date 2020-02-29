import * as React from "react"
import Slider from "react-slick";
import { isMobile } from "react-device-detect";

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

  return (
    <div className="app-discovery-carousel">
      <Slider {...slickSettings}>
        <AppDiscoveryCarouselItem
          title="Arweave web archive"
          description="30% of web links break within two years. The traditional web is failing you.  Archive your favourite sites and sources, ensuring they exist forever."
          url="https://chrome.google.com/webstore/detail/arweave/iplppiggblloelhoglpmkmbinggcaaoc"
          author={{ name: "Jane Doe", image: "https://via.placeholder.com/100x100.png" }}
          actionText="Archive Now"
        />
        <AppDiscoveryCarouselItem
          title="Feedweave"
          description="A decentralised, trustless blogging platform that knows who should own your data.  Spoiler: It is you."
          url="https://google.com"
          author={{ name: "@literature", image: "https://via.placeholder.com/100x100.png" }}
          actionText="Read More"
        />
        <AppDiscoveryCarouselItem
          title="Weavemail"
          description="Big-tech has taken control of email. We no longer have ownership of our own identities.  Weavemail is a mail network that with integrity. It will never sell your data, show adverts, or violate your privacy."
          url="https://google.com"
          author={{ name: "May Doe", image: "https://via.placeholder.com/100x100.png" }}
          actionText="Get Your Address"
        />
        <AppDiscoveryCarouselItem
          title="Ownerless communities"
          description="Content moderation policies frequently rip online communities apart, or allow trolls to run rampant.  Permaweb apps solve these problems by being ownerless. Their moderation is transparent and described in openly accessible code, enabling a new breed of decentralised online communities."
          url="https://google.com"
          author={{ name: "@aokisok", image: "https://via.placeholder.com/100x100.png" }}
          actionText="Join the Conversation"
        />
        <AppDiscoveryCarouselItem
          title="Explore the permaweb"
          description="The permaweb already hosts hundreds of immutable and decentralised apps. Explore a selection of them here."
          url="https://google.com"
          author={{ name: "@cedriking", image: "https://via.placeholder.com/100x100.png" }}
          actionText="Check Them Out [-> Arweave Apps]"
        />
      </Slider>
    </div >
  )
}


export default AppDiscoveryCarousel