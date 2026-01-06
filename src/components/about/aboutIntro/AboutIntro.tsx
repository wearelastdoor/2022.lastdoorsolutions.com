"use client";

import * as React from "react";

import * as S from "./AboutIntro.style";

const AboutIntro = () => {
  return (
    <S.AboutIntro>
      <S.IntroContainer>
        <S.IntroCol>
          <S.IntroDescription>
            <S.Description>
              We fearlessly tackle complicated challenges with empathy and
              intuition. Your business is made to grow, and it shouldn't take
              time. We are here to make sure you excel in your industry.
            </S.Description>
          </S.IntroDescription>
          <S.IntroGraphic1>
            <S.StyledImage
              src="/images/graphic-04.svg"
              alt={`Working Graphic`}
            />
          </S.IntroGraphic1>
        </S.IntroCol>
        <S.IntroCol>
          <S.IntroGraphic2>
            <S.StyledImage
              src="/images/shapes-graphic.svg"
              alt={`Shape Graphic`}
            />
          </S.IntroGraphic2>
          <S.IntroImageWrapper>
            <S.StyledImage
              src="/images/about-intro-image.jpg"
              alt={`a work desk in kathmandu.`}
              width={614}
              height={614}
            />
          </S.IntroImageWrapper>
          <S.FigCaption className="c-about-intro__figcaption">
            A work desk in kathmandu.
          </S.FigCaption>
        </S.IntroCol>
      </S.IntroContainer>
    </S.AboutIntro>
  );
};

export default AboutIntro;
