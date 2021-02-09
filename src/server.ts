
require('./database');
import express from 'express';
import router from './routes';
import cors from 'cors';


const app = express();


app.use(cors());

app.use(express.json());

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server started on port ${port} 🤖`)
})