export default function Evento({ data, local, nome }) {
  return (
    <div className="my-4">
      <h1>
        {nome}, {local} - {data}
      </h1>
    </div>
  );
}
