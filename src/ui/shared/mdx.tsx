import type { MDXComponents } from "mdx/types";
import { mdxComponents } from "@prose-ui/next";
import { normalizeMarkdown } from "@/utils/markdown";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { ErrorFallback } from "@/ui/shared/error-fallback";

type MDXProps = {
  data: string;
  wrapper?: MDXComponents["wrapper"];
};

export function MDX(props: MDXProps) {
  return (
    <MDXRemote
      onError={ErrorFallback}
      source={normalizeMarkdown(props.data)}
      components={{ ...mdxComponents, ...(props.wrapper !== undefined && { wrapper: props.wrapper }) }}
    />
  );
}
