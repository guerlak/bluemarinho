import Link from "next/link";

export default function Evento({ data, local, nome, slug }) {
  return (
    <div className="w-[22em] m-auto">
      <Link
        className="border p-4 rounded-md mt-8 flex divide-x-2 justify-center"
        href={`eventos/${slug}`}
      >
        <div className="text-orange-400">{data}</div>
        <div className="ml-2 px-2">
          {nome}, {local}
        </div>
      </Link>
    </div>
  );
}
