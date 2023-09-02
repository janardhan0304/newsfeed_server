import express from "express";
import newsController from '../controller/getNewsController.js'


const route=express.Router();
route.get('/',newsController);
export default route;