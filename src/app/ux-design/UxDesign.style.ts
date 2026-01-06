"use client";

import { device } from "@/styles/theme/breakpoints";
import styled, { css } from "styled-components";

const HeroIntro = styled.section`
  background-color: ${({ theme }) => `rgba(${theme.colorRgb.secondary})`};
`;

const HeroContainer = styled.div`
  max-width: 93rem;
  position: relative;
  z-index: 2;
  padding: 21.5rem ${({ theme }) => theme.spacing.container} 5rem 11rem;
  margin: 0 auto;

  @media ${device.phone} {
    padding-left: 2rem;
  }
`;

const HeroIntroTitle = styled.h1`
  font-size: clamp(5.9rem, 10vw, 12rem);
  font-family: ${({ theme }) => theme.fonts.black};
  color: ${({ theme }) => theme.colors.primary.gray[50]};
  display: inline-block;
  vertical-align: top;
  line-height: 1;
  position: relative;
  z-index: 1;
  margin-bottom: clamp(2.5rem, 5vw, 3.3rem);
  letter-spacing: -0.69996rem;

  @media ${device.phone} {
    letter-spacing: -0.45rem;
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
    -webkit-text-stroke: 0.1rem rgba(142, 210, 220, 0.75);

    @media ${device.phone} {
      transform: translate(0.3rem, 0.3rem) translateZ(0);
    }
  }
`;

const HeroIntroDescription = styled.div`
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

const StyledParagraph = styled.p`
  line-height: 1.6;
`;

const FeaturedArticle = styled.article`
  padding: ${({ theme }) => `${theme.spacing.section} 0`};
`;

const ArticleContainer = styled.div`
  margin: 0 auto;
  max-width: 116rem;
  padding: 0 ${({ theme }) => theme.spacing.container};
`;

const ArticleCard = styled.div`
  border-radius: 50rem;
  background-color: ${({ theme }) => theme.colors.primary.white};
  padding: ${({ theme }) => theme.spacing.container};
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${device.tablet} {
    border-radius: 5rem;
  }
  @media ${device.phone} {
    border-radius: 2rem;
  }
`;

const ArticleImage = styled.figure`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 30rem 0 0 30rem;
  position: relative;
  z-index: 1;
  overflow: hidden;
  aspect-ratio: 540/225;

  @media ${device.tablet} {
    border-radius: 5rem 0 0 5rem;
  }

  @media ${device.phone} {
    border-radius: 2rem 2rem 0 0;
    aspect-ratio: 540/280;
  }

  @media screen and (max-width: 420px) {
    border-radius: 2rem 2rem 0 0;
    aspect-ratio: 540/320;
  }

  width: calc(50% - 2rem);
  @media ${device.phone} {
    width: 100%;
  }
`;

const Image = styled.img``;

const ArticleTag = styled.strong`
  font-size: ${({ theme }) => theme.font.size.body.md};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-transform: uppercase;
  background-color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
  border-radius: 2rem 0 0 2rem;
  padding: 0 1rem 0 1.2rem;
  position: absolute;
  z-index: 1;
  right: 1rem;
  bottom: 1rem;
  line-height: 1.6;
`;

const ArticleBody = styled.div`
  width: calc(50% - 2rem);
  padding: 2.9rem 8rem 0.3rem 0;
  padding-right: 0;

  @media ${device.phone} {
    width: 100%;
  }
`;

const ArticleTitle = styled.h2`
  letter-spacing: -0.05rem;
  font-size: ${({ theme }) => theme.font.size.display.md};
  font-family: ${({ theme }) => theme.fonts.bold};
  max-width: 46rem;
  margin-bottom: ${({ theme }) => theme.spacing.container};
`;

const ArticleDescription = styled.div`
  font-size: ${({ theme }) => theme.font.size.body.xl};
  letter-spacing: -0.038rem;
  max-width: 46rem;
  line-height: 1.6;
`;

const Strategy = styled.section`
  padding: 12rem 0;
`;

const StrategyContainer = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  padding: 0 ${({ theme }) => theme.spacing.container};
`;

const StrategyHeader = styled.div`
  max-width: 60rem;
  width: 100%;
  margin-bottom: 6rem;

  @media ${device.tablet} {
    max-width: 100%;
  }
`;

const StrategyTitle = styled.h2`
  font-size: clamp(5rem, 8vw, 9.5rem);
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: normal;
  color: ${({ theme }) => theme.color.darkGray};
  display: inline-block;
  vertical-align: top;
  line-height: 1;
  position: relative;
  z-index: 1;
  margin-bottom: clamp(2.5rem, 5vw, 3.9rem);
  letter-spacing: -0.6rem;

  @media ${device.phone} {
    letter-spacing: -0.33rem;
  }

  &:after {
    content: attr(title);
    position: absolute;
    top: 0;
    color: transparent;
    z-index: -2;
    display: inline-block;
    vertical-align: top;
    left: 0;
    transform: translate(0.5rem, 0.5rem) translateZ(0);
    backface-visibility: hidden;
    -webkit-text-stroke: 0.1rem rgba(142, 210, 220, 1);

    @media ${device.phone} {
      transform: translate(0.3rem, 0.3rem) translateZ(0);
    }
  }
`;

const StrategySubtitle = styled.h3`
  font-size: clamp(3.4rem, 6vw, 4.6rem);
  line-height: 1;
  font-family: ${({ theme }) => theme.fonts.body};
  letter-spacing: -0.2rem;
  color: ${({ theme }) => theme.colors.primary.gray[50]};
  margin-bottom: 3.5rem;

  @media ${device.phone} {
    letter-spacing: -0.1rem;
    margin-bottom: 3rem;
  }
`;

const StrategyBody = styled.div`
  padding-right: 12rem;
  font-size: ${({ theme }) => theme.font.size.display.md};
  letter-spacing: -0.05rem;
  line-height: 1.61;
  position: relative;
  z-index: 1;

  @media ${device.mediumScreen} {
    padding-right: 28rem;
  }
  @media ${device.smallScreen} {
    padding-right: 0;
  }

  p {
    margin-bottom: 2.5rem;
  }
`;

const pattern = css`
  content: "";
  background-image: url("/images/texture.png");
  background-repeat: repeat;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: block;
`;

const StrategyIllustrations = styled.figure`
  position: absolute;
  z-index: -1;
  right: -6rem;
  bottom: calc(100% - 16.1rem);

  @media ${device.smallScreen} {
    max-width: 42rem;
    right: 0;
    bottom: calc(100% - 10rem);
  }
  @media ${device.tablet} {
    position: static;
    right: auto;
    bottom: auto;
  }

  &:before {
    content: "";
    z-index: -2;
    position: absolute;
    bottom: 0;
    left: 0;
    right: -999.9rem;
    top: calc(100% - 0.2rem);
    background-color: ${({ theme }) => `rgba(${theme.colorRgb.primary})`};
    display: block;
    height: 40rem;

    @media ${device.tablet} {
      display: none;
    }
  }

  &:after {
    ${pattern}
    height: 40.0rem;
    top: calc(100% - 0.2rem);

    @media ${device.tablet} {
      display: none;
    }
  }
`;

const StyledImage = styled.img``;

const StrategyCard = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.white};
  padding: 8rem 14rem 12rem 0;
  position: relative;
  z-index: 1;

  @media ${device.smallScreen} {
    padding-bottom: 4rem;
    padding-right: 2rem;
  }

  &:after {
    content: "";
    background-color: ${({ theme }) => theme.colors.primary.white};
    left: -999.9rem;
    right: 0;
    top: 0;
    bottom: 0;
    display: block;
    position: absolute;
    z-index: -1;
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  }
`;

const StrategyDescription = styled.div``;

const StrategyColumns = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StrategyColumn = styled.section`
  width: 44.5%;
  font-size: ${({ theme }) => theme.font.size.body.xl};
  letter-spacing: -0.38;
  line-height: 1.5;
  padding-top: 1rem;
  position: relative;
  margin-bottom: 7rem;

  @media ${device.phone} {
    font-size: ${({ theme }) => theme.font.size.body.lg};
    width: 100%;
    margin-bottom: 4rem;
  }

  p {
    &:last-child {
      margin-bottom: 1rem;
    }
  }

  &:before {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    left: 0;
    top: 0;
    height: 0.1rem;
    background: linear-gradient(
      90deg,
      rgba(23, 33, 42, 1) 0%,
      rgba(23, 33, 42, 0) 100%
    );
  }

  a {
    position: absolute;
    font-size: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

const StrategyLink = styled.a``;

const StrategyColumnTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size.body.xl};
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: 2rem;

  @media ${device.phone} {
    margin-bottom: 1.5rem;
  }
`;

const StrategyAdditional = styled.div`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const StrategyAdditionalMedia = styled.figure`
  max-width: 60rem;
  float: right;
  margin: 0 -44rem 0 11.5rem;

  @media screen and (max-width: 1440px) {
    margin-left: 10rem;
  }

  @media ${device.smallScreen} {
    margin: 0 0 3rem;
    float: none;
    max-width: 100%;
  }
`;

const ProcessArrowLong = css`
  content: "";
  position: absolute;
  background-image: url("/images/process-arrow-1.svg");
  z-index: -1;
  height: 11.7rem;
  width: 19.1rem;
  display: block;
`;

const ProcessArrowShort = css`
  content: "";
  position: absolute;
  background-image: url("/images/process-arrow-2.svg");
  z-index: -1;
  height: 9.1rem;
  width: 14.4rem;
  display: block;
`;

const Process = styled.section`
  padding: 0 0 11.8rem;

  @media ${device.tablet} {
    padding-bottom: 4rem;
  }
`;

const ProcessContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ProcessHeader = styled.div`
  text-align: center;
  margin-bottom: 5.4rem;

  @media ${device.smallScreen} {
    margin-bottom: 2rem;
  }
`;

const ProcessHeading = styled.h2`
  font-size: clamp(5rem, 8vw, 9.5rem);
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: normal;
  display: inline-block;
  vertical-align: top;
  letter-spacing: -0.6rem;
  line-height: 1;
  position: relative;
  z-index: 1;
  color: ${({ theme }) => theme.colors.primary.gray[50]};
  margin-bottom: 3.9rem;

  @media screen and (max-width: 1023px) {
    margin-bottom: 9rem;
  }
  @media ${device.phone} {
    letter-spacing: -0.33rem;
  }

  &:after {
    content: attr(title);
    position: absolute;
    top: 0;
    color: transparent;
    z-index: -2;
    display: inline-block;
    vertical-align: top;
    left: 0;
    transform: translate(0.5rem, 0.5rem) translateZ(0);
    backface-visibility: hidden;
    -webkit-text-stroke: 0.1rem rgba(142, 210, 220, 1);

    @media ${device.phone} {
      transform: translate(0.3rem, 0.3rem) translateZ(0);
    }
  }
`;

const ProcessItems = styled.div`
  position: relative;
  z-index: 1;

  &:after {
    content: "";
    clear: both;
    display: table;
  }

  @media screen and (max-width: 1023px) {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    margin: 0 -3rem;
  }
`;

const ProcessItem = styled.div<{ item: string }>`
  text-align: center;
  max-width: 25.6rem;
  position: relative;
  z-index: 1;

  @media ${device.smallScreen} {
    transform: scale(0.8);
    backface-visibility: hidden;
  }

  @media screen and (max-width: 1023px) {
    transform: scale(1);
    max-width: 100%;
    width: 33.33%;
    position: static !important;
    padding: 0 3rem;
    float: none !important;
    margin: 0 0 6rem !important;
  }

  @media ${device.tablet} {
    width: 50%;
  }

  @media ${device.phone} {
    width: 100%;
  }

  &:before {
    @media screen and (max-width: 1023px) {
      display: none !important;
    }
  }

  ${({ item }) =>
    item === "one" &&
    css`
      float: left;
      margin-left: calc(50% - 12.8rem);

      &:before {
        ${ProcessArrowLong}
        left: calc(100% + 8.2rem);
        top: 10.8rem;
        transform: rotate(59deg);
      }
    `}

  ${({ item }) =>
    item === "two" &&
    css`
      float: right;
      margin-top: 28rem;

      @media ${device.smallScreen} {
      }

      &:after {
        content: "";
        clear: both;
        display: table;
      }

      &:before {
        ${ProcessArrowLong}
        right: 4.6rem;
        top: calc(100% + 7.3rem);
        transform: rotate(-213deg);
      }
    `}

  ${({ item }) =>
    item === "three" &&
    css`
      float: right;
      margin-top: 41rem;

      &:before {
        ${ProcessArrowShort}
        right: calc(100% + 3.8rem);
        top: 19.5rem;
        transform: rotate(-153deg);
      }
    `}

  ${({ item }) =>
    item === "four" &&
    css`
      float: right;
      margin-top: 41.8rem;
      margin-right: 23.6rem;

      @media ${device.smallScreen} {
        margin-right: 20rem;
        margin-top: 37.8rem;
      }

      &:before {
        ${ProcessArrowShort}
        right: calc(100% - 2.5rem);
        bottom: calc(100% + 0.8rem);
        transform: rotate(-83deg);

        @media ${device.smallScreen} {
          right: calc(100% - 7.9rem);
          transform: rotate(-73deg);
          bottom: calc(100% + 2.8rem);
        }
      }
    `}

  ${({ item }) =>
    item === "five" &&
    css`
      float: left;
      position: absolute;
      top: 28.5rem;
      left: 0;
      z-index: 1;

      &:before {
        ${ProcessArrowLong}
        left: 19.5rem;
        bottom: calc(100% + 6.7rem);
        transform: rotate(-6deg);
      }
    `}
`;

const ProcessHighlight = styled.div`
  max-width: 41.9rem;
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  backface-visibility: hidden;
  text-align: center;
  z-index: 1;
  top: 62.9rem;

  @media screen and (max-width: 1023px) {
    position: static;
    transform: none;
    margin: 0 auto;
    max-width: 100%;
    width: 100%;
    text-align: center;
  }
`;

const ProcessHighlightTitle = styled.h3`
  font-size: clamp(4.2rem, 6vw, 4.6rem);
  line-height: 1;
  font-family: ${({ theme }) => theme.fonts.body};
  letter-spacing: -0.2rem;
  color: ${({ theme }) => theme.colors.primary.gray[50]};
  font-weight: normal;

  @media screen and (max-width: 1023px) {
    max-width: 41.9rem;
    width: 100%;
    margin: 0 auto 12rem;
  }

  @media ${device.phone} {
    letter-spacing: -0.1rem;
    margin: 0 auto 16rem;
    padding: 0 3rem;
  }
`;

const ProcessHighlightBackground = styled.img`
  position: absolute;
  z-index: -1;
  transform: translateX(-50%);
  top: -6.4rem;
  max-width: 49.8rem;
  @media ${device.phone} {
    width: 100%;
  }
  @media screen and (max-width: 520px) {
    width: auto;
  }

  @media screen and (max-width: 480px) {
    width: 58rem;
    max-width: none;
  }
`;

const ProcessIcon = styled.figure`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;

  img {
    max-width: 100%;
    width: auto;
  }
`;

const ProcessIconImage = styled.img``;

const ProcessContent = styled.div``;

const ProcessTitle = styled.h3`
  font-size: clamp(3.4rem, 6vw, 4.6rem);
  line-height: 1;
  font-family: ${({ theme }) => theme.fonts.black};
  letter-spacing: -0.2rem;
  color: ${({ theme }) => theme.colors.primary.gray[50]};
  font-weight: normal;
  margin-bottom: 1.6rem;

  @media ${device.phone} {
    letter-spacing: -0.1rem;
  }
`;

const ProcessDescription = styled.div`
  letter-spacing: -0.038rem;
`;

export {
  ArticleBody,
  ArticleCard,
  ArticleContainer,
  ArticleDescription,
  ArticleImage,
  ArticleTag,
  ArticleTitle,
  FeaturedArticle,
  HeroContainer,
  HeroIntro,
  HeroIntroDescription,
  HeroIntroTitle,
  Image,
  Process,
  ProcessContainer,
  ProcessContent,
  ProcessDescription,
  ProcessHeader,
  ProcessHeading,
  ProcessHighlight,
  ProcessHighlightBackground,
  ProcessHighlightTitle,
  ProcessIcon,
  ProcessIconImage,
  ProcessItem,
  ProcessItems,
  ProcessTitle,
  Strategy,
  StrategyAdditional,
  StrategyAdditionalMedia,
  StrategyBody,
  StrategyCard,
  StrategyColumn,
  StrategyColumnTitle,
  StrategyColumns,
  StrategyContainer,
  StrategyHeader,
  StrategyIllustrations,
  StrategyLink,
  StrategySubtitle,
  StrategyTitle,
  StyledImage,
  StyledParagraph,
  StrategyDescription,
};
