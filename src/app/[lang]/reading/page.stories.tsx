import type { Meta, StoryObj } from "@storybook/nextjs";

import MainLayout from "@/app/[lang]/layout";
import ReadingPage from "@/app/[lang]/reading/page";

const meta = {
  title: "pages/ReadingPage",
  component: ReadingPage,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MainLayout>
        <Story />
      </MainLayout>
    ),
  ],
} satisfies Meta<typeof ReadingPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
