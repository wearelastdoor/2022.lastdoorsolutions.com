"use client";

import * as React from "react";
import PageBanner from "@/components/pageBanner/PageBanner";

// Import Components
import Footer from "@/components/footer/footer";
import HighlightCta from "@/components/highlightCta/HighlightCta";

import * as S from "./B2BServices.style";
import { useAnimateRouteContext } from "@/context/AnimateRouteContext";

const ServiceSingle = () => {
  const { handleRoute } = useAnimateRouteContext();

  return (
    <>
      <PageBanner
        pageName={`B2B Services`}
        title={`Hands that help you achieve anything.`}
        pageDescription={`You can expect us to do literally anything that your comapny does or doesn’t. Since our inception in 2006, we have been tied with Business to Business working model. It has been fun to work with people at different time zones.`}
      />

      <S.ServicePartner>
        <S.ServicePartnerContainer>
          <S.ServicePartnerGrid>
            <S.ServicePartnerItem>
              <S.ServicePartnerCard
                style={{
                  backgroundImage: `url(${"./images/anchorwave_white_label_partner.jpg"})`,
                }}
              >
                <S.ServicePartnertitle>Anchorwave</S.ServicePartnertitle>
                <S.StyledLinkDiv onClick={() => handleRoute("/anchorwave")}>
                  <S.ScreenReaderText>anchorwave</S.ScreenReaderText>
                </S.StyledLinkDiv>
              </S.ServicePartnerCard>
            </S.ServicePartnerItem>
            <S.ServicePartnerItem>
              <S.ServicePartnerCard
                style={{
                  backgroundImage: `url(${"./images/highstep_white_label_partner.jpg"})`,
                }}
              >
                <S.ServicePartnertitle>
                  Highstep Technologies
                </S.ServicePartnertitle>
                <S.StyledLinkDiv onClick={() => handleRoute("/highstep")}>
                  <S.ScreenReaderText>Higstep Technologies</S.ScreenReaderText>
                </S.StyledLinkDiv>
              </S.ServicePartnerCard>
            </S.ServicePartnerItem>
            <S.ServicePartnerItem>
              <S.ServicePartnerCard
                style={{
                  backgroundImage: `url(${"./images/e11group_white_label_partner.jpg"})`,
                }}
              >
                <S.ServicePartnertitle>e11group</S.ServicePartnertitle>
                <S.StyledLink
                  href="https://e11group.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <S.ScreenReaderText>e11group</S.ScreenReaderText>
                </S.StyledLink>
              </S.ServicePartnerCard>
            </S.ServicePartnerItem>
          </S.ServicePartnerGrid>
        </S.ServicePartnerContainer>
      </S.ServicePartner>

      <S.Strategy>
        <S.StrategyContainer>
          <S.StrategyHeader>
            <S.StrategyTitle title={`Capabilities`}>
              Capabilities
            </S.StrategyTitle>
            <S.StrategySubtitle>
              We are capable of doing anything from strategy, UX, frontend,
              apps, web apps, and programming across all verticals.
            </S.StrategySubtitle>
          </S.StrategyHeader>
          <S.StrategyBody>
            <S.StrategyIllustrations>
              <S.StyledImage
                src="./images/working-illustration.svg"
                alt={`strategy Illustration`}
              />
            </S.StrategyIllustrations>
            <S.StrategyCard>
              <S.StrategyColumns>
                <S.StrategyColumn>
                  <S.StrategyLink href="/ux-design">
                    Full-fledged UX
                  </S.StrategyLink>
                  <S.StrategyColumnTitle>Full-fledged UX</S.StrategyColumnTitle>
                  <S.StyledParagraph>
                    User Experience stands at the heart of our agency and helps
                    drive the products and projects to excellence.
                  </S.StyledParagraph>
                </S.StrategyColumn>
                <S.StrategyColumn>
                  <S.StrategyColumnTitle>
                    Product Strategy
                  </S.StrategyColumnTitle>
                  <S.StyledParagraph>
                    Understanding market needs and strategizing a product with
                    expert UX knowledge meanwhile keeping the human at center is
                    what we do the best.
                  </S.StyledParagraph>
                </S.StrategyColumn>
                <S.StrategyColumn>
                  <S.StrategyColumnTitle>
                    High-Conversion Landing pages
                  </S.StrategyColumnTitle>
                  <S.StyledParagraph>
                    Our design team accomplishes tasks that elevates your
                    product and business from tiny level to mass.
                  </S.StyledParagraph>
                </S.StrategyColumn>
                <S.StrategyColumn>
                  <S.StrategyColumnTitle>
                    Frontend Development
                  </S.StrategyColumnTitle>
                  <S.StyledParagraph>
                    FrontEnd is at core of our company. We build seamless
                    interfaces from scratch or with any vertical of frameworks
                    available.
                  </S.StyledParagraph>
                </S.StrategyColumn>
                <S.StrategyColumn>
                  <S.StrategyLink href="/wordpress">
                    WordPress Websites
                  </S.StrategyLink>
                  <S.StrategyColumnTitle>
                    WordPress Websites
                  </S.StrategyColumnTitle>
                  <S.StyledParagraph>
                    We have been doing WordPress since 2003, and that's why we
                    can do anything related, wether be it a custom site or
                    feature.
                  </S.StyledParagraph>
                </S.StrategyColumn>
                <S.StrategyColumn>
                  <S.StrategyColumnTitle>
                    Performance &amp; Speed Optimization
                  </S.StrategyColumnTitle>
                  <S.StyledParagraph>
                    User Experience stands at the heart of our agency and helps
                    drive the products and projects to excellence.
                  </S.StyledParagraph>
                </S.StrategyColumn>
                <S.StrategyColumn>
                  <S.StrategyColumnTitle>
                    Custom WordPress Plugin Development
                  </S.StrategyColumnTitle>
                  <S.StyledParagraph>
                    We build custom plugins bespoke to your needs when it comes
                    to security, tailor-made features, and project needs.
                  </S.StyledParagraph>
                </S.StrategyColumn>
                <S.StrategyColumn>
                  <S.StrategyColumnTitle>
                    WooCommerce Store
                  </S.StrategyColumnTitle>
                  <S.StyledParagraph>
                    We can literally do anything on WordPress, which makes us an
                    expert in delivering world-classs WooCommerce products.
                  </S.StyledParagraph>
                </S.StrategyColumn>
                <S.StrategyColumn>
                  <S.StrategyColumnTitle>
                    Custom PHP &amp; Laravel
                  </S.StrategyColumnTitle>
                  <S.StyledParagraph>
                    From Web App to API, MVP and large scale products, we have
                    covered them all.
                  </S.StyledParagraph>
                </S.StrategyColumn>
                <S.StrategyColumn>
                  <S.StrategyColumnTitle>
                    React Js Development
                  </S.StrategyColumnTitle>
                  <S.StyledParagraph>
                    React JS is a core part of our app development expertise.
                    So, when you trust us and React, your business is in good
                    hands.
                  </S.StyledParagraph>
                </S.StrategyColumn>
                <S.StrategyColumn>
                  <S.StrategyColumnTitle>Next.js Sites</S.StrategyColumnTitle>
                  <S.StyledParagraph>
                    High-performance and scalable frontend delivery with modern
                    design and seamless user experiences, we build exceptional sites.
                  </S.StyledParagraph>
                </S.StrategyColumn>
                <S.StrategyColumn>
                  <S.StrategyColumnTitle>
                    Page Builder Sites
                  </S.StrategyColumnTitle>
                  <S.StyledParagraph>
                    We do understand and care about our small size customers so
                    we have covered you here as well.
                  </S.StyledParagraph>
                </S.StrategyColumn>
              </S.StrategyColumns>
            </S.StrategyCard>
          </S.StrategyBody>
        </S.StrategyContainer>
      </S.Strategy>

      <HighlightCta />

      <Footer />
    </>
  );
};

export default ServiceSingle;
