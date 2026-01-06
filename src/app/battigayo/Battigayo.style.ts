"use client";

import { device } from "@/styles/theme/breakpoints";
import styled from "styled-components";
import Image from 'next/image';

const Battigayo = styled.section`
  padding: 5.4rem 0 15.1rem;
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.color.brandSecondary};

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

const StyledContainer = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.container};
`;

const BattigayoHeader = styled.header`
  text-align: center;
`;

const HeaderImage = styled.div`
  margin: 0 0 1.8rem 9rem;
  width: 100%;
  max-width: 30.6rem;
  margin: 0 auto;

  @media ${device.phone} {
    max-width: 27rem;
  }

  img {
    margin: 0 0 1.8rem 4.5rem;
    width: 100%;
    height: auto;
    display: block;
  }
`;

const StyledImage = styled(Image)``;

const BattigayoTitle = styled.h1`
  font-size: clamp(5rem, 8vw, 9.5rem);
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: normal;
  color: ${({ theme }) => theme.colors.white};
  display: inline-block;
  vertical-align: top;
  letter-spacing: -0.6rem;
  line-height: 1;
  position: relative;
  z-index: 1;
  margin: 0 auto;
  max-width: min(97rem, 100%);

  @media ${device.tablet} {
    letter-spacing: -0.33rem;
  }

  &:after {
    pointer-events: none;
    content: attr(title);
    position: absolute;
    top: 0;
    color: transparent;
    z-index: -1;
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

const BattigayoIntro = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: min(84rem, 100%);
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.white};
  padding: 4.2rem 0;

  @media ${device.phone} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const IntroContent = styled.div`
  width: calc(100% - 28.5rem);
  padding-right: clamp(3.6rem, 5vw, 10rem);
  padding-top: clamp(3.6rem, 10vw, 9rem);

  @media ${device.phone} {
    width: 100%;
    padding-right: 0;
  }

  p {
    &:not(:last-of-type) {
      margin-bottom: 3rem;
    }
  }
`;

const IntroLogo = styled.div`
  margin-bottom: 3.3rem;
  width: 30.1rem;
`;

const IntroDescription = styled.div``;

const Description = styled.p`
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.container};
`;

const IntroMedia = styled.div`
  text-align: center;
`;

const IntroImage = styled.img`
  margin-bottom: 0.9rem;
  width: 28.5rem;
`;

const IntroName = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.body.xl};
  font-family: ${({ theme }) => theme.fonts.black};
  margin-bottom: 0.4rem;
  font-weight: normal;
  line-height: 1;
`;

const IntroSlogan = styled.p`
  max-width: min(18rem, 100%);
  margin: 0 auto;
  font-size: 1.5rem;
  line-height: calc(17 / 15);
`;

const BattigayoStory = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  padding: 9rem 0;

  @media ${device.phone} {
    flex-wrap: wrap;
  }
`;

const StoryTitle = styled.h2`
  font-size: clamp(5rem, 8vw, 9.5rem);
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: normal;
  color: ${({ theme }) => theme.colors.white};
  display: inline-block;
  vertical-align: top;
  letter-spacing: -0.6rem;
  line-height: 1;
  position: relative;
  z-index: 1;
  margin: 1.8rem auto 2rem;
  width: 34.188%;

  @media ${device.tablet} {
    letter-spacing: -0.33rem;
  }

  @media ${device.phone} {
    width: 100%;
    margin-bottom: 4rem;
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

const StoryContent = styled.div`
  width: calc(100% - 34.188%);
  padding-left: clamp(3.2rem, 11vw, 15rem);

  @media ${device.phone} {
    width: 100%;
    padding-left: 0;
  }
`;

export {
  Battigayo,
  BattigayoHeader,
  BattigayoIntro,
  BattigayoStory,
  BattigayoTitle,
  Description,
  HeaderImage,
  IntroContent,
  IntroDescription,
  IntroImage,
  IntroLogo,
  IntroMedia,
  IntroName,
  IntroSlogan,
  StoryContent,
  StoryTitle,
  StyledContainer,
  StyledImage,
};
