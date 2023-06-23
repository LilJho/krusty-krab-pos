import { Card, CardContent } from "../components/ui/card";
import { useAppSelector, useAppDispatch } from "../hooks/hooks";
import { removeFromCart } from "../lib/store/slice/cartSlice";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { MdDeleteOutline } from "react-icons/md";
import NodataSvg from "../assets/nodata.svg";

const CartList = () => {
  const cartItems = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <Card>
      <CardContent>
        {cartItems.length === 0 ? (
          <Card className="mt-4">
            <CardContent className="flex flex-col items-center justify-center">
              <img src={NodataSvg} alt="No data Picture" />
              <p>No Data Found...</p>
            </CardContent>
          </Card>
        ) : (
          cartItems.map((item) => (
            <Card className="flex items-center justify-between p-2 m-4">
              <img
                className="w-[4rem] h-[4rem] object-contain"
                src={item.img}
                alt={item.name}
              />
              <p>{item.name}</p>
              <Badge>Price: 2$</Badge>
              <Button
                variant={"outline"}
                onClick={() => dispatch(removeFromCart(item))}
              >
                <MdDeleteOutline />
              </Button>
            </Card>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default CartList;
