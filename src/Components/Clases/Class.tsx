import { TrendUp } from 'phosphor-react';
import React from 'react';
import BoxClases from './BoxClases';

const Class = () => {
  return (
    <section className="h-full bg-[#1C1C1C]">
      <div className="px-8 pt-8">
        <article className="flex flex-col space-y-14">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="font-exo text-sm font-semibold text-red-600">
                NUESTRAS CLASES
              </h4>
              <p className="text-[5vh] font-bold leading-10 text-white">
                Encuentra el Entrenamiento Perfecto para tus Objetivos
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-gray-400">
                Sumérgete en una experiencia dinámica de fitness con clases
                semanales que combinan ejercicios grupales, entrenamiento
                aeróbico y sesiones de musculación para transformar tu cuerpo y
                energía.
              </p>

              <div className="rounded-xs hover: z-10 flex w-[150px] items-center justify-center gap-2 rounded-xl bg-red-700 py-1 font-bold text-white transition hover:cursor-pointer hover:bg-green-600">
                <TrendUp size={24} />
                <p className="text-md">Inicia hoy</p>
              </div>
            </div>
          </div>

          <BoxClases />
        </article>
      </div>
    </section>
  );
};

export default Class;
