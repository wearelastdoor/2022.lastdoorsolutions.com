"use client";

import styled from "styled-components";
import { device } from "@/styles/theme/breakpoints";

const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const NotFoundContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) =>
    `${theme.spacing["3xl"]} ${theme.spacing.container}`};
  max-width: ${({ theme }) => theme.layout.containerWidth};
  margin: 0 auto;
  width: 100%;

  @media ${device.phone} {
    padding: ${({ theme }) =>
      `${theme.spacing["2xl"]} ${theme.spacing.container}`};
  }
`;

const NotFoundDescription = styled.div`
  font-size: ${({ theme }) => theme.font.size.display.md};
  line-height: 1.615;
  letter-spacing: -0.05rem;
  margin-bottom: ${({ theme }) => theme.spacing["2xl"]};

  @media ${device.phone} {
    font-size: ${({ theme }) => theme.font.size.body.xl};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

const NotFoundParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.display.md};
  line-height: 1.615;
  letter-spacing: -0.05rem;
  margin-bottom: 0;

  @media ${device.phone} {
    font-size: ${({ theme }) => theme.font.size.body.xl};
  }
`;

const InlineLink = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  color: ${({ theme }) => theme.colors.links.link};
  text-decoration: underline;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  display: inline;
  line-height: inherit;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.links.linkHover};
  }
`;

const ButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: 4rem 0;

  @media ${device.phone} {
    margin-top: ${({ theme }) => theme.spacing.lg};
    padding: 2rem 0;
  }
`;

export {
  NotFoundContainer,
  NotFoundContent,
  NotFoundDescription,
  NotFoundParagraph,
  InlineLink,
  ButtonContainer,
};
