"use client";

import OurWorks from "@/staticData/ourWorks.json";

import * as S from "./CaseStudy.style";
import LinkButton from "@/components/common/button/LinkButton";

const CaseStudy = () => {
  const data = OurWorks[0];

  return (
    <S.CaseStudy>
      <S.MainContainer>
        <S.Header>
          <S.LeadText>Latest</S.LeadText>
          <S.MainTitle title="Case studies">Case studies</S.MainTitle>
        </S.Header>
        {data.caseStudies.map((caseStudy, i) => (
          <S.CaseStudyCard key={i} reversed={i % 2 !== 0}>
            <S.CaseStudyMedia
              style={{ background: `${caseStudy.backgroundColor}` }}
            >
              <S.Logo>
                <S.StyledImage
                  src={caseStudy.logo.baseUrl}
                  alt={caseStudy.logo.alt}
                  style={{ maxWidth: `${caseStudy.logo.width}px` }}
                />
              </S.Logo>
              <S.LogoName>{caseStudy.name}</S.LogoName>

              <S.FirstLetter>
                <S.StyledImage
                  src={caseStudy.image.baseUrl}
                  alt={caseStudy.image.alt}
                  style={{ maxWidth: `${caseStudy.image.width}px` }}
                />
              </S.FirstLetter>
            </S.CaseStudyMedia>
            <S.CaseStudyContent>
              <S.CaseStudyTitle
                dangerouslySetInnerHTML={{ __html: caseStudy.title }}
              />
              <S.CaseStudyDescription
                dangerouslySetInnerHTML={{ __html: caseStudy.description }}
              />
              {caseStudy.isCaseStudy ? (
                <LinkButton
                  linkTitle={caseStudy.button.title}
                  linkUrl={caseStudy.button.url}
                  type="light"
                  animate
                />
              ) : (
                <LinkButton
                  linkTitle={caseStudy.button.title}
                  linkUrl={caseStudy.button.url}
                  type="light"
                />
              )}
            </S.CaseStudyContent>
          </S.CaseStudyCard>
        ))}
      </S.MainContainer>
    </S.CaseStudy>
  );
};

export default CaseStudy;
