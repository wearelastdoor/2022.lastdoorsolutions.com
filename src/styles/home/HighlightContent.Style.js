import Styled from 'styled-components'


export const HighlightContentWrapper = Styled.div`
  padding: 151px 0 50px;
  
  @media screen and (max-width: 960px) {
    padding-top: 100px;
  }

  .l-container {
    position: relative;
    z-index: 1;
    max-width: 940px;
  }
`

export const HighlightContentPathImg = Styled.img`
    height: 176px;
    width: 165px;
    position: absolute;
    z-index: -1;
    top: -50px;
    left: -94px;
`
export const HighlightContentIntro = Styled.div`
  letter-spacing: -0.5px;
  font-size:20px;
  font-family: var(--ff-primary-bold);
  margin-bottom: 7px;
  @media screen and (max-width: 640px){
    margin-bottom: 0;
  }

  p {
    max-width: 414px;
    width: 100%;
    vertical-align: top;
    display: inline-block;
  }
`
export const HighlightContentQuote = Styled.blockquote`
 font-size: clamp(1.6375rem, 3vw, 2.375rem);
 line-height:1.66;
  color: rgb(var(--c-brand-primary));
  letter-spacing: -1.8px;
  position: relative;
  z-index: 1;
  padding: 0;
  border: none;
  font-style: normal;
  font-family: var(--ff-primary);
  margin: 0;

  i {
    display: inline;
    margin: 0;
    font-style: italic;
    background-image: linear-gradient(to right, #8ED2DC, #8ED2DC);
    background-repeat: no-repeat;
    background-size: 100% 0.12em;
    background-position: 0 calc(100% - 0.123em);
  }

  @media screen and (max-width: 640px) {
    letter-spacing: -0.5px;
  }
`