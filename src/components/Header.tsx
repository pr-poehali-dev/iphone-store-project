import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
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
  );
};

export default Header;
