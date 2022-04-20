import * as React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import {newContent, animateObjects} from "./../layout"
// Import svg Image
import featuredCaseStudyImage from "../../images/featured-img-01.webp"
import graphic_1 from "../../images/graphic-01.svg"
import dwt_logo from "../../images/dwt-white-logo.svg"

const Intro = ({title, listDescription}) => {
    function createHTML(props) {
        return {__html: props}
    }
    return (
        <section className="c-intro" data-scroll-container>
            <span className="c-intro__bg"></span>
            <div className="l-container">
                <div className="c-intro__card" data-scroll data-scroll-speed="1"
                     data-scroll-position="down">
                    <h2
                        className="c-intro__title"
                        dangerouslySetInnerHTML={createHTML(title)}
                    />
                    <ul className="c-intro__list">
                        {listDescription.map(dataItem => {
                            return (
                                <li key={dataItem.description}>
                                    <svg className="icon icon-quote">
                                        <use xlinkHref="#icon-quote"></use>
                                    </svg>
                                    <p dangerouslySetInnerHTML={createHTML(dataItem.description)}/>
                                    <dl className={`c-intro__meta`}>
                                        <dt className={`c-intro__user`}>{dataItem.listUser}</dt>
                                        <dd className={`c-intro__designation`}>{dataItem.listDesignation}</dd>
                                    </dl>
                                </li>
                            )
                        })}
                    </ul>
                    <figure className="c-intro__logo" style={{backgroundImage: `url(${featuredCaseStudyImage})`}}
                            data-scroll data-scroll-speed="1"
                            data-scroll-position="top">
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
                            }}
                        >
                            <strong>
                                <img className={`c-intro__brand-logo`} src={dwt_logo} alt={`dwt logo`} height={40}
                                     width={117}/>
                                {`featured case study`}</strong>
                        </TransitionLink>
                    </figure>
                </div>
                <figure className="c-intro__image">
                    <img src={graphic_1} alt={`revolutionary utility for nepalese"`} width={377} height={498}/>
                </figure>
            </div>
        </section>
    )
}

export default Intro
