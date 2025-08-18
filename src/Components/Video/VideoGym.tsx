import React from 'react';
import { useInView } from 'react-intersection-observer';
import TituloCentral from '../TituloCentral/TituloCentral';

const VideoGym = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="mx-20">
      <div>
        <TituloCentral text="Centro de Entrenamiento" />
      </div>
      <div className="relative border-[2px] py-8 [border-image:linear-gradient(to_top_left,#FF2323_0%,#1C1C1C_30%,#1C1C1C_70%,#FF2323)_1]">
        <div
          ref={ref}
          className="mx-auto min-h-[200px] w-full max-w-4xl overflow-hidden rounded-xl"
        >
          {inView && (
            <video
              controls
              loop
              className="h-auto w-full rounded-xl bg-transparent md:h-[400px]"
            >
              <source src="/gym-video.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoGym;
