import * as React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import {Expo, TimelineMax} from "gsap"
import {useEffect} from "react"
import {
    newContent,
    animateObjects,
    animateObjectsFromMainMenu,
} from "./layout"
import $ from "jquery"

const Header = ({logoImage, headerVisible}) => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            $(document).ready(() => {
                let tl = new TimelineMax()
                $(".c-header__ico-menu").click(function () {
                    $("body").removeClass("content-loaded")

                    tl.to($(".c-main-nav"), 1, {
                        clipPath: "inset(0% 0% 0% 0%)",
                        ease: Expo.easeInOut,
                    })
                        .to(
                            $(".c-main-nav__menu-close"),
                            0.6,
                            {
                                rotate: 360,
                                opacity: 1,
                            },
                            "-=.2"
                        )
                        .staggerTo(
                            ".main-menu  li,.main-nav__contact li",
                            0.9,
                            {
                                opacity: 1,
                                ease: Expo.easeInOut,
                            },
                            +0.1,
                            "-=.3"
                        )
                })

                $(".c-main-nav__menu-close").click(function () {
                    tl.to($(".c-main-nav__menu-close"), 0.6, {rotate: 0, opacity: 0})
                        .staggerTo(
                            ".main-menu  li, .main-nav__contact li",
                            0.9,
                            {
                                opacity: 0,
                                ease: Expo.easeInOut,
                            },
                            -0.1,
                            "-=.6"
                        )
                        .to(
                            $(".c-main-nav"),
                            1.2,
                            {
                                clipPath: "inset(0%  0% 0% 100%)",
                                opacity: 1,
                                ease: Expo.easeInOut,
                                onComplete: function () {
                                    $("body").addClass("content-loaded")
                                },
                            },
                            "-=.6"
                        )
                })
            })
        }
    })

    return (
        <header className={`c-header ${headerVisible}`}>
            <div className="c-header__wrap">
                <TransitionLink
                    to="/"
                    className="c-header__logo"
                    exit={{
                        length: 0.6,
                        trigger: ({exit, e, node}) => animateObjects(exit, node),
                    }}
                    entry={{
                        delay: 0.8,
                        trigger: ({entry, node}) => newContent(node),
                    }}>
                    <span className="visually-hidden">Site Logo</span>
                    <img src={logoImage} alt="Lastdoor Solutions Branding" width={46} height={80}/>
                </TransitionLink>
                <button className={`c-header__ico-menu`}>
                    <svg className="icon icon-menu">
                        <use xlinkHref="#icon-menu"></use>
                    </svg>
                    <span className="visually-hidden">open</span>
                </button>
            </div>

            <nav className="c-main-nav">
                <button className="c-main-nav__menu-close">
                    <svg className="icon icon-close">
                        <use xlinkHref="#icon-close"></use>
                    </svg>
                    <span className="visually-hidden">Close</span>
                </button>
                <div className="l-container">
                    <ul className="main-menu">
                        <li>
                            <TransitionLink
                                to="/"
                                title="home"
                                exit={{
                                    length: 0.6,
                                    trigger: ({exit, e, node}) =>
                                        animateObjectsFromMainMenu(exit, node),
                                }}
                                entry={{
                                    delay: 0.8,
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
                                    trigger: ({exit, e, node}) =>
                                        animateObjectsFromMainMenu(exit, node),
                                }}
                                entry={{
                                    delay: 0.8,
                                    trigger: ({entry, node}) => newContent(node),
                                }}
                            >
                                about
                            </TransitionLink>
                        </li>
                        <li>
                            <TransitionLink
                                to="/work/"
                                title="cases"
                                exit={{
                                    duration: 2,
                                    trigger: ({exit, e, node}) =>
                                        animateObjectsFromMainMenu(exit, node),
                                }}
                                entry={{
                                    delay: 0.8,
                                    trigger: ({entry, node}) => newContent(node),
                                }}
                            >
                                cases
                            </TransitionLink>
                        </li>
                        <li>
                            <TransitionLink
                                to="/contact/"
                                title="contact"
                                exit={{
                                    duration: 2,
                                    trigger: ({exit, e, node}) =>
                                        animateObjectsFromMainMenu(exit, node),
                                }}
                                entry={{
                                    delay: 0.8,
                                    trigger: ({entry, node}) => newContent(node),
                                }}
                            >
                                contact
                            </TransitionLink>
                        </li>
                    </ul>
                    <ul className="main-nav__contact">
                        <li>
                            <a href="tel:+16314193281">USA: +1 631 419 3281</a>
                        </li>
                        <li>
                            <a href="tel:+442032866194">UK: +44 20 3286 6194</a>
                        </li>
                        <li>
                            <a href="tel:+9779851167777">NP: +977 98 5116 7777</a>
                        </li>
                        <li>
                            <a href="mailto:hello@lastdoorsolutions.com">hello@lastdoorsolutions.com</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
