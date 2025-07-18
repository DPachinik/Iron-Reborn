import React from 'react';

type SubtituloProps = {
  text: string;
};

const Subtitulo = ({ text }: SubtituloProps) => {
  return (
    <p className="pt-4 font-exo text-lg font-semibold text-red-600">{text}</p>
  );
};

export default Subtitulo;
