import * as React from "react"
import Seo from "../components/seo"
import wordpressLogo from '../images/wordpress-logotype-standard.webp'
import serviceCardImg from '../images/service-card-img.webp'
import PageBanner from "../components/pageBanner.js";
import strategyIllustration from '../images/working-illustration.svg'

import svgOval from '../images/svg-oval.svg'
import svgTriangle from '../images/svg-triangle.svg'
import svgRectangle from '../images/svg-rectangle.svg'

import partnerImg from '../images/anchorwave_white_label_partner.jpg'
import partnerImg2 from '../images/highstep_white_label_partner.jpg'
import partnerImg3 from '../images/e11group_white_label_partner.jpg'

// Import Components
import Footer from "../components/footer";
import HighlightCta from "../components/HighlightCta";

const ServiceSingle = () => {
    return (
        <>
            <Seo
                title="B2B Partnership with Last Door"
                description="We extend our hands with partners around the world to help them extend their reach."
            />
            <main className="main">
                <PageBanner
                    pageName={`B2B Services`}
                    title={`Hands that help you achieve anything.`}
                    pageDescription={`You can expect us to do literally anything that your comapny does or doesn’t. Since our inception in 2006, we have been tied with Business to Business working model. It has been fun to work with people at different time zones.`}
                />

                <div className={`c-service-partner c-service-partner--alt`}>
                    <div className={`l-container`}>
                        <div className={`c-service-partner__grid`}>
                            <div className={`c-service-partner__item`}>
                                <div className={`c-service-partner__card`}
                                     style={{backgroundImage: `url(${partnerImg})`}}>
                                    <h3 className={`c-service-partner__title`}>Anchorwave</h3>
                                    <a href="/anchorwave/"><span
                                        className={`screen-reader-text`}>anchorwave</span></a>
                                </div>
                            </div>
                            <div className={`c-service-partner__item`}>
                                <div className={`c-service-partner__card`}
                                     style={{backgroundImage: `url(${partnerImg2})`}}>
                                    <h3 className={`c-service-partner__title`}>Higstep Technologies</h3>
                                    <a href="/highstep/"> 
                                        <span className={`screen-reader-text`}>Higstep Technologies</span>
                                    </a>
                                </div>
                            </div>
                            <div className={`c-service-partner__item`}>
                                <div className={`c-service-partner__card`} style={{backgroundImage: `url(${partnerImg3})`}}>
                                    <h3 className={`c-service-partner__title`}>e11group</h3>
                                    <a href="/e11group/">
                                        <span className={`screen-reader-text`}>e11group</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className={'c-strategy'}>
                    <div className="container">
                        <div className={`c-strategy__header`}>
                            <h2 className={`c-strategy__title`} title={`Capabilities`}>Capabilities</h2>
                            <h3 className={`c-strategy__subtitle`}>We are capable of doing anything from strategy, UX, frontend, apps, web apps, and programming across all verticals.</h3>
                        </div>
                        <div className={`c-strategy__body`}>
                            <figure className={`c-strategy__illustration`}>
                                <img src={strategyIllustration} alt={`strategy Illustration`}/>
                            </figure>
                            <div className={`c-strategy__card`}>
                                <div className="c-strategy__description">
                                    <p>We help ignite the creative spark and direct that energy toward tangible results.
                                        Important and user-centred insights with business validities lead us to grasp
                                        the correct balance.</p>
                                    <p>We believe that organizations aspiring for market leadership should instead rally
                                        around an experience-led value proposition to carve out their competitive
                                        advantage. This will lead them in the long term, as it’s an integral and
                                        critical component of how you attract customers. We’ll work closely with you and
                                        your team to make it happen.</p>
                                </div>
                                <div className="c-strategy__additional">

                                    <p>This will lead them in the long term, as it’s an integral and critical component
                                        of how you attract customers; feel confident about what they’re buying from your
                                        company because there was plenty of thought put into each step during the
                                        purchase process - all this leads up towards building strong relationships with
                                        clients/prospects which can help drive sales (longer-lasting).</p>
                                    <p>However, this can be difficult to capture with numbers alone. So instead, these
                                        businesses should focus on an experience-led value proposition that will help
                                        them attract more clients while also making sure employees feel like stars every
                                        day at work because it has been exhilarating for everyone involved!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <HighlightCta/>
            </main>
            <Footer/>
        </>
    )
}

export default ServiceSingle
