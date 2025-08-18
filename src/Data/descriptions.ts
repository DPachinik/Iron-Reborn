import React from 'react';
import { Cube, Globe, SketchLogo } from 'phosphor-react';
import { IconProps } from 'phosphor-react';
import menImage from '/men.png';
import womenImage from '/women.png';
import boxeadorImage from '/victoria.png';

type DescriptionCard = {
  icon: React.FC<IconProps>;
  title: string;
  shortDescription: string;
  parrafo1: string;
  parrafo2?: string;
  parrafo3?: string;
  parrafo4?: string;
  button: string;
  image: string;
  alt: string;
};

export const descriptions: DescriptionCard[] = [
  {
    icon: SketchLogo,
    title: 'Nuestra Visión',
    shortDescription: '¿Por qué lo hacemos?',
    parrafo1:
      '" Nuestra visión es posicionarnos como el gimnasio líder en salud, bienestar y transformación personal, siendo reconocidos por nuestro compromiso con la excelencia, la innovación y el acompañamiento integral de cada uno de nuestros miembros.',
    parrafo2:
      'Nos esforzamos por crear un entorno motivador, inclusivo y profesional donde las personas puedan alcanzar no solo sus objetivos físicos, sino también desarrollar hábitos sostenibles que mejoren su calidad de vida.',
    parrafo3:
      'Inspiramos a nuestra comunidad a descubrir y construir su mejor versión, impulsando el crecimiento físico, mental y emocional a través del ejercicio, la educación y el apoyo constante. "',
    button: 'SABER MÁS',
    image: menImage,
    alt: 'Hombre con mancuernas',
  },
  {
    icon: Cube,
    title: 'Nuestra Misión',
    shortDescription: '¿Hacia dónde vamos?',
    parrafo1:
      '" Nuestra misión es brindar un entorno seguro, motivador y altamente profesional que fomente el desarrollo integral de la salud física y mental de nuestros clientes.  ',
    parrafo2:
      'Nos comprometemos a ofrecer instalaciones de calidad, equipamiento moderno y un equipo de profesionales apasionados y capacitados que acompañan a cada persona en su proceso de transformación. ',
    parrafo3:
      'Promovemos la actividad física como un pilar fundamental del bienestar, al mismo tiempo que cultivamos la confianza, la disciplina y la superación personal.',
    parrafo4:
      'Buscamos impactar positivamente en la vida de quienes nos eligen, ayudándoles a construir hábitos saludables, alcanzar sus metas y mantener un equilibrio duradero entre cuerpo y mente. "',
    button: 'SABER MÁS',
    image: womenImage,
    alt: 'mujer con mancuernas',
  },
  {
    icon: Globe,
    title: 'Nuestro Lema',
    shortDescription: '¿Lo que buscamos?',
    parrafo1: '" Salud y Fitness para una vida sin límites "',
    button: 'SABER MÁS',
    image: boxeadorImage,
    alt: 'hombre boxeador',
  },
];
