import Styled from 'styled-components'

export const OurClientWrapper = Styled.section`
  background-color: transparent;
  position: relative;
  z-index: 1;
  margin-top: -130px;
  padding-bottom: 80px;

  @media screen and (max-width: 1199px) {
    padding-bottom: 60px;
  }

  @media screen and (max-width: 640px) {
    margin-top: -250px;
  }

  .l-container {
  @media screen and (max-width: 1199px) {
      padding-left: 80px;
      padding-right: 0;
    }

    @media screen and (max-width: 480px) {
      padding-left: 40px;
      padding-right: 0;
    }
  }
`

export const OurClientHeader = Styled.div`
  padding-right: 153px;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding-top: 60px;

    @media screen and (max-width: 960px) {
    padding-right: 68px;
  }
    @media screen and (max-width: 640px) {
    padding-right: 48px;
    padding-top: 20px;
  }

  &:after {
    content: "";
    position: absolute;
    right: 65px;
    top: 0;
    bottom: -426px;
    z-index: -1;
    display: block;
    left: -999%;
    background-color: rgb(var(--c-brand-primary));

    @media screen and (max-width: 640px) {
      right: 20px;
    }
  }
`

export const OurClientHeaderContent = Styled.div`
   max-width: 493px;
    width: 100%;
    padding: 42px 0 50px;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 640px) {
      padding-bottom: 35px;
    }

    &:after {
      content: "";
      left: 10px;
      bottom: 15px;
      width: 2px;
      background-color: rgb(var(--c-white));
      display: none;
      position: absolute;
      z-index: -1;
      height: 120px;
      
      @media screen and (max-width: 480px) {
        display: block;
      }
    }
`

export const OurClientHeaderSubTitle = Styled.h2`
    font-size: 14px;
    line-height: 1.21;
    letter-spacing: -.504px;
    color: rgba(var(--c-white), 0.5);
    font-family: var(--ff-primary-black);
    font-weight: normal;
    display: block;
    margin-bottom: 14px;
    text-transform: uppercase;
`
export const OurClientHeaderTitle = Styled.h3`
  font-size: clamp(3.125rem, 8vw, 5.9375rem);
    font-family: var(--ff-primary-black);
    font-weight: normal;
    color: rgb(var(--c-white));
    display: inline-block;
    vertical-align: top;
    letter-spacing: -6px;
    line-height: 1;
    position: relative;
    z-index: 1;
    margin-bottom: 0;
    
    @media screen and (max-width: 640px) {
      letter-spacing: -3.3px;
      max-width: min(264px, 100%);
    }

    &:before {
      content: "";
      width: 72px;
      background-color: transparent;
      right: calc(100% + 8px);
      border-width: 2px 0 2px 2px;
      border-style: solid;
      border-color: $c-white;
      display: block;
      position: absolute;
      top: 140px;
      bottom: calc(0px - 300px);
      
    @media screen and (max-width: 960px) {
        top: 90px;
        width: 40px;
        bottom: -340px;
      }
      @media screen and (max-width: 480px) {
        display: none;
      }
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
        -webkit-text-stroke: 1px rgba(94,139,149, 0.5);
        text-stroke: 1px rgba(94,139,149, 0.5);
        text-shadow: none;
        }

      @media screen and (max-width: 640px) {
        transform: translate(3px, 3px) translateZ(0);
      }
    }
`

export const OurClientHeaderDescription = Styled.p`
    color: rgb(var(--c-white));
    margin-top: 25px;
    margin-bottom: 0;
    font-size: clamp(1rem, 2vw, 1.25rem);
`


export const OurClientGraphicWrapper = Styled.figure`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    @media screen and (max-width: 640px) {
      position: absolute;
      bottom: -67px;
      right: 30px;
      opacity: .6;
    }
`
export const OurClientGraphicImage = Styled.img`
   max-height: 434px;
   pointer-events: none;
   user-select: none;
   
    @media screen and (max-width: 640px) {
        max-height: 261px;
      }
`
export const OurClientCard = Styled.div`
  background-color: rgb(var(--c-white));
  box-shadow: 0 30px 60px rgba($c-black, 0.1);
  padding: 80px 80px 8px;
  position: relative;
  z-index: 2;

    @media screen and (max-width: 960px) {
    padding: 60px 40px 8px;
  }

    @media screen and (max-width: 640px) {
    padding: 40px 40px 8px;
  }
`

export const OurClientGrid = Styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0 -32px;
`

export const OurClientItem = Styled.div`
  width: 33.33%;
  padding: 0 32px;
  margin-bottom: 52px;

    @media screen and (max-width: 960px) {
    width: 50%;
  }

  &:last-child {
    @media screen and (max-width: 640px) {
      margin-bottom: 32px;
    }
  }

    @media screen and (max-width: 640px) {
    width: 100%;
  }
  
  .gatsby-image-wrapper {
      display: flex;
    align-items: flex-end;
    margin-bottom: 15px;
    }
`

export const OurClientItemDescription = Styled.div`
     font-size: 15px;
    p {
      @media screen and (max-width: 640px) {
        margin-bottom: 24px;
      }
    }
`
