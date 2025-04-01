import Evento from "./Evento";

import { promises as fs } from "fs";

async function Agenda() {
  // data from file
  //const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");

  const data = await fetch("http://localhost:3000/api/events", {
    next: { revalidate: 60 },
    cache: "no-store",
  });

  const dataJson = await data.json();

  console.log("dataJson", dataJson);

  return (
    <div>
      <h1>PRÓXIMOS SHOWS</h1>
      <br></br>
      <div className="flex-col justify-center mt-6">
        {dataJson.map((evento) => (
          <Evento
            slug={evento.slug}
            nome={evento.nome}
            data={evento.data}
            local={evento.local}
            key={evento.slug}
            url={evento.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Agenda;
