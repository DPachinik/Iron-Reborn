import React from 'react';
import Form from '../Components/Form/Form';
import Maps from '../Components/Maps/Maps';
import Subtitulo from '../Components/Subtitulos/Subtitulo';
import { Element } from 'react-scroll';

const Contact = () => {
  return (
    <Element
      name="contacto"
      className="grid h-dvh grid-cols-1 bg-[#1C1C1C] md:h-[calc(100dvh-70px)] md:grid-cols-2"
    >
      <div className="flex w-full flex-col pl-4 md:pl-8">
        <Subtitulo text="Contacto" />
        <p className="text-gray-400">
          Si necesitas más información o tienes alguna duda, contactanos!
        </p>
        <Form />
      </div>
      <Maps />
    </Element>
  );
};

export default Contact;
