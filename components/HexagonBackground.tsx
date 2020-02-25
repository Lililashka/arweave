import { useState, useEffect } from "react"
import { isMobile } from "react-device-detect";

function getImagePaths(isMobile = false) {
  const images = []
  const totalImages = isMobile ? 100 : 150;
  for (let i = 1; i <= totalImages; i++) {
    images.push(`/images/hexagonbg/${i}.jpg`)
  }
  return images
}

const HexagonBackground: React.FunctionComponent = () => {
  const [opacity, setOpacity] = useState(1);
  const [imagePaths, setImagePaths] = useState<string[]>([]);
  const [className, setClassName] = useState("");

  useEffect(() => {
    setImagePaths(getImagePaths(isMobile));
    setClassName(isMobile ? "mobile" : "desktop")
    // Fade out while scrolling
    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY);
      const newOpacity = Math.max(1 - newScrollHeight / 1500, 0).toFixed(2)
      const newOpacityValue = parseFloat(newOpacity);
      setOpacity(newOpacityValue)
    }
  }, []);

  const renderGridItem = imagePaths.map((imagePath, index) => {
    const key = `${index}`
    return (
      <li key={key}>
        <div className="hexagon">
          <img className={`tile-${index}`} src={imagePath} />
        </div>
      </li>
    )
  })

  return (
    <div className="hexagonbg-grid-container">
      <ul className={`hexagonbg-grid clear ${className}`} style={{ opacity }}>
        {renderGridItem}
      </ul>
    </div>
  )
}

export default HexagonBackground