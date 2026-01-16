

import ruedaMixta from './assets/Entrantes/RuedaMixta.jpeg';
import patatas from './assets/Entrantes/Croquetas.jpeg';
import patatasGajo from './assets/Entrantes/Croquetas.jpeg';
import panAjo from './assets/Entrantes/PanDeAjo.jpeg';
import dados from './assets/Entrantes/DadosDeQueso.jpeg';
import jalapenos from './assets/Entrantes/Jalapeños.jpeg';
import periquitos from './assets/Entrantes/Periquitos.jpeg';
import croquetas from './assets/Entrantes/Croquetas.jpeg';
import saquitos from './assets/Entrantes/Croquetas.jpeg'; 
import papasBravas from './assets/Entrantes/PapasBravas.jpeg';
import entranteBerenjena from './assets/Entrantes/Croquetas.jpeg';

export const EntrantesImages = {
  ruedaMixta,
  patatas,
  patatasGajo,
  panAjo,
  dados,
  jalapenos,
  periquitos,
  croquetas,
  saquitos,
  papasBravas,
  entranteBerenjena
};

export const cartaPizzeria = [
  // --- ENTRADAS (100+) ---
  { 
    id: 100, 
    categoria: "Entrantes", 
    nombre: "Rueda paté y mixta", 
    desc_es: "Variedad de patés. La mixta es con quesos (el precio varía). Incluye pan.", 
    precio: "7,60€", 
    url: EntrantesImages.ruedaMixta
  },
  { 
    id: 101, 
    categoria: "Entrantes", 
    nombre: "Patatas", 
    desc_es: "Patatas fritas ración.", 
    precio: "4,40€", 
    url: EntrantesImages.patatas 
  },
  { 
    id: 102, 
    categoria: "Entrantes", 
    nombre: "Patatas Gajo", 
    desc_es: "Sazonadas estilo rústico.", 
    precio: "5,00€", 
    url: EntrantesImages.patatasGajo
  },
  { 
    id: 103, 
    categoria: "Entrantes", 
    nombre: "Pan de ajo (1 Ud.)", 
    desc_es: "Base de pan con ajo y aceite.", 
    precio: "2,60€", 
    url: EntrantesImages.panAjo
  },
  { 
    id: 104, 
    categoria: "Entrantes", 
    nombre: "Dados queso en tempura (6 Ud.)", 
    desc_es: "Servidos con salsa de tomate.", 
    precio: "6,60€", 
    url: EntrantesImages.dados 
  },
  { 
    id: 105, 
    categoria: "Entrantes", 
    nombre: "Crujiente de Jalapeño (2 Ud.)", 
    desc_es: "Jalapeños rellenos y rebozados.", 
    precio: "2,60€", 
    url: EntrantesImages.jalapenos
  },
  { 
    id: 106, 
    categoria: "Entrantes", 
    nombre: "Periquitos", 
    desc_es: "Trocitos de pollo rebozado.", 
    precio: "8,50€", 
    url: EntrantesImages.periquitos
  },
  { 
    id: 107, 
    categoria: "Entrantes", 
    nombre: "Croquetas (2 Ud.)", 
    desc_es: "Jamón ibérico, setas o carrillada.", 
    precio: "2,50€", 
    url: EntrantesImages.croquetas
  },
  { 
    id: 108, 
    categoria: "Entrantes", 
    nombre: "Saquitos de Queso de Cabra (2 Ud.)", 
    desc_es: "Crujiente relleno de queso.", 
    precio: "2,30€", 
    url: EntrantesImages.saquitos
  },
  { 
    id: 109, 
    categoria: "Entrantes", 
    nombre: "Papas Bravas", 
    desc_es: "Con allioli y pimentón.", 
    precio: "5,00€", 
    url: EntrantesImages.papasBravas
  },
  { 
    id: 110, 
    categoria: "Entrantes", 
    nombre: "Entrante de berenjena en Tempura", 
    desc_es: "Tomate, berenjena, cebolla frita, queso y miel de caña.", 
    precio: "8,50€", 
    url: EntrantesImages.entranteBerenjena
  },

  // --- ENSALADAS (200+) ---
  { 
    id: 200, 
    categoria: "Ensaladas", 
    nombre: "Ensalada Módena", 
    desc_es: "Lechuga, maíz, pasas, queso cabra, módena y miel.", 
    precio: "7,50€" 
  },
  { 
    id: 201, 
    categoria: "Ensaladas", 
    nombre: "Ensalada Nova Dolce", 
    desc_es: "Lechuga, arroz, atún, gambas y cangrejo.", 
    precio: "7,70€" 
  },
  { 
    id: 202, 
    categoria: "Ensaladas", 
    nombre: "Ensalada Mixta", 
    desc_es: "Lechuga, tomate, maíz, huevo, atún, cebolla y aceitunas.", 
    precio: "6,90€" 
  },
  { 
    id: 203, 
    categoria: "Ensaladas", 
    nombre: "Ensalada Rica", 
    desc_es: "Lechuga, maíz, queso, jamón york y nueces.", 
    precio: "7,10€" 
  },
  { 
    id: 204, 
    categoria: "Ensaladas", 
    nombre: "Ensalada Tropical", 
    desc_es: "Lechuga, tomate, arroz, palmito, maíz, zanahoria y jamón york.", 
    precio: "7,50€" 
  },
  { 
    id: 205, 
    categoria: "Ensaladas", 
    nombre: "Ensalada Exótica", 
    desc_es: "Lechuga, tomate, palmito, arroz, maíz y atún.", 
    precio: "7,50€" 
  },
  { 
    id: 206, 
    categoria: "Ensaladas", 
    nombre: "Ensalada César", 
    desc_es: "Lechuga, maíz, pollo, picatostes, parmesano, camembert y salsa césar.", 
    precio: "8,20€" 
  },

  // --- PIZZAS (300+) ---
  { 
    id: 300, 
    categoria: "Pizzas", 
    nombre: "Margarita", 
    desc_es: "Tomate, orégano y queso.", 
    precio: { pequena: "6,30€", grande: "8,40€" } 
  },
  { 
    id: 301, 
    categoria: "Pizzas", 
    nombre: "Jamón", 
    desc_es: "Tomate, jamón york y queso.", 
    precio: { pequena: "6,90€", grande: "9,00€" } 
  },
  { 
    id: 302, 
    categoria: "Pizzas", 
    nombre: "Catalana", 
    desc_es: "Tomate, jamón serrano y queso.", 
    precio: { pequena: "7,70€", grande: "9,80€" } 
  },
  { 
    id: 303, 
    categoria: "Pizzas", 
    nombre: "Bacon", 
    desc_es: "Tomate, bacon y queso.", 
    precio: { pequena: "7,70€", grande: "9,80€" } 
  },
  { 
    id: 304, 
    categoria: "Pizzas", 
    nombre: "Caprichosa", 
    desc_es: "Tomate, jamón serrano, chorizo, salami y queso.", 
    precio: { pequena: "7,70€", grande: "9,80€" } 
  },
  { 
    id: 305, 
    categoria: "Pizzas", 
    nombre: "Napolitana", 
    desc_es: "Tomate, anchoas y queso.", 
    precio: { pequena: "7,70€", grande: "9,80€" } 
  },
  { 
    id: 306, 
    categoria: "Pizzas", 
    nombre: "Romana", 
    desc_es: "Tomate, jamón york, champiñones y queso.", 
    precio: { pequena: "7,70€", grande: "9,80€" } 
  },
  { 
    id: 307, 
    categoria: "Pizzas", 
    nombre: "Boloñesa", 
    desc_es: "Tomate, salsa boloñesa y queso.", 
    precio: { pequena: "8,30€", grande: "10,40€" } 
  },
  { 
    id: 308, 
    categoria: "Pizzas", 
    nombre: "Carbonara", 
    desc_es: "Nata, pimienta, bacon y queso.", 
    precio: { pequena: "8,50€", grande: "10,60€" } 
  },
  { 
    id: 309, 
    categoria: "Pizzas", 
    nombre: "Deliciosa", 
    desc_es: "Tomate, cebolla, atún, huevo y queso.", 
    precio: { pequena: "8,10€", grande: "10,20€" } 
  },
  { 
    id: 310, 
    categoria: "Pizzas", 
    nombre: "4 Estaciones", 
    desc_es: "Romana, salmón, deliciosa y campestre.", 
    precio: { pequena: "8,60€", grande: "10,70€" } 
  },
  { 
    id: 311, 
    categoria: "Pizzas", 
    nombre: "Del Monte", 
    desc_es: "Tomate, champiñón, bacon, queso cabra y queso.", 
    precio: { pequena: "8,30€", grande: "10,40€" } 
  },
  { 
    id: 312, 
    categoria: "Pizzas", 
    nombre: "Peperoni", 
    desc_es: "Tomate, peperoni y queso.", 
    precio: { pequena: "8,10€", grande: "10,20€" } 
  },
  { 
    id: 313, 
    categoria: "Pizzas", 
    nombre: "Torpedo", 
    desc_es: "Tomate, cebolla, salami, chorizo, huevo y queso.", 
    precio: { pequena: "8,60€", grande: "10,70€" } 
  },
  { 
    id: 314, 
    categoria: "Pizzas", 
    nombre: "4 Quesos", 
    desc_es: "Tomate, emmental, mozzarella, roquefort y parmesano.", 
    precio: { pequena: "8,30€", grande: "10,40€" } 
  },
  { 
    id: 315, 
    categoria: "Pizzas", 
    nombre: "Vegetal", 
    desc_es: "Tomate, salsa roquefort, espinacas y queso.", 
    precio: { pequena: "8,30€", grande: "10,40€" } 
  },
  { 
    id: 316, 
    categoria: "Pizzas", 
    nombre: "Tropical", 
    desc_es: "Tomate, jamón york, piña y queso.", 
    precio: { pequena: "7,90€", grande: "10,00€" } 
  },
  { 
    id: 317, 
    categoria: "Pizzas", 
    nombre: "Barbacoa", 
    desc_es: "Tomate, cebolla, carne picada, pollo, bacon, salsa barbacoa y queso.", 
    precio: { pequena: "9,00€", grande: "11,10€" } 
  },
  { 
    id: 318, 
    categoria: "Pizzas", 
    nombre: "Pompeya", 
    desc_es: "Tomate, peperoni, salami, cebolla, carne picada y queso.", 
    precio: { pequena: "8,90€", grande: "11,00€" } 
  },

  // --- PASTAS (400+) ---
  { 
    id: 400, 
    categoria: "Pastas", 
    nombre: "Lasaña", 
    desc_es: "Boloñesa, bechamel y queso.", 
    precio: "9,30€" 
  },
  { 
    id: 401, 
    categoria: "Pastas", 
    nombre: "Lasaña de Espinacas", 
    desc_es: "Espinacas, bechamel y queso.", 
    precio: "9,20€" 
  },
  { 
    id: 402, 
    categoria: "Pastas", 
    nombre: "Canelones", 
    desc_es: "Carne picada, bechamel y queso.", 
    precio: "9,60€" 
  },
  { 
    id: 403, 
    categoria: "Pastas", 
    nombre: "Espagueti Boloñesa", 
    desc_es: "Pasta larga con salsa boloñesa.", 
    precio: "8,00€" 
  },
  { 
    id: 404, 
    categoria: "Pastas", 
    nombre: "Espagueti Carbonara", 
    desc_es: "Nata, bacon, pimienta y queso.", 
    precio: "8,20€" 
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