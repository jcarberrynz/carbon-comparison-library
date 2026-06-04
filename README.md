# 🌍 CarbonLib — Open Source Carbon Footprint Library

> *Every gram counts. Explore the carbon cost of everyday life.*

CarbonLib is a beautiful, searchable, open-source carbon footprint reference library. It helps people understand the climate impact of what they eat, how they travel, what they buy, and how they use energy — with fun comparisons and equivalents to make the numbers tangible.

**[🚀 Live demo →](https://yourusername.github.io/carbon-footprint-library)**

![CarbonLib screenshot](https://via.placeholder.com/900x500/0f5932/ffffff?text=CarbonLib+Screenshot)

---

## ✨ Features

- **60+ items** across 6 categories: Food & Drink, Travel, Home & Energy, Shopping, Digital, and Nature
- **Smart search** — find any item instantly
- **Filter by category** with live results
- **Sort** by impact (highest/lowest) or alphabetically
- **Carbon equivalents calculator** — enter any amount of CO₂ to see what it means in real-world terms
- **Detailed modal cards** with descriptions, tips, fun facts, and comparisons
- **Fully static** — zero build step, zero dependencies, works offline
- **GitHub Pages ready** — host for free in two clicks

---

## 📦 What's in the library?

### 🍽 Food & Drink (21 items)
T-bone steak, lamb, chicken, farmed salmon, tofu, lentils, eggs, cow's milk, oat milk, cheese, dark chocolate, black coffee, flat white, wine, beer, avocado, banana, hamburger, pizza, sushi, greenhouse tomatoes, and more.

### ✈️ Travel (12 items)
Petrol car, electric car (NZ grid), bus, train, short-haul flight, long-haul flight, business class uplift, cruise ship, motorcycle, cycling, walking, ride-hailing, ferry.

### ⚡ Home & Energy (10 items)
NZ electricity (kWh), UK electricity, gas boiler, heat pump, shower, bath, tumble dryer, washing machine, kettle, LED bulb, refrigerator, gas heating.

### 🛍 Shopping (9 items)
iPhone, laptop, TV, jeans, cotton t-shirt, trainers, new car manufacturing, sofa, diamond ring, mattress.

### 📱 Digital (8 items)
Email (plain), email (with attachment), Netflix streaming, gaming console, Bitcoin transaction, Google search, AI chatbot query, video call, cloud storage.

### 🌿 Nature (6 items)
Mature tree (annual sequestration), native forest hectare, ocean kelp forest, home solar, composting, reduce meat, rewilding.

---

## 🚀 Getting started

### Option 1: GitHub Pages (recommended)

1. Fork this repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder
4. Your library is live at `https://yourusername.github.io/carbon-footprint-library`

### Option 2: Run locally

```bash
git clone https://github.com/yourusername/carbon-footprint-library.git
cd carbon-footprint-library

# Open in your browser — no build step needed!
open index.html

# Or serve with any static server:
npx serve .
python -m http.server 8080
```

---

## 📁 Project structure

```
carbon-footprint-library/
├── index.html      # Main application
├── sources.html    # Data sources & methodology
├── style.css       # Stylesheet
├── data.js         # Carbon data library (edit this to add items!)
├── app.js          # Application logic
└── README.md
```

---

## ➕ Adding new items

Edit `data.js` and add an entry to the `CARBON_DATA` array:

```javascript
{
  id: "unique-kebab-id",
  name: "Human-readable name",
  category: "food",          // food | travel | energy | shopping | digital | nature
  unit: "per serving / per km / etc.",
  kg_co2: 4.5,              // kg CO2e — use negative values for sequestration
  emoji: "🍔",
  description: "2-3 sentences explaining why this item has this footprint.",
  fun_fact: "One surprising, memorable comparison.",
  equivalents: ["Optional array of extra equivalents"],
  tip: "One practical action people can take.",
  context_good: "Optional nuance or positive framing."
}
```

**Categories:**
| Key | Label |
|-----|-------|
| `food` | Food & Drink |
| `travel` | Travel |
| `energy` | Home & Energy |
| `shopping` | Shopping |
| `digital` | Digital |
| `nature` | Nature (use negative kg_co2 for sequestration) |

---

## 🔢 Data sources

All values are approximate averages based on peer-reviewed literature. See [`sources.html`](sources.html) for the full list, including:

- **Poore & Nemecek (2018)** — food lifecycle analysis (Science)
- **IPCC AR6 (2021–2022)** — authoritative climate science
- **UK Government GHG Conversion Factors (DESNZ, 2023)**
- **Our World in Data** — food, travel, and energy visualisations
- **Electricity Authority NZ / EMI Portal** — NZ grid intensity
- **Apple Environmental Progress Report (2023)**
- **Cambridge Bitcoin Electricity Consumption Index**
- **Project Drawdown** — climate solutions

> ⚠️ Carbon values are averages and vary significantly by region, supply chain, and behaviour. These are educational figures, not accounting values.

---

## 🤝 Contributing

Contributions are very welcome! Here's how:

1. **Add new items** — just add to `data.js` with a good source
2. **Fix incorrect values** — open an issue with your source
3. **Improve the UI** — fork and PR
4. **Translate** — the data structure is translation-ready

Please include a peer-reviewed source or reputable dataset for any new carbon values.

---

## 📄 Licence

MIT Licence — free to use, fork, and build on. Attribution appreciated but not required.

---

## 💚 Why this exists

Understanding carbon emissions in abstract tonnes and percentages is hard. Comparing a beef steak to driving 60 km, or a transatlantic flight to three years of car use, makes it *real*. 

The goal of CarbonLib is to make carbon literacy accessible, engaging, and even a little bit fun — because people change behaviour when they understand consequences, not just statistics.

---

*Built with 💚 for the planet.*
