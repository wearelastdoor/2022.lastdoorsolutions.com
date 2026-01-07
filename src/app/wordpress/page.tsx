import * as React from "react";
import dynamic from "next/dynamic";
// import Seo from "../components/seo"

// Import Components
const Footer = dynamic(() => import("@/components/footer/footer"));
const HighlightCta = dynamic(
  () => import("@/components/highlightCta/HighlightCta")
);

import * as S from "./Wordpress.style";

const ServiceSingle = () => {
  return (
    <>
      {/* <Seo/> */}
      <main className="main">
        <S.Wordpress>
          <S.StyledContainer>
            <S.MainTitle title={`We’re the masters of WordPress Development.`}>
              We’re the masters of WordPress Development.
            </S.MainTitle>
            <S.Description>
              <S.Paragraph>
                We do everything WordPress-related. WordPress occupies around
                50% of our workload at Last Door, with over five thousand
                websites developed using the platform, and more than one hundred
                thousand users have chosen one of our themes as their website.
              </S.Paragraph>
            </S.Description>
            <S.WordpressImage
              src="/images/wordpress-logotype-wmark.webp"
              alt="wordpress"
              width={800}
              height={800}
            />
          </S.StyledContainer>
        </S.Wordpress>

        <S.FeaturedService>
          <S.FeaturedServiceContainer>
            <S.FeaturedServiceContent>
              <S.FeaturedServiceTitle>Our Capability</S.FeaturedServiceTitle>
              <S.FeaturedServiceInner>
                <S.FeaturedServiceList>
                  <S.ListItem>Custom WordPress</S.ListItem>
                  <S.ListItem>Plugin Development</S.ListItem>
                  <S.ListItem>WordPress with React</S.ListItem>
                  <S.ListItem>WordPress Themes</S.ListItem>
                  <S.ListItem>White Label Dev</S.ListItem>
                  <S.ListItem>Support & Maintenance</S.ListItem>
                  <S.ListItem>WooCommerce Store</S.ListItem>
                  <S.ListItem>Performance & Speed</S.ListItem>
                  <S.ListItem>Server-side management</S.ListItem>
                </S.FeaturedServiceList>
              </S.FeaturedServiceInner>
            </S.FeaturedServiceContent>
          </S.FeaturedServiceContainer>
        </S.FeaturedService>

        <S.ServiceIntro>
          <S.ServiceContainer>
            <S.ServiceIntroImage>
              <S.StyledImage
                src="/images/wordpress-logotype-standard.webp"
                alt="wordpress"
                width={250}
                height={51}
              />
            </S.ServiceIntroImage>
            <S.ServiceIntroDescription>
              <S.Paragraph>
                WordPress is the most popular CMS globally, with more than 30%
                of the website's market share. We maximize the use of WordPress
                with custom modules, templates, page builders and UX strategy to
                make it more usable and bespoke to every project.
              </S.Paragraph>
            </S.ServiceIntroDescription>
          </S.ServiceContainer>
        </S.ServiceIntro>

        <S.ServiceCard>
          <S.ServiceCardContainer>
            <S.ServiceCardInner alignment="left">
              <S.ServiceCardContent>
                <S.ServiceCardTitle>
                  Sixteen Plus <br /> Years in business
                </S.ServiceCardTitle>
                <S.ServiceCardDescription>
                  <S.Paragraph>
                    We've been in the WordPress business for almost 1.5 decades.
                    We've seen it evolve throughout the years, and that's our
                    biggest strength. We've contributed to the growth of
                    WordPress in various ways, from code reviews to sponsoring
                    events, sharing knowledge, developing free themes, and so
                    on.
                  </S.Paragraph>
                </S.ServiceCardDescription>
              </S.ServiceCardContent>

              <S.ServiceCardImage>
                <S.StyledImage
                  src="/images/service-card-img.webp"
                  alt={`service card`}
                  height={339}
                  width={509}
                />
              </S.ServiceCardImage>
            </S.ServiceCardInner>
          </S.ServiceCardContainer>
        </S.ServiceCard>
        <S.ServiceCard>
          <S.ServiceCardContainer>
            <S.ServiceCardInner alignment="right">
              <S.ServiceCardContent>
                <S.ServiceCardTitle>
                  Dedicated Project <br /> Managers
                </S.ServiceCardTitle>
                <S.ServiceCardDescription>
                  <S.Paragraph>
                    Our project managers map out the best possible work plan to
                    bridge the stakeholders, designers, and developers to reduce
                    friction and produce things at the perfect time.{" "}
                  </S.Paragraph>
                </S.ServiceCardDescription>
              </S.ServiceCardContent>

              <S.ServiceCardImage>
                <S.StyledImage
                  src="/images/service-card-img.webp"
                  alt={`service card`}
                  height={339}
                  width={509}
                />
              </S.ServiceCardImage>
            </S.ServiceCardInner>
          </S.ServiceCardContainer>
        </S.ServiceCard>
        <S.ServiceCard>
          <S.ServiceCardContainer>
            <S.ServiceCardInner alignment="left">
              <S.ServiceCardContent>
                <S.ServiceCardTitle>
                  Industry-Leading
                  <br /> Developers
                </S.ServiceCardTitle>
                <S.ServiceCardDescription>
                  <S.Paragraph>
                    Our fleet of Developers includes senior PHP programmers to
                    core-theme reviewers in wp org, with 50% of them having more
                    than ten years of experience. Our experience helps us embark
                    on complex features and produce intuitive, economically
                    viable, and worthwhile solutions.
                  </S.Paragraph>
                </S.ServiceCardDescription>
              </S.ServiceCardContent>

              <S.ServiceCardImage>
                <img
                  src="/images/service-card-img.webp"
                  alt={`service card`}
                  height={339}
                  width={509}
                />
              </S.ServiceCardImage>
            </S.ServiceCardInner>
          </S.ServiceCardContainer>
        </S.ServiceCard>

        <S.Offering>
          <S.OfferingContainer>
            <S.OfferingHeadline title={`Offerings`}>
              Offerings
            </S.OfferingHeadline>
            <S.OfferingGrid>
              <S.OfferingItem>
                <S.OfferingImage
                  type="oval"
                  src="/images/svg-oval.svg"
                  alt={`Oval`}
                  height={144}
                  width={144}
                />
                <S.OfferingTitle>PSD to WordPress</S.OfferingTitle>
                <S.OfferingDescription>
                  <S.Paragraph>
                    We have dedicated FrontEnd developers acquainted with the
                    design and skilled in using all sorts of design files,
                    including Adobe XD, Photoshop, Figma, Sketch, Illustrator,
                    etc. So, the developer hand-off is as easy as providing a
                    design file or a Figma/Sketch link.
                  </S.Paragraph>
                </S.OfferingDescription>
              </S.OfferingItem>
              <S.OfferingItem>
                <S.OfferingImage
                  type="rectangle"
                  src="/images/svg-rectangle.svg"
                  alt={`Rectangle`}
                  height={168}
                  width={168}
                />
                <S.OfferingTitle>Custom WordPress Websites</S.OfferingTitle>
                <S.OfferingDescription>
                  <S.Paragraph>
                    We craft custom WordPress websites from the ground up. For
                    those looking for customized page builders like Divi,
                    Gutenberg, Elementor, WPBakery, etc., we have got all
                    covered.
                  </S.Paragraph>
                </S.OfferingDescription>
              </S.OfferingItem>
              <S.OfferingItem>
                <S.OfferingImage
                  type="triangle"
                  src="/images/svg-triangle.svg"
                  alt={`Triangle`}
                  width={124}
                  height={132}
                />
                <S.OfferingTitle>
                  Performance & Speed Optimization
                </S.OfferingTitle>
                <S.OfferingDescription>
                  <S.Paragraph>
                    No matter the size of your site, we take care of all your
                    performance, code compression, optimization and improving
                    the score and speed of your site so that we reach the users
                    fast.{" "}
                  </S.Paragraph>
                </S.OfferingDescription>
              </S.OfferingItem>

              <S.OfferingItem>
                <S.OfferingImage
                  type="triangle"
                  src="/images/svg-triangle.svg"
                  alt={`Triangle`}
                  width={124}
                  height={132}
                />
                <S.OfferingTitle>WooCommerce Store</S.OfferingTitle>
                <S.OfferingDescription>
                  <S.Paragraph>
                    We can literally do anything on WordPress, which makes us an
                    expert in delivering world-classs WooCommerce products.
                  </S.Paragraph>
                </S.OfferingDescription>
              </S.OfferingItem>
              <S.OfferingItem>
                <S.OfferingImage
                  type="oval"
                  src="/images/svg-oval.svg"
                  alt={`Oval`}
                  height={144}
                  width={144}
                />
                <S.OfferingTitle>Custom Plugin Development</S.OfferingTitle>
                <S.OfferingDescription>
                  <S.Paragraph>
                    We build custom plugins bespoke to your needs when it comes
                    to security, tailor-made features, and project needs.{" "}
                  </S.Paragraph>
                </S.OfferingDescription>
              </S.OfferingItem>
              <S.OfferingItem>
                <S.OfferingImage
                  type="rectangle"
                  src="/images/svg-rectangle.svg"
                  alt={`Rectangle`}
                  height={168}
                  width={168}
                />
                <S.OfferingTitle>
                  Migration, Support & Server side management
                </S.OfferingTitle>
                <S.OfferingDescription>
                  <S.Paragraph>
                    We craft custom WordPress websites from the ground up. For
                    those looking for customized page builders like Divi,
                    Gutenberg, Elementor, WPBakery, etc., we have got all
                    covered.
                  </S.Paragraph>
                </S.OfferingDescription>
              </S.OfferingItem>
            </S.OfferingGrid>
          </S.OfferingContainer>
        </S.Offering>

        <S.ServicePartner>
          <S.ServicePartnerContainer>
            <S.ServicePartnerHeader>
              <S.ServicePartnerHeading title={`White-label Development`}>
                White-label Development
              </S.ServicePartnerHeading>
              <S.ServicePartnerDescription>
                <S.Paragraph $isDark={true}>
                  We will build the entire code with all your branding,
                  conventions, systems, or requirements to maintain the
                  project's white labels.
                </S.Paragraph>
              </S.ServicePartnerDescription>
            </S.ServicePartnerHeader>
            <S.ServicePartnerGrid>
              <S.ServicePartnerItem>
                <S.ServicePartnerCard
                  style={{
                    backgroundImage: `url(${"./images/anchorwave_white_label_partner.webp"})`,
                  }}
                >
                  <S.ServicePartnerLabel>
                    White Label partner
                  </S.ServicePartnerLabel>
                  <S.ServicePartnertitle>Anchorwave</S.ServicePartnertitle>
                  <S.StyledLink
                    href="https://anchorwave.com/"
                    target={`_blank`}
                  >
                    <S.ScreenReaderText>anchorwave</S.ScreenReaderText>
                  </S.StyledLink>
                </S.ServicePartnerCard>
              </S.ServicePartnerItem>
              <S.ServicePartnerItem>
                <S.ServicePartnerCard
                  style={{
                    backgroundImage: `url(${"./images/highstep_white_label_partner.webp"})`,
                  }}
                >
                  <S.ServicePartnerLabel>
                    White Label partner
                  </S.ServicePartnerLabel>
                  <S.ServicePartnertitle>
                    Higstep Technologies
                  </S.ServicePartnertitle>
                  <S.StyledLink href="https://highstep.com/" target={`_blank`}>
                    <S.ScreenReaderText>
                      Higstep Technologies
                    </S.ScreenReaderText>
                  </S.StyledLink>
                </S.ServicePartnerCard>
              </S.ServicePartnerItem>
              <S.ServicePartnerItem>
                <S.ServicePartnerCard
                  style={{
                    backgroundImage: `url(${"./images/e11group_white_label_partner.webp"})`,
                  }}
                >
                  <S.ServicePartnerLabel>
                    White Label partner
                  </S.ServicePartnerLabel>
                  <S.ServicePartnertitle>e11group</S.ServicePartnertitle>
                  <S.StyledLink href="https://e11group.com/" target={`_blank`}>
                    <S.ScreenReaderText>e11group</S.ScreenReaderText>
                  </S.StyledLink>
                </S.ServicePartnerCard>
              </S.ServicePartnerItem>
            </S.ServicePartnerGrid>
          </S.ServicePartnerContainer>
        </S.ServicePartner>
        <HighlightCta />
      </main>
      <Footer />
    </>
  );
};

export default ServiceSingle;
