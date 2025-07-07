import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <Badge
          variant={product.condition === "new" ? "default" : "secondary"}
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
          <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
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
            <Icon name="ShoppingCart" size={16} className="mr-2" />В корзину
          </Button>
          <Button variant="outline" className="w-full">
            <Icon name="Eye" size={16} className="mr-2" />
            Подробнее
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
