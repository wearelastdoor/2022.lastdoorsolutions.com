import * as React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

// Import svg Image
import graphic_2 from "../../images/graphic-02.svg"

const OurClient = () => {
    function createHTML(props) {
        return {__html: props}
    }

    const data = useStaticQuery(graphql`
    {
     items: ourClientJson {
        header {
          subTitle
          title
          description
        }
        clients {
          description
          image {
            alt
            width
            url {
              childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
    return (
        <section className="c-our-client">
            <div className="l-container">
                <header className="c-our-client__header">
                    <div className="c-our-client__header-content">
                        <h2 className="c-our-client__lead-text">
                            {data.items.header.subTitle}
                        </h2>
                        <h3 className="c-our-client__title" title={`${data.items.header.title}`}>
                            {data.items.header.title}
                        </h3>
                        <p className="c-our-client__description">
                            {data.items.header.description}
                        </p>
                    </div>
                    <figure className="c-our-client__image">
                        <img src={graphic_2} alt={`we craft brands, that people love`} height={354} width={334}/>
                    </figure>
                </header>
                <div className="c-our-client__card">
                    <div className="l-grid">
                        {data.items.clients.map((data, index) => {
                            return (
                                <div className="c-client" key={index}>
                                    <Img className="c-client__logo" fluid={data.image.url.childImageSharp.fluid}
                                         alt={data.image.alt}
                                         style={{width: `${data.image.width}px`}}/>
                                    <div className="c-client__description"
                                         dangerouslySetInnerHTML={createHTML(data.description)}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurClient
