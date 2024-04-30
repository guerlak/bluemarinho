export default function Evento({ data, local, nome }) {
  return (
    <div className="border-2 p-10 m-5 rounded">
      {nome}, {local} - {data}
    </div>
  );
}
