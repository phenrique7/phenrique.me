"use client";

import { useRouter } from "next/navigation";
import type { PropsWithChildren } from "react";
import { RouterProvider } from "react-aria-components";

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>;
  }
}

type ProviderProps = PropsWithChildren;

export function Provider(props: ProviderProps) {
  const router = useRouter();

  return <RouterProvider navigate={router.push}>{props.children}</RouterProvider>;
}
