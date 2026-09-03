export type PaqueteTypes = {
  plan: string;
  precio: string;
  precio2?: string;
  precio3?: string;
  subtitulo: string;
  cuota: string;
  cuota2?: string;
  cuota3?: string;
  item1: string;
  item2?: string;
  item3?: string;
  item4?: string;
  mensaje: string;
};

const Paquetes: PaqueteTypes[] = [
  {
    plan: 'Stronger',
    precio: 'Gs 180.000',
    precio2: 'Gs 115.000',
    precio3: 'Gs 75.000',
    cuota: '/ mes',
    cuota2: '/ quincenal',
    cuota3: '/ semanal',
    subtitulo: 'MUSCULACIÓN',
    item1: 'Acceso libre a sala de musculación',
    item2: 'Uso libre de bicicletas de cardio',
    item3: 'Asesoría con instructor',
    mensaje:
      'https://wa.me/+5950982101391?text=%20Hola,%20vengo%20desde%20la%20web!%20,%20estoy %20interesado%20en%20el%20plan%20Stronger(Musculación)%20,%20me%20interesa%20frecuentar%20el%20gimnasio...',
  },
  {
    plan: 'Power',
    precio: 'Gs 210.000',
    cuota: '/ mes',
    subtitulo: 'MUSCULACIÓN + CARDIO',
    item1: 'Acceso libre a sala de musculación',
    item2: 'Acceso libre a sala de cardio',
    item3: 'Asesoría personalizada',
    mensaje:
      'https://wa.me/+5950982101391?text=%20Hola,%20vengo%20desde%20la%20web!%20,%20estoy %20interesado%20en%20el%20plan%20Power(MUSCULACIÓN + CARDIO)%20,%20me%20interesa%20frecuentar%20el%20gimnasio...',
  },
  {
    plan: 'Reformer I',
    precio: 'Gs 180.000 ',
    cuota: '/ mes',
    subtitulo: 'PILATES',
    item1: 'Pilates 1 vez por semana',
    item2: 'Asesoría personalizada',
    mensaje:
      'https://wa.me/+5950982101391?text=%20Hola,%20vengo%20desde%20la%20web!%20,%20estoy %20interesado%20en%20el%20plan%20ReformerI(PILATES 1vez/semana)%20,%20me%20interesa%20frecuentar%20el%20gimnasio...',
  },

  {
    plan: 'Reformer II',
    precio: 'Gs 300.000',
    cuota: '/ mes',
    subtitulo: 'PILATES',
    item1: 'Pilates 2 veces por semana',
    item2: 'Asesoría personalizada',
    mensaje:
      'https://wa.me/+5950982101391?text=%20Hola,%20vengo%20desde%20la%20web!%20,%20estoy %20interesado%20en%20el%20plan%20ReformerII(PILATES 2vez/semana)%20,%20me%20interesa%20frecuentar%20el%20gimnasio...',
  },

  {
    plan: 'Reformer III',
    precio: 'Gs 440.000',
    cuota: '/ mes',
    subtitulo: 'PILATES',
    item1: 'Pilates 3 veces por semana',
    item2: 'Asesoría personalizada',
    mensaje:
      'https://wa.me/+5950982101391?text=%20Hola,%20vengo%20desde%20la%20web!%20,%20estoy %20interesado%20en%20el%20plan%20ReformerIII(PILATES 3vez/semana)%20,%20me%20interesa%20frecuentar%20el%20gimnasio...',
  },
  {
    plan: 'Combo  I',
    precio: 'Gs 300.0000',
    cuota: '/ mes',
    subtitulo: 'MUSCULACIÓN + PILATES',
    item1: 'Acceso libre a sala de musculación',
    item2: 'Acceso libre a sala de cardio',
    item3: 'Pilates 1 vez por semana',
    item4: 'Asesoría personalizada',
    mensaje:
      'https://wa.me/+5950982101391?text=%20Hola,%20vengo%20desde%20la%20web!%20,%20estoy %20interesado%20en%20el%20plan%20ComboI(Musculación + Pilates 1vez/semana)%20,%20me%20interesa%20frecuentar%20el%20gimnasio...',
  },
  {
    plan: 'Combo  II',
    precio: 'Gs 400.0000',
    cuota: '/ mes',
    subtitulo: 'MUSCULACIÓN + PILATES',
    item1: 'Acceso libre a sala de musculación',
    item2: 'Acceso libre a sala de cardio',
    item3: 'Pilates 2 vez por semana',
    item4: 'Asesoría personalizada',
    mensaje:
      'https://wa.me/+5950982101391?text=%20Hola,%20vengo%20desde%20la%20web!%20,%20estoy %20interesado%20en%20el%20plan%20ComboII(Musculación + Pilates 2vez/semana)%20,%20me%20interesa%20frecuentar%20el%20gimnasio...',
  },
  {
    plan: 'Combo  III',
    precio: 'Gs 560.0000',
    cuota: '/ mes',
    subtitulo: 'MUSCULACIÓN + PILATES',
    item1: 'Acceso libre a sala de musculación',
    item2: 'Acceso libre a sala de cardio',
    item3: 'Pilates 3 vez por semana',
    item4: 'Asesoría personalizada',
    mensaje:
      'https://wa.me/+5950982101391?text=%20Hola,%20vengo%20desde%20la%20web!%20,%20estoy %20interesado%20en%20el%20plan%20ComboIII(Musculación + Pilates 3vez/semana)%20,%20me%20interesa%20frecuentar%20el%20gimnasio...',
  },
];

export default Paquetes;
