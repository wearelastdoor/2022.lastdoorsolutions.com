import { device } from "@/styles/theme/breakpoints";
import styled from "styled-components";

const HighlightContent = styled.div`
  padding: ${({ theme }) => `${theme.spacing.custom.r15_1} 0 ${theme.spacing.custom.r5}`};

  @media ${device.tablet} {
    padding-top: 10rem;
  }
`;

const ContentContainer = styled.div`
  max-width: ${({ theme }) => theme.spacing.custom.r94};
  padding: ${({ theme }) => `0 ${theme.spacing.lg}`};
  position: relative;
  margin: auto;
  z-index: 1;
`;

const ContentIntro = styled.div`
  letter-spacing: -0.05rem;
  font-size: ${({ theme }) => theme.font.size.body.xl};
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: ${({ theme }) => theme.spacing.custom.r0_7};

  @media ${device.phone} {
    margin-bottom: 0;
  }
`;

const Intro = styled.p`
  max-width: ${({ theme }) => theme.spacing.custom.r41_4};
  width: 100%;
  vertical-align: top;
  display: inline-block;
  line-height: 1.6;
`;

const ContentPath = styled.img`
height: ${({ theme }) => theme.spacing.custom.r17_6};
  width: ${({ theme }) => theme.spacing.custom.r16_5};
    position: absolute;
    z-index: -1;
    top: -5.0rem;
    left: -9.4rem;
  }`;

const ContentQuote = styled.blockquote`
  font-size: clamp(2.62rem, 3vw, 3.8rem);
  color: ${({ theme }) => theme.colors.primary.gray[50]};
  letter-spacing: -0.18rem;
  position: relative;
  z-index: 1;
  padding: 0;
  border: none;
  font-style: normal;
  font-family: ${({ theme }) => theme.fonts.body};
  margin: 0;

  i {
    display: inline;
    margin: 0;
    background-image: linear-gradient(to right, ${({ theme }) => theme.color.primary}, ${({ theme }) => theme.color.primary});
    background-repeat: no-repeat;
    background-size: 100% 0.12em;
    background-position: 0 calc(100% - 0.123em);
  }

  @media ${device.phone} {
    letter-spacing: -0.05rem;
  }
`;

const Quote = styled.p`
  line-height: 1.445;
`;

export {
  ContentContainer,
  ContentIntro,
  ContentPath,
  ContentQuote,
  HighlightContent,
  Intro,
  Quote,
};
