
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div>
        <h1>BLUE MARINHO</h1>

        <p className="my-7">Ecoando Clássicos com Originalidade: a Banda Blue Marinho oferece uma experiência única para os amantes do rock
          Chega à cena carioca os Blue Marinho, um quinteto composto pela voz poderosa e envolvente de Paola Marinho e
          uma banda potente que apresenta uma rica mistura de releituras de clássicos do rock e blues dos anos 70 e 80.
        </p>

        <p className="my-7">Apesar do setlist composto por acordes e notas familiares, os Blue Marinho passam longe de uma atuação cover.
          Eles reinventam e reinjetam energia em cada faixa, com arranjos próprios que surpreendem o público.
          Imagine Nina Simone, Beatles e Stevie Wonder fundindo-se em uma sinfonia de rock n roll envolvente.
        </p>

        <p className="my-7">
          Paola Marinho juntamente com o s músicos Felipe Campos, Fábio Tavares, Guilherme Braun e Rafael Guerlak, não são apenas músicos talentosos, mas amigos de longa data.
          A história da banda começou de forma despretensiosa, os amigos se uniram para tocar no casamento da Paola e a brincadeira
          se tornou um dos pontos altos da festa! De lá para cá e depois de muitos feedbacks positivos, os amigos decidiram transformar a brincadeira em coisa séria,
          dando origem a Blue Marinho.
        </p>

        <p className="my-7">
          O show, com duração aproximada de 1h20 é capaz de preencher com maestria o espaço que o recebe,
          levando o público a viajar por uma jornada musical que transcende expectativas.
          Produtores de shows e amantes de uma boa música estão convidados a testemunhar esse show de rock cheio de personalidade.
        </p>

        <p className="my-7">Para mais informações, entre em contato com:</p>

        <p className="my-7">Siga-nos nas redes sociais:</p>
        <div className="flex">
          <a href="https://www.youtube.com/@BlueMarinho" target="_blank" rel="noopener noreferrer" className="p-2"><FaYoutube size={40} /></a>
          <a href="https://www.instagram.com/bandabluemarinho/" target="_blank" rel="noopener noreferrer" className="p-2"> <FaInstagram size={40} /></a>
        </div>



        <h2>Prepare-se para uma viagem musical com os Blue Marinho. O rock nunca soou tão autêntico.</h2>
      </div>
    </main>
  );
}
