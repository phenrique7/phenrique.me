import type { Preview } from "@storybook/nextjs";

import "@/ui/styles/base.css";
import { css } from "@/panda/css";
import { Provider } from "@/app/_components/provider";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <div className={css({ fontFamily: "Geist", "--p-body-font-family": "Geist" })}>
        <Provider>
          <Story />
        </Provider>
      </div>
    ),
  ],
};

export default preview;
