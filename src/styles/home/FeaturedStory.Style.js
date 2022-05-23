import Styled from 'styled-components'
import PatternImage from 'images/texture.png'

export const FeaturedStoryWrapper = Styled.section`
  padding: 0 0 50px;
`

export const FeaturedStoryContentWrapper = Styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: flex-end;
`

export const FeaturedStoryMedia = Styled.div`
  padding: clamp(2.25rem, 5vw, 6.25rem) 0 clamp(2.25rem, 5vw, 6.25rem);
  position: relative;
  z-index: 1;

  + ${FeaturedStoryContentWrapper} {
    --gap: -27.5rem;

    @media screen and (max-width: 1200px) {
      --gap: -17.5rem;
    }
    @media screen and (max-width: 960px) {
      --gap: -7.5rem;
    }
    @media screen and (max-width: 640px) {
      --gap: -3.5rem;
    }
    @media screen and (max-width: 480px) {
      --gap: 0;
    }
    margin-top: var(--gap);
  }
`

export const FeaturedStoryBG = Styled.span`
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: -999%;
  right: 50%;
  background-color: rgb(var(--c-alt));
    @media screen and (max-width: 640px) {
    right: -20%;
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
  }
`

export const FeaturedStoryImageWrapper = Styled.figure`
  position: relative;
  z-index: 1;
  box-shadow: 0 30px 60px rgba(var(--c-black), .1);
  max-width: 970px;
  width: 100%;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(24,34,43, .5);
  }
`

export const FeaturedStoryImage = Styled.img`
  position: absolute;
  top: 43px;
  left: 50px;
  z-index: 2;
  width: 100%;

  @media screen and (max-width: 640px) {
    top: 20px;
    left: 20px;
    max-width: 120px !important;
  }
`
export const FeaturedStoryContent = Styled.div`
 padding: 80px 0 80px 80px;
  max-width: 820px;
  width: 100%;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 960px) {
    padding: 60px 40px;
    max-width: 640px;
  }

  @media screen and (max-width: 640px) {
    padding: 40px;
  }

  @media screen and (max-width: 420px) {
    padding: 20px;
  }

  &:after, &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    height: 100%;
    display: block;
    right: -999%;
  }

  &:before {
    background-color: rgb(var(--c-white));
    background-image: url(${PatternImage});
    background-repeat: repeat;
    box-shadow: 0 30px 60px rgba(var(--c-black), .1);
  }

  &:after {
    border: 1px solid rgb(var(--c-primary));
    top: 5px;
    left: -5px;
    z-index: -2;
  }
`
export const FeaturedStorySubtitle = Styled.strong`
font-size:14px;
line-height: 1.21;
letter-spacing: 0.504px;
  color: rgba(var(--c-brand-primary), 0.5);
  font-family: var(--ff-primary-black);
  font-weight: normal;
  margin-bottom: 11px;
  text-transform: uppercase;
  display: block;
  @media screen and (max-width: 1199px) {
    margin-bottom: 5px;
  }
`
export const FeaturedStoryTitle = Styled.h2`
  font-size: clamp(3.125rem, 8vw, 5.9375rem);
  font-family: var(--ff-primary-black);
  font-weight: normal;
  color: rgb(var(--c-brand-primary));
  display: inline-block;
  vertical-align: top;
  letter-spacing: -6px;
  line-height: 1;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 640px) {
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
        -webkit-text-stroke: 1px rgb(var(--c-primary));
        text-stroke: 1px rgb(var(--c-primary));
        text-shadow: none;
        }

  @media screen and (max-width: 640px) {
      transform: translate(3px, 3px) translateZ(0);
    }
  }
`

export const FeaturedStoryDescription = Styled.div`
  margin-bottom: 40px;
  max-width: 530px;
`