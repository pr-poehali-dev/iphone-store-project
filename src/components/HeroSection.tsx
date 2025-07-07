import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
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
            Новые и б/у iPhone с гарантией качества. Широкий выбор аксессуаров и
            чехлов.
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
  );
};

export default HeroSection;
