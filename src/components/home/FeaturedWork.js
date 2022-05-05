import * as React from "react"
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import Masonry from 'react-masonry-css'
import {
    FeaturedWorkWrapper,
    FeaturedWorkHeader,
    FeaturedWorkSubHeading,
    FeaturedWorkHeading,
    FeaturedWorkMasonryStyle,
    FeaturedWorkItem,
    FeaturedWorkItemCard,
    FeaturedWorkItemCardLink,
    FeaturedWorkProjectLatter,
    FeaturedWorkItemCardCategory,
    FeaturedWorkItemCardTitle
} from "styles/home/FeaturedWork.Style";


const useStyles = FeaturedWorkMasonryStyle

const FeaturedWork = () => {
    const breakpointColumns = {
        default: 2,
        767: 1,
    };

    const classes = useStyles();

    const data = useStaticQuery(graphql`
        {
            items: featuredWorksJson {
                header {
                    subTitle
                    title
                }
                works {
                    backgroundColor
                    title
                    image {
                        alt
                        url {
                            childImageSharp {
                                fluid(quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        width
                    }

                    logo {
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

                    linkUrl
                    category
                }
            }
        }
    `)

    return (
        <FeaturedWorkWrapper>
            <div className={`l-container`}>
                <FeaturedWorkHeader>
                    <FeaturedWorkSubHeading>{data.items.header.subTitle}</FeaturedWorkSubHeading>
                    <FeaturedWorkHeading title={data.items.header.title}>{data.items.header.title}</FeaturedWorkHeading>
                </FeaturedWorkHeader>
                <Masonry
                    breakpointCols={breakpointColumns}
                    className={classes.featuredWorkGrid}
                    columnClassName={classes.featuredWorkColumn}>
                    {data.items.works.map((data, i) => {
                        return (
                            <FeaturedWorkItem key={i}>
                                <FeaturedWorkItemCard style={{background: data.backgroundColor}}>
                                    <FeaturedWorkItemCardLink href={data.linkUrl} target={`_blank`}
                                                              rel={'noopener noreferrer'}>
                                        <span className={`visually-hidden`}
                                              dangerouslySetInnerHTML={{__html: data.title}}/>
                                    </FeaturedWorkItemCardLink>
                                    <Img className={classes.featuredWorkLogo}
                                         fluid={data.logo.url.childImageSharp.fluid}
                                         alt={data.logo.alt} style={{maxWidth: data.logo.width}}/>
                                    <FeaturedWorkItemCardTitle dangerouslySetInnerHTML={{__html: data.title}}/>
                                    <FeaturedWorkItemCardCategory dangerouslySetInnerHTML={{__html: data.category}}/>
                                    <FeaturedWorkProjectLatter>
                                        <Img fluid={data.image.url.childImageSharp.fluid} alt={data.image.alt}
                                             style={{maxWidth: data.image.width}}/>
                                    </FeaturedWorkProjectLatter>
                                </FeaturedWorkItemCard>
                            </FeaturedWorkItem>
                        )
                    })}
                </Masonry>
            </div>

        </FeaturedWorkWrapper>
    )
}

export default FeaturedWork
