"use client";

import { motion } from "framer-motion";
import Footer from "@/components/footer/footer";
import HighlightCta from "@/components/highlightCta/HighlightCta";
import { Accordion, AccordionItem } from "@/components/accordion/Accordion";

import * as S from "./Highstep.style";
import ScaleCarousel from "@/components/anchorwave/ScaleCarousel";
import { useAnimateRouteContext } from "@/context/AnimateRouteContext";

// Import Components

const AnchorwavePage = () => {
  const carouselItems = [
    {
      src: "./images/projects_anchorwave/agency_coach_last_door.webp",
      alt: "Agency Coach project, Last Door",
    },
    {
      src: "./images/projects_anchorwave/amg_aesthetics_last_door.webp",
      alt: "Amg Aesthetics, Last Door",
    },
    {
      src: "./images/projects_anchorwave/amore_events_last_door.webp",
      alt: "Amore Events, Last Door",
    },
    {
      src: "./images/projects_anchorwave/boyce_thompson_arboretum_last_door.webp",
      alt: "Boyce Thompson Arboretum Last Door",
    },
    {
      src: "./images/projects_anchorwave/bryan_dulaney_last_door.webp",
      alt: "Bryan Dulaney Last Door",
    },
    {
      src: "/images/projects_anchorwave/foothills_club_last_door.webp",
      alt: "Foothills Club Last Door",
    },
  ];

  const { handleRoute } = useAnimateRouteContext();
  return (
    <>
      <motion.div initial={false} animate={{ x: "100%" }} className="box" />
      <S.HeroWrapper>
        <S.StyledContainer>
          <S.HeroLink onClick={() => handleRoute("work")} title="Work">
            <svg className={`icon icon-circle-angle-left`}>
              <use xlinkHref={`#icon-circle-angle-left`}></use>
            </svg>
            Go Back
          </S.HeroLink>

          <S.HeroLogo
            src="./images/highsep-white-logo.png"
            alt={`anchorwave branding`}
          />
          <S.HeroTitle>Software and user experience simplified</S.HeroTitle>

          <S.MetaData>
            <S.StyledDiv>
              <S.StyledTerm>Partner:</S.StyledTerm>
              <S.StyledDescription>
                8+ years of working together
              </S.StyledDescription>
            </S.StyledDiv>
            <S.StyledDiv>
              <S.StyledTerm>Location:</S.StyledTerm>
              <S.StyledDescription>New Jersey, USA</S.StyledDescription>
            </S.StyledDiv>
          </S.MetaData>

          <S.StyledStatsList>
            <S.ListItem>
              <S.StyledNumbers>10+</S.StyledNumbers>
              projects
            </S.ListItem>
            <S.ListItem>
              <S.StyledNumbers>7+</S.StyledNumbers>
              years
            </S.ListItem>
            <S.ListItem>
              <S.StyledNumbers>4+</S.StyledNumbers>
              verticals
            </S.ListItem>
          </S.StyledStatsList>
        </S.StyledContainer>
      </S.HeroWrapper>

      <S.StyledIntro>
        <S.IntroContainer>
          <S.IntroContent>
            <S.LeadText>About</S.LeadText>
            <S.Paragraph>
              Highstep delivers innovative, solutionfocused technologies, for
              enterprises to end customers. They do their best work by treating
              clients like partners, immersing our experts in your field, and
              helping you manage your long-term project goals. Our culture of
              creativity and open communication helps you make the decisions
              that will make the difference.
            </S.Paragraph>
          </S.IntroContent>
        </S.IntroContainer>
      </S.StyledIntro>

      <S.Concentration>
        <S.ConcentrationContainer>
          <S.ConcentrationContent>
            <S.ConcentrationTitle>concentrations</S.ConcentrationTitle>
            <S.ConcentrationList>
              <S.ListItem>UX and Strategy</S.ListItem>
              <S.ListItem>Digital Marketing</S.ListItem>
              <S.ListItem> Web Development</S.ListItem>
              <S.ListItem>Software Development</S.ListItem>
              <S.ListItem>Programming</S.ListItem>
              <S.ListItem>Consultation</S.ListItem>
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
            <S.ContentTitle>Our story, not-story but the truth.</S.ContentTitle>
            <S.Paragraph>
              From design to development, we have managed to collaborate well
              together for more than 8 years now. Our remote partnership has
              excelled the work resulting in highly efficient products, thanks
              in part to our coordination skills and ability to get stuff done.
            </S.Paragraph>
            <S.Paragraph>
              With a team of dedicated designers and developers, we helped
              Highstep achieve their client’s goals.
            </S.Paragraph>
            <S.Paragraph>
              We started with the website design work before catching up on
              software development (and more), eventually leading to an in-house
              team that could build industry-leading softwares and web
              applications. Our current team for highstep comprises for all
              strategical needs and those pesky little details like coding or
              building out everything from scratch.
            </S.Paragraph>
          </S.ContentCard>
        </S.MainContentContainer>
      </S.MainContent>

      <S.ShowcaseCarouselWrapper>
        <ScaleCarousel items={carouselItems} />
      </S.ShowcaseCarouselWrapper>

      <S.ShowCaseDetail>
        <S.ShowCaseDetailContainer>
          <S.ShowCaseDetailTitle>What We Did</S.ShowCaseDetailTitle>
          <S.ShowCaseDetailDescription>
            <S.Paragraph>
              Over the years, we set up a team of experienced designers,
              developers, and project managers who can handle any project, no
              matter how big or small the scope.
            </S.Paragraph>
            <S.Paragraph>
              We worked on a various set of projects and meanwhile, we also set
              up a team of experienced designers, programmers, and expert
              strategists for highstep. We’ve worked on projects ranging from
              small-scale to large, with even some previously unknown verticals!
              Our expertise reaches every layer: user interfaces (UI) across all
              platforms; UX strategy based on research, programming, and coding
              across all the verticals and platforms.
            </S.Paragraph>
            <S.Paragraph>
              Over the years, we built at least 4 softwares, 15+ websites,
              ranging from small to large scales. We worked on the verticals for
              information, construction management, event management, etc. and
              utilized all the skills ranging from graphic design, UX, Strategy,
              Marketing, Front-End Development, Email Templates, Elementor
              Websites, Custom WordPress Development, Programming, SEO, etc.
            </S.Paragraph>
          </S.ShowCaseDetailDescription>
        </S.ShowCaseDetailContainer>
      </S.ShowCaseDetail>

      <S.ListContent>
        <S.ListContentContainer>
          <S.ListContentCard>
            <S.ListContentCardContent>
              <S.ListContentTitle>How do We work?</S.ListContentTitle>
              <S.Paragraph>
                We have the most straightforward structure that gets the
                workflow up and running with a simple plan that eliminates 99%
                of the hassle. We work as a team.
              </S.Paragraph>
              <S.ListContents>
                <S.ListItem>
                  {" "}
                  We sit with the client and team to gather all of the project
                  requirements and create a detailed brief. anchorwave team and
                  the client to create a detailed brief.
                </S.ListItem>
                <S.ListItem>
                  Whenever we have a project, clients and users are main point
                  of contact. We try to talk with them and bring onboard to work
                  on each aspect of the project.
                </S.ListItem>
                <S.ListItem>
                  The team at Last Door plans and creates sprints, roadmaps,
                  etc. on the project, reviews it thoroughly, and constantly
                  communicates with highstep and the end-client for solutions,
                  suggestions, etc.
                </S.ListItem>
                <S.ListItem>
                  Depending on the nature of the project, we allocate the
                  resources and conduct preliminary discussions regarding the
                  assignment.
                </S.ListItem>
                <S.ListItem>The team starts the project.</S.ListItem>
                <S.ListItem>
                  The teams communicate timely with each other to complete the
                  task on time.
                </S.ListItem>
                <S.ListItem>
                  We deploy products on batches and constantly work to improve
                  each project.
                </S.ListItem>
                <S.ListItem>
                  We use tools like Teams, basecamp, invision, Figma, G-Suite,
                  Sketch Dropbox, Loom, etc., to communicate effectively.
                </S.ListItem>
              </S.ListContents>
            </S.ListContentCardContent>

            <S.ListContentTools>
              <S.ListContentToolsTitle>TOOLS THAT HELP</S.ListContentToolsTitle>
              <S.ListContentToolsList>
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
                  <S.StyledImage
                    src="./images/tool-logo-8.png"
                    alt="liquid web"
                    style={{ maxWidth: `179px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <S.StyledImage
                    src="./images/tool-logo-9.png"
                    alt="basecamp"
                    style={{ maxWidth: `175px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <S.StyledImage
                    src="./images/tool-logo-10.png"
                    alt="Time Doctor"
                    style={{ maxWidth: `176px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <S.StyledImage
                    src="./images/tool-logo-11.png"
                    alt="Zoho"
                    style={{ maxWidth: `131px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <S.StyledImage
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

      <Accordion heading="FAQs" title="FAQs">
        <AccordionItem title="How often do we have meetings?">
          <p>
            This depends on the nature of the product we are working on. Mostly,
            every team member constantly communicates with the stake holders,
            and while the project is running, they conduct meetings at least 3-4
            times a week. For other ongoing tasks, we don't do meetings. That's
            because generally, the distributed team of Last Door and Highstep
            communicate in Microsoft Teams to keep things on track.
          </p>
        </AccordionItem>
        <AccordionItem title="How many resources do you allocate for Higstep?">
          <p>
            We are highly flexible with resources. However, minimum 1 resource
            is allocated at all times.
          </p>
        </AccordionItem>
        <AccordionItem title="What's the most common type of project?">
          <p>DotNet Web Apps</p>
        </AccordionItem>
      </Accordion>
      <HighlightCta />
      <Footer />
    </>
  );
};

export default AnchorwavePage;
