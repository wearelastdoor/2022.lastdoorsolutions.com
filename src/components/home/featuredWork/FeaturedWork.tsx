import * as React from "react";
import Link from "next/link";
import featuredWorks from "../../../staticData/featuredWorks.json";

import * as S from "./FeaturedWork.style";
import LinkButton from "@/components/common/button/LinkButton";

const FeaturedWork = () => {
  const breakpointColumns = React.useMemo(
    () => ({
      default: 2,
      767: 1,
    }),
    []
  );

  const { header, works } = featuredWorks[0];

  return (
    <S.FeaturedWork as="section">
      <S.WorkContainer>
        <S.WorkHeader>
          <S.Leadtext>{header.subTitle}</S.Leadtext>
          <S.WorkHeading title={header.title}>{header.title}</S.WorkHeading>
        </S.WorkHeader>

        <S.WorkGrid
          className="featured-work-grid"
          breakpointCols={breakpointColumns}
        >
          {works.map((work, index) => (
            <S.WorkItem key={work.title}>
              <S.WorkCard style={{ background: work.backgroundColor }}>
                <S.StyledLink
                  href={work.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <S.ScreenReaderText>{work.title}</S.ScreenReaderText>
                </S.StyledLink>

                <S.WorkLogo
                  src={work.logo.url}
                  alt={work.logo.alt}
                  style={{ maxWidth: work.logo.width }}
                />

                <S.WorkTitle>{work.title}</S.WorkTitle>
                <S.WorkCategory>{work.category}</S.WorkCategory>
                <S.WorkLetter $isAlt={index % 2 !== 0}>
                  <S.StyledImage
                    src={work.image.url}
                    alt={work.image.alt}
                    style={{ maxWidth: work.image.width }}
                  />
                </S.WorkLetter>
              </S.WorkCard>
            </S.WorkItem>
          ))}
        </S.WorkGrid>

        <S.WorkFooter>
          <LinkButton
            linkTitle="view our work"
            linkUrl="/work"
            type="dark-alt"
            animate
          />
        </S.WorkFooter>
      </S.WorkContainer>
    </S.FeaturedWork>
  );
};

export default FeaturedWork;
