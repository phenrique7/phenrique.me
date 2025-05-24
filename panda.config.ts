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
        clr_white_neutral_900: {
          value: { base: "white", _dark: "{colors.neutral.900}" },
        },
        clr_neutral_950_snow: {
          value: { base: "#0A0A0A", _dark: "#F5F5F5" },
        },
        clr_gray_soft: {
          value: { base: "#404040", _dark: "#E5E5E5" },
        },
        clr_coral_flame: {
          value: { base: "#EB5E41", _dark: "#EB5E41" },
        },
        clr_neutral_100_950: {
          value: { base: "rgba(245, 245, 245, 0.2)", _dark: "rgba(10, 10, 10, 0.2)" },
        },
        clr_neutral_300_700: {
          value: { base: "{colors.neutral.300}", _dark: "{colors.neutral.700}" },
        },
        clr_neutral_900_50: {
          value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.50}" },
        },
        clr_neutral_800_200: {
          value: { base: "{colors.neutral.800}", _dark: "{colors.neutral.200}" },
        },
        clr_neutral_700_400: {
          value: { base: "{colors.neutral.700}", _dark: "{colors.neutral.400}" },
        },
      },
    },
  },

  // The output directory for your CSS system
  outdir: "styled-system",
});
