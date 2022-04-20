import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const ImageContent = ({ themeType, id, layout }) => (
  <StaticQuery
    query={graphql`
      {
        alldata: allImageContentJson {
          edges {
            node {
              id
              description
              title
              image {
                src {
                  childImageSharp {
                    fluid(maxWidth: 2004, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                alt
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <section className={`c-image-content ${themeType} ${layout}`}>
          {data.alldata.edges.map(data =>
            data.node.id === id ? (
              <div className="l-container" key={data.node.id}>
                <div className="c-image-content__content">
                  <h2
                    className="c-image-content__title"
                    dangerouslySetInnerHTML={{ __html: data.node.title }}
                  />
                  <div
                    className="c-image-content__description"
                    dangerouslySetInnerHTML={{
                      __html: data.node.description,
                    }}
                  />
                </div>
                <div className="c-image-content__image">
                  <div
                    className="c-image-content__imageInner"
                    style={{ maxWidth: data.node.image.width }}
                  >
                    <Img
                      fluid={data.node.image.src.childImageSharp.fluid}
                      alt={data.node.image.alt}
                      loading="auto"
                    />
                  </div>
                </div>
              </div>
            ) : null
          )}
        </section>
      )
    }}
  />
)

export default ImageContent
