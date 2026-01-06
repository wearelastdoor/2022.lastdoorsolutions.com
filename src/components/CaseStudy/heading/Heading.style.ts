"use client";

import { device } from "@/styles/theme/breakpoints";
import styled from "styled-components";

const Heading = styled.section<{ themetype: string }>`
  position: relative;
  z-index: 1;
  padding: 10.5rem 0 0 1.3rem;
  background-color: ${({ theme }) => theme.color.brandSecondary};
  text-align: center;
  background-color: ${({ theme, themetype }) =>
    themetype === "dark"
      ? theme.colors.primary.gray[50]
      : theme.colors.secondary.purple[50]};

  color: ${({ theme, themetype }) =>
    themetype === "dark" ? theme.colorVars.tertiary : theme.colors.primary.gray[50]} !important;

  @media ${device.tablet} {
    padding: 8rem 0 1rem;
  }

  &:after {
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
  }
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  position: relative;
  z-index: 1;
  max-width: 81rem;
  padding: 0 2rem;
`;

const HeadingTitle = styled.h2<{ themetype: string }>`
  font-size: clamp(5rem, 8vw, 9.5rem);
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: normal;
  display: inline-block;
  vertical-align: top;
  letter-spacing: -0.6rem;
  line-height: 1;
  position: relative;
  z-index: 1;
  margin-bottom: 2.1rem;
  color: ${({ theme, themetype }) =>
    themetype === "dark" ? "${({ theme }) => theme.color.screen}" : theme.colors.primary.gray[50]};

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
    -webkit-text-stroke: ${({ theme, themetype }) =>
      themetype === "dark"
        ? ".1rem rgba(142,210,220,0.6)"
        : ".1rem rgba(142,210,220,1)"};

    @media ${device.tablet} {
      transform: translate(0.3rem, 0.3rem) translateZ(0);
    }
  }
`;

const HeadingDescription = styled.p`
  max-width: min(57rem, 100%);
  margin: 0 auto;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.white};
`;

export { Heading, HeadingDescription, HeadingTitle, StyledContainer };
