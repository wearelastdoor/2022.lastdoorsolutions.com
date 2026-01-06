"use client";

import { device } from "@/styles/theme/breakpoints";
import styled, { css } from "styled-components";

const CarouselShowcase = styled.section<{ themetype: string }>`
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

  @media ${device.smallScreen} {
    padding: 7rem 0;
  }
`;

const StyledContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const ShowcaseHeader = styled.header``;

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
  max-width: min(97rem, 100%);

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

const ShowcaseCarousel = styled.div`
  max-width: 144rem;
  margin: 0 auto 3rem;
  height: 49rem;
  position: relative;
  z-index: 1;

  @media ${device.smallScreen} {
    height: 36.6rem;
  }

  @media ${device.phone} {
    height: auto;
    padding-bottom: 49.5%;
    margin-bottom: 2rem;
  }
`;

const Carousel = styled.div`
  top: 0;
  bottom: 0;
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
`;

const CarouselInner = styled.div`
  max-width: min(87rem, 100%);
  margin: 0 auto;
  position: relative;
  z-index: 1;
  height: 49rem;

  @media ${device.smallScreen} {
    max-width: min(65rem, 100%);
    height: 36.6rem;
  }

  @media ${device.phone} {
    padding-bottom: 49.5%;
    height: auto;
    width: calc(100% - 5rem);
  }
`;

const CarouselItem = styled.div<{
  position: string;
  depth: number;
}>`
  max-width: 87rem;
  top: 0;
  left: 0;
  position: absolute;
  backface-visibility: hidden;
  box-shadow: 0 2rem 10rem -1.8rem rgba(0, 0, 0, 0.5);
  transition: all 600ms ease;
  bottom: 0;
  right: 0;
  z-index: 1;
  opacity: 1;
  cursor: pointer;
  pointer-events: auto;
  margin-bottom: -1rem;

  img {
    width: 100%;
    height: auto;
  }

  ${({ position }) =>
    position === "active" &&
    `
    z-index: 10;
  `}

  ${({ position, depth }) =>
    position === "after" &&
    `
    transform: translate3d(${150 * depth}px, 0, 0) scale(${1 - depth * 0.2});
    z-index: ${6 - depth};
    transform-origin: right center;
  `}

  ${({ position, depth }) =>
    position === "before" &&
    `
    transform: translate3d(-${150 * depth}px, 0, 0) scale(${1 - depth * 0.2});
    z-index: ${6 - depth};
    transform-origin: left center;
  `}
`;

const easeout = css`
  -webkit-transition: ease-out all 0.2s;
  -moz-transition: ease-out all 0.2s;
  -ms-transition: ease-out all 0.2s;
  -o-transition: ease-out all 0.2s;
  transition: ease-out all 0.2s;
`;

const StyledImage = styled.img``;

const SliderControl = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const ControlButton = styled.div``;

const StyledButton = styled.button<{ type?: string }>`
  text-decoration: none;
  box-shadow: none;
  border: 0;
  border-radius: 0;
  background-color: ${({ theme }) => theme.colors.buttons.background};
  color: ${({ theme }) => theme.colors.primary.gray[50]};
  letter-spacing: 0;
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: normal;
  font-size: ${({ theme }) => theme.font.size.body.sm};
  line-height: 1.142;
  padding: 2.4rem 6rem 2.1rem;
  letter-spacing: -0.04rem;
  pointer-events: all;
  cursor: pointer;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;

  @media ${device.phone} {
    padding: 1.9rem 4rem 1.6rem;
  }

  ${easeout}

  span {
    position: absolute;
    left: 0;
    overflow: hidden;
    height: 100%;
    top: 0;
    z-index: -2;
    width: 100%;

    &:after,
    &:before {
      content: "";
      height: 106%;
      width: 100%;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      transform: skewY(168deg);
      background-color: ${({ theme }) => `rgba(${theme.colorRgb.primary})`};
      transition: transform 1s cubic-bezier(0.2, 1, 0.3, 1);
    }

    &:after {
      transform-origin: left top;
      transform: skewY(168deg) translateY(-100%);
    }

    &:before {
      transform-origin: right bottom;
      transform: skewY(168deg) translateY(100%);
    }
  }

  &:after,
  &:before {
    content: "";
    height: 1rem;
    width: 1rem;
    background-color: transparent;
    position: absolute;
    z-index: -1;
    display: block;
    border-color: ${({ theme }) => theme.colors.buttons.border};
    border-style: solid;
    transition: all 600ms cubic-bezier(0.2, 1, 0.3, 1);
  }

  &:after {
    left: 0;
    top: 0;
    border-width: 0.2rem 0 0 0.2rem;
  }

  &:before {
    bottom: 0;
    right: 0;
    border-width: 0 0.2rem 0.2rem 0;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary.gray[50]};

    &:after,
    &::before {
      height: 100%;
      width: 100%;
      border-color: ${({ theme }) => theme.colors.primary.gray[50]};
    }

    span {
      &:after {
        transform: translateY(0);
      }

      &:before {
        transform: translateY(0);
      }
    }
  }

  ${({ type }) =>
    type === "light-dark" &&
    css`
      background: ${({ theme }) => `rgba(${theme.colorRgb.brandAlt})`};
      color: ${({ theme }) => theme.color.primary};

      &:after,
      &:before {
        border-color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
      }

      span {
        &:after,
        &:before {
          background-color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
        }
      }

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.primary.gray[50]};

        &:after,
        &::before {
          height: 100%;
          width: 100%;
          border-color: ${({ theme }) => `rgba(${theme.colorRgb.primary})`};
        }

        span {
          &:after {
            transform: translateY(0);
          }

          &:before {
            transform: translateY(0);
          }
        }
      }
    `}

  ${({ type }) =>
    type === "dark" &&
    css`
      background: ${({ theme }) => theme.colors.primary.gray[50]};
      color: ${({ theme }) => theme.color.primary};

      &:after,
      &:before {
        border-color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
      }

      span {
        &:after,
        &:before {
          background-color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
        }
      }

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.primary.gray[50]};

        &:after,
        &::before {
          height: 100%;
          width: 100%;
          border-color: ${({ theme }) => `rgba(${theme.colorRgb.primary})`};
        }

        span {
          &:after {
            transform: translateY(0);
          }

          &:before {
            transform: translateY(0);
          }
        }
      }
    `}

    ${({ type }) =>
    type === "dark-alt" &&
    css`
      background: ${({ theme }) => theme.colors.primary.gray[50]};
      color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};

      &:after,
      &:before {
        border-color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
      }

      span {
        &:after,
        &:before {
          background-color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
        }
      }

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.primary.gray[50]};

        &:after,
        &::before {
          height: 100%;
          width: 100%;
          border-color: ${({ theme }) => `rgba(${theme.colorRgb.primary})`};
        }

        span {
          &:after {
            transform: translateY(0);
          }

          &:before {
            transform: translateY(0);
          }
        }
      }
    `}

    ${({ type }) =>
    type === "light" &&
    css`
      background: ${({ theme }) => `rgba(${theme.colorRgb.secondary})`};
      color: ${({ theme }) => theme.colors.primary.gray[50]};

      span {
        &:after,
        &:before {
          background: ${({ theme }) => `rgba(${theme.colorRgb.brandAlt})`};
        }
      }

      &:hover,
      &:focus {
        color: ${({ theme }) => `rgba(${theme.colorRgb.primary})`};

        &:after,
        &:before {
          border-color: ${({ theme }) => `rgba(${theme.colorRgb.primary})`};
        }
      }
    `}
    
    ${({ type }) =>
    type === "disabled" &&
    css`
      background: ${({ theme }) => `rgba(${theme.colorRgb.secondary})`};
      pointer-events: none;
      opacity: 0.5;
      cursor: default;
      user-select: none;
    `}
`;

const StyledSpan = styled.span``;

export {
  CarouselItem,
  Carousel,
  CarouselInner,
  CarouselShowcase,
  ControlButton,
  ShowcaseCarousel,
  ShowcaseDescription,
  ShowcaseHeader,
  ShowcaseTitle,
  SliderControl,
  StyledButton,
  StyledContainer,
  StyledImage,
  StyledSpan,
};
