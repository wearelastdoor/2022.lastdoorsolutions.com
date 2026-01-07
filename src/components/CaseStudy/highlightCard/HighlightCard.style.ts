"use client";

import { device } from "@/styles/theme/breakpoints";
import styled from "styled-components";

const HighlightBlock = styled.section<{ $themetype: string }>`
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.color.brandSecondary};
  padding: 6.7rem 0 23.6rem;
  background-color: ${({ theme, $themetype }) =>
    $themetype === "dark"
      ? theme.colors.primary.gray[50]
      : theme.colors.secondary.purple[50]};

  color: ${({ theme, $themetype }) =>
    $themetype === "dark" ? theme.colors.white : theme.colors.primary.gray[50]};

  @media ${device.phone} {
    padding: 4rem 0 19.4rem;
  }

  &:after {
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
  }
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  padding: 0 2rem;
`;

const HighlightCard = styled.div`
  background-color: ${({ theme }) => theme.colorVars.error};
  padding: 10.5rem 4rem 8rem;
  text-align: center;
  box-shadow: 0 2rem 10rem -1.8rem rgba(0, 0, 0, 0.5);
  border-radius: clamp(2.875rem, 8vw, 11.875rem) 0
    clamp(3.875rem, 10vw, 11.875rem);

  @media ${device.phone} {
    padding: 6.5rem 3rem 4rem;
  }
`;

const CardTitle = styled.h2`
  font-size: clamp(5rem, 8vw, 9.5rem);
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: normal;
  letter-spacing: -0.6rem;
  line-height: 1;
  position: relative;
  z-index: 1;
  margin-bottom: 1.6rem;
  color: ${({ theme }) => theme.colors.support.promoRed[400]};
  display: inline-block;
  vertical-align: top;

  @media ${device.phone} {
    letter-spacing: -0.33rem;
  }

  &:after {
    content: "";
    background-image: url("data:image/svg+xml,%0A%3Csvg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.1647 13.7475L0 20.3294L6.58198 10.1647L0 0L10.1647 6.58198L20.3294 0L13.7475 10.1647L20.3294 20.3294L10.1647 13.7475Z' fill='%23FCF115'/%3E%3C/svg%3E%0A");
    position: relative;
    display: inline-block;
    vertical-align: top;
    margin-top: -0.9rem;
    margin-left: 0.7rem;
    height: 2rem;
    width: 2rem;
  }

  &:before {
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
    -webkit-text-stroke: 0.1rem rgba(255, 255, 255, 0.5);

    @media ${device.tablet} {
      transform: translate(0.3rem, 0.3rem) translateZ(0);
    }
  }
`;

const CardDescription = styled.div`
  margin: 0 auto;
  max-width: min(57rem, 100%);
  line-height: 1.6;
`;

export {
  CardDescription,
  CardTitle,
  HighlightBlock,
  HighlightCard,
  StyledContainer,
};
