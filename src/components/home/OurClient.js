import * as React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

// Import svg Image
import graphic_2 from "images/graphic-02.svg"
import {
    OurClientWrapper,
    OurClientHeader,
    OurClientHeaderContent,
    OurClientHeaderSubTitle,
    OurClientHeaderTitle,
    OurClientHeaderDescription,
    OurClientGraphicWrapper,
    OurClientGraphicImage,
    OurClientCard, OurClientGrid, OurClientItem, OurClientItemDescription
} from "styles/home/OurClient.Style";


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
        <OurClientWrapper>
            <div className={`l-container`}>
                <OurClientHeader>
                    <OurClientHeaderContent>
                        <OurClientHeaderSubTitle dangerouslySetInnerHTML={createHTML(data.items.header.subTitle)}/>
                        <OurClientHeaderTitle title={data.items.header.title}
                                              dangerouslySetInnerHTML={createHTML(data.items.header.title)}/>
                        <OurClientHeaderDescription
                            dangerouslySetInnerHTML={createHTML(data.items.header.description)}/>
                    </OurClientHeaderContent>
                    <OurClientGraphicWrapper>
                        <OurClientGraphicImage src={graphic_2} alt={`we craft brands, that people love`} height={354}
                                               width={334}/>
                    </OurClientGraphicWrapper>
                </OurClientHeader>
                <OurClientCard>
                    <OurClientGrid>
                        {data.items.clients.map((data, index) => {
                            return (
                                <OurClientItem key={index}>
                                    <Img fluid={data.image.url.childImageSharp.fluid}
                                         alt={data.image.alt}
                                         style={{width: `${data.image.width}px`}}/>
                                    <OurClientItemDescription dangerouslySetInnerHTML={createHTML(data.description)}/>
                                </OurClientItem>
                            )
                        })}
                    </OurClientGrid>
                </OurClientCard>
            </div>
        </OurClientWrapper>
    )
}

export default OurClient
