export type MetadataLinkType = {
  text: string | React.ReactNode;
  href: string;
};

export type DocMetadataType = {
  title: string;
  description: string;
  keywords?: string[];
  breadcrumb?: MetadataLinkType[];
  index?: {
    text: string | React.ReactNode;
    ref: `#${string}`;
  }[];
  links?: {
    previous?: MetadataLinkType;
    next?: MetadataLinkType;
    related?: MetadataLinkType[];
  };
};

export type DocMapType = {
  [key: string]: {
    path: string;
    name: string;
    component: React.FC;
    childMap?: DocMapType;
    metadata?: DocMetadataType;
  };
};
