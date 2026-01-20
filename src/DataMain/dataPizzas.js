
import { EntrantesImages, EnsaladasImages, PizzasImages } from './imagenesCarta.js';

export const cartaPizzeria = [
  { 
    id: 100, 
    categoria: "Entrantes",
    precio: "7,60€", 
    url: EntrantesImages.ruedaMixta,
    alergenos: ['lacteos']
  },
  { 
    id: 101, 
    categoria: "Entrantes", 
    precio: "4,40€", 
    url: EntrantesImages.patatas,
    alergenos: []
  },
  { 
    id: 102, 
    categoria: "Entrantes", 
    precio: "5,00€", 
    url: EntrantesImages.patatasGajo,
    alergenos: [] 
  },
  { 
    id: 103, 
    categoria: "Entrantes", 
    precio: "2,60€", 
    url: EntrantesImages.panAjo,
    alergenos: ['gluten']
  },
  { 
    id: 104, 
    categoria: "Entrantes", 
    precio: "6,60€", 
    url: EntrantesImages.dados,
    alergenos: ['gluten', 'lacteos']
  },
  { 
    id: 105, 
    categoria: "Entrantes", 
    precio: "2,60€", 
    url: EntrantesImages.jalapenos,
    alergenos: ['lacteos']
  },
  { 
    id: 106, 
    categoria: "Entrantes", 
    precio: "8,50€", 
    url: EntrantesImages.periquitos,
    alergenos: ['huevos', 'gluten']
  },
  { 
    id: 107, 
    categoria: "Entrantes", 
    precio: "2,50€", 
    url: EntrantesImages.croquetas,
    alergenos: ['huevos', 'gluten', 'lacteos']
  },
  { 
    id: 108, 
    categoria: "Entrantes", 
    precio: "2,30€", 
    url: EntrantesImages.saquitos,
    alergenos: ['lacteos']
  },
  { 
    id: 109, 
    categoria: "Entrantes", 
    precio: "5,00€", 
    url: EntrantesImages.papasBravas,
    alergenos: ['huevos'] // Por el allioli
  },
  { 
    id: 110, 
    categoria: "Entrantes", 
    precio: "8,50€", 
    url: EntrantesImages.entranteBerenjena,
    alergenos: ['huevos', 'gluten']
  },
  
  // --- ENSALADAS (200+) ---
  { 
    id: 200, 
    categoria: "Ensaladas", 
    precio: "7,50€",
    url: EnsaladasImages.ensModena,
    alergenos: ['lacteos']
  },
  { 
    id: 201, 
    categoria: "Ensaladas", 
    precio: "7,70€",
    url: EnsaladasImages.ensLaNova,
    alergenos: ['crustaceos', 'pescado']
  },
  { 
    id: 202, 
    categoria: "Ensaladas", 
    precio: "6,90€",
    url: EnsaladasImages.ensMixta,
    alergenos: ['pescado', 'huevos']
  },
  { 
    id: 203, 
    categoria: "Ensaladas", 
    precio: "7,10€",
    url: EnsaladasImages.ensRica,
    alergenos: ['lacteos']
  },
  { 
    id: 204, 
    categoria: "Ensaladas", 
    precio: "7,50€",
    url: EnsaladasImages.ensTropical,
    alergenos: []
  },
  { 
    id: 205, 
    categoria: "Ensaladas", 
    precio: "7,50€",
    url: EnsaladasImages.ensExotica,
    alergenos: ['pescado']
  },
  { 
    id: 206, 
    categoria: "Ensaladas",
    precio: "8,20€",
    url: EnsaladasImages.ensCesar,
    alergenos: ['gluten', 'lacteos']
  },

  // --- PIZZAS (300+) ---
  { 
    id: 300, 
    categoria: "Pizzas", 
    precio: { pequena: "6,30€", grande: "8,40€" },
    url: PizzasImages.margarita,
    alergenos: ['gluten', 'lacteos']
  },
  { 
    id: 301, 
    categoria: "Pizzas", 
    precio: { pequena: "6,90€", grande: "9,00€" },
    url: PizzasImages.jamon,
    alergenos: ['gluten', 'lacteos']
  },
  { 
    id: 302, 
    categoria: "Pizzas",
    precio: { pequena: "7,50€", grande: "9,80€" },
    url: PizzasImages.catalana,
    alergenos: ['gluten', 'lacteos']
  },
  { 
    id: 303, 
    categoria: "Pizzas",
    precio: { pequena: "7,50€", grande: "9,80€" },
    url: PizzasImages.deBacon,
    alergenos: ['gluten', 'lacteos']
  },
  { 
    id: 304, 
    categoria: "Pizzas",
    precio: { pequena: "7,50€", grande: "9,80€" },
    url: PizzasImages.caprichosa,
    alergenos: ['gluten', 'lacteos']
  },
  { 
    id: 305, 
    categoria: "Pizzas",
    precio: { pequena: "7,50€", grande: "9,80€" },
    url: PizzasImages.napolitana,
    alergenos: ['pescado', 'gluten', 'lacteos']
  },
  { 
    id: 306, 
    categoria: "Pizzas",
    precio: { pequena: "7,50€", grande: "9,80€" },
    url: PizzasImages.romana,
    alergenos: ['gluten', 'lacteos']
  },
  { 
    id: 307, 
    categoria: "Pizzas",
    precio: { pequena: "8,00€", grande: "10,40€" },
    url: PizzasImages.boloñesa,
    alergenos: ['gluten', 'lacteos']
  },
  { 
    id: 308, 
    categoria: "Pizzas",
    precio: { pequena: "8,20€", grande: "10,60€" },
    url: PizzasImages.carbonara,
    alergenos: ['gluten', 'lacteos']
  },
  { 
    id: 309, 
    categoria: "Pizzas",
    precio: { pequena: "8,90€", grande: "10,80€" },
    url: PizzasImages.deSalmon,
    alergenos: ['pescado', 'gluten', 'lacteos']
  },
  { 
    id: 310, 
    categoria: "Pizzas",
    precio: { pequena: "7,90€", grande: "10,20€" },
    url: PizzasImages.deliciosa,
    alergenos: ['pescado', 'huevos', 'gluten', 'lacteos']
  },
  { 
    id: 311, 
    categoria: "Pizzas", 
    precio: { pequena: "8,80€", grande: "10,70€" },
    url: PizzasImages.cuatroEstaciones,
    alergenos: ['pescado', 'huevos', 'gluten', 'lacteos']
  },
  { 
    id: 312, 
    categoria: "Pizzas", 
    precio: { pequena: "7,80€", grande: "10,40€" },
    url: PizzasImages.delMonte,
    alergenos: ['gluten', 'lacteos']
  },
  { 
    id: 313, 
    categoria: "Pizzas", 
    precio: { pequena: "7,90€", grande: "10,20€" },
    url: PizzasImages.peperoni,
    alergenos: ['gluten', 'lacteos']
  },
  { 
    id: 314, 
    categoria: "Pizzas", 
    precio: { pequena: "8,20€", grande: "10,70€" },
    url: PizzasImages.torpedo,
    alergenos: ['huevos', 'gluten', 'lacteos']
  },
  { 
    id: 315, 
    categoria: "Pizzas", 
    precio: { pequena: "9,20€", grande: "11,20€" },
    url: PizzasImages.especial,
    alergenos: ['pescado', 'gluten', 'lacteos']
  },
  { 
    id: 316, 
    categoria: "Pizzas", 
    precio: { pequena: "8,00€", grande: "10,40€" },
    url: PizzasImages.cuatroQuesos,
    alergenos: ['gluten', 'lacteos']
  },
  { 
    id: 317, 
    categoria: "Pizzas", 
    precio: { pequena: "8,00€", grande: "10,40€" },
    url: PizzasImages.mezclada,
    alergenos: ['gluten', 'lacteos']
  },
  { 
    id: 318, 
    categoria: "Pizzas", 
    precio: { pequena: "8,00€", grande: "10,40€" },
    url: PizzasImages.vegetal,
    alergenos: ['gluten', 'lacteos']
  },
  { 
    id: 319, 
    categoria: "Pizzas", 
    precio: { pequena: "7,60€", grande: "10,00€" },
    url: PizzasImages.tropical,
    alergenos: ['gluten', 'lacteos']
  },
  { 
    id: 320, 
    categoria: "Pizzas", 
    precio: { pequena: "7,60€", grande: "10,00€" },
    url: PizzasImages.mixta,
    alergenos: ['pescado', 'gluten', 'lacteos']
  },
  { 
    id: 321, 
    categoria: "Pizzas", 
    precio: { pequena: "8,30€", grande: "10,80€" },
    url: PizzasImages.conCostra,
    alergenos: ['huevos', 'gluten', 'lacteos']
  },
  { 
    id: 322, 
    categoria: "Pizzas", 
    precio: { pequena: "7,50€", grande: "10,00€" },
    url: PizzasImages.siciliana,
    alergenos: ['pescado', 'gluten', 'lacteos']
  },
  { 
    id: 323, 
    categoria: "Pizzas", 
    precio: { pequena: "8,50€", grande: "11,10€" },
    url: PizzasImages.ranchera,
    alergenos: ['gluten', 'lacteos']
  },
  { 
    id: 324, 
    categoria: "Pizzas", 
    precio: { pequena: "9,30€", grande: "11,50€" },
    url: PizzasImages.calzone,
    alergenos: ['pescado', 'huevos', 'gluten', 'lacteos']
  },
  { 
    id: 325, 
    categoria: "Pizzas", 
    precio: { pequena: "7,80€", grande: "10,40€" },
    url: PizzasImages.huertana,
    alergenos: ['gluten', 'lacteos']
  },
  { 
    id: 326, 
    categoria: "Pizzas", 
    precio: { pequena: "8,90€", grande: "10,80€" },
    url: PizzasImages.marinera,
    alergenos: ['crustaceos', 'pescado', 'gluten', 'lacteos']
  },
  { 
    id: 327, 
    categoria: "Pizzas", 
    precio: { pequena: "8,50€", grande: "11,10€" },
    url: PizzasImages.barbacoa,
    alergenos: ['gluten', 'lacteos']
  },
  { 
    id: 328, 
    categoria: "Pizzas", 
    precio: { pequena: "8,40€", grande: "11,00€" },
    url: PizzasImages.pompeya,
    alergenos: ['gluten', 'lacteos']
  },

  // --- PASTAS (400+) ---
  { 
    id: 400, 
    categoria: "Pastas", 
    precio: "9,30€",
    alergenos: ['lacteos']
  },
  { 
    id: 401, 
    categoria: "Pastas", 
    precio: "9,20€",
    alergenos: ['lacteos']
  },
  { 
    id: 402, 
    categoria: "Pastas", 
    precio: "9,40€",
    alergenos: ['lacteos']
  },
  { 
    id: 403, 
    categoria: "Pastas", 
    precio: "9,60€",
    alergenos: ['lacteos']
  },
  { 
    id: 404, 
    categoria: "Pastas", 
    precio: "8,00€",
    alergenos: []
  },
  { 
    id: 405, 
    categoria: "Pastas", 
    precio: "8,20€",
    alergenos: ['lacteos']
  },
  { 
    id: 406, 
    categoria: "Pastas", 
    precio: "8,00€",
    alergenos: []
  },
  { 
    id: 407, 
    categoria: "Pastas", 
    precio: "7,30€",
    alergenos: []
  },
  { 
    id: 408, 
    categoria: "Pastas", 
    precio: "8,20€",
    alergenos: ['lacteos']
  },
  { 
    id: 409, 
    categoria: "Pastas", 
    precio: "8,20€",
    alergenos: []
  },
  { 
    id: 410, 
    categoria: "Pastas", 
    precio: "8,20€",
    alergenos: ['lacteos']
  },

  // --- CARNES (500+) ---
  { 
    id: 500, 
    categoria: "Carnes", 
    nombre: "Pollo a la Plancha", 
    desc_es: "Con guarnición.", 
    precio: "13,10€" 
  },
  { 
    id: 501, 
    categoria: "Carnes", 
    nombre: "Pollo a la Pimienta", 
    desc_es: "Con salsa pimienta.", 
    precio: "14,20€" 
  },
  { 
    id: 502, 
    categoria: "Carnes", 
    nombre: "Pollo al Roquefort", 
    desc_es: "Con salsa roquefort.", 
    precio: "14,30€" 
  },
  { 
    id: 503, 
    categoria: "Carnes", 
    nombre: "Pollo a la Milanesa", 
    desc_es: "Empanado crujiente.", 
    precio: "14,20€" 
  },

  // --- POSTRES (600+) ---
  { 
    id: 600, 
    categoria: "Postres", 
    nombre: "Tarta de Queso", 
    desc_es: "Casera.", 
    precio: "5,00€" 
  },
  { 
    id: 601, 
    categoria: "Postres", 
    nombre: "Tarta 3 Chocolates", 
    desc_es: "Casera.", 
    precio: "5,00€" 
  },
  { 
    id: 602, 
    categoria: "Postres", 
    nombre: "Tarta de Lotus", 
    desc_es: "Sabor galleta Lotus.", 
    precio: "5,00€" 
  },
  { 
    id: 603, 
    categoria: "Postres", 
    nombre: "Brownie", 
    desc_es: "Con chocolate y nueces.", 
    precio: "5,10€" 
  },

  // --- BEBIDAS (700+) ---
  { 
    id: 700, 
    categoria: "Bebidas", 
    nombre: "Cerveza Mahou (Tercio)", 
    desc_es: "Mahou, Radler o Tostada 0,0.", 
    precio: "2,50€" 
  },
  { 
    id: 701, 
    categoria: "Bebidas", 
    nombre: "Refrescos (Bote)", 
    desc_es: "Coca-cola, Fanta, Aquarius, Nestea.", 
    precio: "2,30€" 
  },
  { 
    id: 702, 
    categoria: "Bebidas", 
    nombre: "Sangría (Jarra)", 
    desc_es: "Receta de la casa.", 
    precio: "8,30€" 
  },
  { 
    id: 703, 
    categoria: "Bebidas", 
    nombre: "Vino de la Casa", 
    desc_es: "Copa de tinto, blanco o rosado.", 
    precio: "1,80€" 
  }
];