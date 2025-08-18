import React from 'react';
import ServiceBox from './ServiceBox';
import TituloCentral from '../TituloCentral/TituloCentral';

const Services = () => {
  return (
    <section className="my-8 h-auto pb-12 md:h-dvh">
      <div className="container mx-auto flex h-full w-auto px-4">
        <article className="container mx-auto flex h-full flex-col rounded-b-lg">
          <TituloCentral text="Tú jornada fitness comienza por la Salud." />

          <ServiceBox />
        </article>
      </div>
    </section>
  );
};

export default Services;
