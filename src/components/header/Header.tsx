"use client";

import { Expo, gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

import * as S from "./Header.style";
import { useAnimateRouteContext } from "@/context/AnimateRouteContext";
import { usePathname } from "next/navigation";

interface HeaderProps {
  logoImage?: string;
  headerVisible?: string;
}

const hiddenRoutes = new Set(["/anchorwave", "/highstep", "/e11group"]);
const Header = ({ logoImage, headerVisible }: HeaderProps) => {
  const navRef = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const { handleRoute } = useAnimateRouteContext();

  const pathname = usePathname();
  const visible =
    headerVisible || (hiddenRoutes.has(pathname) ? "hidden" : "show");

  const menus = [
    {
      link: {
        url: "/about",
        title: "About",
      },
    },
    {
      link: {
        url: "/work",
        title: "Work",
      },
    },
    {
      link: {
        url: "/b2b-services",
        title: "Partnership",
      },
    },
    {
      link: {
        url: "/contact",
        title: "Contact",
      },
    },
  ];

  useEffect(() => {
    const nav = navRef.current;
    const closeBtn = closeRef.current;
    if (!nav || !closeBtn) return;

    const menuItems = Array.from(nav.querySelectorAll("li"));

    const tl = gsap.timeline({ paused: true });
    tl.set(nav, { clipPath: "inset(0% 0% 0% 100%)" })
      .set(menuItems, { opacity: 0 })
      .set(closeBtn, { opacity: 0, rotation: 0 })
      .to(nav, {
        duration: 1.2,
        clipPath: "inset(0% 0% 0% 0%)",
        ease: Expo.easeInOut,
      })
      .to(
        closeBtn,
        { duration: 0.6, rotation: 360, opacity: 1, ease: Expo.easeInOut },
        "-=0.2"
      )
      .to(
        menuItems,
        {
          duration: 0.6,
          opacity: 1,
          stagger: 0.1,
          ease: Expo.easeInOut,
        },
        "-=0.6"
      );
    tl.reversed(true);
    timeline.current = tl;

    return () => {
      timeline.current?.kill();
    };
  }, []);

  const openMenu = () => {
    setMenuOpen(true);
    timeline.current?.play();
  };

  const closeMenu = () => {
    if (!timeline.current) return;
    timeline.current.eventCallback("onReverseComplete", () => {
      setMenuOpen(false);
      timeline.current?.eventCallback("onReverseComplete", null);
    });
    timeline.current.reverse();
  };
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    event.preventDefault();
    handleRoute(url);
  };

  return (
    <S.Header display={visible}>
      <S.HeaderWrap>
        <S.HeaderLogo onClick={() => handleRoute("/")}>
          <S.HiddenSpan>Site Logo</S.HiddenSpan>
          {logoImage && (
            <S.StyledImage
              src={logoImage}
              alt="Lastdoor Solutions Branding"
              width={46}
              height={80}
            />
          )}
        </S.HeaderLogo>
        <S.HeaderIconMenu onClick={openMenu}>
          <svg className="icon icon-menu">
            <use xlinkHref="#icon-menu"></use>
          </svg>
          <S.HiddenSpan>open</S.HiddenSpan>
        </S.HeaderIconMenu>
        <S.StyledNav>
          <S.NavMenu>
            {menus.map((menu) => {
              const {
                link: { url, title },
              } = menu;
              return (
                <S.ListItem key={title}>
                  <S.NavMenuLink
                    href={url}
                    onClick={(event) => handleLinkClick(event, url)}
                    title={title}
                    $isActive={pathname === url}
                  >
                    {title}
                  </S.NavMenuLink>
                </S.ListItem>
              );
            })}
          </S.NavMenu>
        </S.StyledNav>
      </S.HeaderWrap>

      {/* mobile menu */}
      <S.MainNav ref={navRef} $menuOpen={menuOpen} style={{ display: menuOpen ? "block" : "none" }}>
        <S.CloseButton ref={closeRef} onClick={closeMenu}>
          <svg className="icon icon-close">
            <use xlinkHref="#icon-close"></use>
          </svg>
          <S.HiddenSpan>Close</S.HiddenSpan>
        </S.CloseButton>
        <S.MenuContainer>
          <S.MainMenu>
            <S.ListItem>
              <S.StyledLink
                href="/"
                title="Home"
                onClick={closeMenu}
                $isActive={pathname === "/"}
              >
                Home
              </S.StyledLink>
            </S.ListItem>
            {menus.map((menu) => {
              const {
                link: { url, title },
              } = menu;
              return (
                <S.ListItem key={title}>
                  <S.StyledLink
                    href={url}
                    title={title}
                    onClick={closeMenu}
                    $isActive={pathname === url}
                  >
                    {title}
                  </S.StyledLink>
                </S.ListItem>
              );
            })}
          </S.MainMenu>
          <S.MainNavContact>
            <S.ListItem>
              <S.StyledLink href="tel:+14083948252">
                USA: (408) 394-8252
              </S.StyledLink>
            </S.ListItem>
            <S.ListItem>
              <S.StyledLink href="tel:+447387474293">
                UK: 7387 474293
              </S.StyledLink>
            </S.ListItem>
            <S.ListItem>
              <S.StyledLink href="mailto:pravo@lastdoorsolutions.com">
                pravo@lastdoorsolutions.com
              </S.StyledLink>
            </S.ListItem>
          </S.MainNavContact>
        </S.MenuContainer>
      </S.MainNav>
    </S.Header>
  );
};

export default Header;
