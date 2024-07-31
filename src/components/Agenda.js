import Evento from "../components/Evento";

import { promises as fs } from "fs";

async function Agenda() {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf8");

  const dataJson = JSON.parse(file);

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
          />
        ))}
      </div>
    </div>
  );
}

export default Agenda;
