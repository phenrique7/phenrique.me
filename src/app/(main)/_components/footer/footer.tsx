import { draftMode } from "next/headers";
import { Pump } from "basehub/react-pump";
import { CFooterContainer } from "@/app/(main)/_components/footer/footer-container.client";

export async function Footer() {
  return (
    <Pump
      draft={(await draftMode()).isEnabled}
      queries={[
        {
          layout: {
            footer: {
              mask: {
                url: true,
                alt: true,
                width: true,
                height: true,
              },
              socialLinks: {
                items: {
                  _title: true,
                  label: true,
                  icon: true,
                  href: true,
                },
              },
              source: true,
            },
          },
        },
      ]}
    >
      {async ([data]) => {
        "use server";

        return <CFooterContainer data={data} />;
      }}
    </Pump>
  );
}
