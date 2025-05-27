import React from 'react';
import { clases } from '../../Data/Clases';
import ClaseCard from './ClaseCard';

const BoxClases = () => {
  return (
    <div className="flex flex-col">
      <div className="grid h-full w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-3">
        {clases.slice(0, 3).map((item, index) => (
          <ClaseCard items={item} key={index} />
        ))}
      </div>

      <div className="mx-auto grid h-full w-full grid-cols-1 place-items-center space-y-4 md:grid-cols-2 md:space-y-0 lg:w-[860px]">
        {clases.slice(3, 5).map((item, index) => (
          <ClaseCard items={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BoxClases;
