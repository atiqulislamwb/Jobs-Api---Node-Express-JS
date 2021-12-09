import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRouter from "./routes/product.js";

import {
  notFoundHandlerMiddleware,
  errorHandlerMiddleware,
} from "./middleware/middleware.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/products", productRouter);

app.use(notFoundHandlerMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;
const DATABASE_URL = process.env.MONGO_URI;

mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
