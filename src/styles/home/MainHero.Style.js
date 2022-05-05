import Styled from "styled-components";

export const MainHeroWrapper = Styled.section`
    background-color: rgb(var(--c-secondary));
`
export const MainHeroContainer = Styled.div`
       position: relative;
        z-index: 1;
        padding: 227px 20px 120px;

        @media screen and (max-width: 640px) {
            padding: 185px 20px 80px;
        }
`

export const MainHeroBadge = Styled.div`
      position: absolute !important;
        top: 73px;
        right: -15px;
        z-index: -1;
        transition: all 300ms ease;
        height: 200px;
        width: 200px;
        @media screen and (max-width: 1300px) {
            right: 20px;
        }
        @media screen and (max-width: 640px) {
         height: 150px;
            width: 150px;
            top: 83px;
            right: 30px;
        }
`


export const MainHeroTitle = Styled.h1`
        font-size: clamp(4.6875rem, 10vw, 7.5rem);
        font-family: var(--ff-primary-black);
        font-weight: normal;
        color: rgb(var(--c-brand-primary));
        display: inline-block;
        vertical-align: top;
        line-height: 1;
        position: relative;
        z-index: 1;
        margin-bottom: clamp(25px, 5vw, 33px);
        width: 82.9%;
        letter-spacing: -0.437475rem;

        @media screen and (max-width: 1300px) {
            width: 68%;
        }

      @media screen and (max-width: 640px) {
            letter-spacing: -0.28125rem;

            max-width: min(316px, 100%);
            width: 100%;
        }

        &:after {
            content: attr(title);
            position: absolute;
            top: 0;
            color: transparent;
            z-index: -1;
            display: inline-block;
            vertical-align: top;
            left: 0;
            right: 0;
            transform: translate(5px, 5px) translateZ(0);
            backface-visibility: hidden;
       @supports ((text-stroke: 1px white) or (-webkit-text-stroke: 1px white)) {
        color: transparent;
        -webkit-text-stroke: 1px rgb(var(--c-primary));
        text-stroke: 1px rgb(var(--c-primary));
        text-shadow: none;
        }

            @media screen and (max-width: 640px) {
                transform: translate(3px, 3px) translateZ(0);
            }
        }
`

export const MainHeroDescription = Styled.div`
        max-width: 520px;
        width: 100%;
        letter-spacing: -0.4px;
        margin-bottom: 29px;
`