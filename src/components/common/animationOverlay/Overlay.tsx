"use client";

import * as S from "./Overlay.style";
import { useAnimateRouteContext } from "@/context/AnimateRouteContext";

const Overlay = () => {
  const { overlaysRef, overlayVariant } = useAnimateRouteContext();

  return (
    <S.Overlay ref={overlaysRef}>
      <S.AnimateOverlay data-overlay $variant={overlayVariant.cls}>
        <S.AnimateOverlayLoader
          dangerouslySetInnerHTML={{ __html: overlayVariant?.svg || "" }}
          $variant={overlayVariant?.cls}
        />
      </S.AnimateOverlay>
    </S.Overlay>
  );
};

export default Overlay;

