import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID; // "pv8y60vp"
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET; // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03";
const vercelURL = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: false,
  perspective: "published",
  document: {
    // prev is the result from previous plugins and thus can be composed
    productionUrl: async (prev: any, context: any) => {
      // context includes the client and other details
      const { getClient, dataset, document } = context;
      const client = getClient({ apiVersion });

      if (document._type === "post") {
        const slug = await client.fetch(
          `*[_type == 'routeInfo' && post._ref == $postId][0].slug.current`,
          { postId: document._id }
        );

        const params = new URLSearchParams();
        params.set("preview", "true");
        params.set("dataset", dataset);

        return `${vercelURL}/posts/${slug}?${params}`;
      }

      if (document._type === "courses") {
        const slug = await client.fetch(
          `*[_type == 'routeInfo' && courses._ref == $coursesId][0].slug.current`,
          { coursesId: document._id }
        );

        const params = new URLSearchParams();
        params.set("preview", "true");
        params.set("dataset", dataset);

        return `${vercelURL}/posts/${slug}?${params}`;
      }

      return prev;
    },
  },
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
