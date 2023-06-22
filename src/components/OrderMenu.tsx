import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import OrderItemCard from "./OrderItemCard";
import { ItemsProps } from "./OrderSection";

interface IOrderMenuProps {
  items: ItemsProps[];
}

const OrderMenu = ({ items }: IOrderMenuProps) => {
  return (
    <Card className="m-4">
      <CardHeader className="text-center">
        <CardTitle>Burgers</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-3 gap-2">
          {items.map((item) => (
            <OrderItemCard item={item} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default OrderMenu;
