"use client";

import { device } from "@/styles/theme/breakpoints";
import styled, { css } from "styled-components";

const LogosContent = styled.section<{ $themetype: string }>`
  position: relative;
  z-index: 1;
  padding: 6.5rem 0;

  @media ${device.tablet} {
    padding: 6rem 0 3.5rem;
  }

  @media ${device.phone} {
    padding: 4rem 0 3.5rem;
  }

  background-color: ${({ theme, $themetype }) =>
    $themetype === "dark"
      ? theme.colors.primary.gray[50]
      : theme.colors.secondary.purple[50]};

  color: ${({ theme, $themetype }) =>
    $themetype === "dark" ? theme.colors.white : theme.colors.primary.gray[50]};
`;

const StyledContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;

  @media ${device.tablet} {
    flex-direction: column-reverse;
  }
`;

const ContentCol = styled.div<{ $centered?: boolean }>`
  width: calc(50% - 1.5rem);

  ${({ $centered }) =>
    $centered &&
    css`
      text-align: center;
      padding-top: 1.3rem;
    `}

  @media ${device.tablet} {
    width: 100%;
  }

  &:last-of-type {
    display: flex;
    justify-content: flex-end;

    @media ${device.tablet} {
      justify-content: center;
      text-align: center;
    }
  }
`;

const Logos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 -1.7rem;

  > * {
    padding: 0 1.7rem;
    margin-bottom: 1.2rem;
  }

  img {
    height: 6rem;
    width: auto;
  }
`;

const LogoItem = styled.div`
  max-height: 6rem;
  width: auto;
`;

const StyledImage = styled.img``;

const ShowcaseDescription = styled.p`
  max-width: min(57rem, 100%);
  margin: 0 auto 4rem;
  line-height: 1.6;
`;

const LogosTitle = styled.h2<{ $themetype: string }>`
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

  color: ${({ theme, $themetype }) =>
    $themetype === "dark" ? theme.colors.white : theme.colors.primary.gray[50]};

  @media ${device.tablet} {
    letter-spacing: -0.33rem;
    margin-bottom: 4rem;
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

export {
  ContentCol,
  LogoItem,
  Logos,
  LogosContent,
  LogosTitle,
  ShowcaseDescription,
  StyledContainer,
  StyledImage,
};
