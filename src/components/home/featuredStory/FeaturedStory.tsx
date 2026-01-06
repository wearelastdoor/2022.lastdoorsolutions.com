import * as React from "react";
import featuredStoryData from "../../../staticData/featuredStory.json";

import * as S from "./FeaturedStory.style";
import LinkButton from "@/components/common/button/LinkButton";
import parse from "html-react-parser";
const FeaturedStory = () => {
  const data = featuredStoryData[0];

  return (
    <S.FeaturedStory>
      <S.StoryContainer>
        <S.StoryMedia>
          <S.StoryBackground>
            <S.ScreenReaderText>background</S.ScreenReaderText>
          </S.StoryBackground>
          <S.StoryImageWrapper>
            <S.ImageLogo
              src={data.logo.url}
              alt={data.logo.alt}
              style={{ maxWidth: data.logo.width }}
              width={202}
              height={131}
            />

            <img
              src={data.image.url}
              alt={data.image.alt}
              height={559}
              width={970}
            />
          </S.StoryImageWrapper>
        </S.StoryMedia>
        <S.StoryContentWrapper>
          <S.StoryContent>
            <S.StoryLeadText>{data.content.subtitle}</S.StoryLeadText>
            <S.StoryTitle title={data.content.title}>
              {data.content.title}
            </S.StoryTitle>
            <S.StoryDescription>
              {parse(data.content.description)}
            </S.StoryDescription>

            <LinkButton
              linkTitle={data.button.title}
              linkUrl={data.button.url}
              type="dark-alt"
              animate
            />
          </S.StoryContent>
        </S.StoryContentWrapper>
      </S.StoryContainer>
    </S.FeaturedStory>
  );
};

export default FeaturedStory;
