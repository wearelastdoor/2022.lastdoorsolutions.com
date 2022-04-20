import * as React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import {newContent, animateObjects} from "./../layout"
import estdBadge from '../../images/estd-badge.png'

const MainHero = ({title, description, linkUrl, linkTitle}) => {
    function createHTML(props) {
        return {__html: props}
    }


    return (
        <section className="c-hero" data-scroll-container>
            <div className="l-container">
                <div className="c-hero__badge" data-scroll data-scroll-sticky
                     data-scroll-target=".c-hero__title ">
                    <img src={estdBadge} alt={`18 years of experience badge.`} height={200} width={200}/>
                    <span className={`screen-reader-text`}>18 years of experience.</span>
                </div>
                <h1
                    className="c-hero__title"
                    title={title} data-scroll data-scroll-speed="3"
                    data-scroll-position="top"
                    dangerouslySetInnerHTML={createHTML(title)}
                />
                <div
                    className="c-hero__description"
                    data-scroll data-scroll-speed="2"
                    data-scroll-position="top"
                    dangerouslySetInnerHTML={createHTML(description)}
                />

                <TransitionLink
                    to={linkUrl}
                    className="c-btn c-btn--primary"
                    exit={{
                        length: 0.6,
                        trigger: ({exit, e, node}) => animateObjects(exit, node),
                    }}
                    entry={{
                        delay: 0.7,
                        trigger: ({entry, node}) => newContent(node),
                    }}


                    data-scroll data-scroll-speed="1"
                    data-scroll-position="top"
                >
                    {linkTitle}
                    <span></span>
                </TransitionLink>
            </div>
        </section>
    )
}

export default MainHero
