import { twMerge } from "tailwind-merge";
import type { IComponent } from "./types";

export default function Separator({ className, ...props }: IComponent) {
  return <div className={twMerge("h-px w-full bg-slate-200")} {...props} />;
}
