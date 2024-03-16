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

                {pics.map((p, i) => (
                    <button className="p-2">
                        <Image className="rounded-md" src={pics[i]} alt="" width={400} height={500} />
                    </button>

                ))}

            </div>
        </>
    )
}


export default Galeria;