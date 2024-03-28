import Image from 'next/image'
import { Button } from '../ui/button'
import './style.css'
import Link from 'next/link'
import { headerFont } from '@/utils/fonts'

type FeaturedCardProps = {
  title: string
  imgUrl: string
  ageGroup: string
  slug: string
}

export default function FeaturedCard({
  title,
  imgUrl,
  ageGroup,
  slug,
}: FeaturedCardProps) {
  return (
    <div className="card-shadow border-myBlack flex flex-col items-center justify-center rounded-lg border-2 transition-all duration-150 ease-in-out active:translate-y-3">
      <h1
        className={`border-dark w-full border-b-2 p-2 text-2xl font-bold tracking-tight`}
      >
        {title}
      </h1>
      <Image
        src={imgUrl}
        priority
        alt={title}
        sizes="100vw"
        style={{
          width: '288px',
          height: '300px',
        }}
        width={288}
        height={300}
      />
      <div className="border-dark flex w-full items-center justify-between border-t-2 p-2">
        <p className="text-lg">Age: {ageGroup}</p>
        <Button className="bg-myBlack text-primary rounded px-4 py-2 text-lg">
          <Link href={`/courses/${slug}`}>Learn more</Link>
        </Button>
      </div>
    </div>
  )
}
