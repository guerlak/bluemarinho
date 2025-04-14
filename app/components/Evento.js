import Link from "next/link";


export default function Evento({ data, local, nome, slug, url }) {
  return (
    <div className="w-[20em] m-auto mt-8">
      <Link href={url} className="max-w-md m-auto">
        <div className="border rounded-md p-4">
          <div className="text-orange-400 mb-2">{data}</div>
          <div className="">
            {nome}, {local}
          </div>
        </div>
      </Link>
    </div>
  );
}
