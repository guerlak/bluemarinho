import Image from "next/image";

import folder from "../media/la-carioca-folder.jpeg";

const eventoPage = async () => {
  return (
    <div className="flex justify-center">
      <Image src={folder} alt="folder la carioca" width={800} height={400} />
    </div>
  );
};

export default eventoPage;
