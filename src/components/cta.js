import * as React from "react"
import TransitionLink from "gatsby-plugin-transition-link";
import {animateObjects, newContent} from "./layout";

const Cta = () => {
    return (
        <section className={`c-cta-holder`}>
            <div className="container">
                <div className="c-cta">
                    <div className="c-cta__content">
                        <p className="c-cta__lead-text">Have a Project?</p>
                        <h2 className="c-cta__title">Let’s talk about it</h2>
                    </div>
                    <div className="c-cta__btn">
                        <TransitionLink
                            to="/contact/"
                            title="Contact"
                            className={'c-btn c-btn--dark'}
                            exit={{
                                length: 0.6,
                                trigger: ({exit, e, node}) => animateObjects(exit, node),
                            }}
                            entry={{
                                delay: 0.7,
                                trigger: ({entry, node}) => newContent(node),
                            }}>
                            <svg className="icon icon-envelope">
                                <use xlinkHref="#icon-envelope"></use>
                            </svg>
                            <span></span>
                            Go to contact
                        </TransitionLink>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cta