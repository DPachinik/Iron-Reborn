import React from 'react';
import Reseñas from '../../Data/Reseñas';

type TestimoniosProps = {
  animationClass?: string;
  className?: string;
};

const CardTestimonios: React.FC<TestimoniosProps> = ({
  animationClass,
  className,
}) => {
  const duration = Reseñas.length * 20;
  return (
    <div
      className={`h-full w-full select-none overflow-hidden ${className ?? ''}`}
    >
      <article
        className={`flex flex-shrink-0 flex-row gap-10 pt-12 ${animationClass ?? ''}`}
        style={{ '--duration': `${duration}s` } as React.CSSProperties}
      >
        {Reseñas.concat(Reseñas).map((element, index) => {
          const Icono = element.icon;
          return (
            <div
              key={index}
              className="max-w-[450px] rounded-xl bg-[#3A3A3A] p-4 shadow-md transition-transform duration-200 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <img
                  src={element.img}
                  alt={element.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="flex flex-col gap-2 text-white">
                  <h3 className="text-sm font-semibold md:text-base">
                    {element.name}
                  </h3>

                  <p className="text-xs text-gray-300 md:text-sm">
                    {element.testimonio}
                  </p>

                  <div className="mt-4 flex justify-end text-sm text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{Icono}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default CardTestimonios;
