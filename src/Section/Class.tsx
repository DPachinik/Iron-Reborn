import React from 'react';

import VideoGym from '../Components/Video/VideoGym';
import PersonalCards from '../Components/CardEntrenadores/PersonalCards';
import Horarios from '../Components/Horarios/Horarios';

import Pack from '../Components/Pack/Pack';
import Texto from '../Components/Pack/Texto';
import Testimonios from '../Components/Testimonios/Testimonios';
import HeaderClass from '../Components/HeaderClass/HeaderClass';

const Class = () => {
  return (
    <section className="h-full bg-[#1C1C1C] px-4 py-12 md:px-12">
      <div className="container mx-auto">
        <HeaderClass />
        <VideoGym />
        <PersonalCards />
        <Horarios />

        <div className="bg-[#3A3A3A]">
          <Texto />
          <Pack />
          <Testimonios />
        </div>
      </div>
    </section>
  );
};

export default Class;
