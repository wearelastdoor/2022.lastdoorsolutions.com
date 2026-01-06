"use client";

import PastClientData from "@/staticData/pastClients.json";
import dynamic from "next/dynamic";

import * as S from "./PastClients.style";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const PastClients = () => {
  const data = PastClientData[0];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <S.PastClientsWrapper>
      <Slider {...settings}>
        {data.logos.map(({ image }, i) => {
          const { baseUrl, alt, width } = image;
          return (
            <S.Logo width={width} key={i}>
              <S.StyledImage
                src={baseUrl}
                alt={alt}
                style={{ maxWidth: `${width}px` }}
              />
            </S.Logo>
          );
        })}
      </Slider>
    </S.PastClientsWrapper>
  );
};

export default PastClients;
