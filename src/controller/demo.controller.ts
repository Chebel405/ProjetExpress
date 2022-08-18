import { Request, Response } from 'express';
import { DemoModel } from '../model/demo.model';



export class DemoController {

    private tab = new DemoModel();

    // constructor(tab: Data){
    //     this.tab = tab
    // }


     getString = (req: Request, res: Response) => {
        const data = this.tab.getTab();
         res.render('demo', {data})
         res.send(process.cwd());
     }


     getPage = ( req: Request, res: Response) => {
        res.render('page');
     }

     getTest = (req: Request, res: Response) => {
        const id = req.params.id
        res.render('test', {id}); //afficher
     }

     postString = (req: Request, res: Response ) => {
         res.send(req.body);
     }

    

//ejs : permet de mettre une vue dans une autre vue
//direction - redirection
//Modification


}