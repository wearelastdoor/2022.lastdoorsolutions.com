"use client";

import { device } from "@/styles/theme/breakpoints";
import styled from "styled-components";

const Mediabook = styled.section`
  background-color: ${({ theme }) => theme.colorVars.error};
  position: relative;
  z-index: 1;
  padding: ${({ theme }) => `${theme.spacing["4xl"]} 0 ${theme.spacing["5xl"]}`};
  text-align: center;
  @media ${device.tablet} {
    padding-top: 16rem;
  }
  @media ${device.phone} {
    padding-bottom: 23.4rem;
  }
`;

const StyledContainer = styled.div`
  padding-inline: ${({ theme }) => theme.spacing.custom.r2};
`;

const MediaBookLogo = styled.div`
  margin: auto;
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
  width: 20.5rem;
  height: auto;

  @media ${device.tablet} {
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
  }
`;

const StyledImage = styled.img``;

const Showcase = styled.div`
  max-width: 100.4rem;
  height: auto;
  margin: auto;
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};

  @media ${device.tablet} {
    margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
  }

  @media ${device.phone} {
    margin-bottom: ${({ theme }) => theme.spacing.custom.r3};
  }
`;

const MediabookContent = styled.div`
  color: ${({ theme }) => theme.colors.white};
  max-width: min(77rem, 100%);
  margin: 0 auto;
`;

const MediaBookTitle = styled.h2`
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
  margin: ${({ theme }) => `${theme.spacing.xl} auto ${theme.spacing["3xl"]}`};
  max-width: min(64rem, 100%);

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

const MediaBookDescription = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing["2xl"]};
`;

const Description = styled.p``;

const MediabookList = styled.ul`
  display: inline-block;
  list-style: none;
  text-align: left;
  margin: 0 auto;
`;

const ListItem = styled.li`
  padding-left: ${({ theme }) => theme.spacing["2xl"]};
  position: relative;
  z-index: 1;
  font-size: 1.5rem;
  line-height: calc(23 / 15);
    &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }

  .icon {
    height: 2rem;
    width: 2rem;
    position: absolute;
    left: 0;
  }
`;

export {
  Description,
  ListItem,
  Mediabook,
  MediaBookDescription,
  MediaBookLogo,
  MediaBookTitle,
  MediabookContent,
  MediabookList,
  Showcase,
  StyledContainer,
  StyledImage,
};
