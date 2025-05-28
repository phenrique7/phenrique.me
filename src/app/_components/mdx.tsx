import type { MDXComponents } from "mdx/types";
import { mdxComponents } from "@prose-ui/next";
import type { Languages } from "@/types/app";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { ErrorFallback } from "@/app/_components/error-fallback";
import { getAppDictionary } from "@/app/_dictionaries/dictionaries";

type MDXProps = {
  data: string;
  displayLanguage: Languages;
  wrapper?: MDXComponents["wrapper"];
};

function normalizeMarkdown(md: string) {
  return md.replaceAll("\\", "");
}

export async function MDX(props: MDXProps) {
  const dict = await getAppDictionary(props.displayLanguage);

  return (
    <MDXRemote
      source={normalizeMarkdown(props.data)}
      onError={(props) => <ErrorFallback dict={dict} error={props.error} />}
      components={{ ...mdxComponents, ...(props.wrapper !== undefined && { wrapper: props.wrapper }) }}
    />
  );
}
