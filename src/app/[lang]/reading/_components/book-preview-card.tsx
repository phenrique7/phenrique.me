import Image from "next/image";
import { css } from "@/panda/css";
import { flex, hstack, vstack } from "@/panda/patterns";

type BookPreviewCardProps = {
  title: string;
  cover: string;
  genres: string[];
  authors: string[];
  progress: number | null;
};

export function BookPreviewCard(props: BookPreviewCardProps) {
  const bookProgress = (props.progress ?? 0) * 100;

  return (
    <div
      className={flex({
        boxShadow: "xs",
        borderRadius: "xl",
        border: "1px solid",
        bgColor: "clr_white_neutral_900",
        borderColor: "clr_neutral_300_700",
      })}
    >
      <Image
        priority
        alt="Book"
        width={539}
        height={784}
        src={props.cover}
        className={css({ borderTopLeftRadius: "xl", borderBottomLeftRadius: "xl", maxWidth: 32, boxShadow: "sm" })}
      />
      <div className={flex({ flexDirection: "column", justifyContent: "space-between", px: 5, py: 4, flex: 1 })}>
        <div className={vstack({ gap: 3, alignItems: "stretch" })}>
          <h3
            title={props.title}
            className={flex({
              lineHeight: 1.1,
              fontWeight: "medium",
              color: "clr_neutral_900_50",
              lineClamp: 2,
              overflow: "hidden",
              boxOrient: "vertical",
              textOverflow: "ellipsis",
            })}
          >
            {props.title}
          </h3>
          <h4
            className={css({
              fontSize: "sm",
              lineHeight: "tight",
              fontWeight: "medium",
              color: "clr_neutral_700_400",
            })}
          >
            by {props.authors.length === 0 ? "Unknown" : props.authors.join(", ")}
          </h4>
        </div>
        <div className={vstack({ alignItems: "stretch" })}>
          <div className={hstack({ gap: 2 })}>
            {props.genres.map((genre) => (
              <span
                key={genre}
                className={css({
                  px: 2,
                  py: 1,
                  fontSize: "xs",
                  w: "fit-content",
                  borderRadius: "md",
                  fontWeight: "medium",
                  alignItems: "center",
                  display: "inline-flex",
                  bg: "clr_neutral_100_800",
                  color: "clr_neutral_800_200",
                  ring: "1px solid",
                  ringColor: "clr_neutral_300_700",
                })}
              >
                {genre}
              </span>
            ))}
          </div>
          <div className={flex({ gap: 2, alignItems: "center" })}>
            <div
              className={css({
                h: 1,
                w: "full",
                borderRadius: "sm",
                position: "relative",
                bg: "clr_neutral_300_700",
              })}
            >
              <div
                style={{ width: `${bookProgress}%` }}
                className={css({
                  h: 1,
                  top: 0,
                  left: 0,
                  display: "block",
                  borderRadius: "sm",
                  position: "absolute",
                  bgColor: "clr_coral_flame",
                })}
              />
            </div>
            <span className={css({ fontSize: "sm", color: "clr_neutral_700_400" })}>{bookProgress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
