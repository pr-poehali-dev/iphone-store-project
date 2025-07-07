import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { FilterState } from "@/types";

interface ProductFilterProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

const ProductFilter = ({ filters, onFiltersChange }: ProductFilterProps) => {
  const handleConditionChange = (condition: "all" | "new" | "used") => {
    onFiltersChange({ ...filters, condition });
  };

  const handleSortChange = (
    sortBy: "popularity" | "price-asc" | "price-desc" | "rating",
  ) => {
    onFiltersChange({ ...filters, sortBy });
  };

  const handlePriceChange = (priceRange: [number, number]) => {
    onFiltersChange({ ...filters, priceRange });
  };

  return (
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
              <Select
                value={filters.condition}
                onValueChange={handleConditionChange}
              >
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
              <Select value={filters.sortBy} onValueChange={handleSortChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Сортировать по" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">По популярности</SelectItem>
                  <SelectItem value="price-asc">По цене (возр.)</SelectItem>
                  <SelectItem value="price-desc">По цене (убыв.)</SelectItem>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Цена: {filters.priceRange[0].toLocaleString()} -{" "}
                {filters.priceRange[1].toLocaleString()} ₽
              </label>
              <Slider
                value={filters.priceRange}
                onValueChange={handlePriceChange}
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
  );
};

export default ProductFilter;
