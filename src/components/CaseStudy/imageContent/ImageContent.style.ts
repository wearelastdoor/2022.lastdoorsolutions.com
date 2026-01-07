"use client";

import { device } from "@/styles/theme/breakpoints";
import Image from "next/image";
import styled, { css } from "styled-components";

const ImageContent = styled.section<{ $themetype?: string }>`
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.color.brandSecondary};
  padding: 8.6rem 0;
  background-color: ${({ theme, $themetype }) =>
    $themetype === "dark"
      ? theme.colors.primary.gray[50]
      : theme.colors.secondary.purple[50]};

  color: ${({ theme, $themetype }) =>
    $themetype === "dark" ? theme.colors.white : theme.colors.primary.gray[50]};

  @media ${device.phone} {
    padding: 4.6rem 0 6rem;
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
`;

const StyledContainer = styled.div<{ $layout?: string }>`
  margin: 0 auto;
  max-width: 120rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  ${({ $layout }) =>
    $layout === "reversed" &&
    css`
      flex-direction: row-reverse;
    `}
`;

const MainContent = styled.div`
  width: 43.16239%;

  @media ${device.tablet} {
    width: 48%;
  }
  @media ${device.phone} {
    width: 100%;
    margin-bottom: 4rem;
  }
`;

const ContentTitle = styled.h2<{ $themetype?: string }>`
  letter-spacing: -0.3rem;
  font-size: clamp(3rem, 5vw, 4.6rem);
  max-width: min(37rem, 100%);
  line-height: 1;
  margin-bottom: 2.8rem;
  font-family: ${({ theme }) => theme.fonts.black};
  color: ${({ theme }) => theme.colors.support.promoRed[400]};

  @media ${device.tablet} {
    letter-spacing: -0.1rem;
  }
`;

const ContentDescription = styled.div`
  font-size: clamp(2.04rem, 3vw, 3.8rem);
  line-height: 1.447;
  letter-spacing: -0.18rem;

  @media ${device.tablet} {
    letter-spacing: -0.1rem;
  }

  @media ${device.phone} {
    letter-spacing: -0.05rem;
  }

  p {
    margin-bottom: 0;
    line-height:1.447;
    &:not(:last-of-type) {
      margin-bottom: 3rem;
    }
  }
`;

const ContentImage = styled.div`
  width: 43%;

  @media ${device.tablet} {
    width: 48%;
  }

  @media ${device.phone} {
    width: 100%;
  }
`;

const ContentImageInner = styled.div`
  @media ${device.phone} {
    max-width: min(36rem, 100%);
    width: 100%;

    img {
      max-width: 36rem;
    }
  }
`;

const StyledImage = styled(Image)``;

export {
  ContentDescription,
  ContentImage,
  ContentImageInner,
  ContentTitle,
  ImageContent,
  MainContent,
  StyledContainer,
  StyledImage,
};
