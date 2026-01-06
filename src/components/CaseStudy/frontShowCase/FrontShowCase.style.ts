"use client";

import { device } from "@/styles/theme/breakpoints";
import styled from "styled-components";

const FrontShowcase = styled.section<{ themetype: string }>`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 7.8rem 0 13.5rem;
  background-color: ${({ theme, themetype }) =>
    themetype === "dark"
      ? theme.colors.primary.gray[50]
      : theme.colors.secondary.purple[50]};
  color: ${({ theme, themetype }) =>
    themetype === "dark" ? theme.colors.white : theme.colors.primary.gray[50]};

  @media ${device.tablet} {
    padding: 4rem 0 9rem;
  }
`;

const StyledContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  max-width: 101rem;
`;

const ShowcaseTitle = styled.h2<{ themetype: string }>`
  font-size: clamp(5rem, 8vw, 9.5rem);
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: normal;
  display: inline-block;
  vertical-align: top;
  letter-spacing: -0.6rem;
  line-height: 1;
  position: relative;
  z-index: 1;
  margin: 1.8rem auto 2rem;
  color: ${({ theme, themetype }) =>
    themetype === "dark" ? theme.colors.white : theme.colors.primary.gray[50]};

  @media ${device.tablet} {
    letter-spacing: -0.33rem;
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
    -webkit-text-stroke: 0.1rem rgba(142, 210, 220, 0.5);

    @media ${device.tablet} {
      transform: translate(0.3rem, 0.3rem) translateZ(0);
    }
  }
`;

const ShowcaseDescription = styled.p`
  max-width: min(57rem, 100%);
  margin: 0 auto 4rem;
  line-height: 1.6;
`;

const ShowcaseImage = styled.div<{ themetype: string }>`
  margin-bottom: -1rem;
  box-shadow: ${({ themetype }) =>
    themetype === "dark"
      ? "0 4.0rem 10.0rem -2.0rem rgba(#000005, 1)"
      : "0 4.0rem 10.0rem -2.0rem rgba(#000005, 0.4)"};
`;

const StyledImage = styled.img``;

export {
  FrontShowcase,
  StyledContainer,
  ShowcaseTitle,
  ShowcaseDescription,
  ShowcaseImage,
  StyledImage,
};
