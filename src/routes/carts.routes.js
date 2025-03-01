import { Router } from "express";
import { getCart, createCart, insertProductCart, updateProductCart, updateQuantityProductCart, deleteCart, deleteProductCart } from "../controllers/cart.controller.js";
import { authorization } from "../middlewares/authorization.js";

const cartRouter = Router()

cartRouter.get('/:cid', getCart );
cartRouter.post('/', authorization('user'), createCart );
cartRouter.post('/:cid/products/:pid', authorization('user'), insertProductCart);
cartRouter.put('/:cid', authorization('user'), updateProductCart);
cartRouter.put('/:cid/products/:pid', authorization('user'), updateQuantityProductCart );
cartRouter.delete('/:cid', authorization('user'), deleteCart );
cartRouter.delete('/:cid/products/:pid', authorization('user'), deleteProductCart );

export default cartRouter;