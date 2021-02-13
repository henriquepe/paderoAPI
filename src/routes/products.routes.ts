import { Router } from 'express';

const productsRouter = Router();

import Controller from '../controllers/Controller';

const controller = new Controller();


productsRouter.post('/', async (request, response) => {



    const product = await controller.create(request, response);

    return response.json(product)

})

productsRouter.get('/', async (request, response) => {

    const products = await controller.index();

    return response.json(products)

})

productsRouter.get("/:category", async(request, response) => {

    const products = await controller.listByCategory(request);

    return response.status(200).json(products);

})

productsRouter.delete('/:id', async(request, response) => {
    const messageResponse = await controller.delete(request)

    return response.status(200).json({message: messageResponse})


})




export default productsRouter;