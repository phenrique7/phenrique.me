import { css } from "@/panda/css";
import { flex } from "@/panda/patterns";
import { OuterContainer } from "@/ui/shared/outer-container";
import { InnerContainer } from "@/ui/shared/inner-container";

export default function Home() {
  return (
    <OuterContainer
      styles={{
        root: flex.raw({
          flexDirection: "column",
          flex: { base: 1, lg: "auto" },
        }),
        content: { flex: 1 },
      }}
    >
      <InnerContainer styles={css.raw({ py: { base: 32, sm: 44, "2xl": 56 } })}>
        <h2
          className={css({
            width: "fit-content",
            fontWeight: "medium",
            color: "transparent",
            backgroundClip: "text",
            backgroundImage: `linear-gradient(135deg, token(colors.clr_clr_gray_soft), token(colors.clr_coral_flame))`,
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
            backgroundImage: `linear-gradient(to bottom, token(colors.clr_neutral_950_snow), token(colors.clr_neutral_950_snow) 40%, #999999)`,
          })}
        >
          Paulo Henrique
        </h1>
        <p className={css({ mt: 4, maxW: "2xl", color: "clr_neutral_700_400" })}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta, dui eu ultrices fringilla, augue leo
          varius tellus, at malesuada est ipsum in nisl. Nullam posuere feugiat enim id sagittis. Quisque et erat eget
          quam consequat rhoncus. Mauris suscipit tempus orci, vitae rhoncus purus auctor eget. Vestibulum tincidunt
          velit justo, vitae volutpat mi luctus eget. Sed a lacus ullamcorper, dictum nibh in, euismod tellus. In vitae
          arcu at nisl semper pulvinar et et justo. Phasellus pretium varius justo sit amet consectetur. Nunc imperdiet
          urna quis tortor ornare, vel fringilla nisl dapibus. Curabitur in turpis dapibus quam sodales tincidunt. Nunc
          id turpis pharetra, eleifend massa sit amet, mollis sapien. Vivamus blandit mauris augue, in aliquam neque
          viverra vel. In efficitur ligula nec tellus egestas, commodo laoreet tellus convallis. Cras sollicitudin
          porttitor leo a tincidunt. Pellentesque sed malesuada enim, vitae suscipit justo. Donec orci augue, varius nec
          turpis in, faucibus finibus dolor. Ut pretium, velit at porttitor viverra, neque magna tincidunt nunc, id
          hendrerit enim nisl eu felis. Suspendisse dictum sapien eu sollicitudin semper. Integer tincidunt ipsum eu
          risus volutpat egestas. Vestibulum id mollis dui.
        </p>
      </InnerContainer>
    </OuterContainer>
  );
}
