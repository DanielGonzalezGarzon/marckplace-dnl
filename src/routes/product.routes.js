const { Router } = require("express");
const router = Router();
const Product = require("../models/product");
//tenemos que conectar nuestro model correspondiente

router.get("/", async (req, res) => {
    try {
      const allProducts = await User.find();

      console.log(allProducts);
      res.status(200).json(allProducts);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
