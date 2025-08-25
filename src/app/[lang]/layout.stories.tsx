import type { Meta, StoryObj } from "@storybook/nextjs";

import MainLayout from "@/app/[lang]/layout";

const meta = {
  title: "layouts/MainLayout",
  component: MainLayout,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MainLayout>
        <main />
      </MainLayout>
    ),
  ],
} satisfies Meta<typeof MainLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
