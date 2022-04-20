import * as React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import {newContent, animateObjects} from "./layout"
import SvgSprite from "../components/parts/svg-sprite"

const Footer = () => (
    <footer className="c-footer">
        <div className="l-container">
            <div className="c-footer__menu-wrap">
                <ul className="c-footer__menu">
                    <li>
                        <TransitionLink
                            to="/"
                            title="home"
                            exit={{
                                length: 0.6,
                                trigger: ({exit, e, node}) => animateObjects(exit, node),
                            }}
                            entry={{
                                delay: 0.7,
                                trigger: ({entry, node}) => newContent(node),
                            }}
                        >
                            home
                        </TransitionLink>
                    </li>
                    <li>
                        <TransitionLink
                            to="/about/"
                            title="about"
                            exit={{
                                length: 0.6,
                                trigger: ({exit, e, node}) => animateObjects(exit, node),
                            }}
                            entry={{
                                delay: 0.7,
                                trigger: ({entry, node}) => newContent(node),
                            }}
                        >
                            about
                        </TransitionLink>
                    </li>
                    <li>
                        <TransitionLink
                            to="/work/"
                            title="work"
                            exit={{
                                length: 0.6,
                                trigger: ({exit, e, node}) => animateObjects(exit, node),
                            }}
                            entry={{
                                delay: 0.7,
                                trigger: ({entry, node}) => newContent(node),
                            }}
                        >
                            work
                        </TransitionLink>
                    </li>
                    <li>
                        <TransitionLink
                            to="/contact/"
                            title="contact"
                            exit={{
                                length: 0.6,
                                trigger: ({exit, e, node}) => animateObjects(exit, node),
                            }}
                            entry={{
                                delay: 0.7,
                                trigger: ({entry, node}) => newContent(node),
                            }}
                        >
                            contact
                        </TransitionLink>
                    </li>
                </ul>
            </div>
            <div className="c-footer__bottom">
                <p className="c-footer__copyright">
                    &copy; {new Date().getFullYear()} lastdoor
                </p>
                <p className="c-footer__contact">
                    <a href="mailto:hello@lastdoorsolutions.com">hello@lastdoorsolutions.com</a>
                    <a href="tel:+16314193281">USA: +1 631 419 3281</a>
                    <a href="tel:+442032866194">UK: +44 20 3286 6194</a>
                    <a href="tel:+9779851167777">NP: +977 98 5116 7777</a>
                </p>
            </div>
        </div>
        <SvgSprite title="Svg Sprite"/>
    </footer>
)

export default Footer
