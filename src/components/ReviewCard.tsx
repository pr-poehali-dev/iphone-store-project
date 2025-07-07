import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <Card>
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
  );
};

export default ReviewCard;
