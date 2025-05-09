export type MediaData = {
  url: string;
  width: number;
  height: number;
  alt: string | null;
};

export type FooterData = {
  layout: {
    footer: {
      source: string;
      mask: MediaData;
      socialLinks: {
        items: Array<{
          _title: string;
          label: string;
          icon: string;
          href: string;
        }>;
      };
    };
  };
};
