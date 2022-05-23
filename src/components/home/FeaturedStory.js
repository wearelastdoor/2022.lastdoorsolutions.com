import * as React from "react"
import {useStaticQuery, graphql} from "gatsby"
import {
    FeaturedStoryMedia,
    FeaturedStoryWrapper,
    FeaturedStoryContentWrapper,
    FeaturedStoryBG,
    FeaturedStoryImageWrapper,
    FeaturedStoryContent,
    FeaturedStoryImage, FeaturedStorySubtitle, FeaturedStoryDescription, FeaturedStoryTitle
} from "styles/home/FeaturedStory.Style";
import {ButtonStyle} from "styles/defaults/Button.Style";

const useStyles = ButtonStyle;

const FeaturedStory = () => {
    function createHTML(props) {
        return {__html: props}
    }

    const classes = useStyles()
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
        <FeaturedStoryWrapper>
            <div className={`l-container`}>
                <FeaturedStoryMedia>
                    <FeaturedStoryBG className={`c-featured-story__bg`}/>
                    <FeaturedStoryImageWrapper>
                        <FeaturedStoryImage
                            src={data.items.logo.url.childImageSharp.fluid.srcWebp} alt={data.items.logo.alt}
                            style={{maxWidth: data.items.logo.width}} width={202} height={131}/>
                        <img src={data.items.image.url.childImageSharp.fluid.srcWebp} alt={data.items.image.alt}
                             height={559} width={970}/>
                    </FeaturedStoryImageWrapper>
                </FeaturedStoryMedia>
                <FeaturedStoryContentWrapper>
                    <FeaturedStoryContent>
                        <FeaturedStorySubtitle>{data.items.content.subtitle}</FeaturedStorySubtitle>
                        <FeaturedStoryTitle
                            title={data.items.content.title}>{data.items.content.title}</FeaturedStoryTitle>
                        <FeaturedStoryDescription dangerouslySetInnerHTML={createHTML(data.items.content.description)}/>
                        <a href={data.items.button.url}
                           className={`${classes.button} ${classes.buttonDarkAlt}`}>{data.items.button.title}<span></span></a>
                    </FeaturedStoryContent>
                </FeaturedStoryContentWrapper>
            </div>
        </FeaturedStoryWrapper>
    )
}

export default FeaturedStory
