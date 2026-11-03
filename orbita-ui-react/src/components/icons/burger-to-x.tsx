import type { IIconProps } from "./types";

interface Props extends IIconProps {
  active?: boolean;
}

export default function BurgerToXIcon({
  className,
  size = 24,
  active,
  ...props
}: Props) {
  const PATH_STYLE: React.CSSProperties = {
    transition: "all 0.2s",
    transformOrigin: "center",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
      {...{ ...props, width: size + "px", height: size + "px" }}
    >
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        d="M2 5H2 22"
        style={{
          ...PATH_STYLE,
          ...(active
            ? {
                transform: "rotateZ(45deg) translateX(0px) translateY(7px)",
              }
            : {}),
        }}
      />
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        d="M2 12H2 22"
        style={{ ...PATH_STYLE, ...(active ? { opacity: 0 } : {}) }}
      />
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        d="M2 19H2 22"
        style={{
          ...PATH_STYLE,
          ...(active
            ? {
                transform: "rotateZ(-45deg) translateX(0px) translateY(-7px)",
              }
            : {}),
        }}
      />
    </svg>
  );
}
