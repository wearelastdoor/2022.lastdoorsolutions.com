"use client";

import { colors } from "@/styles/theme";
import { device } from "@/styles/theme/breakpoints";
import Image from "next/image";
import styled from "styled-components";

const AboutIntro = styled.section`
  background-color: ${({ theme }) => `rgba(${theme.colorRgb.secondary})`};
  padding-bottom: 9.5rem;
  overflow: hidden;
  margin-top: -1.1rem;
  position: relative;
  z-index: 3;
`;

const IntroContainer = styled.div`
  max-width: 144rem;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: flex-start;

  @media ${device.phone} {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`;

const IntroCol = styled.div`
  width: calc(50% - 1.5rem);
  position: relative;

  @media ${device.phone} {
    width: 100%;
  }

  &:first-child {
    padding-top: 3.1rem;
    z-index: 1;
  }

  &:last-child {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    z-index: 2;
  }
`;

const IntroDescription = styled.div`
  padding: 6.4rem 4.5rem 3.8rem 18.5rem;
  font-size: clamp(2.62rem, 3vw, 3.8rem);
  color: ${({ theme }) => theme.colors.primary.gray[50]};
  letter-spacing: -0.18rem;
  position: relative;
  z-index: 1;
  margin-bottom: 19rem;

  @media ${device.mediumScreen} {
    margin-bottom: 12rem;
  }

  @media ${device.smallScreen} {
    padding: 6.4rem 1.5rem 3.8rem 6rem;
  }
  @media ${device.tablet} {
    margin-bottom: 5rem;
    padding: 4.4rem 1.5rem 2.3rem 2rem;
  }

  @media ${device.phone} {
    letter-spacing: -0.05rem;
  }
  &:after {
    content: "";
    background-color: ${({ theme }) => theme.colors.primary.white};
    right: 44.68%;
    height: 100%;
    top: 0;
    left: -9999%;
    display: block;
    position: absolute;
    z-index: -1;
  }

  &:before {
    content: "";
    background-color: transparent;
    right: calc(44.68% - 3rem);
    top: 3rem;
    height: 100%;
    left: -9999%;
    display: block;
    position: absolute;
    z-index: -2;
    border: 0.2rem solid rgba(255, 255, 255, 0.5);

    @media ${device.tablet} {
      right: calc(44.68% - 2rem);
      top: 2rem;
    }
  }
`;

const Description = styled.p`
  line-height: 1.445;
`;

const IntroGraphic1 = styled.figure`
  margin-left: -0.8rem;
  position: relative;
  z-index: 1;

  img {
    @media ${device.tablet} {
      max-width: 32rem;
    }
  }
  &:after {
    content: "";
    background-image: url("../images/texture.webp");
    background-repeat: repeat;
    position: absolute;
    z-index: -1;
    top: 100%;
    left: -999%;
    bottom: -200%;
    right: -16.5rem;
    display: block;

    @media ${device.phone} {
      right: 2rem;
    }
  }

  &:before {
    content: "";
    position: absolute;
    z-index: -2;
    top: 100%;
    left: -999%;
    bottom: -200%;
    right: -16.5rem;
    display: block;
    background-color: ${({ theme }) => theme.color.primary};

    @media ${device.phone} {
      right: 2rem;
    }
  }
`;

const IntroGraphic2 = styled.figure`
  margin-right: -2.5rem;

  img {
    @media ${device.tablet} {
      max-width: 27rem;
    }
  }
`;

const StyledImage = styled.img``;

const IntroImageWrapper = styled.div`
  margin-bottom: -0.3rem;
  max-width: 70.4rem;
  max-height: 70.4rem;

  @media ${device.phone} {
    padding: 0 0 0 2rem;
  }
`;

const FigCaption = styled.p`
  width: 100%;
  font-size: ${({ theme }) => theme.font.size.body.sm};
  line-height: calc(17 / 14);
  color: $${({ theme }) => theme.colors.primary.gray[50]};

  @media ${device.phone} {
    padding-left: 2rem;
  }
`;

export {
  AboutIntro,
  Description,
  FigCaption,
  IntroCol,
  IntroContainer,
  IntroDescription,
  IntroGraphic1,
  IntroGraphic2,
  IntroImageWrapper,
  StyledImage,
};
