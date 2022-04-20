import * as React from "react"

const Heading = ({ themeType, title, description }) => {
  return (
    <section className={`c-heading ${themeType}`}>
      <div className="l-container">
        <h2 className="c-heading__title" title={title}>
          {title}
        </h2>
        <p className="c-heading__description">{description}</p>
      </div>
    </section>
  )
}

export default Heading
