import React from 'react';
import Subtitulo from '../../Components/Subtitulos/Subtitulo';
import { TrendUp } from 'phosphor-react';
import DiagonalCarousel from '../DiagonalCarousel/DiagonalCarousel';

const HeaderClass = () => {
  return (
    <div className="grid grid-cols-1 items-start gap-4 md:gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="mt-12 flex flex-col gap-4 md:mt-0">
        <Subtitulo text="NUESTRAS CLASES" />
        <p className="font-exo text-[5vh] font-bold leading-10 text-white">
          Encuentra el Entrenamiento Perfecto para tus Objetivos
        </p>
        <p className="text-gray-400">
          Sumérgete en una experiencia dinámica de fitness con clases semanales
          que combinan ejercicios grupales, entrenamiento aeróbico y sesiones de
          musculación para transformar tu cuerpo y energía.
        </p>

        <div className="rounded-xs hover: z-10 flex w-[150px] items-center justify-center gap-2 rounded-xl bg-[#ff2323] py-1 font-bold text-white transition hover:cursor-pointer hover:bg-green-600">
          <TrendUp size={24} />
          <p className="text-md">Inicia hoy</p>
        </div>
      </div>

      <div className="flex h-full w-full flex-col items-center justify-center bg-arco bg-contain bg-center bg-no-repeat pt-8 md:pl-4 lg:items-end">
        <DiagonalCarousel />
      </div>
    </div>
  );
};

export default HeaderClass;
