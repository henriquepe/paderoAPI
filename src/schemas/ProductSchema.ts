import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: String,
    price: Number,
    category: String,
    quantity: { type: Number, default: 1}
})

export default ProductSchema;