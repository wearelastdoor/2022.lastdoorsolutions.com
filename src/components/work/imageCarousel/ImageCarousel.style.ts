"use client";

import { device } from "@/styles/theme/breakpoints";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  background-color: ${({ theme }) => `rgba(${theme.colorRgb.secondary})`};

  .slick-list {
    margin: ${({ theme }) => `0 -${theme.spacing.md} 0 -${theme.spacing["5xl"]}`};
    height: ${({ theme }) => theme.spacing.custom.r38};

    @media ${device.phone} {
      margin: ${({ theme }) => `0 -${theme.spacing.md}`};
    }
  }
`;

const CarouselItem = styled.div`
  position: relative;
  z-index: 1;
  margin-left: ${({ theme }) => theme.spacing.md};
`;

const CarouselImage = styled.img`
  margin-bottom: ${({ theme }) => `-${theme.spacing.custom.r1}`};
  height: ${({ theme }) => theme.spacing.custom.r38};
  width: auto;
`;

const FigCaption = styled.figcaption`
  bottom: ${({ theme }) => theme.spacing.custom.r0_7};
  position: absolute;
  z-index: 1;
  left: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.font.size.body.sm};
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0 0 0.3rem ${({ theme }) => theme.colors.black};
  margin-bottom: 0;
  line-height: 1.6;
`;

export { CarouselWrapper, CarouselImage, CarouselItem, FigCaption };
