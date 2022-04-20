import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import Seo from "../components/seo"
import Footer from "../components/footer";

const MediaBookPage = () => (
    <>
        <Seo/>
        <main className="main">
            <section className="c-mediabook">
                <div className="l-container">
                    <div className="c-mediabook__logo">
                        <StaticImage
                            src="../images/mediabook-large.png"
                            alt="mediabook "
                            height={40}
                        />
                    </div>
                    <div className="c-mediabook__showcase">
                        <StaticImage
                            src="../images/app-showcase.png"
                            alt="app showcase "
                            height={277}
                        />
                    </div>
                    <div className="c-mediabook__content">
                        <h2 className="c-mediabook__title" title="find the nearest hospitals">
                            Find the nearest hospitals
                        </h2>
                        <div className="c-mediabook__description">
                            <p>
                                Medibook is a medical directory that helps you get information
                                about hospitals in Kathmandu, locate them, get directions, and
                                contact them.
                            </p>
                        </div>

                        <ul className="c-mediabook__list">
                            <li>
                                <svg className="icon icon-check">
                                    <use xlinkHref="#icon-check"></use>
                                </svg>
                                Get a list of hospitals (in Kathmandu)
                            </li>
                            <li>
                                <svg className="icon icon-check">
                                    <use xlinkHref="#icon-check"></use>
                                </svg>
                                Locate and get directions to the nearest hospital
                            </li>
                            <li>
                                <svg className="icon icon-check">
                                    <use xlinkHref="#icon-check"></use>
                                </svg>
                                Make a direct call with a single tap
                            </li>
                            <li>
                                <svg className="icon icon-check">
                                    <use xlinkHref="#icon-check"></use>
                                </svg>
                                Access useful emergency contacts wherever you are
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </>
)

export default MediaBookPage
