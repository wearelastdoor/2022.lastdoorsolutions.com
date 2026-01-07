"use client";

import dynamic from "next/dynamic";
import * as S from "./ImageCarousel.style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const ImageCarousel = () => {
  const height = 380;

  const settings = {
    dots: false,
    arrows: false,
    speed: 500,
    variableWidth: true,
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <S.CarouselWrapper>
      <Slider {...settings}>
        <S.CarouselItem>
          <S.CarouselImage
            src="/images/carousel-image-01.webp"
            height={height}
            alt="peace nepal treks"
          />
          <S.FigCaption>peace nepal treks</S.FigCaption>
        </S.CarouselItem>

        <S.CarouselItem>
          <S.CarouselImage
            src="/images/carousel-image-02.webp"
            height={height}
            alt="Mountain View"
          />
          <S.FigCaption>Far West Nepal</S.FigCaption>
        </S.CarouselItem>

        <S.CarouselItem>
          <S.CarouselImage
            src="/images/carousel-image-03.webp"
            height={height}
            alt="Hotel Jal Mahal"
          />
          <S.FigCaption>hotel jal mahal</S.FigCaption>
        </S.CarouselItem>

        <S.CarouselItem>
          <S.CarouselImage
            src="/images/carousel-image-04.webp"
            height={height}
            alt="Filming In Nepal"
          />
          <S.FigCaption>Filming In Nepal</S.FigCaption>
        </S.CarouselItem>
      </Slider>
    </S.CarouselWrapper>
  );
};

export default ImageCarousel;
