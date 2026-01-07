"use client";

import { device } from "@/styles/theme/breakpoints";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

const Accordion = styled.section`
  padding: ${({ theme }) =>
    `${theme.spacing.custom.r14_3} 0 ${theme.spacing.custom.r11}`};

  @media ${device.tablet} {
    padding: ${({ theme }) =>
      `${theme.spacing.custom.r10} 0 ${theme.spacing.custom.r8}`};
  }

  @media ${device.phone} {
    padding: ${({ theme }) =>
      `${theme.spacing.custom.r8} 0 ${theme.spacing.custom.r6}`};
  }
`;

const AccordionContainer = styled.div`
  max-width: ${({ theme }) => theme.spacing.custom.r112};
  margin: 0 auto;
  padding: ${({ theme }) => `0 ${theme.spacing.lg}`};
`;

const AccordionIntro = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
  margin-bottom: ${({ theme }) => theme.spacing.custom.r2_8};

  @media ${device.phone} {
    margin-bottom: 0;
  }
`;

const AccordionHeading = styled.h2`
  font-size: clamp(4.68rem, 8vw, 8rem);
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: normal;
  color: ${({ theme }) => theme.colors.primary.gray[50]};
  display: inline-block;
  vertical-align: top;
  text-align: center;
  letter-spacing: -0.6rem;
  line-height: 1;
  position: relative;
  z-index: 1;
  margin: ${({ theme }) => `0 auto ${theme.spacing.custom.r2_9}`};
  max-width: ${({ theme }) => `min(${theme.spacing.custom.r97}, 100%)`};

  @media ${device.tablet} {
    letter-spacing: -0.33rem;
  }

  &:after {
    content: attr(title);
    position: absolute;
    top: 0;
    color: transparent;
    z-index: -1;
    left: 0;
    transform: translate(0.5rem, 0.5rem) translateZ(0);
    backface-visibility: hidden;
    -webkit-text-stroke: 0.1rem rgba(142, 210, 220, 0.5);

    @media ${device.tablet} {
      transform: translate(0.3rem, 0.3rem) translateZ(0);
    }
  }
`;

const AccordionAdditional = styled.div`
  margin-top: ${({ theme }) => theme.spacing.custom.r5};

  h3 {
    font-size: ${({ theme }) => theme.font.size.display.sm};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-family: ${({ theme }) => theme.fonts.black};

    @media ${device.phone} {
      margin-bottom: ${({ theme }) => theme.spacing.lg};
      letter-spacing: -0.1rem;
    }
  }

  p {
    line-height: 1.6;

    a {
      text-decoration: underline;
      font-size: ${({ theme }) => theme.font.size.body.xl};
      color: ${({ theme }) => theme.colorVars.link};
    }
  }
`;

const AccordionItem = styled.div`
  border-top: 0.1rem solid rgba(23, 33, 42, 0.25);

  &:last-child {
    border-bottom: 0.1rem solid rgba(23, 33, 42, 0.25);
  }
`;

const AccordionHeader = styled.div`
  position: relative;
  z-index: 1;
  padding-right: ${({ theme }) => theme.spacing.custom.r7};
  padding: ${({ theme }) =>
    `${theme.spacing.custom.r2_1} ${theme.spacing.custom.r7_5} ${theme.spacing.lg} 0`};
`;

const AccordionTitle = styled.h3`
  position: relative;
  z-index: 1;
  font-family: ${({ theme }) => theme.fonts.black};
  font-size: ${({ theme }) => theme.font.size.display.md};
  line-height: 1.2315;
  letter-spacing: -0.05rem;
  margin-bottom: 0;
  cursor: pointer;

  @media ${device.phone} {
    font-size: ${({ theme }) => theme.font.size.display.xs};
    letter-spacing: -0.02rem;
  }
`;

const AccordionButton = styled.button<{ $isOpen: boolean }>`
  position: absolute;
  height: ${({ theme }) => theme.spacing.custom.r2_2};
  width: ${({ theme }) => theme.spacing.custom.r2_2};
  display: block;
  z-index: 1;
  border-radius: 0;
  border-style: none;
  background-color: transparent;
  top: 2.5rem;
  right: 3rem;

  &:after,
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    display: block;
    background-color: ${({ theme }) => theme.colors.primary.gray[50]};
    transition: all 300ms ease;
  }

  &:after {
    top: 0;
    width: ${({ theme }) => theme.spacing.custom.r0_4};
    height: ${({ theme }) => theme.spacing.custom.r2_2};
    left: 0.9rem;

    ${({ $isOpen }) =>
      $isOpen &&
      css`
        opacity: 0;
      `}
  }

  &:before {
    height: ${({ theme }) => theme.spacing.custom.r0_4};
    width: ${({ theme }) => theme.spacing.custom.r2_2};
    left: 0;
    top: 0.9rem;
  }
`;

const ScreenReaderText = styled.span`
  clip: ${({ theme }) =>
    `rect(${theme.spacing.custom.r0_1}, ${theme.spacing.custom.r0_1}, ${theme.spacing.custom.r0_1}, ${theme.spacing.custom.r0_1})`};
  position: absolute !important;
  height: ${({ theme }) => theme.spacing.custom.r0_1};
  width: ${({ theme }) => theme.spacing.custom.r0_1};
  overflow: hidden;

  &:focus {
    background-color: ${({ theme }) => theme.colors.support.warningYellow[50]};
    border-radius: ${({ theme }) => theme.spacing.custom.r0_3};
    box-shadow: 0 0 0.2rem 0.2rem rgba(0, 0, 0, 0.6);
    clip: auto !important;
    color: ${({ theme }) => theme.color.textScreen};
    display: block;
    font-size: ${({ theme }) => theme.font.size.body.sm};
    font-weight: bold;
    height: auto;
    left: ${({ theme }) => theme.spacing.custom.r0_5};
    line-height: normal;
    padding: ${({ theme }) =>
      `${theme.spacing.custom.r1_5} ${theme.spacing.custom.r2_3} ${theme.spacing.custom.r1_4}`};
    text-decoration: none;
    top: ${({ theme }) => theme.spacing.custom.r0_5};
    width: auto;
    z-index: 100000; /* Above WP toolbar. */
  }
`;

const AccordionBody = styled(motion.div)``;

const AccordionBodyInner = styled.div`
  padding: ${({ theme }) => `${theme.spacing.custom.r1} 0`};
`;

export {
  Accordion,
  AccordionAdditional,
  AccordionBody,
  AccordionBodyInner,
  AccordionButton,
  AccordionContainer,
  AccordionHeader,
  AccordionHeading,
  AccordionIntro,
  AccordionItem,
  AccordionTitle,
  ScreenReaderText,
};
