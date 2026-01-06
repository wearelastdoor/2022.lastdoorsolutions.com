import { device } from "@/styles/theme/breakpoints";
import { p } from "framer-motion/client";
import Image from "next/image";
import styled from "styled-components";

const Client = styled.section`
  background-color: transparent;
  position: relative;
  z-index: 1;
  margin-top: -13rem;
  padding-bottom: 8rem;

  @media ${device.smallScreen} {
    padding-bottom: 6rem;
  }

  @media ${device.phone} {
    margin-top: -25rem;
  }
`;

const ClientContainer = styled.div`
  max-width: 120rem;
  margin: auto;
  padding: 0 2rem;

  @media ${device.tablet} {
    padding-left: 8rem;
    padding-right: 0;
  }

  @media screen and (max-width: 480px) {
    padding-left: 4rem;
    padding-right: 0;
  }
`;

const Header = styled.header`
padding-right: 15.3rem;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding-top: 6.0rem;

  @media ${device.tablet} {
    padding-right: 6.8rem;
  }

  @media ${device.phone} {
    padding-right: 4.8rem;
    padding-top: 2.0rem;
  }

  &:after {
    content: "";
    position: absolute;
    right: 6.5rem;
    top: 0;
    bottom: -42.6rem;
    z-index: -2;
    display: block;
    left: -999%;
    background-color: ${({ theme }) => theme.colors.primary.gray[50]};

    @media ${device.tablet} {
      right: 2.0rem;
    }`;

const HeaderContent = styled.div`
  max-width: 77rem;
  width: 100%;
  padding: 4.2rem 0 6rem;
  position: relative;
  z-index: 1;

  @media ${device.tablet} {
    max-width: 42rem;
  }

  @media screen and (max-width: 768px) {
    max-width: 30rem;
  }

  @media ${device.phone} {
    padding-bottom: 3.5rem;
  }

  &:after {
    content: "";
    left: 1rem;
    bottom: 1.5rem;
    width: 0.2rem;
    background-color: ${({ theme }) => theme.colors.primary.white};
    display: none;
    position: absolute;
    z-index: -1;
    height: 12rem;

    @media screen and (max-width: 480px) {
      display: block;
    }
  }
`;

const Leadtext = styled.h2`
  font-size: ${({ theme }) => theme.font.size.body.sm};
  line-height: calc(17 / 14);
  letter-spacing: calc(36 / 1000 * 1.4rem);
  color: rgba(255, 255, 255, 0.5);
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  display: block;
  margin-bottom: 1.4rem;
  text-transform: uppercase;
`;

const ClientTitle = styled.h3`
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
  margin-bottom: 0;

  @media ${device.phone} {
    letter-spacing: -0.33rem;
    max-width: min(26.4rem, 100%);
  }

  &:before {
    content: "";
    width: 7.2rem;
    background-color: transparent;
    right: calc(100% + 0.8rem);
    border-width: 0.2rem 0 0.2rem 0.2rem;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.white};
    display: block;
    position: absolute;
    top: 14rem;
    bottom: -48.4rem;

    @media ${device.tablet} {
      top: 9rem;
      width: 4rem;
      bottom: -34rem;
    }

    @media screen and (max-width: 480px) {
      display: none;
    }
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
    -webkit-text-stroke: 0.1rem rgba(94, 139, 149, 0.5);

    @media ${device.phone} {
      transform: translate(0.3rem, 0.3rem) translateZ(0);
    }
  }
`;

const ClientDescription = styled.p`
  margin-top: 2.5rem;
  margin-bottom: 0;
  font-size: clamp(2rem, 3vw, 3.8rem);
  letter-spacing: -0.1rem;
  max-width: 48.5rem;
  color: #c4e9ff;
  line-height: calc(45 / 38);

  @media screen and (max-width: 480px) {
    padding-left: 3.2rem;
  }
`;

const ClientImageWrapper = styled.figure`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: absolute;
  z-index: -1;
  right: 11rem;
  bottom: 0;

  @media ${device.tablet} {
    right: 4rem;
  }

  @media ${device.phone} {
    bottom: -6.7rem;
    right: 3rem;
    opacity: 0.6;
    display: none;
  }

  img {
    max-height: 43.4rem;

    @media ${device.header} {
      max-height: 30rem;
    }

    @media ${device.phone} {
      max-height: 26.1rem;
    }
  }
`;

const StyledImage = styled(Image)``;

const ClientCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  padding: 7.5rem;
  position: relative;
  z-index: 2;

  @media ${device.tablet} {
    padding: 6rem 4rem;
  }

  @media ${device.phone} {
    padding: 4rem 3rem;
  }
`;

const CardGrid = styled.div`
  display: flex;
  gap: 4.5rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;

const ClientList = styled.div``;

const ClientLogo = styled.img`
  display: flex;
  align-items: flex-end;
  margin-bottom: 1.5rem;
`;

const ClientIntro = styled.div`
  text-align: center;
  border-top: 0.1rem solid rgba(23, 33, 42, 0.25);
  position: relative;
  z-index: 1;
  padding: 4rem 0 0;
  margin-top: 2.5rem;

  &::after {
    content: "";
    position: absolute;
    top: 0.6rem;
    border-top: 0.1rem solid rgba(23, 33, 42, 0.25);
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

const ClientDetails = styled.div`
  font-size: ${({ theme }) => theme.font.size.display.sm};
  letter-spacing: -0.064rem;
  line-height: calc(35 / 24);
  max-width: 87rem;
  width: 100%;
  margin: 0 auto 4rem;
`;

const DetailDescription = styled.p`
  &:last-child {
    margin-bottom: 0;
    line-height: 1.465;
  }
`;

const Link = styled.a``;

export {
  CardGrid,
  Client,
  ClientCard,
  ClientContainer,
  ClientDescription,
  ClientDetails,
  ClientImageWrapper,
  ClientIntro,
  ClientList,
  ClientLogo,
  ClientTitle,
  DetailDescription,
  Header,
  HeaderContent,
  Image,
  Leadtext,
  Link,
  StyledImage,
};
