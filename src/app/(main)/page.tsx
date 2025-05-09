import { css } from "@/panda/css";

export default function Home() {
  return (
    <div className={css({ flex: 1 })}>
      <h2
        className={css({
          width: "fit-content",
          fontWeight: "medium",
          color: "transparent",
          backgroundClip: "text",
          backgroundImage: "linear-gradient(135deg, #FAFAFA, #E84B3C)",
        })}
      >
        Protestant Christian & Software Engineer
      </h2>
      <h1
        className={css({
          fontSize: "4xl",
          color: "transparent",
          fontWeight: "semibold",
          backgroundClip: "text",
          backgroundImage: `linear-gradient(to bottom, #F5F5F5, #F5F5F5 29%, #999999)`,
        })}
      >
        Paulo Henrique
      </h1>
    </div>
  );
}
