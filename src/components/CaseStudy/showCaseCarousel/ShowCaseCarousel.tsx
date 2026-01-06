"use client";

import { useState } from "react";
import CarouselData from "../../../staticData/showcase-3d-carousel.json";
import { CaseStudyProps } from "../caseStudyIntro/CaseStudyIntro";

import * as S from "./ShowCaseCarousel.style";

const ShowCaseCarousel = ({
  themeType,
  title,
  description,
}: CaseStudyProps) => {
  const data = CarouselData[0].dwt;

  const [active, setActive] = useState<number>(3);

  const goNext = () => {
    if (active < data.length) setActive((prev) => prev + 1);
  };

  const goPrev = () => {
    if (active > 1) setActive((prev) => prev - 1);
  };

  const getPosition = (index: number) => {
    const slide = index + 1; // make slide 1-based

    if (slide === active) return { pos: "active", depth: 0 };
    if (slide > active) return { pos: "after", depth: slide - active };
    return { pos: "before", depth: active - slide };
  };

  return (
    <S.CarouselShowcase $themetype={themeType}>
      <S.StyledContainer>
        <S.ShowcaseHeader>
          <S.ShowcaseTitle title={title} $themetype={themeType}>
            {title}
          </S.ShowcaseTitle>
          <S.ShowcaseDescription>{description}</S.ShowcaseDescription>
        </S.ShowcaseHeader>
      </S.StyledContainer>

      <S.ShowcaseCarousel>
        <S.Carousel>
          <S.CarouselInner>
            {data.map((item, idx) => {
              const { pos, depth } = getPosition(idx);

              return (
                <S.CarouselItem
                  key={item.image.url}
                  $position={pos}
                  $depth={depth}
                  onClick={() => setActive(idx + 1)}
                >
                  <img src={item.image.url} alt={item.image.alt} />
                </S.CarouselItem>
              );
            })}
          </S.CarouselInner>
        </S.Carousel>
      </S.ShowcaseCarousel>
      <S.SliderControl>
        <S.StyledButton type="light" onClick={goPrev}>
          Prev <S.StyledSpan></S.StyledSpan>
        </S.StyledButton>
        <S.StyledButton type="light" onClick={goNext}>
          Next <S.StyledSpan></S.StyledSpan>
        </S.StyledButton>
      </S.SliderControl>
    </S.CarouselShowcase>
  );
};

export default ShowCaseCarousel;
