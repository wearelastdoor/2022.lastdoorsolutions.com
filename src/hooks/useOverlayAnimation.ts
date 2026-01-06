"use client";

import { useCallback } from "react";
import { gsap, Power2 } from "gsap";

export const useOverlayAnimation = () => {
  const animateExit = useCallback(
    (overlaysRef: React.RefObject<HTMLDivElement | null>) => {
      return new Promise<void>((resolve) => {
        if (!overlaysRef.current) return resolve();

        const overlayBg =
          overlaysRef.current.querySelectorAll<HTMLElement>("[data-overlay]");

        document.body.classList.remove("content-loaded");

        gsap.set(overlayBg, { pointerEvents: "all" });

        gsap
          .timeline({
            onComplete: resolve,
          })
          .fromTo(
            overlayBg,
            { clipPath: "inset(0% 0% 0% 100%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              ease: Power2.easeInOut,
              duration: 0.7,
            }
          );
      });
    },
    []
  );

  const animateEntry = useCallback(
    (overlaysRef: React.RefObject<HTMLDivElement | null>) => {
      return new Promise<void>((resolve) => {
        if (!overlaysRef.current) return resolve();

        const overlayBg =
          overlaysRef.current.querySelectorAll<HTMLElement>("[data-overlay]");

        // Scroll to top
        window.scrollTo(0, 0);

        gsap
          .timeline({
            delay: 0.7,
            onComplete: () => {
              gsap.set(overlayBg, {
                clearProps: "all",
                pointerEvents: "none",
              });
              setTimeout(() => {
                document.body.classList.add("content-loaded");
              }, 200);
              resolve();
            },
          })
          .to(overlayBg, {
            clipPath: "inset(0% 100% 0% 0%)",
            ease: Power2.easeInOut,
            duration: 0.7,
          });
      });
    },
    []
  );

  return { animateExit, animateEntry };
};
