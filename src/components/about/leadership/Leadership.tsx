import * as React from "react";
import OurTeam from "../../../staticData/ourTeam.json";

import * as S from "./Leadership.style";

const Leadership = () => {
  const imageSize = 180;
  const data = OurTeam[0];

  return (
    <S.Leadership>
      <S.MainContainer>
        <S.StyledContent>
          <S.LeadershipTitle title={`Our Team`}>Our Team</S.LeadershipTitle>
          <S.LeadershipDescription>
            <S.Description>
              We value trust, encourage curiosity, and nourish talent. If you
              are a rare combination of passion, ambition, and imagination then
              join our team, we are in it together.
            </S.Description>
          </S.LeadershipDescription>
        </S.StyledContent>
        <S.MainGrid>
          {data.teams.map((team, idx) => {
            const { name, designation, image } = team;
            return (
              <S.GridColumn key={idx}>
                <S.LeadershipCard type="outlined">
                  <S.CardImage
                    src={image.baseUrl}
                    alt={image.alt}
                    style={{ maxWidth: `${imageSize}px` }}
                  />

                  <S.CardName>{name}</S.CardName>
                  <S.CardDesignation>{designation}</S.CardDesignation>
                </S.LeadershipCard>
              </S.GridColumn>
            );
          })}

          <S.GridColumn>
            <S.LeadershipCard type="linked">
              <S.CardImage src="./images/dummy-face.png" alt="Dummy Face" />
              <S.JoinUs>Join Us</S.JoinUs>
              <S.MailLink
                href="mailto:hello@lastdoorsolutions.com"
                className="cover-link"
              >
                <S.Hidden>hello@lastdoorsolutions.com</S.Hidden>
              </S.MailLink>
            </S.LeadershipCard>
          </S.GridColumn>
        </S.MainGrid>
      </S.MainContainer>
    </S.Leadership>
  );
};

export default Leadership;
