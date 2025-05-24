import { Pump } from "basehub/react-pump";
import { CHeader } from "@/app/(main)/_components/header/header.client";

export function Header() {
  return (
    <Pump
      queries={[
        {
          layout: {
            header: {
              avatar: {
                url: true,
                alt: true,
                width: true,
                height: true,
              },
              navLinks: {
                items: {
                  _title: true,
                  label: true,
                  path: true,
                  icon: true,
                },
              },
            },
          },
        },
      ]}
    >
      {async ([data]) => {
        "use server";

        return (
          <CHeader
            avatar={data.layout.header.avatar}
            navLinks={data.layout.header.navLinks}
          />
        );
      }}
    </Pump>
  );
}
