import * as React from "react";

import * as S from "./Stats.style";

const Stats = () => {
  return (
    <S.Stats>
      <S.StatsContainer>
        <S.StatsContent>
          <S.OffsetBg $variant="primary"></S.OffsetBg>
          <S.OffsetBg $variant="secondary"></S.OffsetBg>
          <S.StatsTitle title={`Last Door’s story`}>
            Last Door’s story
          </S.StatsTitle>
          <S.StatsDescription>
            <S.Description>
              We began our agency in 2003, intending to provide creative and
              technical solutions for brands in the United States and local
              agencies in Nepal. Working together on projects for these regions
              allowed us to ascend while maintaining significant standards
              across cultures and within them! Over time, our clientele in the
              U.K., Australia, and across Europe have welcomed us with open arms
              as well. Our work has paid off nicely over time after every
              project or partnership because it makes what we do worthwhile -
              which is why you'll see we have been working with many companies
              for years.
            </S.Description>
            <S.Description>
              We've built a team that can help your brand (small or large)
              succeed in any environment. Our bespoke services have created
              success stories for clients and partners, proving our expertise
              and ability to grow their business by sky-rocketing through
              digital means.
            </S.Description>
            <S.Description>
              We are committed to our client's needs and desire for a
              high-quality product. Therefore, we stand behind the
              uncompromising work that we do, backed by an in-house team of
              experts and a vast network of tech workers who can scale up any
              level or type if required.
            </S.Description>
          </S.StatsDescription>
          <S.StatsCounter type="experience" $showOnDesktop>
            <S.StatsCounterNumber>
              18 <S.StyledPlus>+</S.StyledPlus>
            </S.StatsCounterNumber>
            <S.CounterLabel>years of operation</S.CounterLabel>
          </S.StatsCounter>
          <S.StatsCounter type="partners" $showOnDesktop>
            <S.StatsCounterNumber>
              900 <S.StyledPlus>+</S.StyledPlus>
            </S.StatsCounterNumber>
            <S.CounterLabel>
              clients and <br />
              partners served
            </S.CounterLabel>
          </S.StatsCounter>
        </S.StatsContent>
        <S.CounterHolder>
          <S.StatsCounter type="experience" $showOnTablet>
            <S.StatsCounterNumber>
              18 <S.StyledPlus>+</S.StyledPlus>
            </S.StatsCounterNumber>
            <S.CounterLabel>years of operation</S.CounterLabel>
          </S.StatsCounter>
          <S.StatsCounter type="partners" $showOnTablet>
            <S.StatsCounterNumber>
              900 <S.StyledPlus>+</S.StyledPlus>
            </S.StatsCounterNumber>
            <S.CounterLabel>partners served</S.CounterLabel>
          </S.StatsCounter>
          <S.StatsCounter type="clients" $pleasedClient>
            <S.StatsCounterNumber>
              100 <S.StyledPlus>%</S.StyledPlus>
            </S.StatsCounterNumber>
            <S.CounterLabel>client satisfaction</S.CounterLabel>
          </S.StatsCounter>
        </S.CounterHolder>
      </S.StatsContainer>
    </S.Stats>
  );
};

export default Stats;
