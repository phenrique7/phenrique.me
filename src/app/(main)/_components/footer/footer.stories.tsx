import type { Meta, StoryObj } from "@storybook/react";
import { vstack } from "@/panda/patterns";
import { CFooter } from "@/app/(main)/_components/footer/footer.client";

const meta = {
  title: "layout/FooterClient",
  component: CFooter,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div
        className={vstack({
          height: "100vh",
          alignItems: "stretch",
          _before: { content: '""', flex: 1, display: "block" },
        })}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    socialLinks: {
      items: [
        {
          _title: "x-logo",
          label: "X (Twitter)",
          icon: '<svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">  <path fill-rule="evenodd" clip-rule="evenodd" d="M1 1.5625H6.90625L11.1072 7.42435L16.1875 1.5625H18.4375L12.1257 8.84539L19 18.4375H13.0938L8.89276 12.5757L3.8125 18.4375H1.5625L7.87435 11.1546L1 1.5625ZM13.9605 16.75L4.28548 3.25H6.03952L15.7146 16.75H13.9605Z" fill="currentColor"></path></svg>',
          href: "https://x.com/__phenrique7",
        },
        {
          _title: "instagram-logo",
          label: "Instagram",
          icon: '<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"> <path d="M17.017 25H6.982C3.142 25 0 21.815 0 17.921V7.08C0 3.185 3.142 0 6.982 0h10.035C20.857 0 24 3.185 24 7.079V17.92C24 21.815 20.857 25 17.017 25Zm0-1.87a5.064 5.064 0 0 0 3.626-1.532 5.207 5.207 0 0 0 1.511-3.677V7.08c0-1.383-.536-2.69-1.51-3.678a5.066 5.066 0 0 0-3.627-1.532H6.982a5.065 5.065 0 0 0-3.627 1.532A5.207 5.207 0 0 0 1.844 7.08V17.92c0 1.384.537 2.689 1.51 3.677a5.065 5.065 0 0 0 3.628 1.532h10.035Z"    fill="currentColor"  ></path>  <path    d="M18.645 12.403c0 3.701-2.96 6.7-6.609 6.7s-6.61-3-6.61-6.7 2.96-6.701 6.61-6.701c3.65 0 6.609 3 6.609 6.701Zm-6.641-4.382c-2.39 0-4.328 1.964-4.328 4.388 0 2.423 1.937 4.388 4.328 4.388 2.39 0 4.327-1.965 4.327-4.388.002-2.424-1.936-4.388-4.327-4.388ZM20.316 5.598c0 .876-.7 1.586-1.565 1.586-.864 0-1.564-.71-1.564-1.586 0-.876.7-1.587 1.564-1.587.864 0 1.565.71 1.565 1.587Z" fill="currentColor"></path></svg>',
          href: "https://instagram.com/phenrique___",
        },
        {
          _title: "github-logo",
          label: "GitHub",
          icon: '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8a7.993 7.993 0 0 0 5.19 7.49c.185.07.386.15.575.089a.373.373 0 0 0 .255-.369c0-.775-.73-1.301-1.491-1.453-.819-.164-1.099-.668-1.209-.977-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.624 1.048 1.57.933 2.11.747.14-.047.239-.23.276-.372.095-.36-.144-.861-.505-.952C4.17 11.004 2.92 10.088 2.92 7.58c0-.399.065-.766.185-1.1.254-.712.483-1.175.474-1.93-.008-.593.599-1.304 1.156-1.103.08.029.165.063.256.103a4.29 4.29 0 0 0 2.188.356 7.657 7.657 0 0 1 1.667-.001c.754.081 1.52-.06 2.214-.365.09-.039.175-.072.254-.1.553-.199 1.153.512 1.147 1.1-.006.76.225 1.23.479 1.947.117.331.18.695.18 1.093 0 2.147-.914 3.125-2.073 3.587-.574.23-1.037 1.225-1.037 1.843 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z" fill="currentColor"></path></svg>',
          href: "https://github.com/phenrique7",
        },
        {
          _title: "linkedin-logo",
          label: "LinkedIn",
          icon: '<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M15 1H5C2.92925 1 1 2.92925 1 5V15C1 17.0707 2.92925 19 5 19H15C17.0715 19 19 17.0707 19 15V5C19 2.92925 17.0715 1 15 1ZM7 15.25H4.75V7H7V15.25ZM5.875 6.049C5.1505 6.049 4.5625 5.4565 4.5625 4.726C4.5625 3.9955 5.1505 3.403 5.875 3.403C6.5995 3.403 7.1875 3.9955 7.1875 4.726C7.1875 5.4565 6.60025 6.049 5.875 6.049ZM16 15.25H13.75V11.047C13.75 8.521 10.75 8.71225 10.75 11.047V15.25H8.5V7H10.75V8.32375C11.797 6.38425 16 6.241 16 10.1808V15.25Z" fill="currentColor"></path></svg>',
          href: "https://www.linkedin.com/in/phenrique7",
        },
      ],
    },
    source: "https://github.com/phenrique7/phenrique.me",
  },
};
