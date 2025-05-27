import type { Meta, StoryObj } from "@storybook/react";
import { ErrorFallback } from "@/ui/shared/error-fallback";

const meta = {
  title: "components/ErrorFallback",
  component: ErrorFallback,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ErrorFallback>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    error: new Error("Something went wrong"),
  },
};
