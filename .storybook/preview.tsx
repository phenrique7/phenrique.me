import { Geist, Geist_Mono } from "next/font/google";
import type { Preview } from "@storybook/react";
import "../src/ui/styles/base.css";

const geist = Geist({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={[geistMono.className, geist.className].join(" ")} style={{ fontFamily: "Geist" }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
