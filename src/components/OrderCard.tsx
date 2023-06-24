interface IOrderCardProps {
  orderCategory: {
    id: number;
    title: string;
    img: string;
  };
}

const OrderCard = ({ orderCategory }: IOrderCardProps) => {
  return (
    <div className="p-4 rounded-md bg-[#AE9160] flex justify-center items-center flex-col">
      <img
        src={orderCategory.img}
        alt={orderCategory.title}
        className="w-[4rem]"
      />
      <p className="text-base font-medium text-white">{orderCategory.title}</p>
    </div>
  );
};

export default OrderCard;
