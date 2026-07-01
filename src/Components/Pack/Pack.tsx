import paquetes from '../../Data/Paquetes';
import useEmblaCarousel from 'embla-carousel-react';
import WhastAppButton from '../WhastAppButton/WhastAppButton';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from 'phosphor-react';
import PackHeader from './PackHeader';

const Pack = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width:768px)': { slidesToScroll: 2 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }
  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <div className="grid grid-cols-1">
      <div className="flex items-start">
        <PackHeader />
      </div>

      <div className="container relative mx-auto flex flex-col md:items-end md:justify-end lg:pr-32">
        <div className="my-4 flex justify-end gap-2 px-4">
          <ArrowLeft
            size={26}
            onClick={scrollPrev}
            className="flex-shrink-0 rounded-full bg-white p-1 transition-all duration-150 hover:cursor-pointer hover:bg-red-600 hover:text-white"
          />
          <ArrowRight
            size={26}
            onClick={scrollNext}
            className="flex-shrink-0 rounded-full bg-white p-1 transition-all duration-150 hover:cursor-pointer hover:bg-red-600 hover:text-white"
          />
        </div>

        <div
          ref={emblaRef}
          className="my-4 max-w-[600px] overflow-hidden md:max-w-[700px]"
        >
          <div className="flex px-4">
            {paquetes.map((element, i) => (
              <div
                key={i}
                className={`s mx-3 h-[350px] min-w-0 flex-[0_0_100%] shadow-md md:flex-[0_0_calc(100%/2)] ${i % 2 === 0 ? 'card-red text-white' : 'bg-gray-500 text-white'} m-2 max-w-[250px] rounded-xl hover:cursor-grab`}
              >
                <article className="flex h-full select-none flex-col justify-between p-3">
                  <div>
                    <h3 className="mb-4 text-center font-exo text-2xl font-semibold">
                      {element.plan}
                    </h3>
                    <div className="flex items-end gap-2 font-exo">
                      <p className="text-xl font-semibold">{element.precio}</p>
                      <p className="text-sm">{element.cuota}</p>
                    </div>

                    <p className="my-3 w-full border-b-[1px] px-2 pb-1 text-sm font-semibold">
                      {element.subtitulo}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {Object.entries(element)
                      .filter(([key, value]) => key.startsWith('item') && value)
                      .map(([key, value]) => (
                        <li key={key} className="flex gap-2 text-sm">
                          <Check
                            size={20}
                            className="flex-shrink-0 rounded-full bg-black/60 p-1 text-[#ff2323]"
                          />
                          {value}
                        </li>
                      ))}
                  </ul>

                  <div className="mx-auto flex h-full w-full max-w-[60%] items-end justify-center">
                    <WhastAppButton
                      url={element.mensaje}
                      className="flex items-center justify-center bg-black/70 py-1 font-exo text-sm font-normal"
                    >
                      <p className="text-nowrap text-sm">comprar ahora</p>
                      <ArrowUpRight size={16} />
                    </WhastAppButton>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pack;
