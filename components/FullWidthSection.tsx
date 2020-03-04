import * as React from "react"

type Props = {
  className?: string,
  refObject?: React.RefObject<HTMLElement>
}

const FullWidthSection: React.FunctionComponent<Props> = ({
  className = "",
  refObject = null,
  children
}) => {
  return (
    <section className={`full-width-section ${className}`} ref={refObject}>
      <div className="full-width-section__inner">
        {children}
      </div>
    </section>
  )
}

export default FullWidthSection