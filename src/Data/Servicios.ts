import React from 'react';
import { ArrowLeft, ArrowRight, IconProps } from 'phosphor-react';
import nutriologa from '/public/nutriologa.jpg';
import kinesiologia from '/public/kinesiologia.jpg';
import psicologo from '/public/psicologia.png';
import profesional from '/public/tutor1.png';

type serviciosTypes = {
  title: string;
  text: string;
  fullText: string;
  icon: React.FC<IconProps>;
  icon2: React.FC<IconProps>;
  image: string;
  image2: string;
};

export const Servicios: serviciosTypes[] = [
  {
    title: 'NUTRICIONISTA',
    text: 'Objetivos claros de forma saludable y personalizada.',
    fullText:
      'El área de nutrición está dirigida por un profesional con formación en nutrición clínica, nutrición deportiva y certificación en antropometría, especializado en la evaluación de la composición corporal y en la planificación de estrategias alimentarias orientadas a procesos de hipertrofia muscular y definición, adaptadas al tipo de entrenamiento y requerimientos individuales.',
    icon: ArrowRight,
    icon2: ArrowLeft,
    image: nutriologa,
    image2: profesional,
  },
  {
    title: 'KINESIOLOGÍA ',
    text: 'Prevención, recuperación y funcionalidad corporal.',
    fullText:
      'El área de kinesiología está a cargo de un profesional titulado, especializado en rehabilitación funcional y prevención de lesiones, con enfoque en el tratamiento de patologías musculoesqueléticas y el acompañamiento de deportistas durante su recuperación y mejora del rendimiento físico.',
    icon: ArrowRight,
    icon2: ArrowLeft,
    image: kinesiologia,
    image2: profesional,
  },
  {
    title: 'PSICOLOGÍA',
    text: 'Gestioná tus emociones, potenciá tu rendimiento.',
    fullText:
      'El área de psicología está a cargo de una profesional especializada en psicología clínica y deportiva, enfocada en el desarrollo de habilidades mentales, gestión emocional y acompañamiento terapéutico, tanto en contextos personales como en el alto rendimiento deportivo.',
    icon: ArrowRight,
    icon2: ArrowLeft,
    image: psicologo,
    image2: profesional,
  },
];
