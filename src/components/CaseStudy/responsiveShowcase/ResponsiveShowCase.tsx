import * as React from "react";
import * as S from "./ResponsiveShowCase.style";

interface ResponsiveShowCaseProps {
  themeType: string;
  title: string;
}

const ResponsiveShowCase = ({ themeType, title }: ResponsiveShowCaseProps) => {
  return (
    <S.ResponsiveShowcase themetype={themeType}>
      <S.StyledContainer>
        <S.ShowcaseTitle title={title} themetype={themeType}>
          {title}
        </S.ShowcaseTitle>

        <S.ShowcaseImage>
          <S.StyledImage
            src="./images/responsiveness-showcase.png"
            alt="Discovery World Trekking responsive show case"
          />
        </S.ShowcaseImage>
      </S.StyledContainer>
    </S.ResponsiveShowcase>
  );
};

export default ResponsiveShowCase;
