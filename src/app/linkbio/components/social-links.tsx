import Image from "next/image";
import { css } from "../../../../styled-system/css";
import { vstack } from "../../../../styled-system/patterns";

type SocialLinkProps = {
  items: Array<{
    id: string;
    mediaName: string;
    mediaSlug: string;
    mediaLink: string;
    mediaLogo: {
      url: string;
      alt: string | null;
      width: number | null;
      height: number | null;
    };
  }>;
};

export function SocialLinks(props: SocialLinkProps) {
  return (
    <div
      className={vstack({
        alignItems: "stretch",
        marginTop: { base: 12, md: 16 },
      })}
    >
      {props.items.map((item) => (
        <a
          key={item.id}
          target="_blank"
          href={item.mediaLink}
          className={css({
            py: 2,
            px: 4,
            display: "flex",
            borderRadius: "lg",
            border: "1px solid",
            alignItems: "center",
            borderColor: "hsla(0, 0%, 100%, .15)",
            backgroundColor: "rgba(0, 0, 0, .65)",
            transition: "transform 0.15s ease-in-out",
            _hover: {
              transform: "scale(1.02)",
            },
          })}
        >
          <span
            className={css({
              width: 8,
              display: "block",
            })}
          >
            <Image
              src={item.mediaLogo.url}
              width={item.mediaLogo.width ?? "32"}
              height={item.mediaLogo.height ?? "32"}
              alt={item.mediaLogo.alt ?? `${item.mediaName} logo`}
            />
          </span>
          <div
            className={css({
              ml: 4,
              display: "flex",
              flexDirection: "column",
            })}
          >
            <span
              className={css({
                color: "#EEE",
                textAlign: "left",
                fontWeight: "medium",
              })}
            >
              {item.mediaName}
            </span>
            <span
              className={css({
                fontSize: "sm",
                textAlign: "left",
                color: "#fffcf4b0",
                fontWeight: "medium",
              })}
            >
              {item.mediaSlug}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
