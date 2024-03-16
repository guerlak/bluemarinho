import Image from "next/image"
import guitarsPic from "../../public/galeria/guitars.jpeg"
import fs from "fs"

const imgFolder = "./public/galeria/";

const pics: any = [];

fs.readdirSync(imgFolder).forEach(file => {
    pics.push("/galeria/" + file);
});

function Galeria() {

    return (
        <>
            <div className="text-center"><h1 className="p-10">Ensaio - Megaphone Estudio</h1></div>


            <div className="flex flex-wrap justify-center">

                {pics.map((p, i: any) => (
                    <button className="p-2" key={i}>
                        <Image className="rounded-md" src={pics[i]} key={i} alt="Fotos de estudio por Pedro Colo" width={400} height={500} />
                    </button>

                ))}

            </div>
        </>
    )
}


export default Galeria;