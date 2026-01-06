"use client";

import { device } from "@/styles/theme/breakpoints";
import styled from "styled-components";

const ResponsiveShowcase = styled.div<{ themetype: string }>`
  position: relative;
  z-index: 1;

  background-color: ${({ theme, themetype }) =>
    themetype === "dark"
      ? theme.colors.primary.gray[50]
      : theme.colors.secondary.purple[50]};

  color: ${({ theme, themetype }) =>
    themetype === "dark" ? theme.colors.white : theme.colors.primary.gray[50]};
`;

const StyledContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.phone} {
    flex-wrap: wrap;
  }
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
  max-width: min(44.5rem, 100%);
  width: 55%;

  color: ${({ theme, themetype }) =>
    themetype === "dark" ? theme.colors.white : theme.colors.primary.gray[50]};

  @media ${device.smallScreen} {
    padding-right: 3rem;
  }

  @media ${device.tablet} {
    letter-spacing: -0.33rem;
  }
  @media ${device.phone} {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding-right: 0;
    margin-bottom: 3rem;
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

    @media ${device.smallScreen} {
      right: 3rem;
    }
    @media ${device.tablet} {
      transform: translate(0.3rem, 0.3rem) translateZ(0);
    }
    @media ${device.phone} {
      right: 0;
    }
  }
`;

const ShowcaseImage = styled.div`
  width: 65%;

  @media ${device.phone} {
    width: 100%;
  }
`;

const StyledImage = styled.img``;

export {
  ResponsiveShowcase,
  ShowcaseImage,
  ShowcaseTitle,
  StyledContainer,
  StyledImage,
};
