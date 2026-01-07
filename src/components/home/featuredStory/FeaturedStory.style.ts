"use client";

import { device } from "@/styles/theme/breakpoints";
import Image from "next/image";
import styled from "styled-components";

const FeaturedStory = styled.section`
  padding: 0 0 5rem;
`;

const StoryContainer = styled.div`
  margin: auto;
  padding: 0 ${({ theme }) => theme.spacing.container};
  max-width: 120rem;
`;

const StoryMedia = styled.div`
  padding: ${({ theme }) => `${theme.spacing.hero} 0 ${theme.spacing.hero}`};
  position: relative;
  z-index: 1;

  & + div {
    margin-top: -44rem;

    @media ${device.desktop} {
      margin-top: -17.5rem;
    }
    @media ${device.tablet} {
      margin-top: -7.5rem;
    }
    @media ${device.phone} {
      margin-top: -3.5rem;
    }
    @media screen and (max-width: 480px) {
      margin-top: 0;
    }
`;

const StoryBackground = styled.span`
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: -999%;
  right: 50%;
  background-color: ${({ theme }) => `rgba(${theme.colorRgb.alt})`};

  @media ${device.phone} {
    right: -20%;
  }

  &:after {
    content: "";
    @extend .texture;
  }
`;

const StoryImageWrapper = styled.figure`
  position: relative;
  z-index: 1;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  max-width: 97rem;
  width: 100%;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(24, 34, 43, 0.5);
  }
`;

const ImageLogo = styled.img`
  position: absolute;
  top: 4.3rem;
  left: 5rem;
  z-index: 2;
  width: 100%;

  @media ${device.phone} {
    top: 2rem;
    left: 2rem;
    max-width: 12rem !important;
  }
`;

const StyledImage = styled(Image)``;

const StoryContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: flex-end;
`;

const StoryContent = styled.div`
  position: relative;
  padding: 8rem 0 8rem 8rem;
  max-width: 82rem;
  width: 100%;
  z-index: 1;

  @media ${device.tablet} {
    padding: 6rem 4rem;
    max-width: 64rem;
  }

  @media ${device.phone} {
    padding: 4rem;
  }

  @media screen and (max-width: 420px) {
    padding: 2rem;
  }

  &:after,
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    height: 100%;
    display: block;
    right: -999%;
  }

  &:before {
    background-color: ${({ theme }) => theme.colors.primary.white};
    background-image: url("/images/texture.webp");
    background-repeat: repeat;
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  }

  &:after {
    border: 0.1rem solid ${({ theme }) => `rgba(${theme.colorRgb.primary})`};
    top: 0.5rem;
    left: -0.5rem;
    z-index: -2;
  }
`;

const StoryLeadText = styled.strong`
  font-size: ${({ theme }) => theme.font.size.body.sm};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  line-height: 1.21;
  letter-spacing: 0.0504rem;
  color: rgba(23, 33, 42, 0.5);
  font-family: ${({ theme }) => theme.fonts.black};
  margin-bottom: 1.1rem;
  text-transform: uppercase;
  display: block;

  @media ${device.smallScreen} {
    margin-bottom: 0.5rem;
  }
`;

const StoryTitle = styled.h2`
  font-size: clamp(5rem, 8vw, 8rem);
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: normal;
  color: ${({ theme }) => theme.colors.primary.gray[50]};
  display: inline-block;
  vertical-align: top;
  letter-spacing: -0.5rem;
  line-height: 1;
  position: relative;
  z-index: 1;
  margin-bottom: 2rem;

  @media ${device.phone} {
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

    @media ${device.phone} {
      transform: translate(0.3rem, 0.3rem) translateZ(0);
    }
  }
`;

const StoryDescription = styled.div`
  margin-bottom: 4rem;
  max-width: 53rem;
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
  FeaturedStory,
  Image,
  ImageLogo,
  StoryBackground,
  StoryContainer,
  StoryContent,
  StoryContentWrapper,
  StoryDescription,
  StoryImageWrapper,
  StoryLeadText,
  StoryMedia,
  StoryTitle,
  StyledImage,
  ScreenReaderText,
};
