import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import morgan from 'morgan'

import authRouter from './routes/authRouter.js'
import gigRouter from './routes/gigRouter.js'

// Configurations
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({origin:"http://localhost:3000", credential:true}));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', authRouter);
app.use('/gigs', gigRouter);

const PORT = process.env.PORT || 8200;
const DATABASE_LOCAL = process.env.DATABASE_LOCAL;

mongoose.connect(DATABASE_LOCAL).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
}).catch((error) => console.log(`did not connect ${error}`));


