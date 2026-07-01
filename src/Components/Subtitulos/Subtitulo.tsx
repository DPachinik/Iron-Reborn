import { CaretRight } from 'phosphor-react';
import React from 'react';

type SubtituloProps = {
  text: string;
};

const Subtitulo = ({ text }: SubtituloProps) => {
  return (
    <div className="my-4 flex w-fit gap-2">
      <div className="flex">
        <CaretRight size={28} className="text-[#ff2323]" />
        <CaretRight size={28} className="-ml-4 text-[#ffff]" />
      </div>
      <h2 className="font-exo text-lg font-bold text-[#ff2323] lg:text-xl">
        {text}
      </h2>
    </div>
  );
};

export default Subtitulo;
