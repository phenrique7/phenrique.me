import type { Meta, StoryObj } from "@storybook/nextjs";

import HomePage from "@/app/[lang]/page";
import MainLayout from "@/app/[lang]/layout";

const meta = {
  title: "pages/HomePage",
  component: HomePage,
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
} satisfies Meta<typeof HomePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
