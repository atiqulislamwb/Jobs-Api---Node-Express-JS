// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const Product = require("./model/productSchema.js");
// const jsonProducts = require("./products.json");

// dotenv.config();
// const connectDB = (url) => {
//   return mongoose.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// };

// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//     await Product.deleteMany();
//     await Product.create(jsonProducts);
//     console.log("success");
//     process.exit(0);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// start();
