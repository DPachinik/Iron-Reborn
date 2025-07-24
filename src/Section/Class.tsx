import { TrendUp } from 'phosphor-react';
import React from 'react';
import BoxClases from '../Components/Clases/BoxClases';
import VideoGym from '../Components/Video/VideoGym';
import PersonalCards from '../Components/CardEntrenadores/PersonalCards';
import Horarios from '../Components/Horarios/Horarios';
import Subtitulo from '../Components/Subtitulos/Subtitulo';
import Pack from '../Components/Pack/Pack';
import Texto from '../Components/Pack/Texto';
import Testimonios from '../Components/Testimonios/Testimonios';

const Class = () => {
  return (
    <section className="h-full bg-[#1C1C1C]">
      <div className="px-8 pt-8">
        <article className="flex flex-col">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col gap-4">
              <Subtitulo text="NUESTRAS CLASES" />
              <p className="font-exo text-[5vh] font-bold leading-10 text-white">
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

              <div className="rounded-xs hover: z-10 flex w-[150px] items-center justify-center gap-2 rounded-xl bg-[#ff2323] py-1 font-bold text-white transition hover:cursor-pointer hover:bg-green-600">
                <TrendUp size={24} />
                <p className="text-md">Inicia hoy</p>
              </div>
            </div>
          </div>

          <BoxClases />
          <VideoGym />
          <PersonalCards />
          <Horarios />
          <Texto />
          <Pack />
          <Testimonios />
        </article>
      </div>
    </section>
  );
};

export default Class;
