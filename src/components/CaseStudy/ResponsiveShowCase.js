import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const ResponsiveShowCase = ({ themeType, title }) => {
  return (
    <div className={`c-responsive-showcase ${themeType}`}>
      <div className="l-container">
        <h2 className="c-responsive-showcase__title" title={title}>
          {title}
        </h2>

        <div className="c-responsive-showcase__image">
          <StaticImage
            src={`../../images/responsiveness-showcase.png`}
            alt="Discovery World Trekking responsive show case"
            height={696}
          />
        </div>
      </div>
    </div>
  )
}

export default ResponsiveShowCase
