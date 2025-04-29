"use client";

import { motion } from "motion/react";
import {
  Text,
  UNSTABLE_Toast as Toast,
  UNSTABLE_ToastRegion as ToastRegion,
  UNSTABLE_ToastContent as ToastContent,
} from "react-aria-components";
import { queue } from "@/lib/toast";

const MotionToast = motion.create(Toast);

export function ToastProvider() {
  return (
    <ToastRegion queue={queue}>
      {({ toast }) => {
        // console.log("toast", toast);
        return (
          <MotionToast
            toast={toast}
            initial={{ scale: 0.6 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <ToastContent>
              <Text slot="title">{toast.content.title}</Text>
              <Text slot="description">{toast.content.description}</Text>
            </ToastContent>
          </MotionToast>
        );
      }}
    </ToastRegion>
  );
}
