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
                      alt={`Display Picture of Prav O`}
                      className="contactPerson__image"
                    ></StaticImage>
                  </figure>
                  <div className="contactPerson__details">
                    <h3 className="contactPerson__name">
                      Prav <span>O</span>
                    </h3>
                    <address className="contactPerson__address">
                      Kathmandu, Nepal
                    </address>

                    <div className="contactPerson__links">
                      {/* <a
                        href="https://wa.me/16314193281"
                        className="contactPerson__phone"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        (631) 419 3281
                      </a>

                      <a
                        href="https://wa.me/9779851167777"
                        className="contactPerson__phone"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        985 116 7777
                      </a> */}
                      <a href="mailto:pravo@lastdoorsolutions.com">
                        pravo@lastdoorsolutions.com
                      </a>
                    </div>
                  </div>
                </div>
              </address>
              {/* <address className="contactPerson">
                <div className="contactPerson__wrap">
                  <figure>
                    <StaticImage
                      src={`../images/footer/bishal_mishra.png`}
                      alt={`Display Picture of Bishal Mishra`}
                      className="contactPerson__image"
                    ></StaticImage>
                  </figure>
                  <div className="contactPerson__details">
                    <h3 className="contactPerson__name">
                      Bishal <span>Mishra</span>
                    </h3>
                    <address className="contactPerson__address">
                      San Francisco, CA
                    </address>
                    <div className="contactPerson__links">
                      <a
                        href="tel:+12672783588"
                        className="contactPerson__phone"
                      >
                        (267) 278 3588
                      </a>
                      <a href="mailto:bishal@lastdoor.co">bishal@lastdoor.co</a>
                    </div>
                  </div>
                </div>
              </address> */}
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
