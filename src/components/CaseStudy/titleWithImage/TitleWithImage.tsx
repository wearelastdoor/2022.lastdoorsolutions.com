import * as React from "react";
import * as S from "./TitleWithImage.style";

interface TitleWithImageProps {
  themeType: string;
  title: string;
}

const TitleWithImage = ({ themeType, title }: TitleWithImageProps) => {
  return (
    <S.TitleWithImage themetype={themeType}>
      <S.StyledContainer>
        <S.MainTitle title={title} themetype={themeType}>
          {title}
        </S.MainTitle>

        <S.TitleImage themetype={themeType}>
          <S.StyledImage
            src="./images/dashboard.jpg"
            alt="Dashboard Showcase"
            height={696}
          />
        </S.TitleImage>
      </S.StyledContainer>
    </S.TitleWithImage>
  );
};

export default TitleWithImage;
