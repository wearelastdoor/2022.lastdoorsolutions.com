import * as React from "react";
import * as S from "./HighlightContent.style";

const HighlightContent = () => {
  return (
    <S.HighlightContent>
      <S.ContentContainer>
        <S.ContentIntro>
          <S.Intro>
            We stand for the uncompromised commitment to quality of work we
            deliver at a pace.
          </S.Intro>
          <S.ContentPath
            className={`c-highlight-content__path`}
            src="./images/triangle-path.svg"
            alt="triangle"
          />
        </S.ContentIntro>
        <S.ContentQuote>
          <S.Quote>
            Whether it is with marketing, business strategy, branding, building
            a <i>damn good website</i>, <i>large scale softwares</i>,{" "}
            <i>extending your team</i>, <i>long-term partnerships</i>, we
            businesses do anything they should do.
          </S.Quote>
        </S.ContentQuote>
      </S.ContentContainer>
    </S.HighlightContent>
  );
};

export default HighlightContent;
