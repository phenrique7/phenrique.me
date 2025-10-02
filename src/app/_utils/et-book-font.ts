import localFont from "next/font/local";

export const etBookFont = localFont({
  src: [
    {
      path: "../../ui/fonts/et-book-roman-old-style-figures.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../ui/fonts/et-book-display-italic-old-style-figures.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../ui/fonts/et-book-semi-bold-old-style-figures.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../ui/fonts/et-book-bold-line-figures.woff",
      weight: "700",
      style: "normal",
    },
  ],
});
