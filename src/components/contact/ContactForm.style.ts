"use client";

import { device } from "@/styles/theme/breakpoints";
import styled from "styled-components";

const Contact = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary.purple[50]};
  padding-bottom: ${({ theme }) => theme.spacing.custom.r12};
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

const ContactContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoints.size.container};
  padding: 0 ${({ theme }) => theme.spacing.lg};
  z-index: 1;
`;

const ContactCard = styled.div`
  max-width: min(74rem, 100%);
  position: relative;
  z-index: 2;
  padding: ${({ theme }) => `${theme.spacing.custom.r22_9} ${theme.spacing.custom.r10} ${theme.spacing.custom.r10} 0`};

  @media ${device.smallScreen} {
    max-width: min(52rem, 100%);
    padding: ${({ theme }) => `${theme.spacing.custom.r18} ${theme.spacing.custom.r8} ${theme.spacing.custom.r10} 0`};
  }

  @media ${device.tablet} {
    max-width: min(66rem, 100%);
    padding: ${({ theme }) => `${theme.spacing.custom.r18} ${theme.spacing.custom.r3} ${theme.spacing.custom.r12} 0`};
  }

  @media ${device.phone} {
    padding: ${({ theme }) => `${theme.spacing.custom.r18} ${theme.spacing.lg} ${theme.spacing.custom.r10} 0`};
  }

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: -9999%;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.primary.white};
    box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  }
`;

const ContactHeader = styled.header`
  letter-spacing: -0.04rem;
  margin-bottom: ${({ theme }) => theme.spacing.custom.r5};

  @media ${device.phone} {
    text-align: center;
  }

  mark {
    padding: 0.1rem 0.5rem;
    background: transparent;
    transition: background 300ms ease;

    &:hover,
    &:focus {
      background: ${({ theme }) => theme.colorVars.primary};
    }

    a {
      font: inherit;
      color: inherit;
      text-decoration: none;
      display: inline-block;
      vertical-align: middle;
    }
  }
`;

const ContactTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.black};
  font-size: clamp(4.8rem, 8vw, 9.5rem);
  color: ${({ theme }) => theme.colors.text};
  display: inline-block;
  vertical-align: top;
  letter-spacing: -0.6rem;
  line-height: 1;
  position: relative;
  z-index: 1;
  margin-bottom: 2.4rem;
  font-weight: 400;

  @media ${device.phone} {
    letter-spacing: -0.33rem;
  }

  &:after {
    content: attr(title);
    position: absolute;
    top: 0;
    left: 0;
    color: transparent;
    z-index: -1;
    transform: translate(0.5rem, 0.5rem) translateZ(0);
    backface-visibility: hidden;
    -webkit-text-stroke: 0.1rem rgba(142, 210, 220, 0.5);
    text-stroke: 0.1rem rgba(142, 210, 220, 0.5);

    @media ${device.phone} {
      transform: translate(0.3rem, 0.3rem) translateZ(0);
    }
  }
`;

const ContactBody = styled.div`
  border: 0.1rem dashed rgba(28, 38, 46, 0.3);
  padding: ${({ theme }) => `${theme.spacing.custom.r3} ${theme.spacing.custom.r3} 0`};
  border-radius: 1rem;
`;

const ContactPerson = styled.address`
  font-style: normal;
  width: 100%;
  display: flex;

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.custom.r3};
  }

  &:first-child {
    padding-left: 0;
    padding-bottom: ${({ theme }) => theme.spacing.custom.r3};
  }

  &:not(:first-child) {
    border-bottom: 0.1rem dashed rgba(28, 38, 46, 0.3);
    margin-bottom: ${({ theme }) => theme.spacing.custom.r3};
  }

  &:last-child {
    padding-right: 0;
    border-bottom: 0;

    @media screen and (max-width: 780px) {
      padding-left: 0;
    }
  }

  @media screen and (max-width: 780px) {
    display: block;
    width: 100%;
    border-right: 0;
    border-bottom: 0.1rem dashed rgba(28, 38, 46, 0.3);
  }
`;

const ContactPersonWrapper = styled.div`
  display: flex;
  align-items: center;

  @media ${device.phone} {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`;

const StyledFigure = styled.figure`
  margin: 0;
  margin-right: ${({ theme }) => theme.spacing.custom.r1};
  position: relative;

  @media ${device.phone} {
    margin-bottom: 1.2rem;
  }
`;

const PersonImage = styled.img`
  max-width: ${({ theme }) => theme.spacing.custom.r12};
  display: block;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ContactDetails = styled.div`
  @media ${({ theme }) => theme.breakpoints.device.phone} {
    width: 100%;
  }
`;

const PersonName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary.black};
  font-size: ${({ theme }) => theme.font.size.display.xs};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: -0.1rem;
  margin: 1rem 0 0.5rem;
  line-height: 1.1;
`;

const PersonAddress = styled.address`
  color: rgba(28, 38, 46, 0.5);
  line-height: 1.6;
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  display: block;
  margin-bottom: 1.1rem;
`;

const PersonLinks = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  @media ${device.phone} {
    text-align: center;
    justify-content: center;
  }
`;

const PersonMail = styled.a`
  color: ${({ theme }) => theme.colorVars.brandSecondary};
  font-size: ${({ theme }) => theme.font.size.body.md};
  text-decoration: none;
  position: relative;
  display: inline-block;
  line-height: 1;

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: rgba(0, 0, 0, 0.25);
    transition: background-color 250ms ease;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colorVars.primaryDark};

    &:after {
      background-color: ${({ theme }) => theme.colorVars.primaryDark};
    }
  }
`;

const ContactImage = styled.div`
  position: absolute;
  top: 40.6754%;
  right: -1.5rem;
  z-index: 1;
  max-width: 50rem;

  @media ${device.tablet} {
    width: 100%;
    position: relative;
    top: -15rem;
    margin-left: auto;
    z-index: 4;
    margin-bottom: -15rem;
  }

  @media screen and (max-width: 690px) {
    max-width: 33rem;
  }

  @media ${({ theme }) => theme.breakpoints.device.phone} {
    top: -5rem;
    margin-bottom: -5rem;
  }

  @media screen and (max-width: 460px) {
    margin: 0;
  }

  &:after {
    content: "";
    background-image: url("/images/texture.webp");
    background-repeat: repeat;
    position: absolute;
    z-index: -1;
    top: calc(100% - 1rem);
    left: -999%;
    bottom: -200%;
    right: -9999%;
    display: block;
  }

  &:before {
    content: "";
    position: absolute;
    z-index: -2;
    top: calc(100% - 1rem);
    left: -9999%;
    bottom: -200%;
    right: -9999%;
    display: block;
    background-color: ${({ theme }) => theme.colors.primary.gray[50]};
  }
`;

const StyledSpan = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;

export {
  Contact,
  ContactBody,
  ContactContainer,
  ContactDetails,
  ContactCard,
  ContactHeader,
  ContactImage,
  ContactPerson,
  ContactPersonWrapper,
  ContactTitle,
  PersonAddress,
  PersonLinks,
  PersonMail,
  PersonName,
  PersonImage,
  StyledFigure,
  StyledImage,
  StyledSpan,
};
