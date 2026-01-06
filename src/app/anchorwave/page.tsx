"use client";

import * as React from "react";

import Footer from "@/components/footer/footer";

import HighlightCta from "@/components/highlightCta/HighlightCta";

import ScaleCarousel from "@/components/anchorwave/ScaleCarousel";

import Accordion, { AccordionItem } from "@/components/accordion/Accordion";
import { motion } from "framer-motion";
import * as S from "./Anchorwave.style";
import { useAnimateRouteContext } from "@/context/AnimateRouteContext";
// Import Components

const AnchorwavePage = () => {
  const { handleRoute } = useAnimateRouteContext();

  return (
    <>
      <motion.div initial={false} animate={{ x: "100%" }} className="box" />
      <S.Anchorwave>
        <S.StyledContainer>
          <S.HeroLink onClick={() => handleRoute("work")} title="Work">
            <svg className={`icon icon-circle-angle-left`}>
              <use xlinkHref={`#icon-circle-angle-left`}></use>
            </svg>
            Go Back
          </S.HeroLink>

          <S.HeroLogo
            src="./images/anchorwave-logo-white.png"
            alt={`anchorwave branding`}
          />
          <S.HeroTitle>A Partnership That Lasted 13+ Years</S.HeroTitle>
          <S.ShortInfo>
            For more than 13 years, LastDoor served as the engineering backbone
            for Anchor Wave. Together, we combined Anchor Wave’s creative vision
            with our technical execution to deliver projects on time, at scale,
            and with real results.
          </S.ShortInfo>
          <S.MetaData>
            <S.StyledDiv>
              <S.StyledTerm>Partner:</S.StyledTerm>
              <S.StyledDescription>
                Anchorwave Internet Solutions
              </S.StyledDescription>
            </S.StyledDiv>
            <S.StyledDiv>
              <S.StyledTerm>Location:</S.StyledTerm>
              <S.StyledDescription>Tucson, Arizona</S.StyledDescription>
            </S.StyledDiv>
          </S.MetaData>

          <S.StyledStatsList>
            <S.ListItem>
              <S.StyledNumbers>650+</S.StyledNumbers>
              projects completed
            </S.ListItem>
            <S.ListItem>
              <S.StyledNumbers>14+</S.StyledNumbers>
              verticals served
            </S.ListItem>
            <S.ListItem>
              <S.StyledNumbers>10k+</S.StyledNumbers>
              Support tickets
            </S.ListItem>
            <S.ListItem>
              <strong>13+</strong>
              years partnership
            </S.ListItem>
          </S.StyledStatsList>
        </S.StyledContainer>
      </S.Anchorwave>

      <S.StyledIntro>
        <S.IntroContainer>
          <S.IntroContent>
            <S.LeadText>About Anchor Wave</S.LeadText>
            <S.Paragraph>
              Anchor Wave is one of Tucson’s top digital agencies. They focus on
              web design, brand development, and digital marketing, serving a
              wide range of businesses, from small manufacturers and local
              service providers to established regional enterprises. Their
              approach is simple:{" "}
              <S.Highlights>
                focus on clients first and create digital strategies that lead
                to real outcomes, like more leads, conversions, and growth
              </S.Highlights>
              . Their services include custom web design & UX that matches a
              brand’s identity, content, and copywriting to strengthen
              messaging, and digital marketing campaigns like SEO, PPC, and
              social media.
            </S.Paragraph>
            <S.Paragraph>
              When we partnered with Anchor Wave, they needed a dependable
              development partner to handle development, coding, and technical
              execution so their designers could focus on creativity. That’s
              where our collaboration began. Over the years, we became an
              extension of their team, handling the technical side of projects
              for their clients across different industries.
            </S.Paragraph>
          </S.IntroContent>
        </S.IntroContainer>
      </S.StyledIntro>

      <S.Concentration>
        <S.ConcentrationContainer>
          <S.ConcentrationContent>
            <S.ConcentrationTitle>
              Our Role in the Partnership
            </S.ConcentrationTitle>
            <S.Paragraph>
              We were Anchor Wave’s dedicated engineering partner, focusing
              exclusively on technical execution so Anchor Wave could prioritize
              design, strategy, and client relationships.
            </S.Paragraph>
            <S.Paragraph>We provided:</S.Paragraph>
            <S.ConcentrationList>
              <S.ListItem>
                <S.ListTitle>Custom Development:</S.ListTitle> WordPress and
                Elementor builds tailored to project needs
              </S.ListItem>
              <S.ListItem>
                <S.ListTitle>Theme & Plugin Development:</S.ListTitle>{" "}
                Custom-based themes, Modular, SEO-friendly builds, and advanced
                integrations
              </S.ListItem>
              <S.ListItem>
                <S.ListTitle>Technical Support:</S.ListTitle> Over 10,000
                support tickets resolved with precision and consistency
              </S.ListItem>
              <S.ListItem>
                <strong>Engineering Consultation:</strong> Reliable input on
                scalability, performance, and platform optimization
              </S.ListItem>
              <S.ListItem>
                <strong>Backend Programming & Debugging:</strong> Clean,
                modular, and maintainable code
              </S.ListItem>
            </S.ConcentrationList>
          </S.ConcentrationContent>
          <S.ConcentrationGraphic
            src="./images/grapic-welcome.svg"
            alt={`welcome illustration`}
          />
        </S.ConcentrationContainer>
      </S.Concentration>

      <S.MainContent>
        <S.MainContentContainer>
          <S.ContentCard>
            <S.ContentTitle>How We Worked Together</S.ContentTitle>
            <S.Paragraph>
              Our collaboration was built on clarity, speed, and trust:
            </S.Paragraph>
            <S.ContentCardList>
              <S.ListItem>
                Anchor Wave shared requirements and project briefs.
              </S.ListItem>
              <S.ListItem>
                Our engineers reviewed them, optimized, suggested improvements,
                and started development.
              </S.ListItem>
              <S.ListItem>
                Projects were tested, delivered on schedule, and ready to
                launch.
              </S.ListItem>
              <S.ListItem>
                Hosting and support kept everything running smoothly.
              </S.ListItem>
              <S.ListItem>
                Communication remained active through ConnectWise, Figma, Loom,
                Dropbox, and G-Suite.
              </S.ListItem>
              <S.ListItem>
                Even while working from another continent, this setup gave
                Anchor Wave reliable delivery , 24/7 availability, and scalable
                results.
              </S.ListItem>
            </S.ContentCardList>
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
          </S.ContentCard>
        </S.MainContentContainer>
      </S.MainContent>

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
      <S.ShowCase>
        <S.ShowCaseContainer>
          <S.ShowCaseTitle>The Advantages for Anchor Wave</S.ShowCaseTitle>
          <S.ShowCaseDescription>
            <S.Paragraph>
              Partnering with LastDoor offered clear business advantages for
              Anchor Wave like;
            </S.Paragraph>
            <S.ShowCaseList>
              <S.ListItem>
                <strong>Significant Cost Savings:</strong> By relying on
                LastDoor instead of a full in-house engineering team, Anchor
                Wave achieved major cost reductions. Our highly skilled
                professionals provided top-quality work at a fraction of U.S.
                costs, making it a highly effective strategy.
              </S.ListItem>
              <S.ListItem>
                <strong>Flexible Scaling:</strong> Resources could be scaled up
                or down based on project needs, ensuring the right level of
                support at all times.
              </S.ListItem>
              <S.ListItem>
                <strong>Diverse Technical Expertise:</strong> From custom
                WordPress development to frontend/backend engineering and server
                management (including CI/CD pipelines), we provided the depth
                and range of technical skills Anchor Wave needed.
              </S.ListItem>
              <S.ListItem>
                <strong>High-Quality Solutions:</strong> Our modular, reusable
                code reduced rework, accelerated delivery, and ensured stable,
                well-tested projects.
              </S.ListItem>
              <S.ListItem>
                <strong>Continuous Workflow:</strong> The time difference
                between Nepal and Tucson meant work continued after Anchor
                Wave’s business hours ended. Tasks could continue in Nepal after
                the U.S. business day ended, which allows the tasks to progress
                overnight and results in faster project turnaround.
              </S.ListItem>
              <S.ListItem>
                <strong>Clear Communication:</strong> With strong English
                proficiency and international experience, our team ensured
                smooth, effective communication throughout the partnership.
              </S.ListItem>
            </S.ShowCaseList>
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
          </S.ShowCaseDescription>
        </S.ShowCaseContainer>
      </S.ShowCase>

      <S.ListContent>
        <S.ListContentContainer>
          <S.ListContentCard>
            <S.ListContentCardContent>
              <S.ListContentTitle
                className={`c-list-content__title c-list-content__title-large`}
              >
                The Legacy of Our Partnership
              </S.ListContentTitle>
              <S.Paragraph>Our support helped Anchor Wave:</S.Paragraph>
              <S.ListContents>
                <S.ListItem>Scale into new industries and services</S.ListItem>
                <S.ListItem>
                  Build and maintain 650+ projects with minimal rework across
                  14+ verticals
                </S.ListItem>
                <S.ListItem>
                  Resolve 10k+ support tickets quickly and effectively
                </S.ListItem>
                <S.ListItem>
                  Grow their reputation into one of Tucson’s most trusted
                  agencies
                </S.ListItem>
              </S.ListContents>
              <S.Paragraph>
                Although our long-term partnership has now come to an end, as
                Anchor Wave shifted its focus to digital marketing only, the
                impact of our collaboration remains. The systems, processes, and
                technical foundations built over 13+ years still support Anchor
                Wave today. However, that being said, our partnership is not
                discontinued for a lifetime; we still help them in need on
                demand.
              </S.Paragraph>
            </S.ListContentCardContent>

            <S.ListContentTools>
              <S.ListContentToolsTitle>TOOLS THAT HELP</S.ListContentToolsTitle>
              <S.ListContentToolsList>
                <S.ListItem>
                  <img
                    src="./images/tool-logo-1.png"
                    alt="ConnectWise"
                    style={{ maxWidth: `191px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <img
                    src="./images/tool-logo-2.png"
                    alt="Sketch"
                    style={{ maxWidth: `157px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <img
                    src="./images/tool-logo-3.png"
                    alt="Suite"
                    style={{ maxWidth: `122px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <img
                    src="./images/tool-logo-4.png"
                    alt="Loom"
                    style={{ maxWidth: `125px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <img
                    src="./images/tool-logo-5.png"
                    alt="Dropbox"
                    style={{ maxWidth: `183px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <img
                    src="./images/tool-logo-6.png"
                    alt="Figma"
                    style={{ maxWidth: `131px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <img
                    src="./images/tool-logo-7.png"
                    alt="Invision"
                    style={{ maxWidth: `133px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <img
                    src="./images/tool-logo-8.png"
                    alt="liquid web"
                    style={{ maxWidth: `179px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <img
                    src="./images/tool-logo-9.png"
                    alt="basecamp"
                    style={{ maxWidth: `175px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <img
                    src="./images/tool-logo-10.png"
                    alt="Time Doctor"
                    style={{ maxWidth: `176px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <img
                    src="./images/tool-logo-11.png"
                    alt="Zoho"
                    style={{ maxWidth: `131px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <img
                    src="./images/tool-logo-12.png"
                    alt="AdobeXD"
                    style={{ maxWidth: `132px` }}
                  />
                </S.ListItem>
              </S.ListContentToolsList>
            </S.ListContentTools>
          </S.ListContentCard>
        </S.ListContentContainer>
      </S.ListContent>
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

      <Accordion
        heading="FAQs"
        title="FAQs"
        additional={
          <>
            <h3>Want the full story?</h3>
            <p>
              <S.InlineLink onClick={() => handleRoute("/contact")}>
                Contact Us
              </S.InlineLink>{" "}
              to get inside look at the tools, workflows, and decisions that
              made 13+ years of collaboration possible and discover how we can
              support your agency's next stage of growth.
            </p>
          </>
        }
      >
        <AccordionItem title="How often did you meet with Anchor Wave?">
          <p>
            Our operational model focuses on efficiency, holding fewer than five
            meetings each year. We rely on a clear communication system,
            productivity tools, Loom videos, and detailed documentation to keep
            everyone aligned. All project requirements are written down,
            avoiding unnecessary discussions and ensuring clarity. This
            disciplined approach keeps our deadlines firm, and we have a
            flawless record of meeting them.
          </p>
        </AccordionItem>
        <AccordionItem title="How many resources were allocated to Anchor Wave at any given time?">
          <p>
            Resource allocation was flexible, tailored to project needs and
            yearly planning. We combined dedicated frontend and backend
            engineers with on-demand support, providing flexibility and security
            for both sides. This approach allowed Anchor Wave to scale easily
            without worrying about resource constraints, while giving us the
            ability to adjust our team as projects evolved.
          </p>
        </AccordionItem>
        <AccordionItem title="What was the most common type of project delivered?">
          <p>
            The majority of projects were custom-developed websites, designed
            with a modular architecture tailored to each client's niche. This
            approach ensured the sites were easy to use, accessible, and free of
            backend clutter. We also worked on eCommerce projects using
            WooCommerce, building custom plugins and extensions as needed to
            meet specific requirements.
          </p>
        </AccordionItem>
        <AccordionItem title="Why did the partnership end if it worked so well?">
          <p>
            The partnership concluded as Anchor Wave shifted its focus from
            engineering to digital marketing. But we still provide them support
            on demand. So, the relationship remains active.
          </p>
        </AccordionItem>
        <AccordionItem title="Does LastDoor still work with agencies?">
          <p>
            Yes. We continue to partner with agencies worldwide, providing
            reliable support across a wide range of services, including
            marketing, design and branding, engineering, DevOps, and AI. Our
            skilled teams can handle diverse client needs.
          </p>
        </AccordionItem>
        <AccordionItem title="Can this model work for small agencies, too?">
          <p>
            Absolutely. This work model is particularly powerful for
            small-to-mid-sized agencies because it provides immediate scale and
            technical reliability without upfront overhead.
          </p>
        </AccordionItem>
      </Accordion>
      <HighlightCta />

      <Footer />
    </>
  );
};

export default AnchorwavePage;
