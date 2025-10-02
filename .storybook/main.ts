import path from "path";
import type { StorybookConfig } from "@storybook/nextjs";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  features: {
    experimentalRSC: true,
  },
  webpackFinal: async (config) => {
    // Ensure resolve object exists
    config.resolve = config.resolve || {};
    // Use tsconfig-paths-webpack-plugin to resolve aliases from tsconfig.json
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
        extensions: [".ts", ".tsx", ".js", ".jsx", ".mjs"],
      }),
    ];

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Swap basehub for a browser-only mock inside Storybook
      basehub: path.resolve(__dirname, "../src/app/_api/mocks/basehub.mock.ts"),
    };

    return config;
  },
};

export default config;
