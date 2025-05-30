import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import cookeParser from 'cookie-parser'
import router from './app/routes';
import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorhandler';

const app:Application = express();

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(cookeParser())

app.get('/',(req:Request,res:Response)=>{
    res.send({
        message:"Bike Serviceing"
    })
})


app.use('/api',router)

app.use(globalErrorHandler)

app.use(notFound)


export default app;
