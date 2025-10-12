export type PaqueteTypes = {
  plan: string;
  precio: string;
  subtitulo: string;
  cuota: string;
  item1: string;
  item2: string;
  item3?: string;
  item4?: string;
  mensaje: string;
};

const Paquetes: PaqueteTypes[] = [
  {
    plan: 'fly',
    precio: 'Gs 100.000 ',
    cuota: '/ mes',
    subtitulo: 'CARDIO',
    item1: 'Clases de Cardio',
    item2: 'Acceso libre a sala de cardio',
    item3: 'Asesoría con instructor',
    mensaje:
      'https://wa.me/+5950982101391?text=%20Hola,%20vengo%20desde%20la%20web!%20,%20estoy %20interesado%20en%20el%20plan%20fly(cardio)%20,%20me%20interesa%20frecuentar%20el%20gimnasio...',
  },
  {
    plan: 'Stronger',
    precio: 'Gs 150.0000',
    cuota: '/ mes',
    subtitulo: 'MUSCULACIÓN',
    item1: 'Acceso libre a sala de musculación',
    item2: 'Uso libre de bicicletas de cardio',
    item3: 'Asesoría con instructor',
    mensaje:
      'https://wa.me/+5950982101391?text=%20Hola,%20vengo%20desde%20la%20web!%20,%20estoy %20interesado%20en%20el%20plan%20Stronger(Musculación)%20,%20me%20interesa%20frecuentar%20el%20gimnasio...',
  },

  {
    plan: 'Bronze',
    precio: 'Gs 150.000',
    cuota: '/ mes',
    subtitulo: 'FUNCIONAL + MUSCULACIÓN',
    item1: 'Entrenamiento funcional 3 veces por semana',
    item2: 'Musculación 2 veces por semana',
    item3: 'Asesoría con instructor',
    mensaje:
      'https://wa.me/+5950982101391?text=%20Hola,%20vengo%20desde%20la%20web!%20,%20estoy %20interesado%20en%20el%20plan%20Bronze(FUNCIONAL + MUSCULACIÓN)%20,%20me%20interesa%20frecuentar%20el%20gimnasio...',
  },

  {
    plan: 'Silver',
    precio: 'Gs 180.000',
    cuota: '/ mes',
    subtitulo: 'MUSCULACIÓN + CARDIO',
    item1: 'Acceso libre a sala de musculación',
    item2: 'Acceso libre a sala de cardio',
    item3: 'Asesoría personalizada',
    mensaje:
      'https://wa.me/+5950982101391?text=%20Hola,%20vengo%20desde%20la%20web!%20,%20estoy %20interesado%20en%20el%20plan%20Bronze(MUSCULACIÓN + CARDIO)%20,%20me%20interesa%20frecuentar%20el%20gimnasio...',
  },
  {
    plan: 'Gold',
    precio: 'Gs 200.000',
    cuota: '/ mes',
    subtitulo: 'FULL CLASS',
    item1: 'Acceso libre a sala de musculación',
    item2: 'Acceso libre a sala de cardio',
    item3: 'Entrenamiento Funcional',
    item4: 'Entrenamiento con seguimiento diario',
    mensaje:
      'https://wa.me/+5950982101391?text=%20Hola,%20vengo%20desde%20la%20web!%20,%20estoy %20interesado%20en%20el%20plan%20Bronze(TODAS LAS CLASES)%20,%20me%20interesa%20frecuentar%20el%20gimnasio...',
  },
];

export default Paquetes;
