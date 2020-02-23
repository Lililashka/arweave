import * as React from "react"
import Slider from "react-slick";

type Props = {
  title: string,
  description: string,
  author: object,
  url: string
}

const AppDiscoveryCarouselItem: React.FunctionComponent<Props> = ({
  title = "",
  description = "",
  author = { name: "", image: "" },
  url = ""
}) => {
  return (
    <div className="app-discovery-carousel-item">
      <div className="app-discovery-carousel-item__inner">
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
    centerMode: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };

  return (
    <div className="app-discovery-carousel">
      <Slider {...slickSettings}>
        <AppDiscoveryCarouselItem
          title="2020 Permaweb Highlights"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          url="https://google.com"
          author={{ name: "May Doe", image: "https://via.placeholder.com/100x100.png" }}
        />
      </Slider>
    </div >
  )
}


export default AppDiscoveryCarousel