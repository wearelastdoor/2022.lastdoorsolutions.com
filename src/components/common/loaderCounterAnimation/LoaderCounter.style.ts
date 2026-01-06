"use client";

import styled from "styled-components";

const Loader = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: linear-gradient(135.23deg, ${({ theme }) => theme.color.brandAlt} 0.2%, ${({ theme }) => theme.color.brand} 99.79%);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100001;
  opacity: 1;
`;

const LoaderCounter = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: ${({ theme }) => theme.color.white};
  font-size: clamp(3.4rem, 5vw, 5rem);
  font-family: ${({ theme }) => theme.fonts.black};
  line-height: 1;
  width: 100%;
  text-align: center;
  opacity: 0;

  &.visible {
    animation: fadeIn 200ms ease forwards;
  }

  span {
    letter-spacing: -0.3rem;
    display: inline-block;
    vertical-align: middle;
    font-weight: normal;
    font-size: clamp(5.7rem, 5vw, 8.9rem);
    margin-bottom: -0.3rem;

    @media screen and (max-width: 640px) {
      letter-spacing: -0.1rem;
    }
  }

  sub {
    left: 0.4rem;
    bottom: -1rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      pointer-events: none;
      opacity: 0;
    }
  }
`;

const StyledSpan = styled.span``;

export { Loader, LoaderCounter, StyledSpan };
