import Styled from "styled-components";

export const MainHeader = Styled.header`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;

  &.show {
    display: flex;
  }

  &.hidden {
    display: none;
  }
  
 .c-header__logo {
  display: inline-block;
  vertical-align: top;
  position: relative;
  z-index: 1;
  margin-right: 46px;

    @media screen and (max-width: 640px){
    margin-right: 35px;
    max-width: 35px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 10px;
    bottom: 10px;
    right: -31px;
    width: 1px;
    z-index: 1;
    background-color: rgba(var(--c-white), .5);

    @media screen and (max-width: 640px){
      top: 5px;
      bottom: 5px;
      right: -27px;
    }
   }
  }
`;

export const MainHeaderWrap = Styled.div`
  background-color: rgb(var(--c-brand-primary));
  padding: 20px 15px 20px 30px;
  display: flex;
  align-items: center;

@media screen and (max-width: 640px) {
    padding: 15px 15px 15px 20px;
  }
`;

export const IconMenuBar = Styled.button`
  height: 70px;
  width: 70px;
  border: none;
  border-radius: 0;
  background-color: transparent;
  padding: 3px 0 0;
  transition: none;
  color: rgb(var(--c-white));

  .icon-menu {
    height: 25px;
    width: 40px;
  }

  &:hover,
  &:focus {
    box-shadow: none;
    background-color: transparent;
  }
`;
export const IconMenuBarClose = Styled.button`
height: 70px;
  width: 70px;
  border: 1px solid rgba(var(--c-gray-light), 0.15);
  background-color: transparent;
  color: rgba(var(--c-gray-light), 0.75);
  padding: 3px 0 0;
  position: absolute;
  top: 32px;
  left: 32px;
  border-radius: 50%;
  opacity: 0;

    @media  screen and (max-width: 640px) {
    top: 25px;
    height: 53px;
    width: 53px;
    left: 20px;
  }

  svg {
    height: 30px;
    width: 30px;

    @media  screen and (max-width: 640px) {
      height: 22px;
      width: 22px;
    }
  }

  &:hover,
  &:focus {
    color: rgba(#f5f6ef, 1);
    border-color: rgba(var(--c-gray-light), 0.5);
    background-color: transparent;
  }
`;

export const MainHeaderNav = Styled.nav`
 position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-y: auto;
  padding: 120px 40px;
  overflow-x: hidden;
  pointer-events: all;
  background-color: rgb(var(--c-brand-primary));
  clip-path: inset(0% 0% 0% 100%);

  .content-loaded & {
    pointer-events: none;
  }

  &.is-active {
    pointer-events: all;
  }

  @media screen and (max-width: 1199px){ {
    padding: 130px 12px 40px;
  }

    @media screen and (max-width: 640px) {
    padding: 130px 0 40px;
    align-items: flex-start;
  }
`;

export const MainHeaderNavContainer = Styled.div`
    max-width: 1004px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    @media screen and (max-width: 640px){
      align-items: flex-start;
      flex-wrap: wrap;
    }
`;
export const MainHeaderMenu = Styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 64%;

  @media screen and (max-width: 640px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

export const MainHeaderMenuList = Styled.li`
    line-height: 1;
    opacity: 0;

    &:not(:last-child) {
      margin-bottom: 18px;
    }

    a {
      font-size: clamp(4.375rem, 10vw, 9.375rem);
      text-decoration: none;
      font-family: var(--ff-primary-black);
      font-weight: normal;
      color: rgb(var(--c-white));
      display: inline-block;
      vertical-align: top;
      letter-spacing: clamp(-0.103125rem, 10vw, -1.003125rem);
      line-height: .8;
      position: relative;
      z-index: 1;
      
      @media screen and (min-width: 1024px) and (max-width: 1200px) {
        font-size: 5.375rem;
      }

      &:hover,
      &:focus {
        &:after {
          opacity: 1;
          transform: translate(6px, 6px) translateZ(0);

          @media screen and (max-width: 640px) {
            transform: translate(3px, 3px) translateZ(0);
          }
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
        transform: translate(0) translateZ(0);
        backface-visibility: hidden;

        @supports ((text-stroke: 1px white) or (-webkit-text-stroke: 1px white)) {
        color: transparent;
        -webkit-text-stroke: 1px rgb(var(--c-primary));
        text-stroke: 1px rgb(var(--c-primary));
        text-shadow: none;
        }
        opacity: 0;
        transition: transform 300ms ease, opacity 300ms ease;
      }
    }

    [aria-current] {
      &:after {
        transform: translate(6px, 6px) translateZ(0);
        opacity: 1;
        @media screen and (max-width: 640px) {
          transform: translate(3px, 3px) translateZ(0);
        }
      }
    }
    
    [aria-current="page"] {
      pointer-events: none;
    }
`;

export const MainHeaderContactWrapper = Styled.ul`
  list-style: none;
  text-align: right;
  width: 34%;

  @media screen and (max-width: 640px) {
    width: 100%;
    text-align: left;
  }
`;

export const MainHeaderContactList = Styled.li`
    line-height: 1;
    opacity: 0;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
`;

export const MainHeaderContactLink = Styled.a`
   font-size:20px;
   letter-spacing:-1px;
   color: rgba(var(--c-white),1);
   font-family: var(--ff-primary);
   display: inline-block;
   vertical-align: top;
   text-decoration: none;
   line-height:1.2;

      &:hover,
      &:focus {
        color: rgba(var(--c-primary),1);
      }

`;
