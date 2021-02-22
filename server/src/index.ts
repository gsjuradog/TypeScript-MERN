import express, {Application} from 'express';
import connect from './models/connect';
import cors from 'cors';
import morgan from 'morgan';
import config from './config';


const app:Application = express();
const port:number|string = config.SERVER_PORT;
const hostname:string = config.HOST;
const db:string = config.MONGO_ATLAS_URI_STRING || `mongodb://${config.HOST}:${config.MONGO_PORT}/${config.MONGO_DATABASE}`;

connect(db);
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.listen(port, ()=>{
  console.log(`server listening on http://${hostname}:${port}`)
})