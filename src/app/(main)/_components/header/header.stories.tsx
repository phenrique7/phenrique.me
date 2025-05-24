import type { Meta, StoryObj } from "@storybook/react";
import { CHeader } from "@/app/(main)/_components/header/header.client";
import { css } from "@/panda/css";

const meta = {
  title: "layout/CHeader",
  component: CHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className={css({ position: "relative", height: "100vh" })}>
        <Story />
      </div>
    ),
  ],
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
          _title: "about",
          label: "About",
          path: "/about",
          icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="lucide lucide-user-round-icon lucide-user-round">  <circle cx="12" cy="8" r="5" />  <path d="M20 21a8 8 0 0 0-16 0" /></svg>',
        },
        {
          _title: "work",
          label: "Work",
          path: "/work",
          icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="lucide lucide-briefcase-icon lucide-briefcase">  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />  <rect width="20" height="14" x="2" y="6" rx="2" /></svg>',
        },
        {
          _title: "writing",
          label: "Writing",
          path: "/writing",
          icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="lucide lucide-square-pen-icon lucide-square-pen">  <path    d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"  />  <path    d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"  /></svg>',
        },
        {
          _title: "reading",
          label: "Reading",
          path: "/reading",
          icon: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="lucide lucide-book-text-icon lucide-book-text">  <path    d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"  />  <path d="M8 11h8" />  <path d="M8 7h6" /></svg>',
        },
      ],
    },
  },
};
