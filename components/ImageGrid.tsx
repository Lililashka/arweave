import * as React from "react"

type Props = {
  images: Array<string>
}

const ImageGrid: React.FunctionComponent<Props> = ({
  images = []
}) => {
  return (
    <div className="image-grid">
      {images.map((src, index) => {
        const key = `image-item-${index}`;
        return <div key={key}><img src={src} /></div>
      })}
    </div>
  )
}


export default ImageGrid