import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [priceRange, setPriceRange] = useState([0, 150000]);
  const [condition, setCondition] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");

  const products = [
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

  const accessories = [
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

  const reviews = [
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

  const filteredProducts = products.filter((product) => {
    const matchesCondition =
      condition === "all" || product.condition === condition;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCondition && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Smartphone" size={24} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">iPhone Store</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Главная
              </a>
              <a
                href="#catalog"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Каталог
              </a>
              <a
                href="#accessories"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Аксессуары
              </a>
              <a
                href="#reviews"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Отзывы
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Icon name="ShoppingCart" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Heart" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-gray-50 to-gray-100 py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              iPhone Store
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Новые и б/у iPhone с гарантией качества. Широкий выбор аксессуаров
              и чехлов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                <Icon name="Star" size={20} className="mr-2" />
                Отзывы покупателей
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={24} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Гарантия качества
                </h3>
                <p className="text-gray-600">Все устройства проверены</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={24} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Быстрая доставка
                </h3>
                <p className="text-gray-600">По всей России</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="RefreshCw" size={24} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Трейд-ин</h3>
                <p className="text-gray-600">Обмен старого на новый</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section id="catalog" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Каталог iPhone
          </h2>

          <div className="max-w-4xl mx-auto mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Фильтры</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Состояние
                    </label>
                    <Select value={condition} onValueChange={setCondition}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите состояние" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все</SelectItem>
                        <SelectItem value="new">Новые</SelectItem>
                        <SelectItem value="used">Б/У</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Сортировка
                    </label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue placeholder="Сортировать по" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="popularity">
                          По популярности
                        </SelectItem>
                        <SelectItem value="price-asc">
                          По цене (возр.)
                        </SelectItem>
                        <SelectItem value="price-desc">
                          По цене (убыв.)
                        </SelectItem>
                        <SelectItem value="rating">По рейтингу</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Цена: {priceRange[0].toLocaleString()} -{" "}
                      {priceRange[1].toLocaleString()} ₽
                    </label>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={150000}
                      min={0}
                      step={5000}
                      className="mt-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge
                    variant={
                      product.condition === "new" ? "default" : "secondary"
                    }
                    className="absolute top-2 left-2"
                  >
                    {product.condition === "new" ? "Новый" : "Б/У"}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Icon name="Heart" size={20} />
                  </Button>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>
                    {product.storage} • {product.color}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={16}
                          className={`${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        {product.price.toLocaleString()} ₽
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          {product.originalPrice.toLocaleString()} ₽
                        </span>
                      )}
                    </div>
                    {product.inStock && (
                      <Badge
                        variant="outline"
                        className="text-green-600 border-green-600"
                      >
                        В наличии
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Button className="w-full">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />В
                      корзину
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section id="accessories" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Аксессуары и чехлы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessories.map((accessory) => (
              <Card
                key={accessory.id}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={accessory.image}
                    alt={accessory.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{accessory.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={16}
                          className={`${i < Math.floor(accessory.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {accessory.rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      {accessory.price.toLocaleString()} ₽
                    </span>
                  </div>
                  <Button className="w-full">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />В
                    корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Отзывы покупателей
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={16}
                            className={`${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <CardDescription>{review.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Smartphone" size={24} className="text-blue-400" />
                <h3 className="text-xl font-bold">iPhone Store</h3>
              </div>
              <p className="text-gray-400">
                Лучший выбор iPhone и аксессуаров с гарантией качества.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    iPhone 15 серии
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    iPhone 14 серии
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    iPhone 13 серии
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Б/У устройства
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Аксессуары</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    AirPods
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Зарядные устройства
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Чехлы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Защитные стекла
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@iphonestore.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, 1</span>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 iPhone Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
