import React from 'react';

type TextoProps = {
  text: string;
};

const TextoEncabezado = ({ text }: TextoProps) => {
  return (
    <h3 className="font-exo text-3xl font-bold leading-10 text-white md:text-4xl">
      {text}
    </h3>
  );
};

export default TextoEncabezado;
