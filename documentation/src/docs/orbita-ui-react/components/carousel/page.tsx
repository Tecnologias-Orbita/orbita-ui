import { Carousel } from "@tecnologias-orbita/orbita-ui-react";

export default function CarouselPage() {
  return (
    <div className="prose max-w-4xl mx-auto px-4 py-8">
      <h1>Carousel</h1>
      <p className="lead">
        A scroll-snap carousel for sliding items horizontally, with optional
        smooth scrolling and autoplay.
      </p>

      <h2>Overview</h2>
      <p>
        The <code>Carousel</code> component slides a set of items horizontally
        using native CSS scroll snapping rather than transform-based animation.
        Items are rendered as children of <code>Carousel.HorizontalCarousel</code>{" "}
        and each one is wrapped in a <code>Carousel.Item</code>, which registers
        itself with the carousel on mount so the navigation buttons can scroll
        to it.
      </p>
      <p>
        Navigation state lives in a context provided by{" "}
        <code>HorizontalCarousel</code>. The default arrow buttons are visible on
        hover; pass <code>leftButtonFactory</code> or{" "}
        <code>rightButtonFactory</code> to replace them with your own controls.
      </p>

      <h2>Installation</h2>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Carousel } from "@tecnologias-orbita/orbita-ui-react";`}</code>
      </pre>

      <h2>Live Example</h2>
      <p>
        Ten items with <code>animate</code> and <code>loop</code> enabled. Hover
        the carousel to reveal the navigation buttons.
      </p>
      <div className="not-prose max-w-full my-6">
        <Carousel.HorizontalCarousel animate loop>
          {Array.from({ length: 10 }, (_, i) => (
            <Carousel.Item
              key={i}
              className="w-72 h-48 bg-black/10 border border-black flex items-center justify-center"
            >
              Item {i + 1}
            </Carousel.Item>
          ))}
        </Carousel.HorizontalCarousel>
      </div>

      <h2>Carousel.HorizontalCarousel Props</h2>
      <p>
        <code>HorizontalCarousel</code> accepts the following props (extends{" "}
        <code>IComponent</code>, which provides <code>className</code> and{" "}
        <code>style</code>):
      </p>

      <table className="w-full border-collapse mb-8">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="p-3 text-left font-mono">Prop</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Required</th>
            <th className="p-3 text-left">Default</th>
            <th className="p-3 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-3 font-mono">children</td>
            <td className="p-3 font-mono">React.ReactNode</td>
            <td className="p-3">No</td>
            <td className="p-3">—</td>
            <td className="p-3">
              Carousel items, normally wrapped in <code>Carousel.Item</code>
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">animate</td>
            <td className="p-3 font-mono">boolean</td>
            <td className="p-3">No</td>
            <td className="p-3 font-mono">false</td>
            <td className="p-3">
              Scrolls smoothly between items instead of jumping instantly
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">loop</td>
            <td className="p-3 font-mono">boolean</td>
            <td className="p-3">No</td>
            <td className="p-3 font-mono">false</td>
            <td className="p-3">
              Enables autoplay, advancing one item every{" "}
              <code>loopInterval</code> ms
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">loopInterval</td>
            <td className="p-3 font-mono">number</td>
            <td className="p-3">No</td>
            <td className="p-3 font-mono">5000</td>
            <td className="p-3">Autoplay interval in milliseconds</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">leftButtonFactory</td>
            <td className="p-3 font-mono">(goPrev: () =&gt; void) =&gt; React.ReactNode</td>
            <td className="p-3">No</td>
            <td className="p-3">—</td>
            <td className="p-3">
              Replaces the default previous button. Receives{" "}
              <code>goPrev</code> to trigger navigation
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">rightButtonFactory</td>
            <td className="p-3 font-mono">(goNext: () =&gt; void) =&gt; React.ReactNode</td>
            <td className="p-3">No</td>
            <td className="p-3">—</td>
            <td className="p-3">
              Replaces the default next button. Receives <code>goNext</code> to
              trigger navigation
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">className</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">No</td>
            <td className="p-3">—</td>
            <td className="p-3">
              Additional CSS classes for the outer container
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">style</td>
            <td className="p-3 font-mono">React.CSSProperties</td>
            <td className="p-3">No</td>
            <td className="p-3">—</td>
            <td className="p-3">Inline styles for the outer container</td>
          </tr>
        </tbody>
      </table>

      <h2>Carousel.Item Props</h2>
      <table className="w-full border-collapse mb-8">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="p-3 text-left font-mono">Prop</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Required</th>
            <th className="p-3 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-3 font-mono">children</td>
            <td className="p-3 font-mono">React.ReactNode</td>
            <td className="p-3">No</td>
            <td className="p-3">Item content</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">className</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">No</td>
            <td className="p-3">
              Additional CSS classes, merged with <code>snap-start shrink-0</code>
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">style</td>
            <td className="p-3 font-mono">React.CSSProperties</td>
            <td className="p-3">No</td>
            <td className="p-3">Inline styles</td>
          </tr>
        </tbody>
      </table>
      <p>
        The item width is not set by the component, so give each item an explicit
        width (for example <code>w-72</code>) or a flex basis to control how
        much is visible at once.
      </p>

      <h2>Default Styles</h2>
      <p>The carousel applies these default Tailwind classes:</p>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`/* HorizontalCarousel container */
flex flex-col w-full max-w-full overflow-hidden relative z-0 group

/* scroll viewport */
flex flex-1 gap-2 overflow-x-auto scroll-smooth snap-mandatory snap-x
scrollbar-thumb-transparent scrollbar-track-transparent relative -z-5

/* Item */
snap-start shrink-0`}</code>
      </pre>
      <p>
        The default arrow buttons are <code>Btn</code> components positioned at
        the vertical center, hidden with <code>opacity-0</code> and revealed on{" "}
        <code>group-hover</code>.
      </p>

      <h2>Usage Examples</h2>

      <h3>Basic Carousel</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Carousel } from "@tecnologias-orbita/orbita-ui-react";

export default function BasicCarousel() {
  return (
    <Carousel.HorizontalCarousel>
      <Carousel.Item className="w-64 h-40 bg-black/10 border border-black" />
      <Carousel.Item className="w-64 h-40 bg-black/10 border border-black" />
      <Carousel.Item className="w-64 h-40 bg-black/10 border border-black" />
    </Carousel.HorizontalCarousel>
  );
}`}</code>
      </pre>

      <h3>Smooth Scrolling</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Carousel } from "@tecnologias-orbita/orbita-ui-react";

export default function SmoothCarousel() {
  return (
    <Carousel.HorizontalCarousel animate>
      {["A", "B", "C", "D"].map((label) => (
        <Carousel.Item
          key={label}
          className="w-64 h-40 bg-black/10 border border-black"
        >
          {label}
        </Carousel.Item>
      ))}
    </Carousel.HorizontalCarousel>
  );
}`}</code>
      </pre>

      <h3>Autoplay (Loop)</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Carousel } from "@tecnologias-orbita/orbita-ui-react";

export default function AutoplayCarousel() {
  return (
    <Carousel.HorizontalCarousel animate loop loopInterval={3000}>
      {["One", "Two", "Three", "Four", "Five"].map((label) => (
        <Carousel.Item
          key={label}
          className="w-64 h-40 bg-black/10 border border-black"
        >
          {label}
        </Carousel.Item>
      ))}
    </Carousel.HorizontalCarousel>
  );
}`}</code>
      </pre>

      <h3>Custom Navigation Buttons</h3>
      <p>
        The factories fully replace the default buttons, so include your own
        styling and position them if needed:
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Carousel, Btn } from "@tecnologias-orbita/orbita-ui-react";

export default function CustomControlsCarousel() {
  return (
    <Carousel.HorizontalCarousel
      animate
      leftButtonFactory={(goPrev) => (
        <Btn onClick={goPrev} className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
          Prev
        </Btn>
      )}
      rightButtonFactory={(goNext) => (
        <Btn
          onClick={goNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10"
        >
          Next
        </Btn>
      )}
    >
      {["One", "Two", "Three"].map((label) => (
        <Carousel.Item
          key={label}
          className="w-64 h-40 bg-black/10 border border-black"
        >
          {label}
        </Carousel.Item>
      ))}
    </Carousel.HorizontalCarousel>
  );
}`}</code>
      </pre>

      <h3>Image Gallery</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Carousel } from "@tecnologias-orbita/orbita-ui-react";

const photos = [
  { src: "/photo-1.jpg", alt: "Sunrise" },
  { src: "/photo-2.jpg", alt: "Mountain" },
  { src: "/photo-3.jpg", alt: "Ocean" },
];

export default function GalleryCarousel() {
  return (
    <Carousel.HorizontalCarousel animate loop={false}>
      {photos.map((photo) => (
        <Carousel.Item key={photo.src} className="w-96">
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-64 object-cover border border-black"
          />
        </Carousel.Item>
      ))}
    </Carousel.HorizontalCarousel>
  );
}`}</code>
      </pre>

      <h3>Full-Bleed Carousel</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Carousel } from "@tecnologias-orbita/orbita-ui-react";

export default function FullBleedCarousel() {
  return (
    <Carousel.HorizontalCarousel animate className="w-screen">
      {["A", "B", "C"].map((label) => (
        <Carousel.Item key={label} className="w-screen h-96 bg-black/10">
          {label}
        </Carousel.Item>
      ))}
    </Carousel.HorizontalCarousel>
  );
}`}</code>
      </pre>

      <h2>TypeScript</h2>
      <p>
        The carousel is typed with the following interfaces, declared alongside
        the component:
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`interface CarouselButtonsProps {
  leftButtonFactory?: (goPrev: () => void) => React.ReactNode;
  rightButtonFactory?: (goNext: () => void) => React.ReactNode;
}

interface CarouselProps extends IComponent, CarouselButtonsProps {
  children?: React.ReactNode;
  animate?: boolean;
  loop?: boolean;
  loopInterval?: number;
}`}</code>
      </pre>

      <h2>Behavior Notes</h2>
      <ul>
        <li>
          <strong>Scroll snapping</strong>: movement uses native{" "}
          <code>scrollIntoView</code> plus CSS <code>snap-x</code> /{" "}
          <code>snap-mandatory</code>, so navigation works with touch, trackpad,
          and keyboard scrolling.
        </li>
        <li>
          <strong>animate</strong>: switches the scroll behavior between{" "}
          <code>"smooth"</code> and <code>"instant"</code>. The scroll container
          also carries <code>scroll-smooth</code> for direct user scrolling.
        </li>
        <li>
          <strong>loop</strong>: drives an interval that calls the next-item
          handler. Navigation always wraps — after the last item the carousel
          returns to the first, and before the first it moves to the last.
        </li>
        <li>
          <strong>Item registration</strong>: each <code>Carousel.Item</code>{" "}
          generates an id with <code>useId</code> and registers it with the
          context on mount. Only registered items are navigable.
        </li>
        <li>
          <strong>Autoplay lifecycle</strong>: the interval is cleared and
          restarted whenever the registered items, <code>loop</code>, or{" "}
          <code>loopInterval</code> change, so children added after mount are
          accounted for.
        </li>
        <li>
          <strong>Hover reveal</strong>: the default buttons use{" "}
          <code>group-hover:opacity-100</code> and sit at{" "}
          <code>opacity-0</code>. They are unreachable by keyboard focus while
          hidden; provide custom buttons with factories if you need focusable
          controls.
        </li>
        <li>
          <strong>Scrollbar</strong>: the scroll container hides its thumb and
          track via <code>scrollbar-thumb-transparent</code> and{" "}
          <code>scrollbar-track-transparent</code>.
        </li>
      </ul>

      <h2>Accessibility</h2>
      <ul>
        <li>
          The container sets <code>aria-label="carousel"</code> and{" "}
          <code>aria-roledescription="carousel"</code>
        </li>
        <li>
          As with any scroll region, add a labelling pattern if the items carry
          meaning; the built-in defaults describe the container only
        </li>
        <li>
          The default arrow buttons are icon-only. If you keep them, add an{" "}
          <code>aria-label</code> to each; custom buttons make this easier to
          control
        </li>
        <li>
          Autoplay (<code>loop</code>) moves content without user action, so
          provide a way to pause it if the content is not purely decorative
        </li>
      </ul>

      <h2>Related Components</h2>
      <ul>
        <li>
          <a href="/docs/orbita-ui-react/components/btn">Btn</a> - Button
          component used for the default and custom navigation controls
        </li>
        <li>
          <a href="/docs/orbita-ui-react/components/badge">Badge</a> - Badge
          component, useful for labeling carousel items
        </li>
      </ul>
    </div>
  );
}
