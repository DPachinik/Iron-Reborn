import React from 'react';
import { clases } from '../../Data/Clases';
import ClaseCard from './ClaseCard';

const BoxClases = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4 py-8">
      <div className="grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
        {clases.slice(0, 3).map((item, index) => (
          <ClaseCard items={item} key={index} />
        ))}
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:w-[70%] md:grid-cols-2">
        {clases.slice(3, 5).map((item, index) => (
          <ClaseCard items={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BoxClases;
