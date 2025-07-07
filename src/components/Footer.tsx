import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
  );
};

export default Footer;
