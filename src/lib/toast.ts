import { UNSTABLE_ToastQueue as ToastQueue } from "react-aria-components";

type ToastContent = {
  title: string;
  description?: string;
};

export const queue = new ToastQueue<ToastContent>();
