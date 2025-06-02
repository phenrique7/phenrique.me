import { css } from "@/panda/css";

type DeustchIconProps = {
  width?: number;
  height?: number;
};

export function DeutschIcon(props: DeustchIconProps) {
  const { width = 24, height = 18 } = props;

  return (
    <svg viewBox="0 0 640 480" className={css({ borderRadius: "xs", h: "fit-content" })} width={width} height={height}>
      <path fill="#fc0" d="M0 320h640v160H0z" />
      <path fill="#000001" d="M0 0h640v160H0z" />
      <path fill="red" d="M0 160h640v160H0z" />
    </svg>
  );
}
