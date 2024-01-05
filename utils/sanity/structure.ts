import { type DefaultDocumentNodeResolver } from "sanity/desk";
import { Iframe } from "sanity-plugin-iframe-pane";
import { SanityDocument } from "sanity";

type CustomSanityDocument = SanityDocument & {
  slug: {
    current: string;
  };
};

const url = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";

// Customize this function to show the correct URL based on the current document
function getPreviewUrl(doc: CustomSanityDocument) {
  return doc?.slug?.current ? `${url}/posts/${doc.slug?.current}` : url;
}

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  // Only show preview pane on `movie` schema type documents
  switch (schemaType) {
    case `post`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: CustomSanityDocument) => getPreviewUrl(doc),
          })
          .title("Preview"),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};
