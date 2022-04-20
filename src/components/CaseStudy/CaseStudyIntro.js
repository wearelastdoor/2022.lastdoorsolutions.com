import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const CaseStudyIntro = ({ themeType, description }) => {
  function createHTML(props) {
    return { __html: props }
  }

  return (
    <div className={`c-casestudy-intro ${themeType}`}>
      <div className="l-container">
        <div
          className="c-casestudy-intro__content"
          dangerouslySetInnerHTML={createHTML(description)}
        />
        <div className="c-casestudy-intro__image">
          <StaticImage
            src={"../../images/heritage.png"}
            alt="heritage"
            height={866}
          />
        </div>
      </div>
    </div>
  )
}

export default CaseStudyIntro
