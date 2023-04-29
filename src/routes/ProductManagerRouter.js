import { Router } from 'express';
import { getProducts, addProduct, getProductById, updateProduct, deleteProduct, deleteAll } from "../controllers/productsController.js"

const pmRouter = Router()

pmRouter.get("/", getProducts)
pmRouter.get("/:pid", getProductById)
pmRouter.post("/", addProduct)
pmRouter.put("/:pid", updateProduct)
pmRouter.delete("/:pid", deleteProduct)
pmRouter.delete("/", deleteAll)

export default pmRouter