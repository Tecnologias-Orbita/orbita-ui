import type React from "react";
import type { IComponent } from "../common";

export type SliderProps = {
  /** Array of slide content nodes */
  slides: React.ReactNode[];
  /** Current active slide index (controlled mode) */
  currentSlide?: number;
  /** Callback fired when slide changes */
  onSlideChange?: (index: number) => void;
  /** Enable autoplay */
  autoPlay?: boolean;
  /** Autoplay interval in milliseconds */
  autoPlayInterval?: number;
  /** Show previous/next navigation buttons */
  showButtons?: boolean;
  /** Show dot indicators */
  showDots?: boolean;
  /** Enable looping back to first slide after last */
  loop?: boolean;
  /** Transition duration in milliseconds */
  transitionDuration?: number;
  /** Additional CSS class for the container */
  className?: string;
  /** Additional CSS styles for the container */
  style?: React.CSSProperties;
} & IComponent;

export type SliderButtonProps = {
  /** Click handler */
  onClick?: () => void;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Additional CSS class */
  className?: string;
  /** Icon position */
  position?: "left" | "right";
} & IComponent;

export type SliderDotsProps = {
  /** Total number of slides */
  total: number;
  /** Currently active slide index */
  current: number;
  /** Click handler for a dot */
  onDotClick?: (index: number) => void;
  /** Additional CSS class */
  className?: string;
} & IComponent;
