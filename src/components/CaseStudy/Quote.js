import * as React from "react"

const Quote = ({ themeType, blockQuote, quoteAuthor, designation }) => {
  return (
    <div className={`c-quote ${themeType} `}>
      <div className="l-container">
        <blockquote className="c-quote__blockquote" dangerouslySetInnerHTML={{__html:blockQuote}} />
        <div className="c-quote__meta">
          <cite className="c-quote__user">{quoteAuthor}</cite>
          <p className="c-quote__designation">
            {designation}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Quote
