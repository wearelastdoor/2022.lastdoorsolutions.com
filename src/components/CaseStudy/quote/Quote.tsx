import * as S from "./Quote.style";

interface QuoteProps {
  themeType: string;
  blockQuote: string;
  quoteAuthor: string;
  designation: string;
}

const Quote = ({
  themeType,
  blockQuote,
  quoteAuthor,
  designation,
}: QuoteProps) => {
  return (
    <S.Quote $themetype={themeType}>
      <S.StyledContainer>
        <S.BlockQuote
          className="c-quote__blockquote"
          dangerouslySetInnerHTML={{ __html: blockQuote }}
        />
        <S.QuoteMeta>
          <S.QuoteUser>{quoteAuthor}</S.QuoteUser>
          <S.QuoteDesignation $themetype={themeType}>
            {designation}
          </S.QuoteDesignation>
        </S.QuoteMeta>
      </S.StyledContainer>
    </S.Quote>
  );
};

export default Quote;
