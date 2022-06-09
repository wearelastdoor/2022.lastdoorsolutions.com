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
                                        <a href="/ux-design">Product Strategy</a>
                                        <h3 className={`c-strategy__columnTitle`}>Product Strategy</h3>
                                        <p>User Experience stands at the heart of our agency and helps drive the products and projects to excellence.</p>
                                    </section>
                                    <section className="c-strategy__column">
                                        <a href="/ux-design">High-Conversion Landing pages</a>
                                        <h3 className={`c-strategy__columnTitle`}>Product Strategy</h3>
                                        <p>User Experience stands at the heart of our agency and helps drive the products and projects to excellence.</p>
                                    </section>
                                    <section className="c-strategy__column">
                                        <a href="/ux-design">Frontend</a>
                                        <h3 className={`c-strategy__columnTitle`}>Frontend</h3>
                                        <p>User Experience stands at the heart of our agency and helps drive the products and projects to excellence.</p>
                                    </section>
                                    <section className="c-strategy__column">
                                        <a href="/ux-design">Custom WordPress Websites</a>
                                        <h3 className={`c-strategy__columnTitle`}>Custom WordPress Websites</h3>
                                        <p>User Experience stands at the heart of our agency and helps drive the products and projects to excellence.</p>
                                    </section>
                                    <section className="c-strategy__column">
                                        <a href="/ux-design">Performance &amp; Speed Optimization</a>
                                        <h3 className={`c-strategy__columnTitle`}>Performance &amp; Speed Optimization</h3>
                                        <p>User Experience stands at the heart of our agency and helps drive the products and projects to excellence.</p>
                                    </section>
                                    <section className="c-strategy__column">
                                        <a href="/ux-design">Custom WordPress Plugin Development</a>
                                        <h3 className={`c-strategy__columnTitle`}>Custom WordPress Plugin Development</h3>
                                        <p>User Experience stands at the heart of our agency and helps drive the products and projects to excellence.</p>
                                    </section>
                                    <section className="c-strategy__column">
                                        <a href="/ux-design">WooCommerce Store</a>
                                        <h3 className={`c-strategy__columnTitle`}>WooCommerce Store</h3>
                                        <p>User Experience stands at the heart of our agency and helps drive the products and projects to excellence.</p>
                                    </section>
                                    <section className="c-strategy__column">
                                        <a href="/ux-design">Custom PHP &amp; Laravel Sites</a>
                                        <h3 className={`c-strategy__columnTitle`}>Custom PHP &amp; Laravel Sites</h3>
                                        <p>User Experience stands at the heart of our agency and helps drive the products and projects to excellence.</p>
                                    </section>
                                    <section className="c-strategy__column">
                                        <a href="/ux-design">React Web Apps</a>
                                        <h3 className={`c-strategy__columnTitle`}>React Web Apps</h3>
                                        <p>User Experience stands at the heart of our agency and helps drive the products and projects to excellence.</p>
                                    </section>
                                    <section className="c-strategy__column">
                                        <a href="/ux-design">Gatsby Sites</a>
                                        <h3 className={`c-strategy__columnTitle`}>Gatsby Sites</h3>
                                        <p>User Experience stands at the heart of our agency and helps drive the products and projects to excellence.</p>
                                    </section>
                                    <section className="c-strategy__column">
                                        <a href="/ux-design">Page Builder Sites</a>
                                        <h3 className={`c-strategy__columnTitle`}>Page Builder Sites</h3>
                                        <p>User Experience stands at the heart of our agency and helps drive the products and projects to excellence.</p>
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
