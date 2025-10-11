import React, { useEffect, useState } from 'react';
import { descriptions } from '../../Data/descriptions';
import ClosedButton from './ClosedButton';

const Card = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleclick = (index: number) => {
    setOpenModal(true);
    setSelectedIndex(index);
  };

  const handleCloseClick = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openModal]);

  return (
    <div className="container relative mx-auto mb-14 mt-6 flex w-full">
      <div className="flex w-full flex-col items-center justify-around gap-8 md:flex-row">
        {descriptions.map((element, index) => {
          const Icon = element.icon;
          return (
            <div
              key={index}
              className={` ${index % 2 === 0 ? 'bg-black' : 'bg-gray-400'} h-[300px] w-[300px] clip-diagonal-menor`}
            >
              <article className="sticky top-0 flex h-full w-full flex-col justify-around text-center">
                <div
                  className={` ${index % 2 === 1 ? 'bg-black' : 'bg-[#ff2323]'} mx-auto mt-4 flex justify-center p-3`}
                >
                  <Icon
                    size={48}
                    className={` ${index % 2 === 0 ? 'text-black' : 'text-[#ff2323]'}`}
                  />
                </div>

                <h3
                  className={` ${index % 2 === 0 ? 'text-white' : 'text-black'} font-exo text-lg font-bold`}
                >
                  {element.title}
                </h3>

                <p
                  className={` ${index % 2 === 0 ? 'text-gray-400' : 'text-black'} `}
                >
                  {element.shortDescription}
                </p>

                <button
                  className={` ${index % 2 === 0 ? 'bg-[#ff2323] text-black duration-200 hover:bg-white' : 'bg-black text-white duration-200 hover:bg-[#ff2323]'} mx-auto w-max px-4 py-1 font-exo font-bold`}
                  onClick={() => handleclick(index)}
                >
                  {element.button}
                </button>
              </article>
            </div>
          );
        })}
      </div>

      {openModal && selectedIndex !== null && (
        <div className="fixed inset-0 left-0 top-0 z-50 flex items-center justify-center bg-[#4A4A4A] bg-opacity-80">
          <article className="max-h container grid w-[90%] grid-cols-1 p-4 md:w-[70%] md:grid-cols-[400px_auto]">
            <div className="z-10 flex h-auto min-h-[200px] flex-col justify-between rounded-xl bg-black p-8 text-center md:w-[400px]">
              <div className="flex w-full justify-center">
                <h3 className="flex font-exo text-xl font-bold text-[#ff2323] md:text-2xl">
                  {descriptions[selectedIndex].title}
                </h3>

                <div className="md:hidden">
                  <ClosedButton handleCloseClick={handleCloseClick} />
                </div>
              </div>

              <div className="my-2 flex flex-col gap-4 text-start font-exo text-sm text-gray-400">
                <p className={`${selectedIndex == 2 && 'text-center text-lg'}`}>
                  {descriptions[selectedIndex].parrafo1}
                </p>
                <p>{descriptions[selectedIndex].parrafo2}</p>
                <p>{descriptions[selectedIndex].parrafo3}</p>
                <p>{descriptions[selectedIndex].parrafo4}</p>
              </div>

              <div className="flex justify-center gap-2 font-exo font-semibold">
                <p className="text-white">IRON </p>
                <p className="text-[#ff2323]">REBORN</p>
              </div>
            </div>

            <div className="relative h-full w-full justify-center">
              <div className="hidden md:flex">
                <ClosedButton handleCloseClick={handleCloseClick} />
              </div>

              <div className="flex h-full items-center justify-center">
                <img
                  src={descriptions[selectedIndex].image}
                  alt={descriptions[selectedIndex].alt}
                  className="hidden h-[90%] object-cover object-center md:flex"
                />
              </div>
            </div>
          </article>
        </div>
      )}
    </div>
  );
};

export default Card;
