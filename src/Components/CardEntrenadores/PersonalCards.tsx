import React from 'react';
import { Coach } from '../../Data/Coach';
import TituloCentral from '../TituloCentral/TituloCentral';

const PersonalCards = () => {
  return (
    <div>
      <div>
        <TituloCentral text="Equipo de Entrenadores" />
        <article className="container mx-auto lg:mt-20">
          {Coach.map((item, index) => (
            <div
              key={index}
              className={`mx-auto my-8 flex w-full flex-col ${index % 2 === 0 ? 'items-end' : 'items-start'} `}
            >
              <div className="relative h-[120px] w-full md:w-[500px]">
                <div
                  className={`mb-10 flex h-full w-full justify-between rounded-md bg-gradient-to-b from-red-800 via-[#ff2323] to-red-800 text-end shadow-inner shadow-red-500 md:gap-3 ${index % 2 === 0 ? 'md:clip-diagonal-izquierdo' : 'md:clip-diagonal-derecho'} `}
                >
                  <div
                    className={`flex h-full w-full ${index % 2 === 0 ? 'order-1 pl-4 text-right' : 'order-2 pr-4 text-left'}`}
                  >
                    <ul className="flex h-full w-full flex-col justify-center px-2 font-exo text-[1.2vh] text-white md:text-[14px]">
                      <li>{item.studies1}</li>
                      <li>{item.studies2}</li>
                      <li>{item.studies3}</li>
                      <li>{item.studies4}</li>
                      <li>{item.studies5}</li>
                    </ul>
                  </div>

                  <div
                    className={`flex w-fit items-end justify-center font-exo text-[12px] font-bold text-white ${index % 2 === 0 ? 'order-2 pr-1' : 'order-1 pl-1'} whitespace-nowrap`}
                  >
                    {item.name}
                  </div>
                </div>

                <div
                  className={`absolute flex ${index % 2 == 0 ? 'bottom-6 right-0' : 'bottom-6 left-0'}`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="z-20 h-[130px] w-[80px] md:h-[200px] md:w-[120px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </article>
      </div>
    </div>
  );
};

export default PersonalCards;
