import SocialIcons from "../../components/SocialIcons";
import Image from "next/image";
import fotoRelease from "./foto-release.jpg";

export default function release() {
  return (
    <div className="text-left p-10 lg:w-[80%] m-auto">
      <h3 className="font-bold">
        Ecoando Clássicos com Originalidade: a Banda Blue Marinho oferece uma
        experiência única para os amantes do rock.
      </h3>
      <small>release</small>

      <p className="my-10">
        Chega à cena carioca os Blue Marinho, um quinteto composto pela voz
        poderosa e envolvente de Paola Marinho e uma banda potente que apresenta
        uma rica mistura de releituras de clássicos do rock e blues dos anos 70
        e 80.
      </p>

      <div className="flex flex-wrap items-center gap-6 mt-4 mb-8">
        <Image
          src={fotoRelease}
          width={500}
          height={500}
          alt="foto banda"
          className="rounded "
        />

        <div className="sm:w-[50%]">
          <p>
            Apesar do setlist composto por acordes e notas familiares, os Blue
            Marinho passam longe de uma atuação cover. Eles reinventam e
            reinjetam energia em cada faixa, com arranjos próprios que
            surpreendem o público. Imagine Nina Simone, Beatles e Stevie Wonder
            fundindo-se em uma sinfonia de rock n roll envolvente.
          </p>
          <br></br>
          <p>
            Paola Marinho, Felipe Campos, Fábio Tavares, Guilherme Braun e
            Rafael Guerlak, não são apenas músicos talentosos, mas amigos de
            longa data. A história da banda começou de forma despretensiosa, os
            amigos se uniram para tocar no casamento da Paola e a brincadeira se
            tornou um dos pontos altos da festa! De lá para cá e depois de
            muitos feedbacks positivos, os amigos decidiram transformar a
            brincadeira em coisa séria, dando origem a Blue Marinho.
          </p>
          <br></br>
          <p>
            O show é capaz de preencher com maestria o espaço que o recebe,
            levando o público a viajar por uma jornada musical que transcende
            expectativas. Produtores de shows e amantes de uma boa música estão
            convidados a testemunhar esse show de rock cheio de personalidade.
          </p>
        </div>
      </div>

      <div className="lg:mt-4">
        <p>Shows e mais informações, entre em contato com:</p>
        <p>Filipe: (21) 98844-4059</p>
        <p>Mari: (21) 99744-8621</p>
        <p>bandabluemarinho@gmail.com</p>
      </div>

      <br />

      <p className="my-1">Siga-nos nas redes sociais:</p>
      <SocialIcons size={40} />
      <br />

      <q>
        <strong>
          Prepare-se para uma viagem musical com os Blue Marinho. O rock nunca
          soou tão autêntico
        </strong>
        .
      </q>

      <div className="flex justify-center my-10 b-1">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/kd57l2z8Pz8?si=nXMj9Ox2HBOpHBaU"
          title="Blue Marinho YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
