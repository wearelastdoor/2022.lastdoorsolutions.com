"use client";

import { device } from "@/styles/theme/breakpoints";
import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

const Header = styled.header<{ display?: string }>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;

  ${({ display }) =>
    display === "show" &&
    css`
      display: flex;
    `}

  ${({ display }) =>
    display === "hidden" &&
    css`
      display: none;
    `}
`;

const HeaderWrap = styled.div`
  background-color: $c-brand;
  padding: 2rem 5rem 2rem 3rem;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;

  @media ${device.tablet} {
    padding: 1.5rem 1.5rem 1.5rem 2rem;
  }

  &:before,
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
  }

  &:before {
    background-color: ${({ theme }) => theme.colors.primary.gray[50]};
    z-index: -1;
    left: 0;
  }

  &:after {
    left: 0.5rem;
    top: 0.5rem;
    border: 0.1rem solid ${({ theme }) => `rgba(${theme.colorRgb.primary})`};
    display: block;
    z-index: -2;
    background-color: transparent;
  }
`;

const HeaderLogo = styled.div`
  display: inline-block;
  vertical-align: top;
  position: relative;
  z-index: 1;
  margin-right: 4.6rem;
  cursor: pointer;

  @media ${device.tablet} {
    margin-right: 3.5rem;
    max-width: 3.5rem;
  }

  &:after {
    content: "";
    position: absolute;
    top: 1rem;
    bottom: 1rem;
    right: -3.1rem;
    width: 0.1rem;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.5);
    display: none;

    @media ${device.tablet} {
      top: 0.5rem;
      display: block;
      bottom: 0.5rem;
      right: -2.7rem;
    }
  }
`;

const HiddenSpan = styled.span`
  clip: rect(0.1rem, 0.1rem, 0.1rem, 0.1rem);
  clip-path: inset(50%);
  height: 0.1rem;
  width: 0.1rem;
  margin: -0.1rem;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;

const StyledImage = styled(Image)``;

const HeaderIconMenu = styled.button`
  height: 7rem;
  width: 7rem;
  border: none;
  border-radius: 0;
  background-color: transparent;
  padding: 0.3rem 0 0;
  transition: none;
  color: ${({ theme }) => theme.colors.primary.white};
  display: none;

  @media ${device.tablet} {
    display: block;
  }

  .icon-menu {
    height: 2.5rem;
    width: 4rem;
    fill: #fff;
  }

  &:hover,
  &:focus {
    box-shadow: none;
    background-color: transparent;
  }
`;

const StyledNav = styled.nav``;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 5rem;
  margin-bottom: 0;
  padding: 0;

  li {
    opacity: 1;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

const NavMenuLink = styled.a<{ $isActive?: boolean }>`
  font-size: ${({ theme }) => theme.font.size.body.sm};
  font-family: ${({ theme }) => theme.fonts.black};
  color: ${({ theme, $isActive }) =>
    $isActive ? "#1983d4" : theme.colors.primary.white};
  text-transform: uppercase;
  background: transparent;
  border: none;
  text-decoration: none;
  position: relative;
  z-index: 1;
  display: inline-block;
  vertical-align: top;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #1983d4;
  }
`;

const MainNav = styled.nav<{ $menuOpen?: boolean }>`
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
  padding: 12rem 4rem;
  overflow-x: hidden;
  pointer-events: all;
  background-color: ${({ theme }) => theme.colors.primary.gray[50]};
  clip-path: inset(0% 0% 0% 100%);
  width: 100%;
  pointer-events: ${({ $menuOpen }) => ($menuOpen ? "all" : "none")};

  @media ${device.smallScreen} {
    padding: 13rem 1.2rem 4rem;
  }

  @media ${device.phone} {
    padding: 13rem 0 4rem;
    align-items: flex-start;
  }
`;

const CloseButton = styled.button`
  height: 7rem;
  width: 7rem;
  border: 0.1rem solid rgba(245, 246, 239, 0.15);
  background-color: transparent;
  color: rgba(#f5f6ef, 0.75);
  padding: 0.3rem 0 0;
  position: absolute;
  top: 3.2rem;
  left: 3.2rem;
  border-radius: 50%;
  opacity: 0;

  @media ${device.phone} {
    top: 2.5rem;
    height: 5.3rem;
    width: 5.3rem;
    left: 2rem;
  }

  .icon-close {
    height: 3rem;
    width: 3rem;

    @media ${device.phone} {
      height: 2.2rem;
      width: 2.2rem;
    }
  }

  &:hover,
  &:focus {
    color: rgba(#f5f6ef, 1);
    border-color: rgba(#f5f6ef, 0.5);
    background-color: transparent;
  }
`;

const MenuContainer = styled.div`
  max-width: 110rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;

  @media ${device.smallScreen} {
  }

  @media ${device.phone} {
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

const MainMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 64%;

  @media ${device.phone} {
    width: 100%;
    margin-bottom: 4rem;
  }
`;

const ListItem = styled.li`
  line-height: 1;

  &:not(:last-child) {
    @media ${device.tablet} {
      margin-bottom: 1.8rem;
    }
  }
`;

const StyledLink = styled(Link)<{ $isActive?: boolean }>`
  font-size: clamp(5.6rem, 10vw, 10.88rem);
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.black};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary.white};
  display: inline-block;
  vertical-align: top;
  letter-spacing: clamp(-0.103125rem, 10vw, -1.003125rem);
  line-height: 0.8;
  position: relative;
  z-index: 1;
  pointer-events: ${({ $isActive }) => ($isActive ? "none" : "all")};

  @media screen and (min-width: 1024px) and (max-width: 1200px) {
    font-size: 5.375rem;
  }

  &:hover,
  &:focus {
    &:after {
      opacity: 1;
      transform: translate(0.6rem, 0.6rem) translateZ(0);

      @media ${device.phone} {
        transform: translate(0.3rem, 0.3rem) translateZ(0);
      }
    }
  }

  &:after {
    content: attr(title);
    position: absolute;
    top: 0;
    left: 0;
    color: transparent;
    z-index: -1;
    display: inline-block;
    vertical-align: top;
    backface-visibility: hidden;
    -webkit-text-stroke: 0.1rem
      ${({ theme }) => `rgba(${theme.colorRgb.primary})`};
    opacity: ${({ $isActive }) => ($isActive ? "1" : "0")};
    transform: ${({ $isActive }) =>
      $isActive
        ? "translate(0.6rem, 0.6rem) translateZ(0)"
        : "translate(0) translateZ(0)"};
    transition:
      transform 300ms ease,
      opacity 300ms ease;

    @media ${device.phone} {
      transform: ${({ $isActive }) =>
        $isActive
          ? "translate(0.3rem, 0.3rem) translateZ(0)"
          : "translate(0) translateZ(0)"};
    }
  }
`;

const MainNavContact = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: right;
  width: 34%;

  @media ${device.phone} {
    width: 100%;
    text-align: left;
  }

  li {
    line-height: 1;
    opacity: 0;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }

    a {
      font-size: 2rem;
      letter-spacing: -0.1rem;
      color: ${({ theme }) => theme.colors.primary.white};
      font-family: var(--ff-primary);
      display: inline-block;
      vertical-align: top;
      text-decoration: none;
      line-height: 1.2;

      &:hover,
      &:focus {
        color: ${({ theme }) => `rgba(${theme.colorRgb.primary})`};
      }
    }
  }
`;

export {
  CloseButton,
  Header,
  HeaderIconMenu,
  HeaderLogo,
  HeaderWrap,
  HiddenSpan,
  ListItem,
  MainMenu,
  MainNav,
  MainNavContact,
  MenuContainer,
  NavMenu,
  NavMenuLink,
  StyledImage,
  StyledLink,
  StyledNav,
};
