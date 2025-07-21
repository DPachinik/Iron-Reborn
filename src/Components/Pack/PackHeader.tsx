import React from 'react';
import Subtitulo from '../Subtitulos/Subtitulo';

const PackHeader = () => {
  return (
    <div className="flex h-fit flex-col gap-4 md:items-start">
      <div className="md flex flex-col gap-4">
        <Subtitulo text="SUSCRIPCIONES" />
        <p className="font-exo text-[5vh] font-bold leading-10 text-white">
          Paquetes flexibles para tus objetivos
        </p>
      </div>
      <p className="pr-4 text-gray-400">
        Elegí el plan que mejor se adapte a tu ritmo de vida, metas y nivel de
        entrenamiento. Ya sea que estés comenzando o buscando llevar tu
        rendimiento al máximo, tenemos un paquete pensado para vos.
      </p>
    </div>
  );
};

export default PackHeader;
