import express from "express";
import { DemoController } from "../controller/demo.controller";
import { DemoModel } from "../model/demo.model";


//On defini le routeur d'express
const router = express.Router();
const model = new DemoModel();

const controller = new DemoController();


//on defini les routes et les methodes
router.get('/', controller.getString);
router.get('/page', controller.getPage);
router.get('/test/:id', controller.getTest);
router.post('/post', controller.postString);

//on export le router
export default router;