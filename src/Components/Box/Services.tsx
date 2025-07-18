import React from 'react';
import ServiceBox from './ServiceBox';
import TituloCentral from '../TituloCentral/TituloCentral';

const Services = () => {
  return (
    <section className="h-max bg-[#1C1C1C] pb-12">
      <div className="flex h-full w-auto">
        <article className="container mx-auto flex h-full flex-col rounded-b-lg bg-[#3A3A3A] px-8 pb-8">
          <TituloCentral text="Tú jornada fitness comienza por la Salud." />

          <ServiceBox />
        </article>
      </div>
    </section>
  );
};

export default Services;
