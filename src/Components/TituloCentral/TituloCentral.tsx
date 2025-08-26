import React from 'react';

type TituloProps = {
  text: string;
};

const TituloCentral = ({ text }: TituloProps) => {
  return (
    <h4 className="my-10 text-center font-exo text-2xl font-bold leading-10 text-white md:text-4xl">
      {text}
    </h4>
  );
};

export default TituloCentral;
