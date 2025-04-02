

export default function Evento({ data, local, nome, slug, url }) {
  return (
    <div className="w-[20em] m-auto mt-8">
      <a href={url} target="blank" className="max-w-md m-auto">
        <div className="border rounded-md p-4">
          <div className="text-orange-400" >{data}</div>
          <div className="">
            {nome}, {local}
          </div>
        </div>
      </a>
    </div>
  );
}
