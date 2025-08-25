import type { Meta, StoryObj } from "@storybook/nextjs";

import LinkbioPage from "@/app/linkbio/page";

const meta = {
  title: "pages/LinkbioPage",
  component: LinkbioPage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof LinkbioPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
