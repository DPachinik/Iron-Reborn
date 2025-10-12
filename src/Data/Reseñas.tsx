import { ReactNode } from 'react';
import Marcos from '../../public/tutor1.png';
import Jorge from '../../public/jorge.png';
import Jessica from '../../public/jessica.png';
import Natalia from '../../public/natalia.png';
import Diego from '../../public/diego.png';
import Carol from '../../public/carol.png';
import { IoIosStar } from 'react-icons/io';

export type ReseñasTypes = {
  img: string;
  name: string;
  testimonio: string;
  icon: ReactNode;
};

const Reseñas: ReseñasTypes[] = [
  {
    img: Jorge,
    name: 'Jorge Ortiz, 53 años',
    testimonio:
      'Tenés ese equilibrio entre entrenamiento fuerte y cuidado personalizado. ¡Eso marca la diferencia!',
    icon: <IoIosStar size={16} className="text-yellow-400" />,
  },
  {
    img: Jessica,
    name: 'Jessica, 22 años',
    testimonio:
      'Me encantan las clases de funcional. Me siento más ágil, fuerte y motivada que nunca.',
    icon: <IoIosStar size={16} className="text-yellow-400" />,
  },
  {
    img: Diego,
    name: 'Diego, 34 años',
    testimonio:
      'Pasé de estar sin energía a volver a disfrutar moverme. ¡Estoy feliz con mi progreso!',
    icon: <IoIosStar size={16} className="text-yellow-400" />,
  },
  {
    img: Carol,
    name: 'Carol, 26 años',
    testimonio:
      'Se siente como una familia. Todos te apoyan y te hacen sentir bien desde el primer día.',
    icon: <IoIosStar size={16} className="text-yellow-400" />,
  },
  {
    img: Marcos,
    name: 'Marcos, 41 años',
    testimonio:
      'Es el primer gimnasio donde no me siento intimidado. Buen ambiente, buena gente.',
    icon: <IoIosStar size={16} className="text-yellow-400" />,
  },
  {
    img: Natalia,
    name: 'Natalia, 32 años',
    testimonio:
      'En tres meses noté resultados reales. Los profes están siempre atentos y te ayudan a mejorar y son súper profesionales.',
    icon: <IoIosStar size={16} className="text-yellow-400" />,
  },
];

export default Reseñas;
