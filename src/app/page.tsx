import { flex } from "../../styled-system/patterns";

export default function Home() {
  return (
    <div
      className={flex({
        color: "white",
        height: "100dvh",
        bg: "neutral.900",
        fontWeight: "medium",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      Cooking...
    </div>
  );
}
