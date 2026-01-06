"use client";

import { device } from "@/styles/theme/breakpoints";
import styled from "styled-components";

const Quote = styled.div<{ $themetype: string }>`
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.color.brandSecondary};
  padding: 6.6rem 0;
  text-align: center;
  background-color: ${({ theme, $themetype }) =>
    $themetype === "dark"
      ? theme.colors.primary.gray[50]
      : theme.colors.secondary.purple[50]};

  color: ${({ theme, $themetype }) =>
    $themetype === "dark" ? theme.colors.white : theme.colors.primary.gray[50]};

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
  margin: 0 auto;
  max-width: 120rem;
  padding: 0 2rem;
  border-width: 0.4rem 0;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.09);
  padding: 10.2rem 2.4rem 7.7rem;
  max-width: 117rem;

  @media ${device.phone} {
    padding: 7.2rem 2rem 3.7rem;
  }
`;

const BlockQuote = styled.blockquote`
  font-size: clamp(2.4rem, 4vw, 3.8rem);
  letter-spacing: -0.1rem;
  @include line-height(3.8rem, 5.5rem);
  font-family: ${({ theme }) => theme.fonts.black};
  padding: 0;
  font-style: normal;
  border: none;
  display: inline-block;
  vertical-align: top;
  margin: 0 auto clamp(2.1rem, 8vw, 3.1rem);
  max-width: min(72rem, 100%);
  line-height:1.4473684211;

  @media ${device.phone} {
    letter-spacing: -0.05rem;
  }

  &:after,
  &:before {
    display: inline-block;
    vertical-align: bottom;
    color: ${({ theme }) => theme.colorVars.error};
    font-size: clamp(4rem, 7vw, 6rem);
    position: relative;
    line-height: calc(55 / 60);
  }

  &:before {
    content: "“";
    margin-right: 0.9rem;
  }

  &:after {
    content: "”";
    margin-left: 0.8rem;
  }
`;

const QuoteMeta = styled.div``;

const QuoteUser = styled.cite`
  font-size: ${({ theme }) => theme.font.size.body.xl};
  letter-spacing: -0.05rem;
  font-style: normal;
  line-height: 1.6;
`;

const QuoteDesignation = styled.p<{ $themetype: string }>`
  font-size: ${({ theme }) => theme.font.size.body.sm};
  font-family: ${({ theme }) => theme.fonts.black};
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  line-height: 1.6;
  color: ${({ theme, $themetype }) =>
    $themetype === "dark" ? "rgba(255,255,255, 0.5)" : "rgba(23, 33, 42, 0.5)"};
`;

export {
  BlockQuote,
  Quote,
  QuoteDesignation,
  QuoteMeta,
  QuoteUser,
  StyledContainer,
};
