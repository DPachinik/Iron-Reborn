import React from 'react';
import { useInView } from 'react-intersection-observer';
import TituloCentral from '../TituloCentral/TituloCentral';

const VideoGym = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="relative">
      <div>
        <TituloCentral text="Centro de Entrenamiento" />
      </div>
      <div
        ref={ref}
        className="mx-auto min-h-[200px] w-full max-w-4xl overflow-hidden rounded-xl shadow-lg"
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
