 import express, { response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT,mongoDBURL } from './config.js';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';

const app = express();

// Middleware for pasrsing request body
app.use(express.json());


//Middleware for handling CORS POLICY
app.use(cors());

app.get('/', (request , response) => {
    console.log(request)
    return response.status(234).send("Kaushik Is A Smart Boy")
})

//Various backend routes 
app.use('/books', booksRoute);



// MongoDB Database Connection
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`App is listening to PORT : ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })