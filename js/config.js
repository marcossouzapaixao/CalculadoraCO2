// Configuration and emission factors

const emissionFactors = {
  bicycle: 0,      // kg CO2/km
  bus: 0.089,      // kg CO2/km
  car: 0.207,      // kg CO2/km
  truck: 0.097     // kg CO2/km
};

const compensationProjects = [
  { name: "Árvores", icon: "🌱", costPerTon: 50.00, description: "Plantação de árvores" },
  { name: "Energia Renovável", icon: "💧", costPerTon: 35.00, description: "Projetos de energia limpa" },
  { name: "Conservação", icon: "🏞️", costPerTon: 45.00, description: "Proteção de áreas naturais" },
  { name: "Educação Ambiental", icon: "🌍", costPerTon: 30.00, description: "Programas de conscientização" }
];

const transportModes = [
  { id: "bicycle", name: "Bicicleta", icon: "🚴", emission: emissionFactors.bicycle },
  { id: "bus", name: "Ônibus", icon: "🚌", emission: emissionFactors.bus },
  { id: "car", name: "Carro", icon: "🚗", emission: emissionFactors.car },
  { id: "truck", name: "Caminhão", icon: "🚚", emission: emissionFactors.truck }
];

export { emissionFactors, compensationProjects, transportModes };
