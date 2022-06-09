import * as React from "react"
import Seo from "../components/seo"
import PageBanner from "../components/pageBanner.js";
import strategyIllustration from '../images/working-illustration.svg'

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
                                <div className="c-strategy__columns">
                                    <section className="c-strategy__column">
                                        <a href="/ux-design">Full-fledged UX</a>
                                        <h3 className="c-strategy__columnTitle">Full-fledged UX</h3>
                                        <p>User Experience stands at the heart of our agency and helps drive the products and projects to excellence.</p>
                                    </section>
                                    <section className="c-strategy__column">
                                        <h3 className={`c-strategy__columnTitle`}>Product Strategy</h3>
                                        <p>Understanding market needs and strategizing a product with expert UX knowledge meanwhile keeping the human at center is what we do the best.</p>
                                    </section>
                                    <section className="c-strategy__column">
                                        <h3 className={`c-strategy__columnTitle`}>High-Conversion Landing pages</h3>
                                        <p>Our design team accomplishes tasks that elevates your product and business from tiny level to mass.</p>
                                    </section>
                                    <section className="c-strategy__column">
                                        <h3 className={`c-strategy__columnTitle`}>Frontend Development</h3>
                                        <p>FrontEnd is at core of our company. We build seamless interfaces from scratch or with any vertical of frameworks available.</p>
                                    </section>
                                    <section className="c-strategy__column">
                                        <a href="/wordpress">WordPress Websites</a>
                                        <h3 className={`c-strategy__columnTitle`}>WordPress Websites</h3>
                                        <p>We have been doing WordPress since 2003, and that's why we can do anything related, wether be it a custom site or feature.</p>
                                    </section>
                                    <section className="c-strategy__column">
                                        <h3 className={`c-strategy__columnTitle`}>Performance &amp; Speed Optimization</h3>
                                        <p>User Experience stands at the heart of our agency and helps drive the products and projects to excellence.</p>
                                    </section>
                                    <section className="c-strategy__column">
                                        <h3 className={`c-strategy__columnTitle`}>Custom WordPress Plugin Development</h3>
                                        <p>We build custom plugins bespoke to your needs when it comes to security, tailor-made features, and project needs.</p>
                                    </section>
                                    <section className="c-strategy__column">
                                        <h3 className={`c-strategy__columnTitle`}>WooCommerce Store</h3>
                                        <p>We can literally do anything on WordPress, which makes us an expert in delivering world-classs WooCommerce products.</p>
                                    </section>
                                    <section className="c-strategy__column">
                                        <h3 className={`c-strategy__columnTitle`}>Custom PHP &amp; Laravel</h3>
                                        <p>From Web App to API, MVP and large scale products, we have covered them all.</p>
                                    </section>
                                    <section className="c-strategy__column">
                                        <h3 className={`c-strategy__columnTitle`}>React Js Development</h3>
                                        <p>React JS is a core part of our app development expertise. So, when you trust us and React, your business is in good hands.</p>
                                    </section>
                                    <section className="c-strategy__column">
                                        <h3 className={`c-strategy__columnTitle`}>Gatsby Sites</h3>
                                        <p>Faster and quicker frontend delivery with custom design and less hassle, we ship awesome sites.</p>
                                    </section>
                                    <section className="c-strategy__column">
                                        <h3 className={`c-strategy__columnTitle`}>Page Builder Sites</h3>
                                        <p>We do understand and care about our small size customers so we have covered you here as well.</p>
                                    </section>
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
