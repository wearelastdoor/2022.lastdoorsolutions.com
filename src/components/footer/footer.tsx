"use client";

import * as React from "react";

import * as S from "./Footer.style";
import { useAnimateRouteContext } from "@/context/AnimateRouteContext";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  console.log(pathname);

  const { handleRoute } = useAnimateRouteContext();
  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterWrapper>
          <S.FooterMenu>
            <S.FooterNav>
              <S.ListItem>
                <S.StyledLink
                  onClick={() => handleRoute("/")}
                  $isActive={pathname === "/"}
                >
                  home
                </S.StyledLink>
              </S.ListItem>
              <S.ListItem>
                <S.StyledLink
                  onClick={() => handleRoute("/about")}
                  $isActive={pathname === "/about"}
                >
                  about
                </S.StyledLink>
              </S.ListItem>
              <S.ListItem>
                <S.StyledLink
                  onClick={() => handleRoute("/b2b-services")}
                  $isActive={pathname === "/b2b-services"}
                >
                  Partnership
                </S.StyledLink>
              </S.ListItem>
              <S.ListItem>
                <S.StyledLink
                  onClick={() => handleRoute("/work")}
                  $isActive={pathname === "/work"}
                >
                  work
                </S.StyledLink>
              </S.ListItem>
              <S.ListItem>
                <S.StyledLink
                  onClick={() => handleRoute("/contact")}
                  title="contact"
                  $isActive={pathname === "/contact"}
                >
                  contact
                </S.StyledLink>
              </S.ListItem>
            </S.FooterNav>
            <S.Copyright display="desktop">
              &copy; 2006 - {new Date().getFullYear()} Last Door
            </S.Copyright>
          </S.FooterMenu>
          <S.FooterContact>
            <S.FooterContactInner>
              <S.FooterTitle>BOOK A DISCOVERY CALL</S.FooterTitle>
              <S.FooterContactWrapper>
                <S.ContactPerson>
                  <S.ContactPersonWrapper>
                    <S.StyledFigure>
                      <S.PersonImage
                        src="/images/footer/pravash_karki.png"
                        alt={`Display Picture of Prav O`}
                        width={80}
                        height={80}
                      />
                    </S.StyledFigure>
                    <S.ContactPersonDetails>
                      <S.ContactPersonName>
                        Pravo
                        {/* <span>o</span> */}
                      </S.ContactPersonName>
                      <S.ContactPersonAddress>Earth</S.ContactPersonAddress>

                      <S.ContactPersonLinks>
                        <S.ContactPersonLinkItem>
                          <S.StyledLinkButton
                            href="https://wa.me/14083948252"
                            className="contactPerson__phone"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            (408) 394-8252
                          </S.StyledLinkButton>{" "}
                          (US)
                        </S.ContactPersonLinkItem>
                        <S.ContactPersonLinkItem>
                          <S.StyledLinkButton
                            href="https://wa.me/447387474293"
                            className="contactPerson__phone"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            7387 474293
                          </S.StyledLinkButton>{" "}
                          (UK)
                        </S.ContactPersonLinkItem>
                        <S.StyledLinkButton href="mailto:pravo@lastdoorsolutions.com">
                          pravo@lastdoorsolutions.com
                        </S.StyledLinkButton>
                      </S.ContactPersonLinks>
                    </S.ContactPersonDetails>
                  </S.ContactPersonWrapper>
                </S.ContactPerson>
                {/* <address className="contactPerson">
                <div className="contactPerson__wrap">
                  <figure>
                    <StaticImage
                      src={`../images/footer/bishal_mishra.png`}
                      alt={`Display Picture of Bishal Mishra`}
                      className="contactPerson__image"
                    ></StaticImage>
                  </figure>
                  <div className="contactPerson__details">
                    <h3 className="contactPerson__name">
                      Bishal <span>Mishra</span>
                    </h3>
                    <address className="contactPerson__address">
                      San Francisco, CA
                    </address>
                    <div className="contactPerson__links">
                      <a
                        href="tel:+12672783588"
                        className="contactPerson__phone"
                      >
                        (267) 278 3588
                      </a>
                      <a href="mailto:bishal@lastdoor.co">bishal@lastdoor.co</a>
                    </div>
                  </div>
                </div>
              </address> */}
              </S.FooterContactWrapper>
            </S.FooterContactInner>
            <S.FooterLink
              href="mailto:hr@lastdoorsolutions.com"
              rel="noreferrer"
              target="_blank"
            >
              Looking for a job? Email us.
            </S.FooterLink>
          </S.FooterContact>
        </S.FooterWrapper>
        <S.Copyright display="responsive">
          &copy; 2006 - {new Date().getFullYear()} Last Door
        </S.Copyright>
      </S.FooterContainer>
    </S.Footer>
  );
};

export default Footer;
