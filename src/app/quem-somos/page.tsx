import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function QuemSomos() {
  return (
    <div className="text-left lg:w-[60%] p-4 m-auto">
      <Link href="/" className="block w-8">
        <FaArrowLeft className="my-8" size={30} />
      </Link>

      <h1 className="text-4xl my-4">Blue Marinho</h1>
      <h2 className="text-2xl my-6">
        A Energia do Rock e Blues em versões únicas
      </h2>
      <p>
        Nascida da paixão pela música, a Blue Marinho é uma banda formada por
        cinco amigos unidos por um amor profundo pelos clássicos do rock e
        blues. Juntos, eles combinam suas habilidades individuais e química
        coletiva para criar uma experiência sonora única.
      </p>
      <p>
        A marca registrada da banda são suas versões carregadas de energia e
        personalidade, que refletem tanto o respeito pela obra original quanto a
        ousadia de reinventar canções conhecidas e amadas por todos.
      </p>
      <h2 className="text-2xl my-6">O Que Nos Define</h2>
      <ul>
        <li> 🎸 Cinco amigos unidos pela música</li>
        <li>
          🎵 Versões e arranjos com dose extra de energia e personalidade para
          clássicos atemporais;
        </li>
        <li>⚡ Energia contagiante em cada apresentação;</li>
        <li>🎶 Repertório diversificado e potente;</li>
      </ul>

      <h2 className="text-2xl my-6">Nosso Repertório</h2>
      <p>
        A Blue Marinho navega por um vasto oceano musical, trazendo o melhor de
        diferentes épocas e estilos. Dos Beatles ao White Stripes, dos Mutantes
        à Nina Simone, do blues clássico ao rock contemporâneo. O repertório
        passa por Led Zeppelin, Stevie Wonder, Guns N' Roses, Jet, The Animals,
        Cazuza, Janis Joplin e muito mais.
      </p>
      <h2 className="text-2xl my-6">Nossa Missão</h2>
      <p>
        Buscamos não apenas reproduzir, mas reinventar os clássicos com o
        cuidado e respeito que nossas obras favoritas merecem. Cada música em
        nosso repertório ganha uma nova vida, carregada com nossa paixão e
        criatividade. Nosso objetivo é proporcionar uma experiência musical que
        faça o público redescobrir suas canções favoritas de uma forma
        totalmente nova e emocionante.
      </p>
      <h2 className="text-2xl my-6">Venha Nos Conhecer</h2>
      <p>
        Se você é fã de boa música, performances cheias de energia e novas
        interpretações de clássicos atemporais, a Blue Marinho é a banda que
        você precisa conhecer. Prepare-se para uma jornada musical inesquecível!
        #BlueMarinho #MúsicaAoVivo #RockNRoll #Blues
      </p>
    </div>
  );
}
