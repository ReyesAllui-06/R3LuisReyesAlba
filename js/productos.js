const PRODUCTOS = [
  {
    id: 'proteina-chocolate',
    nombre: 'Proteína de Chocolate',
    precio: 70,
    imagen: 'img/proteina.png',
    descripcion: 'Proteína aislada de suero sabor chocolate, diseñada para una recuperación completa y una mezcla suave después de cada entrenamiento.',
    neto: '2 kg',
    porcion: '25 g de proteína',
    porciones: 60,
    detalle: 'Sabor chocolate · Alta absorción · Baja en azúcar, sin gluten.',
    beneficio1: 'Rápida absorción',
    texto1: 'Ideal después de entrenar.',
    beneficio2: 'Fórmula limpia',
    texto2: 'Baja en azúcar, sin gluten.',
    beneficio3: 'Uso recomendado',
    texto3: 'Mezcla una medida con agua.'
  },
  {
    id: 'proteina-vainilla',
    nombre: 'Proteína de Vainilla',
    precio: 65,
    imagen: 'img/producto-01.png',
    descripcion: 'Proteína 100% whey aislada sabor vainilla, con 27 g de proteína por porción y absorción rápida.',
    neto: '2 kg',
    porcion: '27 g de proteína',
    porciones: 60,
    detalle: 'Sabor vainilla · 27 g de proteína por porción · Bajo en azúcar.',
    beneficio1: 'Rápida absorción',
    texto1: 'Ideal después de entrenar.',
    beneficio2: 'Sabor suave',
    texto2: 'Perfecta para batidos y recetas.',
    beneficio3: 'Uso recomendado',
    texto3: 'Mezcla una medida con agua o leche.'
  },
  {
    id: 'pre-workout-ignite',
    nombre: 'Pre-Workout Ignite',
    precio: 45,
    imagen: 'img/producto-04.png',
    descripcion: 'Pre-entreno con beta-alanina y citrulina para dar energía explosiva y enfoque en tus sesiones más intensas.',
    neto: '300 g',
    porcion: '7,5 g',
    porciones: 40,
    detalle: 'Sabor frutos rojos · Energía explosiva · Mejora el enfoque.',
    beneficio1: 'Energía explosiva',
    texto1: 'Para entrenos más intensos.',
    beneficio2: 'Enfoque',
    texto2: 'Pensado para entrenar con concentración.',
    beneficio3: 'Uso recomendado',
    texto3: 'Consulta la etiqueta antes de tomarlo.'
  },
  {
    id: 'creatina',
    nombre: 'Creatina Monohidratada',
    precio: 35,
    imagen: 'img/producto-03.png',
    descripcion: 'Creatina monohidratada 100% pura y sin sabor para aumentar la fuerza y la potencia en tus entrenamientos.',
    neto: '300 g',
    porcion: '5 g',
    porciones: 60,
    detalle: 'Sin sabor · 100% pura · 5 g por porción.',
    beneficio1: 'Más fuerza',
    texto1: 'Ayuda en entrenos de alta intensidad.',
    beneficio2: 'Fórmula pura',
    texto2: '100% creatina monohidratada.',
    beneficio3: 'Uso recomendado',
    texto3: 'Consulta la etiqueta antes de tomarla.'
  },
  {
    id: 'bcaa',
    nombre: 'BCAA 2:1:1 Sabor Limón',
    precio: 30,
    imagen: 'img/producto-05.png',
    descripcion: 'Aminoácidos ramificados (BCAA) en ratio 2:1:1 para la recuperación muscular y la resistencia durante tus entrenamientos.',
    neto: '400 g',
    porcion: '8 g',
    porciones: 50,
    detalle: 'Ratio 2:1:1 · Sabor limón · Sin azúcar.',
    beneficio1: 'Recuperación muscular',
    texto1: 'Apoyo después de entrenar.',
    beneficio2: 'Resistencia',
    texto2: 'Ayuda a rendir durante la sesión.',
    beneficio3: 'Uso recomendado',
    texto3: 'Consulta la etiqueta antes de tomarlo.'
  },
  {
    id: 'mass-gainer',
    nombre: 'Mass Gainer Cookies & Cream',
    precio: 55,
    imagen: 'img/producto-02.png',
    descripcion: 'Ganador de masa con 50 g de proteína y carbohidratos complejos para aportar energía en tus días de volumen.',
    neto: '3 kg',
    porcion: '50 g de proteína',
    porciones: 30,
    detalle: 'Sabor cookies & cream · 50 g de proteína por porción · Alta energía.',
    beneficio1: 'Ganancia de masa',
    texto1: 'Aporte alto de proteína y energía.',
    beneficio2: 'Carbohidratos complejos',
    texto2: 'Energía sostenida para entrenar.',
    beneficio3: 'Uso recomendado',
    texto3: 'Consulta la etiqueta antes de tomarlo.'
  },
  {
    id: 'glutamina',
    nombre: 'Glutamina Pure',
    precio: 30,
    imagen: 'img/producto-06.png',
    descripcion: 'Glutamina pura sin sabor para apoyar la recuperación muscular y el sistema inmune.',
    neto: '500 g',
    porcion: '5 g',
    porciones: 100,
    detalle: 'Sin sabor · Alta pureza · 5 g por porción.',
    beneficio1: 'Recuperación muscular',
    texto1: 'Apoyo después de entrenar.',
    beneficio2: 'Apoyo inmune',
    texto2: 'Ayuda al sistema inmune.',
    beneficio3: 'Uso recomendado',
    texto3: 'Consulta la etiqueta antes de tomarla.'
  },
  {
    id: 'caseina-micelar',
    nombre: 'Caseína Micelar Chocolate',
    precio: 60,
    imagen: 'img/producto-07.png',
    descripcion: 'Proteína de liberación lenta con 25 g de proteína por porción, ideal para tomar por la noche.',
    neto: '1,8 kg',
    porcion: '25 g de proteína',
    porciones: 50,
    detalle: 'Sabor chocolate · Liberación lenta · Ideal nocturno.',
    beneficio1: 'Liberación lenta',
    texto1: 'Aporte de proteína durante varias horas.',
    beneficio2: 'Saciedad',
    texto2: 'Ayuda a sentirte lleno por más tiempo.',
    beneficio3: 'Uso recomendado',
    texto3: 'Consulta la etiqueta antes de tomarla.'
  },
  {
    id: 'thermo-cut',
    nombre: 'Thermo Cut Fat Burner',
    precio: 40,
    imagen: 'img/producto-08.png',
    descripcion: 'Quemador de grasa termogénico en cápsulas, con energía y control de apetito para tu plan de definición.',
    neto: '120 cápsulas',
    porcion: '2 cápsulas',
    porciones: 60,
    detalle: 'Termogénico · Energía · Control de apetito.',
    beneficio1: 'Termogénico',
    texto1: 'Pensado para tu plan de definición.',
    beneficio2: 'Energía',
    texto2: 'Apoyo para entrenar con energía.',
    beneficio3: 'Uso recomendado',
    texto3: 'Consulta la etiqueta antes de tomarlo.'
  },
  {
    id: 'multivitaminico',
    nombre: 'Multivitamínico Sport',
    precio: 20,
    imagen: 'img/producto-09.png',
    descripcion: 'Multivitamínico con vitaminas y minerales para la energía diaria y el sistema inmune.',
    neto: '90 cápsulas',
    porcion: '2 cápsulas',
    porciones: 45,
    detalle: 'Vitaminas y minerales · Energía diaria · Sistema inmune.',
    beneficio1: 'Vitaminas y minerales',
    texto1: 'Complemento para tu dieta diaria.',
    beneficio2: 'Energía diaria',
    texto2: 'Apoyo para tu rutina de entrenamiento.',
    beneficio3: 'Uso recomendado',
    texto3: 'Consulta la etiqueta antes de tomarlo.'
  }
];

// ===== PRACTICA 4: NOVEDADES =====
// Productos nuevos que se muestran en la pagina de novedades.
const NOVEDADES = [
  {
    id: 'pack-volumen',
    nombre: 'Pack Volumen',
    precio: 99,
    antes: 130,
    imagen: 'img/producto-02.png',
    etiqueta: 'Oferta',
    descripcion: 'Pack para tus días de volumen: proteína de chocolate más un ganador de masa a un precio especial.',
    incluye: ['Proteína de Chocolate (2 kg)', 'Mass Gainer Cookies & Cream (3 kg)']
  },
  {
    id: 'pack-definicion',
    nombre: 'Pack Definición',
    precio: 69,
    antes: 90,
    imagen: 'img/producto-08.png',
    etiqueta: 'Nuevo',
    descripcion: 'Todo lo que necesitas para tu etapa de definición en un solo pack.',
    incluye: ['Thermo Cut Fat Burner', 'BCAA 2:1:1 Sabor Limón', 'Multivitamínico Sport']
  },
  {
    id: 'proteina-fresa',
    nombre: 'Proteína de Fresa (Edición limitada)',
    precio: 68,
    antes: 68,
    imagen: 'img/producto-01.png',
    etiqueta: 'Edición limitada',
    descripcion: 'Nuevo sabor fresa de nuestra proteína aislada. Solo por tiempo limitado.',
    incluye: ['Proteína aislada sabor fresa (2 kg)']
  }
];

function buscarNovedad(id) {
  return NOVEDADES.find(p => p.id === id) || NOVEDADES[0];
}

function buscarProducto(id) {
  return PRODUCTOS.find(p => p.id === id) || PRODUCTOS[0];
}

function getParam(name) {
  return new URLSearchParams(location.search).get(name);
}
