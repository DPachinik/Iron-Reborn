import React from 'react';
import { useInView } from 'react-intersection-observer';

const VideoGym = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="relative">
      <div>
        <p className="font-exo text-lg font-semibold text-red-600">
          NUESTRO GIMNASIO
        </p>

        <h3 className="text-center font-exo text-[4vh] font-semibold text-white">
          Centro de Entrenamiento
        </h3>
      </div>
      <div
        ref={ref}
        className="mx-auto my-8 min-h-[200px] w-full max-w-4xl overflow-hidden rounded-xl shadow-lg"
      >
        {inView && (
          <video controls loop className="h-auto w-full rounded-xl">
            <source src="/gym-video.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        )}
      </div>
    </div>
  );
};

export default VideoGym;
