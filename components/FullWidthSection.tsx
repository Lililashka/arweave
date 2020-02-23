import * as React from "react"

type Props = {
  className?: string
}

const FullWidthSection: React.FunctionComponent<Props> = ({
  className = "",
  children
}) => {
  return (
    <section className={`full-width-section ${className}`}>
      <div className="full-width-section__inner">
        {children}
      </div>
    </section>
  )
}

export default FullWidthSection