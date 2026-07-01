import React from 'react';
import { Coach } from '../../Data/Coach';
import TituloCentral from '../TituloCentral/TituloCentral';

const PersonalCards = () => {
  return (
    <div className="fle flex-col gap-4 overflow-x-hidden">
      <TituloCentral text="Equipo de Entrenadores" />
      <section className="flex flex-col gap-10 md:mx-8 lg:mt-20">
        {Coach.map((item, index) => (
          <article
            key={index}
            className={`mx-auto flex h-[200px] w-full flex-col justify-end ${index % 2 == 0 ? 'items-end' : 'items-start'} `}
          >
            <div
              className="relative h-[140px] w-full md:h-[150px] md:w-[650px]"
              data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
              data-aos-offset="400"
              data-aos-anchor-placement="center-bottom"
            >
              <div
                className={`mb-10 flex h-full w-full justify-between rounded-md bg-gradient-to-b from-red-900 via-[#ff2323] to-red-900 text-end md:gap-4 ${index % 2 === 0 ? 'sm:clip-diagonal-izquierdo' : 'sm:clip-diagonal-derecho'} `}
              >
                <div
                  className={`flex h-full w-full justify-start ${index % 2 === 0 ? 'order-1' : 'order-2 p-4 text-start'}`}
                >
                  <ul className="flex h-full w-full flex-col justify-center gap-1 px-2 font-exo text-xs text-white md:text-base">
                    <li>{item.studies1}</li>
                    <li>{item.studies2}</li>
                    <li>{item.studies3}</li>
                    <li>{item.studies4}</li>
                    <li>{item.studies5}</li>
                  </ul>
                </div>

                <h3
                  className={`flex w-fit items-end justify-center font-exo text-base font-bold text-white md:text-base ${index % 2 === 0 ? 'order-2 pr-1' : 'order-1 pl-1'} whitespace-nowrap`}
                >
                  {item.name}
                </h3>
              </div>

              <div
                className={`absolute flex ${index % 2 === 0 ? 'bottom-6 right-0' : 'bottom-6 left-0'}`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="z-20 h-[200px] w-[120px] md:h-[220px] md:w-[140px]"
                />
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default PersonalCards;
