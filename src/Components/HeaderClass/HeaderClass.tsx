import React from 'react';
import Subtitulo from '../../Components/Subtitulos/Subtitulo';
import { TrendUp } from 'phosphor-react';
import DiagonalCarousel from '../DiagonalCarousel/DiagonalCarousel';
import TextoEncabezado from '../TextoEncabezado/TextoEncabezado';
import WhastAppButton from '../WhastAppButton/WhastAppButton';

const HeaderClass = () => {
  return (
    <div className="grid grid-cols-1 items-start gap-4 overflow-x-hidden overflow-y-hidden md:gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        className="mt-12 flex flex-col gap-4 md:mt-0"
        data-aos="fade-up-right"
      >
        <Subtitulo text="NUESTRAS CLASES" />
        <TextoEncabezado text="Encuentra el Entrenamiento Perfecto para tus Objetivos" />

        <p className="text-gray-400">
          Sumérgete en una experiencia dinámica de fitness con clases semanales
          que combinan ejercicios grupales, entrenamiento aeróbico y sesiones de
          musculación para transformar tu cuerpo y energía.
        </p>

        <WhastAppButton
          url="https://wa.me/+5950982101391?text=%20Hola,%20vengo%20desde%20la%20web%20,%20quiero%20saber%20más%20sobre%20las%20clases%20y%20paquetes%20disponibles%20me%20interesa%20frecuentar%20el%20gimnasio..."
          className="bg-[#ff2323] hover:bg-green-600 lg:ml-2 lg:mt-8"
        >
          <TrendUp size={22} />
          <p className="text-sm">Empezá tu cambio</p>
        </WhastAppButton>
      </div>

      <div
        className="flex h-full w-full flex-col items-center justify-center bg-arco bg-contain bg-center bg-no-repeat pt-8 md:pl-4 lg:items-end"
        data-aos="fade-up-left"
      >
        <DiagonalCarousel />
      </div>
    </div>
  );
};

export default HeaderClass;
