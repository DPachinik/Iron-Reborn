import personal from '/public/personal-trainer.webp';
import atleta from '/public/musculacion.webp';
import coach from '/public/personal.jpg';
import pilates from '/pilates.jpg';

import {
  Barbell,
  BatteryChargingVertical,
  BoundingBox,
  Gauge,
  IconProps,
} from 'phosphor-react';
import React from 'react';

export type ClaseTypes = {
  title: string;
  description: string;
  image: string;
  icon: React.FC<IconProps>;
  id: number;
};

export const clases: ClaseTypes[] = [
  {
    title: 'Musculación',
    description:
      'Clase orientada al desarrollo de la fuerza máxima e hipertrofia muscular mediante el uso de cargas progresivas con máquinas, pesos libres y ejercicios multiarticulares.',
    image: atleta,
    icon: Barbell,
    id: 1,
  },

  {
    title: 'Musculación + Cardio',
    description:
      'Entrenamiento combinado que integra rutinas de fuerza con trabajo cardiovascular continuo o por intervalos, optimizando tanto el desarrollo muscular como la resistencia aeróbica.',
    image: coach,
    icon: Gauge,
    id: 2,
  },
  {
    title: 'Pilates',
    description:
      'Entrenamiento que combina fuerza, movilidad y estabilidad a través de movimientos precisos que favorecen el equilibrio, la postura y la funcionalidad corporal.',
    image: pilates,
    icon: BatteryChargingVertical,
    id: 3,
  },
  {
    title: 'Entrenamiento Personal',
    description:
      'Activa tu potencial más rápido con la orientación personalizada de nuestros entrenadores personales certificados.',
    image: personal,
    icon: BoundingBox,
    id: 4,
  },
];
