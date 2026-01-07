"use client";

import * as React from "react";
import dynamic from "next/dynamic";

import * as S from "./TwinsUK.style";

const Footer = dynamic(() => import("@/components/footer/footer"));
const HighlightCta = dynamic(
  () => import("@/components/highlightCta/HighlightCta")
);
const Accordion = dynamic(
  () => import("@/components/accordion/Accordion").then((mod) => mod.Accordion)
);
const AccordionItem = dynamic(
  () =>
    import("@/components/accordion/Accordion").then((mod) => mod.AccordionItem)
);
const ScaleCarousel = dynamic(
  () => import("@/components/anchorwave/ScaleCarousel")
);

const TwinsUkPage = () => {
  const twinsShowcaseImages1 = [
    {
      src: "./images/twins-uk/twins-showcase-01.webp",
      alt: "Agency Coach project, Last Door",
    },
    {
      src: "./images/twins-uk/twins-showcase-02.webp",
      alt: "Amg Aesthetics, Last Door",
    },
    {
      src: "./images/twins-uk/twins-showcase-01.webp",
      alt: "Amg Aesthetics, Last Door",
    },
    {
      src: "./images/twins-uk/twins-showcase-02.webp",
      alt: "Amg Aesthetics, Last Door",
    },
  ];

  const twinsShowcaseImages2 = [
    {
      src: "./images/twins-uk/twins-showcase-03.webp",
      alt: "Agency Coach project, Last Door",
    },
    {
      src: "./images/twins-uk/twins-showcase-03.webp",
      alt: "Amg Aesthetics, Last Door",
    },
    {
      src: "./images/twins-uk/twins-showcase-03.webp",
      alt: "Amg Aesthetics, Last Door",
    },
    {
      src: "./images/twins-uk/twins-showcase-03.webp",
      alt: "Amg Aesthetics, Last Door",
    },
  ];

  return (
    <>
      <S.TwinsHero>
        <S.TwinsHeroContainer>
          <S.TwinsHeroImage>
            <S.StyledImage
              src="/images/twins-uk/kings-twins-uk-logo.webp"
              alt={`Kings Twins Uk Logos`}
              style={{ maxWidth: `730px` }}
              height={200}
              width={730}
            />
          </S.TwinsHeroImage>
        </S.TwinsHeroContainer>
      </S.TwinsHero>

      <S.TwinsIntro>
        <S.TwinsHeroContainer>
          <S.IntroTitle title={`Largest registry for twins in the UK`}>
            Largest registry for twins in the UK
          </S.IntroTitle>
          <S.IntroDescription>
            <S.StyledParagraph>
              TwinsUK is the UK’s largest adult twin registry and the most
              clinically detailed globally. Twinszone & TwinsUK both are an
              informative website dedicated to twins joining the TwinsUK
              registry contributing to the fascinating field of genetic health
              research and how they keep twins informed about the exciting
              research findings through our newsletters and amazing ‘research
              stories and blogs.’
            </S.StyledParagraph>
          </S.IntroDescription>
        </S.TwinsHeroContainer>
      </S.TwinsIntro>

      {/* <h2 className={`c-showcase__title`} title={`Twinzone`}>
            Twinzone
          </h2> */}

      <ScaleCarousel items={twinsShowcaseImages1} title="Twinzone" />

      <S.ShowCase bg="secondary">
        <S.ShowCaseContainer>
          <S.ShowCaseTitle>The Challenge</S.ShowCaseTitle>
          <S.ShowCaseDescription>
            <S.StyledParagraph>
              Over the years, we set up a team of experienced designers,
              developers, and project managers who can handle any project, no
              matter how big or small the scope.
            </S.StyledParagraph>
          </S.ShowCaseDescription>
        </S.ShowCaseContainer>
      </S.ShowCase>

      <S.ShowCase bg="secondary">
        <S.ShowCaseContainer>
          <S.ShowCaseTitle>The Approach</S.ShowCaseTitle>
          <S.ShowCaseDescription>
            <S.StyledParagraph>
              Twinszone needed a much more user-friendly, customized website
              design to showcase their information and help twins access the
              information resources. The goal was to combine a smooth
              exploration experience with the reflection of the brand. Users
              need to easily search the information, log in to access their
              data, explore educational resources, and see local results to help
              them find SISU products online and in stores.
            </S.StyledParagraph>
          </S.ShowCaseDescription>
        </S.ShowCaseContainer>
      </S.ShowCase>

      <S.ShowcaseFeatures>
        <S.ShowcaseFeaturesContainer>
          <S.ShowcaseFeaturesCard>
            <S.ShowcaseFeaturesGrid>
              <S.ShowcaseFeaturesColumn>
                <S.ShowcaseFeaturesTitle>Deliverables</S.ShowcaseFeaturesTitle>
                <S.ShowcaseFeaturesList>
                  <S.ListItems>Wireframes</S.ListItems>
                  <S.ListItems>High-Fidelity Mockup</S.ListItems>
                  <S.ListItems>Marketing Materials</S.ListItems>
                  <S.ListItems> Support Tickets</S.ListItems>
                  <S.ListItems>Sitemaps</S.ListItems>
                  <S.ListItems> Information Architecture</S.ListItems>
                  <S.ListItems> CMS</S.ListItems>
                </S.ShowcaseFeaturesList>
              </S.ShowcaseFeaturesColumn>
              <S.ShowcaseFeaturesColumn>
                <S.ShowcaseFeaturesTitle>
                  Tools & Skills
                </S.ShowcaseFeaturesTitle>
                <S.ShowcaseFeaturesList>
                  <S.ListItems> Google Docs</S.ListItems>
                  <S.ListItems>Invision</S.ListItems>
                  <S.ListItems>Paper Sketch</S.ListItems>
                  <S.ListItems> HTML, CSS, JS</S.ListItems>
                  <S.ListItems>Balsamiq</S.ListItems>
                  <S.ListItems> PHP, WordPress</S.ListItems>
                  <S.ListItems> Sketch App</S.ListItems>
                </S.ShowcaseFeaturesList>
              </S.ShowcaseFeaturesColumn>
            </S.ShowcaseFeaturesGrid>
          </S.ShowcaseFeaturesCard>
        </S.ShowcaseFeaturesContainer>
      </S.ShowcaseFeatures>

      {/* <div className={`c-showcase c-showcase--large`}>
        <div className={`container`}>
          <div className={`c-showcase__carousel scale-carousel`} data-scale="1">
            <div className={`c-front-showcase__image`}>
              <img
                src="/images/twins-uk/twins-showcase-03.webp"
                alt={`Agency Coach project, Last Door`}
              />
            </div>
            <div className={`c-front-showcase__image`}>
              <img
                src="/images/twins-uk/twins-showcase-03.webp"
                alt={`Amg Aesthetics, Last Door`}
              />
            </div>
            <div className={`c-front-showcase__image`}>
              <img
                src="/images/twins-uk/twins-showcase-03.webp"
                alt={`Amg Aesthetics, Last Door`}
              />
            </div>
            <div className={`c-front-showcase__image`}>
              <img
                src="/images/twins-uk/twins-showcase-03.webp"
                alt={`Amg Aesthetics, Last Door`}
              />
            </div>
          </div>
        </div>
      </div> */}

      <ScaleCarousel items={twinsShowcaseImages2} isLarge={true} />

      <S.ShowCase bg="transparent">
        <S.ShowCaseContainer>
          <S.ShowCaseTitle>The Process</S.ShowCaseTitle>
          <S.ShowCaseDescription>
            <S.StyledParagraph>
              Twinszone needed a much more user-friendly, customized website
              design to showcase their information and help twins access the
              information resources. The goal was to combine a smooth
              exploration experience with the reflection of the brand. Users
              need to easily search the information, log in to access their
              data, explore educational resources, and see local results to help
              them find SISU products online and in stores.
            </S.StyledParagraph>
          </S.ShowCaseDescription>
        </S.ShowCaseContainer>
      </S.ShowCase>

      <S.ShowCase bg="transparent">
        <S.ShowCaseContainer>
          <S.ShowCaseTitle>The Approach</S.ShowCaseTitle>
          <S.ShowCaseDescription>
            <S.StyledParagraph>
              We were able to move all the offline information to the website,
              and the users could access their data from anywhere, at any time.
              In addition, we were able to automate the registration of twins
              with an easy online signup form. The way we transferred the
              offline data of the twins to the website and went 100% digital,
              the client was fully satisfied and offered us with the researchers
              website, which was a huge success.
            </S.StyledParagraph>
          </S.ShowCaseDescription>
        </S.ShowCaseContainer>
      </S.ShowCase>

      {/* <div className={`c-showcase`}>
        <div className={`container`}>
          <h2 className={`c-showcase__title`} title={`TwinsUK`}>
            TwinsUK
          </h2>
          <div className={`c-showcase__carousel scale-carousel`}>
            <div className={`c-front-showcase__image`}>
              <img
                src="/images/twins-uk/twins-showcase-01.webp"
                alt={`Agency Coach project, Last Door`}
              />
            </div>
            <div className={`c-front-showcase__image`}>
              <img
                src="/images/twins-uk/twins-showcase-02.webp"
                alt={`Amg Aesthetics, Last Door`}
              />
            </div>
            <div className={`c-front-showcase__image`}>
              <img
                src="/images/twins-uk/twins-showcase-01.webp"
                alt={`Amg Aesthetics, Last Door`}
              />
            </div>
            <div className={`c-front-showcase__image`}>
              <img
                src="/images/twins-uk/twins-showcase-02.webp"
                alt={`Amg Aesthetics, Last Door`}
              />
            </div>
          </div>
        </div>
      </div> */}

      <ScaleCarousel items={twinsShowcaseImages1} title="TwinsUK" />

      <S.ShowCase bg="secondary">
        <S.ShowCaseContainer>
          <S.ShowCaseTitle>The Challenge</S.ShowCaseTitle>
          <S.ShowCaseDescription>
            <S.StyledParagraph>
              Over the years, we set up a team of experienced designers,
              developers, and project managers who can handle any project, no
              matter how big or small the scope.
            </S.StyledParagraph>
          </S.ShowCaseDescription>
        </S.ShowCaseContainer>
      </S.ShowCase>
      <S.ShowCase bg="secondary">
        <S.ShowCaseContainer>
          <S.ShowCaseTitle>The Approach</S.ShowCaseTitle>
          <S.ShowCaseDescription>
            <S.StyledParagraph>
              Twinszone needed a much more user-friendly, customized website
              design to showcase their information and help twins access the
              information resources. The goal was to combine a smooth
              exploration experience with the reflection of the brand. Users
              need to easily search the information, log in to access their
              data, explore educational resources, and see local results to help
              them find SISU products online and in stores.
            </S.StyledParagraph>
          </S.ShowCaseDescription>
        </S.ShowCaseContainer>
      </S.ShowCase>

      <S.ShowcaseFeatures>
        <S.ShowcaseFeaturesContainer>
          <S.ShowcaseFeaturesCard>
            <S.ShowcaseFeaturesGrid>
              <S.ShowcaseFeaturesColumn>
                <S.ShowcaseFeaturesTitle>Deliverables</S.ShowcaseFeaturesTitle>
                <S.ShowcaseFeaturesList>
                  <S.ListItems>Wireframes</S.ListItems>
                  <S.ListItems>High-Fidelity Mockup</S.ListItems>
                  <S.ListItems>Marketing Materials</S.ListItems>
                  <S.ListItems> Support Tickets</S.ListItems>
                  <S.ListItems>Sitemaps</S.ListItems>
                  <S.ListItems> Information Architecture</S.ListItems>
                  <S.ListItems> CMS</S.ListItems>
                </S.ShowcaseFeaturesList>
              </S.ShowcaseFeaturesColumn>
              <S.ShowcaseFeaturesColumn>
                <S.ShowcaseFeaturesTitle>
                  Tools & Skills
                </S.ShowcaseFeaturesTitle>
                <S.ShowcaseFeaturesList>
                  <S.ListItems> Google Docs</S.ListItems>
                  <S.ListItems>Invision</S.ListItems>
                  <S.ListItems>Paper Sketch</S.ListItems>
                  <S.ListItems> HTML, CSS, JS</S.ListItems>
                  <S.ListItems>Balsamiq</S.ListItems>
                  <S.ListItems> PHP, WordPress</S.ListItems>
                  <S.ListItems> Sketch App</S.ListItems>
                </S.ShowcaseFeaturesList>
              </S.ShowcaseFeaturesColumn>
            </S.ShowcaseFeaturesGrid>
          </S.ShowcaseFeaturesCard>
        </S.ShowcaseFeaturesContainer>
      </S.ShowcaseFeatures>

      {/* <div className={`c-showcase c-showcase--large`}>
        <div className={`container`}>
          <div className={`c-showcase__carousel scale-carousel`} data-scale="1">
            <div className={`c-front-showcase__image`}>
              <img
                src="/images/twins-uk/twins-showcase-03.webp"
                alt={`Agency Coach project, Last Door`}
              />
            </div>
            <div className={`c-front-showcase__image`}>
              <img
                src="/images/twins-uk/twins-showcase-03.webp"
                alt={`Amg Aesthetics, Last Door`}
              />
            </div>
            <div className={`c-front-showcase__image`}>
              <img
                src="/images/twins-uk/twins-showcase-03.webp"
                alt={`Amg Aesthetics, Last Door`}
              />
            </div>
            <div className={`c-front-showcase__image`}>
              <img
                src="/images/twins-uk/twins-showcase-03.webp"
                alt={`Amg Aesthetics, Last Door`}
              />
            </div>
          </div>
        </div>
      </div> */}

      <ScaleCarousel items={twinsShowcaseImages2} isLarge={true} />

      <S.ShowCase bg="transparent">
        <S.ShowCaseContainer>
          <S.ShowCaseTitle>The Process</S.ShowCaseTitle>
          <S.ShowCaseDescription>
            <S.StyledParagraph>
              Twinszone needed a much more user-friendly, customized website
              design to showcase their information and help twins access the
              information resources. The goal was to combine a smooth
              exploration experience with the reflection of the brand. Users
              need to easily search the information, log in to access their
              data, explore educational resources, and see local results to help
              them find SISU products online and in stores.
            </S.StyledParagraph>
          </S.ShowCaseDescription>
        </S.ShowCaseContainer>
      </S.ShowCase>
      <S.ShowCase bg="transparent">
        <S.ShowCaseContainer>
          <S.ShowCaseTitle>The Approach</S.ShowCaseTitle>
          <S.ShowCaseDescription>
            <S.StyledParagraph>
              We were able to move all the offline information to the website,
              and the users could access their data from anywhere, at any time.
              In addition, we were able to automate the registration of twins
              with an easy online signup form. The way we transferred the
              offline data of the twins to the website and went 100% digital,
              the client was fully satisfied and offered us with the researchers
              website, which was a huge success.
            </S.StyledParagraph>
          </S.ShowCaseDescription>
        </S.ShowCaseContainer>
      </S.ShowCase>

      <Accordion heading="FAQs" title="FAQs">
        <AccordionItem title="How often do we have meetings?">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </p>
        </AccordionItem>
        <AccordionItem title="How many resources do you allocate for Anchorwave?">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </p>
        </AccordionItem>
        <AccordionItem title="What's the most common type of project?">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </p>
        </AccordionItem>
      </Accordion>
      <HighlightCta />

      <Footer />
    </>
  );
};

export default TwinsUkPage;
