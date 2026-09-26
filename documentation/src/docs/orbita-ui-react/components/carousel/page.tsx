import { Carousel } from "@tecnologias-orbita/orbita-ui-react";

export default function CarouselPage() {
  return (
    <div className="max-w-full">
      <Carousel.HorizontalCarousel animate loop>
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <Carousel.Item
              key={i}
              className="w-72 h-48 bg-black/10 border border-black"
            ></Carousel.Item>
          ))}
      </Carousel.HorizontalCarousel>
    </div>
  );
}
