"use client";

import { device } from "@/styles/theme/breakpoints";
import styled, { css } from "styled-components";

const Stats = styled.div`
  background-color: transparent;
  position: relative;
  z-index: 3;
`;

const StatsContainer = styled.div`
  max-width: 120rem;
  padding: 0 2rem;
  margin: 0 auto;

  @media ${device.mediumScreen} {
    max-width: 96rem;
  }

  @media ${device.smallScreen} {
    max-width: 66rem;
  }
  @media screen and (max-width: 1023px) {
    max-width: 82rem;
  }
`;

const OffsetBg = styled.span<{ $variant?: "primary" | "secondary" }>`
  position: absolute;
  z-index: -2;

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

  ${({ $variant }) =>
    $variant === "primary" &&
    css`
      background-color: ${({ theme }) => theme.color.primary};
      top: 0;
      bottom: calc(100% - 47.939%);
      right: 100%;
      left: -9999%;
    `}

  ${({ $variant }) =>
    $variant === "secondary" &&
    css`
      background-color: ${({ theme }) => theme.color.alt};
      bottom: 0;
      top: calc(100% - 39.58785%);
      left: 100%;
      right: -9999%;
    `}
`;

const StatsContent = styled.section`
  max-width: 82rem;
  padding: 8.6rem 7rem 8rem 8rem;
  width: 100%;
  position: relative;
  z-index: 2;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.primary.white};

  @media ${device.smallScreen} {
    padding: 6.6rem 5rem 6rem 4rem;
  }
  @media ${device.phone} {
    padding: 5.6rem 3rem 4rem 3rem;
  }

  &:after {
    content: "";
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
    display: block;
    background-color: ${({ theme }) => theme.colors.primary.white};
  }
`;

const StatsTitle = styled.h2`
  font-size: clamp(5rem, 8vw, 9.5rem);
  font-weight: normal;
  font-family: ${({ theme }) => theme.fonts.black};
  display: inline-block;
  vertical-align: top;
  letter-spacing: -0.6rem;
  line-height: 1;
  position: relative;
  z-index: 1;
  color: ${({ theme }) => theme.colors.primary.gray[50]};
  max-width: 48rem;
  margin-bottom: 3.6rem;

  @media ${device.phone} {
    letter-spacing: -0.33rem;
  }

  &:after {
    content: attr(title);
    position: absolute;
    top: 0;
    color: transparent;
    z-index: -2;
    display: inline-block;
    vertical-align: top;
    left: 0;
    transform: translate(0.5rem, 0.5rem) translateZ(0);
    backface-visibility: hidden;
    -webkit-text-stroke: 0.1rem rgb(142, 210, 220, 0.5);

    @media ${device.phone} {
      transform: translate(0.3rem, 0.3rem) translateZ(0);
    }
  }
`;

const StatsDescription = styled.div`
  padding-left: 6rem;
  @media ${device.smallScreen} {
    padding-left: 0;
  }

  p {
    &:not(:last-child) {
      margin-bottom: 3.2rem;
      line-height: 1.6;
    }
  }
`;

const Description = styled.p``;

const StatsCounter = styled.div<{
  type?: "experience" | "partners" | "clients";
  $showOnDesktop?: boolean;
  $showOnTablet?: boolean;
  $pleasedClient?: boolean;
}>`
  color: rgb(142, 210, 220);
  display: flex;
  align-items: flex-end;
  white-space: nowrap;

  ${({ type }) =>
    type === "experience" &&
    css`
      position: absolute;
      z-index: 1;
      top: 7rem;
      left: calc(100% - 9.6rem);

      @media screen and (max-width: 1023px) {
        position: static;
      }
    `}

  ${({ type }) =>
    type === "partners" &&
    css`
      position: absolute;
      z-index: 1;
      top: calc(100% - 4.2rem);
      left: -15.3rem;

      @media screen and (max-width: 1023px) {
        position: static;
      }
    `}

    ${({ $showOnDesktop, theme }) =>
    $showOnDesktop &&
    css`
      display: none;

      @media screen and (min-width: 1024px) {
        display: flex;

        @media ${device.phone} {
          padding: 0 2rem 2rem;
        }
      }
    `}

    ${({ $showOnTablet }) =>
    $showOnTablet &&
    css`
      display: none;

      @media screen and (max-width: 1023px) {
        color: ${({ theme }) => theme.colors.primary.white};
        padding: 0 2rem 3rem;
        display: flex;

        @media ${device.phone} {
          padding: 0 2rem 2rem;
        }
      }
    `}

    ${({ $pleasedClient }) =>
    $pleasedClient &&
    css`
      color: ${({ theme }) => theme.colors.buttons.background};
      margin-right: -8.5rem;

      @media ${device.phone} {
        padding: 0 2rem 2rem;
      }
    `}

  p {
    margin-bottom: 0;
  }
`;

const StatsCounterNumber = styled.p`
  line-height: 1;
  letter-spacing: -0.75rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts.black};
  position: relative;
  display: inline-block;
  vertical-align: top;
  font-size: clamp(7.9rem, 12vw, 15rem);

  @media ${device.tablet} {
    letter-spacing: -0.33rem;
  }

  sup {
    position: absolute;
    top: -1.5rem;
    left: calc(100% + 0.3rem);
    font-size: clamp(3.66rem, 6vw, 7.5rem);
  }
`;

const CounterLabel = styled.p`
    padding-left: 1.3rem;
    padding-bottom: 1.8rem;
    font-size: 1.8rem;
    letter-spacing: -.05rem;
    line-height: 1.2778;
    
    @media screen and (max-width: 1023px) {
      padding-bottom: 1.0rem;
    }

    @media ${device.phone} {
      padding-left: .5rem;
    }
`;

const CounterHolder = styled.div`
  margin-left: auto;
  width: 62.82%;
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.color.alt};
  margin-bottom: -10rem;
  display: flex;
  justify-content: flex-end;
  padding: 13.2rem 0 2.1rem;

  @media ${device.smallScreen} {
    padding: 7rem 0 2.1rem;
  }

  @media ${device.phone} {
    padding-top: 4rem;
  }

  @media screen and (max-width: 1023px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
  }

  &:before {
    content: "";
    left: 0;
    top: 0;
    bottom: 0;
    display: block;
    right: -9999%;
    background-color: ${({ theme }) => theme.color.alt};
    position: absolute;
    z-index: -2;
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

const ShowOnDesktop = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

const ShowOnTablet = styled.div`
  display: none;

  @media screen and (max-width: 1023px) {
    display: flex;
  }
`;

const StyledPlus = styled.sup``;

export {
  CounterHolder,
  CounterLabel,
  Description,
  OffsetBg,
  ShowOnDesktop,
  ShowOnTablet,
  Stats,
  StatsContainer,
  StatsContent,
  StatsCounterNumber,
  StatsDescription,
  StatsTitle,
  StatsCounter,
  StyledPlus,
};
