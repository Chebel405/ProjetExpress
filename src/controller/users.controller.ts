import { userModel } from './../model/users.model';
import { Request, Response} from 'express';
import axios from "axios";



export class UsersController{

    private user:userModel;
        

    constructor(user: userModel){
        this.user=user
    }
   
    getterUser = async (req: Request, res: Response) => {
        const users = await this.user.getUser().then((resum: any) => resum.data);
        //console.log(users[0]);
        res.render('card', {users})

            
        }
        getUserById = async (req: Request, res: Response) => {
            const id = req.params.id;
            const userId = await  this.user.getUserById(id).then((resum:any) => resum.data);
            //console.log(userId[1]);
            res.render('cardDetail', {userId});


        }
    
    deleteUser = async (req: Request, res: Response) => {
        const id = req.params.id;
        const users = await this.user.deleteUser(id);
        res.redirect('/user/card');        
        }

    addUser = async (req: Request, res: Response) => {
        const username = req.body.username;
        const name = req.body.name;
        const email = req.body.email;
        const address = req.body.address;

        const users = await this.user.addUser().then((resum: any) => resum.data);
         //console.log(users[0]);
        res.render('user/post/card', {users});

    }

  
}


