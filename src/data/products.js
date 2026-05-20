const products = [
  {
    id: 1,
    name: "Microfono Quasar GM200",
    description: "El Quasar constituye el salto de calidad sonoro que necesitas para afrontar el streaming con profesionalismo. Un micrófono de condensador que captura la voz con nitidez excelente sin requerir de tu parte conocimientos técnicos sofisticados en ingeniería de sonido. Simple, práctico, efectivo.",
    stock: 5,
    image: "/img/QUAZAR-1.png",
    price: 540,
    category: "streaming"
  },
  {
    id: 2,
    name: "Webcam Hitman GW800",
    description: "Transmite, enseña, entretiene; muéstrate haciendo lo que mejor haces. La Hitman es la herramienta perfecta para ello: una webcam diseñada específicamente para streaming, que se adapta a las necesidades precisas de los nuevos y futuros creadores de contenido del gaming y la tecnología",
    stock: 2,
    image: "/img/HITMAN-800.png",
    price: 310,
    category: "streaming"
  },
  {
    id: 3,
    name: "Mouse King M724",
    description: "El K1ng es un ratón híper competitivo que esquiva los ornamentos innecesarios para concentrarse plenamente en el rendimiento.",
    stock: 6,
    image: "/img/KING-M724-B.png",
    price: 300,
    category: "mouse"
  },
  {
    id: 4,
    name: "Mouse M601RGB",
    description: "Por su muy buen diseño, por su excelente rendimiento, por su prolongada vida útil, el Centrophorus es y seguirá siendo uno de los grandes preferidos del público. Sencillamente, sabes que puedes confiar en él.",
    stock: 16,
    image: "/img/CETROPHORUS-RGB.png",
    price: 200,
    category: "mouse"
  },
  {
    id: 5,
    name: "Auriculares Lamia 2 H320",
    description: "Todos los componentes de los Lamia2 están diseñados para durar. La diadema metálica y el brazo flexible del micrófono admiten una enorme amplitud de tensión, el cable resiste miles de flexiones, y la firme armazón de las copas, a prueba de golpes, protege fiablemente los componentes internos. ¡Son muy sólidos!",
    stock: 7,
    image: "/img/LAMIA.png",
    price: 260,
    category: "auriculares"
  },
  {
    id: 6,
    name: "Auriculares Ares H120",
    description: "Con su bajo peso y sus generosas almohadillas en las copas y en la vincha, los Ares realmente minimizan el estrés del contacto y resultan muy cómodos, incluso en el uso prolongado.",
    stock: 8,
    image: "/img/ARES.png",
    price: 450,
    category: "auriculares"
  }
]

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(products.length === 0){
        reject("No hay productos disponibles para mostrar")
      }else{
        resolve(products);
      }
    }, 3000);
  });
};