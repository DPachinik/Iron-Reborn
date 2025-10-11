import React from 'react';

const Maps = () => {
  return (
    <div className="flex h-full w-full pt-4 md:pt-0">
      <div className="relative mx-auto my-auto h-full w-full md:h-[60%]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.4961166436124!2d-57.65620392563698!3d-25.28753052726794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945d081a3616e045%3A0x830600e71ce7c790!2sIRON%20REBORN%20Salud%20%26%20Fitness!5e0!3m2!1ses-419!2spy!4v1756314656518!5m2!1ses-419!2spy"
          className="h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Maps;
