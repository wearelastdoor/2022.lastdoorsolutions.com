import * as React from "react"
import Seo from "../components/seo"
import wordpressTradeMark from '../images/wordpress-logotype-wmark.webp'
import wordpressLogo from '../images/wordpress-logotype-standard.webp'
import serviceCardImg from '../images/service-card-img.webp'

import svgOval from '../images/svg-oval.svg'
import svgTriangle from '../images/svg-triangle.svg'
import svgRectangle from '../images/svg-rectangle.svg'

import partnerImg from '../images/partner-01.webp'

// Import Components
import Footer from "../components/footer";
import HighlightCta from "../components/home/HighlightCta";

const ServiceSingle = () => {
    return (
        <>
            <Seo/>
            <main className="main">
                <section className={`c-hero-intro`}>
                    <div className={`l-container`}>
                        <h1 className={`c-hero-intro__title`}
                            title={`We’re the masters of WordPress Development.`}>We’re the masters of WordPress
                            Development.</h1>
                        <div className={`c-hero-intro__description`}>
                            <p>We do everything WordPress-related. WordPress occupies around 50% of our workload at Last
                                Door, with over five thousand websites developed using the platform, and more than one
                                hundred thousand users have chosen one of our themes as their website.</p>
                        </div>
                        <img className={`c-hero-intro__image`} src={wordpressTradeMark} alt="wordpress" width={800}
                             height={800}/>
                    </div>
                </section>

                <div className={`c-featured-service`}>
                    <div className={`l-container`}>
                        <div className={`c-featured-service__content`}>
                            <strong className={`c-featured-service__title`}>Our Capability</strong>
                            <div className="c-featured-service__inner">
                                <ul className="c-featured-service__list">
                                    <li>Custom WordPress</li>
                                    <li>Plugin Development</li>
                                    <li>WordPress with React</li>
                                    <li>WordPress Themes</li>
                                    <li>White Label Dev</li>
                                    <li>Support & Maintenance</li>
                                    <li>WooCommerce Store</li>
                                    <li>Performance & Speed</li>
                                    <li>Server-side management</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'c-service-intro'}>
                    <div className="l-container">
                        <figure className={`c-service-intro__image`}>
                            <img src={wordpressLogo} alt="wordpress" width={250} height={51}/>
                        </figure>
                        <div className={`c-service-intro__description`}>
                            <p>WordPress is the most popular CMS globally, with more than 30% of the website's market
                                share. We maximize the use of WordPress with custom modules, templates, page builders
                                and UX strategy to make it more usable and bespoke to every project.</p>
                        </div>
                    </div>
                </div>

                <div className={`c-service-card c-service-card--left`}>
                    <div className={`l-container`}>
                        <div className={`c-service-card__inner`}>
                            <div className={`c-service-card__content`}>
                                <h2 className={`c-service-card__title`}>Sixteen Plus <br/> Years in business</h2>
                                <div className={`c-service-card__description`}>
                                    <p>We've been in the WordPress business for almost 1.5 decades. We've seen it evolve
                                        throughout the years, and that's our biggest strength. We've contributed to the
                                        growth of WordPress in various ways, from code reviews to sponsoring events,
                                        sharing knowledge, developing free themes, and so on.</p>
                                </div>
                            </div>

                            <figure className={`c-service-card__image`}>
                                <img src={serviceCardImg} alt={`service card`} height={339} width={509}/>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className={`c-service-card c-service-card--right`}>
                    <div className={`l-container`}>
                        <div className={`c-service-card__inner`}>
                            <div className={`c-service-card__content`}>
                                <h2 className={`c-service-card__title`}>Dedicated Project <br/> Managers</h2>
                                <div className={`c-service-card__description`}>
                                    <p>Our project managers map out the best possible work plan to bridge the
                                        stakeholders, designers, and developers to reduce friction and produce things at
                                        the perfect time. </p>
                                </div>
                            </div>

                            <figure className={`c-service-card__image`}>
                                <img src={serviceCardImg} alt={`service card`} height={339} width={509}/>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className={`c-service-card c-service-card--left`}>
                    <div className={`l-container`}>
                        <div className={`c-service-card__inner`}>
                            <div className={`c-service-card__content`}>
                                <h2 className={`c-service-card__title`}>Industry-Leading<br/> Developers</h2>
                                <div className={`c-service-card__description`}>
                                    <p>Our fleet of Developers includes senior PHP programmers to core-theme reviewers
                                        in wp org, with 50% of them having more than ten years of experience. Our
                                        experience helps us embark on complex features and produce intuitive,
                                        economically viable, and worthwhile solutions.</p>
                                </div>
                            </div>

                            <figure className={`c-service-card__image`}>
                                <img src={serviceCardImg} alt={`service card`} height={339} width={509}/>
                            </figure>
                        </div>
                    </div>
                </div>

                <div className={'c-offering'}>
                    <div className={`l-container`}>
                        <h2 className={`c-offering__headline`} title={`Offerings`}>Offerings</h2>
                        <div className={`c-offering__grid`}>
                            <div className={`c-offering__item`}>
                                <img className={`c-offering__icon c-offering__icon--oval`} src={svgOval} alt={`Oval`}
                                     height={144} width={144}/>
                                <h3 className={`c-offering__title`}>PSD to WordPress</h3>
                                <div className={`c-offering__description`}>
                                    <p>We have dedicated FrontEnd developers acquainted with the design and skilled in
                                        using all sorts of design files, including Adobe XD, Photoshop, Figma, Sketch,
                                        Illustrator, etc. So, the developer hand-off is as easy as providing a design
                                        file or a Figma/Sketch link.</p>
                                </div>
                            </div>
                            <div className={`c-offering__item`}>
                                <img className={`c-offering__icon c-offering__icon--rectangle`} src={svgRectangle}
                                     alt={`Rectangle`} height={168} width={168}/>
                                <h3 className={`c-offering__title`}>Custom WordPress Websites</h3>
                                <div className={`c-offering__description`}>
                                    <p>We craft custom WordPress websites from the ground up. For those looking for
                                        customized page builders like Divi, Gutenberg, Elementor, WPBakery, etc., we
                                        have got all covered.</p>
                                </div>
                            </div>
                            <div className={`c-offering__item`}>
                                <img className={`c-offering__icon c-offering__icon--triangle`} src={svgTriangle}
                                     alt={`Triangle`} width={124} height={132}/>
                                <h3 className={`c-offering__title`}>Performance & Speed Optimization</h3>
                                <div className={`c-offering__description`}>
                                    <p>No matter the size of your site, we take care of all your performance, code
                                        compression, optimization and improving the score and speed of your site so that
                                        we reach the users fast. </p>
                                </div>
                            </div>

                            <div className={`c-offering__item`}>
                                <img className={`c-offering__icon c-offering__icon--triangle`} src={svgTriangle}
                                     alt={`Triangle`} width={124} height={132}/>
                                <h3 className={`c-offering__title`}>WooCommerce Store</h3>
                                <div className={`c-offering__description`}>
                                    <p>We build custom plugins bespoke to your needs when it comes to security,
                                        tailor-made features, and project needs.</p>
                                </div>
                            </div>
                            <div className={`c-offering__item`}>
                                <img className={`c-offering__icon c-offering__icon--oval`} src={svgOval} alt={`Oval`}
                                     height={144} width={144}/>
                                <h3 className={`c-offering__title`}>Custom Plugin Development</h3>
                                <div className={`c-offering__description`}>
                                    <p>We build custom plugins bespoke to your needs when it comes to security,
                                        tailor-made features, and project needs. </p>
                                </div>
                            </div>
                            <div className={`c-offering__item`}>
                                <img className={`c-offering__icon c-offering__icon--rectangle`} src={svgRectangle}
                                     alt={`Rectangle`} height={168} width={168}/>
                                <h3 className={`c-offering__title`}>Migration, Support & Server side management</h3>
                                <div className={`c-offering__description`}>
                                    <p>We craft custom WordPress websites from the ground up. For those looking for
                                        customized page builders like Divi, Gutenberg, Elementor, WPBakery, etc., we
                                        have got all covered.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`c-service-partner`}>
                    <div className={`l-container`}>
                        <div className={`c-service-partner__header`}>
                            <h2 className={`c-service-partner__heading`} title={`White-label Development`}>White-label
                                Development</h2>
                            <div className={`c-service-partner__description`}>
                                <p>We will build the entire code with all your branding, conventions, systems, or
                                    requirements to maintain the project's white labels.</p>
                            </div>
                        </div>
                        <div className={`c-service-partner__grid`}>
                            <div className={`c-service-partner__item`}>
                                <div className={`c-service-partner__card`}
                                     style={{backgroundImage: `url(${partnerImg})`}}>
                                    <strong className={`c-service-partner__label`}>White Label partner</strong>
                                    <h3 className={`c-service-partner__title`}>Anchorwave</h3>
                                    <a href="https://anchorwave.com/" target={`_blank`}><span
                                        className={`screen-reader-text`}>anchorwave</span></a>
                                </div>
                            </div>
                            <div className={`c-service-partner__item`}>
                                <div className={`c-service-partner__card`}
                                     style={{backgroundImage: `url(${partnerImg})`}}>
                                    <strong className={`c-service-partner__label`}>White Label partner</strong>
                                    <h3 className={`c-service-partner__title`}>Higstep Technologies</h3>
                                    <a href="https://highstep.com/" target={`_blank`}><span
                                        className={`screen-reader-text`}>Higstep Technologies</span></a>
                                </div>
                            </div>
                            <div className={`c-service-partner__item`}>
                                <div className={`c-service-partner__card`}
                                     style={{backgroundImage: `url(${partnerImg})`}}>
                                    <strong className={`c-service-partner__label`}>White Label partner</strong>
                                    <h3 className={`c-service-partner__title`}>e11group</h3>
                                    <a href="https://e11group.com/" target={`_blank`}><span
                                        className={`screen-reader-text`}>e11group</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <HighlightCta/>
            </main>
            <Footer/>
        </>
    )
}

export default ServiceSingle
