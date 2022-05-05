/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
import $ from "jquery"
import {Expo, TimelineMax} from "gsap";

// import "./src/styles/style.scss"


export const onInitialClientRender = () => {


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

    $(".c-loader__counter").each(function () {
        $(this).addClass("visible")
        $(this)
            .find("span")
            .prop("Counter", 0)
            .animate(
                {
                    Counter: $(this).text(),
                },
                {
                    duration: 3000,
                    easing: "swing",
                    step: function (now) {
                        $(this).text(Math.ceil(now))
                    },

                    complete: function () {
                        setTimeout(function () {
                            $("#c-loader").addClass("completed")
                        }, 1000)
                        setTimeout(function () {
                            $("body").addClass("content-loaded")
                        }, 1000)
                    },
                }
            )
    })

    $('.c-accordion__header').on('click', function () {
        var _this = $(this),
            parent = _this.closest('.c-accordion__item'),
            target = _this.siblings('.c-accordion__body'),
            isOpen = parent.hasClass('is-open');
        if (isOpen) {
            target.slideUp('fast')
            parent.removeClass('is-open')
        } else {
            target.slideDown('fast')
            parent.addClass('is-open')
        }
    })


}
