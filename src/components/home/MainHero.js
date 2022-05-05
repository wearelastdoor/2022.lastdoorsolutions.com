import * as React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import {newContent, animateObjects} from "components/layout"
import ESTDBadge from 'images/estd-badge.png'
import {ButtonStyle} from "styles/defaults/Button.Style";
import {
    MainHeroWrapper,
    MainHeroContainer,
    MainHeroBadge,
    MainHeroTitle,
    MainHeroDescription
} from "styles/home/MainHero.Style";

const useStyles = ButtonStyle;

const MainHero = ({title, description, linkUrl, linkTitle}) => {

    function createHTML(props) {
        return {__html: props}
    }

    const classes = useStyles()

    return (
        <MainHeroWrapper>
            <MainHeroContainer className={`l-container`}>
                <MainHeroBadge>
                    <img src={ESTDBadge} alt={`18 years of experience badge.`} height={200} width={200}/>
                    <span className={`visually-hidden`}
                          dangerouslySetInnerHTML={{__html: '18 years of experience.'}}></span>
                </MainHeroBadge>
                <MainHeroTitle title={title} dangerouslySetInnerHTML={createHTML(title)}/>
                <MainHeroDescription dangerouslySetInnerHTML={createHTML(description)}/>
                <TransitionLink
                    to={linkUrl}
                    className={`${classes.button} ${classes.buttonLightDark}`}
                    exit={{
                        length: 0.6,
                        trigger: ({exit, e, node}) => animateObjects(exit, node),
                    }}
                    entry={{
                        delay: 0.7,
                        trigger: ({entry, node}) => newContent(node),
                    }}
                >
                    {linkTitle}
                    <span></span>
                </TransitionLink>
            </MainHeroContainer>
        </MainHeroWrapper>
    )
}

export default MainHero
