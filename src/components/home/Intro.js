import * as React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import { useEffect, useRef } from "react";
import { newContent, animateObjects } from "components/layout";
// Import svg Image

import { gsap, Expo, Power2 } from "gsap";

import featuredCaseStudyImage from "images/featured-img-01.webp";
import graphic_1 from "images/graphic-01.svg";

import {
  IntroWrapper,
  IntroOverlayBg,
  IntroCard,
  IntroTitle,
  IntroList,
  IntroListItems,
  IntroListItemsDescription,
  IntroListIcon,
  IntroListMeta,
  IntroListUser,
  IntroListUserDesignation,
  IntroBrandImage,
  IntroDWTLogo,
  IntroIllustration,
} from "styles/home/Intro.Style";
import { IntroDWTLogoBg } from "styles/home/Intro.Style";

const Intro = ({ title, listDescription }) => {
  function createHTML(props) {
    return { __html: props };
  }

  const IntroWrap = useRef();
  const IntroBg = useRef();
  const Card = useRef();
  const Title = useRef();
  const Description = useRef();
  const introLogo = useRef();
  const introLogoBg = useRef();
  const linkTitle = useRef();
  const illustration = useRef();
  const illustrationImg = useRef();

  useEffect(() => {
    // const introTimeline = gsap.timeline({
    //   defaults: {
    //     duration: 2,
    //     ease: Expo.easeOut,
    //   },
    // });

    gsap.to(IntroBg.current, {
      scrollTrigger: {
        trigger: IntroWrap.current,
        start: "20% bottom",
        end: "bottom 30%",
        scroller: "#page-wrapper",
      },
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1.5,
      ease: Expo.easeOut,
    });

    gsap.to(Card.current, {
      scrollTrigger: {
        trigger: IntroWrap.current,
        start: "20% bottom",
        end: "bottom 30%",
        scroller: "#page-wrapper",
      },
      className: `${Card.current.classList.value} is-loaded`,
    });

    gsap.to(Title.current, {
      scrollTrigger: {
        trigger: IntroWrap.current,
        start: "20% bottom",
        end: "bottom 30%",
        scroller: "#page-wrapper",
      },
      duration: 0.5,
      delay: 0.5,
      skewX: 0,
      autoAlpha: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      x: 0,
    });

    gsap.to(Description.current, {
      scrollTrigger: {
        trigger: IntroWrap.current,
        start: "20% bottom",
        end: "bottom 30%",
        scroller: "#page-wrapper",
      },
      duration: 0.5,
      delay: 0.8,
      skewX: 0,
      autoAlpha: 1,
      clipPath: "inset(0% 0% 0% 0%)",
      x: 0,
    });

    gsap.to(introLogo.current, {
      scrollTrigger: {
        trigger: IntroWrap.current,
        start: "20% bottom",
        end: "bottom 30%",
        scroller: "#page-wrapper",
      },
      ease: Power2.easeOut,
      duration: 0.7,
      delay: 0.7,
      clipPath: "circle(50%)",
    });

    gsap.to(introLogoBg.current, {
      scrollTrigger: {
        trigger: IntroWrap.current,
        start: "20% bottom",
        end: "bottom 30%",
        scroller: "#page-wrapper",
      },

      ease: Power2.easeOut,
      duration: 1.5,
      delay: 0.7,
      scale: 1,
    });

    gsap.to(linkTitle.current, {
      scrollTrigger: {
        trigger: IntroWrap.current,
        start: "20% bottom",
        end: "bottom 30%",
        scroller: "#page-wrapper",
      },
      y: 0,
      scale: 1,
      ease: Power2.easeOut,
      duration: 0.6,
      delay: 1.2,
    });

    gsap.to(illustration.current, {
      scrollTrigger: {
        trigger: IntroWrap.current,
        start: "20% bottom",
        end: "bottom 30%",
        scroller: "#page-wrapper",
        scrub: 1,
      },
      x: 0,
    });

    gsap.to(illustrationImg.current, {
      scrollTrigger: {
        trigger: IntroWrap.current,
        start: "20% bottom",
        end: "bottom 30%",
        scroller: "#page-wrapper",
      },
      ease: Power2.easeOut,
      duration: 1,
      clipPath: "inset(0% 0% 0% 0%)",
    });
    
  }, []);

  return (
    <IntroWrapper ref={IntroWrap}>
      <IntroOverlayBg ref={IntroBg} />
      <div className={`l-container`}>
        <IntroCard ref={Card}>
          <IntroTitle ref={Title} dangerouslySetInnerHTML={createHTML(title)} />
          <IntroList ref={Description}>
            {listDescription.map((dataItem) => {
              return (
                <IntroListItems key={dataItem.description}>
                  <IntroListIcon
                    className={`icon icon-quote`}
                    dangerouslySetInnerHTML={createHTML(
                      `<use xlink:href="#icon-quote"></use>`
                    )}
                  />
                  <IntroListItemsDescription
                    dangerouslySetInnerHTML={createHTML(dataItem.description)}
                  />
                  <IntroListMeta>
                    <IntroListUser
                      dangerouslySetInnerHTML={createHTML(dataItem.listUser)}
                    />
                    <IntroListUserDesignation
                      dangerouslySetInnerHTML={createHTML(
                        dataItem.listDesignation
                      )}
                    />
                  </IntroListMeta>
                </IntroListItems>
              );
            })}
          </IntroList>
          <IntroDWTLogo ref={introLogo}>
            <IntroDWTLogoBg
              ref={introLogoBg}
              style={{ backgroundImage: `url(${featuredCaseStudyImage})` }}
            ></IntroDWTLogoBg>
            <TransitionLink
              to="/discovery-world-trekking/"
              title="Discovery World Trekking"
              exit={{
                length: 0.6,
                trigger: ({ exit, e, node }) => animateObjects(exit, node),
              }}
              entry={{
                delay: 0.7,
                trigger: ({ entry, node }) => newContent(node),
              }}
            >
              <strong ref={linkTitle}>{`featured case study`}</strong>
            </TransitionLink>
          </IntroDWTLogo>
        </IntroCard>
        <IntroIllustration ref={illustration}>
          <img
            ref={illustrationImg}
            src={graphic_1}
            alt={`revolutionary utility for nepalese"`}
            width={377}
            height={498}
          />
        </IntroIllustration>
      </div>
    </IntroWrapper>
  );
};

export default Intro;
