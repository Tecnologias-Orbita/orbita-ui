import { createContext, useContext, useState } from "react";

type SliderOrientation = "horizontal" | "vertical";

type SliderContext = {
  currentIndex: number;
  goToSlide: (index: number) => void;
  goNext: () => void;
  goPrev: () => void;
  registerSlide: (index: number, element: HTMLDivElement | null) => void;
  animate?: boolean;
  loop?: boolean;
  orientation?: SliderOrientation;
  totalGroups?: number;
};

const initialValue: SliderContext = {
  currentIndex: 0,
  goToSlide(_index) {},
  goNext() {},
  goPrev() {},
  registerSlide(_index, _element) {},
};

const SliderContext = createContext<SliderContext>(initialValue);

interface ProviderProps {
  children: React.ReactNode;
  animate?: boolean;
  loop?: boolean;
  orientation?: SliderOrientation;
}

export default function SliderProvider({
  children,
  animate = false,
  loop = true,
  orientation = "horizontal",
}: ProviderProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [totalGroups, setTotalGroups] = useState<number>(0);

  const goToSlide = (index: number) => setCurrentIndex(index);

  const goNext = () => setCurrentIndex((i) => Math.min(i, totalGroups));

  const goPrev = () => setCurrentIndex((i) => Math.max(i, 0));

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (touch) setTouchStart({ x: touch.clientX, y: touch.clientY });
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!touchStart) return;
      const touch = e.touches[0];
      if (!touch) return;
      const deltaX = touch.clientX - touchStart.x;
      const deltaY = touch.clientY - touchStart.y;

      if (orientation === "horizontal" && Math.abs(deltaX) > touchThreshold) {
        e.preventDefault();
        if (deltaX > 0) goPrev();
        else goNext();
        setTouchStart(null);
      } else if (
        orientation === "vertical" &&
        Math.abs(deltaY) > touchThreshold
      ) {
        e.preventDefault();
        if (deltaY > 0) goPrev();
        else goNext();
        setTouchStart(null);
      }
    },
    [touchStart, orientation, touchThreshold, goPrev, goNext],
  );

  const handleTouchEnd = useCallback(() => {
    setTouchStart(null);
  }, []);

  return (
    <SliderContext.Provider
      value={{
        animate,
        loop,
        orientation,
        currentIndex,
        goNext,
        goPrev,
        goToSlide,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
}

export function useSlider() {
  return useContext(SliderContext);
}
