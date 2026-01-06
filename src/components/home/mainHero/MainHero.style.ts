import { device } from "@/styles/theme/breakpoints";
import styled from "styled-components";
import Image from "next/image";

const MainHero = styled.section``

const StyledContainer = styled.div`
  position: relative;
  z-index: 1;
  padding: ${({ theme }) => `${theme.spacing.custom.r22_7} ${theme.spacing.lg} ${theme.spacing.custom.r12} ${theme.spacing.lg}`};
  max-width: ${({ theme }) => theme.layout.containerWidth};
  margin: 0 auto;

  @media ${device.phone} {
    padding: ${({ theme }) => `${theme.spacing.custom.r18_5} ${theme.spacing.lg} ${theme.spacing.custom.r8}`};
  }
`;

const HeroBadge = styled.div`
  position: absolute !important;
  top: 7.3rem;
  right: -1.5rem;
  z-index: -1;
  transition: all 300ms ease;
  height: ${({ theme }) => theme.spacing.custom.r20};
  width: ${({ theme }) => theme.spacing.custom.r20};

  @media screen and (max-width: 1300px) {
    right: 2rem;
  }

  @media ${device.phone} {
    height: ${({ theme }) => theme.spacing.custom.r15};
    width: ${({ theme }) => theme.spacing.custom.r15};
    top: 8.3rem;
    right: 3rem;
  }
`;

const BadgeImage = styled(Image)`
  display: block;
`;

const HeaderText = styled.h1<{ title?: string }>`
  width: 89%;
  font-size: clamp(5.4rem, 10vw, 12rem);
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: normal;
  color: ${({ theme }) => theme.colors.primary.gray[50]};
  display: inline-block;
  vertical-align: top;
  line-height: 1;
  position: relative;
  z-index: 1;
  margin-bottom: clamp(2.5rem, 5vw, 3.3rem);
  letter-spacing: -0.7rem;

  @media screen and (max-width: 1300px) {
    width: 68%;
  }

  @media ${device.phone} {
    letter-spacing: -0.45rem;
    max-width: ${({ theme }) => `min(${theme.spacing.custom.r31_6}, 100%)`};
    width: 100%;
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
    right: 0;
    transform: translate(0.5rem, 0.5rem) translateZ(0);
    backface-visibility: hidden;
    -webkit-text-stroke: 0.1rem rgba(142, 210, 220, 0.75);

    @media ${device.phone} {
      transform: translate(0.3rem, 0.3rem) translateZ(0);
    }
  }
`;

const Description = styled.div`
  max-width: ${({ theme }) => theme.spacing.custom.r52};
  width: 100%;
  letter-spacing: -0.04rem;
  margin-bottom: ${({ theme }) => theme.spacing.custom.r2_9};
  line-height: 1.6;
`;

const LinkButton = styled.a`
  -webkit-appearance: none;
  text-decoration: none;
  box-shadow: none;
  border: 0;
  border-radius: 0;
  background-color: ${({ theme }) => theme.colors.primary.white};
  color: ${({ theme }) => theme.colors.primary.gray[50]};
  letter-spacing: 0;
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: normal;
  font-size: ${({ theme }) => theme.font.size.body.sm};
  line-height: 1.142;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing["4xl"]} ${theme.spacing.custom.r2_1}`};
  @include easeout;
  letter-spacing: -0.04rem;
  pointer-events: all;
  cursor: pointer;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;

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
      background-color: var(--c-primary);
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

  @media screen and (max-width: 767px) {
    padding: ${({ theme }) => `${theme.spacing.custom.r1_9} ${theme.spacing["3xl"]} ${theme.spacing.md}`};
  }

  .icon {
    margin-right: 1rem;
  }

  &:after,
  &:before {
    content: "";
    height: ${({ theme }) => theme.spacing.custom.r1};
    width: ${({ theme }) => theme.spacing.custom.r1};
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
`;

const ScreenReaderText = styled.span`
  clip: ${({ theme }) => `rect(${theme.spacing.custom.r0_1}, ${theme.spacing.custom.r0_1}, ${theme.spacing.custom.r0_1}, ${theme.spacing.custom.r0_1})`};
  position: absolute !important;
  height: ${({ theme }) => theme.spacing.custom.r0_1};
  width: ${({ theme }) => theme.spacing.custom.r0_1};
  overflow: hidden;

  &:focus {
    background-color: var(--c-screen);
    border-radius: ${({ theme }) => theme.spacing.custom.r0_3};
    box-shadow: 0 0 0.2rem 0.2rem rgba(0, 0, 0, 0.6);
    clip: auto !important;
    color: var(--text-screen);
    display: block;
    ${({ theme }) => theme.font.size.body.sm};
    font-weight: bold;
    height: auto;
    left: ${({ theme }) => theme.spacing.custom.r0_5};
    line-height: normal;
    padding: ${({ theme }) => `${theme.spacing.custom.r1_5} ${theme.spacing.custom.r2_3} ${theme.spacing.custom.r1_4}`};
    text-decoration: none;
    top: ${({ theme }) => theme.spacing.custom.r0_5};
    width: auto;
    z-index: 100000; /* Above WP toolbar. */
  }
`;

// // Optional: animating divs
// const AnimatingDiv = styled.div`
//   position: fixed;
//   top: 0;
//   width: 100%;
//   height: 100vh;
//   background-color: seagreen;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   clip-path: inset(0% 0% 0% 100%);
// `;

// const AnimatingContent = styled.div`
//   width: 20.0rem;
//   height: 20.0rem;
//   background-color: skyblue;
//   animation: ghumo 2s linear infinite;

//   @keyframes ghumo {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `;

export {
  MainHero,
  StyledContainer,
  HeroBadge,
  BadgeImage,
  HeaderText,
  Description,
  LinkButton,
  ScreenReaderText,
  // AnimatingDiv,
  // AnimatingContent,
};
