import { Card, CardTitle } from "../components/ui/card";
import { ItemsProps } from "./OrderSection";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { addToCart } from "../lib/store/slice/cartSlice";

interface IOrderItemCard {
  item: ItemsProps;
}

const OrderItemCard = ({ item }: IOrderItemCard) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  console.log(cart);

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
