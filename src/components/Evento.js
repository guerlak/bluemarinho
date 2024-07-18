import Link from "next/link";

export default function Evento({ data, local, nome, slug }) {
  return (
    <div className="mt-10">
      <Link className="border p-4 rounded-md mt-10" href={`eventos/${slug}`}>
        {nome}, {local} - {data}
      </Link>
    </div>
  );
}
