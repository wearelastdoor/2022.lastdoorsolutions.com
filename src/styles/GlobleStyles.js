import {createGlobalStyle} from "styled-components"
// Fonts
import CircularStdBlack from "fonts/CircularStd-Black.woff"
import CircularStdBold from 'fonts/CircularStd-Bold.woff'
import CircularStdBook from 'fonts/CircularStd-Book.woff'
import CircularStdBookItalic from 'fonts/CircularStd-BookItalic.woff'

// Pattern Images
import PatternImage from 'images/texture.png'

export const GlobalStyles = createGlobalStyle`
  :root {
    --c-white: 255, 255, 255;
    --c-black: 0, 0, 0;
    --c-brand-primary: 23, 33, 42;
    --c-brand-secondary: 44, 60, 74;
    --c-brand-teriary: 23, 38, 46;
    --c-primary: 142, 210, 220;
    --c-secondary: 240, 246, 240;
    --c-tertiary: 252, 241, 19;
    --c-alt: 142, 220, 151;
    --c-gray-light: 245, 246, 239;
    // Media Queries
    --container: 1200px;
    //font families
    --ff-primary: "CircularStd Book", serif;
    --ff-primary-italic: "CircularStd BookItalic", serif;
    --ff-primary-bold: "CircularStd Bold", serif;
    --ff-primary-black: "CircularStd Black", serif;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  @font-face {
    font-family: "CircularStd Black";
    src: local('CircularStd Black'), local('CircularStd-Black'), url(${CircularStdBlack}) format("woff");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "CircularStd Bold";
    src: local('CircularStd Bold'), local('CircularStd-Bold'), url(${CircularStdBold}) format("woff");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "CircularStd Book";
    src: local('CircularStd Book'), local('CircularStd-Book'), url(${CircularStdBook}) format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "CircularStd-BookItalic";
    src: local('CircularStd BookItalic'), local('CircularStd-BookItalic'), url(${CircularStdBookItalic}) format("woff");
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }

  html, html a {
    box-sizing: border-box;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased;
  }

  body {
    overflow: hidden;
    margin: 0;
    padding: 0;
    font-family: var(--ff-primary);
    font-size: 20px;
    line-height: 1.5;

    &.content-loaded {
      overflow-y: auto;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;

    &:focus {
      outline: none !important;
    }
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
    margin: 0;
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

  a {
    transition: all 300ms ease;
  }

  .l-container {
    margin: 0 auto;
    max-width: var(--container);
    padding: 0 20px;
    position: relative;
    width: 100%;
  }

  .visually-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }

  .svgSprite {
    height: 0;
    position: absolute;
    z-index: -99;
    width: 0;
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

  .cover-link {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1;
    display: block;
    cursor: pointer;
  }

  .texture {
    background-image: url(${PatternImage});
    background-repeat: repeat;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: block;
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
    animation: fadeIn 200ms ease forwards;
    z-index: 99;

    &.completed {
      animation: fadeOut 600ms ease forwards;
    }

    .c-loader__counter {
      color: rgb(var(--c-white));
      font-size: clamp(2.125rem, 5vw, 3.125rem);
      font-family: var(--ff-primary-black);
      line-height: 1;
      width: 100%;
      text-align: center;
      opacity: 0;

      &.visible {
        animation: fadeIn 200ms ease forwards;
      }

      span {
        letter-spacing: -3px;
        display: inline-block;
        vertical-align: middle;
        font-weight: normal;
        font-size: clamp(3.5625rem, 5vw, 5.5625rem);
        margin-bottom: -3px;

        @media screen and (max-width: 640px) {
          letter-spacing: -1px;
        }
      }

      sub {
        left: 4px;
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

  .animate-overlay {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    clip-path: inset(0% 0% 0% 100%);
    display: flex;
    justify-content: center;
    align-items: center;

    .content-loaded & {
      pointer-events: none;
    }

    &.animate-overlay--first {
      background-color: #8ed2dc;
    }

    &.animate-overlay--second {
      background-color: #dca08e;
    }

    &.animate-overlay--third {
      background-color: #8edc97;
    }

    .animate-overlay__loader {
      animation: rotate 2s linear infinite;

      svg {
        @media screen and (max-width: 640px) {
          transform: scale(0.6) translateZ(0);
          backface-visibility: hidden;
        }
      }
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
`

