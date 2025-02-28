const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/ecommerce", { useNewUrlParser: true, useUnifiedTopology: true });

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
});

const Product = mongoose.model("Product", ProductSchema);

app.get("/api/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.listen(5000, () => console.log("Server running on port 5000"));
