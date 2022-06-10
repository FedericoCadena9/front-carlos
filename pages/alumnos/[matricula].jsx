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
          <h1 className="font-bold text-xl text-gray-700">
            {`${alumnos.nombres} ${alumnos.apellidoPaterno} ${alumnos.apellidoMaterno}`}{" "}
          </h1>
          <p className="font-medium text-gray-500 text-sm">
            {`${alumnos.grado}° Grado Grupo "${alumnos.grupo}"`}
          </p>
          <p className="font-medium text-gray-500 text-sm">
            {alumnos.telefono}
          </p>

          <div className="my-10">
            {" "}
            <h1 className="font-medium text-base text-blue-500">
              Datos tutor:
            </h1>
            <h2 className="font-semibold text-lg text-gray-700">
              {`${alumnos.tutores.data.attributes.nombres}
              ${alumnos.tutores.data.attributes.apellidoPaterno}
              ${alumnos.tutores.data.attributes.apellidoMaterno}`}
            </h2>
            <p className="font-medium text-gray-500 text-sm">
              {" "}
              {alumnos.tutores.data.attributes.telefono}
            </p>
            <p className="font-medium text-gray-500 text-sm">
              {" "}
              {alumnos.tutores.data.attributes.correo}
            </p>
            <p className="font-medium text-gray-500 text-sm">
              {" "}
              {alumnos.tutores.data.attributes.domicilio}
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-gray-800 my-6">
          Consulta de Asistencias
        </p>

        {alumnos.asistencias.data.map((asistencia, id) => (
          <div
            key={id}
            className="flex items-start py-3 border-b hover:bg-gray-100 cursor-pointer px-2"
          >
            {asistencia.attributes.estado == true ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
            <div className="w-full ml-2">
              <div className="flex items-center justify-between ">
                <div className="flex space-x-1">
                  {asistencia.attributes.tipo == 'Entrada' ? (
                    <p className="text-sm font-semibold text-slate-700">
                      Asistencia
                    </p>
                  ) : (
                    <p className="text-sm font-semibold text-slate-700">
                      Salida
                    </p>
                  )}
                  {asistencia.attributes.estado == true ? (
                    <p className="text-sm font-semibold text-slate-700">
                      Confirmada
                    </p>
                  ) : (
                    <p className="text-sm font-semibold text-slate-700">
                      Denegada
                    </p>
                  )}
                </div>

                <span className="text-xs text-slate-500">
                  {asistencia.attributes.createdAt}
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-2 inline-block">
                {`El alumno ${alumnos.nombres}`}&nbsp;
              </p>
              {asistencia.attributes.estado == true ? (
                <p className="text-gray-500 text-sm inline-block">
                  entró correctamente a la institución.
                </p>
              ) : (
                <p className="text-gray-500 text-sm inline-block">
                  no se presentó. Comuniquese inmediatamente con la institución.
                </p>
              )}
            </div>
          </div>
        ))}
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
  const alumnos = await dataApi(
    `${baseUrl}/alumnos?filters[matricula ]=${matricula}&populate=*`
  );

  return {
    props: {
      alumnos: alumnos.data[0].attributes,
    },
    revalidate: 10,
  };
};

export default Alumnos;
