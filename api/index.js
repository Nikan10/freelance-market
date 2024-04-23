import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

import authRouter from './routes/authRouter.js'
import gigRouter from './routes/gigRouter.js'
import userRouter from './routes/userRouter.js'

// Configurations
dotenv.config();

const app = express();

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"

    return res.status(errorStatus).send(errorMessage)
})

app.use(cors({ origin:"http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser())
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', authRouter);
app.use('/gigs', gigRouter);
app.use('/users', userRouter);

const PORT = process.env.PORT || 8200;
const DATABASE_LOCAL = process.env.DATABASE_LOCAL;

mongoose.connect(DATABASE_LOCAL).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
}).catch((error) => console.log(`did not connect ${error}`));


