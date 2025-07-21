export type PaqueteTypes = {
  plan: string;
  precio: string;
  subtitulo: string;
  cuota: string;
  item1: string;
  item2: string;
  item3?: string;
  item4?: string;
};

const Paquetes: PaqueteTypes[] = [
  {
    plan: 'Fly',
    precio: 'Gs 100.000 ',
    cuota: '/ mes',
    subtitulo: 'CARDIO',
    item1: 'Clases de Cardio',
    item2: 'Acceso libre a sala de cardio',
    item3: 'Asesoría con instructor',
  },
  {
    plan: 'Stronger',
    precio: 'Gs 150.0000',
    cuota: '/ mes',
    subtitulo: 'MUSCULACIÓN',
    item1: 'Acceso libre a sala de musculación',
    item2: 'Uso libre de bicicletas de cardio',
    item3: 'Asesoría con instructor',
  },

  {
    plan: 'Bronze',
    precio: 'Gs 150.000',
    cuota: '/ mes',
    subtitulo: 'FUNCIONAL + MUSCULACIÓN',
    item1: 'Entrenamiento funcional 3 veces por semana',
    item2: 'Musculación 2 veces por semana',
    item3: 'Asesoría con instructor',
  },

  {
    plan: 'Silver',
    precio: 'Gs 180.000',
    cuota: '/ mes',
    subtitulo: 'MUSCULACIÓN + CARDIO',
    item1: 'Acceso libre a sala de musculación',
    item2: 'Acceso libre a sala de cardio',
    item3: 'Asesoría personalizada',
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
  },
];

export default Paquetes;
