import * as React from "react";

import * as S from "./FrontShowCase.style";

interface FrontShowCaseProps {
  themeType: string;
  title: string;
  description: string;
}

const FrontShowCase = ({
  themeType,
  title,
  description,
}: FrontShowCaseProps) => {
  return (
    <S.FrontShowcase themetype={themeType}>
      <S.StyledContainer>
        <S.ShowcaseTitle title={title} themetype={themeType}>
          {title}
        </S.ShowcaseTitle>
        <S.ShowcaseDescription>{description}</S.ShowcaseDescription>
        <S.ShowcaseImage themetype={themeType}>
          <S.StyledImage
            src={`./images/dwt-front-showcase.jpg`}
            alt="Discovery World Trekking Front page show case"
            height={546}
          />
        </S.ShowcaseImage>
      </S.StyledContainer>
    </S.FrontShowcase>
  );
};

export default FrontShowCase;
