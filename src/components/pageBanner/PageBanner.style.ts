"use client";

import { device } from "@/styles/theme/breakpoints";
import styled from "styled-components";

const PageBanner = styled.section<{ $themetype?: string }>`
  position: relative;
  padding: ${({ theme }) => `${theme.spacing.custom.r22_7} 0 ${theme.spacing["3xl"]}`};
  z-index: 3;

  background-color: ${({ theme, $themetype }) =>
    $themetype === "dark"
      ? theme.colors.primary.gray[50]
      : theme.colors.secondary.purple[50]};

  @media ${device.phone} {
    padding: ${({ theme }) => `${theme.spacing.custom.r18_5} 0 ${theme.spacing["3xl"]}`};
  }
`;

const BannerContainer = styled.div`
  margin: auto;
  max-width: ${({ theme }) => theme.layout.containerWidth};
  padding: ${({ theme }) => `0 ${theme.spacing.container}`};
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 1;
  padding-left: ${({ theme }) => theme.spacing.custom.r23};
  margin: 0 auto;

  @media ${device.tablet} {
    padding-left: ${({ theme }) => theme.spacing.custom.r18};
  }

  @media screen and (max-width: 767px) {
    padding-left: ${({ theme }) => theme.spacing.custom.r18};
  }
  @media ${device.phone} {
    padding-left: 0;
  }
`;

const PageName = styled.p<{ $themetype?: string }>`
  z-index: 1;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.body.sm};
  font-family: ${({ theme }) => theme.fonts.black};
  position: absolute;
  left: 0;
  top: ${({ theme }) => theme.spacing.custom.r4_4};
  max-width: ${({ theme }) => theme.spacing.custom.r20};
  color: ${({ $themetype }) =>
    $themetype === "dark" ? "rgba(255,255,255, 0.5)" : "rgba(23,33,42, 1)"};

  @media ${device.smallScreen} {
    left: ${({ theme }) => theme.spacing.xxxl};
  }

  @media ${device.tablet} {
    left: ${({ theme }) => theme.spacing.lg};
    max-width: ${({ theme }) => theme.spacing.custom.r16};
  }

  @media ${device.phone} {
    position: static;
    max-width: none;
  }
`;

const Bannertitle = styled.h1<{ $themetype?: string }>`
  font-size: clamp(6.7rem, 10vw, 12rem);
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: normal;
  color: ${({ theme, $themetype }) =>
    $themetype === "dark"
      ? theme.colors.primary.white
      : theme.colors.primary.gray[50]};
  display: inline-block;
  vertical-align: top;
  line-height: 1;
  position: relative;
  z-index: 1;
  margin-bottom: ${({ theme }) => theme.spacing.custom.r3_3};
  max-width: ${({ theme }) => theme.spacing.custom.r81_0};
  width: 100%;
  letter-spacing: -0.69996rem;

  @media ${device.phone} {
    letter-spacing: -0.45rem;
  }

  &:after {
    content: attr(title);
    position: absolute;
    top: 0;
    color: transparent;
    z-index: -1;
    display: inline-block;
    vertical-align: top;
    font-size: inherit;
    left: 0;
    transform: translate(0.5rem, 0.5rem) translateZ(0);
    backface-visibility: hidden;
    -webkit-text-stroke: 0.1rem rgba(142, 210, 220, 0.75);

    @media ${device.phone} {
      transform: translate(0.3rem, 0.3rem) translateZ(0);
    }
  }
`;

const IntroDescription = styled.div`
  font-size: ${({ theme }) => theme.font.size.display.md};
  line-height: 1.615;
  letter-spacing: -0.05rem;

  @media ${device.phone} {
    font-size: ${({ theme }) => theme.font.size.body.xl};
  }
`;

const PageDescription = styled.p`
  font-size: ${({ theme }) => theme.font.size.display.md};
  margin-bottom: ${({ theme }) => theme.spacing.custom.r4_2};
  line-height: 1.615;
  letter-spacing: -0.05rem;

  @media ${device.phone} {
    margin-bottom: ${({ theme }) => theme.spacing.custom.r3_2};
    font-size: ${({ theme }) => theme.font.size.body.xl};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export {
  BannerContainer,
  BannerContent,
  Bannertitle,
  IntroDescription,
  PageBanner,
  PageDescription,
  PageName,
};
