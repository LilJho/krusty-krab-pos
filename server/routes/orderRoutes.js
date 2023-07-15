import express from "express";
import * as dotenv from "dotenv";

import OrdersData from "../mongodb/models/ordersData.js";

dotenv.config();

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const ordersData = await OrdersData.find({});

    res.status(200).json({ success: true, data: ordersData });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

router.route("/").post(async (req, res) => {
  try {
    const order = req.body;
    const newOrder = await OrdersData.create(order);

    res.status(201).json({ success: true, data: newOrder });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

export default router;
