import FeaturedCard from "@/components/cards/featuredCard";
import Container from "@/components/layout/container";
import { client, urlFor } from "@/utils/sanity/client";
import { CoursesType } from "@/utils/types";

async function getCourses() {
  const query = `
  *[_type == "courses" && featured == true ] | order(createdAt asc) {
    title,
    slug,
    ageGroup,
    mainImage,
  }
`;
  const data = await client.fetch<CoursesType[]>(query);

  return data;
}

export default async function FeaturedCourses({}) {
  const courses = await getCourses();

  return (
    <>
      <Container className="mb-10 md:mb-36">
        <div className="flex flex-col items-center justify-center">
          <h1
            className={`text-center text-5xl font-bold tracking-wide md:text-8xl`}
          >
            Featured Courses
          </h1>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
            {courses.map((course, index) => (
              <FeaturedCard
                key={index}
                title={course.title}
                imgUrl={urlFor(course.mainImage).url()}
                ageGroup={course.ageGroup}
                slug={course.slug.current}
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
