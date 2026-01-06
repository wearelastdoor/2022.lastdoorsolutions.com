"use client";

import { device } from "@/styles/theme/breakpoints";
import styled from "styled-components";

const CaseStudyIntro = styled.div<{ themetype: string }>`
  position: relative;
  z-index: 7;
  padding: 2.1rem 0 6rem;
  background-color: ${({ theme, themetype }) =>
    themetype === "dark"
      ? theme.colors.primary.gray[50]
      : theme.colors.secondary.purple[50]};

  @media ${device.tablet} {
    padding: 2.1rem 0 4rem;
  }
`;

const StyledContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`;

const IntroContent = styled.div<{ themetype: string }>`
  padding: 10.3rem 0 5.3rem;
  font-size: clamp(2.62rem, 3vw, 3.8rem);
  line-height: calc(55 / 38);
  letter-spacing: -0.18rem;
  position: relative;
  z-index: 1;
  max-width: min(50.4rem, 100%);
  color: ${({ theme, themetype }) =>
    themetype === "dark"
      ? theme.colors.primary.white
      : theme.colors.primary.gray[50]};

  p {
    margin-bottom: 2rem;
  }

  @media ${device.tablet} {
    max-width: min(42.4rem, 100%);
    padding-right: 5rem;
  }
  @media ${device.phone} {
    max-width: none;
    padding: 6.3rem 0 3.3rem;
    letter-spacing: -0.05rem;
  }

  &:after {
    content: "";
    right: 50.4%;
    height: 100%;
    top: 0;
    left: -9999%;
    display: block;
    position: absolute;
    z-index: -2;
    background-color: ${({ theme, themetype }) =>
      themetype === "dark" ? "${({ theme }) => theme.color.brandSecondary}" : "${({ theme }) => theme.color.white}"};
  }
`;

const IntroImage = styled.div`
  position: absolute;
  z-index: -1;
  right: calc(-13% - 49.6rem);
  top: -22.2rem;
  display: block;
  max-width: 116.9rem;

  img {
    width: 100%;
    height: auto;
  }

  @media ${device.smallScreen} {
    max-width: 102rem;
    right: calc(-13% - 39.6rem);
    top: -11.2rem;
  }

  @media ${device.tablet} {
    max-width: 82rem;
    right: calc(-13% - 32rem);
  }

  @media screen and (max-width: 767px) {
    max-width: 100.7rem;
    right: 0;
    position: relative;
    top: -5.2rem;
    margin-bottom: -5.2rem;
    margin: 0 -22rem 0 0;
  }
`;

const StyledImage = styled.img``;

export {
  CaseStudyIntro,
  IntroContent,
  IntroImage,
  StyledContainer,
  StyledImage,
};
