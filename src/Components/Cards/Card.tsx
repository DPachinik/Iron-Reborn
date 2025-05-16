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
    <section className="relative bg-[#3A3A3A] py-12">
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
        {descriptions.map((element, index) => {
          const Icon = element.icon;
          return (
            <div
              key={index}
              className={` ${index % 2 === 0 ? 'bg-[#1C1C1C]' : 'bg-gray-400'} h-[300px] w-full`}
            >
              <article className="flex h-full w-full flex-col justify-around text-center">
                <div
                  className={` ${index % 2 === 1 ? 'bg-black' : 'bg-red-700'} mx-auto mt-4 flex justify-center p-3`}
                >
                  <Icon
                    size={48}
                    className={` ${index % 2 === 0 ? 'text-black' : 'text-red-700'}`}
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
                  className={` ${index % 2 === 0 ? 'bg-red-700 text-black duration-200 hover:bg-white' : 'bg-[#1C1C1C] text-white duration-200 hover:bg-red-700'} mx-auto w-max px-4 py-1 font-exo font-bold`}
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
            <div className="z-10 flex min-h-[400px] flex-col justify-between bg-black p-4 text-center md:h-[500px] md:w-[400px]">
              <div className="flex justify-between md:justify-center">
                <h3 className="font-exo text-[6vh] font-bold text-red-700">
                  {descriptions[selectedIndex].title}
                </h3>

                <div className="md:hidden">
                  <ClosedButton handleCloseClick={handleCloseClick} />
                </div>
              </div>

              <p className="font-exo text-gray-400">
                {descriptions[selectedIndex].fullDescription}
              </p>

              <div className="flex justify-center gap-2 font-exo font-semibold">
                <p className="text-white">IRON </p>
                <p className="text-red-700">REBORN</p>
              </div>
            </div>

            <div className="relative h-full w-full justify-center">
              <div className="hidden md:flex">
                <ClosedButton handleCloseClick={handleCloseClick} />
              </div>

              <div className="relative">
                <img
                  src={descriptions[selectedIndex].image}
                  alt={descriptions[selectedIndex].alt}
                  className="absolute inset-0 hidden h-[550px] object-cover object-center md:flex"
                />
              </div>
            </div>
          </article>
        </div>
      )}
    </section>
  );
};

export default Card;
