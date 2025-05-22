import React from 'react';
import atleta from '../../public/body.jpg';
import { Check, PhoneOutgoing } from 'phosphor-react';
import Card from './Cards/Card';
import { funciones } from '../Data/funciones';
import Services from './Box/Services';
import Counter from './Counter';

const About = () => {
  return (
    <section className="bg-[#1C1C1C] md:h-[100dvh]">
      <div className="flex h-full flex-col px-4 py-4 md:px-0 md:py-0">
        <article className="px-auto grid h-full grid-cols-1 gap-2 md:grid md:grid-cols-2 md:gap-0">
          <div className="flex flex-col space-y-4 text-white md:justify-around md:pl-4 md:pr-8">
            <p className="font-exo text-sm font-semibold text-red-600">
              ¿QUIENES SOMOS?
            </p>

            <h2 className="text-[5vh] font-bold leading-10">
              Tu Destino Definitivo de Fitness y Bienestar.
            </h2>

            <p className="text-gray-400">
              Somos un gimnasio comprometido con el entrenamiento serio y
              resultados reales. Contamos con equipamiento de alta calidad,
              entrenadores profesionales y un ambiente enfocado en el progreso
              personal.
            </p>

            <div className="space-y-4 py-4">
              <p className="text-md font-semibold text-red-600">
                Nos Enfocamos en:
              </p>

              <ul className="space-y-1 border-y-[1px] border-gray-600 py-2">
                {funciones.map((items, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-400"
                  >
                    <Check
                      size={16}
                      className="rounded-full bg-red-600 text-center text-black"
                    />
                    {items}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 pb-4">
              <PhoneOutgoing
                size={48}
                className="flex-shrink-0 bg-red-600 p-2"
              />
              <div>
                <p className="text-xs">SOPORTE AL CLIENTE</p>
                <p className="font-exo text-sm text-red-500">+595 0982101391</p>
              </div>
            </div>
          </div>

          <div className="relative flex h-full w-full">
            <img
              src={atleta}
              alt="Atleta"
              className="inset-0 flex rounded-md object-cover object-left md:rounded-none"
            />
          </div>
        </article>
      </div>

      <Card />
      <Services />
      <Counter />
    </section>
  );
};

export default About;
