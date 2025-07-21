import React from 'react';

type TituloProps = {
  text: string;
};

const TituloCentral = ({ text }: TituloProps) => {
  return (
    <h3 className="my-10 text-center font-exo text-[5vh] font-bold leading-10 text-white lg:text-3xl">
      {text}
    </h3>
  );
};

export default TituloCentral;
