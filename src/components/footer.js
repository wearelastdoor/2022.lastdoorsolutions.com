import * as React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import { newContent, animateObjects } from "./layout";
import SvgSprite from "../components/parts/svg-sprite";

const Footer = () => (
  <footer className="c-footer">
    <div className="l-container">
      <div className="c-footer__wrap">
        <div className="c-footer__menu">
          <ul className="c-footer__nav">
            <li>
              <TransitionLink
                to="/"
                title="home"
                exit={{
                  length: 0.6,
                  trigger: ({ exit, e, node }) => animateObjects(exit, node),
                }}
                entry={{
                  delay: 0.7,
                  trigger: ({ entry, node }) => newContent(node),
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
                  trigger: ({ exit, e, node }) => animateObjects(exit, node),
                }}
                entry={{
                  delay: 0.7,
                  trigger: ({ entry, node }) => newContent(node),
                }}
              >
                about
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                to="/B2B/"
                title="For Agencies"
                exit={{
                  length: 0.6,
                  trigger: ({ exit, e, node }) => animateObjects(exit, node),
                }}
                entry={{
                  delay: 0.7,
                  trigger: ({ entry, node }) => newContent(node),
                }}
              >
                For Agencies
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                to="/work/"
                title="work"
                exit={{
                  length: 0.6,
                  trigger: ({ exit, e, node }) => animateObjects(exit, node),
                }}
                entry={{
                  delay: 0.7,
                  trigger: ({ entry, node }) => newContent(node),
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
                  trigger: ({ exit, e, node }) => animateObjects(exit, node),
                }}
                entry={{
                  delay: 0.7,
                  trigger: ({ entry, node }) => newContent(node),
                }}
              >
                contact
              </TransitionLink>
            </li>
          </ul>
          <p className="c-footer__copyright">
            &copy; {new Date().getFullYear()} lastdoor
          </p>
        </div>
        <div className="c-footer__contact">
            <h2 className="c-footer__title">Talk to Us</h2>
            <div className="c-footer__contactWrap">
                <address>
                
                </address>
            </div>

        </div>
      </div>
    </div>
    <SvgSprite title="Svg Sprite" />
  </footer>
);

export default Footer;
