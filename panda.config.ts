import { defineConfig } from "@pandacss/dev";
import { globalCss } from "@/ui/styles/global";

export default defineConfig({
  // Whether to use CSS reset
  preflight: true,

  globalCss,

  // Where to look for your CSS declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your CSS system
  outdir: "styled-system",
});
