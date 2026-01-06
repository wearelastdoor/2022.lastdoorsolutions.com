"use client";

import { device } from "@/styles/theme/breakpoints";

import styled from "styled-components";

const PastClientsWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.white};
  margin: ${({ theme }) => `${theme.spacing.custom.r1_5} 0`};
  padding: ${({ theme }) => `${theme.spacing.custom.r1_5} 0 ${theme.spacing.custom.r1_5} ${theme.spacing.xl}`};

  /* ---- react-slick internal classes ---- */
  .slick-track {
    display: flex;
    align-items: center;

    > div {
      margin-right: ${({ theme }) => theme.spacing.custom.r5};
      height: auto;

      @media ${device.tablet} {
        margin-right: ${({ theme }) => theme.spacing.custom.r3};
      }

      @media ${device.phone} {
        margin-right: ${({ theme }) => theme.spacing.lg};
      }

      > div {
        display: flex;
        align-items: center;
      }
    }
  }
`;

const Logo = styled.div<{ width: number }>`
  width: ${({ width }) => width};
  height: auto;
`;

const StyledImage = styled.img``;

export { PastClientsWrapper, Logo, StyledImage };
