import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import TransitionLink from "gatsby-plugin-transition-link"
import {newContent, animateObjects} from "./../layout"

const CaseStudy = image => {
    return (
        <section className="c-case-study">
            <div className="l-container">
                <header className="c-case-study__header">
                    <p className="c-case-study__lead-text">Latest</p>
                    <h2 className="c-case-study__main-title" title="Case studies">
                        Case studies
                    </h2>
                </header>
                <div className="c-case-study__card">
                    <div
                        className="c-case-study__media"
                        style={{backgroundColor: "#4594B3"}}
                    >
                        <div className="c-case-study__logo">
                            <StaticImage
                                src={`../../images/white-dwt-logo.png`}
                                alt="Discovery World Trekking"
                                height={60}
                            />
                        </div>
                        <p className="c-case-study__logo-name">Discovery world trekking</p>

                        <div className="c-case-study__first-letter">
                            <StaticImage
                                src="../../images/dwt-first-letter.png"
                                alt="Discovery World Trekking"
                                height={584}
                            />
                        </div>
                    </div>
                    <div className="c-case-study__content">
                        <h2 className="c-case-study__title">
                            A website that’s not just a website.
                        </h2>
                        <div className="c-case-study__description">
                            <p>
                                Last Door did ground research and decided to redo the DWT’s site
                                from scratch to redefine the user interaction and create a
                                seamless travel booking experience. The discovery world trekking
                                site stands as a pioneer website in the Nepalese Travel
                                Industry. Also, DWT saw its all-time high conversion after
                                Last Door's work.
                            </p>
                        </div>
                        <TransitionLink
                            to="/discovery-world-trekking/"
                            className="c-btn c-btn--light"
                            exit={{
                                length: 0.6,
                                trigger: ({exit, e, node}) => animateObjects(exit, node),
                            }}
                            entry={{
                                delay: 0.7,
                                trigger: ({entry, node}) => newContent(node),
                            }}
                        >
                            Read Full Case Study
                            <span></span>
                        </TransitionLink>
                    </div>
                </div>

                <div className="c-case-study__card c-case-study__card--reversed">
                    <div
                        className="c-case-study__media"
                        style={{backgroundColor: "#57B94A"}}
                    >
                        <div className="c-case-study__logo">
                            <StaticImage
                                src="../../images/white-sampression-logo.png"
                                alt="Sampression"
                                height={43}
                            />
                        </div>
                        <p className="c-case-study__logo-name">Sampression</p>

                        <div className="c-case-study__first-letter">
                            <StaticImage
                                src="../../images/sampression-first-letter.png"
                                alt="Sampression"
                                height={542}
                            />
                        </div>
                    </div>
                    <div className="c-case-study__content">
                        <h2 className="c-case-study__title">
                            Going viral with digital products
                        </h2>
                        <div className="c-case-study__description">
                            <p>
                                Sampression helps you speed up your workflow with digital goods
                                & tools. Sampression build themes to serve a single purpose: to
                                contribute to WordPress theme community. We take pride not only
                                in the elegance of our themes but also their practicality. We
                                build themes every day for people who share our love for
                                WordPress.
                            </p>
                        </div>
                        <a
                            href="https://sampression.com/"
                            className="c-btn c-btn--light"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit Website
                            <span></span>
                        </a>
                    </div>
                </div>

                <div className="c-case-study__card">
                    <div
                        className="c-case-study__media"
                        style={{backgroundColor: "#1BA2E2"}}
                    >
                        <div className="c-case-study__logo">
                            <StaticImage
                                src="../../images/white-nrr-logo.png"
                                alt="Nepal River Runner"
                                height={50}
                            />
                        </div>
                        <p className="c-case-study__logo-name">Nepal river runner</p>

                        <div className="c-case-study__first-letter">
                            <StaticImage
                                src="../../images/nrr-first-letter.png"
                                alt="Nepal River Runner"
                                height={459}
                            />
                        </div>
                    </div>
                    <div className="c-case-study__content">
                        <h2 className="c-case-study__title">Marketing a rafting agency</h2>
                        <div className="c-case-study__description">
                            <p>
                                Last Door was brought in for Branding and Marketing of Nepal
                                River Runners. With the perfect brand identity to define the
                                company, we also built a rocksolid website to elevate their
                                online presence. Strong and most succsesful marketing campaign
                                supported by Digital assets, Printing and Design of signages,
                                custom office stationeries, flyers were done.
                            </p>
                        </div>
                        <a
                            href="https://nepalriverrunner.com/"
                            className="c-btn c-btn--light"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Visit Website
                            <span></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudy
