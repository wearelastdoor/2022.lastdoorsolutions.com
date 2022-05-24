import * as React from "react";
import PropTypes from "prop-types";
import { gsap, Power2, TimelineMax, Expo } from "gsap";
import { Location } from "@reach/router";
import Header from "./header";
import PreLoader from "./PreLoader/PreLoader";
import SmoothScroll from "./smoothScrollbar/smoothScrollbar";
import $ from "jquery";

import logo from "../images/logo.svg";

// hidden object animation
export function animateObjects() {
  const tl = gsap.timeline();
  const overlayBg = document.querySelectorAll(".animate-overlay");
  tl.fromTo(
    overlayBg,
    0.7,
    { clipPath: "inset(0% 0% 0% 100%)" },
    {
      clipPath: "inset(0% 0% 0% 0%)",
      ease: Power2.easeInOut,
    }
  ).to(
    overlayBg,
    0.7,
    {
      clipPath: "inset(0% 100% 0% 0%)",
      clearProps: "all",
      ease: Power2.easeInOut,
    },
    "+=.7"
  );
}

export function animateObjectsFromMainMenu() {
  const tl = gsap.timeline();
  const overlayBg = document.querySelectorAll(".animate-overlay");
  tl.fromTo(
    overlayBg,
    0.7,
    { clipPath: "inset(0% 0% 0% 100%)" },
    {
      clipPath: "inset(0% 0% 0% 0%)",
      ease: Power2.easeInOut,
      onComplete: () => {
        let tlMenu = new TimelineMax();
        tlMenu
          .to($(".c-main-nav__menu-close"), 0.1, { rotate: 0, opacity: 0 })
          .staggerTo(
            ".main-menu  li, .main-nav__contact li",
            0.1,
            {
              opacity: 0,
              ease: Expo.easeInOut,
            },
            -0.01,
            "-=2"
          )
          .to(
            $(".c-main-nav"),
            0.1,
            {
              clipPath: "inset(0%  0% 0% 100%)",
              opacity: 1,
              ease: Expo.easeInOut,
            },
            "-=2"
          );
      },
    }
  ).to(
    overlayBg,
    0.7,
    {
      clipPath: "inset(0% 100% 0% 0%)",
      clearProps: "all",
      ease: Power2.easeInOut,
      onComplete: () => {
        $("body").addClass("content-loaded");
      },
    },
    "+=.7"
  );
}

// new content to be faded in after animation
export function newContent(node) {
  return gsap.from(
    node.querySelectorAll("h1, h2, h3, h4, p, a, img, table, ul, pre"),
    {
      // opacity: 0,
      // delay: 1,
      // duration: 2,
      // stagger: 0.08,
    }
  );
}

const overlayBg = [
  {
    svg: `<svg width="172" height="172" viewBox="0 0 172 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M86 171C39.1121 171 1 132.888 1 86C1 39.1121 39.1121 1 86 1C132.888 1 171 39.1121 171 86V86C171 132.888 132.888 171 86 171Z" fill="#F5F6F0" stroke="#17212A"/>
          </svg> `,
    additionalClass: "animate-overlay--first",
  },
  {
    svg: `<svg width="211" height="211" viewBox="0 0 211 211" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M210 210H1V1H210V210Z" fill="#F5F6F0" stroke="#17212A"/>
</svg>
    `,
    additionalClass: "animate-overlay--second",
  },
  {
    svg: `<svg width="206" height="196" viewBox="0 0 206 196" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M103.259 2L134.551 65.4767L204.519 75.6545L153.89 125.063L165.841 194.829L103.259 161.891L40.6767 194.829L52.6294 125.063L2 75.6545L71.9686 65.4767L103.259 2Z" fill="#F5F6F0" stroke="#17212A"/>
    </svg>`,
    additionalClass: "animate-overlay--third",
  },
];

function createMarkup(props) {
  return {
    __html: props,
  };
}

const getRandomOrder = (arr) => {
  const clone = arr.slice();
  const ret = [];
  while (clone.length > 0) {
    const obj = clone.splice(Math.floor(Math.random() * clone.length), 1)[0];
    ret.push(Object.assign({}, obj));
  }
  return ret;
};

const Numbers = (props) => {
  const { data } = props;
  return (
    <>
      {data.map(({ svg, additionalClass }, ix) => {
        if (ix === 0) {
          return (
            <div key={ix} className={`animate-overlay ${additionalClass}`}>
              <div className="animate-overlay__loader">
                <div
                  className="animate-overlay__svg-holder"
                  dangerouslySetInnerHTML={createMarkup(svg)}
                />
              </div>
            </div>
          );
        } else {
          return false;
        }
      })}
    </>
  );
};

const Layout = ({ children }) => {
  const randomized = getRandomOrder(overlayBg);
  return (
    <div className="app">
      <PreLoader />
      <SmoothScroll />
      <Location>
        {({ location }) => {
          const url = location.pathname;
          const slug = ["/anchorwave/", "/anchorwave"];
          return url === slug[0] ? (
            <Header logoImage={logo} headerVisible={"hidden"} />
          ) : (
            <Header logoImage={logo} headerVisible={`show`} />
          );
        }}
      </Location>
      <div className="page-wrapper">
        <Numbers data={randomized} />
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
