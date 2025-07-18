import React from 'react';

type TituloProps = {
  text: string;
};

const TituloCentral = ({ text }: TituloProps) => {
  return (
    <h3 className="my-10 text-center font-exo text-[3vh] font-semibold text-white lg:text-3xl">
      {text}
    </h3>
  );
};

export default TituloCentral;
