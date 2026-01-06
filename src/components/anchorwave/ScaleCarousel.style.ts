"use client";

import { device } from "@/styles/theme/breakpoints";
import styled, { css } from "styled-components";

const Texture = css`
  background-image: url("/images/texture.png");
  background-repeat: repeat;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: block;
`;

const Showcase = styled.div<{ $isAlt?: boolean; $isLarge?: boolean }>`
  position: relative;
  z-index: 2;
  padding-top: ${({ theme }) => theme.spacing.custom.r8_2};
  text-align: center;

  @media ${device.phone} {
    padding-top: 2rem;
  }

  @media screen and (max-width: 480px) {
    padding-top: 0;
  }

  ${({ $isLarge }) =>
    $isLarge &&
    css`
      padding-bottom: ${({ theme }) => theme.spacing.custom.r3_5};

      @media ${device.phone} {
        padding-bottom: 2rem;
      }
    `}

  ${({ $isAlt }) =>
    $isAlt &&
    css`
      padding-top: ${({ theme }) => theme.spacing.custom.r12_2};
      padding-bottom: ${({ theme }) => theme.spacing.custom.r10};

      @media ${device.tablet} {
        padding-bottom: 8rem;
      }

      @media ${device.phone} {
        padding-top: 6rem;
        padding-bottom: 4rem;
      }

      @media screen and (max-width: 480px) {
        padding-bottom: 0;
      }

      &:after {
        content: "";
        ${Texture}
        background-color: ${({ theme }) => `rgba(${theme.colorRgb.primary})`};
        top: calc(100% - 25rem);
        bottom: 0;

        @media ${device.tablet} {
          padding-bottom: ${({ theme }) => theme.spacing["4xl"]};
          top: calc(100% - 18rem);
        }
        @media ${device.phone} {
          padding-bottom: ${({ theme }) => theme.spacing["3xl"]};
          top: calc(100% - 14rem);
        }
        @media screen and (max-width: 480px) {
          top: calc(100% - 10rem);
        }
      }
    `}
`;

const ShowcaseContainer = styled.div<{ $isLarge?: boolean }>`
  position: relative;
  max-width: 144rem;
  z-index: 2;
  height: calc(90rem * 0.594444444444444);

  @media screen and (max-width: 1320px) {
    max-width: 78rem;
    height: calc(78rem * 0.625);
  }

  @media screen and (max-width: 860px) {
    max-width: 64rem;
    height: calc(64rem * 0.632);
  }

  @media screen and (max-width: 560px) {
    aspect-ratio: 900/525;
    height: 100%;
  }
  margin: auto;

  ${({ $isLarge }) =>
    $isLarge &&
    css`
      max-width: 110rem;
      height: calc(106rem * 0.75);

      @media screen and (max-width: 1320px) {
        max-width: 82rem;
        height: calc(82rem * 0.75);
      }

      @media screen and (max-width: 860px) {
        max-width: 68rem;
        height: calc(68rem * 0.75);
      }

      @media screen and (max-width: 560px) {
        aspect-ratio: 1060/795;
        height: 100%;
      }
    `}
`;

const ShowcaseCarouselTitle = styled.h2`
  font-size: clamp(3.2875rem, 12vw, 10.625rem);
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: normal;
  color: transparent;
  display: inline-block;
  vertical-align: top;
  line-height: 1;
  position: absolute;
  top: 0;
  z-index: 1;
  letter-spacing: -0.9rem;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  left: 0;
  transform: translateY(-67%);

  @media ${device.tablet} {
    letter-spacing: -0.6rem;
  }

  @media ${device.phone} {
    letter-spacing: -0.3rem;
    width: 100%;
  }

  &:after {
    content: attr(title);
    position: absolute;
    top: 0;
    z-index: -1;
    display: inline-block;
    vertical-align: top;
    left: 0;
    right: 0;
    text-transform: uppercase;
    transform: translate(0.5rem, 0.5rem) translateZ(0);
    backface-visibility: hidden;

    @supports (
      (text-stroke: 0.1rem white) or (-webkit-text-stroke: 0.1rem white)
    ) {
      color: transparent;
      -webkit-text-stroke: 0.1rem rgba(142, 210, 220, 0.75);
      text-stroke: 0.1rem rgba(142, 210, 220, 0.75);
      text-shadow: none;
    }

    @media ${device.phone} {
      transform: translate(0.3rem, 0.3rem) translateZ(0);
    }
  }
`;

const ShowcaseCarousel = styled.div<{ $isLarge?: boolean }>`
  height: calc(90rem * 0.594444444444444);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  max-width: 90rem;
  width: 100%;
  transform: translateX(-50%);
  left: 50%;
  position: relative;
  cursor: move;
  z-index: 2;

  ${({ $isLarge }) =>
    $isLarge &&
    css`
      height: calc(106rem * 0.75);
      max-width: 106rem;
    `}

  @media screen and (max-width: 1320px) {
    max-width: 78rem;
    height: calc(78rem * 0.625);

    ${({ $isLarge }) =>
      $isLarge &&
      css`
        height: calc(78rem * 0.75);
      `}
  }

  @media screen and (max-width: 860px) {
    max-width: 64rem;
    height: calc(64rem * 0.632);

    ${({ $isLarge }) =>
      $isLarge &&
      css`
        height: calc(64rem * 0.75);
      `}
  }

  @media screen and (max-width: 560px) {
    max-width: calc(100% - 8rem);
    aspect-ratio: 900/525;
    height: auto;

    ${({ $isLarge }) =>
      $isLarge &&
      css`
        aspect-ratio: 1060/795;
        height: auto;
      `}
  }
`;

const ScaleCarouselGrid = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 9;
  right: 0;
`;

const ScaleCarouselTrack = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
`;

const ScaleCarouselItem = styled.div`
  margin: auto 0;
  margin-right: 8rem;
  transition: all 0.3s ease;
  user-select: none;

  @media screen and (max-width: 1320px) {
    margin-right: 4rem;
  }
`;

const ShowcaseImage = styled.div`
  width: 100%;
  transition: all 300ms ease;
  filter: drop-shadow(0 2rem 4rem rgba(0, 0, 0, 0.25));

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export {
  ScaleCarouselGrid,
  ScaleCarouselItem,
  ScaleCarouselTrack,
  Showcase,
  ShowcaseCarousel,
  ShowcaseCarouselTitle,
  ShowcaseContainer,
  ShowcaseImage,
};
