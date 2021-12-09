import express from "express";
import { getAllProducts, getAllStaticProducts } from "../controller/product.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/static", getAllStaticProducts);

export default router;
