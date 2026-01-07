"use client";

import { device } from "@/styles/theme/breakpoints";
import Image from "next/image";
import styled, { css } from "styled-components";

const Footer = styled.footer`
  position: relative;
  background-color: transparent;
  z-index: 1;
  padding: ${({ theme }) => `${theme.spacing["5xl"]} 0`};

  &:before {
    content: "";
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -2;
    background-color: ${({ theme }) => theme.color.brandSecondary};
    display: block;
    position: absolute;
  }

  &:after {
    content: "";
    background-image: url("/images/texture.webp");
    background-repeat: repeat;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: block;
  }

  @media ${device.ipad} {
    padding: ${({ theme }) => `${theme.spacing["4xl"]} 0`};
  }

  @media ${device.phone} {
    padding: ${({ theme }) => `${theme.spacing["3xl"]} 0`};
  }
`;

const FooterContainer = styled.div`
  position: relative;
  z-index: 6;
  max-width: ${({ theme }) => theme.layout.containerWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const FooterWrapper = styled.div`
  display: flex;

  @media ${device.ipad} {
    display: block;
    width: 100%;
  }
`;

const FooterMenu = styled.div`
  padding: ${({ theme }) => `${theme.spacing.lg} 10% ${theme.spacing.lg} 0`};
  border-right: 0.1rem solid rgba(255, 255, 255, 0.3);
  flex: 0 0 auto;

  @media ${device.smallScreen} {
    padding: ${({ theme }) => `${theme.spacing.lg} 5% ${theme.spacing.lg} 0`};
  }

  @media ${device.ipad} {
    border: 0;
    padding: 0;
  }
`;

const FooterNav = styled.ul`
  list-style: none;
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};

  @media ${device.ipad} {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
  }

  li {
    margin-bottom: 1.5rem;
    line-height: 1;

    @media ${device.ipad} {
      margin: 0 ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.xs};

      &:first-child {
        margin-left: 0;
      }
    }

    @media ${device.phone} {
      margin: 0 ${({ theme }) => theme.spacing.custom.r0_5} ${({ theme }) => theme.spacing.xs};
    }

    a {
      font-size: ${({ theme }) => theme.font.size.body.sm};
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      font-family: ${({ theme }) => theme.fonts.black};
      font-weight: normal;
      color: ${({ theme }) => theme.colors.primary.white};
      text-decoration: none;

      &:hover,
      &:focus {
        color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
      }

      @media ${device.phone} {
        font-size: 1.2rem;
      }
    }
  }

  [aria-current] {
    color: ${({ theme }) => `rgba(${theme.colorRgb.primary})`};
  }
`;

const ListItem = styled.li``;

const StyledLink = styled.button<{ $isActive?: boolean }>`
  font-size: ${({ theme }) => theme.font.size.body.sm};
  background: transparent;
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: normal;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colorVars.link : theme.colors.primary.white};
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
  }

  @media ${device.phone} {
    font-size: 1.2rem;
  }
`;

const StyledLinkButton = styled.a`
  color: ${({ theme }) => theme.colors.primary.white};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary.white};
  }
`;

const Copyright = styled.p<{ display: "desktop" | "responsive" }>`
  font-size: ${({ theme }) => theme.font.size.body.sm};
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  line-height: 1.6;

  @media ${device.phone} {
    order: 2;
  }

  ${({ display }) =>
    display === "responsive" &&
    css`
      display: none;

      @media ${device.ipad} {
        display: block;
      }
    `}

  ${({ display }) =>
    display === "desktop" &&
    css`
      @media ${device.ipad} {
        display: none;
      }
    `}
`;

const FooterContact = styled.div`
  margin-left: 10%;
  margin-top: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.lg} 0`};

  @media ${device.smallScreen} {
    margin-left: 5%;
  }

  @media ${device.ipad} {
    margin: 0;
    padding: ${({ theme }) => `${theme.spacing.xs} 0`};

    .c-contact__body & {
      padding: 0;
    }
  }
`;

const FooterContactInner = styled.div`
  border: 0.1rem dashed rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
  position: relative;
`;

const FooterTitle = styled.h2`
  background-color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
  border-radius: 0.6rem;
  font-size: ${({ theme }) => theme.font.size.body.sm};
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  padding: ${({ theme }) => `${theme.spacing.custom.r0_5} ${theme.spacing.xs} ${theme.spacing.custom.r0_4}`};
  display: inline-block;
  margin: 0;
  position: absolute;
  left: ${({ theme }) => theme.spacing.custom.r2_5};
  top: 0;
  transform: translateY(-50%);

  @media ${device.phone} {
    left: ${({ theme }) => theme.spacing.custom.r1_5};
  }
`;

const FooterContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${({ theme }) => `${theme.spacing.custom.r3} ${theme.spacing.custom.r2_5} 0`};
  margin-top: ${({ theme }) => theme.spacing.sm};

  @media ${device.ipad} {
    margin-top: 0;
  }

  @media ${device.phone} {
    padding: 3rem 1.5rem 0;
  }

  @media screen and (max-width: 780px) {
    display: block;
  }
`;

const ContactPerson = styled.address`
  color: ${({ theme }) => theme.colors.primary.white};
  font-style: normal;
  width: 100%;
  display: flex;

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.custom.r3};
  }

  //   .c-contact__body & {
  //     color: ${({ theme }) => theme.colors.black};
  //     padding: 0;
  //   }

  &:first-child {
    padding-left: 0;
    padding-bottom: ${({ theme }) => theme.spacing.custom.r3};
  }

  &:not(:first-child) {
    border-bottom: 0.1rem dashed rgba(255, 255, 255, 0.3);

    .c-contact__body & {
      border-bottom: 0.1rem dashed rgba(44, 60, 74, 0.3);
      margin-bottom: ${({ theme }) => theme.spacing.custom.r3};
    }
  }

  &:last-child {
    padding-right: 0;
    border-bottom: 0;

    @media screen and (max-width: 780px) {
      padding-left: 0;
    }

    .c-contact__body & {
      margin-bottom: 0;
    }
  }

  a {
    color: $c-white;
    font-size: ${({ theme }) => theme.font.size.body.md};
    position: relative;
    display: inline-block;
    line-height: 1;
    text-decoration: none;

    // .c-contact__body & {
    //   color: ${({ theme }) => `rgba(${theme.colorRgb.brandSecondary})`};
    // }

    &:after {
      content: "";
      position: absolute;
      top: 100%;
      right: 0;
      width: 100%;
      height: 0.1rem;
      background-color: rgba(255, 255, 255, 0.25);
      transition: ease all 0.25s;

      //   .c-contact__body & {
      //     background-color: rgba(0, 0, 0, 0.25);
      //   }
    }

    &:hover,
    &:focus {
      .c-contact__body & {
        color: darken(142, 210, 220, 0.3);
      }

      &:after {
        background-color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
        transition: ease all 0.25s;

        // .c-contact__body & {
        //   background-color: darken(142, 210, 220, 0.3);
        // }
      }
    }
  }

  figure {
    margin: 0;
    margin-right: 1rem;
    position: relative;

    @media ${device.phone} {
      margin-bottom: 1.2rem;
    }
  }

  @media screen and (max-width: 780px) {
    display: block;
    width: 100%;
    border-right: 0;
    border-bottom: 0.1rem dashed rgba(255, 255, 255, 0.3);
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

const ContactPersonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media ${device.phone} {
    text-align: center;
    justify-content: center;
  }
`;

const StyledFigure = styled.figure``;

const PersonImage = styled(Image)`
  max-width: ${({ theme }) => theme.spacing["5xl"]};
`;

const ContactPersonDetails = styled.div`
  @media ${device.phone} {
    width: 100%;
  }
`;

const ContactPersonName = styled.h3`
  color: ${({ theme }) => theme.colors.primary.white};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.font.size.display.xs};
  letter-spacing: -0.1rem;
  margin-bottom: 0;

  .c-contact__body & {
    color: ${({ theme }) => theme.colors.primary.black};
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }

  span {
    font-family: ${({ theme }) => theme.fonts.body};
    opacity: 0.5;

    // .c-contact__body & {
    //   opacity: 0.9;
    // }
  }
`;

const ContactPersonAddress = styled.address`
  color: rgba(255, 255, 255, 0.5);
  font-style: normal;
  font-size: ${({ theme }) => theme.font.size.body.md};
  display: block;
  margin-bottom: 1.1rem;
  line-height: 1.6;

  //   .c-contact__body & {
  //     color: rgba(44, 60, 74, 0.5);
  //   }
`;

const ContactPersonLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;

  @media ${device.phone} {
    text-align: center;
    justify-content: center;
  }
`;

const ContactPersonLinkItem = styled.div`
  color: ${({ theme }) => theme.colors.primary.white};
  font-size: ${({ theme }) => theme.font.size.body.md};
  position: relative;
  display: inline-block;
  line-height: 1;
`;

const ContactPersonPhone = styled.a`
  color: ${({ theme }) => theme.colors.primary.white};
`;

const FooterLink = styled.a`
  font-size: ${({ theme }) => theme.font.size.body.sm};
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: normal;
  color: ${({ theme }) => theme.colors.primary.white};
  text-decoration: none;
  margin-top: ${({ theme }) => theme.spacing.custom.r3_6};
  display: inline-block;
  line-height: 1.1;

  &:hover,
  &:focus {
    color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
  }

  @media screen and (max-width: 780px) {
    margin-top: ${({ theme }) => theme.spacing.custom.r2_5};
  }
`;

export {
  ContactPerson,
  ContactPersonAddress,
  ContactPersonDetails,
  ContactPersonLinkItem,
  ContactPersonLinks,
  ContactPersonName,
  ContactPersonPhone,
  ContactPersonWrapper,
  Copyright,
  Footer,
  FooterContact,
  FooterContactInner,
  FooterContactWrapper,
  FooterContainer,
  FooterLink,
  FooterMenu,
  FooterNav,
  FooterTitle,
  FooterWrapper,
  ListItem,
  PersonImage,
  StyledFigure,
  StyledLink,
  StyledLinkButton,
};
