"use client";

import * as React from "react";
import { CaseStudyProps } from "../caseStudyIntro/CaseStudyIntro";

import * as S from "./HighlightCard.style";

const HighlightCard = ({ themeType, title, description }: CaseStudyProps) => {
  return (
    <S.HighlightBlock $themetype={themeType}>
      <S.StyledContainer>
        <S.HighlightCard>
          <S.CardTitle title={title}>{title}</S.CardTitle>
          <S.CardDescription
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </S.HighlightCard>
      </S.StyledContainer>
    </S.HighlightBlock>
  );
};

export default HighlightCard;
