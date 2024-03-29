import * as React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import { newContent, animateObjects } from "./layout";
import SvgSprite from "../components/parts/svg-sprite";
import { StaticImage } from "gatsby-plugin-image";

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
                to="/b2b-services/"
                title="Partnership"
                exit={{
                  length: 0.6,
                  trigger: ({ exit, e, node }) => animateObjects(exit, node),
                }}
                entry={{
                  delay: 0.7,
                  trigger: ({ entry, node }) => newContent(node),
                }}
              >
                Partnership
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
          <p className="c-footer__copyright desktop">
            &copy; {new Date().getFullYear()} Last Door
          </p>
        </div>
        <div className="c-footer__contact">
          <div className="c-footer__contactInner">
            <h2 className="c-footer__title">BOOK A DISCOVERY CALL</h2>
            <div className="c-footer__contactWrap">
              <address className="contactPerson">
                <div className="contactPerson__wrap">
                  <figure>
                    <StaticImage
                      src={`../images/footer/pravash_karki.png`}
                      alt={`Display Picture of Pravash Karki`}
                      className="contactPerson__image"
                    ></StaticImage>
                    <span className="contactPerson__location">NP</span>
                  </figure>
                  <div className="contactPerson__details">
                    <h3 className="contactPerson__name">
                      Pravash <span>Karki</span>
                    </h3>
                    <a
                      href="mailto:pravash@lastdoorsolutions.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      pravash@lastdoorsolutions.com
                    </a>
                    <a
                      href="tel:+9779851167777"
                      rel="noreferrer"
                      target="_blank"
                      className="contactPerson__phone"
                    >
                      +977 9851 167 777
                    </a>
                  </div>
                </div>
              </address>
              <address className="contactPerson">
                <div className="contactPerson__wrap">
                  <figure>
                    <StaticImage
                      src={`../images/footer/bishal_mishra.png`}
                      alt={`Display Picture of Bishal Mishra`}
                      className="contactPerson__image"
                    ></StaticImage>
                    <span className="contactPerson__location">USA</span>
                  </figure>
                  <div className="contactPerson__details">
                    <h3 className="contactPerson__name">
                      Bishal <span>Mishra</span>
                    </h3>
                    <a
                      href="mailto:bishal@lastdoorsolutions.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      bishal@lastdoorsolutions.com
                    </a>
                    <a
                      href="tel:+9779851167777"
                      rel="noreferrer"
                      target="_blank"
                      className="contactPerson__phone"
                    >
                      +1 (267) 278 3588
                    </a>
                  </div>
                </div>
              </address>
            </div>
          </div>
          <a
            href="mailto:hr@lastdoorsolutions.com"
            rel="noreferrer"
            target="_blank"
            className="c-footer__link"
          >
            Looking for a job? Email us.
          </a>
        </div>
      </div>
      <p className="c-footer__copyright responsive">
        &copy; {new Date().getFullYear()} Last Door
      </p>
    </div>
    <SvgSprite title="Svg Sprite" />
  </footer>
);

export default Footer;
