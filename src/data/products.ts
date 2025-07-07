import { Product, Accessory, Review } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 129990,
    originalPrice: 139990,
    condition: "new",
    image: "/img/3a0e99ea-57a1-46ab-b6cd-2f93e64ccd23.jpg",
    storage: "256GB",
    color: "Титан",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 2,
    name: "iPhone 14 Pro",
    price: 89990,
    originalPrice: 99990,
    condition: "used",
    image: "/img/3a0e99ea-57a1-46ab-b6cd-2f93e64ccd23.jpg",
    storage: "128GB",
    color: "Глубокий фиолетовый",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 3,
    name: "iPhone 13",
    price: 59990,
    originalPrice: 69990,
    condition: "used",
    image: "/img/3a0e99ea-57a1-46ab-b6cd-2f93e64ccd23.jpg",
    storage: "128GB",
    color: "Розовый",
    rating: 4.7,
    inStock: true,
  },
];

export const accessories: Accessory[] = [
  {
    id: 1,
    name: "AirPods Pro (2-го поколения)",
    price: 24990,
    image: "/img/f2c8ff45-1ea3-43e9-a428-8b83bfce5fa6.jpg",
    rating: 4.9,
  },
  {
    id: 2,
    name: "MagSafe зарядное устройство",
    price: 4990,
    image: "/img/f2c8ff45-1ea3-43e9-a428-8b83bfce5fa6.jpg",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Чехол iPhone 15 Pro Max",
    price: 2990,
    image: "/img/f2c8ff45-1ea3-43e9-a428-8b83bfce5fa6.jpg",
    rating: 4.5,
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    name: "Александр М.",
    rating: 5,
    text: "Отличный магазин! Купил iPhone 15 Pro, всё как описано. Быстрая доставка.",
    date: "2 дня назад",
  },
  {
    id: 2,
    name: "Мария К.",
    rating: 5,
    text: "Покупала б/у iPhone 14, состояние превосходное. Рекомендую!",
    date: "1 неделя назад",
  },
  {
    id: 3,
    name: "Дмитрий П.",
    rating: 4,
    text: "Хорошие цены на аксессуары. Взял AirPods и чехол.",
    date: "2 недели назад",
  },
];
