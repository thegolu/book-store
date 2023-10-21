import express, { Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('/', (_: Request, res: Response) => {
    res.send('HEllo yes');
})

app.listen(PORT, () => {
    console.log('Listening at', PORT);
})