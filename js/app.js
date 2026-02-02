// Initialization and event handling

import { routesData } from "./routes-data.js";
import { Calculator } from "./calculator.js";
import { UI } from "./ui.js";
import { compensationProjects, transportModes } from "./config.js";

class App {
  constructor() {
    this.selectedTransport = null;
    this.currentDistance = 0;
    this.currentOrigin = "";
    this.currentDestination = "";
    this.form = document.getElementById("co2Form");
    this.init();
  }

  init() {
    this.setupEventListeners();
    UI.populateRoutes();
    UI.populateTransportButtons();
    UI.populateCompensationOptions();
  }

  setupEventListeners() {
    // Route selection
    const routeSelect = document.getElementById("predefinedRoutes");
    routeSelect.addEventListener("change", (e) => this.handleRouteChange(e));

    // Form submission
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.calculate();
    });

    // Form reset
    this.form.addEventListener("reset", (e) => {
      // Need to reset after the form values are cleared
      setTimeout(() => this.handleFormReset(), 0);
    });

    // Transport selection
    document.addEventListener("click", (e) => {
      if (e.target.closest(".transport-btn")) {
        this.handleTransportSelection(e.target.closest(".transport-btn"));
      }
    });

    // Compensation buttons
    document.addEventListener("click", (e) => {
      if (e.target.closest(".carbon-card button")) {
        this.handleCompensation(e.target.closest(".carbon-card button"));
      }
    });

    // Update distance when typing
    document.getElementById("customDistance").addEventListener("change", (e) => {
      this.currentDistance = parseFloat(e.target.value) || 0;
    });

    // Update origin/destination
    document.getElementById("customOrigin").addEventListener("change", (e) => {
      this.currentOrigin = e.target.value;
    });

    document.getElementById("customDestination").addEventListener("change", (e) => {
      this.currentDestination = e.target.value;
    });
  }

  handleRouteChange(event) {
    const routeId = event.target.value;
    if (routeId) {
      const route = routesData.find(r => r.id == routeId);
      if (route) {
        this.currentDistance = route.distance;
        this.currentOrigin = route.origin;
        this.currentDestination = route.destination;
        
        document.getElementById("customOrigin").value = route.origin;
        document.getElementById("customDestination").value = route.destination;
        document.getElementById("customDistance").value = route.distance;
      }
    }
  }

  handleTransportSelection(button) {
    document.querySelectorAll(".transport-btn").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    this.selectedTransport = button.dataset.transport;
  }

  calculate() {
    const origin = document.getElementById("customOrigin").value;
    const destination = document.getElementById("customDestination").value;
    const distance = parseFloat(document.getElementById("customDistance").value);

    if (!origin || !destination || isNaN(distance) || distance <= 0) {
      alert("Por favor, preencha todos os campos corretamente");
      return;
    }

    if (!this.selectedTransport) {
      alert("Por favor, selecione um tipo de transporte");
      return;
    }

    this.currentDistance = distance;
    this.currentOrigin = origin;
    this.currentDestination = destination;

    const emission = Calculator.calculateEmission(distance, this.selectedTransport);
    const allEmissions = Calculator.calculateAllEmissions(distance);
    
    const selectedModeData = transportModes.find(t => t.id === this.selectedTransport);
    
    this.displayResults(emission, distance, selectedModeData.name, origin, destination);
    this.displayComparison(allEmissions, this.selectedTransport, emission);
    this.displayCompensationOptions();
  }

  displayResults(emission, distance, transport, origin, destination) {
    const resultBox = document.getElementById("resultBox");
    const resultValue = document.getElementById("resultValue");
    const resultDetails = document.getElementById("resultDetails");

    resultValue.textContent = `${emission} kg`;
    resultDetails.textContent = `De ${origin} para ${destination} usando ${transport}`;

    document.getElementById("resultSection").classList.add("active");
  }

  displayComparison(allEmissions, selectedMode, selectedEmission) {
    const comparisonBody = document.getElementById("comparisonBody");
    comparisonBody.innerHTML = "";

    Object.entries(allEmissions).forEach(([mode, emission]) => {
      const modeData = transportModes.find(t => t.id === mode);
      
      // Calculate percentage difference
      let percentageText = "";
      if (selectedEmission > 0) {
        const difference = ((emission - selectedEmission) / selectedEmission) * 100;
        if (difference < 0) {
          percentageText = `${Math.abs(difference).toFixed(1)}% menos`;
        } else if (difference > 0) {
          percentageText = `${difference.toFixed(1)}% mais`;
        } else {
          percentageText = "igual";
        }
      } else {
        // Se o transporte selecionado tem 0 emissão (bicicleta)
        if (emission > 0) {
          percentageText = "100% mais";
        } else {
          percentageText = "igual";
        }
      }

      const row = document.createElement("tr");
      row.innerHTML = `
        <td><strong>${modeData.name}</strong></td>
        <td>${emission} kg</td>
        <td>${mode === selectedMode ? "Seu transporte" : percentageText}</td>
      `;

      comparisonBody.appendChild(row);
    });

    document.getElementById("comparisonSection").classList.add("active");
  }

  displayCompensationOptions() {
    document.getElementById("carbonSection").classList.add("active");
  }

  handleCompensation(button) {
    const card = button.closest(".carbon-card");
    const projectName = card.querySelector("h3").textContent;
    const project = compensationProjects.find(p => p.name === projectName);
    
    const resultValue = document.getElementById("resultValue").textContent;
    const emissionMatch = resultValue.match(/[\d.]+/);
    
    if (emissionMatch) {
      const emission = parseFloat(emissionMatch[0]);
      const cost = Calculator.calculateCompensationCost(emission, project.costPerTon);
      alert(`🎉 Parabéns!\n\nSua contribuição de R$ ${cost} para o projeto ${project.name} foi registrada com sucesso!\n\nObrigado por ajudar a proteger nosso planeta! 🌍`);
    }
  }

  handleFormReset() {
    // Hide result sections
    document.getElementById("resultSection").classList.remove("active");
    document.getElementById("comparisonSection").classList.remove("active");
    document.getElementById("carbonSection").classList.remove("active");

    // Clear selection
    document.querySelectorAll(".transport-btn").forEach(btn => btn.classList.remove("active"));
    this.selectedTransport = null;
    
    // Reset state
    this.currentDistance = 0;
    this.currentOrigin = "";
    this.currentDestination = "";
  }
}

// Start app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new App();
});
