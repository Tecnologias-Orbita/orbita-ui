import { useState, useEffect, useCallback, useRef } from "react";
import { twMerge } from "tailwind-merge";
import type { SliderProps, SliderButtonProps, SliderDotsProps } from "./types";
import { ChevronLeft, ChevronRight } from "../icons";

function SliderButton({
  onClick,
  disabled,
  className,
  position = "left",
  ...props
}: SliderButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        "absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-700 shadow-md backdrop-blur-sm transition-all duration-200 ease-in-out hover:bg-white hover:text-slate-900 hover:scale-110 active:scale-95 disabled:pointer-events-none disabled:opacity-30",
        position === "left" ? "left-4" : "right-4",
        className,
      )}
      {...props}
    >
      {position === "left" ? <ChevronLeft /> : <ChevronRight />}
    </button>
  );
}

function SliderDots({
  total,
  current,
  onDotClick,
  className,
  ...props
}: SliderDotsProps) {
  return (
    <div
      className={twMerge("flex items-center justify-center gap-2", className)}
      {...props}
    >
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === current;
        return (
          <button
            key={index}
            type="button"
            onClick={() => onDotClick?.(index)}
            className={twMerge(
              "relative h-2.5 w-2.5 rounded-full transition-all duration-300 ease-in-out",
              isActive
                ? "bg-white w-6 scale-100"
                : "bg-white/50 scale-90 hover:bg-white/80 hover:scale-105",
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={isActive ? "true" : undefined}
          />
        );
      })}
    </div>
  );
}

export default function Slider({
  slides,
  currentSlide,
  onSlideChange,
  autoPlay = false,
  autoPlayInterval = 5000,
  showButtons = true,
  showDots = true,
  loop = true,
  transitionDuration = 500,
  className,
  style,
  ...props
}: SliderProps) {
  const isControlled = currentSlide !== undefined;
  const [internalSlide, setInternalSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentIndex = isControlled ? currentSlide! : internalSlide;
  const totalSlides = slides.length;

  /* ---- navigation helpers ---- */

  // const goToSlide = useCallback(
  //   (index: number) => {
  //     if (isTransitioning) return;
  //     setIsTransitioning(true);

  //     let nextIndex = index;
  //     if (!loop) {
  //       nextIndex = Math.max(0, Math.min(index, totalSlides - 1));
  //     } else {
  //       nextIndex = ((index % totalSlides) + totalSlides) % totalSlides;
  //     }

  //     if (!isControlled) {
  //       setInternalSlide(nextIndex);
  //     }
  //     onSlideChange?.(nextIndex);

  //     setTimeout(() => {
  //       setIsTransitioning(false);
  //     }, transitionDuration);
  //   },
  //   [
  //     isTransitioning,
  //     loop,
  //     totalSlides,
  //     isControlled,
  //     onSlideChange,
  //     transitionDuration,
  //   ],
  // );

  // const goNext = useCallback(() => {
  //   goToSlide(currentIndex + 1);
  // }, [goToSlide, currentIndex]);

  // const goPrev = useCallback(() => {
  //   goToSlide(currentIndex - 1);
  // }, [goToSlide, currentIndex]);

  /* ---- autoplay ---- */

  // const resetAutoplay = useCallback(() => {
  //   if (autoplayRef.current) {
  //     clearInterval(autoplayRef.current);
  //     autoplayRef.current = null;
  //   }
  //   if (autoPlay && totalSlides > 1) {
  //     autoplayRef.current = setInterval(() => {
  //       goToSlide(currentIndex + 1);
  //     }, autoPlayInterval);
  //   }
  // }, [autoPlay, autoPlayInterval, goToSlide, currentIndex, totalSlides]);

  // useEffect(() => {
  //   resetAutoplay();
  //   return () => {
  //     if (autoplayRef.current) {
  //       clearInterval(autoplayRef.current);
  //     }
  //   };
  // }, [resetAutoplay]);

  /* ---- styles ---- */

  const trackStyle: React.CSSProperties = {
    transform: `translateX(-${currentIndex * 100}%)`,
    transition: `transform ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
  };

  return (
    <div
      className={twMerge(
        "relative w-full overflow-hidden rounded-lg",
        className,
      )}
      style={style}
      role="region"
      aria-roledescription="carousel"
      {...props}
    >
      {/* Slide Track */}
      <div
        ref={trackRef}
        className="flex w-full"
        style={trackStyle}
        aria-live="polite"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full shrink-0"
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${totalSlides}`}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      {showButtons && totalSlides > 1 && (
        <>
          {(loop || currentIndex > 0) && (
            <SliderButton
              // onClick={goPrev}
              position="left"
              aria-label="Previous slide"
            />
          )}
          {(loop || currentIndex < totalSlides - 1) && (
            <SliderButton
              // onClick={goNext}
              position="right"
              aria-label="Next slide"
            />
          )}
        </>
      )}

      {/* Dot Indicators */}
      {showDots && totalSlides > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2">
          <SliderDots
            total={totalSlides}
            current={currentIndex}
            // onDotClick={goToSlide}
          />
        </div>
      )}
    </div>
  );
}
