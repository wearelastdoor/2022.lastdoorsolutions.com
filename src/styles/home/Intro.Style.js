import Styled from 'styled-components'
import patternImage from 'images/texture.png'

export const IntroWrapper = Styled.section`
  background-color: rgb(var(--c-secondary));
  position: relative;
  z-index: 1;
  padding-bottom: 255px;
  
  @media screen and (max-width: 640px) {
    padding-bottom: 420px;
  }
    
  .l-container {
    position: relative;
    z-index: 1;

    @media screen and (max-width: 640px) {
      padding-top: 207px;
    }
   }
`
export const IntroOverlayBg = Styled.span`
  z-index: -1;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 160px;
    background-color: rgb(var(--c-primary));
    display: block;

    &:after {
      content: "";
      background-image: url(${patternImage});
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
export const IntroCard = Styled.div`
  position: relative;
  z-index: 1;
  background-color: rgba(var(--c-white), 1);
  padding: 73px 150px 50px 90px;
  box-shadow: 0 30px 60px rgba(var(--c-black), 0.1);
  max-width: 630px;
  width: 100%;

  @media screen and (max-width: 960px) {
    max-width: 460px;
    padding: 73px 115px 60px 70px;
  }

  @media screen and (max-width: 640px) {
    padding: 50px 35px 108px 60px;
  }

  &:before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    display: block;
    top: 0;
    left: 0;
    background-color: rgb(var(--c-white));
  }

  &:after {
    content: "";
    top: 5px;
    left: 5px;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -2;
    display: block;
    border: 1px solid #fcf113;
  }
`

export const IntroTitle = Styled.h2`
    font-size: clamp(2.125rem, 6vw, 2.875rem);
    line-height: 1;
    font-family: var(--ff-primary-black);
    letter-spacing: -3px;
    color: rgb(var(--c-brand-primary));
    font-weight: normal;
    margin-bottom: 35px;

  @media screen and (max-width: 640px) {
      letter-spacing: -2.2px;
      margin-bottom: 30px;
    }
`
export const IntroList = Styled.ul`
  list-style: none;
  max-width: 350px;
  width: 100%;
  margin-bottom: 20px;
`

export const IntroListItems = Styled.li`
    position: relative;
    z-index: 1;
    font-size: 20px;
    line-height: 1.5;
    color: rgb(var(--c-brand));

    &:not(:last-child) {
      margin-bottom: 40px;
      @media screen and (max-width: 640px) {
        margin-bottom: 30px;
      }
    }

  @media screen and (max-width: 640px) {
    font-size: 16px;
      line-height: 1.875;
    }
`
export const IntroListItemsDescription = Styled.p`
      display: inline;
      margin: 0;
      background-image: linear-gradient(to right, #c7e9ee, #c7e9ee);
      background-repeat: no-repeat;
      background-size: 100% 4px;
      background-position: 0 calc(100% - 1px);
`

export const IntroListIcon = Styled.svg`
      height: 22px;
      width: 22px;
      position: absolute;
      top: 5px;
      z-index: -1;
      right: calc(100% + 20px);
`
export const IntroListMeta = Styled.dl`
  margin: 15px 0 0;
  padding: 0;
  font-size: 14px;
  color: rgb(var(--c-brand-secondary));
  line-height: 1.2857;
`
export const IntroListUser = Styled.dt`
  font-weight: normal;
  font-family: var(--ff-primary-bold);
  margin-bottom: 3px;
`

export const IntroListUserDesignation = Styled.dd`

`
export const IntroDWTLogo = Styled.figure`
 height: 240px;
  width: 240px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(var(--c-black));
  box-shadow: 0 20px 30px rgba(var(--c-black), 0.25);
  right: -115px;
  bottom: 67px;
  position: absolute;
  z-index: 1;
  background: linear-gradient(170deg, #2e3f4d 0%, #17212a 100%);
  transform: translateY(0) translateZ(0);
  backface-visibility: hidden;
  transition: all 300ms ease;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  overflow: hidden;

  @media screen and (max-width: 960px) {
    height: 200px;
    width: 200px;
    right: -100px;
    bottom: 85px;
  }

  @media screen and (max-width: 640px) {
    left: calc(50% - 100px);
    right: auto;
    bottom: -100px;
  }

  &:hover,
  &:focus {
    transform: translateY(-10px) translateZ(0);
    box-shadow: 0 15px 30px rgba(var(--c-black), 0.25);
  }
  
    a {
    position: absolute;
    bottom: 0;
    border-radius: 50%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    color: rgb(var(--c-white));
    padding: 20px 30px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    line-height: 1;
    font-size: 20px;
    letter-spacing: normal;
    flex-wrap: wrap;

    &:after {
      content: '';
      height: 100%;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgb(0, 0, 0);
      background: linear-gradient(0deg, rgba(var(--c-brand), 1) 0%, rgba(var(--c-brand), 0) 100%);
      position: absolute;
      z-index: -1;
    }

    Strong {
      font-weight: normal;
      font-family: var(--ff-primary-bold);
    }
  }
`
export const IntroBrandImage = Styled.figure`
  margin-top: auto;
  margin-bottom: 10px;
  width: 100%;
  max-width: 117px;
`

export const IntroIllustration = Styled.figure`
  max-width: 377px;
  width: 100%;
  position: absolute;
  top: -10px;
  right: -15px;
  z-index: -1;

  @media screen and (max-width: 767px) {
    max-width: 228px;
    right: 29px;
    top: 0;
  }

  @media screen and (max-width: 640px) {
    top: 0;
  }

  &:after {
    content: "";
    right: -99999px;
    left: -600px;
    background-color: rgb(var(--c-secondary));
    display: block;
    position: absolute;
    z-index: -1;
    bottom: 0;
    top: 138px;

  @media screen and (max-width: 1199px) {
      left: -400px;
    }

  @media screen and (max-width: 960px) {
      left: -200px;
    }

    @media screen and (max-width: 767px) {
      left: -200%;
    }
  }
`