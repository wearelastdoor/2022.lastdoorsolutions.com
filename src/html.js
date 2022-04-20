import * as React from "react"
import PropTypes from "prop-types"

const HTML = props => {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}

        <div id="c-loader" className="c-loader" key={`c-loader`}>
          <div className="c-loader__graphic">
            <svg
              width="216"
              height="195"
              viewBox="0 0 216 195"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path id="path_1"
                d="M28 136C13.1062 136 1 123.894 1 109C1 94.1062 13.1062 82 28 82C42.8938 82 55 94.1062 55 109V109C55 123.894 42.8938 136 28 136Z"
                stroke="#F5F6EF"
              />
              <circle cx="111" cy="90" r="14" stroke="#F5F6EF" />
              <circle
                cx="71"
                cy="168"
                r="11.5"
                fill="#F5F6EF"
                stroke="#F6F6EF"
              />
              <path
                d="M108.917 194C103.175 194 98.2302 189.976 97.1934 184.558C96.0769 178.831 99.905 173.259 105.807 172.175C106.046 172.098 106.285 172.098 106.445 172.098C109.475 171.711 112.585 172.485 115.058 174.187C120.241 177.825 121.597 184.79 117.929 189.666C115.855 192.375 112.506 194 108.917 194Z"
                stroke="#F5F6EF"
              />
              <path
                d="M115.232 119.472L117.446 120.339C121.083 121.677 122.902 125.693 121.558 129.315L112.781 152.465C111.437 156.087 107.405 157.898 103.768 156.56L101.554 155.693C97.9167 154.355 96.0982 150.339 97.4423 146.717L106.219 123.567C107.563 119.945 111.595 118.055 115.232 119.472Z"
                stroke="#F5F6EF"
              />
              <path
                d="M62.6463 83.6682L62.6462 83.6682L62.6452 83.674C61.8114 88.087 64.6466 92.4177 69.1486 93.3335L69.2482 92.8435L69.1661 93.3367C69.638 93.4152 70.222 93.5 70.737 93.5C74.7357 93.5 78.0767 90.75 78.8282 86.8366C78.8283 86.8359 78.8284 86.8351 78.8286 86.8344L82.3537 69.3115L82.3538 69.3115L82.3549 69.3057C83.1886 64.8928 80.3534 60.5621 75.8514 59.6463L75.8515 59.6463L75.8444 59.6449C71.427 58.8126 67.0899 61.6426 66.1726 66.1396L66.1723 66.1409L62.6463 83.6682Z"
                fill="#F5F6EF"
                stroke="#F6F6EF"
              />
              <path
                d="M167 124.5H167.5V124V106V105.5H167H149H148.5V106V124V124.5H149H167Z"
                fill="#F5F6EF"
                stroke="#F6F6EF"
              />
              <path
                d="M117 60.5H117.5V60V42V41.5H117H99H98.5V42V60V60.5H99H117Z"
                fill="#F5F6EF"
                stroke="#F6F6EF"
              />
              <path
                d="M62.1857 115L52 142L82 136.158L62.1857 115Z"
                stroke="#F5F6EF"
              />
              <path
                d="M197.488 90L189 109L214 104.889L197.488 90Z"
                stroke="#F5F6EF"
              />
              <path
                d="M56.6276 1L24 42.7517L81 48L56.6276 1Z"
                stroke="#F5F6EF"
              />
              <ellipse
                cx="189.211"
                cy="140.684"
                rx="12.2105"
                ry="12.6842"
                stroke="#F5F6EF"
              />
              <path
                d="M156.865 89.9613C153.075 89.9613 149.812 87.2244 149.128 83.5402C148.391 79.6455 150.917 75.856 154.812 75.1192C154.97 75.0665 155.128 75.0665 155.233 75.0665C157.233 74.8034 159.286 75.3297 160.917 76.4876C164.338 78.9613 165.233 83.6981 162.812 87.0139C161.443 88.856 159.233 89.9613 156.865 89.9613Z"
                stroke="#F5F6EF"
              />
              <ellipse
                cx="152.474"
                cy="140.737"
                rx="5.47368"
                ry="5.73684"
                stroke="#F5F6EF"
              />
              <path
                d="M129.368 153L139.211 160.316L131.895 170.211L122 162.895L129.368 153Z"
                stroke="#F5F6EF"
              />
            </svg>
          </div>

          <div className="c-loader__counter">
            <span>100</span>
            <sub>%</sub>
          </div>
        </div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
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
