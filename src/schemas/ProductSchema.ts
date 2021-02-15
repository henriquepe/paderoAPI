import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    quantity: { type: Number, default: 1}
})

export default ProductSchema;