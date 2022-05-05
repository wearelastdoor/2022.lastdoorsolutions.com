import * as React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import {newContent, animateObjects} from "components/layout"
// Import svg Image
import featuredCaseStudyImage from "images/featured-img-01.webp"
import graphic_1 from "images/graphic-01.svg"
import dwt_logo from "images/dwt-white-logo.svg"

import {
    IntroWrapper,
    IntroOverlayBg,
    IntroCard,
    IntroTitle,
    IntroList,
    IntroListItems,
    IntroListItemsDescription,
    IntroListIcon,
    IntroListMeta,
    IntroListUser,
    IntroListUserDesignation,
    IntroBrandImage,
    IntroDWTLogo,
    IntroIllustration
} from "styles/home/Intro.Style";

const Intro = ({title, listDescription}) => {
    function createHTML(props) {
        return {__html: props}
    }

    return (
        <IntroWrapper>
            <IntroOverlayBg/>
            <div className={`l-container`}>
                <IntroCard>
                    <IntroTitle dangerouslySetInnerHTML={createHTML(title)}/>
                    <IntroList>
                        {listDescription.map(dataItem => {
                            return (
                                <IntroListItems key={dataItem.description}>
                                    <IntroListIcon className={`icon icon-quote`}
                                                   dangerouslySetInnerHTML={createHTML(`<use xlink:href="#icon-quote"></use>`)}/>
                                    <IntroListItemsDescription
                                        dangerouslySetInnerHTML={createHTML(dataItem.description)}/>
                                    <IntroListMeta>
                                        <IntroListUser dangerouslySetInnerHTML={createHTML(dataItem.listUser)}/>
                                        <IntroListUserDesignation
                                            dangerouslySetInnerHTML={createHTML(dataItem.listDesignation)}/>
                                    </IntroListMeta>
                                </IntroListItems>
                            )
                        })}
                    </IntroList>
                    <IntroDWTLogo style={{backgroundImage: `url(${featuredCaseStudyImage})`}}>
                        <TransitionLink
                            to="/discovery-world-trekking/"
                            title="Discovery World Trekking"
                            exit={{
                                length: 0.6,
                                trigger: ({exit, e, node}) => animateObjects(exit, node),
                            }}
                            entry={{
                                delay: 0.7,
                                trigger: ({entry, node}) => newContent(node),
                            }}>
                            <strong><IntroBrandImage src={dwt_logo} alt={`dwt logo`} height={40} width={117}/>{`featured case study`}</strong>
                        </TransitionLink>
                    </IntroDWTLogo>
                </IntroCard>
                <IntroIllustration><img src={graphic_1} alt={`revolutionary utility for nepalese"`} width={377} height={498}/></IntroIllustration>
            </div>
        </IntroWrapper>
    )
}

export default Intro
