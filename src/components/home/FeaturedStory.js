import * as React from "react"
import {useStaticQuery, graphql} from "gatsby"


const FeaturedStory = () => {
    function createHTML(props) {
        return {__html: props}
    }

    const data = useStaticQuery(graphql`
    {
      items: featuredStoryJson {
        content {
          title
          subtitle
          description
        }
        image {
          alt
          url {
            childImageSharp {
              fluid(maxWidth:1940, quality: 100) {
                srcWebp
              }
            }
          }
        }
        logo {
          url {
            childImageSharp {
              fluid( quality: 100) {
                srcWebp
              }
            }
          }
          alt
          width
        }
        button {
          title
          url
        }
      }
    }
  `)
    return (
        <section className={`c-featured-story`}>
            <div className={`container`}>
                <div className={`c-featured-story__media`}>
                      <span className={`c-featured-story__bg`}><span
                          className={`screen-reader-text`}>background</span></span>
                    <figure className={`c-featured-story__image`}>
                        <img className={`c-featured-story__image-logo`}
                             src={data.items.logo.url.childImageSharp.fluid.srcWebp} alt={data.items.logo.alt}
                             style={{maxWidth: data.items.logo.width}} width={202} height={131}/>

                        <img src={data.items.image.url.childImageSharp.fluid.srcWebp} alt={data.items.image.alt}
                             height={559} width={970}/>
                    </figure>
                </div>
                <div className="c-featured-story__content-wrap">
                    <div className="c-featured-story__content">
                        <strong className={`c-featured-story__lead-text`}>{data.items.content.subtitle}</strong>
                        <h2 className={`c-featured-story__title`}
                            title={data.items.content.title}>{data.items.content.title}</h2>
                        <div className={`c-featured-story__description`}
                             dangerouslySetInnerHTML={createHTML(data.items.content.description)}/>

                        <a href={data.items.button.url}
                           className={`c-btn c-btn--dark-alt c-btn--disabled`}>{data.items.button.title}<span></span></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedStory
