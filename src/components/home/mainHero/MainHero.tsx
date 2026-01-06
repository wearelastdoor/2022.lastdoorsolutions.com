"use client";

import * as S from "./MainHero.style";
import LinkButton from "@/components/common/button/LinkButton";
import parse from "html-react-parser";

interface MainHeroProps {
  title: string;
  description: string;
  linkUrl: string;
  linkTitle: string;
}

const MainHero = ({
  title,
  description,
  linkUrl,
  linkTitle,
}: MainHeroProps) => {
  return (
    <S.MainHero>
      <S.StyledContainer>
        <S.HeroBadge>
          <S.BadgeImage
            src="/images/estd-badge.png"
            alt={`18 years of experience badge.`}
            height={200}
            width={200}
            priority
          />
          <S.ScreenReaderText>18 years of experience.</S.ScreenReaderText>
        </S.HeroBadge>
        <S.HeaderText title={title}>
          {parse(title)}
        </S.HeaderText>
        <S.Description>
          {parse(description)}
        </S.Description>

        <LinkButton
          linkTitle={linkTitle}
          linkUrl={linkUrl}
          type="primary"
          animate
        />
      </S.StyledContainer>
    </S.MainHero>
  );
};

export default MainHero;
