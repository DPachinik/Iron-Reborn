import React from 'react';
import Reseñas from '../../Data/Reseñas';

const Testimonios = () => {
  return (
    <div className="my-8">
      <div className="mb-8 flex flex-col gap-4">
        <p className="font-exo text-[5vh] font-bold leading-10 text-white">
          Opiniones de nuestros alumnos
        </p>
        <p className="pr-4 text-gray-400">
          Conocé cómo nuestros alumnos están logrando sus objetivos, paso a
          paso, con nuestro acompañamiento
        </p>
      </div>
      <article className="scroll-style container mx-auto max-h-[400px] select-none space-y-6 overflow-y-auto rounded-xl px-4">
        {Reseñas.map((element, index) => {
          const Icono = element.icon;
          return (
            <div
              key={index}
              className="rounded-xl bg-[#3A3A3A] p-4 shadow-md transition-transform duration-200 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <img
                  src={element.img}
                  alt={element.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="text-white">
                  <h3 className="text-sm font-semibold md:text-base">
                    {element.name}
                  </h3>
                  <div className="mb-1 flex text-sm text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{Icono}</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-300 md:text-sm">
                    {element.testimonio}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default Testimonios;
