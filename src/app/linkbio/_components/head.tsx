import Image from "next/image";
import { css } from "../../../../styled-system/css";

type HeadProps = {
  name: string;
  quote: string | null;
  description: string;
  avatar: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
};

export function Head(props: HeadProps) {
  return (
    <div
      className={css({
        marginTop: 2,
        textAlign: "center",
      })}
    >
      <div className={css({ maxW: 24, mx: "auto" })}>
        <Image
          priority
          src={props.avatar.url}
          alt={props.avatar.alt}
          width={props.avatar.width}
          height={props.avatar.height}
          className={css({
            mb: 6,
            mx: "auto",
            borderRadius: "full",
            outline: "1px solid rgba(243, 245, 247, 0.15)",
          })}
        />
      </div>
      <h1
        className={css({
          color: "#EEE",
          fontSize: "xl",
          fontWeight: "bold",
        })}
      >
        {props.name}
      </h1>
      <h2
        className={css({
          mt: 2,
          mx: "auto",
          fontSize: "sm",
          color: "#fffcf4b0",
          fontWeight: "semibold",
          maxWidth: { base: "sm", sm: "md" },
        })}
      >
        {props.description}
      </h2>
      {props.quote ? (
        <span
          className={css({
            mx: "auto",
            fontSize: "sm",
            display: "block",
            color: "#fffcf4b0",
            fontWeight: "medium",
            maxWidth: { base: "sm", sm: "md" },
          })}
        >
          {props.quote}
        </span>
      ) : null}
    </div>
  );
}
