export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <>
      <p>Hello from {params.slug} route</p>
    </>
  );
}
