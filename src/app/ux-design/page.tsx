import * as React from "react";

import Footer from "@/components/footer/footer";
import HighlightCta from "@/components/highlightCta/HighlightCta";

import * as S from "./UxDesign.style";

const UXDesign = () => {
  return (
    <>
      <S.HeroIntro>
        <S.HeroContainer>
          <S.HeroIntroTitle title={`Leaders for Inquisitive User Experience`}>
            Leaders for Inquisitive User Experience
          </S.HeroIntroTitle>
          <S.HeroIntroDescription>
            <S.StyledParagraph>
              What is UX for us? — User Experience stands at the heart of our
              agency and helps drive the products and projects to excellence.
            </S.StyledParagraph>
          </S.HeroIntroDescription>
        </S.HeroContainer>
      </S.HeroIntro>

      <S.FeaturedArticle>
        <S.ArticleContainer>
          <S.ArticleCard>
            <S.ArticleImage
              style={{
                backgroundImage: `url(${"./images/featured-article-image.webp"})`,
              }}
            >
              <img
                src="/images/featured-article-image.webp"
                alt={`Human-centred product strategy, design, and engineering`}
              />
              <S.ArticleTag>Article</S.ArticleTag>
            </S.ArticleImage>
            <S.ArticleBody>
              <S.ArticleTitle>
                Human-centred product strategy, design, and engineering
              </S.ArticleTitle>
              <S.ArticleDescription>
                <S.StyledParagraph>
                  We have dedicated FrontEnd developers acquainted with the
                  design and skilled in using all sorts of design files,
                  including Adobe XD, Photoshop …
                </S.StyledParagraph>
              </S.ArticleDescription>
            </S.ArticleBody>
          </S.ArticleCard>
        </S.ArticleContainer>
      </S.FeaturedArticle>

      <S.Strategy>
        <S.StrategyContainer>
          <S.StrategyHeader>
            <S.StrategyTitle title={`Strategy`}>Strategy</S.StrategyTitle>
            <S.StrategySubtitle>
              Human-centered product strategy, design, and engineering.
            </S.StrategySubtitle>
          </S.StrategyHeader>
          <S.StrategyBody>
            <S.StrategyIllustrations>
              <S.StyledImage
                src="/images/strategy-illustration.svg"
                alt={`strategy Illustration`}
              />
            </S.StrategyIllustrations>
            <S.StrategyCard>
              <S.StrategyDescription>
                <S.StyledParagraph>
                  We help ignite the creative spark and direct that energy
                  toward tangible results. Important and user-centred insights
                  with business validities lead us to grasp the correct balance.
                </S.StyledParagraph>
                <S.StyledParagraph>
                  We believe that organizations aspiring for market leadership
                  should instead rally around an experience-led value
                  proposition to carve out their competitive advantage. This
                  will lead them in the long term, as it’s an integral and
                  critical component of how you attract customers. We’ll work
                  closely with you and your team to make it happen.
                </S.StyledParagraph>
              </S.StrategyDescription>
              <S.StrategyAdditional>
                <S.StrategyAdditionalMedia>
                  <S.StyledImage
                    src="/images/strategy-img.webp"
                    alt={`strategy`}
                    height={`600`}
                    width={`600`}
                  />
                </S.StrategyAdditionalMedia>
                <S.StyledParagraph>
                  This will lead them in the long term, as it’s an integral and
                  critical component of how you attract customers; feel
                  confident about what they’re buying from your company because
                  there was plenty of thought put into each step during the
                  purchase process - all this leads up towards building strong
                  relationships with clients/prospects which can help drive
                  sales (longer-lasting).
                </S.StyledParagraph>
                <S.StyledParagraph>
                  However, this can be difficult to capture with numbers alone.
                  So instead, these businesses should focus on an experience-led
                  value proposition that will help them attract more clients
                  while also making sure employees feel like stars every day at
                  work because it has been exhilarating for everyone involved!
                </S.StyledParagraph>
              </S.StrategyAdditional>
            </S.StrategyCard>
          </S.StrategyBody>
        </S.StrategyContainer>
      </S.Strategy>
      <S.Process>
        <S.ProcessContainer>
          <S.ProcessHeader>
            <S.ProcessHeading title={`Our Process`}>
              Our Process
            </S.ProcessHeading>
          </S.ProcessHeader>
          <S.ProcessItems>
            <S.ProcessHighlight>
              <S.ProcessHighlightTitle>
                An iterative process that defines, redifines and sharpens the
                product.
              </S.ProcessHighlightTitle>
              <S.ProcessHighlightBackground
                src="/images/process-oval.svg"
                alt={`processOval`}
              />
            </S.ProcessHighlight>
            <S.ProcessItem item="one">
              <S.ProcessIcon>
                <S.ProcessIconImage
                  src="/images/process-icon-1.svg"
                  alt={`Ideate`}
                />
              </S.ProcessIcon>
              <S.ProcessContent>
                <S.ProcessTitle>Ideate</S.ProcessTitle>
                <S.ProcessDescription>
                  <S.StyledParagraph>
                    Collect Data <br /> Create user personas Outline user
                    journey Document major pain points Prioritize the action
                    points
                  </S.StyledParagraph>
                </S.ProcessDescription>
              </S.ProcessContent>
            </S.ProcessItem>
            <S.ProcessItem item="two">
              <S.ProcessIcon>
                <S.ProcessIconImage
                  src="/images/process-icon-2.svg"
                  alt={`Prototype & Test`}
                />
              </S.ProcessIcon>
              <S.ProcessContent>
                <S.ProcessTitle>Prototype & Test</S.ProcessTitle>
                <S.ProcessDescription>
                  <S.StyledParagraph>
                    Collect Data <br /> Create user personas Outline user
                    journey Document major pain points Prioritize the action
                    points
                  </S.StyledParagraph>
                </S.ProcessDescription>
              </S.ProcessContent>
            </S.ProcessItem>
            <S.ProcessItem item="three">
              <S.ProcessIcon>
                <S.ProcessIconImage
                  src="/images/process-icon-3.svg"
                  alt={`Launch`}
                />
              </S.ProcessIcon>
              <S.ProcessContent>
                <S.ProcessTitle>Launch</S.ProcessTitle>
                <S.ProcessDescription>
                  <S.StyledParagraph>
                    Collect Data <br /> Create user personas Outline user
                    journey Document major pain points Prioritize the action
                    points
                  </S.StyledParagraph>
                </S.ProcessDescription>
              </S.ProcessContent>
            </S.ProcessItem>
            <S.ProcessItem item="four">
              <S.ProcessIcon>
                <img src="/images/process-icon-4.svg" alt={`Analyze`} />
              </S.ProcessIcon>
              <S.ProcessContent>
                <S.ProcessTitle>Analyze</S.ProcessTitle>
                <S.ProcessDescription>
                  <S.StyledParagraph>
                    Collect Data <br /> Create user personas Outline user
                    journey Document major pain points Prioritize the action
                    points
                  </S.StyledParagraph>
                </S.ProcessDescription>
              </S.ProcessContent>
            </S.ProcessItem>
            <S.ProcessItem item="five">
              <S.ProcessIcon>
                <S.ProcessIconImage
                  src="/images/process-icon-5.svg"
                  alt={`Discover & Define`}
                />
              </S.ProcessIcon>
              <S.ProcessContent>
                <S.ProcessTitle>Discover & Define</S.ProcessTitle>
                <S.ProcessDescription>
                  <S.StyledParagraph>
                    Collect Data <br /> Create user personas Outline user
                    journey Document major pain points Prioritize the action
                    points
                  </S.StyledParagraph>
                </S.ProcessDescription>
              </S.ProcessContent>
            </S.ProcessItem>
          </S.ProcessItems>
        </S.ProcessContainer>
      </S.Process>
      <HighlightCta />

      <Footer />
    </>
  );
};

export default UXDesign;
