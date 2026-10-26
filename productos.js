const PRODUCTOS = [
  {
    id: 'proteina-chocolate',
    nombre: 'Proteína de Chocolate',
    precio: 70,
    imagen: 'proteina.png',
    descripcion: 'Proteína aislada de suero sabor chocolate, diseñada para una recuperación completa y una mezcla suave después de cada entrenamiento.',
    neto: '2 kg',
    porcion: '25 g',
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
    imagen: 'Imagen de ChatGPT 23 oct 2026, 20_39_26-1.png',
    descripcion: 'Proteína de suero sabor vainilla, ideal para acompañar tus desayunos y batidos post-entrenamiento con un sabor suave y cremoso.',
    neto: '2 kg',
    porcion: '25 g',
    porciones: 60,
    detalle: 'Sabor vainilla · 25 g de proteína por porción · Sin gluten.',
    beneficio1: 'Sabor suave',
    texto1: 'Perfecto para batidos y recetas.',
    beneficio2: 'Fórmula limpia',
    texto2: 'Baja en azúcar, sin gluten.',
    beneficio3: 'Uso recomendado',
    texto3: 'Mezcla una medida con agua o leche.'
  },
  {
    id: 'pre-entreno',
    nombre: 'Pre-Entreno Explosivo',
    precio: 45,
    imagen: 'Imagen de ChatGPT 23 oct 2026, 20_39_27-2.png',
    descripcion: 'Suplemento pre-entreno con cafeína y beta-alanina para aumentar la energía, el enfoque y el rendimiento durante tus sesiones más intensas.',
    neto: '300 g',
    porcion: '10 g',
    porciones: 30,
    detalle: 'Con cafeína · Mejora el enfoque · Energía inmediata.',
    beneficio1: 'Energía inmediata',
    texto1: 'Para entrenos más intensos.',
    beneficio2: 'Mejor enfoque',
    texto2: 'Con cafeína y beta-alanina.',
    beneficio3: 'Uso recomendado',
    texto3: 'Toma 20-30 min antes de entrenar.'
  },
  {
    id: 'creatina',
    nombre: 'Creatina Monohidratada',
    precio: 35,
    imagen: 'Imagen de ChatGPT 23 oct 2026, 20_39_28-3.png',
    descripcion: 'Creatina monohidratada micronizada para aumentar la fuerza, la potencia y la recuperación muscular entre series.',
    neto: '500 g',
    porcion: '5 g',
    porciones: 100,
    detalle: 'Micronizada · 5 g por porción · Sabor neutro.',
    beneficio1: 'Más fuerza',
    texto1: 'Aumenta potencia y rendimiento.',
    beneficio2: 'Recuperación',
    texto2: 'Ayuda entre series y entrenos.',
    beneficio3: 'Uso recomendado',
    texto3: '5 g al día, mezcla con agua.'
  },
  {
    id: 'bcaa',
    nombre: 'BCAA Recovery',
    precio: 30,
    imagen: 'Imagen de ChatGPT 23 oct 2026, 20_39_29-4.png',
    descripcion: 'Aminoácidos ramificados (BCAA) en ratio 2:1:1 para proteger la masa muscular y reducir la fatiga durante y después del entrenamiento.',
    neto: '400 g',
    porcion: '10 g',
    porciones: 40,
    detalle: 'Ratio 2:1:1 · Recuperación muscular · Reduce la fatiga.',
    beneficio1: 'Protege el músculo',
    texto1: 'Reduce el catabolismo muscular.',
    beneficio2: 'Menos fatiga',
    texto2: 'Durante y después del entreno.',
    beneficio3: 'Uso recomendado',
    texto3: '10 g durante o después de entrenar.'
  }
];

function buscarProducto(id) {
  return PRODUCTOS.find(p => p.id === id) || PRODUCTOS[0];
}

function getParam(name) {
  return new URLSearchParams(location.search).get(name);
}
