
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <main className="p-10 lg:px-60">

      <h1 className="font-bold">BLUE MARINHO</h1><small>release</small>

      <p className="my-7">Ecoando Clássicos com Originalidade: a Banda Blue Marinho oferece uma experiência única para os amantes do rock.
        Chega à cena carioca os Blue Marinho, um quinteto composto pela voz poderosa e envolvente de Paola Marinho e
        uma banda potente que apresenta uma rica mistura de releituras de clássicos do rock e blues dos anos 70 e 80.
      </p>

      <p className="my-7">Apesar do setlist composto por acordes e notas familiares, os Blue Marinho passam longe de uma atuação cover.
        Eles reinventam e reinjetam energia em cada faixa, com arranjos próprios que surpreendem o público.
        Imagine Nina Simone, Beatles e Stevie Wonder fundindo-se em uma sinfonia de rock n roll envolvente.
      </p>

      <p className="my-7">
        Paola Marinho, Felipe Campos, Fábio Tavares, Guilherme Braun e Rafael Guerlak, não são apenas músicos talentosos, mas amigos de longa data.
        A história da banda começou de forma despretensiosa, os amigos se uniram para tocar no casamento da Paola e a brincadeira
        se tornou um dos pontos altos da festa! De lá para cá e depois de muitos feedbacks positivos, os amigos decidiram transformar a brincadeira em coisa séria,
        dando origem a Blue Marinho.
      </p>

      <p className="my-7">
        O show, com duração aproximada de 1h20 é capaz de preencher com maestria o espaço que o recebe,
        levando o público a viajar por uma jornada musical que transcende expectativas.
        Produtores de shows e amantes de uma boa música estão convidados a testemunhar esse show de rock cheio de personalidade.
      </p>

      <p className="py-1">Shows e mais informações, entre em contato com:</p>
      <p>Filipe: (21) 98844-4059</p>
      <p>Mari: (21) 99744-8621</p>
      <p>bandabluemarinho@gmail.com</p>


      <br />

      <p className="my-1">Siga-nos nas redes sociais:</p>
      <div className="flex">
        <a href="https://www.youtube.com/@BlueMarinho" target="_blank" rel="noopener noreferrer" className="p-2"><FaYoutube size={40} /></a>
        <a href="https://www.instagram.com/bandabluemarinho/" target="_blank" rel="noopener noreferrer" className="p-2"> <FaInstagram size={40} /></a>
      </div>
      <br />

      <q><strong>Prepare-se para uma viagem musical com os Blue Marinho. O rock nunca soou tão autêntico</strong>.</q>

      <div className="flex justify-center my-10 b-1">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kd57l2z8Pz8?si=nXMj9Ox2HBOpHBaU" title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      </div>

    </main>
  );
}
