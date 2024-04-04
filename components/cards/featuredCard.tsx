import Image from "next/image";
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
    <Link href={`courses/${slug}`}>
      <div className="border-myBlack group relative flex flex-col items-center justify-center overflow-hidden rounded-lg border-2">
        <div className="flex w-full items-center justify-between p-2">
          <h1 className={`font-sfpro w-full text-3xl font-bold tracking-tight`}>
            {title}
          </h1>
          <p className="font-sfpro text-3xl font-bold">{ageGroup}</p>
        </div>
        <div className="h-[550px] w-[400px]">
          <Image
            src={imgUrl}
            alt={title}
            className="rounded-md object-cover transition-all duration-150 ease-in-out group-hover:scale-110"
            fill
          />
        </div>
      </div>
    </Link>
  );
}
