"use client";

import {
  Text,
  UNSTABLE_Toast as Toast,
  UNSTABLE_ToastRegion as ToastRegion,
  UNSTABLE_ToastContent as ToastContent,
} from "react-aria-components";
import { queue } from "@/lib/toast";

export function ToastProvider() {
  return (
    <ToastRegion queue={queue}>
      {({ toast }) => (
        <Toast toast={toast}>
          <ToastContent>
            <Text slot="title">{toast.content.title}</Text>
            <Text slot="description">{toast.content.description}</Text>
          </ToastContent>
        </Toast>
      )}
    </ToastRegion>
  );
}
