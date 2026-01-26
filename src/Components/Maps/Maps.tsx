import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const Maps = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Crear el mapa en dark mode
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: 'https://tiles.openfreemap.org/styles/dark',
      center: [-57.653610952126336, -25.287417521752154], // coordenadas exactas
      zoom: 16,
      pitch: 15,
      bearing: -10,
    });

    // --- PIN ROJO FIJO ---
    new maplibregl.Marker({ color: '#dc2626', anchor: 'bottom' })
      .setLngLat([-57.653610952126336, -25.287417521752154])
      .addTo(map);

    // --- TEXTO ROJO AL LADO ---
    const textEl = document.createElement('span');
    textEl.textContent = 'IRON REBORN – Salud & Fitness';
    textEl.style.color = '#dc2626'; // rojo
    textEl.style.fontWeight = 'bold';
    textEl.style.fontSize = '14px';
    textEl.style.whiteSpace = 'nowrap'; // para que no se rompa en varias líneas

    // Crear un Marker solo para el texto
    new maplibregl.Marker({ element: textEl, anchor: 'left' })
      .setLngLat([-57.653610952126336, -25.287417521752154])
      .addTo(map);

    // Cleanup al desmontar
    return () => map.remove();
  }, []);

  return (
    <div className="flex w-full items-center">
      <div
        ref={mapContainerRef}
        className="mt-8 h-[300px] w-full rounded-xl shadow-md md:mt-0"
      />
    </div>
  );
};

export default Maps;
