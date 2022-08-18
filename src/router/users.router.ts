import express from "express";
import { UsersController } from "../controller/users.controller";
import { userModel } from "../model/users.model";


//On defini le routeur d'express
const router = express.Router();
const user = new userModel();
const controller = new UsersController(user);

//on defini les routes et les methodes
router.get('/card', controller.getterUser);
router.get('/card/:id', controller.deleteUser);
//router.get('/newUser', controller.addUser);
//router.post('/post/card', controller.addUser);
router.get('/cardDetail', controller.getUserById);




// router.post('/post', controller.postString);
//router.post('/card/:id', controller.PostUser);


//on export le router
export default router;