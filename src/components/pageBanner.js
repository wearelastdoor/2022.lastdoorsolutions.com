import * as React from "react"

const PageBanner = ({ title, pageName, themeType, containerWidth }) => {

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
            style={{ maxWidth: containerWidth ? containerWidth : 620 }}
          >
            {title}
          </h1>
        </div>
      </div>
    </section>
  )
}


export default PageBanner
