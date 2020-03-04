import { useState, useEffect, createRef } from "react"
import Slider from "react-slick";
import { isMobile, isFirefox } from "react-device-detect";
import FullWidthSection from '../components/FullWidthSection';

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
          <span>created by&nbsp;</span><span className="name">{authorName}</span>
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
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    variableWidth: isMobile ? false : true
  };
  const [webArchiveUrl, setWebArchiveUrl] = useState("https://chrome.google.com/webstore/detail/arweave/iplppiggblloelhoglpmkmbinggcaaoc");
  const sliderRef = createRef<HTMLDivElement>();
  const cursorRef = createRef<HTMLImageElement>();

  useEffect(() => {
    if (isFirefox) setWebArchiveUrl("https://addons.mozilla.org/en-US/firefox/addon/arweave/");

    sliderRef.current!.addEventListener("mousemove", handleMouseMoveEvent);
    sliderRef.current!.addEventListener("mouseout", handleMouseOutEvent);

    return () => {
      sliderRef.current!.removeEventListener("mousemove", handleMouseMoveEvent);
      sliderRef.current!.removeEventListener("mouseout", handleMouseOutEvent);
    };
  }, [])

  function handleMouseMoveEvent(event: MouseEvent) {
    const cursor = cursorRef.current!;
    const slider = sliderRef.current!;
    const sliderBoundingRectTop = slider.getBoundingClientRect().top;
    if (cursor.hidden) cursor.hidden = false;

    const leftPos = Math.round(event.clientX - (cursor.width / 2));
    const topPos = Math.round(event.clientY - sliderBoundingRectTop - (cursor.height / 2));
    cursor.style.left = `${leftPos}px`;
    cursor.style.top = `${topPos}px`;
  }

  function handleMouseOutEvent(event: MouseEvent) {
    cursorRef.current!.hidden = true;
  }

  return (
    <FullWidthSection className="app-discovery-carousel" refObject={sliderRef}>
      <h2>Explore the permaweb</h2><br />
      <Slider {...slickSettings}>
        <AppDiscoveryCarouselItem
          title="Arweave web archive"
          description="The traditional web is failing us. 30% of web links break within two years. Archive your favourite sites and sources forever on the permaweb."
          url={webArchiveUrl}
          author={{ name: "feedweave.co", image: "/images/builders/webarchive.png" }}
          actionText="Archive Now"
        />
        <AppDiscoveryCarouselItem
          title="Feedweave"
          description="A decentralised, trustless blogging platform that knows who should own your data (Spoiler: It’s you)."
          url="https://feedweave.co/"
          author={{ name: "@literature", image: "/images/builders/feedweave.png" }}
          actionText="Read More"
        />
        <AppDiscoveryCarouselItem
          title="Weavemail"
          description="Big-tech has taken control of email. Weavemail is a mail network with integrity -- never selling your data, showing adverts, or violating your privacy."
          url=" https://weavemail.app/"
          author={{ name: "@weavemail", image: "/images/builders/weavemail.png" }}
          actionText="Get Your Address"
        />
        <AppDiscoveryCarouselItem
          title="Ownerless communities"
          description="Content moderation policies tear online communities apart. Permaweb apps solve these problems by being ownerless. Their moderation is transparent and described in code, enabling a new breed of decentralised online communities."
          url="https://dforums.bloc.space"
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
      <img ref={cursorRef} className="cursor" src="/images/icons/drag-cursor.png" alt="Cursor" />
    </FullWidthSection >
  )
}


export default AppDiscoveryCarousel