import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const FrontShowCase = ({ themeType, title, description }) => {
  return (
    <section className={`c-front-showcase ${themeType}`}>
      <div className="l-container">
        <h2 className="c-front-showcase__title" title={title}>
          {title}
        </h2>
        <p className="c-front-showcase__description">{description}</p>
        <div className="c-front-showcase__image">
          <StaticImage
            src={`../../images/dwt-front-showcase.jpg`}
            alt="Discovery World Trekking Front page show case"
            height={546}
          />
        </div>
      </div>
    </section>
  )
}

export default FrontShowCase
