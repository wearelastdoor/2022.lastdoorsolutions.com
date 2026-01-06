import { font } from "@/styles/theme";
import { device } from "@/styles/theme/breakpoints";
import { url } from "inspector";
import Image from "next/image";
import styled from "styled-components";

const Intro = styled.section`
  background-color: ${({ theme }) => `rgb(${theme.colorRgb.secondary}))`};
  position: relative;
  z-index: 1;
  padding-bottom: ${({ theme }) => theme.spacing.custom.r25_5};

  @media ${device.phone} {
    padding-bottom: ${({ theme }) => theme.spacing.custom.r42};
  }
`;

const IntroBackground = styled.span`
 z-index: -1;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: ${({ theme }) => theme.spacing.custom.r16};
    background-color: ${({ theme }) => theme.color.primary};
    display: block;

    &:after {
      @include pattern;
    }
  }`;

const IntroContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: ${({ theme }) => theme.layout.containerWidth};
  margin: auto;
  padding: ${({ theme }) => `0 ${theme.spacing.lg}`};

  @media ${device.phone} {
    padding-top: ${({ theme }) => theme.spacing.custom.r20_7};
  }
`;

const Introcard = styled.div`
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.primary.white};
  padding: ${({ theme }) => `${theme.spacing.custom.r7_3} ${theme.spacing.custom.r15} ${theme.spacing.custom.r7} ${theme.spacing.custom.r9}`};
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  max-width: ${({ theme }) => theme.spacing.custom.r63};
  width: 100%;

  @media ${device.tablet} {
    max-width: ${({ theme }) => theme.spacing.custom.r46};
    padding: ${({ theme }) => `${theme.spacing.custom.r7_3} ${theme.spacing.custom.r11_5} ${theme.spacing.custom.r8} ${theme.spacing.custom.r7}`};
  }

  @media ${device.phone} {
    padding: ${({ theme }) => `${theme.spacing.custom.r5} ${theme.spacing.custom.r3_5} ${theme.spacing.custom.r10_8} ${theme.spacing["4xl"]}`};
  }

  &:before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    display: block;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary.white};
  }

  &:after {
    content: "";
    top: ${({ theme }) => theme.spacing.custom.r0_5};
    left: ${({ theme }) => theme.spacing.custom.r0_5};
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -2;
    display: block;
    border: 0.1rem solid ${({ theme }) => theme.color.screen};
  }
`;

const IntroTitle = styled.h2`
  font-size: clamp(3.4rem, 6vw, 4.6rem);
  line-height: 1;
  font-family: ${({ theme }) => theme.fonts.black};
  letter-spacing: -0.3rem;
  color: ${({ theme }) => theme.colors.primary.gray[50]};
  font-weight: normal;
  margin-bottom: ${({ theme }) => theme.spacing.custom.r3_5};

  @media ${device.phone} {
    letter-spacing: -0.22rem;
    margin-bottom: ${({ theme }) => theme.spacing.custom.r3};
  }
`;

const IntroList = styled.ul`
  list-style: none;
  max-width: ${({ theme }) => theme.spacing.custom.r35};
  margin-bottom: 0;
  width: 100%;

  @media ${device.phone} {
    font-size: ${({ theme }) => theme.font.size.body.md};
    line-height: 1.875;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  p {
    display: inline;
    margin: 0;
    background-image: linear-gradient(to right, #c7e9ee, #c7e9ee);
    background-repeat: no-repeat;
    background-size: 100% 0.4rem;
    background-position: 0 calc(100% - 0.1rem);
    line-height: 1;

    @media ${device.phone} {
      font-size: ${({ theme }) => theme.font.size.body.md};
    }
  }

  .icon {
    height: ${({ theme }) => theme.spacing.custom.r2_2};
    width: ${({ theme }) => theme.spacing.custom.r2_2};
    position: absolute;
    top: 0.5rem;
    z-index: -1;
    right: calc(100% + 2rem);
  }
`;

const ListItem = styled.li`
     position: relative;
    z-index: 1;
    font-size: ${({ theme }) => theme.font.size.body.xl};
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.primary.gray[50]};

    &:not(:last-child) {
      margin-bottom: ${({ theme }) => theme.spacing.xxxl};

      @media ${device.phone} {
        margin-bottom: ${({ theme }) => theme.spacing.custom.r3};
      }
    `;

const IntroDescription = styled.p``;

const Metadata = styled.dl`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => `${theme.spacing.custom.r1_5} 0 0`};
  padding: 0;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => `rgba(${theme.colorRgb.brandAlt})`};
  line-height: 1.2857;
`;

const Username = styled.dt`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: ${({ theme }) => theme.spacing.custom.r0_3};
`;

const Designation = styled.dd``;

type IntroLogoProps = {
  $backgroundImage?: string;
};

const IntroLogo = styled.figure<IntroLogoProps>`
  height: ${({ theme }) => theme.spacing.custom.r24};
  width: ${({ theme }) => theme.spacing.custom.r24};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.25);
  right: -11.5rem;
  bottom: 6.7rem;
  position: absolute;
  z-index: 1;
  background: linear-gradient(170deg, ${({ theme }) => theme.color.brandAlt} 0%, ${({ theme }) => theme.color.brand} 100%);
  background-image: ${({ $backgroundImage }) =>
    $backgroundImage ? `url(${$backgroundImage})` : "none"};
  transform: translateY(0) translateZ(0);
  backface-visibility: hidden;
  transition: all 300ms ease;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  overflow: hidden;

  @media ${device.tablet} {
    height: ${({ theme }) => theme.spacing.custom.r20};
    width: ${({ theme }) => theme.spacing.custom.r20};
    right: -10rem;
    bottom: 8.5rem;
  }

  @media ${device.phone} {
    left: calc(50% - 10rem);
    right: auto;
    bottom: -10rem;
  }

  &:hover,
  &:focus {
    transform: translateY(-1rem) translateZ(0);
    box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.25);
  }

  a {
    position: absolute;
    bottom: 0;
    border-radius: 50%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    color: ${({ theme }) => theme.colors.primary.white};
    padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.custom.r3}`};
    display: flex;
    align-items: flex-end;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    line-height: 1;
    font-size: ${({ theme }) => theme.font.size.body.xl};
    letter-spacing: normal;
    flex-wrap: wrap;

    &:after {
      content: "";
      height: 100%;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(
        0deg,
        rgba(23, 33, 42, 1) 0%,
        rgba(23, 33, 42, 0) 100%
      );
      position: absolute;
      z-index: -1;
    }
  }
`;

const IntroLink = styled.a``;

const BrandLogo = styled(Image)`
  margin-top: auto;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  width: 100%;
  max-width: ${({ theme }) => theme.spacing.custom.r11_7};
`;

const IntroFigure = styled.figure`
  max-width: ${({ theme }) => theme.spacing.custom.r37_7};
  width: 100%;
  position: absolute;
  top: -1rem;
  right: -1.5rem;
  z-index: -1;

  @media screen and (max-width: 767px) {
    max-width: ${({ theme }) => theme.spacing.custom.r22_8};
    right: 2.9rem;
    top: 0;
  }

  @media ${device.phone} {
    top: 0;
  }

  &:after {
    content: "";
    right: -9999.9rem;
    left: -60rem;
    background-color: ${({ theme }) => `rgba(${theme.colorRgb.secondary})`};
    display: block;
    position: absolute;
    z-index: -1;
    bottom: 0;
    top: ${({ theme }) => theme.spacing.custom.r13_8};

    @media ${device.smallScreen} {
      left: -40rem;
    }

    @media ${device.tablet} {
      left: -20rem;
    }

    @media screen and (max-width: 767px) {
      left: -200%;
    }
  }
`;

const StyledImage = styled(Image)``;

const LogoText = styled.strong`
  font-weight: normal;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: white;
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

const StyledLink = styled.div`
  position: absolute;
  bottom: 0;
  border-radius: 50%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  color: ${({ theme }) => theme.colors.primary.white};
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.custom.r3}`};
  display: flex;
  align-items: flex-end;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  line-height: 1;
  font-size: ${({ theme }) => theme.font.size.body.xl};
  letter-spacing: normal;
  flex-wrap: wrap;

  &:after {
    content: "";
    height: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      0deg,
      rgba(23, 33, 42, 1) 0%,
      rgba(23, 33, 42, 0) 100%
    );
    position: absolute;
    z-index: -1;
  }
`;

export {
  BrandLogo,
  IntroBackground,
  Designation,
  Intro,
  IntroContainer,
  IntroDescription,
  IntroFigure,
  IntroLink,
  IntroList,
  IntroLogo,
  IntroTitle,
  Introcard,
  Metadata,
  StyledImage,
  Username,
  ListItem,
  LogoText,
  StyledLink,
};
