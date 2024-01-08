import * as React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import { Expo, TimelineMax } from "gsap";
import { useEffect } from "react";
import {
  newContent,
  animateObjects,
  animateObjectsFromMainMenu,
} from "./layout";
import $ from "jquery";

const Header = ({ logoImage, headerVisible }) => {
  const menus = [
    {
      link: {
        url: "/about/",
        title: "About",
      },
    },
    {
      link: {
        url: "/work/",
        title: "Work",
      },
    },
    {
      link: {
        url: "/b2b-services/",
        title: "Partnership",
      },
    },
    {
      link: {
        url: "/contact/",
        title: "Contact",
      },
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      $(document).ready(() => {
        let tl = new TimelineMax();
        $(".c-header__ico-menu").click(function () {
          $("body").removeClass("content-loaded");

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
            );
        });

        $(".c-main-nav__menu-close").click(function () {
          tl.to($(".c-main-nav__menu-close"), 0.6, { rotate: 0, opacity: 0 })
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
                  $("body").addClass("content-loaded");
                },
              },
              "-=.6"
            );
        });
      });
    }
  }, []);

  return (
    <header className={`c-header ${headerVisible}`}>
      <div className="c-header__wrap">
        <TransitionLink
          to="/"
          className="c-header__logo"
          exit={{
            length: 0.6,
            trigger: ({ exit, e, node }) => animateObjects(exit, node),
          }}
          entry={{
            delay: 0.8,
            trigger: ({ entry, node }) => newContent(node),
          }}
        >
          <span className="visually-hidden">Site Logo</span>
          <img
            src={logoImage}
            alt="Lastdoor Solutions Branding"
            width={46}
            height={80}
          />
        </TransitionLink>
        <button className={`c-header__ico-menu`}>
          <svg className="icon icon-menu">
            <use xlinkHref="#icon-menu"></use>
          </svg>
          <span className="visually-hidden">open</span>
        </button>
        <nav className="c-nav">
          <ul className="c-nav__menu">
            {menus.map((menu) => {
              const {
                link: { url, title },
              } = menu;
              return (
                <li>
                  <TransitionLink
                    to={url}
                    title={title}
                    exit={{
                      length: 0.6,
                      trigger: ({ exit, e, node }) =>
                        animateObjects(exit, node),
                    }}
                    entry={{
                      delay: 0.8,
                      trigger: ({ entry, node }) => newContent(node),
                    }}
                  >
                    {title}
                  </TransitionLink>
                </li>
              );
            })}
          </ul>
        </nav>
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
                title="Home"
                exit={{
                  length: 0.6,
                  trigger: ({ exit, e, node }) =>
                    animateObjectsFromMainMenu(exit, node),
                }}
                entry={{
                  delay: 0.8,
                  trigger: ({ entry, node }) => newContent(node),
                }}
              >
                Home
              </TransitionLink>
            </li>
            {menus.map((menu) => {
              const {
                link: { url, title },
              } = menu;
              return (
                <li>
                  <TransitionLink
                    to={url}
                    title={title}
                    exit={{
                      length: 0.6,
                      trigger: ({ exit, e, node }) =>
                        animateObjects(exit, node),
                    }}
                    entry={{
                      delay: 0.8,
                      trigger: ({ entry, node }) => newContent(node),
                    }}
                  >
                    {title}
                  </TransitionLink>
                </li>
              );
            })}
          </ul>
          <ul className="main-nav__contact">
            <li>
              <a href="tel:+12672783588">USA: +1 (267) 278 3588</a>
            </li>
            <li>
              <a href="tel:+9779851167777">NP: +977 9851 167 777</a>
            </li>
            <li>
              <a href="mailto:pravash@lastdoorsolutions.com">
                pravash@lastdoorsolutions.com
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
