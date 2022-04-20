import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const ContentWithLogos = ({ themeType, title, description }) => {
  return (
    <section className={`c-logos-content ${themeType}`}>
      <div className="l-container">
        <div className="c-logos-content__col c-logos-content__col--centered">
          <div className="c-logos-content__logos">
            <div className="c-logos-content__logo-item">
              <StaticImage
                src={"../../images/logo-laravel.png"}
                alt="Laravel"
                height={60}
              />
            </div>
            <div className="c-logos-content__logo-item">
              <StaticImage
                src={"../../images/logo-html5.png"}
                alt="HTML5"
                height={60}
              />
            </div>
            <div className="c-logos-content__logo-item">
              <StaticImage
                src={"../../images/logo-react.png"}
                alt="React"
                height={53}
              />
            </div>
            <div className="c-logos-content__logo-item">
              <StaticImage
                src={"../../images/logo-css3.png"}
                alt="CSS3"
                height={60}
              />
            </div>
          </div>
          <p className="c-carousel-showcase__description">{description}</p>
        </div>
        <div className="c-logos-content__col">
          <h2 className="c-logos-content__title" title={title}>
            {title}
          </h2>
        </div>
      </div>
    </section>
  )
}

export default ContentWithLogos
