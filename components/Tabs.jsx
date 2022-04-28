import React, { useState } from "react";

import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = ({ asistencia }) => {
  let asistencias = [
    {
      title: "Entradas",
      content: propiedad.descripcion,
    },
    {
      title: "Salidas",
      content: propiedad.caracteristicas,
    },
  ];

  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="relative flex w-full sm:gap-6 gap-8 overflow-x-auto lg:overflow-x-hidden snap-x px-6">
          {asistencias.map((category, id) => (
            <Tab
              key={id}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 leading-5 font-secondary text-black-gray-500",
                  selected
                    ? "text-killarney-500 font-semibold bg-white/50"
                    : " hover:underline"
                )
              }
            >
              {category.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {asistencias.map((item, id) => (
            <Tab.Panel key={id} className="p-3 my-6 text-gray-700">
              <ReactMarkdown>{item.content}</ReactMarkdown>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
