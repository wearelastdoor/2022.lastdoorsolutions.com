import * as React from "react";
import Seo from "../components/seo";
import { motion } from "framer-motion";
import TransitionLink from "gatsby-plugin-transition-link";
import { animateObjects, newContent } from "../components/layout";
import Footer from "../components/footer";

import highstep_logo from "../images/highsep-white-logo.png";
import welcome_illustration from "../images/grapic-welcome.svg";
import projectImage1 from "../images/projects_anchorwave/agency_coach_last_door.webp";
import projectImage2 from "../images/projects_anchorwave/amg_aesthetics_last_door.webp";
import projectImage3 from "../images/projects_anchorwave/amore_events_last_door.webp";
import projectImage4 from "../images/projects_anchorwave/boyce_thompson_arboretum_last_door.webp";
import projectImage5 from "../images/projects_anchorwave/bryan_dulaney_last_door.webp";
import projectImage6 from "../images/projects_anchorwave/foothills_club_last_door.webp";

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
import { Accordion, AccordionItem } from "../components/Accordion";

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
              src={highstep_logo}
              className="c-case-study-hero__logo"
              alt={`anchorwave branding`}
            />
            <h1 className={`c-case-study-hero__title`}>
              Software and user experience simplified
            </h1>

            <dl className={`c-case-study-hero__meta`}>
              <div>
                <dt>Partner:</dt>
                <dd>8+ years of working together</dd>
              </div>
              <div>
                <dt>Location:</dt>
                <dd>New Jersey, USA</dd>
              </div>
            </dl>

            <ul className={`c-case-study-hero__stats`}>
              <li>
                <strong>10+</strong>
                projects
              </li>
              <li>
                <strong>7+</strong>
                years
              </li>
              <li>
                <strong>4+</strong>
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
                Highstep delivers innovative, solutionfocused technologies, for
                enterprises to end customers. They do their best work by
                treating clients like partners, immersing our experts in your
                field, and helping you manage your long-term project goals. Our
                culture of creativity and open communication helps you make the
                decisions that will make the difference.
              </p>
            </div>
          </div>
        </div>

        <div className={`c-concentration`}>
          <div className={`container`}>
            <div className={`c-concentration__content`}>
              <h2 className={`c-concentration__title`}>concentrations</h2>
              <ul className={`c-concentration__list`}>
                <li>UX and Strategy</li>
                <li>Digital Marketing</li>
                <li> Web Development</li>
                <li>Software Development</li>
                <li>Programming</li>
                <li>Consultation</li>
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
                From design to development, we have managed to collaborate well
                together for more than 8 years now. Our remote partnership has
                excelled the work resulting in highly efficient products, thanks
                in part to our coordination skills and ability to get stuff
                done.
              </p>
              <p>
                With a team of dedicated designers and developers, we helped
                Highstep achieve their client’s goals.
              </p>
              <p>
                We started with the website design work before catching up on
                software development (and more), eventually leading to an
                in-house team that could build industry-leading softwares and
                web applications. Our current team for highstep comprises for
                all strategical needs and those pesky little details like coding
                or building out everything from scratch.
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
                We worked on a various set of projects and meanwhile, we also
                set up a team of experienced designers, programmers, and expert
                strategists for highstep. We’ve worked on projects ranging from
                small-scale to large, with even some previously unknown
                verticals! Our expertise reaches every layer: user interfaces
                (UI) across all platforms; UX strategy based on research,
                programming, and coding across all the verticals and platforms.
              </p>
              <p>
                Over the years, we built at least 4 softwares, 15+ websites,
                ranging from small to large scales. We worked on the verticals
                for information, construction management, event management, etc.
                and utilized all the skills ranging from graphic design, UX,
                Strategy, Marketing, Front-End Development, Email Templates,
                Elementor Websites, Custom WordPress Development, Programming,
                SEO, etc.
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
                    We sit with the client and team to gather all of the project
                    requirements and create a detailed brief. anchorwave team
                    and the client to create a detailed brief.
                  </li>
                  <li>
                    Whenever we have a project, clients and users are main point
                    of contact. We try to talk with them and bring onboard to
                    work on each aspect of the project.
                  </li>
                  <li>
                    The team at Last Door plans and creates sprints, roadmaps,
                    etc. on the project, reviews it thoroughly, and constantly
                    communicates with highstep and the end-client for solutions,
                    suggestions, etc.
                  </li>
                  <li>
                    Depending on the nature of the project, we allocate the
                    resources and conduct preliminary discussions regarding the
                    assignment.
                  </li>
                  <li>The team starts the project.</li>
                  <li>
                    The teams communicate timely with each other to complete the
                    task on time.
                  </li>
                  <li>
                    We deploy products on batches and constantly work to improve
                    each project.
                  </li>
                  <li>
                    We use tools like Teams, basecamp, invision, Figma, G-Suite,
                    Sketch Dropbox, Loom, etc., to communicate effectively.
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

        <Accordion heading="FAQs" title="FAQs">
          <AccordionItem title="How often do we have meetings?">
            <p>
              This depends on the nature of the product we are working on.
              Mostly, every team member constantly communicates with the
              stake holders, and while the project is running, they conduct
              meetings at least 3-4 times a week. For other ongoing tasks,
              we don't do meetings. That's because generally, the
              distributed team of Last Door and Highstep communicate in
              Microsoft Teams to keep things on track.
            </p>
          </AccordionItem>
          <AccordionItem title="How many resources do you allocate for Higstep?">
            <p>
              We are highly flexible with resources. However, minimum 1
              resource is allocated at all times.
            </p>
          </AccordionItem>
          <AccordionItem title="What's the most common type of project?">
            <p>DotNet Web Apps</p>
          </AccordionItem>
        </Accordion>
        <HighlightCta />
      </main>
      <Footer />
    </>
  );
};

export default AnchorwavePage;
