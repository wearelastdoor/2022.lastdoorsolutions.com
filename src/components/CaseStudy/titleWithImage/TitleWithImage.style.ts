"use client";

import { device } from "@/styles/theme/breakpoints";
import styled from "styled-components";

const TitleWithImage = styled.div<{ $themetype: string }>`
  position: relative;
  z-index: 1;
  padding: 6.5rem 0 15rem;
  background-color: ${({ theme, $themetype }) =>
    $themetype === "dark"
      ? theme.colors.primary.gray[50]
      : theme.colors.secondary.purple[50]};

  color: ${({ theme, $themetype }) =>
    $themetype === "dark" ? theme.colors.white : theme.colors.primary.gray[50]};
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-wrap: wrap;
  }
`;

const MainTitle = styled.h2<{ $themetype: string }>`
  font-size: clamp(5rem, 8vw, 9.5rem);
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: normal;
  display: inline-block;
  vertical-align: top;
  letter-spacing: -0.6rem;
  line-height: 1;
  position: relative;
  z-index: 1;
  width: calc(41.66% - 1.5rem);
  margin-bottom: 0;
  color: ${({ theme, $themetype }) =>
    $themetype === "dark" ? theme.colors.white : theme.colors.primary.gray[50]};

  @media ${device.tablet} {
    max-width: min(54.5rem, 100%);
    width: 100%;
    margin: 0 auto 4rem;
    letter-spacing: -0.33rem;
    text-align: center;
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

const TitleImage = styled.div<{ $themetype: string }>`
  width: calc(50% - 1.5rem);
  margin-bottom: -1rem;
  margin-top: 2.7rem;
  box-shadow: ${({ $themetype }) =>
    $themetype === "dark"
      ? "0 2.4rem 5.9rem rgba(0,0,0)"
      : "0 2.4rem 5.9rem rgba(0,0,0, 0.5)"};

  @media ${device.tablet} {
    max-width: 56rem;
    width: 100%;
    margin: 0 auto;
  }
`;

const StyledImage = styled.img``;

export { MainTitle, StyledContainer, StyledImage, TitleImage, TitleWithImage };
