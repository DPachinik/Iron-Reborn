import React from 'react';
import TextoEncabezado from '../TextoEncabezado/TextoEncabezado';
import CardTestimonios from './CardTestimonios';

const Testimonios = () => {
  return (
    <div className="my-8 md:h-dvh">
      <div className="mb-8 flex flex-col gap-4 pl-4">
        <TextoEncabezado text="Opiniones de nuestros alumnos" />
        <p className="pr-4 text-gray-400">
          Conocé cómo nuestros alumnos están logrando sus objetivos, paso a
          paso, con nuestro acompañamiento.
        </p>
      </div>

      <div className="grid h-auto grid-rows-1 md:grid-rows-2 lg:grid-rows-3">
        <CardTestimonios animationClass="animate-scroll" className="flex" />
        <CardTestimonios
          animationClass="animate-scroll-center"
          className="flex"
        />
      </div>
    </div>
  );
};

export default Testimonios;
