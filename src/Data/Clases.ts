import personal from '/public/personal-trainer.webp';
import atleta from '/public/musculacion.webp';
import mixto from '/mixto.webp';
import coach from '/public/personal.jpg';
import funcional from '/public/functional-training.jpg';
import {
  Barbell,
  BatteryChargingVertical,
  BoundingBox,
  Gauge,
  IconProps,
  Lightning,
} from 'phosphor-react';
import React from 'react';

export type ClaseTypes = {
  title: string;
  description: string;
  image: string;
  icon: React.FC<IconProps>;
};

export const clases: ClaseTypes[] = [
  {
    title: 'Entrenamiento Personal',
    description:
      'Activa tu potencial más rápido con la orientación personalizada de nuestros entrenadores personales certificados.',
    image: personal,
    icon: BoundingBox,
  },
  {
    title: 'Musculación',
    description:
      'Clase orientada al desarrollo de la fuerza máxima e hipertrofia muscular mediante el uso de cargas progresivas con máquinas, pesos libres y ejercicios multiarticulares.',
    image: atleta,
    icon: Barbell,
  },
  {
    title: 'Entrenamiento funcional',
    description:
      'Sesión basada en movimientos integrales que mejoran la movilidad, estabilidad, coordinación y fuerza funcional aplicable a las actividades de la vida diaria o el deporte.',
    image: funcional,
    icon: Lightning,
  },
  {
    title: 'Musculación + Cardio',
    description:
      'Entrenamiento combinado que integra rutinas de fuerza con trabajo cardiovascular continuo o por intervalos, optimizando tanto el desarrollo muscular como la resistencia aeróbica.',
    image: coach,
    icon: Gauge,
  },
  {
    title: 'Musculación + Funcional',
    description:
      'Clase mixta que alterna ejercicios de musculación para estimular la fuerza localizada con circuitos funcionales enfocados en el control postural, la agilidad y la potencia general.',
    image: mixto,
    icon: BatteryChargingVertical,
  },
];
