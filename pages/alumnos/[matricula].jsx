import Image from "next/image";

import { baseUrl, dataApi } from "../../utils/dataApi";

const Alumnos = ({ alumnos }) => {
    // console.log(alumnos );
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:mx-20 md:mt-10">
      <div className="w-full flex flex-col items-center my-6 md:justify-center">
        <Image
          width="120px"
          height="120px"
          objectFit="cover"
          src="https://i.pravatar.cc/300"
          alt="Student Profile Image"
        />
        <div className="my-3 text-center">
          <h1 className="font-bold text-xl text-gray-700">{`${alumnos.nombres} ${alumnos.apellidoPaterno} ${alumnos.apellidoMaterno}`} </h1>
          <p className="font-medium text-gray-500 text-sm">
            {`${alumnos.grado}° Grado Grupo "${alumnos.grupo}"`}
          </p>
          <p className="font-medium text-gray-500 text-sm">{alumnos.telefono}</p>

          <div className="my-10">
            {" "}
            <h1 className="font-medium text-base text-blue-500">
              Datos Tutor:
            </h1>
            <h2 className="font-semibold text-lg text-gray-700">
              {`${alumnos.tutor.data.attributes.nombres}
              ${alumnos.tutor.data.attributes.apellidoPaterno}
              ${alumnos.tutor.data.attributes.apellidoMaterno}`}
              
            </h2>
            <p className="font-medium text-gray-500 text-sm"> {alumnos.tutor.data.attributes.telefono}</p>
            <p className="font-medium text-gray-500 text-sm">
              {" "}
              {alumnos.tutor.data.attributes.correo}
            </p>
            <p className="font-medium text-gray-500 text-sm">
              {" "}
              {alumnos.tutor.data.attributes.domicilio}
            </p>
          </div>
        </div>
      </div>
          
    </div>
  );
};

export const getStaticPaths = async () => {
  const alumnos = await dataApi(`${baseUrl}/alumnos`, {
    fields: ["matricula"],
  });

  return {
    paths: alumnos.data.map((alumno) => ({
      params: {
        matricula: alumno.attributes.matricula,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const matricula = params.matricula;
  const alumnos = await dataApi(`${baseUrl}/alumnos?filters[matricula ]=${matricula}&populate=*`);

  return {
    props: {
      alumnos: alumnos.data[0].attributes,
    },
  };
};

export default Alumnos;