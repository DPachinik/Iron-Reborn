import React from 'react';
import ServiceBox from './ServiceBox';

const Services = () => {
  return (
    <section className="h-max bg-[#1C1C1C] pb-12">
      <div className="flex h-full w-auto">
        <article className="container mx-auto flex h-full flex-col space-y-6 rounded-b-lg bg-[#3A3A3A] px-8 pb-8">
          <h3 className="text-center font-exo text-[4vh] font-semibold text-white">
            Tú jornada fitness comienza por la Salud.
          </h3>

          <ServiceBox />
        </article>
      </div>
    </section>
  );
};

export default Services;
