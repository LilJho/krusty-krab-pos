import { Card, CardDescription, CardTitle } from "../components/ui/card";
import { ItemsProps } from "./OrderSection";
import { Button } from "./ui/button";
import { useAppDispatch } from "../hooks/hooks";
import { addToCart } from "../lib/store/slice/cartSlice";

interface IOrderItemCard {
  item: ItemsProps;
}

const OrderItemCard = ({ item }: IOrderItemCard) => {
  const dispatch = useAppDispatch();

  return (
    <Card
      key={item.id}
      className="flex flex-col items-center justify-end gap-2 px-2 py-1 text-center"
    >
      <img
        src={item.img}
        alt={item.name}
        className="object-contain w-[5rem] h-[5rem]"
      />
      <CardDescription>Price: ${item.price}</CardDescription>
      <CardTitle className="text-sm">{item.name}</CardTitle>
      <Button
        onClick={() => dispatch(addToCart(item))}
        variant={"outline"}
        size={"sm"}
      >
        Add to cart
      </Button>
    </Card>
  );
};

export default OrderItemCard;
