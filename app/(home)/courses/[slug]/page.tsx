export default function CoursePage({ params }: { params: { slug: string } }) {
  return (
    <>
      <p>Hello from {params.slug} route</p>
    </>
  );
}
