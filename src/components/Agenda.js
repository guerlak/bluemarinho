import Evento from "../components/Evento";

function Agenda() {
  return (
    <div>
      <h1>PRÓXIMOS SHOWS</h1>
      <br></br>
      <div className="flex justify-center mt-6">
        <Evento
          local="Leblon-RJ"
          nome="La Carioca"
          data="07/06/2024"
          slug="la-carioca"
        />
      </div>
    </div>
  );
}

export default Agenda;
