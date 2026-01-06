"use client";

import { useEffect, useRef, useState } from "react";
import * as S from "./LoaderCounter.style";

interface LoaderCounterProps {
  target: number;
  duration?: number;
  onComplete?: () => void;
}

export default function LoaderCounter({
  target,
  duration = 1000,
  onComplete,
}: LoaderCounterProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [shouldShow, setShouldShow] = useState(false);
  const hasRunRef = useRef(false);

  useEffect(() => {
    // Check if this is the first page load ever
    if (hasRunRef.current) return;
    
    const hasLoadedBefore = sessionStorage.getItem('has-loaded-initial');
    
    if (!hasLoadedBefore) {
      setTimeout(() => setShouldShow(true), 0);
      hasRunRef.current = true;
    } else {
      // Not first load, immediately mark body as loaded
      document.body.classList.add('content-loaded');
    }
  }, []);

  useEffect(() => {
    if (!shouldShow) return;
    
    const spanEl = spanRef.current;
    if (!spanEl) return;

    const counterEl = spanEl.parentElement;
    const loaderEl = counterEl?.closest(".c-loader");

    const swing = (progress: number) => 0.5 - Math.cos(progress * Math.PI) / 2;

    counterEl?.classList.add("visible");
    spanEl.textContent = "0";

    let rafId = 0;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      const easedProgress = swing(rawProgress);
      const currentValue = Math.ceil(target * easedProgress);

      spanEl.textContent = currentValue.toString();

      if (rawProgress < 1) {
        rafId = requestAnimationFrame(step);
        return;
      }

      spanEl.textContent = target.toString();

      setTimeout(() => {
        loaderEl?.classList.add("completed");
        document.body.classList.add("content-loaded");
        sessionStorage.setItem('has-loaded-initial', 'true');
        onComplete?.();
      }, 500);
    };

    rafId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafId);
  }, [shouldShow, target, duration, onComplete]);

  // Don't render if not needed
  if (!shouldShow) return null;

  return (
    <S.Loader className="c-loader">
      <S.LoaderCounter>
        <S.StyledSpan ref={spanRef}>0</S.StyledSpan> %
      </S.LoaderCounter>
    </S.Loader>
  );
}
