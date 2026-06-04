// =============================================================
// CarbonLib — Open-Source Carbon Footprint Data Library
// CO2 values in kg CO2e per unit unless noted
// Sources: IPCC, EPA, Poore & Nemecek 2018, OurWorldInData,
//          lifecycle analyses, peer-reviewed literature
// =============================================================

const CARBON_DATA = [

  // ─── FOOD & DRINK ────────────────────────────────────────────

  {
    id: "beef-tbone",
    name: "T-bone steak",
    category: "food",
    unit: "per 300g serving",
    kg_co2: 9.1,
    emoji: "🥩",
    description: "Beef is the climate villain of the dinner table. Cattle produce methane during digestion, and land clearance for grazing makes this one of the highest-impact foods per gram of protein.",
    fun_fact: "One T-bone steak = driving a petrol car ~58 km.",
    equivalents: ["Charging your phone 1,000 times", "Boiling a kettle 910 times", "Watching Netflix for 600 hours"],
    context_good: "Grass-fed beef can sequester some carbon in soil — but it's still much higher than plant proteins.",
    tip: "Swapping one beef meal per week saves ~200 kg CO₂ per year — equivalent to planting 9 trees."
  },
  {
    id: "lamb",
    name: "Lamb chops",
    category: "food",
    unit: "per 300g serving",
    kg_co2: 7.8,
    emoji: "🍖",
    description: "Lamb rivals beef for emissions intensity. New Zealand lamb is often considered lower-impact than UK-raised due to grass feeding and more efficient farming, but shipping offsets much of that.",
    fun_fact: "New Zealand exports lamb 20,000 km to the UK — yet total lifecycle emissions are often still lower than locally farmed alternatives.",
    equivalents: ["Running a washing machine 78 times", "Leaving a 60W bulb on for 7 days"],
    tip: "New Zealand lamb exported to the UK can have a lower carbon footprint than locally produced lamb due to farming efficiency!"
  },
  {
    id: "chicken",
    name: "Chicken breast",
    category: "food",
    unit: "per 300g serving",
    kg_co2: 1.5,
    emoji: "🍗",
    description: "Chicken is among the lowest-impact meats. Poultry convert feed to protein efficiently and don't produce the methane that ruminants do.",
    fun_fact: "Chicken has ~6x lower emissions than beef for the same amount of protein.",
    equivalents: ["Charging a laptop 30 times", "10 minutes of driving"],
    tip: "Swapping beef for chicken even occasionally makes a meaningful difference."
  },
  {
    id: "salmon-farmed",
    name: "Farmed salmon",
    category: "food",
    unit: "per 300g serving",
    kg_co2: 1.9,
    emoji: "🐟",
    description: "Farmed salmon requires significant fish feed and energy for aquaculture operations, but remains much lower-impact than beef.",
    fun_fact: "Wild-caught salmon can have lower emissions than farmed, but this depends heavily on fishing method and distance.",
    tip: "Salmon is a great lower-carbon protein source — especially compared to red meat."
  },
  {
    id: "tofu",
    name: "Tofu",
    category: "food",
    unit: "per 300g serving",
    kg_co2: 0.6,
    emoji: "🧆",
    description: "Tofu is made from soy — but crucially NOT the soy linked to Amazonian deforestation (most of that goes to livestock feed). It's a high-protein, very low-carbon food.",
    fun_fact: "Getting the same protein from tofu vs beef saves roughly 8 kg CO₂ — every single meal.",
    tip: "One tofu meal instead of beef per week saves ~400 kg CO₂ per year — like taking a car off the road for 3 months."
  },
  {
    id: "lentils",
    name: "Lentils",
    category: "food",
    unit: "per 300g serving",
    kg_co2: 0.2,
    emoji: "🫘",
    description: "Legumes like lentils actually fix nitrogen from the air, reducing the need for synthetic fertilisers. They are among the most climate-friendly proteins on Earth.",
    fun_fact: "Lentils have 50x lower emissions than beef per gram of protein. FIFTY TIMES.",
    tip: "Lentil dhal? Dal? However you spell it — it's delicious and basically carbon-neutral."
  },
  {
    id: "eggs",
    name: "Eggs (free range)",
    category: "food",
    unit: "per 6 eggs",
    kg_co2: 1.1,
    emoji: "🥚",
    description: "Eggs are a reasonably efficient source of protein and nutrients. Free-range systems have slightly higher emissions than caged (more land, more feed), but the difference is small.",
    tip: "Eggs are a great mid-range option — much lower than beef, and a good source of protein."
  },
  {
    id: "milk",
    name: "Cow's milk",
    category: "food",
    unit: "per 1 litre",
    kg_co2: 1.4,
    emoji: "🥛",
    description: "Dairy farming involves methane from cows and nitrous oxide from manure. A litre of cow's milk has about 3–4x the emissions of oat milk.",
    fun_fact: "New Zealand is one of the most efficient dairy producers globally — yet demand globally creates massive land-use pressures.",
    equivalents: ["5 km of driving a petrol car"],
    tip: "Oat milk has ~80% lower emissions than cow's milk. Almond milk uses less land but is thirsty for water."
  },
  {
    id: "oat-milk",
    name: "Oat milk",
    category: "food",
    unit: "per 1 litre",
    kg_co2: 0.3,
    emoji: "🌾",
    description: "Oat milk requires much less land and water than dairy, and oats have a low emissions profile. It's arguably the most climate-friendly mainstream milk alternative.",
    fun_fact: "Oat milk has about 80% lower carbon footprint than cow's milk.",
    tip: "The single easiest milk swap for the planet!"
  },
  {
    id: "cheese-cheddar",
    name: "Cheddar cheese",
    category: "food",
    unit: "per 200g serving",
    kg_co2: 2.4,
    emoji: "🧀",
    description: "Cheese is concentrated dairy — it takes roughly 10 litres of milk to make 1 kg of cheese. Those methane emissions stack up quickly.",
    fun_fact: "A cheese board for four people has roughly the same carbon footprint as driving 50 km.",
    tip: "You don't have to give it up — just savour smaller amounts of really good cheese."
  },
  {
    id: "dark-chocolate",
    name: "Dark chocolate bar",
    category: "food",
    unit: "per 100g bar",
    kg_co2: 2.7,
    emoji: "🍫",
    description: "Cocoa farming drives deforestation in tropical regions, making chocolate surprisingly carbon-heavy. Certified sustainable chocolate helps, but it's not carbon-free.",
    fun_fact: "A 100g chocolate bar has more carbon than a glass of cow's milk.",
    tip: "Fairtrade and Rainforest Alliance certified chocolate takes steps toward lower-impact farming."
  },
  {
    id: "coffee-black",
    name: "Black coffee",
    category: "food",
    unit: "per cup (250ml)",
    kg_co2: 0.28,
    emoji: "☕",
    description: "Coffee farming requires land, water, and energy for processing. Most of the footprint comes from the farm — not the barista. Adding milk (especially cow's) roughly doubles it.",
    fun_fact: "Your morning coffee emits about the same as leaving a phone charger plugged in for a day.",
    tip: "Black coffee or with plant milk = much lower footprint than a flat white."
  },
  {
    id: "flat-white",
    name: "Flat white (cow's milk)",
    category: "food",
    unit: "per cup",
    kg_co2: 0.55,
    emoji: "🍵",
    description: "Once you add cow's milk, coffee's footprint doubles or more. The milk dominates the emissions in any milky coffee drink.",
    fun_fact: "Switching a daily flat white to oat milk saves ~60 kg CO₂ per year.",
    tip: "Ask for oat milk — most cafés have it now, and many barista oat milks steam beautifully."
  },
  {
    id: "wine-bottle",
    name: "Bottle of wine",
    category: "food",
    unit: "per 750ml bottle",
    kg_co2: 1.3,
    emoji: "🍷",
    description: "Wine production involves farming, fermentation, and (crucially) heavy glass bottles. The bottle itself accounts for roughly a third of total emissions.",
    fun_fact: "Wine in cans or bag-in-box has roughly 40% lower emissions than bottled wine.",
    tip: "Boxed wine — go on, it's actually better for the planet."
  },
  {
    id: "beer-pint",
    name: "Pint of beer",
    category: "food",
    unit: "per 568ml pint",
    kg_co2: 0.5,
    emoji: "🍺",
    description: "Beer requires barley, hops, water, and energy to brew. Local craft beer in a reusable glass has a much lower footprint than imported canned lager.",
    fun_fact: "Draught beer in a reusable glass is significantly more eco-friendly than bottled or canned.",
    tip: "Drink local, drink draught — the planet's buying (in carbon credits)."
  },
  {
    id: "avocado",
    name: "Avocado",
    category: "food",
    unit: "per fruit (~200g)",
    kg_co2: 0.8,
    emoji: "🥑",
    description: "Avocados are thirsty (320 litres of water each) and often flown long distances. Their carbon footprint is moderate but water stress is a bigger concern in growing regions.",
    fun_fact: "Avocado toast is less of a climate crime than a beef burger — the water story is messier though.",
    tip: "Buy locally grown avocados when possible, and don't waste them (they go off fast)."
  },
  {
    id: "banana",
    name: "Banana",
    category: "food",
    unit: "per banana (120g)",
    kg_co2: 0.08,
    emoji: "🍌",
    description: "One of the most carbon-efficient foods you can eat. Bananas travel by ship (not air), grow in tropical sun, and have a compostable wrapper.",
    fun_fact: "A banana has about the same carbon footprint as sending 2 emails.",
    tip: "Bananas are a climate hero snack. Eat more bananas."
  },
  {
    id: "potato-chips",
    name: "Bag of crisps",
    category: "food",
    unit: "per 150g bag",
    kg_co2: 0.3,
    emoji: "🥔",
    description: "Potatoes are a low-emission crop, but frying, packaging, and shipping add up. Still much lower than meat snacks.",
    tip: "Crisps: surprisingly not bad for the planet. There are worse vices."
  },
  {
    id: "hamburger",
    name: "Beef hamburger",
    category: "food",
    unit: "per burger",
    kg_co2: 4.5,
    emoji: "🍔",
    description: "A beef patty dominates the climate cost of a burger. The bun, lettuce, and condiments are relatively tiny. Swapping to a plant-based patty reduces emissions by ~90%.",
    fun_fact: "One beef burger = 45 km of driving. A Beyond Burger = 4.5 km.",
    equivalents: ["Watching Netflix for 310 hours", "Charging a smartphone 441 times"],
    tip: "Plant-based burgers have improved dramatically in taste — many people can't tell the difference in a good burger."
  },
  {
    id: "pizza-margherita",
    name: "Margherita pizza",
    category: "food",
    unit: "per pizza (350g)",
    kg_co2: 1.8,
    emoji: "🍕",
    description: "A cheesy pizza is mostly about the cheese. Tomatoes and dough are low-carbon, but mozzarella bumps the footprint. A pizza is still much better than a steak.",
    tip: "Go easy on the cheese, go heavy on the vegetables — lower emissions and arguably tastier."
  },
  {
    id: "sushi-tuna",
    name: "Tuna sushi (8 pieces)",
    category: "food",
    unit: "per portion",
    kg_co2: 1.3,
    emoji: "🍣",
    description: "Bluefin tuna is a conservation concern, but the carbon footprint is moderate. Rice cultivation does produce methane from flooded paddies.",
    fun_fact: "Rice is responsible for about 10% of global methane emissions from agriculture.",
    tip: "Sustainably caught tuna (MSC certified) is a better choice for both oceans and your conscience."
  },
  {
    id: "tomatoes-greenhouse",
    name: "Greenhouse tomatoes",
    category: "food",
    unit: "per 1 kg",
    kg_co2: 2.1,
    emoji: "🍅",
    description: "Tomatoes grown in heated greenhouses (common in northern Europe) use significant energy. Field-grown or sun-ripened tomatoes are dramatically lower.",
    fun_fact: "UK-grown greenhouse tomatoes can have 5x the footprint of Spanish sun-grown tomatoes.",
    tip: "Buy seasonal, sun-grown tomatoes — they taste better AND are better for the planet."
  },

  // ─── TRAVEL ───────────────────────────────────────────────────

  {
    id: "car-petrol-100km",
    name: "Petrol car — 100 km",
    category: "travel",
    unit: "per 100 km (avg car, 1 person)",
    kg_co2: 21,
    emoji: "🚗",
    description: "The average petrol car emits about 170g CO₂ per km (including manufacturing and fuel production). Solo driving is one of the highest-impact ways to travel.",
    fun_fact: "100 km alone in a car = growing 2 trees for a whole year to offset it.",
    equivalents: ["21,000 charges of your smartphone", "Boiling 2,100 litres of water"],
    tip: "Carpooling with just one other person halves your emissions instantly."
  },
  {
    id: "car-ev-100km",
    name: "Electric car — 100 km",
    category: "travel",
    unit: "per 100 km (NZ grid, 1 person)",
    kg_co2: 2.1,
    emoji: "🔋",
    description: "In New Zealand (with ~85% renewable electricity), an EV emits roughly 10x less per km than petrol. Even on a dirtier grid, EVs are almost always lower-carbon.",
    fun_fact: "In NZ, an EV runs on about 85% renewable energy — cheaper AND cleaner.",
    equivalents: ["Charging a smartphone 210 times", "3 cups of black coffee"],
    tip: "An EV in New Zealand is about as clean as transport gets, thanks to the mostly-hydro grid."
  },
  {
    id: "bus-100km",
    name: "Bus journey — 100 km",
    category: "travel",
    unit: "per 100 km (average occupancy)",
    kg_co2: 2.9,
    emoji: "🚌",
    description: "Buses spread their emissions across many passengers. Even a diesel bus is typically much lower per km than a solo petrol car.",
    fun_fact: "A full bus emits ~7x less per person than a solo petrol car over the same distance.",
    tip: "Buses are underrated! Comfy, cheap, and much lower carbon."
  },
  {
    id: "train-100km",
    name: "Train journey — 100 km",
    category: "travel",
    unit: "per 100 km (electrified, avg occupancy)",
    kg_co2: 0.6,
    emoji: "🚆",
    description: "Trains — especially electric ones — are among the lowest-carbon forms of motorised long-distance travel. High-speed rail is comparable to or better than flying.",
    fun_fact: "Taking the train instead of a short-haul flight can cut journey emissions by 80–90%.",
    tip: "The train is the hero of low-carbon travel. It's also scenic. And relaxing."
  },
  {
    id: "flight-short-haul",
    name: "Short-haul flight",
    category: "travel",
    unit: "per passenger (e.g. Wellington → Auckland ~1hr)",
    kg_co2: 95,
    emoji: "✈️",
    description: "Short flights are disproportionately polluting because takeoff and landing use the most fuel, and at altitude there's a radiative forcing multiplier effect. If a bus or train is available, it's almost always better.",
    fun_fact: "The Wellington–Auckland flight emits roughly the same per person as 450 km of driving alone.",
    equivalents: ["Growing ~8 trees for a full year", "Eating 10 beef steaks"],
    tip: "Could you take the Interislander? Or bus + train? The scenery's better too."
  },
  {
    id: "flight-long-haul",
    name: "Long-haul flight",
    category: "travel",
    unit: "per passenger (e.g. NZ → London ~24hr)",
    kg_co2: 2900,
    emoji: "✈️",
    description: "Long-haul flights are the single biggest contributor to most individuals' carbon footprint. Auckland to London return is roughly equivalent to 2–3 years of typical car use.",
    fun_fact: "Auckland → London return ≈ 5.8 tonnes CO₂ — that's over a year of an average NZ person's carbon budget.",
    equivalents: ["Eating ~320 beef steaks", "Driving 138,000 km", "Growing 260 trees for a year"],
    tip: "There's no low-carbon way to fly long distances — offset, reduce frequency, and make each trip count."
  },
  {
    id: "flight-business",
    name: "Business class uplift",
    category: "travel",
    unit: "multiplier vs economy",
    kg_co2: 3.0,
    emoji: "🛋️",
    description: "Business class seats take up ~3x the floor space of economy. Airlines allocate emissions by space, so business class = roughly 3x the carbon per flight.",
    fun_fact: "Upgrading to business class triples your flight's carbon footprint. Those flat beds are expensive in more ways than one.",
    tip: "Economy class is the climate-friendly choice when flying is unavoidable."
  },
  {
    id: "cruise-ship-7days",
    name: "Cruise holiday — 7 days",
    category: "travel",
    unit: "per person, 7-day cruise",
    kg_co2: 1800,
    emoji: "🚢",
    description: "Cruise ships burn heavy fuel oil and are among the most carbon-intensive holidays possible. A week-long cruise can emit more carbon per person than most people's entire annual footprint.",
    fun_fact: "A cruise ship can emit as much pollution in one day as 1 million cars.",
    tip: "If you love the sea, sailing holidays or coastal train journeys offer an ocean experience with much lower impact."
  },
  {
    id: "motorcycle-100km",
    name: "Motorcycle — 100 km",
    category: "travel",
    unit: "per 100 km",
    kg_co2: 10.3,
    emoji: "🏍️",
    description: "Motorcycles are fuel-efficient per vehicle, but since they carry one person, per-passenger-km they're similar to or only slightly better than a solo car trip.",
    fun_fact: "Motorcycles: cooler than a car, but not as green as you'd think.",
    tip: "Electric scooters and motorbikes are genuinely low-carbon — worth the switch!"
  },
  {
    id: "cycling-100km",
    name: "Cycling — 100 km",
    category: "travel",
    unit: "per 100 km",
    kg_co2: 0.016,
    emoji: "🚲",
    description: "Cycling emits almost nothing — the only real CO₂ comes from the extra food you eat to fuel the ride. A healthy, happy, nearly zero-carbon way to travel.",
    fun_fact: "Cycling 100 km emits less CO₂ than boiling a single cup of tea.",
    equivalents: ["16g CO₂ — less than 2% of a cup of black coffee"],
    tip: "If a journey is under 5 km, cycling or walking is almost always the best choice."
  },
  {
    id: "walking-10km",
    name: "Walking — 10 km",
    category: "travel",
    unit: "per 10 km",
    kg_co2: 0.0,
    emoji: "🚶",
    description: "Walking is effectively zero-carbon. Your metabolism burns food, which is carbon-neutral at a lifecycle level (plants absorbed that CO₂ while growing). The kindest transport for the planet.",
    fun_fact: "Walking: still the original, unbeatable zero-emission transport technology.",
    tip: "Your legs: the world's most sustainable vehicle. No app update required."
  },
  {
    id: "uber-petrol",
    name: "Uber/taxi (petrol) — 10 km",
    category: "travel",
    unit: "per 10 km trip",
    kg_co2: 2.0,
    emoji: "🚖",
    description: "Ride-hailing tends to have higher per-km emissions than personal cars because of deadheading (driving empty between rides) and often less fuel-efficient vehicles.",
    tip: "Rideshare platforms with electric vehicle fleets are increasingly available — worth selecting when you can."
  },
  {
    id: "ferry-100km",
    name: "Car ferry — 100 km",
    category: "travel",
    unit: "per passenger (with vehicle)",
    kg_co2: 120,
    emoji: "⛴️",
    description: "Ferries carrying vehicles use a lot of fuel and the emissions are allocated partly to the passenger, partly to the vehicle. Foot passengers have much lower footprints.",
    fun_fact: "The Interislander carrying a car across Cook Strait = a significant chunk of your daily carbon budget.",
    tip: "Foot passenger on a ferry? Much lower emissions. Leave the car behind if you can."
  },

  // ─── HOME & ENERGY ────────────────────────────────────────────

  {
    id: "electricity-kwh-nz",
    name: "1 kWh of NZ electricity",
    category: "energy",
    unit: "per kWh (NZ grid average)",
    kg_co2: 0.085,
    emoji: "⚡",
    description: "New Zealand's electricity grid is roughly 85% renewable (hydro, geothermal, wind), making it one of the cleanest in the world. Each unit of NZ electricity has a carbon footprint ~10x lower than the UK or Australia.",
    fun_fact: "NZ electricity is remarkably clean — 1 kWh in NZ emits less CO₂ than making a cup of instant coffee.",
    tip: "Switching to an EV in NZ is one of the most impactful personal carbon choices you can make."
  },
  {
    id: "electricity-kwh-uk",
    name: "1 kWh of UK electricity",
    category: "energy",
    unit: "per kWh (UK grid average)",
    kg_co2: 0.23,
    emoji: "⚡",
    description: "The UK grid has improved dramatically — from coal-heavy to increasingly renewable. But it's still ~3x dirtier than New Zealand's per kWh.",
    tip: "Solar panels in the UK can still save significant emissions, especially in summer."
  },
  {
    id: "gas-boiler-hour",
    name: "Gas central heating — 1 hour",
    category: "energy",
    unit: "per hour (average home)",
    kg_co2: 0.71,
    emoji: "🔥",
    description: "Natural gas boilers are common but emit CO₂ when burned, plus methane leaks add to the problem. Heat pumps running on renewable electricity can be 3–5x more efficient.",
    fun_fact: "Heating a typical UK home for winter emits over 2 tonnes of CO₂ from the boiler alone.",
    tip: "Heat pumps are the climate-friendly alternative to gas boilers — they're efficient even in cold climates."
  },
  {
    id: "heat-pump-hour",
    name: "Heat pump — 1 hour (NZ)",
    category: "energy",
    unit: "per hour (average home, NZ grid)",
    kg_co2: 0.12,
    emoji: "♨️",
    description: "Heat pumps move heat rather than create it — they're typically 3–4x more efficient than resistive heating. On NZ's clean grid, they're an incredibly low-carbon way to stay warm.",
    fun_fact: "Switching from a gas heater to a heat pump in NZ cuts heating emissions by ~80%.",
    tip: "In New Zealand, heat pumps are both cheaper to run AND dramatically lower carbon than gas or electric resistance heaters."
  },
  {
    id: "shower-5min",
    name: "Hot shower — 5 minutes",
    category: "energy",
    unit: "per 5-min shower (electric water heating)",
    kg_co2: 0.35,
    emoji: "🚿",
    description: "Showers use both water and energy. Electric water heating on a fossil fuel grid is the high-impact option; solar hot water or a heat pump cylinder is dramatically lower.",
    fun_fact: "A 10-minute shower uses more CO₂ than eating a banana.",
    tip: "Turn the hot water cylinder thermostat to solar-boost when possible, and aim for 4-minute showers."
  },
  {
    id: "bath-full",
    name: "Full hot bath",
    category: "energy",
    unit: "per bath (average 150L)",
    kg_co2: 0.5,
    emoji: "🛁",
    description: "A full bath uses about twice the hot water of a 5-minute shower. On a fossil fuel grid, the difference really adds up over a year.",
    fun_fact: "Showering instead of bathing daily saves roughly 60 kg CO₂ per year.",
    tip: "Reserve the bath for special occasions — it's a treat for you AND the planet."
  },
  {
    id: "tumble-dryer",
    name: "Tumble dryer — 1 load",
    category: "energy",
    unit: "per cycle",
    kg_co2: 1.8,
    emoji: "🌀",
    description: "Tumble dryers are energy-hungry appliances. Line drying is free and emits nothing.",
    fun_fact: "A tumble dryer load emits more CO₂ than cycling 100 km.",
    tip: "Line drying instead of tumble drying saves ~500 kg CO₂ per year if done consistently."
  },
  {
    id: "washing-machine",
    name: "Washing machine — 1 load",
    category: "energy",
    unit: "per 40°C wash",
    kg_co2: 0.7,
    emoji: "🫧",
    description: "Washing machines use both water and electricity. Most of the energy goes to heating the water — cold washes (30°C or less) cut the footprint significantly.",
    fun_fact: "Washing on cold instead of hot saves about 0.3 kg CO₂ per wash — around 100 kg per year for most households.",
    tip: "Cold washes clean most clothes just as well as hot, and clothes last longer too."
  },
  {
    id: "boil-kettle",
    name: "Boil a full kettle",
    category: "energy",
    unit: "per full kettle (1.7L, NZ grid)",
    kg_co2: 0.01,
    emoji: "🫖",
    description: "On NZ's clean grid, boiling a kettle is remarkably low-carbon. On a coal-heavy grid, it would be 5–10x higher. Only boil what you need — save energy, save time.",
    fun_fact: "On the NZ grid, you'd need to boil the kettle 10,000 times to emit as much CO₂ as one return flight to Auckland.",
    tip: "Only fill to what you need — saves energy, boils faster, and it adds up."
  },
  {
    id: "led-bulb-year",
    name: "LED light bulb — 1 year",
    category: "energy",
    unit: "per year (4hrs/day, NZ grid)",
    kg_co2: 0.6,
    emoji: "💡",
    description: "LED bulbs use about 80% less energy than old incandescent bulbs. On NZ's clean grid, even a year of LED use is tiny — but every little bit helps.",
    fun_fact: "Switching all home bulbs from incandescent to LED saves ~200 kg CO₂ per year in Australia.",
    tip: "LEDs last 15–25 years. Swap them once and forget about it."
  },
  {
    id: "refrigerator-year",
    name: "Fridge running — 1 year",
    category: "energy",
    unit: "per year",
    kg_co2: 93,
    emoji: "🧊",
    description: "A refrigerator runs 24/7 and is one of the biggest energy consumers in a home. Modern A+++ fridges use less than half the energy of models from 10 years ago.",
    fun_fact: "Your old fridge might be costing more in energy (and CO₂) than the newest efficient model would cost to buy.",
    tip: "Keep your fridge at 4°C and freezer at -18°C — the sweet spot for efficiency and food safety."
  },
  {
    id: "natural-gas-heating-year",
    name: "Gas home heating — 1 year",
    category: "energy",
    unit: "per average home (NZ/UK)",
    kg_co2: 2100,
    emoji: "🔥",
    description: "Heating a home with natural gas for a full year is one of the largest single sources of household carbon emissions. Insulation, draught-stopping, and heat pumps are transformative.",
    fun_fact: "Proper home insulation can cut heating emissions by 30–50% — often the highest-ROI climate action for homeowners.",
    tip: "Insulate first, then electrify. The order matters — heating a leaky home with a heat pump is still wasteful."
  },

  // ─── SHOPPING & PRODUCTS ──────────────────────────────────────

  {
    id: "iphone-new",
    name: "New iPhone",
    category: "shopping",
    unit: "per device (manufacturing + use)",
    kg_co2: 70,
    emoji: "📱",
    description: "About 80% of a smartphone's lifetime carbon comes from manufacturing — mining rare minerals, energy-intensive chip fabrication, and global supply chains. The best phone for the planet is the one you already have.",
    fun_fact: "Manufacturing an iPhone emits roughly the same CO₂ as 400 km of driving a petrol car.",
    equivalents: ["Flying Wellington to Auckland 0.7 times", "Eating 7 beef steaks", "Driving 330 km"],
    tip: "Keeping your phone for an extra year instead of upgrading is one of the simplest consumer climate actions."
  },
  {
    id: "laptop-new",
    name: "New laptop",
    category: "shopping",
    unit: "per device (manufacturing)",
    kg_co2: 350,
    emoji: "💻",
    description: "Laptops are carbon-intensive to manufacture. The aluminium chassis, lithium battery, and semiconductor chips all require enormous energy to produce. A refurbished laptop can cut this by 70%.",
    fun_fact: "A new laptop emits more CO₂ in manufacturing than a year of running it on NZ's electricity.",
    equivalents: ["Driving 1,650 km in a petrol car", "About 3 return flights Wellington → Auckland"],
    tip: "Refurbished and second-hand laptops are dramatically lower carbon — and often just as fast for most tasks."
  },
  {
    id: "tv-55inch",
    name: "55-inch smart TV",
    category: "shopping",
    unit: "per device (manufacturing)",
    kg_co2: 400,
    emoji: "📺",
    description: "Large screens require significant material and energy to manufacture. The screen itself (glass, rare earth elements, LED backlighting) dominates the footprint.",
    fun_fact: "Manufacturing a 55-inch TV emits more CO₂ than running it 24/7 for a year on NZ electricity.",
    tip: "Smaller screens use less energy and have lower manufacturing footprints. A good monitor can replace both."
  },
  {
    id: "jeans-new",
    name: "New pair of jeans",
    category: "shopping",
    unit: "per pair",
    kg_co2: 33.4,
    emoji: "👖",
    description: "Jeans are surprisingly carbon-heavy. Cotton farming, spinning, dyeing, stitching, and shipping across multiple countries all contribute. A single pair uses ~3,781 litres of water and 33 kg CO₂.",
    fun_fact: "One pair of jeans has a higher carbon footprint than driving a petrol car 160 km.",
    equivalents: ["33 km of solo petrol driving", "Nearly 4 beef steaks"],
    tip: "Second-hand jeans have a fraction of the footprint — and often more character."
  },
  {
    id: "cotton-tshirt",
    name: "Cotton t-shirt",
    category: "shopping",
    unit: "per garment",
    kg_co2: 7.0,
    emoji: "👕",
    description: "The fashion industry produces more CO₂ than aviation and shipping combined. A standard cotton t-shirt involves farming, ginning, spinning, weaving, dyeing, and global logistics.",
    fun_fact: "If your t-shirt were a car trip, it would be 40 km of petrol driving.",
    tip: "Wearing a t-shirt 50 times instead of 5 reduces its per-wear footprint by 90%."
  },
  {
    id: "trainers-new",
    name: "New trainers / sneakers",
    category: "shopping",
    unit: "per pair",
    kg_co2: 14,
    emoji: "👟",
    description: "Athletic shoes are complex products — foam midsoles, rubber outsoles, synthetic uppers — often assembled across 5+ countries. Nike, Adidas and others are working on lower-carbon lines.",
    fun_fact: "Most of a shoe's footprint comes from manufacturing the foam midsole (blown with energy-intensive processes).",
    tip: "Repair your shoes rather than replace them — a cobbler can extend life dramatically."
  },
  {
    id: "car-manufacturing",
    name: "Manufacturing a new petrol car",
    category: "shopping",
    unit: "per vehicle",
    kg_co2: 6000,
    emoji: "🚗",
    description: "Building a car requires steel, aluminium, plastics, glass, and complex manufacturing — emitting roughly 6 tonnes of CO₂ before it ever drives a metre. Keeping your existing car longer is often the most climate-friendly choice.",
    fun_fact: "Manufacturing emissions mean a new EV takes ~2–3 years of clean driving to 'pay back' its carbon debt vs keeping an older petrol car.",
    equivalents: ["~60 long-haul economy flights NZ to Australia", "286 beef steaks"],
    tip: "The most climate-friendly car is often the one you already have — or a second-hand EV."
  },
  {
    id: "sofa-new",
    name: "New sofa",
    category: "shopping",
    unit: "per item",
    kg_co2: 90,
    emoji: "🛋️",
    description: "Furniture manufacturing involves timber, foam, fabric, and metal — plus global shipping. Upholstered sofas with foam filling have higher footprints than solid wood furniture.",
    fun_fact: "A new sofa emits about as much CO₂ as making 13 new iPhones.",
    tip: "Second-hand sofas are carbon-free in manufacturing terms. They're also broken in nicely."
  },
  {
    id: "engagement-ring-diamond",
    name: "Diamond engagement ring",
    category: "shopping",
    unit: "per ring (1 carat lab-cut equivalent)",
    kg_co2: 160,
    emoji: "💍",
    description: "Mined diamonds require excavating enormous amounts of earth. Lab-grown diamonds use less land and have lower overall environmental impact, though they're still energy-intensive to produce.",
    fun_fact: "Lab-grown diamonds have about 7x lower carbon footprint than mined diamonds.",
    tip: "Lab-grown diamonds are optically, chemically, and physically identical to mined ones — just kinder to the planet."
  },
  {
    id: "mattress-new",
    name: "New mattress",
    category: "shopping",
    unit: "per queen mattress",
    kg_co2: 150,
    emoji: "🛏️",
    description: "Mattresses contain significant amounts of foam and steel springs, and are difficult to recycle. Many end up in landfill.",
    fun_fact: "Most mattresses are not recyclable — which is a growing waste and emissions problem.",
    tip: "Look for mattresses with natural latex or certified recycled steel spring systems."
  },

  // ─── DIGITAL ──────────────────────────────────────────────────

  {
    id: "email-basic",
    name: "Sending an email",
    category: "digital",
    unit: "per email (no attachments)",
    kg_co2: 0.0003,
    emoji: "📧",
    description: "A plain email is almost negligibly low-carbon — a fraction of a gram. The data centres are efficient and the energy per packet of text is tiny.",
    fun_fact: "You'd need to send 3,000 plain emails to equal the carbon of one banana.",
    tip: "Attachments, especially video files, can multiply this 100x. Compress files or use links."
  },
  {
    id: "email-attachment",
    name: "Email with large attachment",
    category: "digital",
    unit: "per email (1MB+ attachment)",
    kg_co2: 0.05,
    emoji: "📎",
    description: "Data storage and transmission requires energy. Large attachments mean more data, more servers, more electricity.",
    fun_fact: "If everyone in an average company deleted 10 unnecessary saved emails, it would save enough energy to power a desktop PC for a year.",
    tip: "Link to cloud documents rather than attaching files — saves energy and inbox space."
  },
  {
    id: "netflix-hour",
    name: "Streaming Netflix — 1 hour",
    category: "digital",
    unit: "per hour (on TV, average global grid)",
    kg_co2: 0.036,
    emoji: "📺",
    description: "Streaming has improved dramatically in energy efficiency as data centres have shifted to renewables. The device you watch on actually matters more than the streaming itself.",
    fun_fact: "Watching Netflix for a whole year on a laptop emits less CO₂ than one beef burger.",
    tip: "Watch on a phone or laptop instead of a TV — the screen energy use is dramatically lower."
  },
  {
    id: "gaming-console-hour",
    name: "Games console — 1 hour",
    category: "digital",
    unit: "per hour (PS5 / Xbox Series X)",
    kg_co2: 0.05,
    emoji: "🎮",
    description: "Modern gaming consoles use 100–200W when gaming. On a clean grid like NZ's, this is still relatively low-carbon. Always use rest/sleep modes to avoid idle power draw.",
    fun_fact: "A PS5 left in standby mode for a year emits more than an hour of active gaming.",
    tip: "Enable power-saving modes — consoles draw significant power just sitting idle."
  },
  {
    id: "bitcoin-transaction",
    name: "One Bitcoin transaction",
    category: "digital",
    unit: "per transaction",
    kg_co2: 600,
    emoji: "₿",
    description: "Bitcoin's proof-of-work consensus mechanism requires enormous computational energy. Each transaction's share of that energy is staggering — equivalent to a long-haul flight.",
    fun_fact: "One Bitcoin transaction uses as much energy as an average EU household for 1.5 months.",
    equivalents: ["Similar to flying Wellington → London return (economy)"],
    tip: "Proof-of-stake blockchains (like Ethereum post-merge) use ~99.95% less energy per transaction."
  },
  {
    id: "google-search",
    name: "Google search",
    category: "digital",
    unit: "per search query",
    kg_co2: 0.0002,
    emoji: "🔍",
    description: "Google's data centres are increasingly powered by renewables, and query processing is highly optimised. A search is genuinely tiny in carbon terms.",
    fun_fact: "You'd need to run 50,000 Google searches to equal the CO₂ of one beef burger.",
    tip: "Ecosia plants trees from search ad revenue — a nice bonus if you want your searches to do extra good."
  },
  {
    id: "ai-query",
    name: "AI chatbot query (large model)",
    category: "digital",
    unit: "per conversation (10 queries)",
    kg_co2: 0.05,
    emoji: "🤖",
    description: "Training large AI models is very energy-intensive, but inference (actually using them) is much more efficient. A session of chatbot use is comparable to a short video stream.",
    fun_fact: "Training a large AI model can emit 300+ tonnes CO₂ — but using it is far more efficient per query.",
    tip: "AI companies are increasingly powering their data centres with renewables."
  },
  {
    id: "video-call-hour",
    name: "Video call — 1 hour",
    category: "digital",
    unit: "per hour (HD video, average grid)",
    kg_co2: 0.15,
    emoji: "💻",
    description: "Video calls require continuous data transmission and processing at both ends. Turning video off when not needed reduces emissions and often improves call quality.",
    fun_fact: "Turning off your camera during a video call cuts its carbon footprint by up to 96%.",
    tip: "Audio-only meetings are significantly lower carbon — and sometimes just better. Let the voice do the work."
  },
  {
    id: "data-centre-monthly",
    name: "Cloud storage — 1 month (100GB)",
    category: "digital",
    unit: "per month (100GB stored)",
    kg_co2: 0.003,
    emoji: "☁️",
    description: "Cloud storage is remarkably efficient — data centres pack an enormous amount of storage into a tiny space, and major providers use significant renewables.",
    fun_fact: "Storing 100GB in the cloud for a year emits about as much CO₂ as sending 15 plain text emails.",
    tip: "Delete what you don't need — both for carbon and for your sanity."
  },

  // ─── NATURE & CARBON SEQUESTRATION ───────────────────────────

  {
    id: "tree-year",
    name: "Mature tree — 1 year of growth",
    category: "nature",
    unit: "per year (mature deciduous tree)",
    kg_co2: -11,
    emoji: "🌳",
    description: "A mature tree absorbs roughly 10–25 kg of CO₂ per year through photosynthesis — the range depends on species, age, climate, and soil. This is LESS than people often think: offsetting your lifestyle requires hundreds of trees.",
    fun_fact: "To offset the average NZ person's carbon footprint (~8 tonnes/year), you'd need to plant ~730 trees — and wait 10 years for them to grow.",
    tip: "Trees are essential but not a silver bullet. Reducing emissions always beats planting trees."
  },
  {
    id: "hectare-native-forest",
    name: "Hectare of native forest — 1 year",
    category: "nature",
    unit: "per hectare per year",
    kg_co2: -8000,
    emoji: "🌿",
    description: "Intact native forests sequester carbon at an extraordinary rate — particularly young, regenerating forests. Protecting existing forests from logging is often more impactful than planting new ones.",
    fun_fact: "One hectare of regenerating NZ native bush stores enough carbon to offset 380 beef steaks per year.",
    tip: "Protecting native forest from clearing is the most carbon-efficient land-use action possible."
  },
  {
    id: "ocean-kelp-forest",
    name: "Ocean kelp forest — 1 year",
    category: "nature",
    unit: "per hectare per year",
    kg_co2: -1500,
    emoji: "🌊",
    description: "Kelp and seagrass are often called 'blue carbon' — they sequester CO₂ rapidly and store it in seafloor sediments for centuries. Their protection is increasingly recognised as a climate tool.",
    fun_fact: "Blue carbon ecosystems (kelp, seagrass, mangroves) can store 10x more carbon per hectare than terrestrial forests.",
    tip: "Supporting marine protected areas is a powerful climate action that also benefits biodiversity."
  },
  {
    id: "home-solar-year",
    name: "Home solar panel system — 1 year",
    category: "nature",
    unit: "per year (average 6kW system, NZ)",
    kg_co2: -300,
    emoji: "☀️",
    description: "In NZ's already-clean grid, home solar doesn't save as much CO₂ as in Australia or the UK — but it can still reduce grid demand during peak periods and provides resilience.",
    fun_fact: "Solar in Australia saves ~3x more CO₂ per year than the same panels in NZ, due to grid differences.",
    tip: "Solar in NZ is more about energy independence and EV charging than raw carbon savings."
  },
  {
    id: "composting-year",
    name: "Composting food waste — 1 year",
    category: "nature",
    unit: "per average household per year",
    kg_co2: -115,
    emoji: "🪱",
    description: "When food goes to landfill, it produces methane as it decomposes anaerobically — a potent greenhouse gas. Composting redirects that into nutrient-rich soil with minimal emissions.",
    fun_fact: "Composting at home can save more emissions per year than growing 10 trees — and you get garden soil.",
    tip: "Worm farms, bokashi systems, or council food waste collections are all great options."
  },
  {
    id: "reduce-meat-weekly",
    name: "One less beef meal per week",
    category: "nature",
    unit: "per year",
    kg_co2: -200,
    emoji: "🥦",
    description: "Replacing one beef meal per week with a plant-based alternative saves roughly 200 kg CO₂ per year — the equivalent of growing 18 trees.",
    fun_fact: "One less beef meal per week = equivalent to taking a car off the road for 5 weeks.",
    tip: "You don't have to go fully vegetarian for big impact — even one or two changes per week add up."
  },
  {
    id: "rewilding-hectare",
    name: "Rewilding 1 hectare",
    category: "nature",
    unit: "over 10 years",
    kg_co2: -40000,
    emoji: "🦎",
    description: "Allowing degraded farmland or scrubland to naturally regenerate into forest is one of the highest-impact carbon actions per unit of land — and benefits biodiversity enormously.",
    fun_fact: "Nature is the original carbon capture technology — and it's free, beautiful, and full of birds.",
    tip: "New Zealand's QEII Trust helps protect and restore native ecosystems — worth supporting."
  }

];

// ─── Fun Facts ───────────────────────────────────────────────────

const FUN_FACTS = [
  {
    icon: "✈️",
    fact: "One return long-haul flight (NZ ↔ London) emits more CO₂ than an average NZ person's entire annual carbon footprint from all other activities combined."
  },
  {
    icon: "🥩",
    fact: "If cattle were a country, they'd be the world's third-largest emitter of greenhouse gases — after the US and China."
  },
  {
    icon: "👖",
    fact: "The fashion industry produces more CO₂ per year than all international flights AND shipping combined."
  },
  {
    icon: "🌊",
    fact: "Oceans absorb roughly 25% of all CO₂ emitted by humans — but this is making them more acidic, threatening marine life."
  },
  {
    icon: "🍌",
    fact: "A banana is basically the unit of carbon food — almost everything else can be expressed in 'bananas equivalent' of CO₂."
  },
  {
    icon: "⚡",
    fact: "New Zealand generates ~85% of its electricity from renewables — one of the highest proportions in the world. An EV in NZ is about as green as it gets."
  },
  {
    icon: "🧀",
    fact: "Global food waste accounts for ~8% of all greenhouse gas emissions. If it were a country, it would be the third-largest emitter after the US and China."
  },
  {
    icon: "🚲",
    fact: "Cycling is 10-20x more energy efficient than driving a car, and 3-5x more efficient than walking (per calorie burned)."
  },
  {
    icon: "📱",
    fact: "80% of a smartphone's lifetime carbon footprint is locked in before you even turn it on — in manufacturing and shipping."
  },
  {
    icon: "🌳",
    fact: "To offset just one transatlantic flight, you'd need to plant and protect 265 trees for an entire year. Trees are important — but they're not the answer on their own."
  }
];

// ─── Carbon Equivalents ──────────────────────────────────────────

const CARBON_EQUIVALENTS = [
  { kg: 0.1, desc: "Sending 300 emails with no attachments", emoji: "📧" },
  { kg: 0.3, desc: "Boiling a full kettle (UK grid)", emoji: "🫖" },
  { kg: 0.5, desc: "One cup of black coffee", emoji: "☕" },
  { kg: 1.0, desc: "5 km in a petrol car (solo)", emoji: "🚗" },
  { kg: 1.4, desc: "One litre of cow's milk", emoji: "🥛" },
  { kg: 2.0, desc: "10-minute hot shower (electric)", emoji: "🚿" },
  { kg: 4.5, desc: "One beef hamburger", emoji: "🍔" },
  { kg: 7.0, desc: "A new cotton t-shirt", emoji: "👕" },
  { kg: 9.1, desc: "One T-bone steak", emoji: "🥩" },
  { kg: 11, desc: "A mature tree absorbing CO₂ for a full year", emoji: "🌳" },
  { kg: 21, desc: "Driving 100 km solo in a petrol car", emoji: "🚗" },
  { kg: 33, desc: "Manufacturing a new pair of jeans", emoji: "👖" },
  { kg: 70, desc: "Manufacturing a new smartphone", emoji: "📱" },
  { kg: 95, desc: "One short-haul flight (e.g. Wellington to Auckland)", emoji: "✈️" },
  { kg: 150, desc: "A new mattress", emoji: "🛏️" },
  { kg: 350, desc: "Manufacturing a new laptop", emoji: "💻" },
  { kg: 600, desc: "One Bitcoin transaction", emoji: "₿" },
  { kg: 1800, desc: "One week-long cruise holiday", emoji: "🚢" },
  { kg: 2900, desc: "Auckland → London (return, economy)", emoji: "✈️" },
  { kg: 6000, desc: "Manufacturing a new petrol car", emoji: "🏭" },
];
