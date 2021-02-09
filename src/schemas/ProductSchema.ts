import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: String,
    price: Number,
    category: String,
})

export default ProductSchema;