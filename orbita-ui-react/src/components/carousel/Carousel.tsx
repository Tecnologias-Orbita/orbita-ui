import { twMerge } from "tailwind-merge";
import type { IComponent } from "../common";
import { CarouselProvider, useCarousel } from "../../contexts";
import { useEffect, useId } from "react";
import { ChevronLeft, ChevronRight } from "../icons";
import { Btn } from "../buttons";

interface CarouselButtonsProps {
  leftButtonFactory?: ((goPrev: () => void) => React.ReactNode) | undefined;
  rightButtonFactory?: ((goNext: () => void) => React.ReactNode) | undefined;
}

function CarouselButtons({
  leftButtonFactory,
  rightButtonFactory,
}: CarouselButtonsProps) {
  const { goNext, goPrev } = useCarousel();

  return (
    <>
      {leftButtonFactory ? (
        leftButtonFactory(goPrev)
      ) : (
        <Btn
          className="flex items-center justify-center rounded-full p-2 absolute top-1/2 left-4 z-10 group-hover:opacity-100 opacity-0 transition-opacity"
          style={{
            transform: "translateY(calc(-50% - 8px))",
          }}
          onClick={goPrev}
        >
          <ChevronLeft size={24} />
        </Btn>
      )}
      {rightButtonFactory ? (
        rightButtonFactory(goNext)
      ) : (
        <Btn
          className="flex items-center justify-center rounded-full p-2 absolute top-1/2 right-4 z-10 group-hover:opacity-100 opacity-0 transition-opacity"
          style={{
            transform: "translateY(calc(-50% - 8px))",
          }}
          onClick={goNext}
        >
          <ChevronRight size={24} />
        </Btn>
      )}
    </>
  );
}

interface CarouselProps extends IComponent, CarouselButtonsProps {
  children?: React.ReactNode;
  animate?: boolean;
  loop?: boolean;
  loopInterval?: number;
}

function HorizontalCarousel({
  children,
  className,
  animate = false,
  loop = false,
  loopInterval = 5000,
  leftButtonFactory,
  rightButtonFactory,
  ...props
}: CarouselProps) {
  return (
    <CarouselProvider animate={animate} loop={loop} loopInterval={loopInterval}>
      <div
        aria-label="carousel"
        aria-roledescription="carousel"
        className={twMerge(
          "flex flex-col w-full max-w-full overflow-hidden relative z-0 group",
          className,
        )}
        {...props}
      >
        <div className="flex flex-1 gap-2 overflow-x-auto scroll-smooth snap-mandatory snap-x scrollbar-thumb-transparent scrollbar-track-transparent relative -z-5">
          {children}
        </div>
        <div className="absolute bottom-0 left-0 z-5 w-full h-[16px]" />
        <CarouselButtons
          leftButtonFactory={leftButtonFactory}
          rightButtonFactory={rightButtonFactory}
        />
      </div>
    </CarouselProvider>
  );
}

function Item({ children, className, ...props }: CarouselProps) {
  const id = useId();
  const { registerItem } = useCarousel();

  useEffect(() => {
    registerItem(id);
  }, [id]);

  return (
    <div
      id={id}
      className={twMerge("snap-start shrink-0", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export default {
  HorizontalCarousel,
  Item,
};
