import * as S from "./CaseStudyIntro.style";
import parse from "html-react-parser";
export interface CaseStudyProps {
  title?: string;
  themeType: string;
  description: string;
}

const CaseStudyIntro = ({ themeType, description }: CaseStudyProps) => {
  return (
    <S.CaseStudyIntro $themetype={themeType}>
      <S.StyledContainer>
        <S.IntroContent $themetype={themeType}>
          {parse(description)}
        </S.IntroContent>
        <S.IntroImage>
          <S.StyledImage
            src="/images/heritage.png"
            alt="heritage"
            width={1169}
            height={866}
          />
        </S.IntroImage>
      </S.StyledContainer>
    </S.CaseStudyIntro>
  );
};

export default CaseStudyIntro;
