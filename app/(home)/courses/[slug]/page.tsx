import Container from '@/components/layout/container'

export default function CoursePage({ params }: { params: { slug: string } }) {
  return (
    <>
      <Container className="mb-20">
        <p>Hello from {params.slug} route</p>
      </Container>
    </>
  )
}
