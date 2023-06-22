import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

const OrderItemCard = () => {
  return (
    <Card className="flex flex-col items-center justify-center p-2">
      <img
        src="./menuItems/krabbypatty.png"
        alt="Krabby Patty"
        className="object-cover w-[5rem] h-[5rem]"
      />
      <CardTitle>Krabby Patty</CardTitle>
    </Card>
  );
};

export default OrderItemCard;
