import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import Seo from "../components/seo"
import Cta from "../components/cta";
import Footer from "../components/footer";

const BattiGayoPage = () => (
    < >
        <Seo/>
        <main className="main">
            <section className="c-battigayo">
                <div className="l-container">
                    <header className="c-battigayo__header">
                        <div className="c-battigayo__header-image">
                            <StaticImage
                                src={"../images/batti-on-off.png"}
                                alt="batti on off"
                                height={278}
                            />
                        </div>
                        <h1
                            className="c-battigayo__title"
                            title="We are happy that battigayo shut down"
                        >
                            We are happy that battigayo shut down
                        </h1>
                    </header>

                    <div className="c-battigayo-intro">
                        <div className="c-battigayo-intro__content">
                            <div className="c-battigayo-intro__logo">
                                <StaticImage
                                    src={"../images/battigayo-logo-large.png"}
                                    alt="Battigayo"
                                    height={98}
                                />
                            </div>
                            <div className="c-battigayo-intro__description">
                                <p>
                                    Back then, the acute issue of crippling power shortage that
                                    nepal was going through for the past decade has been eradicated
                                    as of may, 2018 thanks to the great work done by mr kulman
                                    ghising, the current managing director of nepal electricity
                                    corporation. no more load shedding yay!!
                                </p>
                                <p>
                                    We can’t thank you more for your leadeership in solving this
                                    long-running issue. great work, sir.
                                </p>
                            </div>
                        </div>
                        <div className="c-battigayo-intro__media">
                            <StaticImage
                                src={"../images/kul-man-ghising.png"}
                                alt="Kul man ghusing"
                                height={459}
                                className="c-battigayo-intro__image"
                            />
                            <p className="c-battigayo-intro__name">Mr. Kul Man Ghising</p>
                            <p className="c-battigayo-intro__slogan">
                                The man who helped battigayo to shut down.
                            </p>
                        </div>
                    </div>
                    <div className="c-battigayo-story">
                        <h2 className="c-battigayo-story__title" title="The battigayo story…">
                            The battigayo story…
                        </h2>
                        <div className="c-battigayo-story__content">
                            <p>
                                Battigayo was developed as a way to give something back to the
                                community and solve an existing problem. the app helped everyone
                                plan out their schedule around the ongoing power shortage in the
                                country. with no more load shedding, we just love saying that :),
                                the services offered by our popular ios app battigayo is
                                redundant.
                            </p>
                            <p>
                                We'll always remember the moment when we all here at idealaya
                                realised that our users do not require the services offered
                                through our application anymore. we have stopped the development
                                of the app and pray that we’ll not need to revive it in the
                                future. we have loved every minute of working on this app and
                                cherish the relationships created during the process.
                            </p>
                            <p>
                                We love creating simple solutions to everyday problems and are
                                always on a lookout for new problems to tackle. we look forward to
                                your continued support and suggestions moving forward.
                            </p>
                            <p>
                                Thank you all our 100k plus users for your wonderful feedback and
                                support.
                            </p>
                            <p>Namaste!</p>
                        </div>
                    </div>
                </div>
            </section>
            <Cta/>
        </main>
        <Footer/>
    </>
)

export default BattiGayoPage
