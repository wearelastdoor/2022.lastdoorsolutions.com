import * as React from "react";
import OurClientData from "../../../staticData/ourClient.json";

import * as S from "./OurClient.style";
import LinkButton from "@/components/common/button/LinkButton";

// Import svg Image

const OurClient = () => {
  const data = OurClientData[0];

  return (
    <S.Client>
      <S.ClientContainer>
        <S.Header>
          <S.HeaderContent>
            <S.Leadtext>{data.header.subTitle}</S.Leadtext>
            <S.ClientTitle title={`${data.header.title}`}>
              {data.header.title}
            </S.ClientTitle>
            <S.ClientDescription>{data.header.description}</S.ClientDescription>
          </S.HeaderContent>
          <S.ClientImageWrapper>
            <S.StyledImage
              src="/images/team-work.svg"
              alt={`we craft brands, that people love`}
              height={354}
              width={334}
            />
          </S.ClientImageWrapper>
        </S.Header>
        <S.ClientCard>
          <S.CardGrid>
            {data.clients.map((data, index) => {
              return (
                <S.ClientList key={index}>
                  <S.ClientLogo
                    className="c-client__logo"
                    src={data.image.baseUrl}
                    alt={data.image.alt}
                    style={{ width: `${data.image.width}px` }}
                  />
                </S.ClientList>
              );
            })}
          </S.CardGrid>
          <S.ClientIntro>
            <S.ClientDetails>
              <S.DetailDescription>
                You can expect us to do anything your company does or doesn’t.
                Since our inception in 2006, we have been tied with the
                business-to-business working model. It has been fun to work with
                people in different time zones.
              </S.DetailDescription>
            </S.ClientDetails>

            <LinkButton
              linkTitle="request partner work"
              linkUrl="mailto:pravo@lastdoorsolutions.com"
              type="dark-alt"
            />
          </S.ClientIntro>
        </S.ClientCard>
      </S.ClientContainer>
    </S.Client>
  );
};

export default OurClient;
