"use client";

import { device } from "@/styles/theme/breakpoints";
import styled, { css } from "styled-components";

const ServicePartner = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  padding: ${({ theme }) => `${theme.spacing["5xl"]} 0 ${theme.spacing["3xl"]}`};
  padding-top: ${({ theme }) => theme.spacing["2xl"]};

  @media screen and (max-width: 1024px) {
    padding: 8rem 0 0;
  }
`;

const ServicePartnerContainer = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  padding: 0 ${({ theme }) => theme.spacing.container};
`;

const ServicePartnerHeader = styled.div`
  max-width: 81rem;
  margin: 0 auto ${({ theme }) => theme.spacing["4xl"]};
  width: 100%;
  text-align: center;

  @media screen and (max-width: 1024px) {
    margin-bottom: 3rem;
  }
`;

const ServicePartnerHeading = styled.h2`
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
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};

  @media ${device.tablet} {
    margin-bottom: 2rem;
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
    -webkit-text-stroke: 0.1rem rgba(142, 210, 220, 0.5);

    @media ${device.phone} {
      transform: translate(0.3rem, 0.3rem) translateZ(0);
    }
  }
`;

const ServicePartnerDescription = styled.div`
  font-size: ${({ theme }) => theme.font.size.display.md};
  line-height: 1.615;
  letter-spacing: -0.05rem;

  @media ${device.phone} {
    font-size: ${({ theme }) => theme.font.size.body.xl};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
    @media ${device.phone} {
      margin-bottom: 3.2rem;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ServicePartnerGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 calc(-1 * ${({ theme }) => theme.spacing.container});

  @media screen and (max-width: 1024px) {
    margin: 0 -1.5rem;
  }
  @media ${device.tablet} {
    margin: 0 -1rem;
  }
`;

const ServicePartnerItem = styled.div`
  width: 33.33%;
  padding: 0 ${({ theme }) => theme.spacing.container};
  @media screen and (max-width: 1024px) {
    padding: 0 ${({ theme }) => theme.spacing.xl};
  }
  @media ${device.tablet} {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
  @media screen and (max-width: 767px) {
    width: 50%;
    margin-bottom: ${({ theme }) => theme.spacing["2xl"]};
  }
  @media ${device.phone} {
    width: 100%;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ServicePartnerCard = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 1;
  min-height: 21.9rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: ${({ theme }) => theme.colors.primary.white};
  padding: ${({ theme }) => `${theme.spacing["2xl"]} ${theme.spacing["2xl"]}`};
  box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  overflow: hidden;
  transition: ease all 0.25s;

  @media screen and (max-width: 1024px) {
    padding: ${({ theme }) => theme.spacing["2xl"]};
  }
  @media ${device.tablet} {
    padding: ${({ theme }) => `${theme.spacing["2xl"]} ${theme.spacing.xl}`};
  }
  @media screen and (max-width: 767px) {
  }

  &:after {
    content: "";
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 65%
    );
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    position: absolute;
    display: block;
    background-size: cover;
    background-position: center top;
  }

  &:hover,
  &:focus {
    transition: ease all 0.25s;
    box-shadow: 0 3.5rem 6rem rgb(0 0 0 / 35%);

    .c-service-partner__title {
      bottom: 0.5rem;
    }
  }

  a {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
`;

const ServicePartnerLabel = styled.strong`
  font-size: ${({ theme }) => theme.font.size.body.xl};
  letter-spacing: -0.038rem;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-weight: normal;
  line-height: 1.25;
  display: block;
`;

const ServicePartnertitle = styled.h3`
  color: ${({ theme }) => theme.color.white};
  font-size: clamp(2.8rem, 3vw, 4rem);
  letter-spacing: -0.2rem;
  line-height: 1;
  font-family: ${({ theme }) => theme.fonts.bold};
  position: absolute;
  bottom: 0;
  transition: ease all 0.25s;
  margin-bottom: ${({ theme }) => theme.spacing["2xl"]};

  @media ${device.phone} {
    letter-spacing: -0.1rem;
  }
`;

const StyledLink = styled.a``;

const StyledLinkDiv = styled.button`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-size: 0;
  width: 100%;
  height: 100%;
  text-align: left;
`;

const ScreenReaderText = styled.span`
  clip: rect(0.1rem, 0.1rem, 0.1rem, 0.1rem);
  position: absolute !important;
  height: 0.1rem;
  width: 0.1rem;
  overflow: hidden;

  &:focus {
    background-color: ${({ theme }) => theme.color.screen};
    border-radius: 0.3rem;
    box-shadow: 0 0 0.2rem 0.2rem rgba(0, 0, 0, 0.6);
    clip: auto !important;
    color: ${({ theme }) => theme.color.textScreen};
    display: block;
    ${({ theme }) => theme.font.size.body.sm};
    font-weight: bold;
    height: auto;
    left: 0.5rem;
    line-height: normal;
    padding: 1.5rem 2.3rem 1.4rem;
    text-decoration: none;
    top: 0.5rem;
    width: auto;
    z-index: 100000; /* Above WP toolbar. */
  }
`;

const Strategy = styled.section`
  padding: ${({ theme }) => `${theme.spacing["5xl"]} 0`};
`;

const StrategyContainer = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  padding: 0 ${({ theme }) => theme.spacing.container};
`;

const StrategyHeader = styled.div`
  max-width: 60rem;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};

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
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 200;
  line-height: 1;
  letter-spacing: -0.2rem;
  color: ${({ theme }) => theme.colors.primary.gray[50]};
  margin-bottom: 3.5rem;

  @media ${device.phone} {
    letter-spacing: -0.1rem;
    margin-bottom: 3rem;
  }
`;

const StrategyBody = styled.div`
  padding-right: ${({ theme }) => theme.spacing["5xl"]};
  font-size: ${({ theme }) => theme.font.size.display.md};
  letter-spacing: -0.05rem;
  line-height: 1.61;
  position: relative;
  z-index: 1;

  @media ${device.mediumScreen} {
    padding-right: ${({ theme }) => theme.spacing["4xl"]};
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
  background-image: url("/images/texture.webp");
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
  padding: ${({ theme }) => `${theme.spacing["4xl"]} ${theme.spacing["5xl"]} ${theme.spacing["5xl"]} 0`};
  position: relative;
  z-index: 1;

  @media ${device.smallScreen} {
    padding-bottom: ${({ theme }) => theme.spacing["3xl"]};
    padding-right: ${({ theme }) => theme.spacing.container};
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

const StyledParagraph = styled.p`
  line-height: 1.5;
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

export {
  ScreenReaderText,
  ServicePartner,
  ServicePartnerCard,
  ServicePartnerContainer,
  ServicePartnerDescription,
  ServicePartnerGrid,
  ServicePartnerHeader,
  ServicePartnerHeading,
  ServicePartnerItem,
  ServicePartnerLabel,
  ServicePartnertitle,
  Strategy,
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
  StyledLink,
  StyledParagraph,
  StrategyAdditional,
  StrategyAdditionalMedia,
  StyledLinkDiv,
};
