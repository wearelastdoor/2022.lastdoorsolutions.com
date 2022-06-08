import * as React from "react"

const PageBanner = ({ title, pageName, themeType, containerWidth, pageDescription }) => {

  return (
    <section
      className={`c-page-banner ${
        themeType ? themeType : "light"
      }`}
    >
      <div className="l-container">
        <div className="c-page-banner__content">
          <p className="c-page-banner__page-name">{pageName}</p>
          <h1
            className="c-page-banner__title"
            title={title}
            style={{ maxWidth: containerWidth ? containerWidth : 810 }}
          >
            {title}
          </h1>
          <div className={`c-hero-intro__description`}>
              <p>{pageDescription}</p>
          </div>
        </div>
      </div>
    </section>
  )
}


export default PageBanner
