"use client";

import {
  useLayoutEffect,
  useRef,
  useCallback,
  useState,
  useEffect,
} from "react";
import * as S from "./ScaleCarousel.style";

interface CarouselItem {
  src: string;
  alt: string;
}

interface ScaleCarouselProps {
  items: CarouselItem[];
  scale?: number;
  initialIndex?: number;
  isAlt?: boolean;
  title?: string;
  isLarge?: boolean;
}

interface CarouselState {
  currentIndex: number;
  scaleNum: number;
  itemLength: number;
  trackWidth: number;
  slideWidth: number;
  animation: boolean;
  diff: number;
}

const ScaleCarousel = ({
  items,
  scale = 0.6667,
  initialIndex = 1,
  isAlt = false,
  title,
  isLarge = false,
}: ScaleCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const stateRef = useRef<CarouselState>({
    currentIndex: initialIndex,
    scaleNum: scale,
    itemLength: items.length,
    trackWidth: 0,
    slideWidth: 0,
    animation: false,
    diff: 0,
  });

  const getGridWidth = useCallback((): number => {
    if (!gridRef.current) return 0;
    return gridRef.current.offsetWidth;
  }, []);

  const getItemOuterWidth = useCallback((element: HTMLDivElement): number => {
    if (!element) return 0;
    const rect = element.getBoundingClientRect();
    const style = window.getComputedStyle(element);
    const marginLeft = parseFloat(style.marginLeft) || 0;
    const marginRight = parseFloat(style.marginRight) || 0;
    return rect.width + marginLeft + marginRight;
  }, []);

  const getItemInnerWidth = useCallback((element: HTMLDivElement): number => {
    if (!element) return 0;
    return element.offsetWidth;
  }, []);

  const defaultVal = useCallback(() => {
    if (!itemsRef.current.length || !trackRef.current) return;

    const firstItem = itemsRef.current[0];
    if (!firstItem) return;

    let trackWidth = getItemOuterWidth(firstItem);
    const gridWidth = getGridWidth();

    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      const isCurrent = index === stateRef.current.currentIndex;
      if (isCurrent) {
        item.style.width = `${Math.ceil(gridWidth)}px`;
      } else {
        item.style.width = `${Math.ceil(gridWidth * stateRef.current.scaleNum)}px`;
      }
    });

    itemsRef.current.forEach((item) => {
      if (!item) return;
      const itemWidth = getItemOuterWidth(item);
      trackWidth += Math.ceil(itemWidth);
    });

    stateRef.current.trackWidth = trackWidth;
    if (trackRef.current) {
      trackRef.current.style.width = `${Math.ceil(trackWidth)}px`;
    }
  }, [getGridWidth, getItemOuterWidth]);

  const currentSlide = useCallback(
    (newIndex: number) => {
      if (!itemsRef.current.length || !trackRef.current) return;

      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        if (index === newIndex) {
          item.classList.add("current");
          item.style.zIndex = "99999";
        } else {
          item.classList.remove("current");
        }
      });

      let slideWidth = 0;
      const firstItem = itemsRef.current[0];
      if (!firstItem) return;

      const firstItemWidth = getItemOuterWidth(firstItem);
      const firstItemInnerWidth = getItemInnerWidth(firstItem);
      const gapBetween = firstItemWidth - firstItemInnerWidth;
      const gapBetweenModified = gapBetween > 0 ? gapBetween : 0;

      itemsRef.current.slice(0, newIndex).forEach((item, index) => {
        if (!item || index === newIndex) return;
        const gridWidth = getGridWidth();
        slideWidth +=
          -Math.ceil(gridWidth * stateRef.current.scaleNum) -
          gapBetweenModified;
      });

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${slideWidth}px, 0, 0)`;
        trackRef.current.style.transition = "all 600ms ease";
      }

      stateRef.current.slideWidth = slideWidth;
      stateRef.current.currentIndex = newIndex;
      setCurrentIndex(newIndex);
      defaultVal();
    },
    [getGridWidth, getItemOuterWidth, getItemInnerWidth, defaultVal]
  );

  const slideNext = useCallback(() => {
    if (stateRef.current.currentIndex >= stateRef.current.itemLength - 1)
      return;
    currentSlide(stateRef.current.currentIndex + 1);
  }, [currentSlide]);

  const slidePrev = useCallback(() => {
    if (stateRef.current.currentIndex <= 0) return;
    currentSlide(stateRef.current.currentIndex - 1);
  }, [currentSlide]);

  useLayoutEffect(() => {
    if (typeof window === "undefined" || !carouselRef.current) return;

    stateRef.current.itemLength = items.length;
    stateRef.current.scaleNum = isLarge ? 1 : scale;

    if (itemsRef.current.length !== items.length) {
      itemsRef.current = new Array(items.length).fill(null);
    }

    const timer = setTimeout(() => {
      const allRefsSet =
        itemsRef.current.length === items.length &&
        itemsRef.current.every((item) => item !== null);
      if (allRefsSet && gridRef.current && trackRef.current) {
        currentSlide(stateRef.current.currentIndex);
      }
    }, 100);

    const handleResize = () => {
      currentSlide(stateRef.current.currentIndex);
    };

    window.addEventListener("resize", handleResize, false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.which === 39) {
        slideNext();
      }
      if (e.key === "ArrowLeft" || e.which === 37) {
        slidePrev();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const nextButtons = document.querySelectorAll(".next");
    const prevButtons = document.querySelectorAll(".prev");

    const handleNextClick = () => slideNext();
    const handlePrevClick = () => slidePrev();

    nextButtons.forEach((btn) => {
      btn.addEventListener("click", handleNextClick);
    });
    prevButtons.forEach((btn) => {
      btn.addEventListener("click", handlePrevClick);
    });

    let startX = 0;
    let isDragging = false;

    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      if (stateRef.current.animation) return;
      isDragging = true;
      if (e.type === "touchstart") {
        const touchEvent = e as TouchEvent;
        startX = touchEvent.touches[0]?.pageX || 0;
      } else {
        const mouseEvent = e as MouseEvent;
        startX = mouseEvent.pageX || 0;
      }
      stateRef.current.diff = 0;
      e.preventDefault();
    };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      let x = 0;
      if (e.type === "touchmove") {
        const touchEvent = e as TouchEvent;
        x = touchEvent.touches[0]?.pageX || 0;
      } else {
        const mouseEvent = e as MouseEvent;
        x = mouseEvent.pageX || 0;
      }
      stateRef.current.diff = startX - x;
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;

      if (stateRef.current.animation) return;

      if (trackRef.current) {
        trackRef.current.style.transition = "all 600ms ease";
      }

      const gridWidth = getGridWidth();
      const distOfLetGo = gridWidth * 0.01;

      if (stateRef.current.diff >= distOfLetGo) {
        slideNext();
      } else if (stateRef.current.diff <= -distOfLetGo) {
        slidePrev();
      } else {
        defaultVal();
      }
    };

    const carousel = carouselRef.current;
    carousel.addEventListener("mousedown", handleMouseDown);
    carousel.addEventListener("touchstart", handleMouseDown, {
      passive: false,
    });
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleMouseMove, { passive: true });
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleKeyDown);
      nextButtons.forEach((btn) => {
        btn.removeEventListener("click", handleNextClick);
      });
      prevButtons.forEach((btn) => {
        btn.removeEventListener("click", handlePrevClick);
      });
      carousel.removeEventListener("mousedown", handleMouseDown);
      carousel.removeEventListener("touchstart", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [
    items.length,
    scale,
    currentSlide,
    slideNext,
    slidePrev,
    defaultVal,
    getGridWidth,
  ]);

  useEffect(() => {
    if (
      itemsRef.current.length === items.length &&
      itemsRef.current.every((item) => item !== null) &&
      gridRef.current &&
      trackRef.current
    ) {
      const timer = setTimeout(() => {
        currentSlide(stateRef.current.currentIndex);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [items.length, currentSlide]);

  return (
    <S.Showcase $isAlt={isAlt} $isLarge={isLarge}>
      <S.ShowcaseContainer $isLarge={isLarge}>
        {title && (
          <S.ShowcaseCarouselTitle title={title}>
            {title}
          </S.ShowcaseCarouselTitle>
        )}

        <S.ShowcaseCarousel ref={carouselRef} $isLarge={isLarge}>
          <S.ScaleCarouselGrid ref={gridRef}>
            <S.ScaleCarouselTrack ref={trackRef}>
              {items.map((item, index) => (
                <S.ScaleCarouselItem
                  key={index}
                  ref={(el) => {
                    if (el) {
                      itemsRef.current[index] = el;
                    }
                  }}
                  className={index === currentIndex ? "current" : ""}
                  data-index={index}
                >
                  <S.ShowcaseImage>
                    <img src={item.src} alt={item.alt} />
                  </S.ShowcaseImage>
                </S.ScaleCarouselItem>
              ))}
            </S.ScaleCarouselTrack>
          </S.ScaleCarouselGrid>
        </S.ShowcaseCarousel>
      </S.ShowcaseContainer>
    </S.Showcase>
  );
};

export default ScaleCarousel;
