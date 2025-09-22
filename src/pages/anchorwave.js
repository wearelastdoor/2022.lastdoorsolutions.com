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
            <h1 className={`c-case-study-hero__title c-case-study-hero__title-lessspace`}>
            A Partnership That Lasted 13+ Years
            </h1>
              <p className={`c-case-study-hero__shortInfo`}>For more than 13 years, LastDoor served as the engineering backbone for Anchor Wave. Together, we combined Anchor Wave’s creative vision with our technical execution to deliver projects on time, at scale, and with real results.
</p>
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
                <strong>650+</strong>
                projects completed
              </li>
              <li>
                <strong>14+</strong>
                verticals served
              </li>
              <li>
                <strong>10k+</strong>
                Support tickets
              </li>
              <li>
                <strong>13+</strong>
                years partnership
              </li>
            </ul>
          </div>
        </section>

        <div className={`c-case-study-intro`}>
          <div className="container">
            <div className="c-case-study-intro__content">
              <strong className={`c-case-study-intro__lead-text`}>About Anchor Wave</strong>
              <p>
              Anchor Wave is one of Tucson’s top digital agencies. They focus on web design, brand development, and digital marketing, serving a wide range of businesses, from small manufacturers and local service providers to established regional enterprises. Their approach is simple: <i>focus on clients first and create digital strategies that lead to real outcomes, like more leads, conversions, and growth</i>. Their services include custom web design & UX that matches a brand’s identity, content, and copywriting to strengthen messaging, and digital marketing campaigns like SEO, PPC, and social media.
              </p>
              <p>
              When we partnered with Anchor Wave, they needed a dependable development partner to handle development, coding, and technical execution so their designers could focus on creativity. That’s where our collaboration began. Over the years, we became an extension of their team, handling the technical side of projects for their clients across different industries.
              </p>
            </div>
          </div>
        </div>

        <div className={`c-concentration`}>
          <div className={`container`}>
            <div className={`c-concentration__content`}>
              <h2 className={`c-concentration__title`}>Our Role in the Partnership</h2>
              <p>We were Anchor Wave’s dedicated engineering partner, focusing exclusively on technical execution so Anchor Wave could prioritize design, strategy, and client relationships.</p>
              <p>We provided:</p>
              <ul className={`c-concentration__list`}>
                 <li><strong>Custom Development:</strong> WordPress and Elementor builds tailored to project needs</li> 
                <li><strong>Theme & Plugin Development:</strong> Custom-based themes, Modular, SEO-friendly builds, and advanced integrations</li>
                <li><strong>Technical Support:</strong> Over 10,000 support tickets resolved with precision and consistency</li>
                <li><strong>Engineering Consultation:</strong> Reliable input on scalability, performance, and platform optimization</li>
                <li><strong>Backend Programming & Debugging:</strong> Clean, modular, and maintainable code</li>
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
              <h2 className={`c-content-card__title c-content-card__title-large`}>
              How We Worked Together
              </h2>
              <p>
              Our collaboration was built on clarity, speed, and trust:
              </p>
              <ul className={`c-content-card__list`}> 
                <li>Anchor Wave shared requirements and project briefs.</li>
                <li>Our engineers reviewed them, optimized, suggested improvements, and started development.</li>
                <li>Projects were tested, delivered on schedule, and ready to launch.</li>
                <li>Hosting and support kept everything running smoothly.</li>
                <li>Communication remained active through ConnectWise, Figma, Loom, Dropbox, and G-Suite.</li>
                <li>Even while working from another continent, this setup gave Anchor Wave reliable delivery , 24/7 availability, and scalable results.</li>
              </ul>
              {/* <p>
                With a team of dedicated designers and developers, we helped
                Anchorwave achieve its client’s goals.
              </p>
              <p>
                We started with the website design work before catching up on
                technical support (and more), eventually leading to an in-house
                group that could handle all strategical needs and those pesky
                little details like coding or building out everything from
                scratch.
              </p> */}
            </div>
          </div>
        </div>

        {/* <div className={`c-showcase`}>
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
        </div> */}
        <div className={`c-showcase-detail`}>
          <div className={`container`}>
            <h2 className={`c-showcase-detail__title c-showcase-detail__title-large`}>The Advantages for Anchor Wave</h2>
            <div className="c-showcase-detail__description">
              <p>
              Partnering with LastDoor offered clear business advantages for Anchor Wave like;
              </p>
              <ul className={`c-showcase-detail__list`}>
                <li><strong>Significant Cost Savings:</strong> By relying on LastDoor instead of a full in-house engineering team, Anchor Wave achieved major cost reductions. Our highly skilled professionals provided top-quality work at a fraction of U.S. costs, making it a highly effective strategy.</li>
                <li><strong>Flexible Scaling:</strong> Resources could be scaled up or down based on project needs, ensuring the right level of support at all times.</li>
                <li><strong>Diverse Technical Expertise:</strong> From custom WordPress development to frontend/backend engineering and server management (including CI/CD pipelines), we provided the depth and range of technical skills Anchor Wave needed.
</li>
                <li><strong>High-Quality Solutions:</strong> Our modular, reusable code reduced rework, accelerated delivery, and ensured stable, well-tested projects.
</li>
                <li><strong>Continuous Workflow:</strong> The time difference between Nepal and Tucson meant work continued after Anchor Wave’s business hours ended. Tasks could continue in Nepal after the U.S. business day ended, which allows the tasks to progress overnight and results in faster project turnaround.
</li>
                <li><strong>Clear Communication:</strong> With strong English proficiency and international experience, our team ensured smooth, effective communication throughout the partnership.
</li>
              </ul>
              {/* <p>
                We set up a team of experienced designers, developers, and
                project managers for anchorwave. We’ve worked on projects
                ranging from small-scale to large, with even some previously
                unknown verticals! Our expertise reaches every layer: user
                interfaces (UI) across all platforms; UX strategy based on
                research, programming, and coding across all the verticals and
                platforms.
              </p>
              <p>
                Over the years, we built at least 650+ websites, ranging from
                small to large scales. We worked on almost all the verticals and
                utilized all the skills ranging from Front-End Development, Elementor
                Websites, Custom WordPress Development, Programming, etc.
              </p> */}
            </div>
          </div>
        </div>

        <div className={`c-list-content`}>
          <div className={`container`}>
            <div className={`c-list-content__card`}>
              <div className="c-list-content__card-content">
                <h2 className={`c-list-content__title c-list-content__title-large`}>The Legacy of Our Partnership</h2>
                <p>Our support helped Anchor Wave:</p>
                <ul>
                  <li>Scale into new industries and services</li>
                  <li>Build and maintain 650+ projects with minimal rework across 14+ verticals</li>
                  <li>Resolve 10k+ support tickets quickly and effectively</li>
                  <li>Grow their reputation into one of Tucson’s most trusted agencies</li>
                </ul>
                <p>Although our long-term partnership has now come to an end, as Anchor Wave shifted its focus to digital marketing only, the impact of our collaboration remains. The systems, processes, and technical foundations built over 13+ years still support Anchor Wave today. However, that being said, our partnership is not discontinued for a lifetime; we still help them in need on demand.</p>
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
        {/* <div className={`c-showcase c-showcase--alt`}>
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
        </div> */}

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
                How often did you meet with Anchor Wave?
                </h3>
                <button type={`button`} className={`c-accordion__button`}>
                  <span className={`screen-reader-text`}>
                    accordion action button
                  </span>
                </button>
              </div>
              <div className={`c-accordion__body`}>
                <p>
                Our operational model focuses on efficiency, holding fewer than five meetings each year. We rely on a clear communication system, productivity tools, Loom videos, and detailed documentation to keep everyone aligned. All project requirements are written down, avoiding unnecessary discussions and ensuring clarity. This disciplined approach keeps our deadlines firm, and we have a flawless record of meeting them.
                </p>
              </div>
            </div>
            <div className={`c-accordion__item`}>
              <div className={`c-accordion__header`}>
                <h3 className={`c-accordion__title`}>
                How many resources were allocated to Anchor Wave at any given time?
                </h3>
                <button type={`button`} className={`c-accordion__button`}>
                  <span className={`screen-reader-text`}>
                    accordion action button
                  </span>
                </button>
              </div>
              <div className={`c-accordion__body`}>
                <p>
                Resource allocation was flexible, tailored to project needs and yearly planning. We combined dedicated frontend and backend engineers with on-demand support, providing flexibility and security for both sides. This approach allowed Anchor Wave to scale easily without worrying about resource constraints, while giving us the ability to adjust our team as projects evolved.
                </p>
              </div>
            </div>
            <div className={`c-accordion__item`}>
              <div className={`c-accordion__header`}>
                <h3 className={`c-accordion__title`}>
                What was the most common type of project delivered?
                </h3>
                <button type={`button`} className={`c-accordion__button`}>
                  <span className={`screen-reader-text`}>
                    accordion action button
                  </span>
                </button>
              </div>
              <div className={`c-accordion__body`}>
                <p>The majority of projects were custom-developed websites, designed with a modular architecture tailored to each client’s niche. This approach ensured the sites were easy to use, accessible, and free of backend clutter. We also worked on eCommerce projects using WooCommerce, building custom plugins and extensions as needed to meet specific requirements.</p>
              </div>
            </div>
            <div className={`c-accordion__item`}>
              <div className={`c-accordion__header`}>
                <h3 className={`c-accordion__title`}>
                Why did the partnership end if it worked so well?
                </h3>
                <button type={`button`} className={`c-accordion__button`}>
                  <span className={`screen-reader-text`}>
                    accordion action button
                  </span>
                </button>
              </div>
              <div className={`c-accordion__body`}>
                <p>The partnership concluded as Anchor Wave shifted its focus from engineering to digital marketing. But we still provide them support on demand. So, the relationship remains active.</p>
              </div>
            </div>
            <div className={`c-accordion__item`}>
              <div className={`c-accordion__header`}>
                <h3 className={`c-accordion__title`}>
                Does LastDoor still work with agencies?
                </h3>
                <button type={`button`} className={`c-accordion__button`}>
                  <span className={`screen-reader-text`}>
                    accordion action button
                  </span>
                </button>
              </div>
              <div className={`c-accordion__body`}>
                <p>Yes. We continue to partner with agencies worldwide, providing reliable support across a wide range of services, including marketing, design and branding, engineering, DevOps, and AI. Our skilled teams can handle diverse client needs.</p>
              </div>
            </div>
            <div className={`c-accordion__item`}>
              <div className={`c-accordion__header`}>
                <h3 className={`c-accordion__title`}>
                Can this model work for small agencies, too?
                </h3>
                <button type={`button`} className={`c-accordion__button`}>
                  <span className={`screen-reader-text`}>
                    accordion action button
                  </span>
                </button>
              </div>
              <div className={`c-accordion__body`}>
                <p>Absolutely. This work model is particularly powerful for small-to-mid-sized agencies because it provides immediate scale and technical reliability without upfront overhead.</p>
              </div>
            </div>
            <div className={`c-accordion__additional`}>
            <h3>Want the full story?</h3>
            <p><a href="/contact/">Contact Us</a> to get inside look at the tools, workflows, and decisions that made 13+ years of collaboration possible and discover how we can support your agency’s next stage of growth.</p>
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
