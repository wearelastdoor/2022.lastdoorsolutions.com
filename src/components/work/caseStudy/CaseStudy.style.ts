"use client";

import { device } from "@/styles/theme/breakpoints";

import styled, { css } from "styled-components";

const CaseStudy = styled.section`
  background-color: ${({ theme }) => `rgba(${theme.colorRgb.secondary})`};
    padding: ${({ theme }) => `${theme.spacing.custom.r15_2} 0 ${theme.spacing.custom.r20_6}`};

  @media ${device.smallScreen} {
     padding: ${({ theme }) => `${theme.spacing.custom.r10} 0 ${theme.spacing.custom.r14_6}`};
  }

  @media ${device.phone} {
     padding-bottom: ${({ theme }) => theme.spacing.custom.r12};
  }
`;

const MainContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.containerWidth};
  padding: ${({ theme }) => `0 ${theme.spacing.lg}`};
  margin: 0 auto;
`;

const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.custom.r5_4};

  @media ${device.smallScreen} {
    margin-bottom: ${({ theme }) => theme.spacing.custom.r3_4};
  }
`;

const LeadText = styled.p`
  font-size: ${({ theme }) => theme.font.size.body.sm};
  line-height: calc(17 / 14);
  letter-spacing: calc(36 / 1000 * 1.4rem);
  color: rgba(23, 33, 42, 0.5);
  font-family: ${({ theme }) => theme.fonts.black};
  margin-bottom: ${({ theme }) => theme.spacing.custom.r1_5};
  text-transform: uppercase;

  @media ${device.smallScreen} {
    margin-bottom: ${({ theme }) => theme.spacing.custom.r0_5};
  }
`;

const MainTitle = styled.h2`
  font-size: clamp(5rem, 8vw, 9.5rem);
  font-family: ${({ theme }) => theme.fonts.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.primary.gray[50]};
  display: inline-block;
  vertical-align: top;
  letter-spacing: -0.6rem;
  line-height: 1;
  position: relative;
  z-index: 1;

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
    transform: translate(${({ theme }) => theme.spacing.custom.r0_5}, ${({ theme }) => theme.spacing.custom.r0_5}) translateZ(0);
    backface-visibility: hidden;
    -webkit-text-stroke: 0.1rem rgba(142, 210, 220, 0.5);

    @media ${device.phone} {
      transform: translate(0.3rem, 0.3rem) translateZ(0);
    }
  }
`;

const CaseStudyCard = styled.div<{ reversed: boolean }>`
  box-shadow: 0 ${({ theme }) => theme.spacing.custom.r3} ${({ theme }) => theme.spacing.custom.r6} rgba(0, 0, 0, 0.1);
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary.white};

  ${({ reversed }) =>
    reversed &&
    css`
      flex-direction: row-reverse;
    `}

  @media ${device.tablet} {
    flex-wrap: wrap;
  }

  &:not(:last-of-type) {
    margin-bottom: ${({ theme }) => theme.spacing.custom.r18};

    @media ${device.tablet} {
      margin-bottom: ${({ theme }) => theme.spacing.custom.r14_6};
    }

    @media ${device.phone} {
      margin-bottom: ${({ theme }) => theme.spacing.custom.r8};
    }
  }
`;

const CaseStudyMedia = styled.div`
  width: 50%;

  @media ${device.phone} {
    width: 100%;
  }

  padding: ${({ theme }) => `${theme.spacing["3xl"]} ${theme.spacing.custom.r5} 0`};
  position: relative;
  z-index: 1;

  @media ${device.tablet} {
    padding: ${({ theme }) => theme.spacing["3xl"]};
  }

  &:after {
    content: "";
    @extend .texture;
  }
`;

const Logo = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.custom.r1};
`;

const StyledImage = styled.img``;

const LogoName = styled.p`
  font-size: clamp(1.76rem, 4vw, 2rem);
  color: ${({ theme }) => theme.colors.primary.white};
  letter-spacing: -0.05rem;
  width: ${({ theme }) => `min(${theme.spacing.custom.r35}, 100%)`};
  line-height: 1.6;
`;

const FirstLetter = styled.div`
  position: absolute;
  bottom: -${({ theme }) => theme.spacing.custom.r8};
  left: ${({ theme }) => theme.spacing.custom.r8};
  right: ${({ theme }) => theme.spacing.custom.r8};
  filter: drop-shadow(2.4rem 2.4rem 3.5rem rgba(0, 0, 0, 0.15));
  display: flex;
  justify-content: center;

  img {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    max-width: ${({ theme }) => theme.spacing.custom.r35};
    left: ${({ theme }) => theme.spacing.custom.r6};
    right: ${({ theme }) => theme.spacing.custom.r6};
  }

  @media ${device.phone} {
    position: relative;
    margin-top: -${({ theme }) => theme.spacing.custom.r6};
    left: 0;
    right: 0;
  }
`;

const CaseStudyContent = styled.div`
  width: 50%;
  color: ${({ theme }) => theme.colors.primary.gray[50]};

  @media ${device.phone} {
    width: 100%;
  }

  padding: ${({ theme }) => `${theme.spacing.custom.r10} ${theme.spacing["4xl"]}`};

  @media screen and (max-width: 1024px) {
    padding: ${({ theme }) => `${theme.spacing["4xl"]} ${theme.spacing.custom.r5}`};
  }

  @media ${device.tablet} {
    padding: ${({ theme }) => `${theme.spacing["4xl"]} ${theme.spacing["3xl"]}`};
  }

  @media screen and (max-width: 767px) {
    padding: ${({ theme }) => `${theme.spacing["4xl"]} ${theme.spacing["2xl"]}`};
  }

  @media ${device.phone} {
    padding: ${({ theme }) => `${theme.spacing["5xl"]} ${theme.spacing["2xl"]} ${theme.spacing["4xl"]}`};
  }
`;

const CaseStudyTitle = styled.h2`
  font-size: clamp(3.2rem, 5vw, 6rem);
  font-family: ${({ theme }) => theme.fonts.black};
  width: ${({ theme }) => `min(${theme.spacing.custom.r40_2}, 100%)`};
  letter-spacing: -0.4rem;
  line-height: 1;
  margin-bottom: ${({ theme }) => theme.spacing.custom.r2_8};

  @media ${device.tablet} {
    letter-spacing: -0.2rem;
  }
`;

const CaseStudyDescription = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};

  p {
    font-size: 1.5rem;
    line-height: 1.6;
  }
`;

const StyledLink = styled.a``;

export {
  CaseStudy,
  CaseStudyCard,
  CaseStudyContent,
  CaseStudyDescription,
  CaseStudyMedia,
  CaseStudyTitle,
  FirstLetter,
  Header,
  LeadText,
  Logo,
  LogoName,
  MainContainer,
  MainTitle,
  StyledImage,
  StyledLink,
};
