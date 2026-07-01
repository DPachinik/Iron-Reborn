import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="grid h-[120px] grid-cols-3 items-center justify-center gap-2 bg-red-700 px-2 text-xl"
    >
      {inView && (
        <div className="w-30 flex flex-col items-center gap-3 text-2xl font-bold text-white md:text-[7vh]">
          <CountUp end={15} duration={6} separator="," prefix="+" />
          <p className="w-20 text-center font-exo text-sm font-normal sm:w-full md:text-lg">
            Años de experiencia{' '}
          </p>
        </div>
      )}
      {inView && (
        <div className="w-30 flex flex-col items-center gap-3 text-2xl font-bold text-white md:text-[7vh]">
          <CountUp end={500} duration={3} separator="," prefix="+" />
          <p className="w-20 text-center font-exo text-sm font-normal sm:w-full md:text-lg">
            Clientes satisfechos{' '}
          </p>
        </div>
      )}
      {inView && (
        <div className="w-30 flex flex-col items-center gap-3 text-2xl font-bold text-white md:text-[7vh]">
          <CountUp end={1000} duration={2} separator="." prefix="+" />
          <p className="w-20 text-center font-exo text-sm font-normal sm:w-full md:text-lg">
            Productos vendidos
          </p>
        </div>
      )}
    </div>
  );
};

export default Counter;
