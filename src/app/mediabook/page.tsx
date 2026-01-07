import * as S from "./Mediabook.style";
import Footer from "@/components/footer/footer";

const MediaBookPage = () => (
  <>
    <S.Mediabook>
      <S.StyledContainer>
        <S.MediaBookLogo>
          <S.StyledImage
            src="/images/mediabook-large.webp"
            alt="mediabook"
            height={40}
            width={205}
          />
        </S.MediaBookLogo>
        <S.Showcase>
          <S.StyledImage
            src="/images/app-showcase.webp"
            alt="app showcase "
            height={277}
          />
        </S.Showcase>
        <S.MediabookContent>
          <S.MediaBookTitle title="find the nearest hospitals">
            Find the nearest hospitals
          </S.MediaBookTitle>
          <S.MediaBookDescription>
            <S.Description>
              Medibook is a medical directory that helps you get information
              about hospitals in Kathmandu, locate them, get directions, and
              contact them.
            </S.Description>
          </S.MediaBookDescription>

          <S.MediabookList>
            <S.ListItem>
              <svg className="icon icon-check">
                <use xlinkHref="#icon-check"></use>
              </svg>
              Get a list of hospitals (in Kathmandu)
            </S.ListItem>
            <S.ListItem>
              <svg className="icon icon-check">
                <use xlinkHref="#icon-check"></use>
              </svg>
              Locate and get directions to the nearest hospital
            </S.ListItem>
            <S.ListItem>
              <svg className="icon icon-check">
                <use xlinkHref="#icon-check"></use>
              </svg>
              Make a direct call with a single tap
            </S.ListItem>
            <S.ListItem>
              <svg className="icon icon-check">
                <use xlinkHref="#icon-check"></use>
              </svg>
              Access useful emergency contacts wherever you are
            </S.ListItem>
          </S.MediabookList>
        </S.MediabookContent>
      </S.StyledContainer>
    </S.Mediabook>

    <Footer />
  </>
);

export default MediaBookPage;
