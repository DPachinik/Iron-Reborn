import React from 'react';
import ServiceBox from './ServiceBox';
import TituloCentral from '../TituloCentral/TituloCentral';

const Services = () => {
  return (
    <section className="h-full pb-12">
      <div className="mx-auto flex h-full w-full flex-col px-4">
        <TituloCentral text="Tú jornada fitness comienza por la Salud" />
        <article className="mx-auto flex h-full w-full flex-col rounded-b-lg">
          <ServiceBox />
        </article>
      </div>
    </section>
  );
};

export default Services;
