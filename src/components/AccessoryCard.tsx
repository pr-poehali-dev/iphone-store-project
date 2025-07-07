import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Accessory } from "@/types";

interface AccessoryCardProps {
  accessory: Accessory;
}

const AccessoryCard = ({ accessory }: AccessoryCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
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
          <span className="text-sm text-gray-600 ml-2">{accessory.rating}</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-gray-900">
            {accessory.price.toLocaleString()} ₽
          </span>
        </div>
        <Button className="w-full">
          <Icon name="ShoppingCart" size={16} className="mr-2" />В корзину
        </Button>
      </CardContent>
    </Card>
  );
};

export default AccessoryCard;
