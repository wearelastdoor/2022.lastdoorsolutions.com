"use client";

import styled, { css } from "styled-components";

const easeout = css`
  -webkit-transition: ease-out all 0.2s;
  -moz-transition: ease-out all 0.2s;
  -ms-transition: ease-out all 0.2s;
  -o-transition: ease-out all 0.2s;
  transition: ease-out all 0.2s;
`;

const ButtonLink = styled.a<{ type?: string }>`
  text-decoration: none;
  box-shadow: none;
  border: 0;
  border-radius: 0;
  background-color: ${({ theme }) => theme.colors.buttons.background};
  color: ${({ theme }) => theme.colors.primary.gray[50]};
  letter-spacing: 0;
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: normal;
  font-size: ${({ theme }) => theme.font.size.body.sm};
  line-height: 1.142;
  padding: 2.4rem 6rem 2.1rem;
  letter-spacing: -0.04rem;
  pointer-events: all;
  cursor: pointer;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 767px) {
    padding: 1.9rem 4rem 1.6rem;
  }

  ${easeout}

  span {
    position: absolute;
    left: 0;
    overflow: hidden;
    height: 100%;
    top: 0;
    z-index: -2;
    width: 100%;

    &:after,
    &:before {
      content: "";
      height: 106%;
      width: 100%;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      transform: skewY(168deg);
      background-color: ${({ theme }) => `rgba(${theme.colorRgb.primary})`};
      transition: transform 1s cubic-bezier(0.2, 1, 0.3, 1);
    }

    &:after {
      transform-origin: left top;
      transform: skewY(168deg) translateY(-100%);
    }

    &:before {
      transform-origin: right bottom;
      transform: skewY(168deg) translateY(100%);
    }
  }

  &:after,
  &:before {
    content: "";
    height: 1rem;
    width: 1rem;
    background-color: transparent;
    position: absolute;
    z-index: -1;
    display: block;
    border-color: ${({ theme }) => theme.colors.buttons.border};
    border-style: solid;
    transition: all 600ms cubic-bezier(0.2, 1, 0.3, 1);
  }

  &:after {
    left: 0;
    top: 0;
    border-width: 0.2rem 0 0 0.2rem;
  }

  &:before {
    bottom: 0;
    right: 0;
    border-width: 0 0.2rem 0.2rem 0;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary.gray[50]};

    &:after,
    &::before {
      height: 100%;
      width: 100%;
      border-color: ${({ theme }) => theme.colors.primary.gray[50]};
    }

    span {
      &:after {
        transform: translateY(0);
      }

      &:before {
        transform: translateY(0);
      }
    }
  }

  ${({ type }) =>
    type === "light-dark" &&
    css`
      background: ${({ theme }) => `rgba(${theme.colorRgb.brandAlt})`};
      color: ${({ theme }) => theme.color.primary};

      &:after,
      &:before {
        border-color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
      }

      span {
        &:after,
        &:before {
          background-color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
        }
      }

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.primary.gray[50]};

        &:after,
        &::before {
          height: 100%;
          width: 100%;
          border-color: ${({ theme }) => `rgba(${theme.colorRgb.primary})`};
        }

        span {
          &:after {
            transform: translateY(0);
          }

          &:before {
            transform: translateY(0);
          }
        }
      }
    `}

  ${({ type }) =>
    type === "dark" &&
    css`
      background: ${({ theme }) => theme.colors.primary.gray[50]};
      color: ${({ theme }) => theme.color.primary};

      &:after,
      &:before {
        border-color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
      }

      span {
        &:after,
        &:before {
          background-color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
        }
      }

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.primary.gray[50]};

        &:after,
        &::before {
          height: 100%;
          width: 100%;
          border-color: ${({ theme }) => `rgba(${theme.colorRgb.primary})`};
        }

        span {
          &:after {
            transform: translateY(0);
          }

          &:before {
            transform: translateY(0);
          }
        }
      }
    `}

    ${({ type }) =>
    type === "dark-alt" &&
    css`
      background: ${({ theme }) => theme.colors.primary.gray[50]};
      color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};

      &:after,
      &:before {
        border-color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
      }

      span {
        &:after,
        &:before {
          background-color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
        }
      }

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.primary.gray[50]};

        &:after,
        &::before {
          height: 100%;
          width: 100%;
          border-color: ${({ theme }) => `rgba(${theme.colorRgb.primary})`};
        }

        span {
          &:after {
            transform: translateY(0);
          }

          &:before {
            transform: translateY(0);
          }
        }
      }
    `}

    ${({ type }) =>
    type === "light" &&
    css`
      background: ${({ theme }) => `rgba(${theme.colorRgb.secondary})`};
      color: ${({ theme }) => theme.colors.primary.gray[50]};

      span {
        &:after,
        &:before {
          background: ${({ theme }) => `rgba(${theme.colorRgb.brandAlt})`};
        }
      }

      &:hover,
      &:focus {
        color: ${({ theme }) => `rgba(${theme.colorRgb.primary})`};

        &:after,
        &:before {
          border-color: ${({ theme }) => `rgba(${theme.colorRgb.primary})`};
        }
      }
    `}
    
    ${({ type }) =>
    type === "disabled" &&
    css`
      background: ${({ theme }) => `rgba(${theme.colorRgb.secondary})`};
      pointer-events: none;
      opacity: 0.5;
      cursor: default;
      user-select: none;
    `}
`;

const Button = styled.button<{ type?: string }>`
  text-decoration: none;
  box-shadow: none;
  border: 0;
  border-radius: 0;
  background-color: ${({ theme }) => theme.colors.buttons.background};
  color: ${({ theme }) => theme.colors.primary.gray[50]};
  letter-spacing: 0;
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: normal;
  font-size: ${({ theme }) => theme.font.size.body.sm};
  line-height: 1.142;
  padding: 2.4rem 6rem 2.1rem;
  letter-spacing: -0.04rem;
  pointer-events: all;
  cursor: pointer;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 767px) {
    padding: 1.9rem 4rem 1.6rem;
  }

  ${easeout}

  span {
    position: absolute;
    left: 0;
    overflow: hidden;
    height: 100%;
    top: 0;
    z-index: -2;
    width: 100%;

    &:after,
    &:before {
      content: "";
      height: 106%;
      width: 100%;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      transform: skewY(168deg);
      background-color: ${({ theme }) => `rgba(${theme.colorRgb.primary})`};
      transition: transform 1s cubic-bezier(0.2, 1, 0.3, 1);
    }

    &:after {
      transform-origin: left top;
      transform: skewY(168deg) translateY(-100%);
    }

    &:before {
      transform-origin: right bottom;
      transform: skewY(168deg) translateY(100%);
    }
  }

  &:after,
  &:before {
    content: "";
    height: 1rem;
    width: 1rem;
    background-color: transparent;
    position: absolute;
    z-index: -1;
    display: block;
    border-color: ${({ theme }) => theme.colors.buttons.border};
    border-style: solid;
    transition: all 600ms cubic-bezier(0.2, 1, 0.3, 1);
  }

  &:after {
    left: 0;
    top: 0;
    border-width: 0.2rem 0 0 0.2rem;
  }

  &:before {
    bottom: 0;
    right: 0;
    border-width: 0 0.2rem 0.2rem 0;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary.gray[50]};

    &:after,
    &::before {
      height: 100%;
      width: 100%;
      border-color: ${({ theme }) => theme.colors.primary.gray[50]};
    }

    span {
      &:after {
        transform: translateY(0);
      }

      &:before {
        transform: translateY(0);
      }
    }
  }

  ${({ type }) =>
    type === "light-dark" &&
    css`
      background: ${({ theme }) => `rgba(${theme.colorRgb.brandAlt})`};
      color: ${({ theme }) => theme.color.primary};

      &:after,
      &:before {
        border-color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
      }

      span {
        &:after,
        &:before {
          background-color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
        }
      }

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.primary.gray[50]};

        &:after,
        &::before {
          height: 100%;
          width: 100%;
          border-color: ${({ theme }) => `rgba(${theme.colorRgb.primary})`};
        }

        span {
          &:after {
            transform: translateY(0);
          }

          &:before {
            transform: translateY(0);
          }
        }
      }
    `}

  ${({ type }) =>
    type === "dark" &&
    css`
      background: ${({ theme }) => theme.colors.primary.gray[50]};
      color: ${({ theme }) => theme.color.primary};

      &:after,
      &:before {
        border-color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
      }

      span {
        &:after,
        &:before {
          background-color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
        }
      }

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.primary.gray[50]};

        &:after,
        &::before {
          height: 100%;
          width: 100%;
          border-color: ${({ theme }) => `rgba(${theme.colorRgb.primary})`};
        }

        span {
          &:after {
            transform: translateY(0);
          }

          &:before {
            transform: translateY(0);
          }
        }
      }
    `}

    ${({ type }) =>
    type === "dark-alt" &&
    css`
      background: ${({ theme }) => theme.colors.primary.gray[50]};
      color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};

      &:after,
      &:before {
        border-color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
      }

      span {
        &:after,
        &:before {
          background-color: ${({ theme }) => `rgba(${theme.colorRgb.tertiary})`};
        }
      }

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.primary.gray[50]};

        &:after,
        &::before {
          height: 100%;
          width: 100%;
          border-color: ${({ theme }) => `rgba(${theme.colorRgb.primary})`};
        }

        span {
          &:after {
            transform: translateY(0);
          }

          &:before {
            transform: translateY(0);
          }
        }
      }
    `}

    ${({ type }) =>
    type === "light" &&
    css`
      background: ${({ theme }) => `rgba(${theme.colorRgb.secondary})`};
      color: ${({ theme }) => theme.colors.primary.gray[50]};

      span {
        &:after,
        &:before {
          background: ${({ theme }) => `rgba(${theme.colorRgb.brandAlt})`};
        }
      }

      &:hover,
      &:focus {
        color: ${({ theme }) => `rgba(${theme.colorRgb.primary})`};

        &:after,
        &:before {
          border-color: ${({ theme }) => `rgba(${theme.colorRgb.primary})`};
        }
      }
    `}
    
    ${({ type }) =>
    type === "disabled" &&
    css`
      background: ${({ theme }) => `rgba(${theme.colorRgb.secondary})`};
      pointer-events: none;
      opacity: 0.5;
      cursor: default;
      user-select: none;
    `}
`;

const StyledSpan = styled.span``;

export { Button, StyledSpan, ButtonLink };
