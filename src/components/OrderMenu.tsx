import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import OrderItemCard from "./OrderItemCard";
import { ItemsProps } from "./OrderSection";

interface IOrderMenuProps {
  items: ItemsProps[];
  title: string;
}

const OrderMenu = ({ items, title }: IOrderMenuProps) => {
  return (
    <Card className="border-none ">
      <CardHeader className="text-center">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-2 gap-2 lg:grid-cols-3">
          {items.map((item) => (
            <OrderItemCard item={item} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default OrderMenu;
