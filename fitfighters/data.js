// FitFighters mobile — shared mock data for the UI kit.
window.FF_DATA = {
  program: {
    name: "Aumento de masa muscular",
    generation: "Generación X",
    level: 2,
    week: 3,
    totalWeeks: 6,
    progress: 40,
    userProgress: 30, // avance real del usuario (etiqueta visible)
    planProgress: 50, // avance esperado del plan (barra de fondo)
    day: "Martes — Pecho y tríceps",
    weekStartDate: "2026-07-06", // lunes de la semana actual (program.week) — ISO, para derivar fechas por día
    isFreePlan: true, // plan gratuito de 4 semanas — habilita la acción de reinicio en Workout
  },

  // Rutina semanal recurrente. status aplica solo a la semana actual (program.week);
  // las demás semanas derivan su estado (completada / próxima) en tiempo de render.
  weekTemplate: [
    { day: "Lunes",     routine: "Piernas y glúteos", type: "training", status: "done" },
    { day: "Martes",    routine: "Pecho y tríceps",   type: "training", status: "today" },
    { day: "Miércoles", routine: "Descanso",          type: "rest",     status: "upcoming" },
    { day: "Jueves",    routine: "Espalda y bíceps",  type: "training", status: "upcoming" },
    { day: "Viernes",   routine: "Hombros y core",    type: "training", status: "upcoming" },
    { day: "Sábado",    routine: "Full body",         type: "training", status: "upcoming" },
    { day: "Domingo",   routine: "Descanso",          type: "rest",     status: "upcoming" },
  ],

  // Live trainer queue — typed exercises covering all 7 block types
  exercises: [
    { name: "Press de pecho mancuernas en banco inclinado", type: "cycle",    reps: 15, serie: 2, total: 3,         img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg",
      muscles: ["Pecho", "Hombro frontal", "Tríceps"], videoUrl: "https://d3gfgejixr95u4.cloudfront.net/app/staging/programs/5eeb86f7cb596824b0c7e2ff/W4IOjh2YRz-science.mp4",
      instructions: ["Ajusta el banco a 30-45° y siéntate con una mancuerna en cada mano apoyada sobre los muslos.", "Recuéstate y lleva las mancuernas a la altura del pecho, con los codos ligeramente hacia afuera.", "Empuja las mancuernas hacia arriba hasta extender los brazos sin bloquear los codos.", "Baja de forma controlada hasta sentir el estiramiento en el pecho y repite."] },
    { name: "Aperturas con mancuernas en banco plano",      type: "cycle",    reps: 12, serie: 1, total: 3,         img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg",
      muscles: ["Pecho", "Hombro frontal"], videoUrl: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1622000401157.mp4",
      instructions: ["Recuéstate en un banco plano con una mancuerna en cada mano, brazos extendidos sobre el pecho.", "Con un ligero doblez en los codos, abre los brazos hacia los lados hasta sentir el estiramiento en el pecho.", "Regresa las mancuernas al punto de partida contrayendo el pecho, sin golpearlas entre sí."] },
    { name: "Descanso activo",                              type: "rest",     time: "02:00",                        img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg",
      muscles: [], videoUrl: null,
      instructions: ["Camina o trota suave para mantener el ritmo cardíaco activo.", "Respira profundo y relaja los grupos musculares recién trabajados.", "Prepárate para el siguiente bloque."] },
    { name: "Flexiones explosivas — For time",              type: "fortime",  time: "00:00",                        img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg",
      muscles: ["Pecho", "Tríceps", "Core"], videoUrl: "https://d3gfgejixr95u4.cloudfront.net/app/staging/programs/5eeb86f7cb596824b0c7e2ff/W4IOjh2YRz-science.mp4",
      instructions: ["Colócate en posición de plancha con las manos un poco más anchas que los hombros.", "Baja el cuerpo y empuja hacia arriba con fuerza hasta despegar ligeramente las manos.", "Aterriza con control y repite lo más rápido posible sin perder la técnica."] },
    { name: "Burpees",                                      type: "amrap",    time: "08:00",                        img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg",
      muscles: ["Cuerpo completo"], videoUrl: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1622000401157.mp4",
      instructions: ["Desde de pie, baja a cuclillas y apoya las manos en el piso.", "Lleva los pies hacia atrás hasta quedar en plancha y realiza una flexión.", "Regresa los pies hacia las manos y salta extendiendo los brazos por encima de la cabeza."] },
    { name: "Press con barra — EMOM",                       type: "emom",     time: "00:45", minCurrent: 3, minTotal: 7, img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg",
      muscles: ["Hombro frontal", "Tríceps", "Core"], videoUrl: "https://d3gfgejixr95u4.cloudfront.net/app/production/programs/62602b4982a4b6bee3ac99ef/HKqqC0QjNI-science%20mini.mp4",
      instructions: ["Sujeta la barra al frente de los hombros con agarre prono.", "Empuja la barra por encima de la cabeza hasta extender los brazos.", "Baja con control y completa las repeticiones antes de que termine el minuto."] },
    { name: "Curl de bíceps",                               type: "stripset", reps: 10, serie: 3, total: 5,         img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg",
      muscles: ["Bíceps", "Antebrazo"], videoUrl: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1622000401157.mp4",
      instructions: ["Toma la barra con agarre supino, separación de manos al ancho de los hombros.", "Flexiona los codos llevando la barra hacia el pecho, manteniéndolos fijos junto al torso.", "Baja la barra de forma controlada hasta extender los brazos por completo."] },
    { name: "Trote continuo",                               type: "cardio",   time: "08:20",                        img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg",
      muscles: ["Cuádriceps", "Pantorrillas", "Cardiovascular"], videoUrl: "https://d3gfgejixr95u4.cloudfront.net/app/production/programs/62602b4982a4b6bee3ac99ef/HKqqC0QjNI-science%20mini.mp4",
      instructions: ["Mantén un ritmo constante que puedas sostener durante todo el bloque.", "Cuida la postura: espalda recta, mirada al frente, brazos relajados.", "Ajusta la velocidad si necesitas recuperar el aliento sin detenerte por completo."] },
  ],

  sections: [
    { type: "cycle",    name: "Ciclo 1",    meta: "3 series", exercises: ["Press inclinado mancuerna", "Aperturas banco plano", "Press militar sentado"] },
    { type: "rest",     name: "Descanso 1", meta: "2:00" },
    { type: "fortime",  name: "For time 1", meta: "4 rondas",  exercises: ["Flexiones", "Fondos en banco", "Plancha 30 s"] },
    { type: "amrap",    name: "Amrap 1",    meta: "8:00",      exercises: ["Burpees", "Mountain climbers"] },
    { type: "emom",     name: "Emom 1",     meta: "7 min",     exercises: ["Press con barra"] },
    { type: "stripset", name: "Stripset 1", meta: "5 series",  exercises: ["Curl de bíceps", "Extensión tríceps"] },
    { type: "cardio",   name: "Cardio 1",   meta: "8:20",      exercises: ["Trote continuo"] },
  ],

  // Detalle de rutina — modelo completo por bloque/ejercicio (paridad con FFSectionCard.kt / ExerciseItem.kt).
  // Los bloques "cycle" usan la nomenclatura "Bloque N"; los demás tipos conservan su propio nombre.
  routineDetailBlocks: [
    {
      type: "cycle", name: "Bloque 1", series: 3, restBetweenSeriesSeconds: 60,
      exercises: [
        { name: "Press de banca inclinado con mancuernas", desc: { kind: "repeats", reps: 10, rir: 2 }, img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1608189905754.jpg" },
        { name: "Aperturas con mancuernas en banco plano", desc: { kind: "repeats", reps: 12, rir: 0 }, rest: "60 seg.", img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg" },
        { name: "Plancha frontal", desc: { kind: "time", time: "30", unit: "seg" }, img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1608189905754.jpg" },
      ],
    },
    { type: "rest", timeSeconds: 90 },
    {
      type: "stripset", name: "Stripset 1", series: 5, restBetweenSeriesSeconds: 45,
      exercises: [
        { name: "Extensión de tríceps en polea", desc: { kind: "stripset", reps: [15, 12, 10, 8, 6], rir: 2 }, img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg" },
        { name: "Curl de bíceps con barra", desc: { kind: "stripset", reps: [15, 12, 10, 8, 6] }, img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1608189905754.jpg" },
      ],
    },
    { type: "rest", timeSeconds: 60 },
    {
      type: "fortime", name: "For time 1", rounds: 4, hint: "Completa el circuito lo más rápido posible",
      exercises: [
        { name: "Fondos en banco", desc: { kind: "repeats", reps: 12 }, img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg" },
        { name: "Flexiones", desc: { kind: "repeats", reps: 15 }, img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1608189905754.jpg" },
      ],
    },
    { type: "rest", timeSeconds: 90 },
    {
      type: "amrap", name: "Amrap 1", totalTimeSeconds: 480,
      exercises: [
        { name: "Burpees", desc: { kind: "repeats", reps: 15 }, img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg" },
        { name: "Mountain climbers", desc: { kind: "time", time: "20", unit: "seg" }, img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1608189905754.jpg" },
      ],
    },
    {
      type: "emom", name: "Emom 1", repsIncrement: 2,
      exercises: [
        { name: "Press con barra", desc: { kind: "emom", initial: 1, increment: 2 }, img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg" },
      ],
    },
    {
      type: "cardio", name: "Cardio 1", totalTimeSeconds: 500,
      exercises: [
        { name: "Trote continuo", desc: { kind: "time", time: "08:20", unit: "activo" }, img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1608189905754.jpg" },
      ],
    },
  ],

  // Detalle de ejercicio + cambio de ejercicio — paridad con ExerciseDetailScreen.kt / ChangeExerciseBottomSheet.kt.
  // Claves = nombre del ejercicio tal como aparece en routineDetailBlocks.
  exerciseLibrary: {
    "Press de banca inclinado con mancuernas": {
      muscles: ["Pecho", "Hombro frontal", "Tríceps"],
      videoUrl: "https://d3gfgejixr95u4.cloudfront.net/app/staging/programs/5eeb86f7cb596824b0c7e2ff/W4IOjh2YRz-science.mp4",
      instructions: [
        "Ajusta el banco a 30-45° y siéntate con una mancuerna en cada mano apoyada sobre los muslos.",
        "Recuéstate y lleva las mancuernas a la altura del pecho, con los codos ligeramente hacia afuera.",
        "Empuja las mancuernas hacia arriba hasta extender los brazos sin bloquear los codos.",
        "Baja de forma controlada hasta sentir el estiramiento en el pecho y repite.",
      ],
    },
    "Aperturas con mancuernas en banco plano": {
      muscles: ["Pecho", "Hombro frontal"],
      videoUrl: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1622000401157.mp4",
      instructions: [
        "Recuéstate en un banco plano con una mancuerna en cada mano, brazos extendidos sobre el pecho.",
        "Con un ligero doblez en los codos, abre los brazos hacia los lados hasta sentir el estiramiento en el pecho.",
        "Regresa las mancuernas al punto de partida contrayendo el pecho, sin golpearlas entre sí.",
      ],
    },
    "Plancha frontal": {
      muscles: ["Core", "Abdomen", "Espalda baja"],
      videoUrl: "https://d3gfgejixr95u4.cloudfront.net/app/production/programs/62602b4982a4b6bee3ac99ef/HKqqC0QjNI-science%20mini.mp4",
      instructions: [
        "Apóyate sobre los antebrazos y la punta de los pies, formando una línea recta de cabeza a talones.",
        "Contrae el abdomen y los glúteos para evitar que la cadera caiga o suba.",
        "Mantén la posición respirando de forma constante durante el tiempo indicado.",
      ],
    },
    "Extensión de tríceps en polea": {
      muscles: ["Tríceps"],
      videoUrl: "https://d3gfgejixr95u4.cloudfront.net/app/staging/programs/5eeb86f7cb596824b0c7e2ff/W4IOjh2YRz-science.mp4",
      instructions: [
        "Sujeta la barra o cuerda de la polea alta con ambas manos, codos pegados al torso.",
        "Extiende los antebrazos hacia abajo sin mover los codos del cuerpo.",
        "Regresa de forma controlada hasta la posición inicial sin perder la tensión.",
      ],
    },
    "Curl de bíceps con barra": {
      muscles: ["Bíceps", "Antebrazo"],
      videoUrl: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1622000401157.mp4",
      instructions: [
        "Toma la barra con agarre supino, separación de manos al ancho de los hombros.",
        "Flexiona los codos llevando la barra hacia el pecho, manteniéndolos fijos junto al torso.",
        "Baja la barra de forma controlada hasta extender los brazos por completo.",
      ],
    },
    "Fondos en banco": {
      muscles: ["Tríceps", "Hombro frontal", "Pecho"],
      videoUrl: "https://d3gfgejixr95u4.cloudfront.net/app/production/programs/62602b4982a4b6bee3ac99ef/HKqqC0QjNI-science%20mini.mp4",
      instructions: [
        "Coloca las manos en el borde de un banco, piernas extendidas al frente y talones en el piso.",
        "Flexiona los codos y baja la cadera hasta formar un ángulo de 90° en los brazos.",
        "Empuja hacia arriba extendiendo los codos sin bloquearlos.",
      ],
    },
    "Flexiones": {
      muscles: ["Pecho", "Tríceps", "Core"],
      videoUrl: "https://d3gfgejixr95u4.cloudfront.net/app/staging/programs/5eeb86f7cb596824b0c7e2ff/W4IOjh2YRz-science.mp4",
      instructions: [
        "Colócate en posición de plancha con las manos un poco más anchas que los hombros.",
        "Baja el cuerpo en línea recta hasta que el pecho casi toque el piso.",
        "Empuja hacia arriba hasta extender los brazos por completo.",
      ],
    },
    "Burpees": {
      muscles: ["Cuerpo completo"],
      videoUrl: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1622000401157.mp4",
      instructions: [
        "Desde de pie, baja a cuclillas y apoya las manos en el piso.",
        "Lleva los pies hacia atrás hasta quedar en plancha y realiza una flexión.",
        "Regresa los pies hacia las manos y salta extendiendo los brazos por encima de la cabeza.",
      ],
    },
    "Mountain climbers": {
      muscles: ["Core", "Cuádriceps"],
      videoUrl: "https://d3gfgejixr95u4.cloudfront.net/app/production/programs/62602b4982a4b6bee3ac99ef/HKqqC0QjNI-science%20mini.mp4",
      instructions: [
        "Colócate en posición de plancha alta con los brazos extendidos.",
        "Lleva una rodilla hacia el pecho y regresa, alternando las piernas rápidamente.",
        "Mantén la cadera baja y el core contraído durante todo el movimiento.",
      ],
    },
    "Press con barra": {
      muscles: ["Hombro frontal", "Tríceps"],
      videoUrl: "https://d3gfgejixr95u4.cloudfront.net/app/staging/programs/5eeb86f7cb596824b0c7e2ff/W4IOjh2YRz-science.mp4",
      instructions: [
        "Sujeta la barra a la altura de los hombros con agarre firme, un poco más ancho que los hombros.",
        "Empuja la barra hacia arriba hasta extender los brazos por completo.",
        "Baja de forma controlada hasta la posición inicial y repite.",
      ],
    },
    "Trote continuo": {
      muscles: ["Cuádriceps", "Pantorrillas", "Femoral"],
      videoUrl: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1622000401157.mp4",
      instructions: [
        "Mantén un ritmo constante y una postura erguida durante todo el trote.",
        "Respira de forma controlada y ajusta la velocidad si es necesario.",
        "Reduce el ritmo poco a poco en los últimos segundos para terminar de forma segura.",
      ],
    },
  },

  // Pool de ejercicios relacionados para la pantalla "Cambiar ejercicio" (ChangeExerciseBottomSheet.kt → misma familia/tags).
  changeExercisePool: [
    { name: "Press militar con mancuernas", muscles: ["Hombro frontal", "Tríceps"], img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1608189905754.jpg", videoUrl: "https://d3gfgejixr95u4.cloudfront.net/app/staging/programs/5eeb86f7cb596824b0c7e2ff/W4IOjh2YRz-science.mp4" },
    { name: "Press de pecho mancuernas en banco inclinado", muscles: ["Pecho", "Hombro frontal"], img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg", videoUrl: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1622000401157.mp4" },
    { name: "Curl de bíceps en polea", muscles: ["Bíceps"], img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1608189905754.jpg", videoUrl: "https://d3gfgejixr95u4.cloudfront.net/app/production/programs/62602b4982a4b6bee3ac99ef/HKqqC0QjNI-science%20mini.mp4" },
    { name: "Elevaciones laterales", muscles: ["Hombro medio"], img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg", videoUrl: "https://d3gfgejixr95u4.cloudfront.net/app/staging/programs/5eeb86f7cb596824b0c7e2ff/W4IOjh2YRz-science.mp4" },
    { name: "Plancha lateral", muscles: ["Oblicuos", "Core"], img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1608189905754.jpg", videoUrl: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1622000401157.mp4" },
    { name: "Sentadilla búlgara", muscles: ["Cuádriceps", "Glúteo"], img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg", videoUrl: "https://d3gfgejixr95u4.cloudfront.net/app/production/programs/62602b4982a4b6bee3ac99ef/HKqqC0QjNI-science%20mini.mp4" },
    { name: "Puente de glúteo", muscles: ["Glúteo", "Femoral"], img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1608189905754.jpg", videoUrl: "https://d3gfgejixr95u4.cloudfront.net/app/staging/programs/5eeb86f7cb596824b0c7e2ff/W4IOjh2YRz-science.mp4" },
    { name: "Salto de cuerda", muscles: ["Pantorrillas", "Cuerpo completo"], img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg", videoUrl: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1622000401157.mp4" },
  ],

  summary: {
    program: "Novatos gym",
    routine: "Rutina Tradicional 1",
    totalTime: "01:18:42",
    exercises: 24,
    sectionsCount: 7,
    rows: [
      { type: "cycle",    name: "Ciclo 1",    value: "2",    unit: "series" },
      { type: "rest",     name: "Descanso 1", value: "2:00", muted: true },
      { type: "fortime",  name: "For time 1", value: "08:34", sub: "tiempo final" },
      { type: "amrap",    name: "Amrap 1",    value: "8",    unit: "rondas" },
      { type: "emom",     name: "Emom 1",     value: "7",    unit: "min", sub: "máx 13 reps" },
      { type: "stripset", name: "Stripset 1", value: "5",    unit: "series" },
      { type: "cardio",   name: "Cardio 1",   value: "08:20", sub: "tiempo activo" },
    ],
  },

  programs: [
    { id: 1, name: "Aumento de masa muscular hogareño", desc: "Diseñado para aumentar la masa muscular de forma magra sin aumentar el porcentaje de grasa.",   category: "home", levelTag: "fundamentos", levels: 3,  img: "https://d10422z5a9xpxu.cloudfront.net/V2/staging/programs/5eeb86f7cb596824b0c7e2ff/1655878808252.jpg" },
    { id: 2, name: "Entrenamiento con tu propio peso",  desc: "Entrena con tu propio peso corporal sin necesidad de equipamiento adicional.",                     category: "home", levelTag: "principiante", levels: 4,  img: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1648024721296.jpg" },
    { id: 3, name: "Novatos hogareños",                 desc: "Para personas con poca o nula experiencia que quieren entrenar desde su hogar.",                   category: "home", levelTag: "fundamentos", levels: 2,  img: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1648026106702.jpg" },
    { id: 4, name: "Prueba Beta 2.0",                   desc: "Programa de hipertrofia de alta intensidad diseñado para usuarios beta de la nueva app.",          category: "gym",  levelTag: "avanzado", levels: 12, img: "https://d3gfgejixr95u4.cloudfront.net/app/staging/programs/5eeb86f7cb596824b0c7e2ff/1Cntax90vQ-programa%20beta.png" },
    { id: 5, name: "Pérdida de grasa",                  desc: "Pierde la mayor cantidad de grasa posible en el menor tiempo sin perder masa muscular.",           category: "home", levelTag: "principiante", levels: 6,  img: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1646898005757.jpg" },
    { id: 6, name: "Recomposición corporal",            desc: "Pierde esa última capa de grasa mientras aumentas tu masa muscular.",                              category: "gym",  levelTag: "avanzado", levels: 8,  img: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1646896097969.jpg" },
    { id: 7, name: "Pérdida de grasa hogareño",         desc: "Lo mismo que pérdida de grasa, pero desde la comodidad de tu hogar.",                             category: "home", levelTag: "fundamentos", levels: 2,  img: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1648025172566.jpg" },
    { id: 8, name: "Recomposición corporal hogareño",   desc: "Pierde grasa y gana músculo desde la comodidad de tu hogar.",                                     category: "home", levelTag: "principiante", levels: 5,  img: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1648024087598.jpg" },
  ],

  recommendedProgram: {
    name: "Novatos gym — Nivel 1",
    description: "Un plan de introducción diseñado para quienes están comenzando a entrenar en el gimnasio. Trabaja los grandes grupos musculares con movimientos básicos y una progresión de carga controlada.",
    videoUrl: "",
  },

  milestone: {
    name: "Eduardo",
    currentLevel: 1,
    totalLevels: 1,
    stickerName: "Primera racha",
    title: "Eduardo, vas con todo",
    description: "Desbloqueaste un nuevo sticker en Hipertrofia FUNDAMENTOS (GYM).",
  },

  generations: [
    { id: 2, name: "Generación 2", progress: 42,  date: "28 ago 2023", method: "Crédito", reviewAsked: true,  fbGroup: false },
    { id: 1, name: "Generación 1", progress: 100, date: "15 ene 2023", method: "Stripe",  reviewAsked: true,  fbGroup: true  },
    { id: 0, name: "Generación 0", progress: 100, date: "1 ago 2022",  method: "Stripe",  reviewAsked: false, fbGroup: false },
  ],
};
