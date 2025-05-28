import { container } from "@/panda/patterns";
import { css, type Styles } from "@/panda/css";

type InnerContainerProps = React.PropsWithChildren<{
  styles?: Styles;
}>;

export function InnerContainer(props: InnerContainerProps) {
  const innerContainerStyles = container.raw({
    w: "full",
    px: { base: 5, md: 6 },
    maxW: { base: "full", lg: "4xl" },
  });

  return (
    <div className={css(innerContainerStyles, props.styles)}>
      {props.children}
    </div>
  );
}
