import express from 'express';
import Product from '../models/Product.js';
import User from '../models/User.js';
import auth from '../middleware/auth.js';


const router = express.Router();


router.get("/", async (req, res) => {
  const { q = "", page = 1 } = req.query;
  const limit = 6;

  const products = await Product.find({
    title: { $regex: q, $options: "i" }
  })
    .skip((page - 1) * limit)
    .limit(limit);

  res.json(products);
});

router.post("/:id/favorite", auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  user.favorites.addToSet(req.params.id);
  await user.save();
  res.json(user.favorites);
});

export default router;