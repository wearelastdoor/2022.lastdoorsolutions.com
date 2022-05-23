import * as React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import {useEffect, useRef} from "react";
import gsap from 'gsap'

import {newContent, animateObjects} from "components/layout"
import ESTDBadge from 'images/estd-badge.png'
import {ButtonStyle} from "styles/defaults/Button.Style";
import {
    MainHeroWrapper,
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

    const heroTitle = useRef()
    const heroButton = useRef()
    const heroSection = useRef()
    const heroDescription = useRef()
    const heroBadge = useRef()

    useEffect(() => {
        gsap.to(heroTitle.current, {
            scrollTrigger: {
                trigger: document.body,
                start: 'center center',
                scrub: 1,
                scroller: '#page-wrapper',
            },
            y: -50,
        })

        gsap.to(heroDescription.current, {
            scrollTrigger: {
                trigger: document.body,
                start: 'center center',
                scrub: 1,
                scroller: '#page-wrapper',
            },
            y: -20,
        })

        gsap.to(heroButton.current, {
            scrollTrigger: {
                trigger: document.body,
                start: 'center center',
                scrub: 1,
                scroller: '#page-wrapper',
            },
            y: -10,
        })

        gsap.to(heroBadge.current, {
            scrollTrigger: {
                trigger: document.body,
                start: '10px calc(100% - 240)',
                scrub: 1,
                scroller: '#page-wrapper'
            },
            // ease: 'linear',
            y: 200
        })

    }, [])

    return (
        <MainHeroWrapper ref={heroSection}>
            <div className={`l-container`}>
                <MainHeroBadge ref={heroBadge} className={`c-hero__badge`}>
                    <img src={ESTDBadge} alt={`18 years of experience badge.`} height={200} width={200}/>
                    <span className={`visually-hidden`}
                          dangerouslySetInnerHTML={{__html: '18 years of experience.'}}></span>
                </MainHeroBadge>
                <MainHeroTitle title={title} className={'c-hero__title'} dangerouslySetInnerHTML={createHTML(title)}
                               ref={heroTitle}/>
                <MainHeroDescription className={`c-hero__description`} ref={heroDescription}
                                     dangerouslySetInnerHTML={createHTML(description)}/>
                <TransitionLink ref={heroButton}
                                to={linkUrl}
                                className={`${classes.button} ${classes.buttonLightDark} c-hero__button`}
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
            </div>
        </MainHeroWrapper>
    )
}

export default MainHero
