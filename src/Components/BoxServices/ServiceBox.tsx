import React, { useState } from 'react';
import { Servicios } from '../../Data/Servicios';
import WhastAppButton from '../WhastAppButton/WhastAppButton';
import { ArrowBendLeftUp } from 'phosphor-react';
import Button from '../Button/Button';

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
    <div className="justify- mx-auto grid w-full max-w-xs grid-cols-1 items-center gap-4 rounded-xl text-white md:max-w-full md:grid-cols-3">
      {Servicios.map((items, index) => {
        const Icon = items.icon;
        return (
          <div
            key={index}
            className="sticky top-[100px] mx-auto flex h-[325px] rounded-xl border-l-[2px] border-t-[1px] border-red-600 bg-[#3A3A3A] md:static md:max-h-fit"
          >
            {!openText[index] ? (
              <article className="relative z-10 flex w-full max-w-sm flex-col justify-center rounded-lg bg-[#3A3A3A] px-6 pb-6 transition-all duration-700 ease-in-out">
                <div className="mb-4 flex w-full items-center justify-center p-4">
                  <img
                    src={items.image}
                    alt={items.title}
                    className="absolute h-[70px] w-[70px] flex-shrink-0 rounded-full bg-radial from-white via-white p-2"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <h4 className="mt-4 select-none font-exo text-xl font-semibold">
                    {items.title}{' '}
                  </h4>

                  <p className="select-none text-sm text-gray-400">
                    {items.text}
                  </p>

                  <Button onClick={() => handleClick(index)}>
                    <p>ver más</p>
                    <Icon
                      size={22}
                      color="white"
                      className="flex rounded-full hover:text-gray-600"
                    />
                  </Button>
                  <button></button>
                </div>
              </article>
            ) : (
              <article className="flex max-w-sm flex-col justify-around rounded-lg bg-gradient-to-b from-red-800 via-red-600 to-red-800 px-4">
                <h4 className="py-2 text-center font-bold">{items.title}</h4>

                <div className="flex justify-between gap-3 md:block">
                  <img
                    src={items.image2}
                    alt="profesional del área"
                    className="md:shape-circle h-[70px] w-[70px] rounded-full bg-yellow-50 md:float-left md:mb-1 md:mr-3"
                  />

                  <p className="text-xs md:text-[13px]">{items.fullText}</p>
                </div>

                <div className="items-top mb-3 mt-2 flex justify-around text-sm">
                  <WhastAppButton
                    url="https://www.whatsapp.com/?lang=es"
                    className="bg-[#1C1C1C] hover:bg-green-600"
                  >
                    <ArrowBendLeftUp size={20} />
                    Agendar Consulta
                  </WhastAppButton>

                  <button onClick={() => handleReturnClick(index)}>
                    <Icon
                      size={32}
                      className="flex rounded-full hover:bg-[#121212]"
                    />
                  </button>
                </div>
              </article>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ServiceBox;
