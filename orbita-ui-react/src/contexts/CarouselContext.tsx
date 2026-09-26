import { createContext, useContext, useEffect, useRef, useState } from "react";

type CarouselContext = {
  currentIndex: React.RefObject<number>;
  registerItem: (item: string) => void;
  goTo: (item: string) => void;
  goNext: () => void;
  goPrev: () => void;
};

const initialValue: CarouselContext = {
  currentIndex: { current: 0 },
  registerItem(_item) {},
  goTo(_item) {},
  goNext() {},
  goPrev() {},
};

const CarouselContext = createContext<CarouselContext>(initialValue);

interface ProviderProps {
  children: React.ReactNode;
  animate?: boolean;
  loop?: boolean;
  loopInterval?: number;
  classSelector?: string;
}

export function CarouselProvider({
  children,
  animate = false,
  loop = false,
  loopInterval = 5000,
  classSelector,
}: ProviderProps) {
  const [items, setItems] = useState<{ id: string; left: number }[]>([]);
  const currentIndex = useRef<number>(0);
  const loopingId = useRef<number>(0);
  const repeatedPosition = useRef<number>(0);

  useEffect(() => {
    if (!loop) return;
    if (loopingId.current) {
      clearInterval(loopingId.current);
      loopingId.current = 0;
      return;
    }

    loopingId.current = setInterval(() => {
      goNext();
    }, loopInterval);

    return () => {
      clearInterval(loopingId.current);
      loopingId.current = 0;
    };
  }, [items, loop, loopInterval]);

  const registerItem = (item: string) => {
    const left =
      document.querySelector(`#${item}`)?.getBoundingClientRect().left || 0;
    setItems((i) => {
      if (i.findIndex((i) => i.id === item) !== -1) return i;
      return [...i, { id: item, left }];
    });
  };

  const scrollTo = (index: number) => {
    const parent = document.querySelector(`.${classSelector}`);
    const left =
      (items[index]?.left || 0) - (parent?.getBoundingClientRect().left || 0);

    parent?.scrollTo({
      left,
      behavior: animate ? "smooth" : "instant",
    });
  };

  const goTo = (item: string) => {
    const index = items.findIndex((i) => i.id === item);
    if (index !== -1) currentIndex.current = index;
    scrollTo(currentIndex.current);
  };

  const goNext = () => {
    if (!items.length) return;
    currentIndex.current =
      currentIndex.current === items.length - 1 ? 0 : currentIndex.current + 1;
    scrollTo(currentIndex.current);

    const left =
      document.querySelector(`#${items.at(-1)?.id}`)?.getBoundingClientRect()
        .left || 0;
    if (repeatedPosition.current === left) {
      scrollTo(0);
    } else {
      repeatedPosition.current = left;
    }
  };

  const goPrev = () => {
    if (!items.length) return;
    currentIndex.current =
      currentIndex.current === 0 ? items.length - 1 : currentIndex.current - 1;
    scrollTo(currentIndex.current);
  };

  return (
    <CarouselContext.Provider
      value={{
        currentIndex,
        registerItem,
        goTo,
        goNext,
        goPrev,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
}

export function useCarousel() {
  return useContext(CarouselContext);
}
