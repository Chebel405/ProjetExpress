import  demoRouter  from "./router/demo.router";
import express, {Response, Request} from 'express';
import * as path from 'path';
import 'dotenv/config'
import userRouter from './router/users.router'

const app = express();
const port = process.env.PORT

//middleWare (method qui se lance avant les autres)
app.use(express.json());
app.use(express.urlencoded());
app.use(demoRouter);
app.use("/user", userRouter);


//configuration de ejs
//racine du projet et son emplacement
//cwd est une methode qui Renvoie le path du projet
app.set('views', path.join(process.cwd(), 'src/view'));
//Les views
app.set('view engine', 'ejs');


//mise en place de boopstrap
app.use( '/bootstrap', express.static(path.join(process.cwd(),'node_modules/bootstrap/dist/css')));

//mise en place du dossier public
app.use('/public',express.static(path.join(process.cwd(),'src/public' )));




app.listen(port, () => {
    console.log(`serveur lancé sur le port ${port}`);
    
})
