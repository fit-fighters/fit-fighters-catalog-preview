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
    { name: "Press de pecho mancuernas en banco inclinado", type: "cycle",    reps: 15, serie: 2, total: 3,         img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg" },
    { name: "Aperturas con mancuernas en banco plano",      type: "cycle",    reps: 12, serie: 1, total: 3,         img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg" },
    { name: "Descanso activo",                              type: "rest",     time: "02:00",                        img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg" },
    { name: "Flexiones explosivas — For time",              type: "fortime",  time: "00:00",                        img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg" },
    { name: "Burpees",                                      type: "amrap",    time: "08:00",                        img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg" },
    { name: "Press con barra — EMOM",                       type: "emom",     time: "00:45", minCurrent: 3, minTotal: 7, img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg" },
    { name: "Curl de bíceps",                               type: "stripset", reps: 10, serie: 3, total: 5,         img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg" },
    { name: "Trote continuo",                               type: "cardio",   time: "08:20",                        img: "https://d10422z5a9xpxu.cloudfront.net/V2/exercises/thumbnail-1611537610277.jpg" },
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
    { id: 1, name: "Aumento de masa muscular hogareño", desc: "Diseñado para aumentar la masa muscular de forma magra sin aumentar el porcentaje de grasa.",   category: "home", levels: 3,  img: "https://d10422z5a9xpxu.cloudfront.net/V2/staging/programs/5eeb86f7cb596824b0c7e2ff/1655878808252.jpg" },
    { id: 2, name: "Entrenamiento con tu propio peso",  desc: "Entrena con tu propio peso corporal sin necesidad de equipamiento adicional.",                     category: "home", levels: 4,  img: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1648024721296.jpg" },
    { id: 3, name: "Novatos hogareños",                 desc: "Para personas con poca o nula experiencia que quieren entrenar desde su hogar.",                   category: "home", levels: 2,  img: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1648026106702.jpg" },
    { id: 4, name: "Prueba Beta 2.0",                   desc: "Programa de hipertrofia de alta intensidad diseñado para usuarios beta de la nueva app.",          category: "gym",  levels: 12, img: "https://d3gfgejixr95u4.cloudfront.net/app/staging/programs/5eeb86f7cb596824b0c7e2ff/1Cntax90vQ-programa%20beta.png" },
    { id: 5, name: "Pérdida de grasa",                  desc: "Pierde la mayor cantidad de grasa posible en el menor tiempo sin perder masa muscular.",           category: "home", levels: 6,  img: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1646898005757.jpg" },
    { id: 6, name: "Recomposición corporal",            desc: "Pierde esa última capa de grasa mientras aumentas tu masa muscular.",                              category: "gym",  levels: 8,  img: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1646896097969.jpg" },
    { id: 7, name: "Pérdida de grasa hogareño",         desc: "Lo mismo que pérdida de grasa, pero desde la comodidad de tu hogar.",                             category: "home", levels: 2,  img: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1648025172566.jpg" },
    { id: 8, name: "Recomposición corporal hogareño",   desc: "Pierde grasa y gana músculo desde la comodidad de tu hogar.",                                     category: "home", levels: 5,  img: "https://d10422z5a9xpxu.cloudfront.net/V2/programs/5eeb86f7cb596824b0c7e2ff/1648024087598.jpg" },
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
