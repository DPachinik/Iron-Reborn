import { ReactNode } from 'react';
import Tutor from '../../public/tutor1.png';
import { Star } from 'phosphor-react';

export type ReseñasTypes = {
  img: string;
  name: string;
  testimonio: string;
  icon: ReactNode;
};

const Reseñas: ReseñasTypes[] = [
  {
    img: Tutor,
    name: 'Jorge Ortiz, 53 años',
    testimonio:
      'Tenés ese equilibrio entre entrenamiento fuerte y cuidado personalizado. ¡Eso marca la diferencia!',
    icon: <Star size={16} className="text-yellow-400" />,
  },
  {
    img: Tutor,
    name: 'Jessica, 22 años',
    testimonio:
      'Me encantan las clases de funcional. Me siento más ágil, fuerte y motivado que nunca.',
    icon: <Star size={16} className="text-yellow-400" />,
  },
  {
    img: Tutor,
    name: 'Diego, 34 años',
    testimonio:
      'Pasé de estar sin energía a volver a disfrutar moverme. ¡Estoy feliz con mi progreso!',
    icon: <Star size={16} className="text-yellow-400" />,
  },
  {
    img: Tutor,
    name: 'Carol, 26 años',
    testimonio:
      'Se siente como una familia. Todos te apoyan y te hacen sentir bien desde el primer día.',
    icon: <Star size={16} className="text-yellow-400" />,
  },
  {
    img: Tutor,
    name: 'Marcos, 19 años',
    testimonio:
      'Es el primer gimnasio donde no me siento intimidado. Buen ambiente, buena gente.',
    icon: <Star size={16} className="text-yellow-400" />,
  },
  {
    img: Tutor,
    name: 'Natalia, 27 años',
    testimonio:
      'En tres meses noté resultados reales. Los profes están siempre atentos y te ayudan a mejorar y son súper profesionales',
    icon: <Star size={16} className="text-yellow-400" />,
  },
];

export default Reseñas;
