import Image from "next/image";
import Link from "next/link";

export default function Card({result}) {
  return (
    <div>
        <Link href={`/movie/${result.id}`}>
            <Image
            src={`https://image.tmbd.org/t/p/original/${result.backdrop_path || result.poster_path}`}
            width={500}
            height={300}
            alt=""
            className="sm:rounded-t-lg"
            >

            </Image>
        </Link>
    </div>
  )
}
