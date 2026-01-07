"use client";

import * as S from "./ContactForm.style";

const ContactForm = () => {
  return (
    <S.Contact>
      <S.ContactContainer>
        <S.ContactCard>
          <S.ContactHeader>
            <S.ContactTitle title="Easy talk">Easy talk</S.ContactTitle>
          </S.ContactHeader>
          <S.ContactBody>
            <S.ContactPerson>
              <S.ContactPersonWrapper>
                <S.StyledFigure>
                  <S.PersonImage
                    src={`./images/footer/pravash_karki.png`}
                    alt={`Display Picture of Pravash O`}
                    className="contactPerson__image"
                  />
                </S.StyledFigure>
                <S.ContactDetails>
                  <S.PersonName>
                    Prav <S.StyledSpan>O</S.StyledSpan>
                  </S.PersonName>
                  <S.PersonAddress>Earth</S.PersonAddress>
                  <S.PersonLinks>
                    {/* <a
                      href="https://wa.me/16314193281"
                      className="contactPerson__phone"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (631) 419 3281
                    </a>

                    <a
                      href="https://wa.me/9779851167777"
                      className="contactPerson__phone"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      985 116 7777
                    </a> */}
                    <S.PersonMail href="mailto:pravo@lastdoorsolutions.com">
                      pravo@lastdoorsolutions.com
                    </S.PersonMail>
                  </S.PersonLinks>
                </S.ContactDetails>
              </S.ContactPersonWrapper>
            </S.ContactPerson>
            {/* <address className="contactPerson">
              <div className="contactPerson__wrap">
                <figure>
                  <StaticImage
                    src={`../../images/footer/bishal_mishra.png`}
                    alt={`Display Picture of Bishal Mishra`}
                    className="contactPerson__image"
                  ></StaticImage>
                </figure>
                <div className="contactPerson__details">
                  <h3 className="contactPerson__name">
                    Bishal <span>Mishra</span>
                  </h3>
                  <address className="contactPerson__address">
                      San Francisco, CA
                    </address>
                  <div className="contactPerson__links">
                      <a
                        href="tel:+12672783588"
                        className="contactPerson__phone"
                      >
                        (267) 278 3588
                      </a>
                      <a href="mailto:bishal@lastdoor.co">bishal@lastdoor.co</a>
                    </div>
                </div>
              </div>
            </address> */}
          </S.ContactBody>
        </S.ContactCard>
        <S.ContactImage>
          <S.StyledImage
            src="./images/graphic-05.webp"
            alt="Holding Evelope"
            height={369}
          />
        </S.ContactImage>
      </S.ContactContainer>
    </S.Contact>
  );
};

export default ContactForm;
