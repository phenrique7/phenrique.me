import { defineConfig } from "@pandacss/dev";
import { globalCss } from "@/ui/styles/global";

export default defineConfig({
  // Whether to use CSS reset
  preflight: true,

  globalCss,

  // Where to look for your CSS declarations
  include: [".storybook/*.{tsx}/", "./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
    semanticTokens: {
      colors: {
        app_stand_out: {
          value: { base: "#EB5E41", _dark: "#EB5E41" },
        },
        app_text_primary: {
          value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.50}" },
        },
        app_text_secondary: {
          value: { base: "{colors.neutral.700}", _dark: "{colors.neutral.200}" },
        },
        app_text_tertiary: {
          value: { base: "{colors.stone.800}", _dark: "#E2E8f0" },
        },
      },
    },
  },

  // The output directory for your CSS system
  outdir: "styled-system",
});
