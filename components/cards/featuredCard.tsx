import Image from "next/image";
import { Button } from "../ui/button";
import "./style.css";
import Link from "next/link";

type FeaturedCardProps = {
  title: string;
  imgUrl: string;
  ageGroup: string;
  slug: string;
};

export default function FeaturedCard({
  title,
  imgUrl,
  ageGroup,
  slug,
}: FeaturedCardProps) {
  return (
    <div className="card-shadow border-myBlack relative flex flex-col items-center justify-center overflow-hidden rounded-lg border-2 transition-all duration-150 ease-in-out active:translate-y-3">
      <h1
        className={`absolute left-0 top-0 m-2 w-full text-3xl font-bold tracking-tight`}
      >
        {title}
      </h1>
      <Image
        src={imgUrl}
        priority
        alt={title}
        sizes="100vw"
        style={{
          width: "388px",
          height: "420px",
        }}
        width={388}
        height={450}
      />
      <div className="border-myBlack bg-primary absolute bottom-0 left-0 flex w-full items-center justify-between border-t-2 p-2">
        <p className="text-lg">Age: {ageGroup}</p>
        <Button className="bg-myBlack text-primary rounded px-4 py-2 text-lg">
          <Link href={`/courses/${slug}`}>Learn more</Link>
        </Button>
      </div>
    </div>
  );
}
