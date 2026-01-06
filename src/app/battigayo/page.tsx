import HighlightCta from "@/components/highlightCta/HighlightCta";
import Footer from "@/components/footer/footer";

import * as S from "./Battigayo.style";

const BattiGayoPage = () => (
  <>
    <S.Battigayo>
      <S.StyledContainer>
        <S.BattigayoHeader>
          <S.HeaderImage>
            <S.StyledImage
              src="/images/batti-on-off.png"
              alt="batti on off"
              height={278}
              width={306}
            />
          </S.HeaderImage>
          <S.BattigayoTitle title="We are happy that battigayo shut down">
            We are happy that battigayo shut down
          </S.BattigayoTitle>
        </S.BattigayoHeader>

        <S.BattigayoIntro>
          <S.IntroContent>
            <S.IntroLogo>
              <S.StyledImage
                src="/images/battigayo-logo-large.png"
                alt="Battigayo"
                height={98}
                width={308}
              />
            </S.IntroLogo>
            <S.IntroDescription>
              <S.Description>
                Back then, the acute issue of crippling power shortage that
                nepal was going through for the past decade has been eradicated
                as of may, 2018 thanks to the great work done by mr kulman
                ghising, the current managing director of nepal electricity
                corporation. no more load shedding yay!!
              </S.Description>
              <S.Description>
                We can’t thank you more for your leadeership in solving this
                long-running issue. great work, sir.
              </S.Description>
            </S.IntroDescription>
          </S.IntroContent>
          <S.IntroMedia>
            <S.IntroImage
              src="./images/kul-man-ghising.png"
              alt="Kul man ghusing"
              width={285}
              height={459}
            />
            <S.IntroName>Mr. Kul Man Ghising</S.IntroName>
            <S.IntroSlogan>
              The man who helped battigayo to shut down.
            </S.IntroSlogan>
          </S.IntroMedia>
        </S.BattigayoIntro>
        <S.BattigayoStory>
          <S.StoryTitle title="The battigayo story…">
            The battigayo story…
          </S.StoryTitle>
          <S.StoryContent>
            <S.Description>
              Battigayo was developed as a way to give something back to the
              community and solve an existing problem. the app helped everyone
              plan out their schedule around the ongoing power shortage in the
              country. with no more load shedding, we just love saying that :),
              the services offered by our popular ios app battigayo is
              redundant.
            </S.Description>
            <S.Description>
              We'll always remember the moment when we all here at idealaya
              realised that our users do not require the services offered
              through our application anymore. we have stopped the development
              of the app and pray that we’ll not need to revive it in the
              future. we have loved every minute of working on this app and
              cherish the relationships created during the process.
            </S.Description>
            <S.Description>
              We love creating simple solutions to everyday problems and are
              always on a lookout for new problems to tackle. we look forward to
              your continued support and suggestions moving forward.
            </S.Description>
            <S.Description>
              Thank you all our 100k plus users for your wonderful feedback and
              support.
            </S.Description>
            <S.Description>Namaste!</S.Description>
          </S.StoryContent>
        </S.BattigayoStory>
      </S.StyledContainer>
    </S.Battigayo>

    <HighlightCta themeColor="dark" />

    <Footer />
  </>
);

export default BattiGayoPage;
