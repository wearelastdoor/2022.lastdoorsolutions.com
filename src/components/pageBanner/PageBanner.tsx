import * as React from "react";
import * as S from "./PageBanner.style";

interface PageBannerProps {
  title: string;
  pageName: string;
  themeType?: string;
  containerWidth?: number;
  pageDescription?: string | React.ReactNode;
}

const PageBanner = ({
  title,
  pageName,
  themeType,
  containerWidth,
  pageDescription,
}: PageBannerProps) => {
  return (
    <S.PageBanner themetype={themeType}>
      <S.BannerContainer>
        <S.BannerContent>
          <S.PageName themetype={themeType}>{pageName}</S.PageName>
          <S.Bannertitle
            title={title}
            themetype={themeType}
            style={
              containerWidth ? { maxWidth: `${containerWidth}px` } : undefined
            }
          >
            {title}
          </S.Bannertitle>
          {pageDescription && (
            <S.IntroDescription
              style={
                containerWidth ? { maxWidth: `${containerWidth}px` } : undefined
              }
            >
              {typeof pageDescription === "string" ? (
                <S.PageDescription>{pageDescription}</S.PageDescription>
              ) : (
                pageDescription
              )}
            </S.IntroDescription>
          )}
        </S.BannerContent>
      </S.BannerContainer>
    </S.PageBanner>
  );
};

export default PageBanner;
