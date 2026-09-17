import type { IComponent } from "../common";

export type SliderProps = {
  /** Slide content nodes */
  children: React.ReactNode;
  /** Current active slide index (controlled mode) */
  currentSlide?: number;
  /** Default slide index (uncontrolled mode) */
  defaultSlide?: number;
  /** Callback fired when slide changes */
  onSlideChange?: (index: number) => void;
  /** Enable autoplay */
  autoPlay?: boolean;
  /** Autoplay interval in milliseconds */
  autoPlayInterval?: number;
  /** Enable looping back to first slide after last */
  loop?: boolean;
  /** Transition duration in milliseconds */
  transitionDuration?: number;
  /** Orientation of the slider */
  orientation?: SliderOrientation;
  /** Number of slides visible at once */
  slidesPerView?: number;
  /** Number of slides to move per navigation */
  slidesPerGroup?: number;
  /** Pause autoplay on hover */
  pauseOnHover?: boolean;
  /** Pause autoplay on focus */
  pauseOnFocus?: boolean;
  /** Touch swipe threshold in pixels */
  touchThreshold?: number;
  /** Accessible label for the slider */
  "aria-label"?: string;
} & IComponent;

export type SliderTrackProps = {
  /** Children (Slide components) */
  children: React.ReactNode;
} & IComponent;

export type SliderSlideProps = {
  /** Slide content */
  children: React.ReactNode;
  /** Optional index (auto-assigned if not provided) */
  index?: number;
} & IComponent;

export type SliderButtonProps = {
  /** Navigation direction */
  direction: "prev" | "next";
  /** Custom icon/content */
  children?: React.ReactNode;
  /** ARIA label */
  "aria-label"?: string;
} & IComponent;

export type SliderDotsProps = {
  /** Render custom dot */
  renderDot?: (props: {
    index: number;
    isActive: boolean;
    onClick: () => void;
  }) => React.ReactNode;
} & IComponent;

export type SliderArrowProps = {
  /** Navigation direction */
  direction: "prev" | "next";
  /** Custom icon */
  children?: React.ReactNode;
} & IComponent;
