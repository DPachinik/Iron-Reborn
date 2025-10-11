import { MapPin, WhatsappLogo } from 'phosphor-react';
import fondoMosaico from '../../public/mosaico.png';
import torso from '/torso.png';
import WhastAppButton from '../Components/WhastAppButton/WhastAppButton';
import LetrasRotadas from '../Components/LetrasRotadas/LetrasRotadas';
import { Element } from 'react-scroll';

const Hero = () => {
  return (
    <Element name="inicio" className="h-[100dvh] pt-[70px]">
      <div className="h-full w-full">
        <article className="grid h-full w-full grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
          <div className="relative h-full w-full bg-black/90">
            <img
              src={fondoMosaico}
              alt="fondo de mosaicos"
              className="absolute inset-0 z-0 h-full w-full object-cover opacity-15"
            />

            <LetrasRotadas
              letras={['I', 'R', 'O', 'N']}
              className="text-white text-shadow-glow"
            />

            <div className="absolute inset-0 flex h-full w-full flex-col justify-evenly pl-[80px] pr-4 text-white md:justify-between md:pb-4 md:pl-[120px] md:pt-16">
              <div className="flex items-center gap-4 text-sm md:text-base lg:text-lg">
                <p className="bg-[#ff2323]/20 px-2 py-1 font-exo font-bold text-[#ff2323]">
                  ENTRENA DURO
                </p>
                <p className="font-exo font-bold text-gray-400">SÉ FUERTE!</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="lg:5xl md:block-inline flex gap-2 font-exo text-2xl font-bold text-gray-200 md:gap-4 md:text-4xl">
                  <p>SALUD Y </p>
                  <p> FITNESS</p>
                </div>

                <p className="text-gray-400 md:text-lg">
                  Con nosotros, cada entrenamiento te acerca a tus objetivos.
                  Supera tus límites, desarrolla fuerza y conviértete en la
                  mejor versión de ti mismo!
                </p>
              </div>

              <WhastAppButton
                url="https://www.whatsapp.com/?lang=es"
                className="bg-[#ff2323] hover:bg-green-600"
              >
                <WhatsappLogo size={22} />
                <p className="text-sm">Empezá tu cambio</p>
              </WhastAppButton>
            </div>
          </div>

          <div className="relative flex h-full w-full items-end justify-center bg-black/90">
            <img
              src={torso}
              alt="pareja entrenando"
              className="absolute inset-0 h-full w-full object-contain object-right"
            />

            <LetrasRotadas
              letras={['R', 'E', 'B', 'O', 'R', 'N']}
              className="text-[#ff2323] text-shadow-glowRed"
            />

            <div className="link-transition z-10 mx-auto mb-4 flex items-center gap-2 rounded-md px-6 py-2 font-medium text-[#ff2323] hover:cursor-pointer hover:text-white">
              <MapPin size={22} />
              <span className="border-b border-[#ff2323]">
                <a
                  href="https://www.google.com/maps/place/IRON+REBORN+Salud+%26+Fitness/@-25.2879704,-57.6534037,17z/data=!4m6!3m5!1s0x945d081a3616e045:0x830600e71ce7c790!8m2!3d-25.2875354!4d-57.653629!16s%2Fg%2F11c55jqsrn?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Encuentranos aquí
                </a>
              </span>
            </div>
          </div>
        </article>
      </div>
    </Element>
  );
};

export default Hero;
