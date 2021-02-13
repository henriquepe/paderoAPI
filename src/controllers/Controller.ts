import Product from '../models/Product';

import { Request, Response } from 'express';

export default class ProductsController {

    async index() {
        try {
            const products = await Product.find()

            return products;
        } catch (err) {
            throw new Error('Sem produtos para listar');
        }
    }

    async create(request: Request, response: Response) {

        const { name, price, category } = request.body;

        try {
            const product = new Product({
                name,
                price,
                category
            });

            await product.save();

            return product;
        } catch (err) {
            return response.json({ error: err.message })
        }

    }

    async listByCategory(request: Request){

        const { category } = request.params;

        const products = await Product.find({category: category});

        console.log(products);

        return products;
        

    }

    async delete(request: Request){
        const {id} = request.params

        const product = await Product.findById(id)

        await Product.remove(product)

        return `Produto ${id} deletado com sucesso`

        
    }


}