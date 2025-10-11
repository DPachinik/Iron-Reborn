import React from 'react';

import VideoGym from '../Components/Video/VideoGym';
import PersonalCards from '../Components/CardEntrenadores/PersonalCards';
import Horarios from '../Components/Horarios/Horarios';
import HeaderClass from '../Components/HeaderClass/HeaderClass';
import { Element } from 'react-scroll';

const Class = () => {
  return (
    <Element name="clases" className="h-full bg-[#1C1C1C]">
      <div className="fondo px-4 md:px-12 md:pt-12">
        <div className="container mx-auto space-y-8 pb-8">
          <HeaderClass />
          <VideoGym />
          <PersonalCards />
          <Horarios />
        </div>
      </div>
    </Element>
  );
};

export default Class;
