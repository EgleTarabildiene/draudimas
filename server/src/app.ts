import express, {Application, Request, Response} from 'express';
import { skaiciuokleRouter } from './routes/skaiciuokle.router';
import bodyParser from 'body-parser';
import { corsHeaders } from './middlewares/cors.middleware'; 
import { ownersRouter } from './routes/owners.router'; 
import { authRouter } from './routes/auth.router';
import { userRouter } from './routes/user.router';
import path from 'path';
import { ordersRouter } from './routes/orders.router';

const app:Application=express();


app.use(express.urlencoded( {extended:false}));


app.use(express.json());


app.use(corsHeaders);

app.use("/img", express.static( path.join("./img") ));


app.use('/skaiciuokle', skaiciuokleRouter);
app.use('/owners', ownersRouter);
app.use('/auth', authRouter);
app.use("/users", userRouter);
app.use("/orders", ordersRouter);

export {app};