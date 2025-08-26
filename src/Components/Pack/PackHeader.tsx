import React from 'react';
import Subtitulo from '../Subtitulos/Subtitulo';
import TextoEncabezado from '../TextoEncabezado/TextoEncabezado';

const PackHeader = () => {
  return (
    <div className="flex flex-col gap-4 pt-8 md:items-start md:pt-0">
      <div className="md flex flex-col gap-4">
        <Subtitulo text="SUSCRIPCIONES" />
        <TextoEncabezado text="Paquetes flexibles para tus objetivos" />
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
