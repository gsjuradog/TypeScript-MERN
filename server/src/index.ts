import express, {Application} from 'express';
import connect from './models/connect';
import cors from 'cors';
import morgan from 'morgan';
import config from './config';


const app:Application = express();
const port:number = 3003 || process.env.PORT;
const db:string = `mongob://${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DATABASE}`;

connect(db);
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.listen(port, ()=>{
  console.log(`server listening on port ${port}`)
})