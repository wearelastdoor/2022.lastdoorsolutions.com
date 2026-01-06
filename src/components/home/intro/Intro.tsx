"use client";

import * as S from "./Intro.style";
import { useAnimateRouteContext } from "@/context/AnimateRouteContext";
import parse from "html-react-parser";

interface introProps {
  title: string;
  listDescription: {
    description: string;
    listUser: string;
    listDesignation: string;
  }[];
}

const Intro = ({ title, listDescription }: introProps) => {
  const FEATURED_CASE_STUDY_IMAGE = "/images/featured-img-01.webp";
  const FEATURED_CASE_STUDY_LOGO = "/images/dwt-white-logo.svg";
  const FEATURED_GRAPHIC = "/images/graphic-01.svg";

  const { handleRoute } = useAnimateRouteContext();

  return (
    <S.Intro data-scroll-container>
      <S.IntroBackground></S.IntroBackground>
      <S.IntroContainer>
        <S.Introcard
          data-scroll
          data-scroll-speed="1"
          data-scroll-position="down"
        >
          <S.IntroTitle>
            {parse(title)}
          </S.IntroTitle>
          <S.IntroList>
            {listDescription.map((dataItem) => {
              return (
                <S.ListItem key={dataItem.description}>
                  <svg className="icon icon-quote">
                    <use xlinkHref="#icon-quote"></use>
                  </svg>
                  <S.IntroDescription>
                    {parse(dataItem.description)}
                  </S.IntroDescription>
                  <S.Metadata>
                    <S.Username>{dataItem.listUser}</S.Username>
                    <S.Designation>{dataItem.listDesignation}</S.Designation>
                  </S.Metadata>
                </S.ListItem>
              );
            })}
          </S.IntroList>
          <S.IntroLogo $backgroundImage={FEATURED_CASE_STUDY_IMAGE}>
            <S.StyledLink
              onClick={() => handleRoute("/discovery-world-trekking")}
            >
              <S.LogoText>
                <S.BrandLogo
                  src={FEATURED_CASE_STUDY_LOGO}
                  alt={`dwt logo`}
                  height={40}
                  width={117}
                />
                {`featured case study`}
              </S.LogoText>
            </S.StyledLink>
          </S.IntroLogo>
        </S.Introcard>
        <S.IntroFigure className="c-intro__image">
          <S.StyledImage
            src={FEATURED_GRAPHIC}
            alt={`revolutionary utility for nepalese"`}
            width={377}
            height={498}
          />
        </S.IntroFigure>
      </S.IntroContainer>
    </S.Intro>
  );
};

export default Intro;
