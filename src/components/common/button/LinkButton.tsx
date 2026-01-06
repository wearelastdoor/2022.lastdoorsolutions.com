"use client";

import { useAnimateRouteContext } from "@/context/AnimateRouteContext";
import * as S from "./LinkButton.style";

interface LinkButtonProps {
  linkUrl: string;
  type?: string;
  linkTitle?: string;
  animate?: boolean;
}

const LinkButton = ({ linkUrl, type, linkTitle, animate }: LinkButtonProps) => {
  const { handleRoute } = useAnimateRouteContext();
  
  const isExternal = linkUrl.startsWith("http://") || linkUrl.startsWith("https://");
  
  const externalLinkProps = isExternal
    ? {
        target: "_blank",
        rel: "nofollow noopener noreferrer",
      }
    : {};

  return (
    <>
      {animate && !isExternal ? (
        <S.Button onClick={() => handleRoute(linkUrl)} type={type}>
          <S.StyledSpan></S.StyledSpan>
          {linkTitle}
        </S.Button>
      ) : (
        <S.ButtonLink href={linkUrl} type={type} {...externalLinkProps}>
          <S.StyledSpan></S.StyledSpan>
          {linkTitle}
        </S.ButtonLink>
      )}
    </>
  );
};

export default LinkButton;
