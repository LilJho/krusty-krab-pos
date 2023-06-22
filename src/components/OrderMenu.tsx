import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import OrderItemCard from "./OrderItemCard";

const OrderMenu = () => {
  return (
    <Card className="m-4">
      <CardHeader className="text-center">
        <CardTitle>Burgers</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-3 gap-2">
          <li>
            <OrderItemCard />
          </li>
          <li>
            <OrderItemCard />
          </li>
          <li>
            <OrderItemCard />
          </li>
          <li>
            <OrderItemCard />
          </li>
          <li>
            <OrderItemCard />
          </li>
          <li>
            <OrderItemCard />
          </li>
          <li>
            <OrderItemCard />
          </li>
          <li>
            <OrderItemCard />
          </li>
          <li>
            <OrderItemCard />
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default OrderMenu;
