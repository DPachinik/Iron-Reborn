import '../index.css';
import { MapPin } from 'phosphor-react';
import fondoMosaico from '../../public/mosaico.png';
import torso from '/torso.png';
import WhastAppButton from '../Components/WhastAppButton/WhastAppButton';
import LetrasRotadas from '../Components/LetrasRotadas/LetrasRotadas';
import { Element } from 'react-scroll';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  return (
    <Element name="inicio" className="h-[100dvh] pt-[70px]">
      <div className="h-full w-full">
        <section className="grid h-full w-full grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1">
          <div className="relative h-full w-full bg-black/90">
            <img
              src={fondoMosaico}
              alt="fondo de mosaicos"
              className="absolute inset-0 z-0 h-full w-full object-cover opacity-15"
            />

            <LetrasRotadas
              letras={['I', 'R', 'O', 'N']}
              className="animate-pulse text-white text-shadow-glow"
            />

            <div className="absolute inset-0 flex h-full w-full flex-col justify-evenly pl-[80px] pr-4 text-white md:justify-between md:pb-4 md:pl-[120px] md:pt-16">
              <div className="flex flex-wrap items-center gap-4 text-sm lg:text-lg">
                <p className="bg-red-500/20 px-2 py-1 font-exo font-bold text-[#ff2323]">
                  ENTRENA DURO
                </p>
                <p className="font-exo font-bold text-gray-400">SÉ FUERTE!</p>
              </div>

              <div className="flex max-w-lg flex-col gap-2">
                <div className="lg:5xl flex gap-2 font-exo text-2xl font-bold text-gray-200 md:flex-col md:gap-4 md:text-3xl">
                  <div className="flex gap-2">
                    <p>SALUD </p>
                    <p>Y FITNESS</p>
                  </div>
                </div>

                <p className="text-sm text-gray-400 lg:text-lg">
                  Con nosotros, cada entrenamiento te acerca a tus objetivos.
                  Supera tus límites, desarrolla fuerza y conviértete en la
                  mejor versión de ti mismo!
                </p>
              </div>

              <WhastAppButton
                url="https://wa.me/+5950982101391?text=%20Hola,%20vengo%20desde%20la%20web%20,%20quiero%20saber%20más%20sobre%20las%20clases%20y%20paquetes%20disponibles%20me%20interesa%20frecuentar%20el%20gimnasio..."
                className="bg-[#ff2323] hover:bg-green-600 lg:mb-8"
              >
                <FaWhatsapp className="text-md lg:text-lg" />
                <p className="text-nowrap text-sm">Empezá tu cambio</p>
              </WhastAppButton>
            </div>
          </div>

          <div className="relative flex h-full w-full items-end justify-center overflow-x-hidden bg-black/90">
            <img
              src={torso}
              alt="hombre con mancuerna"
              className="absolute h-full w-full object-contain object-right"
              data-aos="fade-left"
            />

            <LetrasRotadas
              letras={['R', 'E', 'B', 'O', 'R', 'N']}
              className="animate-pulse text-[#ff2323] text-shadow-glowRed"
            />

            <div className="z-10 mx-auto mb-4 flex items-center gap-2 rounded-md px-6 py-2 text-sm font-medium text-white hover:cursor-pointer hover:text-white md:mb-10 lg:text-xl">
              <MapPin size={34} color="#ff2323" className="animate-bounce" />
              <span className="border-[#ff2323] transition-all duration-200 hover:border-b">
                <a
                  href="https://www.google.com/maps/place/IRON+REBORN+Salud+%26+Fitness/@-25.2879704,-57.6534037,17z/data=!4m6!3m5!1s0x945d081a3616e045:0x830600e71ce7c790!8m2!3d-25.2875354!4d-57.653629!16s%2Fg%2F11c55jqsrn?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Encuentranos aquí
                </a>
              </span>
            </div>
          </div>
        </section>
      </div>
    </Element>
  );
};

export default Hero;
