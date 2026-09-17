import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
  createContext,
  useContext,
  useId,
  Children,
  isValidElement,
  cloneElement,
} from "react";
import { twMerge } from "tailwind-merge";
import type {
  SliderProps,
  SliderTrackProps,
  SliderSlideProps,
  SliderButtonProps,
  SliderDotsProps,
  SliderArrowProps,
  SliderContextValue,
} from "./types";
import { ChevronLeft, ChevronRight } from "../icons";

function HorizontalSlider() {
  return (
    <div
      className={twMerge("flex w-full", className)}
      style={{ ...trackStyle, ...style }}
      aria-live="polite"
      aria-atomic="true"
      {...props}
    >
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;
        return cloneElement(child as React.ReactElement<SliderSlideProps>, {
          index,
        });
      })}
    </div>
  );
}

function SliderSlide({
  children,
  className,
  style,
  index: propIndex,
  ...props
}: SliderSlideProps) {
  const { registerSlide, slidesPerView } = useSliderContext();
  const slideRef = useRef<HTMLDivElement>(null);
  const generatedId = useId();
  const slideIndex = propIndex ?? 0;

  useEffect(() => {
    registerSlide(slideIndex, slideRef.current);
    return () => registerSlide(slideIndex, null);
  }, [slideIndex, registerSlide]);

  return (
    <div
      ref={slideRef}
      className={twMerge("shrink-0 px-4", className)}
      style={{ ...style, width: `${100 / slidesPerView}%` }}
      role="group"
      aria-roledescription="slide"
      id={generatedId}
      {...props}
    >
      {children}
    </div>
  );
}

function SliderButton({
  direction,
  className,
  style,
  children,
  "aria-label": ariaLabel,
  ...props
}: SliderButtonProps) {
  const {
    goNext,
    goPrev,
    isTransitioning,
    currentIndex,
    totalSlides,
    loop,
    slidesPerView,
  } = useSliderContext();
  const isPrev = direction === "prev";
  const maxIndex = Math.max(0, totalSlides - slidesPerView);
  const disabled =
    isTransitioning ||
    (!loop && (isPrev ? currentIndex === 0 : currentIndex === maxIndex));

  return (
    <button
      type="button"
      onClick={isPrev ? goPrev : goNext}
      disabled={disabled}
      className={twMerge(
        "absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-lg backdrop-blur-sm transition-all duration-200 ease-out hover:bg-white hover:text-slate-900 hover:scale-105 active:scale-95 disabled:pointer-events-none disabled:opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2",
        isPrev ? "left-3" : "right-3",
        className,
      )}
      style={style}
      aria-label={ariaLabel || (isPrev ? "Previous slide" : "Next slide")}
      {...props}
    >
      {children ??
        (isPrev ? <ChevronLeft size={22} /> : <ChevronRight size={22} />)}
    </button>
  );
}

function SliderDots({
  className,
  style,
  renderDot,
  ...props
}: SliderDotsProps) {
  const { currentIndex, totalSlides, goToSlide, slidesPerView } =
    useSliderContext();
  const maxIndex = Math.max(0, totalSlides - slidesPerView);
  const dotCount = maxIndex + 1;

  const dots = useMemo(
    () =>
      Array.from({ length: dotCount }, (_, i) => ({
        index: i,
        isActive: i === currentIndex,
      })),
    [dotCount, currentIndex],
  );

  return (
    <div
      className={twMerge(
        "absolute bottom-4 left-1/2 z-10 -translate-x-1/2 flex items-center gap-1.5",
        className,
      )}
      style={style}
      role="tablist"
      aria-label="Slide indicators"
      {...props}
    >
      {dots.map(({ index, isActive }) => {
        const onClick = () => goToSlide(index);
        if (renderDot) {
          return (
            <div key={index} role="tab" aria-selected={isActive}>
              {renderDot({ index, isActive, onClick })}
            </div>
          );
        }
        return (
          <button
            key={index}
            type="button"
            onClick={onClick}
            className={twMerge(
              "relative h-2 w-2 rounded-full transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2",
              isActive
                ? "bg-white w-8 scale-100"
                : "bg-white/40 hover:bg-white/70 hover:scale-125",
            )}
            role="tab"
            aria-selected={isActive}
            aria-label={`Go to slide ${index + 1}`}
          />
        );
      })}
    </div>
  );
}

function SliderArrow({
  direction,
  className,
  style,
  children,
  ...props
}: SliderArrowProps) {
  const buttonProps: SliderButtonProps = {
    direction,
    children,
    ...(className !== undefined && { className }),
    ...(style !== undefined && { style }),
    ...props,
  };
  return <SliderButton {...buttonProps} />;
}

const Slider = Object.assign(SliderProvider, {
  Track: SliderTrack,
  Slide: SliderSlide,
  Button: SliderButton,
  Dots: SliderDots,
  Arrow: SliderArrow,
});

export default Slider;
export { SliderTrack, SliderSlide, SliderButton, SliderDots, SliderArrow };
export type { SliderContextValue };
