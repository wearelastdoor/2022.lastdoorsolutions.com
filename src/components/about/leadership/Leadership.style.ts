"use client";

import { device } from "@/styles/theme/breakpoints";
import styled, { css } from "styled-components";

const Leadership = styled.section`
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.color.brandSecondary};
  padding: 20.6rem 0 13rem;

  @media ${device.phone} {
    padding-bottom: 8rem;
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

const MainContainer = styled.div`
  max-width: 100rem;
  padding-right: 6rem;
  padding-left: 2rem;
  margin: 0 auto;

  @media ${device.smallScreen} {
    padding-right: 2rem;
  }
`;

const StyledContent = styled.div`
  max-width: 56rem;
  width: 100%;
  margin-bottom: 6.6rem;
`;

const LeadershipTitle = styled.h2`
  font-size: clamp(5rem, 8vw, 9.5rem);
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: 400;
  display: inline-block;
  vertical-align: top;
  letter-spacing: -0.6rem;
  line-height: 1;
  position: relative;
  z-index: 1;
  color: ${({ theme }) => theme.colors.white};
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
    -webkit-text-stroke: 0.1rem rgba(142, 210, 220, 0.5);
    text-stroke: 0.1rem rgba(142, 210, 220, 0.5);

    @media ${device.phone} {
      transform: translate(0.3rem, 0.3rem) translateZ(0);
    }
  }
`;

const LeadershipDescription = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;

const Description = styled.p`
  line-height: 1.6;
`;

const MainGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -2rem;
  gap: 0;
  align-items: stretch;
  justify-content: flex-start;

  @media ${device.tablet} {
    margin: 0 -1.5rem;
  }
`;

const GridColumn = styled.div`
  width: 33.33%;
  padding: 0 2rem;
  margin-bottom: 4rem;
  box-sizing: border-box;

  @media ${device.tablet} {
    padding: 0 1.5rem;
  }

  @media (max-width: 767px) {
    width: 50%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const LeadershipCard = styled.div<{ type?: "linked" | "outlined" }>`
  padding: 5rem;
  position: relative;
  z-index: 1;
  height: 100%;
  text-align: center;

  ${({ type }) =>
    type === "outlined" &&
    css`
      border: 0.1rem solid ${({ theme }) => `rgba(${theme.colorRgb.brandAlt}, 0.5)`};
    `}

  ${({ type }) =>
    type === "linked" &&
    css`
      cursor: pointer;

      &:hover,
      &:focus {
        &:after,
        &:before {
          height: 100%;
          width: 100%;
        }
      }
    `}

  @media ${device.tablet} {
    padding: 4rem 2rem;
  }

  @media screen and (max-width: 480px) {
    max-width: 32rem;
    margin: 0 auto;
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
    border-color: ${({ theme }) => theme.color.screen};
    border-style: solid;
    transition:
      height 400ms cubic-bezier(0.2, 1, 0.3, 1),
      width 400ms cubic-bezier(0.2, 1, 0.3, 1);
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
`;

const CardImage = styled.img`
  max-width: 18rem;
  width: 100%;
  height: auto;
  border-radius: 50%;
  display: block;
  margin: 0 auto 1.9rem;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);

  @media ${device.tablet} {
    max-width: 16.6rem;
  }
`;

const CardName = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.display.sm};
  font-family: ${({ theme }) => theme.fonts.black};
  letter-spacing: -0.1rem;
  margin-bottom: 0.2rem;
  line-height: 1;
  font-weight: 500;

  @media ${device.phone} {
    font-size: 2.2rem;
  }
`;

const JoinUs = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.display.sm};
  font-family: ${({ theme }) => theme.fonts.book};
  font-weight: ${({ theme }) => theme.font.weight.thin};
  letter-spacing: -0.1rem;
  margin-bottom: 0.2rem;
  line-height: 1;

  @media ${device.phone} {
    font-size: ${({ theme }) => theme.font.size.display.xs};
  }
`;

const CardDesignation = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.8rem;
  letter-spacing: -0.05rem;
  margin-top: 0.8rem;
  margin-bottom: 0;
  line-height: 1;
  opacity: 0.6;

  @media ${device.phone} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    letter-spacing: -0.02rem;
  }
`;

const MailLink = styled.a`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 1;
  display: block;
  cursor: pointer;
`;

const Hidden = styled.span`
  clip: rect(0.1rem, 0.1rem, 0.1rem, 0.1rem);
  clip-path: inset(50%);
  height: 0.1rem;
  width: 0.1rem;
  margin: -0.1rem;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;

export {
  CardDesignation,
  CardImage,
  CardName,
  Description,
  GridColumn,
  Hidden,
  Leadership,
  LeadershipCard,
  LeadershipDescription,
  LeadershipTitle,
  MailLink,
  MainContainer,
  MainGrid,
  StyledContent,
  JoinUs,
};
