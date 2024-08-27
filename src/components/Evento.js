import Link from "next/link";

export default function Evento({ data, local, nome, slug }) {
  return (
    <div className="w-[22em] m-auto">
      <div className="border p-4 rounded-md mt-8 flex divide-x-2 justify-center">
        <div className="text-orange-400">{data}</div>
        <div className="ml-2 px-2">
          {nome}, {local}
        </div>
      </div>
    </div>
  );
}
