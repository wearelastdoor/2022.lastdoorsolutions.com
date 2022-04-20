import * as React from "react"
import Seo from "../components/seo"
// Import Components
import Footer from "../components/footer";
import HighlightCta from "../components/home/HighlightCta";

// Images
import FeaturedArticleImage from '../images/featured-article-image.webp'
import strategyImage from '../images/strategy-img.webp'
import strategyIllustration from '../images/strategy-illustration.svg'

import processIcon1 from '../images/process-icon-1.svg'
import processIcon2 from '../images/process-icon-2.svg'
import processIcon3 from '../images/process-icon-3.svg'
import processIcon4 from '../images/process-icon-4.svg'
import processIcon5 from '../images/process-icon-5.svg'
import processOval from '../images/process-oval.svg'


const UXDesign = () => {
    return (
        <>
            <Seo/>
            <main className="main">
                <section className={`c-hero-intro`}>
                    <div className={`l-container`}>
                        <h1 className={`c-hero-intro__title`}
                            title={`Leaders for Inquisitive User Experience`}>Leaders for Inquisitive User
                            Experience</h1>
                        <div className={`c-hero-intro__description`}>
                            <p>What is UX for us? — User Experience stands at the heart of our agency and helps drive
                                the products and projects to excellence.</p>
                        </div>
                    </div>
                </section>

                <article className={`c-featured-article`}>
                    <div className={`l-container`}>
                        <div className={`c-featured-article__card`}>
                            <figure className={`c-featured-article__image`}
                                    style={{backgroundImage: `url(${FeaturedArticleImage})`}}>
                                <img src={FeaturedArticleImage}
                                     alt={`Human-centred product strategy, design, and engineering`}
                                     className={`screen-reader-text`}/>
                                <strong className={`c-featured-article__tag`}>Article</strong>
                            </figure>
                            <div className={`c-featured-article__body`}>
                                <h2 className={`c-featured-article__title`}>Human-centred product strategy, design, and
                                    engineering</h2>
                                <div className={`c-featured-article__description`}>
                                    <p>We have dedicated FrontEnd developers acquainted with the design and skilled in
                                        using all sorts of design files,
                                        including Adobe XD, Photoshop …</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <section className={'c-strategy'}>
                    <div className="container">
                        <div className={`c-strategy__header`}>
                            <h2 className={`c-strategy__title`} title={`Strategy`}>Strategy</h2>
                            <h3 className={`c-strategy__subtitle`}>Human-centered product strategy, design, and
                                engineering.</h3>
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
                                    <figure className="c-strategy__additional-media">
                                        <img src={strategyImage} alt={`strategy`} height={`600`} width={`600`}/>
                                    </figure>
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
                <section className={`c-process`}>
                    <div className="container">
                        <div className="c-process__header">
                        <h2 className={`c-process__heading`} title={`Our Process`}>Our Process</h2>
                        </div>
                        <div className={`c-process__items`}>
                            <div className={`c-process__highlight`}>
                                <h3 className={`c-process__highlight-title`}>An iterative process that defines,
                                    redifines and sharpens the product.</h3>
                                <img className={`c-process__highlight-background`} src={processOval} alt={`processOval`}/>
                            </div>
                            <div className={`c-process__item c-process__item--one`}>
                                <figure className={`c-process__icon`}>
                                    <img src={processIcon1} alt={`Ideate`}/>
                                </figure>
                                <div className={`c-process__content`}>
                                    <h3 className={`c-process__title`}>Ideate</h3>
                                    <div className={`c-process__description`}>
                                        <p>Collect Data <br/> Create user personas Outline user journey Document major
                                            pain
                                            points Prioritize the action points</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`c-process__item  c-process__item--two`}>
                                <figure className={`c-process__icon`}>
                                    <img src={processIcon2} alt={`Prototype & Test`}/>
                                </figure>
                                <div className={`c-process__content`}>
                                    <h3 className={`c-process__title`}>Prototype & Test</h3>
                                    <div className={`c-process__description`}>
                                        <p>Collect Data <br/> Create user personas Outline user journey Document major
                                            pain
                                            points Prioritize the action points</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`c-process__item c-process__item--three`}>
                                <figure className={`c-process__icon`}>
                                    <img src={processIcon3} alt={`Launch`}/>
                                </figure>
                                <div className={`c-process__content`}>
                                    <h3 className={`c-process__title`}>Launch</h3>
                                    <div className={`c-process__description`}>
                                        <p>Collect Data <br/> Create user personas Outline user journey Document major
                                            pain
                                            points Prioritize the action points</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`c-process__item c-process__item--four`}>
                                <figure className={`c-process__icon`}>
                                    <img src={processIcon4} alt={`Analyze`}/>
                                </figure>
                                <div className={`c-process__content`}>
                                    <h3 className={`c-process__title`}>Analyze</h3>
                                    <div className={`c-process__description`}>
                                        <p>Collect Data <br/> Create user personas Outline user journey Document major
                                            pain
                                            points Prioritize the action points</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`c-process__item c-process__item--five`}>
                                <figure className={`c-process__icon`}>
                                    <img src={processIcon5} alt={`Discover & Define`}/>
                                </figure>
                                <div className={`c-process__content`}>
                                    <h3 className={`c-process__title`}>Discover & Define</h3>
                                    <div className={`c-process__description`}>
                                        <p>Collect Data <br/> Create user personas Outline user journey Document major
                                            pain points Prioritize the action points</p>
                                    </div>
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

export default UXDesign
