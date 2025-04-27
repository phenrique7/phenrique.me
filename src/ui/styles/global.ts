import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  ".react-aria-ToastRegion": {
    position: "fixed",
    bottom: "16px",
    right: "16px",
    display: "flex",
    flexDirection: "column-reverse",
    gap: "8px",
    borderRadius: "8px",
    outline: "none",

    "&[data-focus-visible]": {
      outline: "2px solid slateblue",
      outlineOffset: "2px",
    },
  },

  ".react-aria-Toast": {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    background: "slateblue",
    color: "white",
    padding: "12px 16px",
    borderRadius: "8px",
    outline: "none",

    "&[data-focus-visible]": {
      outline: "2px solid slateblue",
      outlineOffset: "2px",
    },

    ".react-aria-ToastContent": {
      display: "flex",
      flexDirection: "column",
      flex: "1 1 auto",
      minWidth: "0px",

      "[slot=title]": {
        fontWeight: "semibold",
      },
    },

    ".react-aria-Button[slot=close]": {
      flex: "0 0 auto",
      background: "none",
      appearance: "none",
      borderRadius: "50%",
      height: "24px",
      width: "24px",
      fontSize: "16px",
      border: "1px solid white",
      color: "white",
      padding: "0",
      outline: "none",

      "&[data-focus-visible]": {
        boxShadow: "0 0 0 2px slateblue, 0 0 0 4px white",
      },

      "&[data-pressed]": {
        background: "rgba(255, 255, 255, 0.2)",
      },
    },
  },
});
