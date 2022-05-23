import Styled from 'styled-components'
import {createUseStyles} from "react-jss";

const smallDesktopWidth = 960;
const tabletWidth = 960;
const phoneWidth = 640;

export const FeaturedWorkMasonryStyle = createUseStyles({
        featuredWorkGrid: {
            display: 'flex',
            flexWrap: 'wrap',
            margin: '0 -30px'
        },

        [`@media screen and (max-width: ${tabletWidth}px)`]: {
            featuredWorkGrid: {
                margin: '0 -20px'
            }
        },

        featuredWorkColumn: {
            display: 'flex',
            flexWrap: 'wrap',
            '&:nth-child(even)': {
                marginTop: '100px'
            }
        },

        [`@media screen and (max-width: ${smallDesktopWidth}px)`]: {
            featuredWorkColumn: {
                '&:nth-child(even)': {
                    marginTop: '60px',
                }
            }
        },

        [`@media screen and (max-width: ${tabletWidth}px)`]: {
            featuredWorkColumn: {
                '&:nth-child(even)': {
                    marginTop: '40px',
                }
            }
        },
        featuredWorkLogo: {
            marginBottom: '16px',
            '& img': {
                backfaceVisibility: 'hidden'
            }
        },
    }
)

export const FeaturedWorkWrapper = Styled.section`
  padding: 68px 0;
`
export const FeaturedWorkHeader = Styled.section`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  max-width: 900px;
  width: 100%;
  margin: 0 auto 44px;

  @media screen and (max-width: 960px) {
    margin-bottom: 20px;
  }
`

export const FeaturedWorkSubHeading = Styled.strong`
  font-size: 14px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-family: var(--ff-primary-black);
  font-weight: normal;
  color: rgba(var(--c-brand-primary), 1);
  margin-bottom: 9px;
  display: block;
  width: 100%;
`
export const FeaturedWorkHeading = Styled.h2`
  font-size: clamp(3.125rem, 8vw, 5.9375rem);
  font-family: var(--ff-primary-black);
  font-weight: normal;
  display: inline-block;
  vertical-align: top;
  letter-spacing: -6px;
  line-height: 1;
  position: relative;
  z-index: 1;
  color: rgb(var(--c-brand-primary));
  margin-bottom: 36px;

    @media screen and (max-width: 640px) {
    letter-spacing: -3.3px;
  }

  &:after {
    content: attr(title);
    position: absolute;
    top: 0;
    color: transparent;
    z-index: -2;
    display: inline-block;
    vertical-align: top;
    left: 0;
    transform: translate(5px, 5px) translateZ(0);
    backface-visibility: hidden;
    @supports ((text-stroke: 1px white) or (-webkit-text-stroke: 1px white)) {
        color: transparent;
        -webkit-text-stroke: 1px rgba(var(--c-primary), 1);
        text-stroke: 1px rgba(var(--c-primary), 1);
        text-shadow: none;
        }

    @media screen and (max-width: 640px) {
      transform: translate(3px, 3px) translateZ(0);
    }
  }
`
export const FeaturedWorkItem = Styled.div`
  width: 100%;
  padding: 0 30px;
  margin-bottom: 100px;
  
  @media screen and (max-width: 1200px) {
    margin-bottom: 60px;
  }
  
  @media screen and (max-width: ${tabletWidth}px) {
    padding: 0 20px;
  }
`

export const FeaturedWorkProjectLatter = Styled.figure`
  margin-bottom: -146px;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  text-align: center;
  filter: drop-shadow(0 2px 4px rgba(var(--c-brand-primary), .15));
  transform: translateY(0);
  transition: all 300ms ease;

  @media screen and (max-width: ${tabletWidth}px) {
    margin-bottom: -114px;
  }

  .gatsby-image-wrapper {
    filter: drop-shadow(24px 24px 35px rgba(var(--c-black), .15));
    margin: 0 auto;
  }
`

export const FeaturedWorkItemCard = Styled.div`
  background: rgb(46, 63, 77);
  background: linear-gradient(45deg, rgba(46, 63, 77, 1) 0%, rgba(23, 33, 42, 1) 100%);
  padding: 50px 50px 0;
  position: relative;
  box-shadow: 0 30px 60px rgba(var(--c-brand-primary), .1);
  margin-bottom: 133px;

  @media screen and (max-width: 1200px) {
    margin-bottom: 120px;
  }

  @media screen and (max-width: ${tabletWidth}px) { 
    margin-bottom: 80px;
  }

  @media screen and (max-width: ${phoneWidth}px) { 
    padding: 40px 25px 0;
  }

  > a {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  &:after {
    content: '';
    position: absolute;
    left: 5px;
    top: 5px;
    border: 1px solid rgb(var(--c-primary));
    display: block;
    z-index: -1;
    height: 100%;
    width: 100%;
    background-color: transparent;
  }
    &:hover, &:focus {
    ${FeaturedWorkProjectLatter} {
      transform: translateY(-10px);
    }
  }
`

export const FeaturedWorkItemCardLink = Styled.a`
  position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

export const FeaturedWorkItemCardTitle = Styled.h2`
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  letter-spacing: -2px;
  line-height: 1;
  color: rgb(var(--c-white));
  
  @media screen and (max-width:${phoneWidth}) {
    letter-spacing: -1px;
  }
`
export const FeaturedWorkItemCardCategory = Styled.p`
  color: rgb(var(--c-white));
  text-decoration: none;
  margin-bottom: 73px;
  display: block;
  vertical-align: top;

  @media screen and (max-width: ${smallDesktopWidth}) {
    margin-bottom: 40px;
  }
`