import Container from "@/components/layout/container";
import DocumentsCount, { query } from "@/components/sanity/documentsCount";
import previewDocumentsCount from "@/components/sanity/previewDocumentsCount";
import ProgrammingSvg from "@/components/svgs/programmingSvg";
import { client } from "@/utils/sanity/client";
import { LiveQuery } from "next-sanity/preview/live-query";
import { draftMode } from "next/headers";

type Post = {
  _id: string;
  title?: string;
  slug?: {
    current: string;
  };
};

export default async function Home() {
  const posts = await client.fetch<Post[]>(`*[_type == "post"]`);

  return (
    <main className="">
      <Container>
        <h1> Hello Main Page</h1>
        <ProgrammingSvg />
        <LiveQuery
          enabled={draftMode().isEnabled}
          query={query}
          initialData={posts.length}
          as={previewDocumentsCount}
        >
          <DocumentsCount data={posts.length} />
        </LiveQuery>
        <ul>
          {posts.map((post) => (
            <li key={post._id}>
              <a href={post?.slug?.current}>{post?.title}</a>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}
