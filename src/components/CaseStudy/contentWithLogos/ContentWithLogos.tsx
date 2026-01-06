import * as React from "react";
import * as S from "./ContentWithLogos.style";

interface ContentWithLogosProps {
  themeType: string;
  title: string;
  description: string;
}

const ContentWithLogos = ({
  themeType,
  title,
  description,
}: ContentWithLogosProps) => {
  return (
    <S.LogosContent $themetype={themeType}>
      <S.StyledContainer>
        <S.ContentCol $centered>
          <S.Logos>
            <S.LogoItem>
              <S.StyledImage
                src={"./images/logo-laravel.png"}
                alt="Laravel"
                height={60}
              />
            </S.LogoItem>
            <S.LogoItem>
              <S.StyledImage
                src={"./images/logo-html5.png"}
                alt="HTML5"
                height={60}
              />
            </S.LogoItem>
            <S.LogoItem>
              <S.StyledImage
                src={"./images/logo-react.png"}
                alt="React"
                height={53}
              />
            </S.LogoItem>
            <S.LogoItem>
              <S.StyledImage
                src={"./images/logo-css3.png"}
                alt="CSS3"
                height={60}
              />
            </S.LogoItem>
          </S.Logos>
          <S.ShowcaseDescription>{description}</S.ShowcaseDescription>
        </S.ContentCol>
        <S.ContentCol>
          <S.LogosTitle title={title} $themetype={themeType}>
            {title}
          </S.LogosTitle>
        </S.ContentCol>
      </S.StyledContainer>
    </S.LogosContent>
  );
};

export default ContentWithLogos;
