export type PageProps<P = Record<string, unknown>> = {
  params: Promise<P>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
};
