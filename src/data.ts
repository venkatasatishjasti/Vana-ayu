import { Product, Category, Testimonial, Recipe } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'All Products', icon: '🍃' },
  { id: 'nuts', name: 'Nuts', icon: '🥜' },
  { id: 'powders', name: 'Powders', icon: '🌿' },
  { id: 'dryfruits', name: 'Dry Fruits', icon: '🍇' },
  { id: 'flour', name: 'Flour', icon: '🌾' },
  { id: 'homemade', name: 'Homemade', icon: '🏡' }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium California Almonds',
    description: '100% Raw, organic, pesticide-free Californian almonds rich in vitamins and fiber.',
    fullDescription: 'Our organic raw almonds are carefully sourced from family-owned orchards in California. They are sun-dried, non-irradiated, and completely natural. Perfect for snacking, making organic almond milk, or adding a premium crunch to your morning breakfast bowls.',
    price: 14.99,
    category: 'nuts',
    image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    reviewsCount: 124,
    nutrition: {
      'Calories': '163 kcal per oz',
      'Protein': '6g',
      'Healthy Fats': '14g',
      'Fiber': '3.5g',
      'Vitamin E': '37% DV'
    },
    ingredients: ['100% Organic Raw Almonds'],
    origin: 'California, USA',
    weight: '450g (16 oz)',
    inStock: true,
    badge: 'Best Seller'
  },
  {
    id: '2',
    name: 'Organic Whole Cashews',
    description: 'Creamy, sweet, premium raw organic cashews, ideal for snacking or vegan bases.',
    fullDescription: 'Sourced from organic certified farms in India, our whole cashews are raw and unsalted, retaining their natural sweet flavor and creamy texture. They are rich in iron, magnesium, and healthy monosaturated fats.',
    price: 16.99,
    category: 'nuts',
    image: '',
    rating: 4.7,
    reviewsCount: 89,
    nutrition: {
      'Calories': '157 kcal per oz',
      'Protein': '5g',
      'Healthy Fats': '12g',
      'Iron': '11% DV',
      'Magnesium': '20% DV'
    },
    ingredients: ['100% Organic Raw Cashews'],
    origin: 'Kerala, India',
    weight: '450g (16 oz)',
    inStock: true
  },
  {
    id: '3',
    name: 'High-Curcumin Turmeric Powder',
    description: 'Aromatic, hand-ground heirloom turmeric with over 5.5% active curcumin content.',
    fullDescription: 'Grown in the volcanic soils of Lakadong, this ancient variety of turmeric is famous for its exceptionally high curcumin content (above 5.5%), giving it superior therapeutic and anti-inflammatory properties. Hand-harvested and stone-ground to preserve its volatile oils.',
    price: 8.99,
    category: 'powders',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    reviewsCount: 212,
    nutrition: {
      'Curcumin': '5.7%',
      'Active Anti-inflammatory': 'Yes',
      'Pesticides': '0%',
      'Heavy Metals': 'Tested & Absent'
    },
    ingredients: ['100% Pure Lakadong Turmeric Powder'],
    origin: 'Meghalaya, India',
    weight: '200g (7 oz)',
    inStock: true,
    badge: 'Superfood'
  },
  {
    id: '4',
    name: 'Superfine Moringa Leaf Powder',
    description: 'Nutrient-dense green superfood powder milled from shade-dried organic Moringa leaves.',
    fullDescription: 'Often called the "Miracle Tree", our Moringa powder is made from young green leaves harvested at dawn. Shade-dried to retain its deep emerald color and high vitamin, iron, and amino acid profile. Easily mixes into smoothies, oatmeal, and teas.',
    price: 11.49,
    category: 'powders',
    image: 'https://images.unsplash.com/photo-1515252554745-f0e27142439a?auto=format&fit=crop&q=80&w=600',
    rating: 4.6,
    reviewsCount: 76,
    nutrition: {
      'Iron': '25% DV per serving',
      'Vitamin A': '18% DV per serving',
      'Calcium': '15% DV',
      'Antioxidants': 'High'
    },
    ingredients: ['100% Organic Dried Moringa Oleifera Leaves'],
    origin: 'Tamil Nadu, India',
    weight: '150g (5.3 oz)',
    inStock: true
  },
  {
    id: '5',
    name: 'Gluten-Free Foxtail Millet Flour',
    description: 'Ancient heirloom millet grain flour, stone-ground, rich in dietary fiber.',
    fullDescription: 'Our organic Foxtail Millet Flour is made from ancient grains harvested from rain-fed drylands. Stone-ground slowly in small batches, it has a low glycemic index, making it exceptional for gut health, diabetics, and gluten-free baking.',
    price: 6.49,
    category: 'flour',
    image: 'https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?auto=format&fit=crop&q=80&w=600',
    rating: 4.5,
    reviewsCount: 54,
    nutrition: {
      'Calories': '110 kcal per 30g',
      'Fiber': '4.2g (High)',
      'Protein': '3.5g',
      'Glycemic Index': 'Low'
    },
    ingredients: ['100% Organic Foxtail Millet'],
    origin: 'Karnataka, India',
    weight: '1kg (2.2 lbs)',
    inStock: true,
    badge: 'Heirloom Grain'
  },
  {
    id: '6',
    name: 'Traditional Ragi (Finger Millet) Flour',
    description: 'Stone-ground organic sprouted red finger millet, packed with biological calcium.',
    fullDescription: 'Our organic sprouted Ragi flour is the ultimate nutrient powerhouse. Sprouting increases calcium bio-availability and neutralizes phytic acid. Perfect for preparing traditional Ragi malt, porridge, rotis, or healthy infant food.',
    price: 5.99,
    category: 'flour',
    image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    reviewsCount: 143,
    nutrition: {
      'Calcium': '344mg per 100g (3x Milk)',
      'Iron': 'High bio-availability',
      'Protein': '7.3g',
      'Dietary Fiber': '11.5g'
    },
    ingredients: ['100% Organic Sprouted Finger Millet'],
    origin: 'Andhra Pradesh, India',
    weight: '1kg (2.2 lbs)',
    inStock: true,
    badge: 'Sprouted'
  },
  {
    id: '7',
    name: 'Organic Medjool Dates',
    description: 'Jumbo-sized, soft, caramel-like organic Medjool dates with zero preservatives.',
    fullDescription: 'These premium organic Medjool dates are hand-picked from organic desert palms. They are plump, moist, and possess an exquisite rich caramel-like flavor. An ideal pre-workout energy fuel and natural replacement for processed sugar.',
    price: 12.99,
    category: 'dryfruits',
    image: 'https://images.unsplash.com/photo-1596515133036-748981f421ca?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    reviewsCount: 165,
    nutrition: {
      'Calories': '66 kcal per date',
      'Potassium': '167mg',
      'Fiber': '1.6g',
      'Added Sugar': '0g'
    },
    ingredients: ['100% Organic Medjool Dates with pits'],
    origin: 'California, USA',
    weight: '500g (17.6 oz)',
    inStock: true,
    badge: 'Premium'
  },
  {
    id: '8',
    name: 'Sun-Dried Golden Raisins',
    description: 'Naturally sweet, sun-dried organic raisins without any sulfur dioxide treatment.',
    fullDescription: 'Our organic golden raisins are dried under natural sunlight. Most commercial raisins are treated with toxic sulfur dioxide to retain their yellow color, but our process is entirely chemical-free, resulting in a healthy, deep golden snack packed with antioxidants.',
    price: 7.49,
    category: 'dryfruits',
    image: 'https://images.unsplash.com/photo-1618213837799-25d55524f676?auto=format&fit=crop&q=80&w=600',
    rating: 4.5,
    reviewsCount: 47,
    nutrition: {
      'Calories': '120 kcal per 40g',
      'Potassium': '310mg',
      'Antioxidants': 'Resveratrol rich',
      'Sulfites': '0%'
    },
    ingredients: ['100% Organic Sun-Dried Seedless Grapes'],
    origin: 'Nashik, India',
    weight: '350g (12.3 oz)',
    inStock: true
  },
  {
    id: '9',
    name: 'Traditional Mango & Lime Pickle',
    description: 'Homemade spicy heirloom recipe preserved in cold-pressed mustard oil.',
    fullDescription: 'Following a 100-year-old traditional family recipe from rural India, this pickle combines raw green mangoes and juicy limes with stone-crushed spices. It is cured naturally under the summer sun for 21 days and preserved exclusively in pure cold-pressed mustard oil.',
    price: 9.99,
    category: 'homemade',
    image: 'https://images.unsplash.com/photo-1589113198533-3ef2478f773b?auto=format&fit=crop&q=80&w=600',
    rating: 4.7,
    reviewsCount: 112,
    nutrition: {
      'Preservatives': 'None (Oil-preserved)',
      'Artificial Colors': '0%',
      'Probiotic Potential': 'Naturally fermented',
      'Sodium': 'Traditional level'
    },
    ingredients: ['Raw Mango', 'Lime', 'Cold-pressed Mustard Oil', 'Heirloom Spice Blend', 'Sea Salt', 'Fenugreek', 'Asafoetida'],
    origin: 'Rajasthan, India',
    weight: '400g (14.1 oz)',
    inStock: true,
    badge: 'Artisanal'
  },
  {
    id: '10',
    name: 'Wood-Fired A2 Vedic Ghee',
    description: 'Ancient Bilona method A2 cow ghee, clarified over slow firewood pits.',
    fullDescription: 'This is not standard butter-oil. Our ghee is crafted using the ancient Vedic "Bilona" method: fresh milk from indigenous grass-fed A2 cows is cultured into curd, churned bi-directionally to extract butter, and then slow-boiled over clay-stove firewood fires. Rich, granular texture with an unforgettable nostalgic aroma.',
    price: 19.99,
    category: 'homemade',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&q=80&w=600',
    rating: 5.0,
    reviewsCount: 318,
    nutrition: {
      'Butyric Acid': 'High (Gut restorative)',
      'Casein & Lactose': '0g (Safe for sensitive guts)',
      'Omega-3 & Omega-9': 'Optimally balanced',
      'Vitamins': 'A, D, E, K soluble'
    },
    ingredients: ['100% Clarified Butterfat from Grass-Fed A2 Curd'],
    origin: 'Gujarat, India',
    weight: '500ml (17 fl oz)',
    inStock: true,
    badge: '100% Vedic Bilona'
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'natural',
    title: '100% Natural',
    description: 'Absolutely zero chemical additives, coloring agents, or synthetic stabilizers.',
    icon: '🌱'
  },
  {
    id: 'preservatives',
    title: 'No Preservatives',
    description: 'Naturally preserved using old-world methods like oil curing and sun drying.',
    icon: '🚫'
  },
  {
    id: 'fresh',
    title: 'Farm Fresh',
    description: 'Sourced directly from certified organic farms, maintaining pristine supply chain custody.',
    icon: '🚜'
  },
  {
    id: 'certified',
    title: 'Quality Certified',
    description: 'Strictly tested for pesticides and heavy metals with complete batch transparency.',
    icon: '🏅'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Certified Integrative Nutritionist',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    review: "As a nutritionist, finding true unadulterated organic products is incredibly challenging. Asha Synergy's Lakadong Turmeric and sprouted Ragi flour are unmatched in purity. My patients see wonderful digestive improvements with their wood-fired A2 Ghee.",
    rating: 5
  },
  {
    id: 't2',
    name: 'Rajesh Kumar',
    role: 'Ashtanga Yoga Instructor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    review: "I recommend Asha Synergy's almonds and dry fruits to all my yoga practitioners. They provide stable, clean energy throughout the day. You can taste the connection to the soil and traditional handcrafting in every bite.",
    rating: 5
  },
  {
    id: 't3',
    name: 'Dr. Elena Rostova',
    role: 'Wellness Researcher & Home Chef',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    review: "The taste of their Wood-Fired A2 Ghee transported me back to grandmother's farm. It has a beautiful rich, granular texture and sweet nutty aroma that you simply cannot get with industrial pressure-cooker ghee. Superb quality!",
    rating: 5
  }
];

export const RECIPES: Recipe[] = [
  {
    id: 'r1',
    title: 'Immunity Boosting Turmeric Golden Milk',
    category: 'Traditional Cooking',
    image: 'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?auto=format&fit=crop&q=80&w=600',
    time: '10 mins',
    difficulty: 'Easy',
    summary: 'A comforting, warm Ayurvedic beverage infused with our high-curcumin turmeric, black pepper, and healthy fats.',
    ingredients: [
      '2 cups Organic whole milk or almond milk',
      '1 tsp Asha Synergy Lakadong Turmeric Powder',
      '1/2 tsp Asha Synergy Wood-Fired Ghee',
      'A pinch of freshly cracked black pepper (essential for curcumin absorption)',
      '1/4 tsp Ground cardamom or small cinnamon stick',
      '1 tsp Raw organic honey (add after milk cools slightly)'
    ],
    instructions: [
      'In a small saucepan, combine the milk, turmeric powder, wood-fired ghee, black pepper, and cinnamon stick.',
      'Whisk well and bring to a gentle simmer over medium-low heat. Do not let it boil over.',
      'Simmer gently for 5 minutes until the spices are fully infused and fragrant.',
      'Remove from heat, strain into your favorite mug, and let it cool to a warm temperature.',
      'Stir in raw honey and drink before bed for maximum recovery.'
    ],
    author: 'Acharya Vasant',
    date: 'July 5, 2026'
  },
  {
    id: 'r2',
    title: 'Spiced Sprouted Ragi Porridge Bowl',
    category: 'Healthy Recipes',
    image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&q=80&w=600',
    time: '15 mins',
    difficulty: 'Easy',
    summary: 'A highly nutritive, calcium-rich traditional morning breakfast bowl perfect for deep, sustained daily focus.',
    ingredients: [
      '3 tbsp Asha Synergy Sprouted Ragi Flour',
      '1.5 cups Water or raw milk of choice',
      '3 organic Medjool Dates, chopped (for natural sweetening)',
      '1/2 tsp Asha Synergy Wood-Fired Ghee',
      '1 tbsp Asha Synergy California Almonds, sliced',
      'A pinch of dry ginger and cardamom powder'
    ],
    instructions: [
      'In a small bowl, whisk sprouted Ragi flour with 1/2 cup of room temperature water to make a smooth slurry with zero lumps.',
      'Bring the remaining water/milk to a boil in a heavy-bottomed pot.',
      'Slowly pour the Ragi slurry into the boiling water while whisking continuously to prevent lumps.',
      'Cook on a low flame for 6-8 minutes, stirring frequently. The ragi will thicken and develop a beautiful glossy finish.',
      'Add chopped dates, cardamom, and dry ginger powder. Cook for 2 more minutes.',
      'Pour into a bowl, swirl a spoonful of wood-fired Ghee over it, top with sliced almonds, and enjoy warm.'
    ],
    author: 'Nourish Kitchen',
    date: 'June 28, 2026'
  },
  {
    id: 'r3',
    title: 'Energy-Packed Moringa Dates Energy Balls',
    category: 'Nutrition Tips',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80&w=600',
    time: '20 mins',
    difficulty: 'Medium',
    summary: 'No-bake natural superfood snack balls combining organic Medjool dates, Cashews, and Moringa green powder.',
    ingredients: [
      '1 cup Asha Synergy Medjool Dates, pitted',
      '3/4 cup Asha Synergy Whole Cashews',
      '1.5 tbsp Asha Synergy Superfine Moringa Leaf Powder',
      '2 tbsp Sun-Dried Golden Raisins',
      '1 tbsp Wood-Fired Vedic Ghee',
      'Desiccated organic coconut flakes (for rolling)'
    ],
    instructions: [
      'In a food processor, pulse raw cashews until they are finely chopped into coarse crumbs.',
      'Add pitted Medjool dates, wood-fired ghee, and superfine Moringa powder.',
      'Process until the mixture clumps together in a cohesive, sticky paste.',
      'Fold in the sun-dried golden raisins by hand to preserve their texture.',
      'Roll into small bite-sized balls (approx. 1 inch diameter) using your palms.',
      'Roll the finished balls in desiccated coconut flakes for a gorgeous outer layer.',
      'Store in an airtight container in the fridge for up to 3 weeks for an instant daily energy lift.'
    ],
    author: 'Dr. Elena Rostova',
    date: 'June 14, 2026'
  }
];
