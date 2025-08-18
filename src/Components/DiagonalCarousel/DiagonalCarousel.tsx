import useEmblaCarousel from 'embla-carousel-react';
import { clases } from '../../Data/Clases';
import { ArrowBendUpLeft } from 'phosphor-react';
import './carousel.css';
import ClassNames from 'embla-carousel-class-names';

const DiagonalCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    },
    [ClassNames()]
  );

  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative mt-12 overflow-x-hidden">
      <div
        ref={emblaRef}
        className="h-[400px] w-auto max-w-[350px] overflow-hidden md:h-[380px] md:w-[650px] lg:w-full"
      >
        <div className="flex h-full">
          {clases.map((element, index) => {
            const Icon = element.icon;
            return (
              <article
                key={index}
                className="embla__slide relative h-full min-w-0 flex-[0_0_100%] overflow-hidden px-4 py-12 md:py-8"
              >
                <div className="flex h-full">
                  <div className="slide-diagonal absolute -top-4 left-8 h-[180px] w-[180px] flex-shrink-0 clip-diagonal-menor md:h-[230px] md:w-[200px] lg:left-0 lg:top-0">
                    <img
                      src={element.image}
                      alt={element.title}
                      className="h-full w-full object-cover clip-diagonal-menor"
                    />
                  </div>

                  <div className="slide-diagonal flex h-full flex-1 items-end justify-end pb-12 lg:pb-0">
                    <div className="flex h-[200px] w-[210px] flex-col justify-center gap-2 bg-black p-4 px-4 pb-4 clip-diagonal-menor md:h-[270px]">
                      <div className="flex w-full justify-center text-[#ff2323]">
                        <Icon className="text-4xl" />
                      </div>
                      <h4 className="text-center font-exo text-sm font-semibold text-white md:text-base">
                        {element.title}
                      </h4>
                      <p className="text-center text-xs text-gray-400 md:text-sm">
                        {element.description}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Flechas (fuera del viewport para no romper element ancho) */}

      <div className="absolute bottom-4 left-2 rounded-full bg-[#ff2323] shadow-md shadow-black hover:scale-90">
        <ArrowBendUpLeft
          size={36}
          onClick={scrollNext}
          className="cursor-pointer p-1 text-white"
        />
      </div>
    </div>
  );
};

export default DiagonalCarousel;
