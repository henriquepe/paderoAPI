import mongoose from 'mongoose';
import ProductSchema from '../schemas/ProductSchema';

const Product = mongoose.model('Product', ProductSchema);

export default Product;