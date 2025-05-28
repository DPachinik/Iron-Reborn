import { MapPin, WhatsappLogo } from 'phosphor-react';
import fondoMosaico from '../../public/mosaico.png';
import parejaGym from '../../public/pareja-gym2.jpg';

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

            <div className="absolute left-4 z-10 flex h-full flex-col justify-between">
              <div className="flex flex-1 flex-col items-center justify-around font-exo text-[5vh] font-bold text-white opacity-80 text-shadow-glow">
                <p className="rotate-90">I</p>

                <p className="rotate-90">R</p>

                <p className="rotate-90">O</p>

                <p className="rotate-90">N</p>
              </div>
            </div>

            <div className="absolute inset-0 flex h-full w-full flex-col justify-around pl-[80px] pr-4 text-white md:justify-between md:pb-4 md:pt-16">
              <div className="flex items-center gap-4 text-sm">
                <p className="bg-red-500/20 p-2 font-exo font-bold text-red-700">
                  ENTRENA DURO
                </p>
                <p className="font-exo font-bold text-gray-400">SÉ FUERTE!</p>
              </div>

              <div className="flex flex-col gap-2 lg:gap-4">
                <div className="font-exo text-[5vh] font-bold text-gray-200 lg:text-6xl">
                  <p>SALUD Y </p>
                  <p>FITNESS</p>
                </div>

                <p className="text-gray-400">
                  Con nosotros, cada entrenamiento te acerca a tus objetivos.
                  Supera tus límites, desarrolla fuerza y conviértete en la
                  mejor versión de ti mismo!
                </p>
              </div>

              <div className="rounded-xs z-10 flex w-[200px] items-center justify-center gap-2 bg-red-600 py-1 font-bold text-white transition hover:bg-red-700">
                <WhatsappLogo size={24} />
                <p className="text-sm">Hablá con nosotros</p>
              </div>
            </div>
          </div>

          <div className="relative h-full w-full">
            <img
              src={parejaGym}
              alt="pareja entrenando"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute left-4 z-10 flex h-full flex-col justify-between">
              <div className="flex flex-1 flex-col items-center justify-between font-exo text-[5vh] font-bold text-red-600 opacity-80 text-shadow-glowRed md:justify-around">
                <p className="rotate-90">R</p>

                <p className="rotate-90">E</p>

                <p className="rotate-90">B</p>

                <p className="rotate-90">O</p>

                <p className="rotate-90">R</p>

                <p className="rotate-90">N</p>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 border-b border-red-700 p-2 font-bold text-red-700 duration-200 ease-in-out hover:cursor-pointer hover:border-b-0 hover:bg-red-500/20">
              <MapPin size={24} />
              <p>ENCUENTRANOS AQUÍ</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
