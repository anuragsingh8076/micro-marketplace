import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Product from "./models/Product.js";
import User from "./models/User.js";

dotenv.config();
await mongoose.connect(process.env.MONGO_URI);

await Product.deleteMany();
await User.deleteMany();

await Product.insertMany(
  Array.from({ length: 10 }).map((_, i) => ({
    title: `Product ${i + 1}`,
    price: (i + 1) * 10,
    description: "Sample product",
    image: "https://picsum.photos/300"
  }))
);

await User.create([
  { email: "user1@test.com", password: await bcrypt.hash("123456", 10) },
  { email: "user2@test.com", password: await bcrypt.hash("123456", 10) }
]);

console.log("Seeded database");
process.exit();