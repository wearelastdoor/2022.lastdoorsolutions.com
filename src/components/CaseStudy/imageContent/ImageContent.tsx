import * as React from "react";
import ImageContentData from "@/staticData/imageContent.json";
import * as S from "./ImageContent.style";

interface ImageContentProps {
  themeType?: string;
  id: number;
  layout?: string;
}

const ImageContent = ({ themeType, id, layout }: ImageContentProps) => {
  const data = ImageContentData.find((item) => item.contentId === id);

  if (!data) return null;

  console.log(layout);

  return (
    <S.ImageContent themetype={themeType}>
      <S.StyledContainer layout={layout}>
        <S.MainContent>
          <S.ContentTitle dangerouslySetInnerHTML={{ __html: data.title }} />
          <S.ContentDescription
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </S.MainContent>
        <S.ContentImage>
          <S.ContentImageInner style={{ maxWidth: `${data.image.width}px` }}>
            <S.StyledImage
              src={data.image.src}
              alt={data.image.alt}
              loading="lazy"
              style={{ width: "100%", display: "block" }}
              width={498}
              height={388}
            />
          </S.ContentImageInner>
        </S.ContentImage>
      </S.StyledContainer>
    </S.ImageContent>
  );
};

export default ImageContent;
