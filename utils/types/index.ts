import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface BlogPost {
  _id: string;
  title: string;
  smallDescription: string;
  slug: {
    current: string;
  };
  mainImage: SanityImageSource;
}
