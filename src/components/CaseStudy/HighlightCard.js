import * as React from "react"

const HighlightCard = ({ themeType, title, decsription }) => {
  return (
    <section className={`c-highlight-block ${themeType} `}>
      <div className="l-container">
        <div className="c-highlight-card">
          <h2 className="c-highlight-card__title" title={title}>
            {title}
          </h2>
          <div
            className="c-highlight-card__description"
            dangerouslySetInnerHTML={{ __html: decsription }}
          />
        </div>
      </div>
    </section>
  )
}

export default HighlightCard
