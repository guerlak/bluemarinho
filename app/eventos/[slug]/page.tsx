import { FaSquareInstagram } from "react-icons/fa6";


const eventoPage = async ({ params }: any) => {

  const { slug } = params

  const data = await fetch(`http://localhost:3000/api/eventos/${slug}`, {
    cache: "no-store",
  });

  const evento = await data.json();

  return (
    <div className="flex flex-col gap-8">
      <div> <h1 className="text-5xl">{evento.nome}</h1>
        <small className="text-2xl">{evento.data}</small>
      </div>

      <div>
        <div className="text-2xl">{evento.local}</div>
        <div className="text-2xl">{evento.endereco}</div>

      </div>
      <div className="text-xl">{evento.descricao}</div>

      <a href={evento.url_evento} target="_blank">
        <FaSquareInstagram size={50} />
      </a>
    </div>
  )
}

export default eventoPage;
