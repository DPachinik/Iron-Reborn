import { ReactNode } from 'react';
import { IoIosStar } from 'react-icons/io';

export type ReseñasTypes = {
  img: string;
  name: string;
  testimonio: string;
  icon: ReactNode;
};

const Reseñas: ReseñasTypes[] = [
  {
    img: '/jorgeortiz.png',
    name: 'Jorge Ortiz, 53 años',
    testimonio:
      'Tenés ese equilibrio entre entrenamiento fuerte y cuidado personalizado. ¡Eso marca la diferencia!',
    icon: <IoIosStar size={16} className="text-yellow-400" />,
  },
  {
    img: '/jessica.png',
    name: 'Jessica, 22 años',
    testimonio:
      'Me encantan las clases de funcional. Me siento más ágil, fuerte y motivada que nunca.',
    icon: <IoIosStar size={16} className="text-yellow-400" />,
  },
  {
    img: '/diego.png',
    name: 'Diego, 34 años',
    testimonio:
      'Pasé de estar sin energía a volver a disfrutar moverme. ¡Estoy feliz con mi progreso!',
    icon: <IoIosStar size={16} className="text-yellow-400" />,
  },
  {
    img: '/carol.png',
    name: 'Carol, 26 años',
    testimonio:
      'Se siente como una familia. Todos te apoyan y te hacen sentir bien desde el primer día.',
    icon: <IoIosStar size={16} className="text-yellow-400" />,
  },
  {
    img: '/tutor1.png',
    name: 'Marcos, 41 años',
    testimonio:
      'Es el primer gimnasio donde no me siento intimidado. Buen ambiente, buena gente.',
    icon: <IoIosStar size={16} className="text-yellow-400" />,
  },
  {
    img: '/natalia.png',
    name: 'Natalia, 32 años',
    testimonio:
      'En tres meses noté resultados reales. Los profes están siempre atentos y te ayudan a mejorar y son súper profesionales.',
    icon: <IoIosStar size={16} className="text-yellow-400" />,
  },
];

export default Reseñas;
