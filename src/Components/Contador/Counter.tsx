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
      className="grid h-[120px] grid-cols-3 items-center justify-center bg-red-700 text-xl"
    >
      {inView && (
        <div className="flex flex-col gap-3 text-center text-2xl font-bold text-white md:text-[7vh]">
          <CountUp end={15} duration={6} separator="," prefix="+" />
          <p className="font-exo text-sm font-normal md:text-lg">
            Años de experiencia{' '}
          </p>
        </div>
      )}
      {inView && (
        <div className="flex flex-col gap-3 text-center text-2xl font-bold text-white md:text-[7vh]">
          <CountUp end={500} duration={3} separator="," prefix="+" />
          <p className="font-exo text-sm font-normal md:text-lg">
            Clientes satisfechos{' '}
          </p>
        </div>
      )}
      {inView && (
        <div className="flex flex-col gap-3 text-center text-2xl font-bold text-white md:text-[7vh]">
          <CountUp end={1000} duration={2} separator="," prefix="+" />
          <p className="font-exo text-sm font-normal md:text-lg">
            Productos vendidos
          </p>
        </div>
      )}
    </div>
  );
};

export default Counter;
