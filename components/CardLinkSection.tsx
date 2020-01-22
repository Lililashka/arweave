import * as React from "react"

type Props = {
  align?: string,
  title: string,
  desc: string,
  action?: string,
  url?: string,
  aosConfig?: object
}

const CardLinkSection: React.FunctionComponent<Props> = ({
  align = "center",
  title = "",
  desc = "",
  action = "see document",
  url = "#",
  aosConfig = {}
}) => {
  const formatDesc = desc.split('  ').map((item, i) => {
    return <p key={i}>{item}</p>
  });
  return (
    <div className="card-link-section" {...aosConfig}>
      <div className={`card-link-section__inner ${align}`}>
        <div className={`card-link-section__content ${align}`}>
          <h1>{title}</h1>
          {formatDesc}
          <a className="btn" href={url}>{action}</a>
        </div>
      </div>
    </div>
  )
}


export default CardLinkSection