import * as React from "react"
import PropTypes from "prop-types"

const HTML = props => {
    return (
        <html {...props.htmlAttributes}>
        <head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            {props.headComponents}
        </head>
        <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div id={`c-loader`} className={`c-loader`} key={`c-loader`}>
            <div className={`c-loader__counter`} dangerouslySetInnerHTML={{__html: `<span>100</span><sub>%</sub>`}}/>
        </div>
        <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{__html: props.body}}
        />
        {props.postBodyComponents}
        </body>
        </html>
    )
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
}
export default HTML
