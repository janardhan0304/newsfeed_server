import express from 'express';
import newsRoute from './routes/newsRoute.js';
import cors from 'cors';



const app=express();
app.use(cors());
app.use('/news',newsRoute)
export default app