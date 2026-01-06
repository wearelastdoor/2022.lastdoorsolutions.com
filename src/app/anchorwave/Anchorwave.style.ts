"use client";

import { device } from "@/styles/theme/breakpoints";
import styled, { css } from "styled-components";

const Anchorwave = styled.section`
  padding: ${({ theme }) => `${theme.spacing["5xl"]} 0`};
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.colorVars.brand};
  color: ${({ theme }) => theme.colors.primary.white};

  @media screen and (max-width: 768px) {
    padding: ${({ theme }) => `${theme.spacing.custom.r5} 0`};
  }

  @media ${device.phone} {
    padding-bottom: ${({ theme }) => theme.spacing.container};
  }

  &:after {
    content: "";
    // @extend .texture;
  }
`;

const StyledContainer = styled.div`
  max-width: 120rem;
  padding: 0 ${({ theme }) => theme.spacing.container};
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const HeroLink = styled.a`
  color: ${({ theme }) => theme.colors.primary.white};
  font-size: ${({ theme }) => theme.font.size.display.md};
  background-color: transparent;
  text-transform: capitalize;
  border-radius: 0;
  padding: 0;
  border: none;
  display: inline-flex;
  align-items: center;
  opacity: 0.6;
  text-decoration: none;
  margin-top: -1rem;

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.size.display.xs};
    position: absolute;
    left: ${({ theme }) => theme.spacing.container};
    top: ${({ theme }) => theme.spacing.section};
    margin-top: 0;
  }

  .icon-circle-angle-left {
    height: 2.4rem;
    width: 2.2rem;
    margin-right: 1.4rem;

    @media screen and (max-width: 768px) {
      height: 2.2rem;
      width: 2rem;
    }
  }

  &:hover,
  &:focus {
    opacity: 1;
    color: $c-white;
  }
`;

const HeroLogo = styled.img`
  position: absolute;
  right: ${({ theme }) => theme.spacing.container};
  top: 0;
  max-width: 18.5rem;
  z-index: 1;

  @media screen and (max-width: 768px) {
    max-width: 13.5rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(4.8rem, 10vw, 12rem);
  color: ${({ theme }) => theme.colors.primary.white};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  line-height: 1;
  letter-spacing: -0.7rem;
  max-width: 100%;
  width: 100%;
  padding: 11.1rem 0 4rem;
  margin-bottom: ${({ theme }) => theme.spacing.container};

  @media ${device.tablet} {
    letter-spacing: -0.3rem;
    padding: 10rem 0 3rem;
  }

  @media ${device.phone} {
    letter-spacing: -0.1rem;
    margin-bottom: 0;
    padding-top: 13rem;
  }
`;

const ShortInfo = styled.p`
  padding-bottom: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.container};
  line-height: 1.6;
`;

const MetaData = styled.dl`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.font.size.display.sm};
  font-family: ${({ theme }) => theme.fonts.body};
  border-width: 0.1rem 0;
  border-color: rgba(255, 255, 255, 0.2);
  border-style: solid;
  padding: 1.5rem 0 1.4rem;
  flex-wrap: wrap;
  margin-bottom: 2.4rem;

  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.font.size.body.xl};
  }
  @media ${device.phone} {
    padding: 2rem 0;
  }

  div {
    display: flex;
    align-items: flex-start;

    @media ${device.phone} {
      width: 100%;
    }

    &:not(:last-child) {
      @media ${device.phone} {
        margin-bottom: 1rem;
      }
    }
  }

  dt {
    margin-right: 0.6rem;
    opacity: 0.5;
    font-weight: normal;
    font-family: inherit;
  }
`;

const StyledDiv = styled.div``;

const StyledTerm = styled.dt``;

const StyledDescription = styled.dd`
  line-height: 1.6;
`;

const StyledStatsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.primary.white};
  list-style: none;
  margin-bottom: 0;
  padding: 4.7rem 0 0.3rem;
  line-height: 1.615;

  @media ${device.phone} {
    padding-top: 3rem;
  }

  li {
    &:not(:last-child) {
      margin-right: 13rem;
      @media ${device.tablet} {
        margin-right: 7rem;
      }
      @media ${device.phone} {
        margin-right: 0;
      }
    }

    @media ${device.phone} {
      width: 50%;
      margin-bottom: 3rem;
    }
    @media screen and (max-width: 360px) {
      width: 100%;
      text-align: center;
    }

    strong {
      display: block;
      font-size: clamp(4.8rem, 5vw, 6rem);
      width: min(32.2rem, 100%);
      letter-spacing: -0.375rem;
      line-height: 1;
      font-weight: ${({ theme }) => theme.font.weight.regular};
    }
  }
`;

const ListItem = styled.li``;

const StyledNumbers = styled.strong``;

const StyledIntro = styled.div``;

const IntroContent = styled.div`
  position: relative;
  z-index: 999;
  max-width: 90rem;

  p {
    margin-bottom: ${({ theme }) => theme.spacing.container};
    line-height: 1.6;
  }
`;

const IntroContainer = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  padding: 14.7rem ${({ theme }) => theme.spacing.container} ${({ theme }) => theme.spacing.container};
  position: relative;

  @media ${device.tablet} {
    padding: 10rem 2rem 2rem;
  }

  &:after {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors.primary.white};
    z-index: 99;
    top: 0;
    bottom: -12rem;
    right: calc(100% - 25rem);
    left: -999%;

    @media ${device.tablet} {
      bottom: -6rem;
    }

    @media ${device.phone} {
      right: calc(100% - 18rem);
    }
  }

  @media ${device.desktop} {
    padding-top: 12rem;
  }

  @media ${device.tablet} {
    padding-top: 10rem;
  }

  @media ${device.phone} {
    padding-top: 8rem;
  }
`;

const LeadText = styled.strong`
  font-size: ${({ theme }) => theme.font.size.body.sm};
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: normal;
  display: block;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary.gray[50]};
  margin-bottom: ${({ theme }) => theme.spacing.hero};

  @media ${device.phone} {
    margin-bottom: 2rem;
  }
`;

const Paragraph = styled.p`
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.container};
`;

const Highlights = styled.i``;

const Concentration = styled.div`
  color: ${({ theme }) => theme.colors.primary.white};
  position: relative;

  &:after {
    background-color: ${({ theme }) => theme.color.brand};
    bottom: -6rem;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
`;

const ConcentrationContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 120rem;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 24rem ${({ theme }) => theme.spacing.container} 11rem 14rem;

  @media ${device.tablet} {
    padding: 13rem 2rem 11rem;
  }
`;

const ConcentrationContent = styled.div`
  max-width: 53rem;
  width: 100%;

  @media ${device.tablet} {
    max-width: 42rem;
  }
`;

const ConcentrationTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary.white};
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
  font-size: clamp(3.2rem, 5vw, 4.6rem);
  letter-spacing: -0.3rem;
  line-height: 1;
  font-family: ${({ theme }) => theme.fonts.black};
`;

const ConcentrationList = styled.ul`
  list-style: none;

  // column-count: 2;
  // @media ${device.phone} {
  //   column-count: 1;
  // }

  li {
    margin-bottom: 1rem;
    // -webkit-column-break-inside: avoid;
    // break-inside: avoid-column;
    // page-break-inside: avoid;
    // display: inline-block;
    width: 100%;
    padding-left: 6rem;
    position: relative;
    z-index: 1;
    line-height: 1.6;

    @media ${device.phone} {
      padding-left: 3rem;
    }
    &:after {
      content: "";
      background-image: url("data:image/svg+xml,%0A%3Csvg width='18px' height='18px' viewBox='0 0 18 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpolygon id='path-h2ml1miswm-1' points='170 4763 186 4771 170 4779'%3E%3C/polygon%3E%3Cfilter x='-6.2%25' y='-6.2%25' width='125.0%25' height='125.0%25' filterUnits='objectBoundingBox' id='filter-h2ml1miswm-2'%3E%3CfeOffset dx='2' dy='2' in='SourceAlpha' result='shadowOffsetOuter1'%3E%3C/feOffset%3E%3CfeColorMatrix values='0 0 0 0 0.556862745 0 0 0 0 0.862745098 0 0 0 0 0.592156863 0 0 0 1 0' type='matrix' in='shadowOffsetOuter1'%3E%3C/feColorMatrix%3E%3C/filter%3E%3C/defs%3E%3Cg id='Finalized-Pages' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Anchorwave_22.0' transform='translate(-170.000000, -4763.000000)' fill-rule='nonzero'%3E%3Cg id='Rectangle'%3E%3Cuse fill='black' fill-opacity='1' filter='url(%23filter-h2ml1miswm-2)' xlink:href='%23path-h2ml1miswm-1'%3E%3C/use%3E%3Cuse fill='%238EDC97' xlink:href='%23path-h2ml1miswm-1'%3E%3C/use%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      position: absolute;
      left: 0;
      top: 0.8rem;
      height: 1.8rem;
      width: 1.8rem;
      background-repeat: no-repeat;
      background-position: center;

      @media ${device.phone} {
        top: 0.9rem;
        transform: scale(0.8);
        transform-origin: left top;
      }
    }

    strong {
      font-weight: ${({ theme }) => theme.font.weight.bold};
      // display: block;
      // @include fsz(1.2rem);
      // line-height: 1.25;
    }
  }
`;

const ListTitle = styled.strong``;

const ConcentrationGraphic = styled.img`
  position: absolute;
  bottom: 0;
  right: 2rem;
  z-index: -1;

  @media ${device.tablet} {
    max-width: 28rem;
  }
  @media ${device.phone} {
    max-width: 14rem;
  }
`;

const MainContent = styled.div`
  position: relative;
`;

const MainContentContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.container};
  padding-left: 14rem;

  @media ${device.tablet} {
    padding-left: 2rem;
  }
`;

const ContentCard = styled.div`
  padding: 12rem 0 12rem 12rem;
  position: relative;
  z-index: 1;
  font-size: ${({ theme }) => theme.font.size.display.md};
  line-height: 1.615;
  letter-spacing: -0.05rem;

  @media ${device.tablet} {
    padding: 6rem 0 6rem 6rem;
  }

  @media ${device.phone} {
    padding: 4rem 0 4rem 2rem;
    font-size: ${({ theme }) => theme.font.size.body.xl};
  }

  p {
    margin-bottom: 4.2rem;

    @media ${device.phone} {
      margin-bottom: ${({ theme }) => theme.spacing["2xl"]};
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    background-color: ${({ theme }) => theme.colors.primary.white};
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
    left: 0;
    right: -999%;
    top: 0;
    bottom: 0;
  }
`;

const ContentTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
  font-size: clamp(3.4rem, 6vw, 4.6rem);
  font-family: ${({ theme }) => theme.fonts.black};
  line-height: 1;
  max-width: 55rem;
  letter-spacing: -0.2rem;

  @media ${device.phone} {
    margin-bottom: 3rem;
    letter-spacing: -0.1rem;
  }
`;

const ContentCardList = styled.ul`
  list-style: none;
  position: relative;
  z-index: 1;
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

const texture = css`
  background-image: url(${"/images/texture.png"});
  background-repeat: repeat;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: block;
`;

const ShowCase = styled.div`
  position: relative;
  padding: 9.3rem 0;

  @media ${device.phone} {
    padding: 4rem 0 7rem;
  }

  &:after {
    background-color: ${({ theme }) => theme.color.alt};
    bottom: -16rem;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: -18.2rem;
    z-index: -1;
  }
`;

const ShowCaseContainer = styled.div`
  max-width: 94rem;
  padding: 0 ${({ theme }) => theme.spacing.container};
  margin: 0 auto;
`;

const ShowCaseTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
  font-family: ${({ theme }) => theme.fonts.black};
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
      margin-bottom: ${({ theme }) => theme.spacing["2xl"]};
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

const ListContent = styled.div`
  position: relative;
  z-index: 2;

  + .c-showcase {
    padding-top: 12.2rem;

    @media ${device.tablet} {
      padding-top: 8rem;
    }
    @media ${device.phone} {
      padding-top: 6rem;
    }
    @media screen and (max-width: 480px) {
      padding-top: 2rem;
    }
  }
`;

const ListContentContainer = styled.div`
  max-width: 120rem;
  padding: 0 ${({ theme }) => theme.spacing.container};
  margin: 0 auto;
`;

const ListContentCard = styled.div`
  position: relative;
  z-index: 1;
  padding: 12rem ${({ theme }) => theme.spacing["5xl"]} 12rem 0;

  @media ${device.tablet} {
    padding: ${({ theme }) => theme.spacing["5xl"]}
      ${({ theme }) => theme.spacing["3xl"]}
      ${({ theme }) => theme.spacing["5xl"]} 0;
  }

  @media ${device.phone} {
    padding: ${({ theme }) => theme.spacing["5xl"]}
      ${({ theme }) => theme.spacing["3xl"]}
      ${({ theme }) => theme.spacing["5xl"]} 0;
  }

  &:after {
    content: "";
    top: 0;
    left: -999%;
    background-color: ${({ theme }) => theme.colors.primary.white};
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
    right: 0;
    bottom: 0;
    position: absolute;
    z-index: -1;
  }
`;

const ListContentCardContent = styled.div`
  padding-right: 18rem;
  position: relative;
  z-index: 1;
  font-size: ${({ theme }) => theme.font.size.display.md};
  line-height: 1.615;
  letter-spacing: -0.05rem;

  @media ${device.desktop} {
    padding-right: 0;
  }
  @media ${device.phone} {
    font-size: ${({ theme }) => theme.font.size.body.xl};
    letter-spacing: 0;
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.section};

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul {
    list-style: none;
    position: relative;
    z-index: 1;

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
  }
`;

const ListContentTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
  font-family: ${({ theme }) => theme.fonts.black};
  font-size: clamp(3.4rem, 6vw, 4.6rem);
  line-height: 1;
  max-width: 70rem;
  letter-spacing: -0.2rem;

  @media ${device.phone} {
    margin-bottom: 3rem;
    letter-spacing: -0.1rem;
  }
`;

const ListContents = styled.ul``;

const ListContentTools = styled.div`
  margin-top: ${({ theme }) => theme.spacing["5xl"]};
`;

const ListContentToolsTitle = styled.h3`
  text-transform: uppercase;
  letter-spacing: -0.04rem;
  line-height: 1;
  font-family: ${({ theme }) => theme.fonts.black};
  padding-bottom: ${({ theme }) => theme.spacing.container};
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.25);
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};

  max-width: 65rem;
`;

const ListContentToolsList = styled.ul`
  display: flex;
  list-style-type: none;
  flex-wrap: wrap;
  margin: 0 -2rem -8.6rem;

  @media ${device.tablet} {
    margin-bottom: -6rem;
  }

  li {
    width: 25%;
    margin-bottom: ${({ theme }) => theme.spacing["5xl"]};
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    padding: 0 ${({ theme }) => theme.spacing.container};

    img {
    }

    @media ${device.tablet} {
      margin-bottom: 6rem;
    }

    @media screen and (max-width: 840px) {
      width: 33.33%;
    }
    @media screen and (max-width: 700px) {
      width: 50%;
      justify-content: flex-start;
    }
    @media screen and (max-width: 520px) {
      width: 100%;
    }

    &:nth-of-type(4n + 4) {
      justify-content: flex-end;
      @media screen and (max-width: 840px) {
        justify-content: inherit;
      }
    }

    &:nth-of-type(4n + 1) {
      justify-content: flex-start;

      @media screen and (max-width: 840px) {
        justify-content: inherit;
      }
    }

    &:nth-of-type(3n + 3) {
      @media screen and (max-width: 840px) {
        justify-content: flex-end;
      }

      @media screen and (max-width: 700px) {
        justify-content: inherit;
      }
    }

    &:nth-of-type(3n + 1) {
      @media screen and (max-width: 840px) {
        justify-content: flex-start;
      }

      @media screen and (max-width: 700px) {
        justify-content: inherit;
      }
    }

    &:nth-child(even) {
      @media screen and (max-width: 700px) {
        justify-content: flex-end;
      }
      @media screen and (max-width: 520px) {
        justify-content: flex-start;
      }
    }
  }
`;

const InlineLink = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  color: ${({ theme }) => theme.colors.links.link};
  text-decoration: underline;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  display: inline;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.links.linkHover};
  }
`;

export {
  Anchorwave,
  Concentration,
  ConcentrationContainer,
  ConcentrationContent,
  ConcentrationGraphic,
  ConcentrationList,
  ConcentrationTitle,
  ContentCard,
  ContentCardList,
  ContentTitle,
  HeroLogo,
  HeroTitle,
  Highlights,
  IntroContainer,
  IntroContent,
  LeadText,
  ListContent,
  ListContentCard,
  ListContentCardContent,
  ListContentTitle,
  ListContentTools,
  ListContentToolsList,
  ListContentToolsTitle,
  ListContents,
  ListItem,
  ListTitle,
  MainContent,
  MainContentContainer,
  MetaData,
  Paragraph,
  ShortInfo,
  ShowCase,
  ShowCaseContainer,
  ShowCaseDescription,
  ShowCaseList,
  ShowCaseTitle,
  StyledContainer,
  StyledDescription,
  StyledDiv,
  StyledIntro,
  StyledNumbers,
  StyledStatsList,
  StyledTerm,
  HeroLink,
  ListContentContainer,
  InlineLink,
};
