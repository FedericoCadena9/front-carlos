import Image from "next/image";

import { baseUrl, dataApi } from "../../utils/dataApi";

const Alumnos = ({ alumnos }) => {
    console.log(alumnos);
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
              Elena Ortiz Sánchez
            </h2>
            <p className="font-medium text-gray-500 text-sm"> 7731294623</p>
            <p className="font-medium text-gray-500 text-sm">
              {" "}
              EleOrtiz01@gmail.com
            </p>
            <p className="font-medium text-gray-500 text-sm">
              {" "}
              Nopala de Vilagrán, colonia centro N°13
            </p>
          </div>
        </div>
      </div>

      <div className="px-4">
        <h3 className="font-semibold text-gray-800">Consulta de Asistencias</h3>

        <div className="flex items-center justify-center gap-1 my-4 h-10 w-full rounded-md bg-white p-0-5 cursor-pointer outline outline-offset-2 outline-[1.5px] outline-slate-300">
          <button className="font-medium text-sm w-1/2 h-full bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Entradas
          </button>
          <button className="font-medium text-sm w-1/2 h-full bg-white text-slate-600 rounded-md hover:bg-slate-100">
            Salidas
          </button>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-semibold text-gray-800">Notificaciones</p>
          <p className=" text-blue-500 text-sm">Ver todas</p>
        </div>

        {/* <!-- Entradas --> */}
        <div className="my-4">
          <div className="flex items-start py-3 border-b hover:bg-gray-100 cursor-pointer px-2">
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
            <div className="w-full ml-2">
              <div className="flex items-center justify-between ">
                <p className="text-sm font-semibold text-slate-700">
                  Asistencia Confirmada
                </p>
                <span className="text-xs text-slate-500">Hace 4 horas</span>
              </div>
              <p className="text-gray-500 text-sm mt-0.5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="flex items-start py-3 border-b hover:bg-gray-100 cursor-pointer px-2">
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
            <div className="w-full ml-2">
              <div className="flex items-center justify-between ">
                <p className="text-sm font-semibold text-slate-700">
                  Asistencia Confirmada
                </p>
                <span className="text-xs text-slate-500">06/04, 07:00</span>
              </div>
              <p className="text-gray-500 text-sm mt-0.5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="flex items-start py-3 border-b hover:bg-gray-100 cursor-pointer px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 text-amber-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="w-full ml-2">
              <div className="flex items-center justify-between ">
                <p className="text-sm font-semibold text-slate-700">
                  Asistencia con retraso
                </p>
                <span className="text-xs text-slate-500">05/04, 07:05</span>
              </div>
              <p className="text-gray-500 text-sm mt-0.5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="flex items-start py-3 border-b hover:bg-gray-100 cursor-pointer px-2">
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
            <div className="w-full ml-2">
              <div className="flex items-center justify-between ">
                <p className="text-sm font-semibold text-slate-700">
                  No se presentó
                </p>
                <span className="text-xs text-slate-500">04/04, 07:11</span>
              </div>
              <p className="text-gray-500 text-sm mt-0.5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
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
  const alumnos = await dataApi(`${baseUrl}/alumnos?populate=*`);

  return {
    props: {
      alumnos: alumnos.data[0].attributes,
    },
  };
};

export default Alumnos;
