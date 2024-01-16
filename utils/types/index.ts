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

type Category = {
  name: string;
  description: string;
};

export type CoursesType = {
  title: string;
  slug: {
    current: string;
  };
  mainImage: SanityImageSource;
  ageGroup: string;
};
