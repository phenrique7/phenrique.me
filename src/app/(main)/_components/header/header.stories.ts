import type { Meta, StoryObj } from "@storybook/react";
import { CHeader } from "@/app/(main)/_components/header/header.client";

const meta = {
  title: "layout/HeaderClient",
  component: CHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof CHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatar: {
      width: 259,
      height: 259,
      alt: "Paulo Henrique's avatar",
      url: "https://assets.basehub.com/f4f66b1c/d4589b0e34be902a252730e5a15149ac/me.website.png",
    },
    navLinks: {
      items: [
        {
          _title: "home",
          label: "Home",
          path: "/",
        },
        {
          _title: "work",
          label: "Work",
          path: "/work",
        },
        {
          _title: "projects",
          label: "Projects",
          path: "/projects",
        },
        {
          _title: "writing",
          label: "Writing",
          path: "/writing",
        },
        {
          _title: "reading",
          label: "Reading",
          path: "/reading",
        },
      ],
    },
  },
};
