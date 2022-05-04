import * as React from "react"
import Seo from "../components/seo"
import TransitionLink from "gatsby-plugin-transition-link"
import {newContent, animateObjects} from "../components/layout"
import Footer from "../components/footer";

const NotFoundPage = () => {
    return (
        <>
            <main className="main">
                <Seo/>
                <section className="c-hero c-hero--gutter-bottom">
                    <div className="l-container">
                        <h1 className="c-hero__title" title={`404: Not Found`}>
                            404: Not Found
                        </h1>
                        <div className="c-hero__description">
                            <p>
                                The page you’re looking for can’t be found. The page may have been
                                deleted or never existed. If you want some information regarding
                                anything related to Last Door,{" "}
                                <TransitionLink
                                    to="/contact/"

                                    exit={{
                                        length: 0.6,
                                        trigger: ({exit, e, node}) => animateObjects(exit, node),
                                    }}
                                    entry={{
                                        delay: 0.7,
                                        trigger: ({entry, node}) => newContent(node),
                                    }}
                                >
                                    contact us
                                </TransitionLink>
                                .
                            </p>
                        </div>
                        <TransitionLink
                            to="/"
                            className="c-btn c-btn--primary"
                            exit={{
                                length: 0.6,
                                trigger: ({exit, e, node}) => animateObjects(exit, node),
                            }}
                            entry={{
                                delay: 0.7,
                                trigger: ({entry, node}) => newContent(node),
                            }}
                        >
                            Back to homepage
                            <span></span>
                        </TransitionLink>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default NotFoundPage
