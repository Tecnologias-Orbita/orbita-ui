import { createContext, useContext, useEffect, useRef, useState } from "react";

type CarouselContext = {
  currentItem: React.RefObject<string>;
  registerItem: (item: string) => void;
  goTo: (item: string) => void;
  goNext: () => void;
  goPrev: () => void;
};

const initialValue: CarouselContext = {
  currentItem: { current: "" },
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
}

export function CarouselProvider({
  children,
  animate = false,
  loop = false,
  loopInterval = 5000,
}: ProviderProps) {
  const [items, setItems] = useState<string[]>([]);
  const currentItem = useRef<string>("");
  const loopingId = useRef<number>(0);

  useEffect(() => {
    if (currentItem.current || !items[0]) return;
    currentItem.current = items[0];
  }, [items]);

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

  const registerItem = (item: string) => setItems((i) => [...i, item]);

  const scroll = (id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({
      behavior: animate ? "smooth" : "instant",
    });
  };

  const goTo = (item: string) => {
    const goalItem = items.find((i) => i === item);
    if (goalItem) currentItem.current = goalItem;
    scroll(currentItem.current);
  };

  const goNext = () => {
    if (!items.length) return;
    const index = items.findIndex((i) => i === currentItem.current);
    const goalItem = items[index + 1];
    currentItem.current = goalItem || items[0]!;
    scroll(currentItem.current);
  };

  const goPrev = () => {
    if (!items.length) return;
    const index = items.findIndex((i) => i === currentItem.current);
    const goalItem = items[index - 1];
    currentItem.current = goalItem || items[items.length - 1]!;
    scroll(currentItem.current);
  };

  return (
    <CarouselContext.Provider
      value={{
        currentItem,
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
