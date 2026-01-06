"use client";

import { device } from "@/styles/theme/breakpoints";
import styled, { css } from "styled-components";

const Wordpress = styled.section`
  background-color: ${({ theme }) => theme.color.secondary};
`;

const StyledContainer = styled.div`
  max-width: 93rem;
  position: relative;
  z-index: 2;
  padding: 21.5rem ${({ theme }) => theme.spacing.container} 5rem 11rem;
  margin: 0 auto;

  @media ${device.phone} {
    padding-left: 2rem;
  }
`;

const MainTitle = styled.h1`
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

const Description = styled.div`
  font-size: ${({ theme }) => theme.font.size.display.md};
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

const Paragraph = styled.p<{ $isDark?: boolean }>`
  line-height: 1.615;
  color: ${({ theme, $isDark }) => (!$isDark ? "#b7c1ca" : "")};
`;

const WordpressImage = styled.img`
  width: 80rem;
  position: absolute;
  z-index: -1;
  left: calc(100% - 42rem);
  top: 9.2rem;
`;

const FeaturedService = styled.div`
  padding: ${({ theme }) => `${theme.spacing.hero} 0`};

  @media ${device.phone} {
    padding: 2rem 0;
  }
`;

const FeaturedServiceContainer = styled.div`
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.container};
  max-width: 120rem;
`;

const FeaturedServiceContent = styled.div`
  background: rgb(51, 69, 84);
  background: linear-gradient(
    146deg,
    rgba(51, 69, 84, 1) 0%,
    rgba(23, 33, 42, 1) 100%
  );
  color: ${({ theme }) => theme.colors.primary.white};
  padding: ${({ theme }) => `${theme.spacing["4xl"]} ${theme.spacing.container} ${theme.spacing["3xl"]} ${theme.spacing["4xl"]}`};
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);

  @media ${device.tablet} {
    padding: ${({ theme }) => `${theme.spacing["3xl"]} ${theme.spacing.container} ${theme.spacing.section}`};
  }
`;

const FeaturedServiceTitle = styled.strong`
  font-size: ${({ theme }) => theme.font.size.body.xl};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.black};
  display: block;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.25);
  margin-bottom: 2.8rem;
  padding-bottom: 1.4rem;
`;

const FeaturedServiceInner = styled.div`
  max-width: 76.6rem;
`;

const FeaturedServiceList = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0 calc(-1 * ${({ theme }) => theme.spacing.container});

  li {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    width: 33.33%;
    padding: 0 ${({ theme }) => theme.spacing.container};

    @media screen and (max-width: 767px) {
      width: 50%;
    }
    @media screen and (max-width: 540px) {
      width: 100%;
    }
  }
`;

const ListItem = styled.li`
  line-height: 1.6;
`;

const ServiceIntro = styled.div`
  padding: ${({ theme }) => `${theme.spacing.section} 0 ${theme.spacing["4xl"]}`};

  @media ${device.phone} {
    padding-bottom: 6rem;
  }
`;

const ServiceContainer = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  padding: 0 ${({ theme }) => theme.spacing.container};
`;

const ServiceIntroImage = styled.figure`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.container};

  img {
    max-width: 25rem;
  }
`;

const StyledImage = styled.img``;

const ServiceIntroDescription = styled.div`
  max-width: min(85rem, 100%);
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

const ServiceCard = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};
  @media ${device.desktop} {
    margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
  }
  @media ${device.tablet} {
    margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  }
`;

const ServiceCardContainer = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  padding: 0 ${({ theme }) => theme.spacing.container};
`;

const ServiceCardInner = styled.div<{ alignment?: string }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0 -2.5rem;
  padding: 12rem 0;
  position: relative;
  z-index: 1;

  @media ${device.desktop} {
    padding: ${({ theme }) => `${theme.spacing["3xl"]} 0`};
  }
  @media ${device.tablet} {
    padding: ${({ theme }) => `${theme.spacing.xxxl} 0`};
  }
  @media screen and (max-width: 860px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: flex-start;
    padding-right: 2rem;
    padding-left: 0;
  }

  ${({ alignment }) =>
    alignment === "right" &&
    css`
      flex-direction: row-reverse;

      @media screen and (max-width: 860px) {
        flex-direction: column-reverse;
        padding-left: 2rem;
        padding-right: 0;
      }
    `}

  &:after {
    content: "";
    top: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.primary.white};
    position: absolute;
    z-index: -1;
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);

    ${({ alignment }) =>
      alignment === "right" &&
      css`
        right: -9999%;
        left: 11.8rem;

        @media ${device.tablet} {
          left: 2rem;
        }
      `}

    ${({ alignment }) =>
      alignment === "left" &&
      css`
        right: 11.8rem;
        left: -9999%;

        @media ${device.tablet} {
          right: 2rem;
        }
      `}
  }
`;

const ServiceCardContent = styled.div`
  width: 54%;
  padding: 0 2.5rem;

  @media screen and (max-width: 860px) {
    width: 100%;
  }
`;

const ServiceCardTitle = styled.h2`
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

const ServiceCardDescription = styled.div`
  max-width: min(85rem, 100%);
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

const ServiceCardImage = styled.figure`
  width: 46%;
  padding: 0 2.5rem;

  @media screen and (max-width: 860px) {
    width: 100%;
    margin-bottom: 4rem;
    max-width: 50.8rem;
  }

  img {
    width: 100%;
  }
`;

const Offering = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.gray[50]};
  color: ${({ theme }) => theme.colors.primary.white};
  padding: 10.2rem 0 9rem;

  @media screen and (max-width: 1024px) {
    padding: 8rem 0 7rem;
  }
`;

const OfferingContainer = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  padding: 0 2rem;
`;

const OfferingHeadline = styled.h2`
  font-size: clamp(5rem, 8vw, 9.5rem);
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: normal;
  color: ${({ theme }) => theme.colors.primary.white};
  display: inline-block;
  vertical-align: top;
  letter-spacing: -0.6rem;
  line-height: 1;
  position: relative;
  z-index: 1;
  margin-bottom: 2.7rem;

  @media ${device.phone} {
    letter-spacing: -0.33rem;
    max-width: min(26.4rem, 100%);
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
    transform: translate(0.5rem, 0.5rem) translateZ(0);
    backface-visibility: hidden;
    -webkit-text-stroke: 0.1rem rgba(94, 139, 149, 0.5);

    @media ${device.phone} {
      transform: translate(0.3rem, 0.3rem) translateZ(0);
    }
  }
`;

const OfferingGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0 -3.5rem;

  @media screen and (max-width: 1024px) {
    padding-left: 4rem;
  }
  @media screen and (max-width: 767px) {
    padding-left: 0;
  }
`;

const OfferingItem = styled.div`
  width: 33.33%;
  padding: 7.4rem 3.5rem 0;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    width: 50%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

const OfferingImage = styled.img<{ type: string }>`
  position: absolute;
  top: 0;
  left: -0.5rem;

  @media screen and (max-width: 767px) {
    left: 2rem;
  }

  ${({ type }) =>
    type === "oval" &&
    css`
      top: 1rem;
    `}
  ${({ type }) =>
    type === "rectangle" &&
    css`
      top: 0;
    `}
  ${({ type }) =>
    type === "triangle" &&
    css`
      top: 1.6rem;
    `}
`;

const OfferingTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary.white};
  font-size: ${({ theme }) => theme.font.size.body.xl};
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: 2.5rem;
`;

const OfferingDescription = styled.div`
  color: ${({ theme }) => `rgba(${theme.colorRgb.brandPrimary}, 0.7)`};
  font-size: ${({ theme }) => theme.font.size.body.xl};
  letter-spacing: -0.38;

  p {
    line-height: 1.5;
    &:last-child {
      margin-bottom: 1rem;
    }
  }
`;

const ServicePartner = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  padding: 12rem 0 6rem;

  @media screen and (max-width: 1024px) {
    padding: 8rem 0 0;
  }
`;

const ServicePartnerContainer = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  padding: 0 2rem;
`;

const ServicePartnerHeader = styled.div`
  max-width: 81rem;
  margin: 0 auto 6rem;
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
  margin-bottom: 4rem;

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
    margin-bottom: 4.2rem;
    line-height: 1.615;

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
  margin: 0 -2rem;

  @media screen and (max-width: 1024px) {
    margin: 0 -1.5rem;
  }
  @media ${device.tablet} {
    margin: 0 -1rem;
  }
`;

const ServicePartnerItem = styled.div`
  width: 33.33%;
  padding: 0 2rem;
  @media screen and (max-width: 1024px) {
    padding: 0 1.5rem;
  }
  @media ${device.tablet} {
    padding: 0 1rem;
  }
  @media screen and (max-width: 767px) {
    width: 50%;
    margin-bottom: 2rem;
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
  padding: 3rem 3rem;
  box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  overflow: hidden;
  transition: ease all 0.25s;

  @media screen and (max-width: 1024px) {
    padding: 3rem;
  }
  @media ${device.tablet} {
    padding: 3rem 2rem;
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
  color: ${({ theme }) => theme.colors.primary.white};
  font-size: clamp(2.8rem, 3vw, 4rem);
  letter-spacing: -0.2rem;
  line-height: 1;
  font-family: ${({ theme }) => theme.fonts.bold};
  position: absolute;
  bottom: 0;
  transition: ease all 0.25s;
  margin-bottom: 2rem;

  @media ${device.phone} {
    letter-spacing: -0.1rem;
  }
`;

const StyledLink = styled.a``;

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

export {
  Description,
  FeaturedService,
  FeaturedServiceContainer,
  FeaturedServiceContent,
  FeaturedServiceInner,
  FeaturedServiceList,
  FeaturedServiceTitle,
  ListItem,
  MainTitle,
  Offering,
  OfferingContainer,
  OfferingDescription,
  OfferingGrid,
  OfferingHeadline,
  OfferingImage,
  OfferingItem,
  OfferingTitle,
  Paragraph,
  ScreenReaderText,
  ServiceCard,
  ServiceCardContainer,
  ServiceCardContent,
  ServiceCardDescription,
  ServiceCardImage,
  ServiceCardInner,
  ServiceCardTitle,
  ServiceContainer,
  ServiceIntro,
  ServiceIntroDescription,
  ServiceIntroImage,
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
  StyledContainer,
  StyledImage,
  StyledLink,
  Wordpress,
  WordpressImage,
};
