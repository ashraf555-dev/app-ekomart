/**
 * Static product catalog. Backend-ready shape: id, title, price, image, category, stock, description, weight?, oldPrice?.
 * Replace with API call when backend is available.
 */
export const PRODUCTS = [
  {
    id: 1,
    title: "Organic Whole Grain Biscuits",
    price: 29.0,
    oldPrice: 36.0,
    image: "https://i.ibb.co/84gRryQS/07.png",
    category: "Biscuits & Snacks",
    stock: 50,
    weight: "500g Pack",
    description: "Premium organic whole grain biscuits, 500g pack. No artificial additives.",
  },
  {
    id: 2,
    title: "Firebase Premium Snack Box",
    price: 50.0,
    oldPrice: 36.0,
    image: "https://i.ibb.co/v4Vz3FZ6/20.jpg",
    category: "Biscuits & Snacks",
    stock: 30,
    weight: "500g Pack",
    description: "Assorted organic snacks, 500g pack. Perfect for on-the-go.",
  },
  {
    id: 3,
    title: "Netlyfy Crunchy Chips",
    price: 19.0,
    oldPrice: 36.0,
    image: "https://i.ibb.co/9HvvKhZb/21.jpg",
    category: "Chips & Snacks",
    stock: 80,
    weight: "500g Pack",
    description: "Lightly salted organic potato chips, 500g pack.",
  },
  {
    id: 4,
    title: "Organic Juice 6-Pack",
    price: 90.0,
    oldPrice: 36.0,
    image: "https://i.ibb.co/ycBMBkbY/01-2.png",
    category: "Biscuits & Snacks",
    stock: 24,
    weight: "6 Packs",
    description: "Mixed fruit organic juice, 6 packs. No added sugar.",
  },
  {
    id: 5,
    title: "Healthy Grain Cereal",
    price: 45.0,
    oldPrice: 55.0,
    image: "https://i.ibb.co/GvzsVrjn/22.jpg",
    category: "Breakfast & Dairy",
    stock: 40,
    weight: "750g",
    description: "High-fiber organic cereal, 750g. Start your day right.",
  },
  {
    id: 6,
    title: "Organic Honey Jar",
    price: 22.0,
    oldPrice: 28.0,
    image: "https://i.ibb.co/sdy4h85q/18.jpg",
    category: "Grocery & Staples",
    stock: 60,
    weight: "350g",
    description: "Pure organic honey, 350g. Sourced from local beekeepers.",
  },
  {
    id: 7,
    title: "Best-one Protein Bars",
    price: 120.0,
    oldPrice: 145.0,
    image: "https://i.ibb.co/8n1w6RZV/23.jpg",
    category: "Chips & Snacks",
    stock: 35,
    weight: "1kg",
    description: "Protein-packed organic bars, 1kg pack. Ideal for fitness.",
  },
  {
    id: 8,
    title: "Netlyfy Organic Crackers",
    price: 65.0,
    oldPrice: 80.0,
    image: "https://i.ibb.co/DDPsktqT/17.jpg",
    category: "Chips & Snacks",
    stock: 45,
    weight: "750g Pack",
    description: "Crispy organic crackers, 750g pack. Great with cheese.",
  },
  {
    id: 9,
    title: "Organic Dried Fruits",
    price: 40.0,
    oldPrice: 55.0,
    image: "https://i.ibb.co/NgXC6DB9/19.jpg",
    category: "Biscuits & Snacks",
    stock: 55,
    weight: "50 Pieces",
    description: "Mixed dried fruits, 50 pieces. No preservatives.",
  },
  {
    id: 10,
    title: "Cold-Pressed Olive Oil",
    price: 55.0,
    oldPrice: 70.0,
    image: "https://i.ibb.co/3yvsbqj2/04-2.png",
    category: "Breads & Bakery",
    stock: 20,
    weight: "1L Bottle",
    description: "Extra virgin organic olive oil, 1L bottle.",
  },
  {
    id: 11,
    title: "Organic Almond Butter",
    price: 38.0,
    oldPrice: 45.0,
    image: "https://i.ibb.co/v4Vz3FZ6/20.jpg",
    category: "Breakfast & Dairy",
    stock: 25,
    weight: "400g",
    description: "Smooth organic almond butter, 400g jar.",
  },
  {
    id: 12,
    title: "Whole Wheat Pasta",
    price: 18.0,
    oldPrice: 24.0,
    image: "https://i.ibb.co/9HvvKhZb/21.jpg",
    category: "Grocery & Staples",
    stock: 100,
    weight: "500g",
    description: "Organic whole wheat pasta, 500g. Italian style.",
  },
];

/**
 * Fetches products. For static data returns PRODUCTS; later replace with API.
 * @returns {Promise<typeof PRODUCTS>}
 */
export async function getProducts() {
  return Promise.resolve(PRODUCTS);
}

/**
 * Fetches a single product by id. For static data looks up in PRODUCTS; later replace with API.
 * @param {number} id
 * @returns {Promise<typeof PRODUCTS[0] | null>}
 */
export async function getProductById(id) {
  const product = PRODUCTS.find((p) => p.id === Number(id));
  return Promise.resolve(product ?? null);
}
