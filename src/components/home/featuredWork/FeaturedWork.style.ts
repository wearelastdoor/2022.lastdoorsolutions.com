"use client";

import styled, { css } from "styled-components";
import Masonry from "react-masonry-css";
import { device } from "@/styles/theme/breakpoints";

const FeaturedWork = styled.section`
  padding: ${({ theme }) => `${theme.spacing.custom.r6_8} 0 ${theme.spacing.custom.r10}`};

  @media ${device.phone} {
    padding: ${({ theme }) => `${theme.spacing.custom.r6_8} 0`};
  }
`;

const WorkContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.containerWidth};
  margin: 0 auto;
  padding: ${({ theme }) => `0 ${theme.spacing.lg}`};

  @media ${device.smallScreen} {
    margin: 0;

`;

const WorkHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
  max-width: ${({ theme }) => theme.spacing.custom.r90};
  margin: ${({ theme }) => `0 auto ${theme.spacing.custom.r4_4}`};

  @media ${device.tablet} {
    margin-bottom: 2rem;
  }
`;

const Leadtext = styled.strong`
  width: 100%;
  margin-bottom: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  font-size: ${({ theme }) => theme.font.size.body.sm};
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary.gray[50]};
`;

const WorkHeading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.black};
  font-size: clamp(5rem, 8vw, 9.5rem);
  font-weight: 400;
  display: inline-block;
  vertical-align: top;
  letter-spacing: -.6rem;
  line-height: 1;
  color: color: ${({ theme }) => theme.colors.primary.gray[50]};;
  position: relative;
  z-index: 1;
  margin-bottom: ${({ theme }) => theme.spacing.custom.r3_6 ?? "3.6rem"};

  @media ${device.phone} {
    letter-spacing: -.33rem;
  }

  &:after {
    content: attr(title);
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(.5rem, .5rem) translateZ(0);
    backface-visibility: hidden;
    color: transparent;
    pointer-events: none;
    z-index: -1;
    -webkit-text-stroke: .1rem rgba(142, 210, 220, 0.5);
    text-stroke: .1rem rgba(142, 210, 220, 0.5);

    @media ${device.phone} {
      transform: translate(.3rem, .3rem);
    }
  }
`;

const WorkGrid = styled(Masonry).attrs(() => ({
  className: "featured-work-grid",
  columnClassName: "featured-work-column",
}))`
  display: flex;
  flex-wrap: wrap;
  margin: ${({ theme }) => `0 -${theme.spacing.custom.r3}`};

  @media ${device.tablet} {
    margin: ${({ theme }) => `0 -${theme.spacing.lg}`};
  }

  .featured-work-column {
    display: flex;
    flex-wrap: wrap;
  }

  .featured-work-column:nth-child(even) {
    margin-top: ${({ theme }) => theme.spacing.custom.r10};

    @media ${device.smallScreen} {
      margin-top: ${({ theme }) => theme.spacing.custom.r6};
    }

    @media ${device.phone} {
      margin-top: ${({ theme }) => theme.spacing.xxxl};
    }
  }
`;

const WorkItem = styled.div`
  width: 100%;
  padding: ${({ theme }) => `0 ${theme.spacing.custom.r3}`};
  margin-bottom: ${({ theme }) => theme.spacing.custom.r10};

  @media ${device.smallScreen} {
    margin-bottom: ${({ theme }) => theme.spacing.custom.r6};
  }

  @media ${device.tablet} {
    padding: ${({ theme }) => `0 ${theme.spacing.lg}`};
  }
`;

type WorkLetterProps = {
  $isAlt?: boolean;
};

const WorkLetter = styled.figure<WorkLetterProps>`
  display: inline-block;
  vertical-align: top;
  width: 100%;
  margin: ${({ theme }) => `0 0 -${theme.spacing.custom.r14_6}`};
  text-align: center;
  transform: translateY(0);
  transition: all 300ms ease;

  @media ${device.tablet} {
    margin-bottom: -11.4rem;
  }

  ${({ $isAlt }) =>
    $isAlt &&
    css`
      margin-top: -${({ theme }) => theme.spacing.custom.r8};
      margin-bottom: -${({ theme }) => theme.spacing.custom.r13_3};

      @media ${device.tablet} {
        margin-top: -${({ theme }) => theme.spacing.lg};
        margin-bottom: -11.4rem;
      }
    `}
`;

const StyledLink = styled.a`
  position: absolute;
  inset: 0;
  z-index: 1;
`;

const WorkCard = styled.div`
  position: relative;
  padding: ${({ theme }) => `${theme.spacing.custom.r5} ${theme.spacing.custom.r5} 0`};
  margin-bottom: ${({ theme }) => theme.spacing.custom.r13_3};
  overflow: visible;
  background: linear-gradient(45deg, rgba(46, 63, 77, 1) 0%, rgba(23, 33, 42, 1) 100%);
  );
  box-shadow: 0 3.0rem 6.0rem rgba(23, 33, 42, 0.1);
  color: ${({ theme }) => theme.colors.primary.white};

  @media ${device.smallScreen} {
    margin-bottom: ${({ theme }) => theme.spacing.custom.r12};
    padding: ${({ theme }) => `${theme.spacing.custom.r5} ${theme.spacing.custom.r5} 0`};
  }

  @media ${device.tablet} {
    margin-bottom: ${({ theme }) => theme.spacing.custom.r8};
    padding: ${({ theme }) => `${theme.spacing.custom.r5} ${theme.spacing.custom.r5} 0`};
  }

  @media ${device.phone} {
    margin-bottom: ${({ theme }) => theme.spacing.custom.r8};
    padding: ${({ theme }) => `${theme.spacing["3xl"]} ${theme.spacing.custom.r2_5} 0`};
  }

  &:after {
    content: "";
    position: absolute;
    left: ${({ theme }) => theme.spacing.custom.r0_5};
    top: ${({ theme }) => theme.spacing.custom.r0_5};
    border: .1rem solid ${({ theme }) => theme.color.primary};
    display: block;
    z-index: -1;
    height: 100%;
    width: 100%;
    background-color: transparent;
  }

  &:hover ${WorkLetter}, &:focus-within ${WorkLetter} {
    transform: translateY(-1.0rem);
  }
`;

const ScreenReaderText = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: ${({ theme }) => theme.spacing.custom.r0_1};
  width: ${({ theme }) => theme.spacing.custom.r0_1};
  margin: -0.1rem;
  padding: 0;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
`;

const WorkLogo = styled.img`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  max-width: ${({ theme }) => theme.spacing.custom.r24};
  width: 100%;
  object-fit: contain;
  backface-visibility: hidden;
`;

const WorkTitle = styled.h3`
  font-size: clamp(2.8rem, 5vw, 4rem);
  letter-spacing: -0.2rem;
  line-height: 1;
  color: ${({ theme }) => theme.colors.primary.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media ${device.phone} {
    letter-spacing: -0.1rem;
  }
`;

const WorkCategory = styled.p`
  color: ${({ theme }) => theme.colors.primary.white};
  text-decoration: none;
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.custom.r7_3};
  line-height: 1.6;

  @media ${device.smallScreen} {
    margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  }
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  filter: drop-shadow(2.4rem 2.4rem 3.5rem rgba(0, 0, 0, 0.15));
`;

const WorkFooter = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.custom.r3};
`;

export {
  FeaturedWork,
  Leadtext,
  Masonry,
  ScreenReaderText,
  StyledImage,
  StyledLink,
  WorkCard,
  WorkCategory,
  WorkContainer,
  WorkFooter,
  WorkGrid,
  WorkHeader,
  WorkHeading,
  WorkItem,
  WorkLetter,
  WorkLogo,
  WorkTitle,
};
