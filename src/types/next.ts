export type PageProps = Partial<{
  params: Promise<Record<string, string>>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}>;

export type LayoutProps = React.PropsWithChildren<PageProps>
