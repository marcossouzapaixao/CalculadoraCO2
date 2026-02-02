// Calculation logic

import { emissionFactors } from "./config.js";

class Calculator {
  static calculateEmission(distance, transportMode) {
    const factor = emissionFactors[transportMode] || 0;
    return (distance * factor).toFixed(3);
  }

  static calculateAllEmissions(distance) {
    const results = {};
    Object.entries(emissionFactors).forEach(([mode, factor]) => {
      results[mode] = this.calculateEmission(distance, mode);
    });
    return results;
  }

  static calculateCompensationCost(emissionKg, costPerTon) {
    const emissionTons = emissionKg / 1000;
    return (emissionTons * costPerTon).toFixed(2);
  }

  static getEmissionComparison(mainEmission, allEmissions) {
    const comparison = {};
    Object.entries(allEmissions).forEach(([mode, emission]) => {
      const percentageDifference = mainEmission > 0 
        ? (((emission - mainEmission) / mainEmission) * 100).toFixed(2)
        : 0;
      comparison[mode] = percentageDifference;
    });
    return comparison;
  }
}

export { Calculator };
