"use client";
import { device } from "@/styles/theme/breakpoints";
import styled, { css } from "styled-components";

const Overlay = styled.div`
  cursor: pointer;
`;

const AnimateOverlay = styled.div<{ $variant: string }>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100001;
  top: 0;
  left: 0;
  clip-path: inset(0% 0% 0% 100%);
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ $variant }) =>
    $variant === "animate-overlay--first" &&
    css`
      background-color: #8ed2dc;
    `}

  ${({ $variant }) =>
    $variant === "animate-overlay--second" &&
    css`
      background-color: #dca08e;
    `}

  ${({ $variant }) =>
    $variant === "animate-overlay--third" &&
    css`
      background-color: #8edc97;
    `}
`;

const AnimateOverlayLoader = styled.div<{ $variant?: string }>`
  // margin-bottom: -10.0rem;

  animation: rotate 2s linear infinite;

  ${({ $variant }) =>
    $variant === "animate-overlay--first" &&
    css`
      animation: bounce 1.2s ease-in-out infinite;
    `}
  svg {
    @media ${device.phone} {
      transform: scale(0.6) translateZ(0);
      backface-visibility: hidden;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes bounce {
    0%,
    20%,
    53%,
    80%,
    100% {
      transform: translateY(0);
    }

    40%,
    43% {
      transform: translateY(-40px);
    }

    70% {
      transform: translateY(-15px);
    }

    90% {
      transform: translateY(-4px);
    }
  }
`;

export { AnimateOverlay, AnimateOverlayLoader, Overlay };
