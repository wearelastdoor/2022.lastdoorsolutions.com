"use client";

import { device } from "@/styles/theme/breakpoints";
import styled, { css, keyframes } from "styled-components";

const HighlightCta = styled.section<{ $themecolor?: string }>`
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing.custom.r7} 0 ${theme.spacing.custom.r12}`};

  @media ${device.phone} {
    padding: ${({ theme }) => `${theme.spacing.custom.r7} 0`};
  }

  ${({ $themecolor }) =>
    $themecolor === "dark" &&
    css`
      background-color: ${({ theme }) => theme.color.brandSecondary};
      position: relative;
      z-index: 1;
      padding: 0 0 ${({ theme }) => theme.spacing.custom.r22};

      @media ${device.phone} {
        padding: 0 0 ${({ theme }) => theme.spacing.custom.r12};
      }

      &:after {
        content: "";
        background-image: url("../images/texture.webp");
        background-repeat: repeat;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: block;
      }
    `}
`;

const CtaContainer = styled.div`
  max-width: 132rem;
  padding: 0 2rem;
  margin: auto;
`;

const CtaHolder = styled.div`
  padding: ${({ theme }) => theme.spacing["4xl"]};
  position: relative;
  z-index: 1;

  @media ${device.tablet} {
    padding: ${({ theme }) => theme.spacing["3xl"]};
  }

  @media ${device.phone} {
    padding: ${({ theme }) => `${theme.spacing.lg} 0 ${theme.spacing.lg} ${theme.spacing.lg}`};
    margin-left: -${({ theme }) => theme.spacing.lg};
  }
`;

const CtaDecorate = styled.span<{ $themecolor?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  &:after,
  &:before {
    content: "";
    position: absolute;
    display: block;
  }

  &:after {
    z-index: -1;
    left: 40.9375%;
    position: absolute;
    top: 51.36986%;
    background-color: ${({ theme }) => theme.colors.primary.white};
    right: -999%;
    bottom: -${({ theme }) => theme.spacing["4xl"]};

    @media ${device.tablet} {
      bottom: -${({ theme }) => theme.spacing["3xl"]};
    }

    @media ${device.phone} {
      bottom: -${({ theme }) => theme.spacing.lg};
    }

    ${({ $themecolor }) =>
      $themecolor === "dark" &&
      css`
        background-color: ${({ theme }) => `rgba(${theme.colorRgb.brandAlt})`};
      `}
  }

  &:before {
    z-index: -2;
    border: 0.1rem solid ${({ theme }) => theme.color.primary};
    right: 39.375%;
    left: 0;
    top: 0;
    bottom: 0;
  }
`;

const CtaCard = styled.div`
  background-color: ${({ theme }) => theme.color.brand};
  position: relative;
  z-index: 1;
  padding: ${({ theme }) => `${theme.spacing.custom.r13_9} ${theme.spacing["4xl"]} ${theme.spacing["3xl"]}`};

  @media ${device.tablet} {
    padding: ${({ theme }) => `${theme.spacing.custom.r13_9} ${theme.spacing["3xl"]} ${theme.spacing["4xl"]}`};
  }

  @media ${device.phone} {
    padding: ${({ theme }) => `${theme.spacing.custom.r12} ${theme.spacing.lg} ${theme.spacing["5xl"]}`};
  }

  &:after {
    content: "";
    @extend .texture;
    z-index: -2;
  }

  &:before {
    content: "";
    position: absolute;
    background-image: url("/images/box-card-layout.svg");
    bottom: 0;
    right: 0;
    height: ${({ theme }) => theme.spacing.custom.r25_6};
    width: ${({ theme }) => theme.spacing.custom.r26_7};
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center right;
    z-index: -1;

    @media ${device.phone} {
      transform: scale(0.6);
      transform-origin: right bottom;
    }
  }
`;

const rotation = keyframes`
  to {
    transform: rotate(359deg);
  }
`;

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const tilt = keyframes`
  0% { transform: rotate(178deg); }
  50% { transform: rotate(235deg); }
  100% { transform: rotate(178deg); }
`;

const StyledLink = styled.a`
  position: absolute;
  top: -${({ theme }) => theme.spacing.custom.r8};
  right: ${({ theme }) => theme.spacing["4xl"]};
  z-index: 1;
  height: ${({ theme }) => theme.spacing.custom.r19_5};
  width: ${({ theme }) => theme.spacing.custom.r19_5};
  border-radius: 50%;
  transition: none;

  @media ${({ theme }) => theme.breakpoints.device.phone} {
    right: ${({ theme }) => theme.spacing["3xl"]};
    top: -${({ theme }) => theme.spacing.custom.r9};
    max-width: 14rem;
    width: 14rem;
    height: 14rem;
  }

  #contactIcon {
    transition: all 0.25s ease;
    cursor: pointer;
    transform-origin: center;
    transform: scale(1);

    &:hover,
    &:focus {
      transform: scale(1.1);

      #fence,
      .stage {
        opacity: 0;
      }

      #strokeBorder {
        opacity: 0.5;
        animation: ${spin} 8s ease-in-out infinite;
      }

      #text {
        animation: ${rotation} 4s cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite;
      }

      #arrow {
        transform-origin: center;
        animation: ${tilt} 4s ease-in-out infinite;
      }
    }
  }

  #fence,
  #strokeBorder {
    transition: all 0.25s ease;
    transform-origin: center center;
  }

  #text {
    animation: ${rotation} 12s linear infinite;
    transform-origin: 50% 50%;
  }
`;

const CtaContent = styled.div`
  max-width: 68rem;
  width: 100%;
`;

const CtaTitle = styled.h2`
  font-size: clamp(4.68rem, 8vw, 8rem);
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: normal;
  color: ${({ theme }) => theme.colors.primary.white};
  display: inline-block;
  vertical-align: top;
  letter-spacing: -0.6rem;
  line-height: 1;
  position: relative;
  z-index: 1;
  margin: 0 auto 2.9rem;
  max-width: min(97rem, 100%);

  strong {
    color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
  }

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
    -webkit-text-stroke: 0.1rem rgba(252, 241, 19, 0.5);

    @media ${device.tablet} {
      transform: translate(0.3rem, 0.3rem) translateZ(0);
    }
  }
`;

const CtaDescription = styled.div`
  max-width: 53.4rem;
  width: 100%;
  margin-bottom: 2rem;

  @media screen and (max-width: 820px) {
    max-width: 42rem;
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.primary.white};
  line-height: 1.6;
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

export {
  CtaCard,
  CtaContainer,
  CtaContent,
  CtaDecorate,
  CtaDescription,
  CtaHolder,
  CtaTitle,
  Description,
  HighlightCta,
  StyledLink,
  ScreenReaderText,
};
