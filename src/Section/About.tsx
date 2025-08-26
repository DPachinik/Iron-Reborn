import React from 'react';
import Card from '../Components/Cards/Card';

import Services from '../Components/BoxServices/Services';
import Counter from '../Components/Contador/Counter';
import Header from '../Components/HeaderAbout/Header';

const About = () => {
  return (
    <section className="flex flex-col">
      <div className="bg-[#1C1C1C]">
        <Header />
      </div>

      <div className="bg-[#1C1C1C]">
        <Card />
      </div>
      <div className="bg-[#2E2E2E]">
        <Services />
      </div>
      <Counter />
    </section>
  );
};

export default About;
