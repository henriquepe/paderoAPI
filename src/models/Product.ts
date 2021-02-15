import mongoose, {Document} from 'mongoose';
import ProductSchema from '../schemas/ProductSchema';

interface ProductProps extends Document {
    name: string;
    price: number;
    quantity: number;
    description: string;
    category: string;
}

const Product = mongoose.model<ProductProps>('Product', ProductSchema);

export default Product;