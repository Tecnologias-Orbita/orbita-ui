export default function SliderPage() {
  return (
    <div className="prose max-w-4xl mx-auto px-4 py-8">
      <h1>Slider</h1>
      <p className="lead">
        A fully-featured carousel/slider component with autoplay, navigation
        controls, dot indicators, keyboard support, and both controlled and
        uncontrolled modes.
      </p>

      <h2>Overview</h2>
      <p>
        The <code>Slider</code> component provides a flexible carousel
        implementation for displaying a series of slides. It supports automatic
        playback, manual navigation via buttons or dots, keyboard navigation,
        looping, and smooth CSS transitions. The component can be used in both
        controlled (via <code>currentSlide</code> prop) and uncontrolled modes.
      </p>

      <h2>Installation</h2>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Slider } from "@tecnologias-orbita/orbita-ui-react";`}</code>
      </pre>

      <h2>Props</h2>
      <p>
        The Slider component accepts the following props (extends
        <code>IComponent</code> which provides <code>className</code> and
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
            <td className="p-3 font-mono">slides</td>
            <td className="p-3 font-mono">React.ReactNode[]</td>
            <td className="p-3">Yes</td>
            <td className="p-3">-</td>
            <td className="p-3">Array of slide content nodes</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">currentSlide</td>
            <td className="p-3 font-mono">number</td>
            <td className="p-3">No</td>
            <td className="p-3">0 (uncontrolled)</td>
            <td className="p-3">
              Current active slide index (controlled mode)
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">onSlideChange</td>
            <td className="p-3 font-mono">{"(index: number) => void"}</td>
            <td className="p-3">No</td>
            <td className="p-3">-</td>
            <td className="p-3">Callback fired when slide changes</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">autoPlay</td>
            <td className="p-3 font-mono">boolean</td>
            <td className="p-3">No</td>
            <td className="p-3">false</td>
            <td className="p-3">Enable autoplay</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">autoPlayInterval</td>
            <td className="p-3 font-mono">number</td>
            <td className="p-3">No</td>
            <td className="p-3">5000</td>
            <td className="p-3">Autoplay interval in milliseconds</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">showButtons</td>
            <td className="p-3 font-mono">boolean</td>
            <td className="p-3">No</td>
            <td className="p-3">true</td>
            <td className="p-3">Show previous/next navigation buttons</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">showDots</td>
            <td className="p-3 font-mono">boolean</td>
            <td className="p-3">No</td>
            <td className="p-3">true</td>
            <td className="p-3">Show dot indicators</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">loop</td>
            <td className="p-3 font-mono">boolean</td>
            <td className="p-3">No</td>
            <td className="p-3">true</td>
            <td className="p-3">
              Enable looping back to first slide after last
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">transitionDuration</td>
            <td className="p-3 font-mono">number</td>
            <td className="p-3">No</td>
            <td className="p-3">500</td>
            <td className="p-3">Transition duration in milliseconds</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">className</td>
            <td className="p-3 font-mono">string</td>
            <td className="p-3">No</td>
            <td className="p-3">-</td>
            <td className="p-3">Additional CSS class for the container</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 font-mono">style</td>
            <td className="p-3 font-mono">React.CSSProperties</td>
            <td className="p-3">No</td>
            <td className="p-3">-</td>
            <td className="p-3">Additional CSS styles for the container</td>
          </tr>
        </tbody>
      </table>

      <h2>Usage Examples</h2>

      <h3>Basic Slider</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Slider } from "@tecnologias-orbita/orbita-ui-react";

export default function BasicSlider() {
  const slides = [
    <div className="h-64 bg-primary-500 flex items-center justify-center text-white text-2xl">
      Slide 1
    </div>,
    <div className="h-64 bg-secondary-500 flex items-center justify-center text-white text-2xl">
      Slide 2
    </div>,
    <div className="h-64 bg-accent-500 flex items-center justify-center text-white text-2xl">
      Slide 3
    </div>,
  ];

  return <Slider slides={slides} />;
}`}</code>
      </pre>

      <h3>With Autoplay</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Slider } from "@tecnologias-orbita/orbita-ui-react";

export default function AutoPlaySlider() {
  const slides = [
    <img src="/slide1.jpg" alt="Slide 1" className="w-full h-64 object-cover" />,
    <img src="/slide2.jpg" alt="Slide 2" className="w-full h-64 object-cover" />,
    <img src="/slide3.jpg" alt="Slide 3" className="w-full h-64 object-cover" />,
  ];

  return (
    <Slider
      slides={slides}
      autoPlay
      autoPlayInterval={3000}
      showButtons={true}
      showDots={true}
    />
  );
}`}</code>
      </pre>

      <h3>Controlled Slider</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Slider } from "@tecnologias-orbita/orbita-ui-react";
import { useState } from "react";

export default function ControlledSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <div className="h-64 bg-primary-500 flex items-center justify-center text-white text-2xl">
      Slide 1
    </div>,
    <div className="h-64 bg-secondary-500 flex items-center justify-center text-white text-2xl">
      Slide 2
    </div>,
    <div className="h-64 bg-accent-500 flex items-center justify-center text-white text-2xl">
      Slide 3
    </div>,
  ];

  return (
    <div className="space-y-4">
      <Slider
        slides={slides}
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
        showButtons={true}
        showDots={true}
      />
      <div className="flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={\`w-2 h-2 rounded-full transition-colors \${
              index === currentSlide ? "bg-primary-500" : "bg-gray-300"
            }\`}
            aria-label={\`Go to slide \${index + 1}\`}
          />
        ))}
      </div>
    </div>
  );
}`}</code>
      </pre>

      <h3>Without Loop (Finite Slider)</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Slider } from "@tecnologias-orbita/orbita-ui-react";

export default function FiniteSlider() {
  const slides = [
    <div className="h-64 bg-primary-500 flex items-center justify-center text-white text-2xl">
      Slide 1
    </div>,
    <div className="h-64 bg-secondary-500 flex items-center justify-center text-white text-2xl">
      Slide 2
    </div>,
    <div className="h-64 bg-accent-500 flex items-center justify-center text-white text-2xl">
      Slide 3
    </div>,
  ];

  return (
    <Slider
      slides={slides}
      loop={false}
      showButtons={true}
      showDots={true}
    />
  );
}`}</code>
      </pre>

      <h3>Custom Transition Duration</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Slider } from "@tecnologias-orbita/orbita-ui-react";

export default function FastSlider() {
  const slides = [
    <div className="h-64 bg-primary-500 flex items-center justify-center text-white text-2xl">
      Slide 1
    </div>,
    <div className="h-64 bg-secondary-500 flex items-center justify-center text-white text-2xl">
      Slide 2
    </div>,
    <div className="h-64 bg-accent-500 flex items-center justify-center text-white text-2xl">
      Slide 3
    </div>,
  ];

  return (
    <Slider
      slides={slides}
      transitionDuration={200}
      autoPlay
      autoPlayInterval={2000}
    />
  );
}`}</code>
      </pre>

      <h3>Content Slides (Mixed Content)</h3>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import { Slider } from "@tecnologias-orbita/orbita-ui-react";

export default function ContentSlider() {
  const slides = [
    (
      <div className="h-64 p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Welcome to Orbita UI</h2>
        <p className="text-lg opacity-90">
          Build beautiful interfaces with our component library
        </p>
      </div>
    ),
    (
      <div className="h-64 p-8 bg-gradient-to-r from-green-500 to-teal-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Fully Typed</h2>
        <p className="text-lg opacity-90">
          Written in TypeScript with comprehensive type definitions
        </p>
      </div>
    ),
    (
      <div className="h-64 p-8 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Accessible</h2>
        <p className="text-lg opacity-90">
          Built with accessibility in mind - keyboard navigation, ARIA labels,
          and more
        </p>
      </div>
    ),
  ];

  return <Slider slides={slides} autoPlay autoPlayInterval={5000} />;
}`}</code>
      </pre>

      <h2>TypeScript</h2>
      <p>The component is fully typed with the following interfaces:</p>
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>{`import type { SliderProps, SliderButtonProps, SliderDotsProps } from "@tecnologias-orbita/orbita-ui-react";

// Using SliderProps
const MySlider: React.FC<SliderProps> = (props) => {
  return <Slider {...props} />;
};

// Extending Slider props
interface CustomSliderProps extends SliderProps {
  variant?: "default" | "minimal";
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  variant = "default",
  ...props
}) => {
  const baseClasses = "relative w-full overflow-hidden rounded-lg";
  const variantClasses = {
    default: "",
    minimal: "shadow-none",
  };

  return (
    <Slider
      className={baseClasses + " " + variantClasses[variant]}
      {...props}
    />
  );
};`}</code>
      </pre>

      <h2>Behavior Notes</h2>
      <ul>
        <li>
          <strong>Controlled vs Uncontrolled</strong>: When{" "}
          <code>currentSlide</code>
          is provided, the component operates in controlled mode. Otherwise, it
          manages its own internal state.
        </li>
        <li>
          <strong>Autoplay</strong>: Automatically pauses when the user hovers
          over the slider (via CSS <code>:hover</code> on the container) and
          resumes on mouse leave. Also pauses during transitions.
        </li>
        <li>
          <strong>Keyboard Navigation</strong>: Supports Arrow Left/Right keys
          for navigation when the slider is focused.
        </li>
        <li>
          <strong>Loop Behavior</strong>: When <code>loop={true}</code>{" "}
          (default), navigation wraps around. When <code>loop={false}</code>,
          buttons are hidden at the first/last slide.
        </li>
        <li>
          <strong>Transition</strong>: Uses CSS transform with cubic-bezier
          easing for smooth animations. The <code>transitionDuration</code> prop
          controls both the CSS transition and the internal transition lock.
        </li>
        <li>
          <strong>Accessibility</strong>: Includes proper ARIA roles (
          <code>role="region"</code>,{" "}
          <code>aria-roledescription="carousel"</code>,
          <code>aria-live="polite"</code>), slide labels, and button labels.
        </li>
      </ul>

      <h2>Accessibility</h2>
      <ul>
        <li>Uses semantic HTML with proper ARIA roles for carousel</li>
        <li>Keyboard navigation with Arrow Left/Right keys</li>
        <li>
          Dot indicators have <code>aria-label</code> and{" "}
          <code>aria-current</code>
        </li>
        <li>
          Navigation buttons have descriptive <code>aria-label</code> attributes
        </li>
        <li>
          Slide regions have <code>role="group"</code> and{" "}
          <code>aria-roledescription="slide"</code>
        </li>
        <li>Live region announces slide changes politely</li>
      </ul>

      <h2>Related Components</h2>
      <ul>
        <li>
          <a href="/docs/orbita-ui-react/components/btn">Btn</a> - Button
          component for custom navigation
        </li>
        <li>
          <a href="/docs/orbita-ui-react/components/separator">Separator</a> -
          Divider component
        </li>
      </ul>
    </div>
  );
}
