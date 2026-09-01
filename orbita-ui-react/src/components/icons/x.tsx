import { twMerge } from "tailwind-merge";
import type { IComponent } from "../common";

interface Props extends IComponent {
  size?: number;
}

export default function XIcon({ className, size, ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={twMerge("size-4", className)}
      {...{ ...props, width: size + "px", height: size + "px" }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
