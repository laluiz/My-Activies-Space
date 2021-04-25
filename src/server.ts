import express from 'express' ;
import './database';
import cors from 'cors' ;
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
// pull request
app.listen(3333, () => console.log("Server Started"));