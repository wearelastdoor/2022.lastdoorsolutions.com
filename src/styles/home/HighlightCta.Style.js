import Styled from 'styled-components'
import PatternImage from 'images/texture.png'
import BoxCardLayout from 'images/box-card-layout.svg'

export const CtaWrapper = Styled.section`
  color: rgb(var(--c-white));
  padding: 70px 0 120px;

  @media screen and (max-width: 640px){
    padding: 70px 0;
  }

  .l-container {
    max-width: 1320px;
  }

  &.--dark {
    background-color: rgb(var(--c-brand-secondary));
    position: relative;
    z-index: 1;
    padding: 0 0 220px;
    
  @media screen and (max-width: 640px){
      padding: 0 0 120px;
    }

    &:after {
      content: "";
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
  }
  `
export const CtaHolder = Styled.div`
  padding: 60px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 960px){
    padding: 40px;
  }
  @media screen and (max-width: 640px){
    padding: 20px 0 20px 20px;
    }
  `
export const CtaCard = Styled.div`
  background-color: rgb(var(--c-brand-primary));
  position: relative;
  z-index: 1;
  padding: 139px 60px 40px;
    @media screen and (max-width: 960px){
    padding: 139px 40px 60px;
  }
  @media screen and (max-width: 640px){
    padding: 100px 20px 80px;
  }


  &:after {
    content: '';
    background-image: url(${PatternImage});
    background-repeat: repeat;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: block;
    z-index: -2;
  }

  &:before {
    content: '';
    position: absolute;
    background-image: url(${BoxCardLayout});
    bottom: 0;
    right: 0;
    height: 256px;
    width: 267px;
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center right;
    z-index: -1;

  @media screen and (max-width: 640px){
      transform: scale(.6);
      transform-origin: right bottom;
    }
  }
  `
export const CtaDecoration = Styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  &:after, &:before {
    content: '';
    position: absolute;
    display: block;
  }

  &:after {
    z-index: -1;
    left: 40.9375%;
    position: absolute;
    top: 51.36986%;
    background-color: rgb(var(--c-white));
    right: -999%;
    bottom: -60px;
    
  @media screen and (max-width: 960px){
      bottom: -40px;
    }
    
  @media screen and (max-width: 640px){
      bottom: -20px
    }

    .--dark & {
      background-color: #334656;
    }
  }

  &:before {
    z-index: -2;
    border: 1px solid rgb(var(--c-primary));
    right: 39.375%;
    left: 0;
    top: 0;
    bottom: 0;
  }
`
export const CtaContent = Styled.div`
  max-width: 680px;
  width: 100%;
`
export const CtaTitle = Styled.h2`
  font-size: clamp(2.925rem, 8vw, 5rem);
  font-family: var(--ff-primary-black);
  font-weight: normal;
  color: rgb(var(--c-white));
  display: inline-block;
  vertical-align: top;
  letter-spacing: -6px;
  line-height: 1;
  position: relative;
  z-index: 1;
  margin: 0 auto 29px;
  max-width: min(970px, 100%);

  strong {
    color: rgb(var(--c-tertiary));
  }

  @media screen and (max-width: 960px){
    letter-spacing: -3.3px;
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
    transform: translate(5px, 5px) translateZ(0);
    backface-visibility: hidden;
  
    @supports ((text-stroke: 1px white) or (-webkit-text-stroke: 1px white)) {
        color: transparent;
        -webkit-text-stroke: 1px rgba(var(--c-tertiary), 1);
        text-stroke: 1px rgba(var(--c-tertiary), 1);
        text-shadow: none;
        }

  @media screen and (max-width: 960px){
      transform: translate(3px, 3px) translateZ(0);
    }
  }
`

export const CtaDescription = Styled.div` 
  max-width: 534px;
  width: 100%;
  @media screen and (max-width: 820px) {
    max-width: 420px;
  }
`