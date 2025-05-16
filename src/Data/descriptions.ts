import React from 'react';
import { Cube, Globe, SketchLogo } from 'phosphor-react';
import { IconProps } from 'phosphor-react';
import menImage from '../../public/men.png';
import womenImage from '../../public/women.png';
import boxeadorImage from '../../public/boxeador.png';

type DescriptionCard = {
  icon: React.FC<IconProps>;
  title: string;
  shortDescription: string;
  fullDescription: string;
  button: string;
  image: string;
  alt: string;
};

export const descriptions: DescriptionCard[] = [
  {
    icon: SketchLogo,
    title: 'Nuestra Visión',
    shortDescription: '¿Por qué lo hacemos?',
    fullDescription:
      '"Nuestra visión es posicionarnos como el gimnasio líder en salud, bienestar y transformación personal, siendo reconocidos por nuestro compromiso con la excelencia, la innovación y el acompañamiento integral de cada uno de nuestros miembros. Nos esforzamos por crear un entorno motivador, inclusivo y profesional donde las personas puedan alcanzar no solo sus objetivos físicos, sino también desarrollar hábitos sostenibles que mejoren su calidad de vida. Inspiramos a nuestra comunidad a descubrir y construir su mejor versión, impulsando el crecimiento físico, mental y emocional a través del ejercicio, la educación y el apoyo constante."',
    button: 'SABER MÁS',
    image: menImage,
    alt: 'Hombre con mancuernas',
  },
  {
    icon: Cube,
    title: 'Nuestra Misión',
    shortDescription: '¿Hacia dónde vamos?',
    fullDescription:
      '"Nuestra misión es brindar un entorno seguro, motivador y altamente profesional que fomente el desarrollo integral de la salud física y mental de nuestros clientes. Nos comprometemos a ofrecer instalaciones de calidad, equipamiento moderno y un equipo de profesionales apasionados y capacitados que acompañan a cada persona en su proceso de transformación. Promovemos la actividad física como un pilar fundamental del bienestar, al mismo tiempo que cultivamos la confianza, la disciplina y la superación personal. Buscamos impactar positivamente en la vida de quienes nos eligen, ayudándoles a construir hábitos saludables, alcanzar sus metas y mantener un equilibrio duradero entre cuerpo y mente."',
    button: 'SABER MÁS',
    image: womenImage,
    alt: 'mujer con mancuernas',
  },
  {
    icon: Globe,
    title: 'Nuestro Lema',
    shortDescription: '¿Lo que buscamos?',
    fullDescription: '" Salud y Fitness para una vida sin límites"',
    button: 'SABER MÁS',
    image: boxeadorImage,
    alt: 'hombre boxeador',
  },
];
