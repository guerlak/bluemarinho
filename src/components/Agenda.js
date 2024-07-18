import Evento from "../components/Evento";

function Agenda() {
  return (
    <div>
      <h1>PRÓXIMOS SHOWS</h1>
      <br></br>
      <div className="flex-col justify-center mt-6">
        <Evento
          local="Vargem Pequena-RJ"
          nome="Ziege Zag Cervejaria"
          data="03/07/2024"
          slug="ziege-zag"
        />
        <Evento
          local="São Conrado-RJ"
          nome="Quiqui"
          data="10/07/2024"
          slug="quiqui"
        />
        <Evento
          local="Botafogo-RJ"
          nome="Coordenadas Bar"
          data="16/07/2024"
          slug="coordenadas"
        />
      </div>
    </div>
  );
}

export default Agenda;
