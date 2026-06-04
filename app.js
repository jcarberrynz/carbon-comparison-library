// CarbonLib — app.js

(function () {
  "use strict";

  // ─── State ──────────────────────────────────────────────────────
  let currentCat = "all";
  let currentSort = "impact-desc";
  let searchTerm = "";

  // ─── Elements ───────────────────────────────────────────────────
  const grid = document.getElementById("cards-grid");
  const emptyState = document.getElementById("empty-state");
  const searchInput = document.getElementById("search");
  const clearBtn = document.getElementById("clear-btn");
  const sortSelect = document.getElementById("sort-select");
  const resultsLabel = document.getElementById("results-label");
  const totalCount = document.getElementById("total-count");
  const modalOverlay = document.getElementById("modal-overlay");
  const modalClose = document.getElementById("modal-close");
  const modalContent = document.getElementById("modal-content");

  // ─── Category colours ───────────────────────────────────────────
  const CAT_CONFIG = {
    food: { colour: "#2d8f4e", bg: "#e6f7ec", label: "Food & Drink" },
    travel: { colour: "#1a6fbc", bg: "#e3f0fc", label: "Travel" },
    energy: { colour: "#c47a1a", bg: "#fdf3e3", label: "Home & Energy" },
    shopping: { colour: "#8e3bbf", bg: "#f3e8fc", label: "Shopping" },
    digital: { colour: "#1a7a8a", bg: "#e2f5f7", label: "Digital" },
    nature: { colour: "#2a7a3a", bg: "#eaf5ec", label: "Nature" },
  };

  // ─── Helpers ────────────────────────────────────────────────────
  function formatCO2(kg) {
    if (kg < 0) return `−${Math.abs(kg).toFixed(kg > -1 ? 3 : kg > -10 ? 2 : 0)} kg CO₂e`;
    if (kg < 0.001) return `${(kg * 1000).toFixed(2)}g CO₂e`;
    if (kg < 1) return `${(kg * 1000).toFixed(0)}g CO₂e`;
    if (kg < 10) return `${kg.toFixed(2)} kg CO₂e`;
    if (kg < 1000) return `${Math.round(kg)} kg CO₂e`;
    return `${(kg / 1000).toFixed(1)} tonnes CO₂e`;
  }

  function impactLevel(kg) {
    const absKg = Math.abs(kg);
    if (kg < 0) return { label: "Sequesters carbon 🌱", class: "impact-sequester" };
    if (absKg < 0.1) return { label: "Negligible", class: "impact-negligible" };
    if (absKg < 1) return { label: "Low", class: "impact-low" };
    if (absKg < 10) return { label: "Moderate", class: "impact-moderate" };
    if (absKg < 100) return { label: "High", class: "impact-high" };
    return { label: "Very high", class: "impact-very-high" };
  }

  function impactBar(kg) {
    const max = 3000;
    if (kg < 0) return 0;
    return Math.min(100, (kg / max) * 100);
  }

  function filterData() {
    return CARBON_DATA.filter((item) => {
      const catMatch = currentCat === "all" || item.category === currentCat;
      const term = searchTerm.toLowerCase();
      const textMatch =
        !term ||
        item.name.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        (item.fun_fact && item.fun_fact.toLowerCase().includes(term)) ||
        item.category.toLowerCase().includes(term);
      return catMatch && textMatch;
    });
  }

  function sortData(data) {
    return [...data].sort((a, b) => {
      if (currentSort === "impact-desc") return b.kg_co2 - a.kg_co2;
      if (currentSort === "impact-asc") return a.kg_co2 - b.kg_co2;
      if (currentSort === "alpha") return a.name.localeCompare(b.name);
      return 0;
    });
  }

  // ─── Render Cards ───────────────────────────────────────────────
  function renderCards() {
    const filtered = filterData();
    const sorted = sortData(filtered);

    grid.innerHTML = "";

    resultsLabel.textContent =
      sorted.length === CARBON_DATA.length
        ? `${sorted.length} items`
        : `${sorted.length} of ${CARBON_DATA.length} items`;

    if (sorted.length === 0) {
      emptyState.hidden = false;
      grid.hidden = true;
      return;
    }

    emptyState.hidden = true;
    grid.hidden = false;

    sorted.forEach((item, i) => {
      const cat = CAT_CONFIG[item.category] || { colour: "#666", bg: "#f5f5f5", label: item.category };
      const impact = impactLevel(item.kg_co2);
      const barWidth = impactBar(item.kg_co2);
      const isPositive = item.kg_co2 < 0;

      const card = document.createElement("article");
      card.className = "carbon-card";
      card.setAttribute("role", "listitem");
      card.style.animationDelay = `${i * 30}ms`;
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", `${item.name}, ${formatCO2(item.kg_co2)}`);

      card.innerHTML = `
        <div class="card-header">
          <span class="card-emoji" aria-hidden="true">${item.emoji}</span>
          <div class="card-cat-badge" style="background:${cat.bg};color:${cat.colour}">${cat.label}</div>
        </div>
        <h3 class="card-name">${item.name}</h3>
        <p class="card-unit">${item.unit}</p>
        <div class="card-co2 ${isPositive ? "card-co2-green" : ""}">
          ${formatCO2(item.kg_co2)}
        </div>
        ${
          !isPositive
            ? `<div class="impact-bar-wrap" aria-hidden="true">
            <div class="impact-bar-fill" style="width:${barWidth}%;background:${
                barWidth < 15
                  ? "#2ecc71"
                  : barWidth < 40
                  ? "#f39c12"
                  : barWidth < 70
                  ? "#e67e22"
                  : "#e74c3c"
              }"></div>
          </div>`
            : ""
        }
        <span class="impact-badge ${impact.class}">${impact.label}</span>
        ${item.fun_fact ? `<p class="card-funfact">💡 ${item.fun_fact}</p>` : ""}
        <button class="card-details-btn" data-id="${item.id}">
          More details →
        </button>
      `;

      card.querySelector(".card-details-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        openModal(item.id);
      });

      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") openModal(item.id);
      });

      grid.appendChild(card);
    });
  }

  // ─── Modal ──────────────────────────────────────────────────────
  function openModal(id) {
    const item = CARBON_DATA.find((d) => d.id === id);
    if (!item) return;

    const cat = CAT_CONFIG[item.category] || {};
    const impact = impactLevel(item.kg_co2);
    const isPositive = item.kg_co2 < 0;

    // Find comparisons
    const comparisons = getComparisons(item.kg_co2);

    modalContent.innerHTML = `
      <div class="modal-emoji" aria-hidden="true">${item.emoji}</div>
      <h2 id="modal-title" class="modal-title">${item.name}</h2>
      <p class="modal-unit">${item.unit}</p>
      <div class="modal-co2 ${isPositive ? "card-co2-green" : ""}">
        ${formatCO2(item.kg_co2)}
      </div>
      <span class="impact-badge ${impact.class}" style="margin-bottom:1.5rem;display:inline-block">${impact.label}</span>

      <p class="modal-desc">${item.description}</p>

      ${
        item.fun_fact
          ? `<div class="modal-funfact">
        <strong>💡 Fun fact</strong>
        <p>${item.fun_fact}</p>
      </div>`
          : ""
      }

      ${
        item.tip
          ? `<div class="modal-tip">
        <strong>🎯 Tip</strong>
        <p>${item.tip}</p>
      </div>`
          : ""
      }

      ${
        comparisons.length
          ? `<div class="modal-comparisons">
        <strong>📊 This is roughly equivalent to…</strong>
        <ul>
          ${comparisons.map((c) => `<li>${c.emoji} ${c.desc}</li>`).join("")}
        </ul>
      </div>`
          : ""
      }

      ${
        item.equivalents
          ? `<div class="modal-equivalents-list">
        <strong>⚡ Also equivalent to…</strong>
        <ul>
          ${item.equivalents.map((e) => `<li>${e}</li>`).join("")}
        </ul>
      </div>`
          : ""
      }

      ${
        item.context_good
          ? `<p class="modal-context">${item.context_good}</p>`
          : ""
      }
    `;

    modalOverlay.hidden = false;
    document.body.style.overflow = "hidden";
    modalClose.focus();
  }

  function closeModal() {
    modalOverlay.hidden = true;
    document.body.style.overflow = "";
  }

  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // ─── Equivalents Calculator ──────────────────────────────────────
  window.computeEquivalents = function () {
    const val = parseFloat(document.getElementById("equiv-input").value);
    if (isNaN(val) || val <= 0) return;

    const container = document.getElementById("equiv-results");

    // Find closest matches in the CARBON_EQUIVALENTS table
    const results = CARBON_EQUIVALENTS.map((eq) => {
      const ratio = val / eq.kg;
      return { ...eq, ratio };
    });

    // Sort by how close ratio is to a nice round number
    const picks = results
      .filter((r) => r.ratio > 0.05 && r.ratio < 2000)
      .sort((a, b) => {
        const scoreA = Math.abs(Math.log(a.ratio));
        const scoreB = Math.abs(Math.log(b.ratio));
        return scoreA - scoreB;
      })
      .slice(0, 6);

    // Also compare to CARBON_DATA items
    const dataMatches = CARBON_DATA.filter((d) => d.kg_co2 > 0)
      .map((d) => ({ ...d, ratio: val / d.kg_co2 }))
      .filter((d) => d.ratio > 0.05 && d.ratio < 500)
      .sort((a, b) => Math.abs(Math.log(a.ratio)) - Math.abs(Math.log(b.ratio)))
      .slice(0, 4);

    // Trees to offset
    const treesNeeded = Math.ceil(val / 11);
    const carKm = Math.round(val / 0.21);

    let html = `
      <div class="equiv-header">
        <strong>${formatCO2(val)}</strong> is roughly equivalent to:
      </div>
      <div class="equiv-cards">
    `;

    picks.forEach((p) => {
      const n = p.ratio;
      const nFormatted = n >= 100 ? Math.round(n) : n >= 10 ? n.toFixed(1) : n.toFixed(2);
      html += `
        <div class="equiv-card">
          <span class="equiv-card-emoji">${p.emoji}</span>
          <span class="equiv-card-n">${nFormatted}×</span>
          <span class="equiv-card-label">${p.desc}</span>
        </div>
      `;
    });

    html += `</div>`;

    // Tree offset box
    html += `
      <div class="equiv-tree-box">
        🌳 To offset <strong>${formatCO2(val)}</strong>, you'd need
        <strong>${treesNeeded.toLocaleString()} mature trees</strong> absorbing CO₂ for a full year
        — or drive <strong>${carKm.toLocaleString()} fewer km</strong> in a petrol car.
      </div>
    `;

    // Matching data items
    if (dataMatches.length > 0) {
      html += `<div class="equiv-matches"><strong>🎯 Most similar items in the library:</strong><ul>`;
      dataMatches.forEach((d) => {
        const n = d.ratio;
        const nStr =
          n > 100 ? `${Math.round(n)}×` : n > 2 ? `${n.toFixed(1)}×` : n > 0.5 ? "~1×" : `${n.toFixed(2)}×`;
        html += `<li>${d.emoji} <strong>${d.name}</strong> (${nStr} — ${formatCO2(d.kg_co2)})</li>`;
      });
      html += `</ul></div>`;
    }

    container.innerHTML = html;
    container.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  function getComparisons(kg) {
    if (kg <= 0) return [];
    return CARBON_EQUIVALENTS.map((eq) => {
      const ratio = kg / eq.kg;
      return { ...eq, ratio };
    })
      .filter((r) => r.ratio > 0.1 && r.ratio < 1000)
      .sort((a, b) => Math.abs(Math.log(a.ratio)) - Math.abs(Math.log(b.ratio)))
      .slice(0, 4)
      .map((r) => {
        const n = r.ratio;
        const desc =
          n < 0.12
            ? `Less than ¹⁄₁₀ of ${r.desc}`
            : n < 0.9
            ? `About ${n.toFixed(1)}× ${r.desc}`
            : n < 1.1
            ? `About the same as ${r.desc}`
            : n < 2.0
            ? `About ${n.toFixed(1)}× ${r.desc}`
            : `${Math.round(n)}× ${r.desc}`;
        return { emoji: r.emoji, desc };
      });
  }

  // ─── Fun Facts ───────────────────────────────────────────────────
  function renderFacts() {
    const container = document.getElementById("facts-grid");
    FUN_FACTS.forEach((f) => {
      const el = document.createElement("div");
      el.className = "fact-card";
      el.innerHTML = `<span class="fact-icon" aria-hidden="true">${f.icon}</span><p>${f.fact}</p>`;
      container.appendChild(el);
    });
  }

  // ─── Filters & Sort ─────────────────────────────────────────────
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCat = btn.dataset.cat;
      renderCards();
    });
  });

  sortSelect.addEventListener("change", () => {
    currentSort = sortSelect.value;
    renderCards();
  });

  searchInput.addEventListener("input", () => {
    searchTerm = searchInput.value;
    clearBtn.style.display = searchTerm ? "flex" : "none";
    renderCards();
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchTerm = "";
    clearBtn.style.display = "none";
    searchInput.focus();
    renderCards();
  });

  // ─── Total count pill ───────────────────────────────────────────
  totalCount.textContent = `📚 ${CARBON_DATA.length} items in the library`;

  // ─── Init ───────────────────────────────────────────────────────
  renderCards();
  renderFacts();

  // Allow pressing Enter in equiv input
  document.getElementById("equiv-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") window.computeEquivalents();
  });
})();
