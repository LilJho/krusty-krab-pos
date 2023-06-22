import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { ItemsProps } from "./OrderSection";

interface IOrderItemCard {
  item: ItemsProps;
}

const OrderItemCard = ({ item }: IOrderItemCard) => {
  return (
    <Card
      key={item.id}
      className="flex flex-col items-center justify-center p-2"
    >
      <img
        src={item.img}
        alt={item.name}
        className="object-contain w-[5rem] h-[5rem]"
      />
      <CardTitle>{item.name}</CardTitle>
    </Card>
  );
};

export default OrderItemCard;
