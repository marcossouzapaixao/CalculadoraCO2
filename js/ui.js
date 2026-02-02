// UI manager and rendering

import { routesData } from "./routes-data.js";
import { transportModes, compensationProjects } from "./config.js";

class UI {
  static populateRoutes() {
    const routeSelect = document.getElementById("predefinedRoutes");
    
    routeSelect.innerHTML = '<option value="">Selecione uma rota pré-definida</option>';
    
    routesData.forEach(route => {
      const option = document.createElement("option");
      option.value = route.id;
      option.textContent = `${route.origin} → ${route.destination} (${route.distance} km)`;
      routeSelect.appendChild(option);
    });
  }

  static populateTransportButtons() {
    const transportContainer = document.getElementById("transportOptions");
    transportContainer.innerHTML = "";
    
    transportModes.forEach(mode => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "transport-btn";
      button.dataset.transport = mode.id;
      button.innerHTML = `<span class="transport-emoji">${mode.icon}</span><span class="transport-label">${mode.name}</span>`;
      transportContainer.appendChild(button);
    });
  }

  static populateCompensationOptions() {
    const compensationContainer = document.getElementById("carbonOptions");
    compensationContainer.innerHTML = "";
    
    compensationProjects.forEach(project => {
      const div = document.createElement("div");
      div.className = "carbon-card";
      div.innerHTML = `
        <h3>${project.icon} ${project.name}</h3>
        <p>${project.description}</p>
        <div class="carbon-price">R$ ${project.costPerTon.toFixed(2)}</div>
        <p>por tonelada de CO2</p>
        <button type="button" class="btn-submit">Contribuir</button>
      `;
      compensationContainer.appendChild(div);
    });
  }

  static showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 3000);
  }
}

export { UI };
