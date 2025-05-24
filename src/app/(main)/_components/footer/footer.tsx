import { Pump } from "basehub/react-pump";
import { CFooter } from "@/app/(main)/_components/footer/footer.client";

export function Footer() {
  return (
    <Pump
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

        return (
          <CFooter
            source={data.layout.footer.source}
            socialLinks={data.layout.footer.socialLinks}
          />
        );
      }}
    </Pump>
  );
}
