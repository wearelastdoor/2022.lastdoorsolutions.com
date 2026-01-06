"use client";

import React, { useContext, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useOverlayAnimation } from "@/hooks/useOverlayAnimation";

const AnimateRouteContext = React.createContext<any>(null);

const overlayVariants = [
  {
    cls: "animate-overlay--first",
    svg: `<svg width="172" height="172" viewBox="0 0 172 172" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M86 171C39.1121 171 1 132.888 1 86C1 39.1121 39.1121 1 86 1C132.888 1 171 39.1121 171 86V86C171 132.888 132.888 171 86 171Z" fill="#F5F6F0" stroke="#17212A"/>
    </svg>`,
  },
  {
    cls: "animate-overlay--second",
    svg: `<svg width="211" height="211" viewBox="0 0 211 211" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M210 210H1V1H210V210Z" fill="#F5F6F0" stroke="#17212A"/>
    </svg>`,
  },
  {
    cls: "animate-overlay--third",
    svg: `<svg width="206" height="196" viewBox="0 0 206 196" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M103.259 2L134.551 65.4767L204.519 75.6545L153.89 125.063L165.841 194.829L103.259 161.891L40.6767 194.829L52.6294 125.063L2 75.6545L71.9686 65.4767L103.259 2Z" fill="#F5F6F0" stroke="#17212A"/>
    </svg>`,
  },
];

export const AnimateRouteContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [overlayVariant, setOverlayVariant] = useState(overlayVariants[0]);
  const overlaysRef = useRef<HTMLDivElement | null>(null);
  const isTransitioning = useRef(false);
  const router = useRouter();
  const { animateExit, animateEntry } = useOverlayAnimation();
  const pathname = usePathname();

  const handleRoute = async (url: string) => {
    const normalizedUrl = url.startsWith("/") ? url : `/${url}`;
    if (normalizedUrl === pathname) return;
    isTransitioning.current = true;
    setOverlayVariant(
      overlayVariants[Math.floor(Math.random() * overlayVariants.length)]
    );

    await animateExit(overlaysRef);
    router.push(normalizedUrl);

    const waitForPathChange = () =>
      new Promise<void>((resolve) => {
        const check = () => {
          if (window.location.pathname === normalizedUrl) resolve();
          else setTimeout(check, 10);
        };
        check();
      });
    await waitForPathChange();

    await animateEntry(overlaysRef);
    isTransitioning.current = false;
  };

  return (
    <AnimateRouteContext.Provider
      value={{ overlaysRef, overlayVariant, handleRoute }}
    >
      {children}
    </AnimateRouteContext.Provider>
  );
};

export const useAnimateRouteContext = () => {
  const ctx = useContext(AnimateRouteContext);
  if (!ctx) throw new Error("AnimateRouteContext missing");
  return ctx;
};
