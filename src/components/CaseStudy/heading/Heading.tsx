import * as React from "react";
import { CaseStudyProps } from "../caseStudyIntro/CaseStudyIntro";

import * as S from "./Heading.style";

const Heading = ({ themeType, title, description }: CaseStudyProps) => {
  return (
    <S.Heading $themetype={themeType}>
      <S.StyledContainer>
        <S.HeadingTitle title={title} $themetype={themeType}>
          {title}
        </S.HeadingTitle>
        <S.HeadingDescription>{description}</S.HeadingDescription>
      </S.StyledContainer>
    </S.Heading>
  );
};

export default Heading;
