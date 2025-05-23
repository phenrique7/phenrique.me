import type { MDXComponents } from "mdx/types";
import { mdxComponents } from "@prose-ui/next";
import { normalizeMarkdown } from "@/utils/markdown";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { css } from "@/panda/css";
import { hstack } from "@/panda/patterns";

function onError() {
  return (
    <div className={hstack({ gap: 3 })}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" stroke="tomato" />
        <path d="M12 9v4" stroke="tomato" />
        <path d="M12 17h.01" stroke="tomato" />
      </svg>
      <div className={css({ color: "clr_neutral_800_200" })}>Something went wrong</div>
    </div>
  );
}

type MDXProps = {
  data: string;
  wrapper?: MDXComponents["wrapper"];
};

export function MDX(props: MDXProps) {
  return (
    <MDXRemote
      onError={onError}
      source={normalizeMarkdown(props.data)}
      components={{ ...mdxComponents, ...(props.wrapper !== undefined && { wrapper: props.wrapper }) }}
    />
  );
}
