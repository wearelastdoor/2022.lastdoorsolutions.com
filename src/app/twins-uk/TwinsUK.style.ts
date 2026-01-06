"use client";

import { device } from "@/styles/theme/breakpoints";
import Image from "next/image";
import styled from "styled-components";

type ShowCaseBG = "transparent" | "primary" | "secondary";

const TwinsHero = styled.div`
  padding: clamp(17rem, 15vw, 25rem) 0 clamp(5.8rem, 15vw, 25rem);
  background-color: ${({ theme }) => theme.colors.primary.white};
`;

const TwinsHeroContainer = styled.div`
  max-width: 84rem;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.container};
`;

const TwinsHeroImage = styled.figure``;

const StyledImage = styled(Image)`
  width: 100%;
`;

const TwinsIntro = styled.div`
  padding: clamp(7rem, 10vw, 15rem) 0;
`;

const IntroTitle = styled.h2`
  font-size: clamp(5.9rem, 10vw, 12rem);
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: normal;
  color: ${({ theme }) => theme.colors.primary.gray[50]};
  display: inline-block;
  vertical-align: top;
  line-height: 1;
  position: relative;
  z-index: 1;
  margin-bottom: clamp(2.5rem, 5vw, 3.3rem);
  letter-spacing: -0.69996rem;
  max-width: 78.7rem;

  @media ${device.phone} {
    letter-spacing: -0.28125rem;
    max-width: min(31.6rem, 100%);
    width: 100%;
  }

  &:after {
    content: attr(title);
    position: absolute;
    top: 0;
    color: transparent;
    z-index: -1;
    display: inline-block;
    vertical-align: top;
    left: 0;
    right: 0;
    transform: translate(0.5rem, 0.5rem) translateZ(0);
    backface-visibility: hidden;
    @include letter-stroke(rgba(142, 210, 220, 0.75), 0.1rem);

    @media ${device.phone} {
      transform: translate(0.3rem, 0.3rem) translateZ(0);
    }
  }
`;

const IntroDescription = styled.div`
  font-size: ${({ theme }) => theme.font.size.display.md};
  line-height: 1.615;
  letter-spacing: -0.05rem;

  @media ${device.phone} {
    font-size: ${({ theme }) => theme.font.size.body.xl};
  }

  p {
    margin-bottom: 4.2rem;
    @media ${device.phone} {
      margin-bottom: 3.2rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const StyledParagraph = styled.p``;

const ShowCase = styled.div<{ bg?: ShowCaseBG }>`
  position: relative;
  padding: 9.3rem 0;

  & + & {
    padding-top: 0;
  }

  @media ${device.phone} {
    padding: 4rem 0 7rem;
  }

  &:after {
    bottom: -16rem;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: -18.2rem;
    z-index: -1;

    background-color: ${({ bg, theme }) => {
      switch (bg) {
        case "transparent":
          return "transparent";
        case "secondary":
          return "rgba(142,210,220)";
        default:
          return "${({ theme }) => theme.color.alt}";
      }
    }};
  }
`;

const ShowCaseContainer = styled.div`
  max-width: 94rem;
  padding: 0 ${({ theme }) => theme.spacing.container};
  margin: 0 auto;
`;

const ShowCaseTitle = styled.h2`
  margin-bottom: 4rem;
  font-size: clamp(3.4rem, 6vw, 4.6rem);
  line-height: 1;
  letter-spacing: -0.2rem;

  @media ${device.phone} {
    margin-bottom: 3rem;
    letter-spacing: -0.1rem;
  }
`;

const ShowCaseDescription = styled.div`
  position: relative;
  z-index: 1;
  font-size: ${({ theme }) => theme.font.size.display.md};
  line-height: 1.615;
  letter-spacing: -0.05rem;

  @media ${device.phone} {
    font-size: ${({ theme }) => theme.font.size.body.xl};
  }

  p {
    margin-bottom: 4.2rem;

    @media ${device.phone} {
      margin-bottom: 3.2rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

//   .c-showcase-detail__title-large{
//     max-width: 70.0rem;
//   }

const ShowCaseList = styled.ul`
  list-style: none;
  position: relative;
  z-index: 1;
  strong {
    font-weight: 700;
  }
  li {
    padding-left: ${({ theme }) => theme.spacing["4xl"]};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    position: relative;
    z-index: 1;

    @media ${device.phone} {
      padding-left: ${({ theme }) => theme.spacing.section};
    }

    &:after {
      content: "";
      background-image: url("data:image/svg+xml,%0A%3Csvg width='18px' height='18px' viewBox='0 0 18 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpolygon id='path-h2ml1miswm-1' points='170 4763 186 4771 170 4779'%3E%3C/polygon%3E%3Cfilter x='-6.2%25' y='-6.2%25' width='125.0%25' height='125.0%25' filterUnits='objectBoundingBox' id='filter-h2ml1miswm-2'%3E%3CfeOffset dx='2' dy='2' in='SourceAlpha' result='shadowOffsetOuter1'%3E%3C/feOffset%3E%3CfeColorMatrix values='0 0 0 0 0.988235294 0 0 0 0 0.945098039 0 0 0 0 0.0745098039 0 0 0 1 0' type='matrix' in='shadowOffsetOuter1'%3E%3C/feColorMatrix%3E%3C/filter%3E%3C/defs%3E%3Cg id='Finalized-Pages' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Anchorwave_22.0' transform='translate(-170.000000, -4763.000000)' fill-rule='nonzero'%3E%3Cg id='Rectangle'%3E%3Cuse fill='black' fill-opacity='1' filter='url(%23filter-h2ml1miswm-2)' xlink:href='%23path-h2ml1miswm-1'%3E%3C/use%3E%3Cuse fill='%2317212A' xlink:href='%23path-h2ml1miswm-1'%3E%3C/use%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      position: absolute;
      left: 0;
      top: 1.2rem;
      height: 1.6rem;
      width: 1.6rem;

      @media ${device.phone} {
        top: 0.9rem;
        transform: scale(0.8);
        transform-origin: left top;
      }
    }
  }
`;

const ShowcaseFeatures = styled.div`
  padding-bottom: 4rem;

  @media ${device.phone} {
    padding-bottom: 6rem;
  }
`;

const ShowcaseFeaturesContainer = styled.div`
  max-width: 122rem;
  margin: 0 auto;
  padding-right: 16rem;

  @media screen and (max-width: 1280px) {
    padding-right: 8rem;
  }
  @media ${device.desktop} {
    padding-right: 2rem;
  }
`;

const ShowcaseFeaturesCard = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.gray[50]};
  color: ${({ theme }) => theme.colors.primary.white};
  padding: 12rem 14rem 10rem;
  position: relative;
  z-index: 1;
  margin-left: -16rem;

  @media screen and (max-width: 1280px) {
    padding: 8rem 8rem 6rem;
    margin-left: -8rem;
  }

  @media ${device.desktop} {
    margin-left: 0;
    padding: 8rem 8rem 6rem 4rem;
  }
  @media ${device.phone} {
    padding: 4rem 4rem 4rem 2rem;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: -99.9rem;
    right: 0;
    z-index: -1;
    background-color: ${({ theme }) => theme.colors.primary.gray[50]};
  }
`;

const ShowcaseFeaturesGrid = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0 -4.5rem;
`;

const ShowcaseFeaturesColumn = styled.div`
  padding: 0 4.5rem;

  &:first-child {
    width: 55%;

    @media ${device.tablet} {
      width: 100%;
      margin-bottom: 4rem;
    }
  }

  &:nth-child(2) {
    width: 45%;
    @media ${device.tablet} {
      width: 100%;
    }
  }
`;

const ShowcaseFeaturesTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary.white};
  margin-bottom: 4rem;
  font-size: clamp(3.4rem, 6vw, 4.6rem);
  line-height: 1;
  max-width: 41.4rem;
  letter-spacing: -0.2rem;

  @media ${device.phone} {
    margin-bottom: 3rem;
    letter-spacing: -0.1rem;
  }
`;

const ShowcaseFeaturesList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0 -2.3rem;
  flex-wrap: wrap;
  align-content: flex-start;

  li {
    padding: 0 2.3rem;
    margin-bottom: 1.6rem;
    line-height: 1.25;

    &:nth-child(odd) {
      width: 46%;
      @media ${device.phone} {
        width: 100%;
      }
    }

    &:nth-child(even) {
      width: 54%;
      @media ${device.phone} {
        width: 100%;
      }
    }
  }
`;

const ListItems = styled.li``;

export {
  IntroDescription,
  IntroTitle,
  ListItems,
  ShowCase,
  ShowCaseContainer,
  ShowCaseDescription,
  ShowCaseList,
  ShowCaseTitle,
  ShowcaseFeatures,
  ShowcaseFeaturesCard,
  ShowcaseFeaturesColumn,
  ShowcaseFeaturesContainer,
  ShowcaseFeaturesGrid,
  ShowcaseFeaturesList,
  ShowcaseFeaturesTitle,
  StyledImage,
  StyledParagraph,
  TwinsHeroContainer,
  TwinsHero,
  TwinsHeroImage,
  TwinsIntro,
};
