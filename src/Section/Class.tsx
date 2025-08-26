import React from 'react';

import VideoGym from '../Components/Video/VideoGym';
import PersonalCards from '../Components/CardEntrenadores/PersonalCards';
import Horarios from '../Components/Horarios/Horarios';
import HeaderClass from '../Components/HeaderClass/HeaderClass';

const Class = () => {
  return (
    <section className="h-full bg-[#1C1C1C]">
      <div className="fondo px-4 md:px-12 md:pt-12">
        <div className="container mx-auto space-y-8 pb-8">
          <HeaderClass />
          <VideoGym />
          <PersonalCards />
          <Horarios />
        </div>
      </div>
    </section>
  );
};

export default Class;
