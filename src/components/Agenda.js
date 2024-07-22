import Evento from "../components/Evento";
import data from "../../data";

function Agenda() {
  const data = [
    {
      local: "V. Pequena-RJ",
      nome: "Ziege Zag",
      data: "03/08",
      slug: "ziege-zag",
    },
    {
      local: "São Conrado-RJ",
      nome: "Quiqui",
      data: "10/08",
      slug: "quiqui",
    },
    {
      local: "Botafogo-RJ",
      nome: "Coordenadas",
      data: "16/08",
      slug: "coordenadas",
    },
  ];

  return (
    <div>
      <h1>PRÓXIMOS SHOWS</h1>
      <br></br>
      <div className="flex-col justify-center mt-6">
        {data.map((evento) => (
          <Evento
            slug={evento.slug}
            nome={evento.nome}
            data={evento.data}
            local={evento.local}
            key={evento.slug}
          />
        ))}
      </div>
    </div>
  );
}

export default Agenda;
