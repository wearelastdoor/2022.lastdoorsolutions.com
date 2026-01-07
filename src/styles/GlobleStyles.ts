import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.black};
    line-height: 1.1;
  }

  html, html a {
    box-sizing: border-box;
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    color: ${({ theme }) => theme.color.black};
    background: ${({ theme }) => theme.color.background};
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
    margin: 0;
    padding: 0;
    font-size: 20px;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
    pointer-events: none;

    &.content-loaded {
      overflow-y: auto;
      pointer-events: all;
    }
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    &:focus {
      outline: none !important;
    }
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all 300ms ease;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin: 0;
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;
  }

  img, figure, svg, iframe {
    vertical-align: top;
  }

  img {
    max-width: 100%;
    height: auto;
    width: auto;
  }

  figure {
    margin: 0;
  }

  p {
    margin-bottom: 2rem;
    line-height: 1.615;
  }

  strong {
    font-weight: 400;
  }

  .clear,
  .entry-content,
  .comment-content,
  .site-header,
  .site-content,
  .site-footer {
    &:before,
    &:after {
      content: "";
      display: table;
    }

    &:after {
      clear: both;
    }
  }

  .page-wrapper {
    position: relative;
    overflow: hidden;
  }

  .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }

  .svgSprite {
    height: 0;
    position: absolute;
    z-index: -99;
    width: 0;
    overflow: hidden;
  }

  button {
    cursor: pointer;
  }

  .c-loader {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: linear-gradient(135.23deg, #2e3f4d 0.2%, #17212a 99.79%);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100001;

    &.completed {
      animation: fadeOut 600ms ease forwards;
    }

    .c-loader__counter {
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
    }
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
