import * as React from "react";
import Seo from "../components/seo";
import { motion } from "framer-motion";
import TransitionLink from "gatsby-plugin-transition-link";
import { animateObjects, newContent } from "../components/layout";
import Footer from "../components/footer";

import anchorwave_logo from "../images/anchorwave-logo-white.png";
import welcome_illustration from "../images/grapic-welcome.svg";
import projectImage1 from "../images/projects_anchorwave/agency_coach_last_door.webp";
import projectImage2 from "../images/projects_anchorwave/amg_aesthetics_last_door.webp";
import projectImage3 from "../images/projects_anchorwave/amore_events_last_door.webp";
import projectImage4 from "../images/projects_anchorwave/boyce_thompson_arboretum_last_door.webp";
import projectImage5 from "../images/projects_anchorwave/bryan_dulaney_last_door.webp";
import projectImage6 from "../images/projects_anchorwave/foothills_club_last_door.webp";
import projectImage7 from "../images/projects_anchorwave/gaon_plastic_surgery_last_door.webp";
import projectImage8 from "../images/projects_anchorwave/glhn_last_door.webp";
import projectImage9 from "../images/projects_anchorwave/interiors_in_design_last_door.webp";
import projectImage10 from "../images/projects_anchorwave/never_ending_cashflow_last_door.webp";
import projectImage11 from "../images/projects_anchorwave/stephen_larsen_last_door.webp";
import projectImage12 from "../images/projects_anchorwave/valeria_grunbaum_last_door.webp";

import toolLogo1 from "../images/tool-logo-1.png";
import toolLogo2 from "../images/tool-logo-2.png";
import toolLogo3 from "../images/tool-logo-3.png";
import toolLogo4 from "../images/tool-logo-4.png";
import toolLogo5 from "../images/tool-logo-5.png";
import toolLogo6 from "../images/tool-logo-6.png";
import toolLogo7 from "../images/tool-logo-7.png";
import toolLogo8 from "../images/tool-logo-8.png";
import toolLogo9 from "../images/tool-logo-9.png";
import toolLogo10 from "../images/tool-logo-10.png";
import toolLogo11 from "../images/tool-logo-11.png";
import toolLogo12 from "../images/tool-logo-12.png";
import HighlightCta from "../components/HighlightCta";

import ScaleCarousel from "../components/anchorwave/scaleCarousel";
// Import Components

const AnchorwavePage = () => {
  return (
    <>
      <main className="main">
        <Seo
          title="Last Door's Client and Partner, Anchor Wave Internet Solutions, LLC"
          description="Our remote partnership has lasted more than a decade, thanks in part to our coordination skills and ability to get stuff done."
        />
        <ScaleCarousel />
        <motion.div
          initial={({ x: 0 }, false)}
          animate={{ x: "100%" }}
          className="box"
        />
        <section className={`c-case-study-hero`}>
          <div className={`container`}>
            <TransitionLink
              to="/work/"
              title="Work"
              className={"c-case-study-hero__back"}
              exit={{
                length: 0.6,
                trigger: ({ exit, e, node }) => animateObjects(exit, node),
              }}
              entry={{
                delay: 0.7,
                trigger: ({ entry, node }) => newContent(node),
              }}
            >
              <svg className={`icon icon-circle-angle-left`}>
                <use xlinkHref={`#icon-circle-angle-left`}></use>
              </svg>
              Go Back
            </TransitionLink>

            <img
              src={anchorwave_logo}
              className="c-case-study-hero__logo"
              alt={`anchorwave branding`}
            />
            <h1 className={`c-case-study-hero__title`}>
              13+ years of working together.
            </h1>

            <dl className={`c-case-study-hero__meta`}>
              <div>
                <dt>Partner:</dt>
                <dd>Anchorwave Internet Solutions</dd>
              </div>
              <div>
                <dt>Location:</dt>
                <dd>Tucson, Arizona</dd>
              </div>
            </dl>

            <ul className={`c-case-study-hero__stats`}>
              <li>
                <strong>1200+</strong>
                projects
              </li>
              <li>
                <strong>13+</strong>
                years
              </li>
              <li>
                <strong>10k+</strong>
                Support tickets
              </li>
              <li>
                <strong>14+</strong>
                verticals
              </li>
            </ul>
          </div>
        </section>

        <div className={`c-case-study-intro`}>
          <div className="container">
            <div className="c-case-study-intro__content">
              <strong className={`c-case-study-intro__lead-text`}>About</strong>
              <p>
                Anchorwave is a Tucson-based Web Design & Marketing Agency that
                helps businesses of all sizes, from small manufacturers who are
                just getting started or looking to expand their reach online.
              </p>
              <p>
                We’ve been working together since its inception, and our shared
                values have allowed anchorwave to grow into one of Tucson’s most
                reputable agencies for all things digital!
              </p>
            </div>
          </div>
        </div>

        <div className={`c-concentration`}>
          <div className={`container`}>
            <div className={`c-concentration__content`}>
              <h2 className={`c-concentration__title`}>concentrations</h2>
              <ul className={`c-concentration__list`}>
                <li>UI Design</li>
                <li> Web Development</li>
                <li> Elementor Dev</li>
                <li>Consultation</li>
                <li>
                  Support Tickets
                  <strong>(For web and around)</strong>
                </li>
                <li>Programming</li>
              </ul>
            </div>
            <img
              className={`c-concentration__graphic`}
              src={welcome_illustration}
              alt={`welcome illustration`}
            />
          </div>
        </div>

        <div className={`c-content`}>
          <div className={`container`}>
            <div className="c-content__card">
              <h2 className={`c-content-card__title`}>
                Our story, not-story but the truth.
              </h2>
              <p>
                We may have been on the other side of Earth, but we managed to
                work well together. Our remote partnership has lasted more than
                a decade, thanks in part to our coordination skills and ability
                to get stuff done.
              </p>
              <p>
                With a team of dedicated designers and developers, we helped
                Anchorwave achieve its client’s goals.
              </p>
              <p>
                We started with the website design work before catching up on
                technical support (and more), eventually leading to an in-house
                group that could handle all strategical needs and those pesky
                little details like coding or building out everything from
                scratch.
              </p>
            </div>
          </div>
        </div>

        <div className={`c-showcase`}>
          <div className={`container`}>
            <div className={`c-showcase__carousel scale-carousel`}>
              <div className={`c-front-showcase__image`}>
                <img
                  src={projectImage1}
                  alt={`Agency Coach project, Last Door`}
                />
              </div>
              <div className={`c-front-showcase__image`}>
                <img src={projectImage2} alt={`Amg Aesthetics, Last Door`} />
              </div>
              <div className={`c-front-showcase__image`}>
                <img src={projectImage3} alt={`Amore Events, Last Door`} />
              </div>
              <div className={`c-front-showcase__image`}>
                <img
                  src={projectImage4}
                  alt={`Boyce Thompson Arboretum Last Door`}
                />
              </div>
              <div className={`c-front-showcase__image`}>
                <img src={projectImage5} alt={`Bryan Dulaney Last Door`} />
              </div>
              <div className={`c-front-showcase__image`}>
                <img src={projectImage6} alt={`Foothills Club Last Door`} />
              </div>
            </div>
          </div>
        </div>
        <div className={`c-showcase-detail`}>
          <div className={`container`}>
            <h2 className={`c-showcase-detail__title`}>What We Did</h2>
            <div className="c-showcase-detail__description">
              <p>
                Over the years, we set up a team of experienced designers,
                developers, and project managers who can handle any project, no
                matter how big or small the scope.
              </p>
              <p>
                We set up a team of experienced designers, developers, and
                project managers for anchorwave. We’ve worked on projects
                ranging from small-scale to large, with even some previously
                unknown verticals! Our expertise reaches every layer: user
                interfaces (UI) across all platforms; UX strategy based on
                research, programming, and coding across all the verticals and
                platforms.
              </p>
              <p>
                Over the years, we built at least 1200+ websites, ranging from
                small to large scales. We worked on almost all the verticals and
                utilized all the skills ranging from graphic design, UX,
                Strategy, Front-End Development, Email Templates, Elementor
                Websites, Custom WordPress Development, Programming, SEO, etc.
              </p>
            </div>
          </div>
        </div>

        <div className={`c-list-content`}>
          <div className={`container`}>
            <div className={`c-list-content__card`}>
              <div className="c-list-content__card-content">
                <h2 className={`c-list-content__title`}>How do We work?</h2>
                <p>
                  We have the most straightforward structure that gets the
                  workflow up and running with a simple plan that eliminates 99%
                  of the hassle. We work as a team.
                </p>
                <ul>
                  <li>
                    {" "}
                    We gather all of the project requirements from the
                    anchorwave team and the client to create a detailed brief.
                  </li>
                  <li>
                    Whenever we have a project, the team at anchorwave gathers
                    requirements, creates a thorough brief, and includes every
                    detail on a task.
                  </li>
                  <li>
                    Someone at Last Door picks up the project, reviews it
                    thoroughly, and gets back with questions, missing elements,
                    solutions, suggestions, etc.
                  </li>
                  <li>
                    Depending on the nature of the project, we allocate the
                    resources and conduct preliminary discussions regarding the
                    assignment.
                  </li>
                  <li>
                    While the details are in, the team starts the project.
                  </li>
                  <li>
                    The teams communicate timely with each other to complete the
                    task on time.
                  </li>
                  <li>
                    We use tools like Connectwise, basecamp, invision, Figma,
                    G-Suite, Dropbox, Loom, etc., to communicate effectively.
                  </li>
                </ul>
              </div>

              <div className="c-list-content__tools">
                <h3 className={`c-list-content__tools-title`}>
                  TOOLS THAT HELP
                </h3>
                <ul className="c-list-content__tools-list">
                  <li>
                    <img
                      src={toolLogo1}
                      alt="ConnectWise"
                      style={{ maxWidth: `191px` }}
                    />
                  </li>
                  <li>
                    <img
                      src={toolLogo2}
                      alt="Sketch"
                      style={{ maxWidth: `157px` }}
                    />
                  </li>
                  <li>
                    <img
                      src={toolLogo3}
                      alt="Suite"
                      style={{ maxWidth: `122px` }}
                    />
                  </li>
                  <li>
                    <img
                      src={toolLogo4}
                      alt="Loom"
                      style={{ maxWidth: `125px` }}
                    />
                  </li>
                  <li>
                    <img
                      src={toolLogo5}
                      alt="Dropbox"
                      style={{ maxWidth: `183px` }}
                    />
                  </li>
                  <li>
                    <img
                      src={toolLogo6}
                      alt="Figma"
                      style={{ maxWidth: `131px` }}
                    />
                  </li>
                  <li>
                    <img
                      src={toolLogo7}
                      alt="Invision"
                      style={{ maxWidth: `133px` }}
                    />
                  </li>
                  <li>
                    <img
                      src={toolLogo8}
                      alt="liquid web"
                      style={{ maxWidth: `179px` }}
                    />
                  </li>
                  <li>
                    <img
                      src={toolLogo9}
                      alt="basecamp"
                      style={{ maxWidth: `175px` }}
                    />
                  </li>
                  <li>
                    <img
                      src={toolLogo10}
                      alt="Time Doctor"
                      style={{ maxWidth: `176px` }}
                    />
                  </li>
                  <li>
                    <img
                      src={toolLogo11}
                      alt="Zoho"
                      style={{ maxWidth: `131px` }}
                    />
                  </li>
                  <li>
                    <img
                      src={toolLogo12}
                      alt="AdobeXD"
                      style={{ maxWidth: `132px` }}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={`c-showcase c-showcase--alt`}>
          <div className={`container`}>
            <div className={`c-showcase__carousel scale-carousel`}>
              <div className={`c-front-showcase__image`}>
                <img
                  src={projectImage7}
                  alt={`Gaon Plastic Surgery Last Door`}
                />
              </div>
              <div className={`c-front-showcase__image`}>
                <img src={projectImage8} alt={`GLHN Last Door`} />
              </div>
              <div className={`c-front-showcase__image`}>
                <img
                  src={projectImage9}
                  alt={`Interiors in Design Last Door`}
                />
              </div>
              <div className={`c-front-showcase__image`}>
                <img
                  src={projectImage10}
                  alt={`Never Ending Cashflow Last Door`}
                />
              </div>
              <div className={`c-front-showcase__image`}>
                <img src={projectImage11} alt={`Stephen Larsen Last Door`} />
              </div>
              <div className={`c-front-showcase__image`}>
                <img src={projectImage12} alt={`Valeria Grunbaum Last Door`} />
              </div>
            </div>
          </div>
        </div>

        <section className={`c-accordion`}>
          <div className={`container`}>
            <div className="c-accordion__intro">
              <h2 className={`c-accordion__heading`} title={`FAQs`}>
                FAQs
              </h2>
            </div>
            <div className={`c-accordion__item`}>
              <div className={`c-accordion__header`}>
                <h3 className={`c-accordion__title`}>
                  How often do we have meetings?
                </h3>
                <button type={`button`} className={`c-accordion__button`}>
                  <span className={`screen-reader-text`}>
                    accordion action button
                  </span>
                </button>
              </div>
              <div className={`c-accordion__body`}>
                <p>
                  This depends on the nature of the product we are working on. Mostly, every team member constantly communicates with the stake holders, and while the project is running, they conduct meetings at least 3-4 times a week. For other ongoing tasks, we don't do meetings. That's because generally, the distributed team of Last Door and Highstep communicate in Microsoft Teams to keep things on track. 
                </p>
              </div>
            </div>
            <div className={`c-accordion__item`}>
              <div className={`c-accordion__header`}>
                <h3 className={`c-accordion__title`}>
                  How many resources do you allocate for Anchorwave?
                </h3>
                <button type={`button`} className={`c-accordion__button`}>
                  <span className={`screen-reader-text`}>
                    accordion action button
                  </span>
                </button>
              </div>
              <div className={`c-accordion__body`}>
                <p>
                  Resources are subject to change according to the flow of
                  projects and yearly plans. However, at least 1-3 dedicated
                  human resources are allocated each year. P.S. The flexibility
                  to increase/decrease resources helps our partners achieve
                  their goals accordingly.
                </p>
              </div>
            </div>
            <div className={`c-accordion__item`}>
              <div className={`c-accordion__header`}>
                <h3 className={`c-accordion__title`}>
                  What’s the most common type of project?
                </h3>
                <button type={`button`} className={`c-accordion__button`}>
                  <span className={`screen-reader-text`}>
                    accordion action button
                  </span>
                </button>
              </div>
              <div className={`c-accordion__body`}>
                <p>WordPress Websites.</p>
              </div>
            </div>
          </div>
        </section>
        <HighlightCta />
      </main>
      <Footer />
    </>
  );
};

export default AnchorwavePage;
