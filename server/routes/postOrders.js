const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const router = express.Router();

// GET ALL ORDERS DATA
router.route("/").get(async (req, res) => {
  // GET ALL ORDERS DATA
});

// CREATE ORDERS DATA
router.route("/").post(async (req, res) => {
  // CREATE ORDERS DATA
});
