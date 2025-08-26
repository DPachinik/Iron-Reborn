import { MapPin, WhatsappLogo } from 'phosphor-react';
import fondoMosaico from '../../public/mosaico.png';
import parejaGym from '../../public/pareja-gym2.jpg';
import WhastAppButton from '../Components/WhastAppButton/WhastAppButton';
import LetrasRotadas from '../Components/LetrasRotadas/LetrasRotadas';

const Hero = () => {
  return (
    <section className="h-[calc(100dvh-70px)]">
      <div className="h-full w-full">
        <article className="grid h-full w-full grid-cols-1 md:grid-cols-2">
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

              <div className="flex flex-col gap-2 lg:gap-4">
                <div className="lg:5xl flex gap-2 font-exo text-2xl font-bold text-gray-200 md:block md:gap-0 md:text-4xl">
                  <p>SALUD Y </p>
                  <p>FITNESS</p>
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

          <div className="relative h-full w-full">
            <img
              src={parejaGym}
              alt="pareja entrenando"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <LetrasRotadas
              letras={['R', 'E', 'B', 'O', 'R', 'N']}
              className="text-[#ff2323] text-shadow-glowRed"
            />

            <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 p-2 font-medium text-[#ff2323] duration-200 ease-in-out hover:cursor-pointer hover:border-b-0 hover:bg-[#ff2323]/20">
              <MapPin size={22} />
              <p className="border-b border-[#ff2323]">Encuentranos aquí</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
