import React from 'react';

import Pack from '../Components/Pack/Pack';
import Testimonios from '../Components/Testimonios/Testimonios';
import Texto from '../Components/Pack/Texto';

const Subscriptions = () => {
  return (
    <section className="relative flex h-full flex-col overflow-hidden bg-[#2E2E2E]">
      <div className="absolute -right-32 top-4 hidden md:flex">
        <Texto />
      </div>

      <div className="absolute -left-40 top-[500px] hidden md:flex">
        <Texto />
      </div>

      <div className="h-full px-4 md:px-12 md:pt-12">
        <Pack />
      </div>
      <Testimonios />
    </section>
  );
};

export default Subscriptions;
