import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const TitleWithImage = ({ themeType, title }) => {
  return (
    <div className={`c-title-image ${themeType}`}>
      <div className="l-container">
        <h2 className="c-title-image__title" title={title}>
          {title}
        </h2>

        <div className="c-title-image__image">
          <StaticImage
            src={`../../images/dashboard.jpg`}
            alt="Dashboard Showcase"
            height={696}
          />
        </div>
      </div>
    </div>
  )
}

export default TitleWithImage
