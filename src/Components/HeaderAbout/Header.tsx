import React from 'react';
import { Check, PhoneOutgoing } from 'phosphor-react';
import { funciones } from '../../Data/funciones';
import Subtitulo from '../../Components/Subtitulos/Subtitulo';
import TextoEncabezado from '../TextoEncabezado/TextoEncabezado';

const Header = () => {
  return (
    <div className="flex h-full flex-col px-4 py-4 md:px-0 md:py-8">
      <article className="container mx-auto grid h-full grid-cols-1 gap-2 md:grid-cols-2 md:gap-0">
        <div className="flex flex-col space-y-2 px-4 text-[14px] text-white md:justify-around">
          <Subtitulo text="¿QUIENES SOMOS?" />

          <TextoEncabezado text="Tu Destino Definitivo de Fitness y Bienestar" />

          <p className="text-sm text-gray-400 md:text-base">
            Somos un gimnasio comprometido con el entrenamiento serio y
            resultados reales. Contamos con equipamiento de alta calidad,
            entrenadores profesionales y un ambiente enfocado en el progreso
            personal.
          </p>

          <div className="space-y-4 py-4">
            <p className="text-md font-semibold text-[#ff2323] md:text-lg">
              Nos especializamos en:
            </p>

            <div className="grid grid-cols-1 bg-[#3A3A3A] p-4 text-sm md:grid-cols-2 md:gap-2 lg:text-base">
              <ul className="space-y-1">
                {funciones.map((items, index) =>
                  index <= 3 ? (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-white"
                    >
                      <Check size={16} className="text-center text-[#ff2323]" />
                      {items}
                    </li>
                  ) : null
                )}
              </ul>
              <ul className="space-y-1">
                {funciones.map((items, index) =>
                  index > 3 ? (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-white"
                    >
                      <Check size={16} className="text-center text-[#ff2323]" />
                      {items}
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-4 pb-4">
            <PhoneOutgoing
              size={48}
              className="flex-shrink-0 bg-[#ff2323] p-2"
            />
            <div>
              <p className="text-xs">SOPORTE AL CLIENTE</p>
              <p className="font-exo text-sm text-[#ff2323]">+595 0982101391</p>
            </div>
          </div>
        </div>

        <div className="hidden items-center justify-end md:flex lg:pr-20">
          <div className="h-[350px] w-[350px] rounded-full bg-radial from-black via-[#1C1C1C] shadow-xl shadow-red-800 lg:h-[400px] lg:w-[400px]">
            <div className="relative flex h-[350px] w-[350px] items-center justify-center bg-logo bg-contain bg-right bg-no-repeat shadow-xl clip-diagonal-menor lg:h-[400px] lg:w-[400px]">
              <img
                src="/body.png"
                alt="Atleta"
                className="top-50% left-50% absolute h-[400px] w-[300px] shadow-white drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Header;
