import React from 'react';
import { Check, PhoneOutgoing } from 'phosphor-react';
import { funciones } from '../../Data/funciones';
import Subtitulo from '../../Components/Subtitulos/Subtitulo';
import TextoEncabezado from '../TextoEncabezado/TextoEncabezado';

const Header = () => {
  return (
    <div className="flex h-full flex-col px-4 py-4 md:px-0 md:py-8">
      <article className="container mx-auto grid h-full grid-cols-1 gap-2 md:grid-cols-2 md:gap-0">
        <div
          className="flex flex-col space-y-2 px-4 text-[14px] text-white md:justify-around"
          data-aos="fade-up-right"
          data-aos-offset="400"
        >
          <Subtitulo text="¿QUIENES SOMOS?" />

          <TextoEncabezado text="Tu Destino Definitivo de Fitness y Bienestar" />

          <p className="text-sm text-gray-400 md:text-base xl:text-base">
            Somos un gimnasio comprometido con el entrenamiento serio y
            resultados reales. Contamos con equipamiento de alta calidad,
            entrenadores profesionales y un ambiente enfocado en el progreso
            personal.
          </p>

          <div className="space-y-4 py-4">
            <p className="text-md font-semibold text-[#ff2323] md:text-xl">
              Nos especializamos en:
            </p>

            <div className="grid grid-cols-1 bg-[#3A3A3A] p-4 text-sm md:gap-2 lg:grid-cols-2 lg:text-base">
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
              <strong className="font-exo text-sm text-[#ff2323]">
                +595 0982101391
              </strong>
            </div>
          </div>
        </div>

        <div className="relative hidden items-center justify-center overflow-hidden md:flex">
          <div className="animate-pin h-[300px] w-[300px] rounded-full border border-[#ff2323] bg-radial from-[#1C1C1C] via-[#1C1C1C] shadow-xl shadow-red-700 lg:h-[400px] lg:w-[400px]"></div>
          <div className="md: absolute flex justify-center bg-logo bg-contain bg-right bg-no-repeat shadow-xl clip-diagonal-menor lg:h-[400px] lg:w-[400px]">
            <img
              src="/body.png"
              alt="Atleta"
              className="top-50% left-50% h-[300px] w-full shadow-white drop-shadow-xl lg:h-[400px]"
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Header;
