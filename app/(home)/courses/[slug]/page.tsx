import Container from "@/components/layout/container";

export default function CoursePage({ params }: { params: { slug: string } }) {
  return (
    <>
      <Container>
        <p>Hello from {params.slug} route</p>
      </Container>
    </>
  );
}
