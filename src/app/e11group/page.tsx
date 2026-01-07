"use client";

import dynamic from "next/dynamic";

const ScaleCarousel = dynamic(
  () => import("@/components/anchorwave/ScaleCarousel")
);
const Accordion = dynamic(
  () => import("@/components/accordion/Accordion").then((mod) => mod.Accordion)
);
const AccordionItem = dynamic(
  () =>
    import("@/components/accordion/Accordion").then((mod) => mod.AccordionItem)
);
const HighlightCta = dynamic(
  () => import("@/components/highlightCta/HighlightCta")
);
const Footer = dynamic(() => import("@/components/footer/footer"));

import * as S from "./E11group.style";
import { useAnimateRouteContext } from "@/context/AnimateRouteContext";

const page = () => {
  const { handleRoute } = useAnimateRouteContext();

  const showcaseImages1 = [
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
      src: "./images/projects_anchorwave/foothills_club_last_door.webp",
      alt: "Foothills Club Last Door",
    },
  ];

  const showcaseImages2 = [
    {
      src: "./images/projects_anchorwave/gaon_plastic_surgery_last_door.webp",
      alt: "Gaon Plastic Surgery Last Door",
    },
    {
      src: "./images/projects_anchorwave/glhn_last_door.webp",
      alt: "GLHN Last Door",
    },
    {
      src: "./images/projects_anchorwave/interiors_in_design_last_door.webp",
      alt: "Interiors in Design Last Door",
    },
    {
      src: "./images/projects_anchorwave/never_ending_cashflow_last_door.webp",
      alt: "Never Ending Cashflow Last Door",
    },
    {
      src: "./images/projects_anchorwave/stephen_larsen_last_door.webp",
      alt: "Stephen Larsen Last Door",
    },
    {
      src: "./images/projects_anchorwave/valeria_grunbaum_last_door.webp",
      alt: "Valeria Grunbaum Last Door",
    },
  ];

  return (
    <>
      <S.HeroWrapper>
        <S.StyledContainer>
          <S.HeroLink onClick={() => handleRoute("work")} title="Work">
            <svg className={`icon icon-circle-angle-left`}>
              <use xlinkHref={`#icon-circle-angle-left`}></use>
            </svg>
            Go Back
          </S.HeroLink>

          <S.HeroLogo
            src="/images/anchorwave-logo-white.webp"
            alt={`anchorwave branding`}
          />
          <S.HeroTitle>13+ years of working together.</S.HeroTitle>

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
              <S.StyledNumbers>1200+</S.StyledNumbers>
              projects
            </S.ListItem>
            <S.ListItem>
              <S.StyledNumbers>13+</S.StyledNumbers>
              years
            </S.ListItem>
            <S.ListItem>
              <S.StyledNumbers>10k+</S.StyledNumbers>
              Support tickets
            </S.ListItem>
            <S.ListItem>
              <S.StyledNumbers>14+</S.StyledNumbers>
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
              Anchorwave is a Tucson-based Web Design & Marketing Agency that
              helps businesses of all sizes, from small manufacturers who are
              just getting started or looking to expand their reach online.
            </S.Paragraph>
            <S.Paragraph>
              We’ve been working together since its inception, and our shared
              values have allowed anchorwave to grow into one of Tucson’s most
              reputable agencies for all things digital!
            </S.Paragraph>
          </S.IntroContent>
        </S.IntroContainer>
      </S.StyledIntro>

      <S.Concentration>
        <S.ConcentrationContainer>
          <S.ConcentrationContent>
            <S.ConcentrationTitle>concentrations</S.ConcentrationTitle>
            <S.ConcentrationList>
              <S.ListItem>UI Design</S.ListItem>
              <S.ListItem>Web Development</S.ListItem>
              <S.ListItem> Elementor Dev</S.ListItem>
              <S.ListItem>Consultation</S.ListItem>
              <S.ListItem>
                Support Tickets <strong>(For web and around)</strong>
              </S.ListItem>
              <S.ListItem>Programming</S.ListItem>
            </S.ConcentrationList>
          </S.ConcentrationContent>
          <S.ConcentrationGraphic
            src="/images/grapic-welcome.svg"
            alt={`welcome illustration`}
          />
        </S.ConcentrationContainer>
      </S.Concentration>

      <S.MainContent>
        <S.MainContentContainer>
          <S.ContentCard>
            <S.ContentTitle>Our story, not-story but the truth.</S.ContentTitle>
            <S.Paragraph>
              We may have been on the other side of Earth, but we managed to
              work well together. Our remote partnership has lasted more than a
              decade, thanks in part to our coordination skills and ability to
              get stuff done.
            </S.Paragraph>
            <S.Paragraph>
              With a team of dedicated designers and developers, we helped
              Anchorwave achieve its client’s goals.
            </S.Paragraph>
            <S.Paragraph>
              We started with the website design work before catching up on
              technical support (and more), eventually leading to an in-house
              group that could handle all strategical needs and those pesky
              little details like coding or building out everything from
              scratch.
            </S.Paragraph>
          </S.ContentCard>
        </S.MainContentContainer>
      </S.MainContent>

      <S.ShowcaseCarouselWrapper>
        <ScaleCarousel items={showcaseImages1} />
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
              We set up a team of experienced designers, developers, and project
              managers for anchorwave. We’ve worked on projects ranging from
              small-scale to large, with even some previously unknown verticals!
              Our expertise reaches every layer: user interfaces (UI) across all
              platforms; UX strategy based on research, programming, and coding
              across all the verticals and platforms.
            </S.Paragraph>
            <S.Paragraph>
              Over the years, we built at least 1200+ websites, ranging from
              small to large scales. We worked on almost all the verticals and
              utilized all the skills ranging from graphic design, UX, Strategy,
              Front-End Development, Email Templates, Elementor Websites, Custom
              WordPress Development, Programming, SEO, etc.
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
                  We gather all of the project requirements from the anchorwave
                  team and the client to create a detailed brief.
                </S.ListItem>
                <S.ListItem>
                  Whenever we have a project, the team at anchorwave gathers
                  requirements, creates a thorough brief, and includes every
                  detail on a task.
                </S.ListItem>
                <S.ListItem>
                  Someone at Last Door picks up the project, reviews it
                  thoroughly, and gets back with questions, missing elements,
                  solutions, suggestions, etc.
                </S.ListItem>
                <S.ListItem>
                  Depending on the nature of the project, we allocate the
                  resources and conduct preliminary discussions regarding the
                  assignment.
                </S.ListItem>
                <S.ListItem>
                  {" "}
                  While the details are in, the team starts the project.
                </S.ListItem>
                <S.ListItem>
                  The teams communicate timely with each other to complete the
                  task on time.
                </S.ListItem>
                <S.ListItem>
                  We use tools like Connectwise, basecamp, invision, Figma,
                  G-Suite, Dropbox, Loom, etc., to communicate effectively.
                </S.ListItem>
              </S.ListContents>
            </S.ListContentCardContent>

            <S.ListContentTools>
              <S.ListContentToolsTitle>TOOLS THAT HELP</S.ListContentToolsTitle>
              <S.ListContentToolsList>
                <S.ListItem>
                  <img
                    src="/images/tool-logo-1.webp"
                    alt="ConnectWise"
                    style={{ maxWidth: `191px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <img
                    src="/images/tool-logo-2.webp"
                    alt="Sketch"
                    style={{ maxWidth: `157px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <img
                    src="/images/tool-logo-3.webp"
                    alt="Suite"
                    style={{ maxWidth: `122px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <img
                    src="/images/tool-logo-4.webp"
                    alt="Loom"
                    style={{ maxWidth: `125px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <img
                    src="/images/tool-logo-5.webp"
                    alt="Dropbox"
                    style={{ maxWidth: `183px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <img
                    src="/images/tool-logo-6.webp"
                    alt="Figma"
                    style={{ maxWidth: `131px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <img
                    src="/images/tool-logo-7.webp"
                    alt="Invision"
                    style={{ maxWidth: `133px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <img
                    src="/images/tool-logo-8.webp"
                    alt="liquid web"
                    style={{ maxWidth: `179px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <img
                    src="/images/tool-logo-9.webp"
                    alt="basecamp"
                    style={{ maxWidth: `175px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <img
                    src="/images/tool-logo-10.webp"
                    alt="Time Doctor"
                    style={{ maxWidth: `176px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <img
                    src="/images/tool-logo-11.webp"
                    alt="Zoho"
                    style={{ maxWidth: `131px` }}
                  />
                </S.ListItem>
                <S.ListItem>
                  <img
                    src="/images/tool-logo-12.webp"
                    alt="AdobeXD"
                    style={{ maxWidth: `132px` }}
                  />
                </S.ListItem>
              </S.ListContentToolsList>
            </S.ListContentTools>
          </S.ListContentCard>
        </S.ListContentContainer>
      </S.ListContent>

      <S.ShowcaseCarouselWrapper>
        <ScaleCarousel items={showcaseImages2} isAlt={true} />
      </S.ShowcaseCarouselWrapper>

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
        <AccordionItem title="How many resources do you allocate for Anchorwave?">
          <p>
            Resources are subject to change according to the flow of projects
            and yearly plans. However, at least 1-3 dedicated human resources
            are allocated each year. P.S. The flexibility to increase/decrease
            resources helps our partners achieve their goals accordingly.
          </p>
        </AccordionItem>
        <AccordionItem title="What's the most common type of project?">
          <p>WordPress Websites.</p>
        </AccordionItem>
      </Accordion>

      <HighlightCta />

      <Footer />
    </>
  );
};

export default page;
