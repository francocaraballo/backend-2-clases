import { Schema, model } from "mongoose";
import cartModel from "./cart.model.js";

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        default: "User"
    }
});

userSchema.post("save", async function name(userCreated) {
    try {
        const newCart = await cartModel.create({products: []})
        userCreated.cart = newCart._id //Referencio el id del carrito con el usuario
        const mensaje = await userCreated.save()
        console.log(mensaje);
        
    } catch(e) {
        console.log(e);
        
    }
})

const userModel = model("users", userSchema);

export default userModel;