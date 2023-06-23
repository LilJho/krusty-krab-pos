import { Card, CardContent } from "../components/ui/card";
import { useAppSelector } from "../hooks/hooks";
import { Badge } from "./ui/badge";

const CartList = () => {
  const cartItems = useAppSelector((state) => state.cart);
  return (
    <Card>
      <CardContent>
        {cartItems.map((item) => (
          <Card className="flex items-center justify-between p-2 m-4">
            <img
              className="w-[4rem] h-[4rem] object-contain"
              src={item.img}
              alt={item.name}
            />
            <p>{item.name}</p>
            <Badge>Price: 2$</Badge>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default CartList;
