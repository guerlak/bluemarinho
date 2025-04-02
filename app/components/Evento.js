

export default function Evento({ data, local, nome, slug, url }) {
  return (
    <div className="w-[30em] m-auto">
      <a href={url} target="blank" className="max-w-md m-auto">
        <div className="border p-4 rounded-md mt-8 flex">
          <div className="text-orange-400 w-[7em] text-center border-r-2">{data}</div>
          <div className="w-[23em] flex justify-center items-center text-center">
            {nome}, {local}
          </div>
        </div>
      </a>
    </div>
  );
}
