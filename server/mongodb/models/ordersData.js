import mongoose from "mongoose";

const OrdersItemSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, required: true },
});

const OrderDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  order: { type: [OrdersItemSchema], required: true },
});

const OrderData = mongoose.model("OrderData", OrderDataSchema);

export default OrderData;
