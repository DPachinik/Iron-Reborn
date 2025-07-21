import React, { useState } from 'react';
import { Servicios } from '../../Data/Servicios';
import WhastAppButton from '../WhastAppButton/WhastAppButton';
import { ArrowBendLeftUp } from 'phosphor-react';

const ServiceBox = () => {
  const [openText, setOpenText] = useState(
    new Array(Servicios.length).fill(false)
  );

  const handleClick = (index: number) => {
    const newFullText = [...openText];
    newFullText[index] = true;
    setOpenText(newFullText);
  };
  const handleReturnClick = (index: number) => {
    const newFullText = [...openText];
    newFullText[index] = false;
    setOpenText(newFullText);
  };

  return (
    <>
      <div className="flex h-full w-full flex-col items-center gap-4 text-white">
        {Servicios.map((items, index) => {
          const Icon = items.icon;
          const Icon2 = items.icon2;
          return (
            <div
              key={index}
              className="px-auto relative mx-4 flex min-h-[170px] w-full max-w-[700px] flex-col clip-tl-br-45 md:h-[150px]"
            >
              {!openText[index] ? (
                <>
                  <img
                    src={items.image}
                    alt="imagen de fondo"
                    className={`absolute inset-0 z-0 h-full w-full object-cover ${index === 0 ? 'object-bottom' : 'object-center'}`}
                  />

                  <article className="z-10 flex min-h-[170px] w-full flex-col justify-end bg-black/40 px-6 pb-6 md:h-full">
                    <h4 className="select-none font-exo text-xl font-semibold">
                      {items.title}{' '}
                    </h4>

                    <div className="flex justify-between">
                      <p className="select-none text-sm">{items.text}</p>

                      <button onClick={() => handleClick(index)}>
                        <Icon
                          size={32}
                          className="flex rounded-full hover:bg-white hover:text-gray-600"
                        />
                      </button>
                    </div>
                  </article>
                </>
              ) : (
                <>
                  <article className="flex flex-col justify-between bg-gradient-to-b from-red-800 via-red-600 to-red-800 px-2">
                    <h4 className="py-2 text-center font-bold">
                      {items.title}
                    </h4>

                    <div className="flex justify-between gap-2">
                      <img
                        src={items.image2}
                        alt="profesional del área"
                        className="h-[80px] w-[80px] rounded-full"
                      />

                      <p className="text-xs md:text-sm">{items.fullText}</p>
                    </div>

                    <div className="flex items-center justify-around py-4 text-sm">
                      <WhastAppButton
                        url="https://www.whatsapp.com/?lang=es"
                        className="bg-[#1C1C1C] hover:bg-green-600"
                      >
                        <ArrowBendLeftUp size={22} />
                        Agendar Consulta
                      </WhastAppButton>

                      <button onClick={() => handleReturnClick(index)}>
                        <Icon2
                          size={32}
                          className="flex rounded-full hover:bg-gray-500"
                        />
                      </button>
                    </div>
                  </article>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ServiceBox;
