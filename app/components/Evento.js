

export default function Evento({ data, local, nome, slug, url }) {
  return (
    <div className="w-[500px] m-auto">
      <a href={url} target="blank" className="max-w-md m-auto">
        <div className="border p-4 rounded-md mt-8 flex">
          <div className="text-orange-400 w-[140px] text-center border-r-2 p-2">{data}</div>
          <div className="w-[400px] flex justify-center items-center text-center">
            {nome}, {local}
          </div>
        </div>
      </a>
    </div>
  );
}
