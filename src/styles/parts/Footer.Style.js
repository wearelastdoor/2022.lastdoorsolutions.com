import Styled from "styled-components";
import PatternImage from "images/texture.png"

export const FooterWrapper = Styled.footer`
  position: relative;
  background-color: transparent;
  z-index: 1;

  .l-container {
    z-index: 6;
  }

  &:before {
    content: "";
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -2;
    background-color: rgb(var(--c-brand-secondary));
    display: block;
    position: absolute;
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
`
export const FooterMenuWrap = Styled.div`
    padding: 42px 0 30px;
    border-width: 2px 0;
    border-color: rgba(var(--c-white), 0.09);
    border-style: solid;
    display: inline-block;
    vertical-align: top;
    width: 100%;

    @media screen and (max-width: 640px){
      padding: 17px 0 7px;
    }
`
export const FooterMenu = Styled.ul`
    margin: 0 -50px;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    list-style: none;

    @media screen and (max-width: 640px){
      margin: 0 auto;
      padding: 0 7px;
    }

    @media screen and (max-width: 374px) {
      padding: 0;
      margin: 0 -11px;
      justify-content: center;
    }
    
    [aria-current] {
      color: rgb(var(--c-primary));
    }
`
export const FooterMenuList = Styled.li`
      padding: 0 50px;
      margin-bottom: 12px;
    @media screen and (max-width: 640px){
        padding: 0 13px;
      }
      @media screen and (max-width: 364px) {
        padding: 0 11px;
      }

      a {
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-family: var(--ff-primary-black);
        font-weight: normal;
        color: rgb(var(--c-white));
        text-decoration: none;

        &:hover,
        &:focus {
          color: rgb(var(--c-primary));
        }
      }
`
export const FooterCopyrightWrapper = Styled.div`
  font-size: 1rem;
  font-family: var(--ff-primary);
  color: rgba(var(--c-white), 0.5);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 0 17px;

    @media screen and (max-width: 640px){
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 28px 0 22px;
  }
`
export const FooterCopyright = Styled.p`
   @media screen and (max-width: 640px){
    order: 2;
  }
`

export const FooterContact = Styled.p`
  display: flex;
  flex-wrap: wrap;

   @media screen and (max-width: 640px){
    display: inline-flex;
    justify-content: center;
    flex-direction: column;
    order: 1;
    margin-bottom: 14px;
  }
`

export const FooterContactItem = Styled.a`
    display: block;
    color: rgb(var(--c-white));
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    text-transform: inherit;
    text-decoration: none;

    &:hover,
    &:focus {
      color: rgb(var(--c-primary));
    }
    
   @media screen and (max-width: 640px){
    font-size: 20px;
    }

    &:not(:last-child) {
      margin-right: 50px;

    @media screen and (max-width: 640px){
        margin-right: 0;
        margin-bottom: 4px;
      }
    }
`