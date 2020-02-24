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
}

const AppDiscoveryCarouselItem: React.FunctionComponent<Props> = ({
  title = "",
  description = "",
  author = { name: "", image: "" },
  url = ""
}) => {
  const { name: authorName, image: authorImage } = author;

  return (
    <div className="app-discovery-carousel-item">
      <div className="app-discovery-carousel-item__inner">
        <div className="author-container">
          <span>create by&nbsp;</span><span className="name">{authorName}</span>
          <img src={authorImage} />
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={url}>Check out an app</a>
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
          title="2020 Permaweb Highlights"
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          url="https://google.com"
          author={{ name: "Jane Doe", image: "https://via.placeholder.com/100x100.png" }}
        />
        <AppDiscoveryCarouselItem
          title="Feedwave"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          url="https://google.com"
          author={{ name: "June Doe", image: "https://via.placeholder.com/100x100.png" }}
        />
        <AppDiscoveryCarouselItem
          title="Heatwave"
          description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          url="https://google.com"
          author={{ name: "May Doe", image: "https://via.placeholder.com/100x100.png" }}
        />
        <AppDiscoveryCarouselItem
          title="Heatwave 2"
          description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          url="https://google.com"
          author={{ name: "May Doe", image: "https://via.placeholder.com/100x100.png" }}
        />
      </Slider>
    </div >
  )
}


export default AppDiscoveryCarousel