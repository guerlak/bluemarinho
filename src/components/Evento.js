import Link from "next/link";

export default function Evento({ data, local, nome, slug }) {
  return (
    <div className="m-2">
      <Link className="border p-4 rounded-md" href={`eventos/${slug}`}>
        {nome}, {local} - {data}
      </Link>
    </div>
  );
}
