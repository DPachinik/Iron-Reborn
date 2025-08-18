import { CaretRight } from 'phosphor-react';
import React from 'react';

type SubtituloProps = {
  text: string;
};

const Subtitulo = ({ text }: SubtituloProps) => {
  return (
    <div className="my-4 flex w-fit gap-2">
      <div className="flex">
        <CaretRight size={24} className="text-[#ff2323]" />
        <CaretRight size={24} className="-ml-4 text-[#ffff]" />
      </div>

      <p className="font-exo text-lg font-semibold text-[#ff2323]">{text}</p>
    </div>
  );
};

export default Subtitulo;
