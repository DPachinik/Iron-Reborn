import gustavo2 from '../../public/gustavo2.png';
import gustavo from '../../public/gus2.png';
import ramiro from '../../public/ramiro2.png';
import sergio from '../../public/sergio.png';

export type CoachTypes = {
  name: string;
  image: string;
  studies1: string;
  studies2: string;
  studies3: string;
  studies4?: string;
  studies5?: string;
};

export const Coach: CoachTypes[] = [
  {
    name: 'SERGIO GONZÁLEZ',
    image: sergio,
    studies1: 'Especialista en Fisiculturismo y Fitness',
    studies2: 'Dipl. en Nutrición Deportiva ',
    studies3: 'Dipl. en Fisiología del Ejercicio',
    studies4: 'Dipl. en Ciencias del Ejercicio Nivel I ',
    studies5: 'Antropometrista ISAK Nivel I',
  },
  {
    name: 'RAMIRO FOIS HIRSCH',
    image: ramiro,
    studies1: 'Licenciado en Ciencias del Deporte',
    studies2: 'Esp. en Entrenamiento físico de adultos mayores',
    studies3: 'Personal Trainer',
  },
  {
    name: 'GUSTAVO GONZÁLEZ',
    image: gustavo2,
    studies1: 'Coach Nutricional y Fitness',
    studies2: 'Psicólogo Clínico y Deportivo',
    studies3: 'Antropometrista ISAK Nivel I',
  },
  {
    name: 'GUSTAVO VERDÚN',
    image: gustavo,
    studies1: 'Prof. de Entrenamiento Funcional',
    studies2: 'Prof. de Spinning',
    studies3: 'Personal Trainer',
  },
];
